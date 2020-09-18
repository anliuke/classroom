<template>
    <div class="MessageBox">   
        <div 
            ref="message"
            v-show="condition" 
            class="flex justifyCenter alignCenter zheMo"
            >
            <!-- 弹出内容 -->
            <div class="tanContent animated zoomIn">
                <div class="tanContent_header">
                    <div>此课程需要分享给微信好友，并在</div>
                    <div>微信打开链接听课哦~</div>
                </div>
                <div class="tanContent_bottom flex alignCenter justifyCenter"  @click="shareEmit">
                    <div class="bottom_inner flex alignCenter justifyCenter">
                        <span>分享</span>
                    </div>
                </div>
            </div>
            <div class="tan_close  animated zoomIn"  @click="zheZhaoEmit">
                <img src="@/assets/img/images/close.png">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MessageBox',
    props: {
        'condition': Boolean,
        'keChengObject': Object
    },
    data() {
        return{
            conditionStatus: this.condition,
        }
    },

    methods: {
        // 关闭遮罩事件
        zheZhaoEmit() {
            this.$refs.message.style.display='none'; 
            this.conditionStatus = false;
        },

        // 分享事件
        shareEmit() {
            if (this.$t.GScheck()) {
                this.$t.GSsdk({
                    type:"share_content",
                    title: this.keChengObject.name,
                    content: '点击即可参加课程',
                    ico: this.keChengObject.course_img,
                    url: this.keChengObject.cipher,
                })
            }
            this.$refs.message.style.display='none'; 
            this.conditionStatus = false;
        },
    },

    created() {
        
    },

}
</script>

<style lang="stylus" scoped>
.zheMo
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
        height 3.15rem
        background #FFFFFF
        border-radius 0.2rem
        box-shadow:0px 0.04rem 0.51rem 0rem rgba(0, 0, 0, 0.15)
        margin-top -1.5rem
        .tanContent_header
            margin 0.57rem 0.49rem 0rem
            height 0.69rem
            div
                color #333333
                font-size 0.3rem
                line-height 0.4rem 
                font-family PingFang-SC-Medium
                font-weight 540
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