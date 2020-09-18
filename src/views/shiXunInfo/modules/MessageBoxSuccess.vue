<template>
    <div class="MessageBoxSuccess">
        <div 
            ref="messageSuccess"
            v-show="condition_baoSuccess" 
            class="flex justifyCenter alignCenter zheMoSuccess"
            >
            <!-- 弹出内容 -->
            <div class="tanContent animated zoomIn">
                <div class="tanContent_header flex justifyCenter alignCenter">
                    <div class="header_inner flex justifyCenter alignCenter">
                        <span>您已报名成功</span>
                    </div>
                </div>
                <div class="tanContent_middle">
                    <div>请复制客服微信，在微信搜索添加，客</div>
                    <div>服将引导您进行下一步操作。</div>
                    <div>客服微信:  <span id="weiMing">gsshixunying</span></div>
                </div>
                 <div class="tanContent_bottom flex alignCenter justifyCenter">
                    <div class="bottom_inner flex alignCenter justifyCenter" @click="fuzhiEmit">
                        <span>复制</span>
                    </div>
                </div>
            </div>
            <div class="tan_close animated zoomIn" @click="zheZhaoEmit_bapSuccess">
                <img src="@/assets/img/images/close.png">
            </div>
        </div>
    </div>
</template>

<script>
import { Toast } from 'mint-ui';
export default {
    name: 'MessageBoxSuccess',
    props: ['condition_baoSuccess'],

    data() {
        return{
            condition_baoSuccessStatus: this.condition_baoSuccess
        }
    },

    methods: {
        // 关闭遮罩事件
        zheZhaoEmit_bapSuccess() {
            this.$refs.messageSuccess.style.display='none'; 
            this.condition_baoSuccessStatus = false;
        },

         // 复制事件
        fuzhiEmit() {
            if(this.$t.GScheck()){
                this.$t.GSsdk({
                    type:'getClipboardData',
                    content: 'gsshixunying'
                })
            }
            Toast({
                message: '复制成功',
                duration: 2000
            }); 
            this.$refs.messageSuccess.style.display='none';
            this.condition_baoSuccessStatus = false;
            
        },
    },

    created() {

    },
 }
</script>

<style lang="stylus" scoped>
.zheMoSuccess
    position fixed
    left 0rem
    top 0rem
    background rgba(0, 0, 0, 0.4)
    width 100%  /*宽度设置为100%，这样才能使隐藏背景层覆盖原页面*/
    height 100%
    z-index 999
    .animated 
        animation-duration 0.2s !important
    .tanContent
        width 5.6rem
        height 4.5rem
        background #FFFFFF
        border-radius 0.2rem
        box-shadow:0px 0.04rem 0.51rem 0rem rgba(0, 0, 0, 0.15)
        margin-top -2rem
        .tanContent_header
            margin 0.6rem auto 0rem
            height 0.36rem
            .header_inner
                span
                    color #333333
                    font-size 0.38rem
                    font-family PingFang-SC-Medium
                    font-weight 545
        .tanContent_middle
            margin 0.46rem 0.69rem 0rem 0.4rem
            div
                color #333333
                font-size 0.26rem
                line-height 0.4rem
                font-family PingFang-SC-Medium
        .tanContent_bottom
            margin-top 0.49rem
            width 100%
            height 0.8rem
            .bottom_inner
                height 100%
                width 4.6rem
                background #FF962E
                border-radius 0.4rem
                span
                    color #FFFFFF
                    font-size 0.3rem
                    font-family PingFangSC-Medium
    .tan_close
        width 0.6rem
        height 0.6rem
        position absolute
        bottom 3.5rem
        left 45%
        img
            width 100%
            height 100% 
</style>