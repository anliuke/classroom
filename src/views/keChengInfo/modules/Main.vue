<template>
    <div class="Main">
         <!-- 线 -->
        <div class="empty" :class="{'main-Zhu' :andriodStatus, 'main-Zhu-phoneX': phoneStaus, 'main-Zhu-phone8': phone8Staus}"></div>

        <!-- 主体 -->
        <div class="main">
            <div class="main_title">
                <span>{{ keChengObject.name }}</span>
            </div>
            <div class="main_header flex alignCenter" @click="jumpTeacherInfoEmit()" v-if="keChengObject.avatar_url != '' && keChengObject.tearcher_name != ''">
                <img :src="keChengObject.avatar_url" alt="">
                <span>{{ keChengObject.tearcher_name }}</span>
            </div>
            <div v-else></div>
            <div class="main_main">
                <div v-html="fuWenContent" ></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Main',
    props: {
        'keChengObject': Object,
        'fuWenContent': String
    },
    data() {
        return{
            andriodStatus: true,
            phoneStaus: false,
            phone8HeaderStaus: true,
            phone8Staus: false,
        }
    },

    methods: {
        // 跳转到教师详情
        jumpTeacherInfoEmit() {
            this.$router.push({
                path: '/teacher',
                query: {
                    teacherId: this.keChengObject.teacher_id
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
        padding-top 0.35rem
        .main_title
            margin-left 0.2rem
            span 
                color #333333
                font-size 0.4rem 
                font-weight 550
                font-family PingFangSC-Medium
        .main_header
            margin 0.26rem 0.2rem 0
            height 0.65rem
            img[src=""],img:not([src])
                opacity 0 
            img[src] 
                opacity 1
                width 0.65rem
                height 100%
                border-radius 50%
            span 
                margin-left 0.2rem
                color #333333
                font-size 0.3rem
                font-weight 600
                font-family  PingFangSC-Medium 
        .main_main
            margin 0.32rem 0.2rem 0
            /deep/p
                color #666666
                font-size 0.28rem
                font-weight 330
                font-family  PingFangSC-Medium 
                line-height 0.4rem
            /deep/.image
                min-height 2.4rem 
                margin-bottom 0.1rem
                img
                    width 100%
                    height 100%
                    border-radius 0.2rem 
            /deep/.image:last-child{margin-bottom: 0rem}
</style>