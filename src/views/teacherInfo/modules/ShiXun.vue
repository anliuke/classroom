<template>
    <div class="ShiXun">   
         <div class="mainImg" v-for="item in shiXunList" :key="item.id" @click="shiXumJumpEmit(item)">
            <div>
                <img :src="item.course_img" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ShiXun',
    props: ['shiXunList'],
    data() {
        return{

        }
    },

    methods: {
        // 跳转到实训营事件
        shiXumJumpEmit(item) {

            this.$router.push({
                path: '/shiXun',
                query:  {
                    id: item.id
                }
            })
        },
    }

}
</script>

<style lang="stylus" scoped>
$commonColorF=#FFFFFF;
.mainImg
    height 2.98rem
    border-radius 0.2rem
    background $commonColorF
    width 96%
    margin 0.25rem auto 0rem
    div
        padding 0.3rem 0.17rem
        img[src=""],img:not([src])
            opacity 0 
        img[src] 
            opacity 1
            height 2.4rem
            width 100%
            border-radius 0.2rem
</style>