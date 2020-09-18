<template>
    <div class="ShiXun">
        <div class="main_bottom">
            <div class="shiXun_inner" v-for="item in joinShiXunList" :key="item.id" @click="jumpShiXunEmit(item)">
                <img :src="item.course_img " alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ShiXun',
    props: ['joinShiXunList'],

    data() {
        return{

        }
    },

    methods: {
        
        // 跳转到实训营
        jumpShiXunEmit(item) {
             this.$router.push({
                path: '/shixun',
                query: {
                    id: item.id
                }
            })
        },
    }
}
</script>

<style lang="stylus" scoped>
    .main_bottom
        margin: 0.4rem 0.2rem 1.36rem;  
        .shiXun_inner
            height 2.4rem
            width 100%      
            img
                height 100%
                width 100%  
                border-radius 0.2rem 
</style>