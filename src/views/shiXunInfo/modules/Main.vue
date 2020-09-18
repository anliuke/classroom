<template>
    <div class="Main">
         <!-- 线 -->
        <div class="empty" :class="{'main-Zhu' :andriodStatus, 'main-Zhu-phoneX': phoneStaus, 'main-Zhu-phone8': phone8Staus}"></div>

        <!-- 主体 -->
        <div class="main" :class="{'main-Zhu' :andriodStatus, 'main-Zhu-phoneX': phoneStaus, 'main-Zhu-phone8': phone8Staus}">
            <div class="main_header">
                <div v-html="fuWenContent"></div>  
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Main',
    props: ['fuWenContent'],
    data() {
        return{
            andriodStatus: true,
            phoneStaus: false,
            phone8HeaderStaus: true,
            phone8Staus: false,
        }
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
    }
}
</script>

<style lang="stylus" scoped>
.main-Zhu
    margin-top 0.88rem
.main-Zhu-phoneX
    margin-top 1.88rem
.main-Zhu-phone8
    margin-top 1.28rem
.empty
    height 0.01rem
    width 100%
    background #f7f7f7
.main
    margin-top 0.38rem
    .main_header
        margin 0 0.2rem 
        // text-indent 2em
        /deep/p 
            // text-indent 2em 
            color #666666
            font-size 0.26rem
            font-weight 330
            font-family  PingFangSC-Medium 
            line-height 0.4rem
        /deep/.image
            min-height 2.4rem
            img 
                width 100%
                height 100% 
                border-radius 0.2rem
</style>