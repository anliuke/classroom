<template>
    <div class="shiXunInfo">
        <!-- 导航栏 -->
        <CommonHeader :title="title"></CommonHeader>
        <!-- 主体富文本 -->
        <Main :fuWenContent='fuWenContent'></Main>
        <!-- 按钮 -->
        <div class="footer flex alignCneter justifyCenter" v-if="shiXunInfo.is_pay == 0" @click="payJoinShiEmit">
            <div class="footer_inner flex alignCneter justifyCenter">
                <span >原价{{ shiXunInfo.enroll_price }}元，现价{{shiXunInfo.enroll_price_discount }}元加入训练营</span>
            </div>
        </div>
        <div  v-else-if="shiXunInfo.is_pay == 1" class="footer flex alignCneter justifyCenter" @click="paySuccessEmit">
            <div class="footer_inner flex alignCneter justifyCenter">
                <span >您已报名成功，点这里，添加客服微信:gsshixunying</span>
            </div>
        </div>
        <!-- 报名成功弹窗 -->
        <MessageBoxSuccess :condition_baoSuccess='condition_baoSuccess'></MessageBoxSuccess>
        <!-- 活动结束弹窗 -->
       <MessageBoxActiveJie :condition_activeEnd='condition_activeEnd'></MessageBoxActiveJie>
        <!-- 活动未开放弹窗 -->
        <MessageBoxActiveWei :condition_activeWei='condition_activeWei'></MessageBoxActiveWei>

    </div>
</template>

<script>
import { MessageBox } from 'mint-ui'
import { getKeChengInfo } from '@/api/kecheng.js'
import { shiXunPay } from '@/api/pay.js'


import CommonHeader from '@/component/CommonHeader';
import Main from './modules/Main';
import MessageBoxActiveJie from './modules/MessageBoxActiveJie';
import MessageBoxActiveWei from './modules/MessageBoxActiveWei';
import MessageBoxSuccess from './modules/MessageBoxSuccess';

export default {
    name: 'shiXunInfo',
    components:  {
        CommonHeader,
        Main,
        MessageBoxActiveJie,
        MessageBoxActiveWei,
        MessageBoxSuccess
    },
    data () {
        return {
            title: '',
            keChengId: 0,
            shiXunInfo: {},
            condition_baoSuccess: false,
            condition_activeEnd: false,  // 活动结束弹窗
            condition_activeWei: false,  // 活动未开放弹窗
            activeDay: 0,  // 活动开始时间和当前时间相比
            fuWenContent: '',  // 富文本课程数组
            appid: '',
        }
    },

    methods: {

        // 获取实训营数据
        getShiXunYingEmit() {
            var t = this.$t.getTime();
            var sgText = this.appid + t + "shiniu_tkjidi"; 
            var sign = this.$md5(sgText); 
            getKeChengInfo({
                id: this.keChengId,
                app_id: this.appid,
                sign: sign,
                t: t
            }).then((res) => {
                if (res.data != null) {
                    this.shiXunInfo = res.data.info;
                    this.title = res.data.info.name;
                    
                    // 获取课程内容
                    if (this.shiXunInfo.course_info != false && this.shiXunInfo.course_info != null) {
                        this.fuWenContent = this.shiXunInfo.course_info;
                    }
                    // 计算时间  
                    if (this.shiXunInfo.start_at != null) {
                        // 活动开始时间
                        var startTime = this.shiXunInfo.start_at;
                        var s2 = new Date(startTime.replace(/-/g,'/')).getTime()/1000;
                        // 获取时间转化为时间戳格式，进行计算
                        var s1 = this.$t.getTime();
                        var total = s1 - s2;
                        //计算整数天数
                        this.activeDay = parseInt(total / (24*60*60));
                    }

                }
            })
        },

        // 点击加入实训营事件 -- 支付事件
        payJoinShiEmit() {
            if (this.activeDay > 2) {
                this.$children.forEach((item) => {
                    if (item.$refs.messageJie) {
                        item.$refs.messageJie.style.display='flex';
                    }
                })
                this.condition_activeEnd = true;     
            } else if (this.activeDay < -2) {  // 计算当前时间减去活动时间，显示活动暂未开始
                this.$children.forEach((item) => {
                    if (item.$refs.messageWei) {
                        item.$refs.messageWei.style.display='flex';
                    }
                })
                this.condition_activeWei = true;
            } else {
                var t = this.$t.getTime();
                var sgText = this.appid + t + "shiniu_tkjidi"; 
                var sign = this.$md5(sgText); 
                shiXunPay({
                    app_id: this.appid,
                    sign: sign,
                    t: t,     
                    article_id: this.keChengId,  
                }).then((res) => {
                    if (res.status_code == 200) {
                        if (this.$t.GScheck()) {
                            this.$t.GSsdk({
                                type: 'aliPay',
                                content: res.data.alipay,
                                url: 'successPayEmit',
                                ico: 'failePayEmit'
                            })
                        }
                    }
                })
            }
        },

        // 支付成功
        successPayEmit() {
            this.$children.forEach((item) => {
                if (item.$refs.messageSuccess) {
                    item.$refs.messageSuccess.style.display='flex';
                }
            })
            this.condition_baoSuccess = true;
            this.getShiXunYingEmit();
        },
        
        // 支付失败
        failePayEmit () {
            MessageBox({
                title: '提示',
                message: '支付失败, 请重新支付',
                showCancelButton: true
            })
            this.getShiXunYingEmit();
        },

        // 支付成功点击底部按钮
        paySuccessEmit() {
            this.$children.forEach((item) => {
                if (item.$refs.messageSuccess) {
                    item.$refs.messageSuccess.style.display='flex';
                }
            })
            this.condition_baoSuccess = true;
        },

    },

    created() {
        this.keChengId = this.$route.query.id;
        // 获取appid
        this.appid = sessionStorage.getItem("GS-appid"); 
        this.getShiXunYingEmit();
         
    },

    mounted() {
        let me = this;
        window['successPayEmit'] = () => {
            me.successPayEmit()
        }

        window['failePayEmit'] = () => {
            me.failePayEmit()
        }
    },
}
</script>

<style lang="stylus" scoped>
.footer
    position fixed
    bottom 0
    left 0
    height 0.98rem
    line-height 0.98rem 
    width 100%
    .footer_inner
        border-radius 0.09rem 0.09rem 0 0 
        background #FF962E
        width 100%
        span
            color #FFFFFF
            font-size 0.28rem
            font-weight 400
            font-family  PingFangSC-Medium 

</style>