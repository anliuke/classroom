<template>
    <div class="List">
         <!-- 线条 -->
        <div class="empty" :class="{'main-Zhu' :andriodStatus, 'main-Zhu-phoneX': phoneStaus, 'main-Zhu-phone8': phone8Staus}"></div>

        <!-- 主体部分 -->
        <div class="main " >
            <div class="keTangMain flex flexWrap justifyBetween">   
                <div class="keTang_info" v-for="item in courseList" :key="item.id">
                    <div class="keTang_info_inner" >
                        <div class="info_inner_empty"  @click="keChengInfoEmit(item)"></div>
                        <img :src="item.course_img" alt="">

                        <div class="inner_teacher flex alignCenter" @click="jumpTeacherInfoEmit(item)" v-if="item.avatar_url != '' && item.tearcher_name != ''">
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
            </div>
        </div>
        
        <!-- 遮罩弹窗 -->
       <MessageBox :condition='condition'></MessageBox>
        
    </div>
</template>

<script>
import MessageBox from './MessageBox'
export default {
    name: 'List',
    props: ['courseList'],
    components: {
        MessageBox,
    },  
    data() {
        return{
            condition: false,  // 遮罩是否显示
            andriodStatus: true,
            phoneStaus: false,
            phone8HeaderStaus: true,
            phone8Staus: false,
        }
    },

    methods: {
         // 跳转课程内容事件
        keChengInfoEmit(item) {
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

        // 跳转到教师详情
        jumpTeacherInfoEmit(item) {
            this.$router.push({
                path: '/teacher',
                query: {
                    teacherId: item.teacher_id
                }
            })
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
    margin-top 0.32rem
    .keTangMain
        background #FFFFFF
        border-radius 0.2rem    
        min-height 3rem   
        margin 0rem 0.2rem
        .keTang_info
            width 3.5rem
            .keTang_info_inner
                height 2.12rem
                width 3.5rem
                position relative
                .info_inner_empty
                    position absolute
                    width 100%
                    height 1.6rem
                img[src=""],img:not([src])
                    opacity 0 
                img[src]
                    opacity 1
                    width 100%
                    height 100% 
                    border-radius 0.1rem  
                .inner_teacher
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
                            border-radius 50%
                            width 100%
                            height 100%
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
</style>