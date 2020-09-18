<template>
    <div class="ShiZhan">
        <div class="shiMingTeacher">
            <div class="shiMingTeacher_header flex alignCenter justifyCenter">
                <img src="@/assets/img/images/teacherIcon.jpg" alt="">
                <span>实战名师</span>
            </div>
            <div class="shiMingTeacher_main_new" :style="{paddingBottom:shiZhanMingData.length==1?'0.26rem':'0.39rem'}">
                <div class="redius1"></div>
                <div class="redius2"></div>
                <div class="redius3"></div>
                <div class="shiMingTeacher_main_info flex"  v-for="item in shiZhanMingData" :key="item.id" @click="teachernfoJumpEmit(item)">
                    <div class="teacher_left_new">
                        <img :src="item.teacher_img" alt="">
                    </div>
                    <div class="teacher_right">
                        <div class="teacher_right_top">
                            <span>{{ item.name }}</span>
                        </div>
                        <div class="teacher_right_bottom">
                            <span v-html="item.home_info"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ShiZhan',
    props: ['shiZhanMingData', 'laoShiLength'],

    data() {
        return{
            yangMo: true,
            yangMo2: false,
        }
    },

    methods: {
        // 跳转到导师简介
        teachernfoJumpEmit(item) {
            this.$router.push({
                path: '/teacher',
                query: {
                    teacherId: item.id
                }
            })
        },
    },

    created() {
        if (this.laoShiLength == 1) {
            this.yangMo = false;
            this.yangMo2 = true;
        } else {
            this.yangMo = true;
            this.yangMo2 = false;
        }
    }
}
</script>

<style lang="stylus" scoped>
$commonWeight=Regular;
$commonFamily=PingFangSC-Regular;
$commonSize=0.26rem;
$commonColor3=#333333;
$commonColor6=#666666;
.shiMingTeacher
    width 95%
    margin-left auto 
    margin-right auto
    .shiMingTeacher_header
        width 100%  
        position relative
        top -0.87rem
        left 0rem
        img     
            width 0.48rem
            height 0.4rem
            margin-right 0.1rem
        span
            color $commonColor3
            font-weight 550
            font-family $commonFamily
            font-size 0.36rem
    .shiMingTeacher_main_new
        background linear-gradient(to right,#e3f3ff,#9bb5ff)
        width 100%
        min-height 3rem
        border-radius 0.2rem
        margin-top -0.48rem
        padding-top 0.16rem
        position relative
        .redius1 
            background-image url('../../../assets/img/images/radius_01.png')
            background-repeat no-repeat
            background-size 100% 100%
            position absolute 
            width 1.49rem
            height 1.23rem
            right 0rem
            top 0rem
        .redius2
            background-image url('../../../assets/img/images/radius_02.png')
            background-repeat no-repeat
            background-size 100% 100%
            position absolute 
            width 2.25rem
            height 2.78rem
            left 0rem
            bottom 0rem
        .redius3
            background-image url('../../../assets/img/images/radius_03.png')
            background-repeat no-repeat
            background-size 100% 100%
            position absolute 
            width 1.47rem
            height 1.23rem
            right 0.83rem
            bottom  0rem
        .shiMingTeacher_main_info
            width 95%
            height 2.7rem
            margin 0 auto
            margin-top 0.2rem
            background #FFFFFF
            border-radius 0.1rem
            position relative
            .teacher_left_new
                width 2.47rem
                height 2.7rem
                img[src=""],img:not([src])
                    opacity 0 
                img[src] 
                    opacity 1
                    width 100%
                    height 100%
                    border-radius 0.1rem 0rem 0rem 0.1rem 
            .teacher_right
                margin-left 0.1rem
                padding 0.35rem 0.19rem 0 0
                width 3.9rem
                height 2.35rem
                .teacher_right_top
                    span 
                        font-weight 700
                        font-family $commonFamily
                        font-size 0.3rem
                        color $commonColor3 
                .teacher_right_bottom
                    margin-top 0.25rem
                    word-break break-all
                    text-overflow ellipsis
                    display -webkit-box
                    -webkit-box-orient vertical
                    -webkit-line-clamp 4
                    overflow hidden
                    span
                        font-family $commonFamily
                        font-size $commonSize
                        color $commonColor6
                        line-height 0.35rem
</style>
