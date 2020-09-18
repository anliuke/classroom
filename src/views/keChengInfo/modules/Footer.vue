<template>
    <div class="Footer">
         <div class="footer flex alignCneter justifyCenter" @click="weiShareEmit">
            <div class="footer_inner flex alignCneter justifyCenter">
                <span>分享给微信好友，并在微信打开听课</span>
            </div>
        </div>
        <!-- 遮罩层 -->
        <MessageBox :condition='condition' :keChengObject='keChengObject'></MessageBox>
    </div>
</template>

<script>
import MessageBox from './MessageBox'
export default {
    name: 'Footer',
    props: ['keChengObject'],
    components: {
        MessageBox,
    },
    data() {
        return{
            condition: false,
        }
    },

    methods: {

        // 分享到微信
        weiShareEmit() {
            if (JSON.stringify(this.keChengObject) !='{}') {
                this.$children.forEach((item) => {
                    if (item.$refs.message) {
                        item.$refs.message.style.display='flex';
                    }
                })
                this.condition = true;
            }
        },
    },

    created() {

    }
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