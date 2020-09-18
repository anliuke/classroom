<template>
    <div class="CommoonHeader">
         <!-- 导航栏 -->
        <div class="flex justifyCenter alignCenter" :class="{'app-title' :andriodStatus, 'app-title-phoneX': phoneStaus, 'app-title-phone8': phone8Staus}">
            <div class="anNiu flex aligCenter">
                <i class="iconfont" @click="close" v-if="title == '更省课堂'">&#xe608;</i>
                <i class="iconfont" @click="goBack_new" v-else>&#xe608;</i>
                <i class="iconfont back" @click="close">&#xe607;</i>
            </div>
            <div class="title">
                <span>{{ title }}</span>
            </div>
            <div class="refresh flex aligCenter" @click="refresh">
                <i class="iconfont">&#xe609;</i>
            </div>
        </div>
   </div>
</template>

<script>
export default {
    name: 'CommoonHeader',
    props: ['title'],
    data () {
        return{
            andriodStatus: true,
            phoneStaus: false,

            phone8HeaderStaus: true,
            phone8Staus: false,
        }
    },

    methods: {

        // 回退事件
        goBack_new(){
            if (this.$route.query.goindex === 'true' || this.$route.query.goindex === 'undefined') {
                this.$router.push('/')
            } else {
                this.$router.back(-1)
            }
        },

        // 关闭事件
        close(){
            if (this.$t.GScheck()) {
                this.$t.GSsdk({
                    type:"close"
                })
            }
        },
        // 刷新页面
        refresh(){
            if(this.$t.GScheck()){
                this.$t.GSsdk({
                    type:'refresh_page',
                })
            } else {
                window.location.href = window.location.href; 
            }
        },
    },

    created () {
        this.$m.setgoindex() 
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
}
</script>

<style lang="stylus" scoped>

</style>

