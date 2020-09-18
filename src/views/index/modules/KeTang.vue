<template>
    <div class="KeTang">
        <div class="dianZhui">
            <img src="@/assets/img/images/dianZhuia_right.jpg" alt="">
        </div>
        <div class="dakaKeTang">
            <div class="shiMingTeacher_header flex alignCenter justifyCenter">
                <img src="@/assets/img/images/teacherIcon.jpg" alt="">
                <span>大咖课堂</span>
            </div>

            <div class="keTangMain flex flexWrap">   
                <div class="keTang_info" v-for="item in keTangData" :key="item.id">
                    <div class="keTang_info_inner" >
                        <!-- 用于跳转的隐藏元素 -->
                        <div class="info_inner_empty" @click="jumpKeInfoEmit(item)"></div>
                        <img :src="item.course_img" alt="">
                        <div class="inner_teacher_new flex alignCenter" @click="jumpTeacherInfo(item)" v-if="item.avatar_url != '' && item.tearcher_name != ''">
                            <div class="teacher_icon">
                                <img :src="item.avatar_url" alt="">
                            </div>
                            <div class="teacher_name">   
                                <span>{{ item.tearcher_name }}</span>
                            </div>
                        </div>
                        <div v-else></div>
                    </div>
                    <div class="teacher_zhi">
                        <span>{{ item.name }}</span>
                    </div>
                </div>
                <div class="chaKanDuo flex alignCenter justifyCenter"  v-show="checkMoreStatus" v-if="keTangData.length == 4">
                    <div class="chaKanDuoInner flex alignCenter justifyCenter" @click="checkMoreEmit">
                        <span>查看更多</span>
                        <img src="@/assets/img/images/lookMore_jian.png" alt="">
                    </div>
                </div>
            </div>

            
        </div>

        <MessageBox :condition='condition'></MessageBox>
    </div>
</template>

<script>
import MessageBox from './MessageBox'
export default {
    name: 'KeTang',
    components: {
        MessageBox,
    },
    props:{
        'keTangData': Array,
        'KeTangLength': Number,
    },

    data() {
        return{
            checkMoreStatus: false,  // 查看更多是否显示
            condition: false, 
        }
    },

    methods: {
        // 查看更多事件
        checkMoreEmit() {
            this.$router.push('/course')
        },

        // 跳转课程内容
        jumpKeInfoEmit(item) {

            if (item.is_lock == 0) {
                this.$router.push({
                    path: '/courseInfo',
                    query:  {
                        id: item.id
                    }
                }) 
            } else if (item.is_lock == 1) {
                this.$children.forEach((item) => {
                    if (item.$refs.message) {
                        item.$refs.message.style.display='flex';
                    }
                })
                this.condition = true;  
            }       
        },

         // 跳转到导师详情
        jumpTeacherInfo(item) {
            this.$router.push({
                path: '/teacher',
                query:  {
                    teacherId: item.teacher_id
                }
            }) 
        },

        
    },

    created() {

    },

    beforeUpdate() {
        if (this.KeTangLength == 4) {
            this.checkMoreStatus = true;
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
.KeTang
    position relative
    .dianZhui
        width 0.63rem
        height 0.5rem
        position absolute
        top 0.5rem
        right 0rem
        img 
            width 100%
            height 100%
    .dakaKeTang
        margin-top 0.5rem
        width 95%
        margin-left auto 
        margin-right auto
        position relative
        .shiMingTeacher_header
            width 100%  
            img     
                width 0.48rem
                height 0.4rem
                margin-right 0.1rem
            span
                color $commonColor3
                font-weight 550
                font-family $commonFamily
                font-size 0.36rem 
        .keTangMain
            background #FFFFFF
            border-radius 0.2rem    
            width 95%
            min-height 3rem   
            margin 0.38rem auto 0 
            padding 0.35rem 0rem 0rem 0.16rem
            .keTang_info
                width 3.22rem
                margin-right 0.16rem
                .keTang_info_inner
                    margin-right 0.16rem
                    height 2rem
                    width 100%
                    position relative
                    .info_inner_empty
                        position absolute
                        height 1.4rem
                        width 100%
                    img[src=""],img:not([src])
                        opacity 0 
                    img[src] 
                        opacity 1
                        width 100%
                        height 100% 
                        border-radius 0.1rem  
                    .inner_teacher_new
                        position absolute
                        width 100%
                        height 0.6rem
                        background rgba(0,0,0,.4)
                        bottom 0rem
                        left 0rem
                        border-radius 0rem 0rem 0.1rem 0.1rem
                        .teacher_icon
                            width 0.37rem
                            height 0.36rem
                            margin-left 0.19rem
                            img[src=""],img:not([src])
                                opacity 0 
                            img[src]  
                                opacity 1
                                width 100%
                                height 100%
                                border-radius 50%
                        .teacher_name
                            margin-left 0.14rem
                            span
                                color #FFFFFF
                                font-family $commonFamily
                                font-size $commonSize
                .teacher_zhi
                    margin-top 0.26rem
                    margin-bottom 0.4rem
                    overflow hidden
                    text-overflow ellipsis
                    display -webkit-box
                    -webkit-box-orient vertical
                    -webkit-line-clamp 2
                    span    
                        color $commonColor3
                        font-weight 510
                        font-family $commonFamily
                        font-size 0.3rem 
            .chaKanDuo
                border-top 0.01rem dashed #ccccccf7
                height 1rem;
                width 100%
                .chaKanDuoInner
                    span
                        color #FF4C22
                        font-size 0.26rem
                        font-family PingFang-SC-Regular
                    img
                        width 0.09rem
                        height 0.16rem
                        margin-left 0.1rem
    
</style>