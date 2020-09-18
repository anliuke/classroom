<template>
    <div class="MessageBoxActiveJie">
         <div 
            ref="messageJie"
            v-show="condition_activeEnd" 
            class="flex justifyCenter alignCenter zheMoShiXun"
            >
            <!-- 弹出内容 -->
            <div class="tanContent animated zoomIn">
                <div class="tanContent_header flex alignCenter justifyCenter">
                   <img src="@/assets/img/images/active_end.jpg" alt="">
                </div>
                <div class="tanContent_bottom flex alignCenter justifyCenter">
                    <div class="bottom_inner flex alignCenter justifyCenter">
                        <span>抱歉，活动已经结束啦</span>
                    </div>
                </div>
            </div>
            <div class="tan_close animated zoomIn"  @click="zheZhaoEmit_activeEnd">
                <img src="@/assets/img/images/close.png">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MessageBoxActiveJie',
    props: ['condition_activeEnd'],

    data() {
        return{
            condition_activeEndStatus: this.condition_activeEnd,
        }
    },

    methods: {
        // 关闭活动结束弹窗事件
        zheZhaoEmit_activeEnd() {
            this.$refs.messageJie.style.display='none'; 
            this.condition_activeEndStatus = false;
        },

    },

    created() {
        
    },
}
</script>

<style lang="stylus" scoped>
.zheMoShiXun
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
        height 3.3rem
        background #FFFFFF
        border-radius 0.2rem
        box-shadow:0px 0.04rem 0.51rem 0rem rgba(0, 0, 0, 0.15)
        margin-top -1.5rem
        .tanContent_header
            margin 0.6rem auto 0rem
            width: 100%
            img
               width 2.68rem
               height 1.24rem
        .tanContent_bottom
            margin-top 0.5rem
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