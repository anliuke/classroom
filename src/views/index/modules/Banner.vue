<template>
    <div class="Banner">
        <div class="swiper-container" :class="{'swiperPu' :andriodStatus, 'swiperPhoneX': phoneStaus, 'swiperPhone8': phone8Staus}">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="item in bannerJi" :key="item.id" @click="junpmShiXunEmit(item)">
                    <img :src="item.img" alt="">
                </div>
            </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination" v-if="bannerJi.length != 1"></div>
    </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
    name:'Banner',
    props: ['bannerJi'],

    data() {
        return{
            andriodStatus: true,
            phoneStaus: false,

            phone8HeaderStaus: true,
            phone8Staus: false,
        }
    },

    methods: {
         // 跳转实训营事件
        junpmShiXunEmit(item) { 
            var str = item.event_old;
            // 根据首字母进行跳转
            var shou = str.substr(0,1);
            if (shou == 't') {
                var posTeacher = str.lastIndexOf('=');
                var teacher_Id = str.substring(posTeacher+1,str.length);
                this.$router.push({
                    path: '/teacher',
                    query: {
                        teacherId: teacher_Id,
                    }
                })
            } else if (shou == 's') {
                var posShiXun = str.lastIndexOf('=');
                var shiXun_Id = str.substring(posShiXun+1,str.length);
                this.$router.push({
                    path: '/shixun',
                    query: {
                        id: shiXun_Id,
                    }
                })

            } else if (shou == 'c') {
                var posCourse = str.lastIndexOf('=');
                var course_id = str.substring(posCourse+1,str.length);
                this.$router.push({
                    path: '/courseInfo',
                    query: {
                        id: course_id,
                    }
                })
            }
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
    },

    mounted() {
        // 实例化swiper
        var swiper = new Swiper('.swiper-container', {
            autoplay:true,
            observer:true,//修改swiper自己或子元素时，自动初始化swiper 
            observeParents:false,//修改swiper的父元素时，自动初始化swiper 
            pagination: {
                el: '.swiper-pagination',
            },
            onSlideChangeEnd: function(swiper){ 
                swiper.update();  
                swiper.startAutoplay();
                swiper.reLoop();  
            }
        });
    }
}
</script>

<style lang="stylus" scoped> 

</style>