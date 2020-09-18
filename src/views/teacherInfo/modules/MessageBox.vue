<template>
    <div class="MessageBox">
         <div 
            ref="message"
            v-show="condition"
            class="flex justifyCenter alignCenter zheMoCourse"
            >
            <!-- 弹出内容 -->
            <div class="tanContent animated zoomIn">
                <div class="tanContent_header">
                   <img src="@/assets/img/images/indexTan.jpg" alt="">
                </div>
                <div class="tanContent_bottom flex alignCenter justifyCenter">
                    <div class="bottom_inner flex alignCenter justifyCenter">
                        <span>课程暂未开放，敬请期待</span>
                    </div>
                </div>
            </div>
            <div class="tan_close"  @click="zheZhaoEmit">
                <img src="@/assets/img/images/close.png">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MessageBox',
    props: ['condition'],
    data() {
        return {
            conditionStatus: this.condition,
        }
    },

    methods: {
        // 关闭遮罩事件
        zheZhaoEmit() {
            this.$refs.message.style.display='none'; 
            this.conditionStatus = false;
        },
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
.zheMoCourse
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
        height 3.53rem
        background #FFFFFF
        border-radius 0.2rem
        box-shadow:0px 0.04rem 0.51rem 0rem rgba(0, 0, 0, 0.15)
        margin-top -1.5rem
        .tanContent_header
            margin 0.51rem 2.06rem 0rem 1.92rem
            img
               width 1.62rem
               height 1.64rem
        .tanContent_bottom
            margin-top 0.3rem
            width: 100%
            .bottom_inner
                span 
                    color #333333
                    font-size 0.36rem
                    font-family PingFang-SC-Medium
                    font-weight 540
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