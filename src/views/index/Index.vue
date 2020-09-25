<template>
    <div :class="{ 'index-IphoneX-Index': phoneStaus, 'index-pu-Index ' :andriodStatus, 'index': phone8Staus}">
        <!-- 导航栏 -->
        <CommonHeader :title="title"></CommonHeader>
        <div class="main_top">
            <!-- banner swiper -->
            <Banner :bannerJi='bannerJi'></Banner>
            <!-- 活动介绍 -->
            <ActiveJie></ActiveJie>
            <div class="dianZhui">
                <img src="@/assets/img/images/dianZhui.jpg" alt="">
            </div>
        </div>
        <div class="main_bottom">
            <!-- 实名战师 -->
            <ShiZhan :shiZhanMingData='shiZhanMingData' :laoShiLength='laoShiLength'></ShiZhan>
            <!-- 大咖课堂 -->
            <KeTang :keTangData='keTangData' :KeTangLength='KeTangLength' :condition='condition'></KeTang>
            <!-- 活动规则 -->
            <ActiveGui></ActiveGui>
        </div>
    </div>

</template>

<script>
import { getKeTangList } from '@/api/index.js'

import CommonHeader from '@/component/CommonHeader'
import Banner from './modules/Banner'
import ActiveJie from './modules/ActiveJie'
import ShiZhan from './modules/ShiZhan'
import KeTang from './modules/KeTang'
import ActiveGui from './modules/ActiveGui'

export default {
    name: 'index',
    components:  {
        CommonHeader,
        Banner,
        ActiveJie,
        ShiZhan,
        KeTang,
        ActiveGui,
    },

    data () {
        return {
            title: '更省课堂',
            bannerJi: [],  // 轮播图
            shiZhanMingData: [],  // 实战名师数据
            keTangData: [],  // 大咖课堂数据
            KeTangLength: 0,  // 大咖课程数据长度
            condition: false,  // 遮罩层是否显示
            andriodStatus: true,
            phoneStaus: false,
            phone8HeaderStaus: true,
            phone8Staus: false,
            refeshStatus: true,
            laoShiLength: 0,
        }
    },

    methods: {
        
        // 获取数据
        getKeListEmit() {  
            getKeTangList().then(res => {
                this.bannerJi = res.data.banner;  // 轮播图
                this.shiZhanMingData = res.data.tearcher;  // 实战名师 
                this.keTangData = res.data.courses;
                this.KeTangLength = this.keTangData.length;
                this.laoShiLength = this.shiZhanMingData.length;
            })
        },

    },

    beforeCreate() {
        //
        if (this.refeshStatus) {
            if(this.$t.GScheck()){
                this.$t.GSsdk({
                    type:'refresh_page',
                })
            } else {
                window.location.href = window.location.href; 
            }
        }
        this.refeshStatus = false;
        return
    },

    created() {
        
        if(this.$t.ioscheck()){
            if(this.$m.isIphoneX() || this.$m.isIPhoneXR()){
                this.andriodStatus = false;
                this.phoneStaus = true;
                this.phone8HeaderStaus = false;
                this.phone8Staus = false;
            } else if (this.$m.isIpone8plus() || this.$m.isIphone7()) {
                this.andriodStatus = false;
                this.phoneStaus = false;
                this.phone8HeaderStaus = true;
                this.phone8Staus = true;
            } else {
                this.andriodStatus = true;
                this.phoneStaus = false;
                this.phone8HeaderStaus = false;
                this.phone8Staus = false;
            }
        } else {
            this.andriodStatus = true;
            this.phoneStaus = false;
            this.phone8HeaderStaus = false;
            this.phone8Staus = false;
        }   
        this.getKeListEmit();
        // 存储appid
        var appid = this.$t.getUrlParam('appid');
        sessionStorage.setItem("GS-appid", appid);
        
    },

    mounted() {
        
    },

}
</script>

<style lang="stylus" scoped>

$commonWeight=Regular;
$commonFamily=PingFangSC-Regular;
$commonSize=0.26rem;
$commonColor3=#333333;
$commonColor6=#666666;
.index  
    .main_top
        background-image url('../../assets/img/images/topBJ.jpg')
        background-repeat no-repeat
        background-size 100% 100%
        width 100%
        height 7.89rem
        padding-top 1.48rem
        .dianZhui
            width 0.5rem
            height 0.5rem
            position relative
            top 0.2rem
            left 0.05rem
            img 
                width 100%
                height 100%
    .main_bottom
        background #dae0f2
        margin-top -0.01rem
        

</style>