<template>
    <div class="ActiveJie">
        <div class="activeJieShao flex alignCenter justifyCenter">
            <div class="activeJieShao_inner">
                <div class="jieShao_main">
                    <span>你还在为如何迈出地推第一步而苦恼吗？你还在为每天的更省收益而发愁吗？来听更省优秀讲师免费干货分享课程，报名进入更省实训营，
                        即可享受到讲师建群亲带，随时为你排忧解难！让你从更省小白一跃成为收益大神！</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ActiveJie',

    data() {
        return{

        }
    },

    methods: {

    },

    created() {

    }
}
</script>

<style lang="stylus" scoped>
$commonWeight=Regular;
$commonFamily=PingFangSC-Regular;
$commonSize=0.26rem;
$commonColor3=#333333;
$commonColor6=#666666;
.activeJieShao
    margin-top 1.36rem
    width 95%
    height 2.47rem
    margin-right auto
    margin-left auto
    .activeJieShao_inner
        width 100%
        height 100%
        background-image url('../../../assets/img/images/indexJieShao.jpg')
        background-repeat no-repeat
        background-size 100%
        border-radius 1.24rem   
    .jieShao_main
            margin 0.33rem  0.75rem 0rem 0.87rem 
            span 
                color $commonColor3
                font-weight 510
                font-family $commonFamily
                font-size   $commonSize
                line-height 0.4rem
</style>