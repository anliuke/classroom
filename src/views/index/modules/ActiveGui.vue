<template>
    <div class="ActiveGui">
        <div class="active_guiZe">
            <div class="title">
                <span>活动规则</span>
            </div>
            <div class="main">
                <div>1、所有更省用户均可免费进入更省优秀讲师直播课堂;</div>
                <div>2、课程安排为每周一次，历时一个月, 共四次; 往期课程,可在大咖课堂查看;</div>
                <div>3、报名讲师实训营的费用为199元/月, 报名成功后添加专属客服微信, 即可加入实训营, 由讲师每日亲带培训, 历时一个月;</div>
                <div>4、为保证实训营效果, 在讲师课程开启前三天和后三天(共六天), 均为实训营报名时间, 过期不候;</div>
                <div>5、进入实训营后, 讲师根据课程安排布置群内任务, 学员需按时完成, 双方共同努力提高业绩;</div>
                <div>6、虚拟商品不支持任何形式的退款, 望周知;</div>
                <div>7、本次活动的最终解释权归更省APP官方所有。</div>                     
            </div>
            
        </div>
        <!-- 底部图片 -->
        <div class="footer_img flex justifyBetween">
            <img src="../../../assets/img/images/index_footer.jpg" alt="">
        </div>

        
    </div>
</template>

<script>
export default {
    name: 'ActiveGui',
    data() {
        return{
            
        }
    },

}
</script>

<style lang="stylus" scoped>
$commonWeight=Regular;
$commonFamily=PingFangSC-Regular;
$commonSize=0.26rem;
$commonColor3=#333333;
$commonColor6=#666666;
.active_guiZe
    width 95%
    margin 0.4rem auto 0rem
    .title
        span
            color #FF4C22
            font-size 0.28rem
            font-weight 500
            font-family $commonFamily
    .main
        margin-top 0.16rem
        div
            color $commonColor3
            font-weight 510
            font-family $commonFamily
            font-size $commonSize
            line-height 0.4rem
.footer_img
    margin-top 0.96rem
    height 0.89rem
    width 100%
    img
        width 100%
        height 100%  

</style>