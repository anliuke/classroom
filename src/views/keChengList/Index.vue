<template>
    <div class="keChengList">
         <!-- 导航栏 -->
        <CommonHeader :title="title"></CommonHeader>
        <!-- 列表 -->
        <List :courseList='courseList'></List>
    </div>
</template>

<script>
import { getKeChengList } from '@/api/kecheng.js'
import CommonHeader from '@/component/CommonHeader';
import List from './modules/List';
export default {
    name: 'keChengList',
    components:  {
        CommonHeader,
        List
    },
    data () {
        return {
            title: '课程列表', 
            page: 1,
            size: 50,
            courseList:[],
        }
    },

    methods: {

        // 获取课程数据列表
        getKeChengListEmit() {
            getKeChengList({
                page_no: this.page,
                num: this.size
            }).then((res) => { 
                this.courseList = res.data.courses;
            })
        },
        
    },

    created() {
        this.getKeChengListEmit();  
    },

    mounted() {

    },

}
</script>

<style lang="stylus" scoped>

</style>