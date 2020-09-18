<template>
    <div class="teacherInfo">
        <!-- 导航栏 -->
        <CommonHeader :title="title"></CommonHeader>
        <!-- 头部图文 -->
        <FuWen :fuWenArray='fuWenArray'></FuWen>
        <!-- 加入实训营图片 -->
       <ShiXun :shiXunList='shiXunList'></ShiXun>
        <!-- 课程列表 -->
        <KeCheng :courseList='courseList'></KeCheng>
    </div>
</template>

<script>
import { getTeacherInfo } from '@/api/teacher.js';
import CommonHeader from '@/component/CommonHeader';
import FuWen from './modules/FuWen';
import KeCheng from './modules/KeCheng';
import ShiXun from './modules/ShiXun';
export default {
    name: 'teacherInfo',
    components:  {
        CommonHeader,
        FuWen,
        KeCheng,
        ShiXun
    },
    data() {
        return {
            title: '导师简介',
            courseList:[],  //  课程数据
            shiXunList: [],  // 训练营数据
            teacherInfo: {},  // 老师信息
            teacherId: 0,
            fuWenArray: '',  // 富文本中所有数据
        }
    },

    methods: {

        // 获取数据
        getTeacherInfoEmit(){
            getTeacherInfo({
                id: this.teacherId
            }).then((res) => {
                if (res.data != null) {
                    this.courseList = res.data.kecheng;
                    // 课程列表
                    if (res.data.shixun != []) {
                        this.shiXunList = res.data.shixun;  // 实训列表 
                    }
                    if (res.data.tearcher.info != false && res.data.tearcher.info != null) {
                        this.fuWenArray = res.data.tearcher.info; 
                    }
                    if (res.data.tearcher != '') {
                        this.teacherInfo = res.data.tearcher;
                    }
                }
                
            })
        },

    },

    created() {
        this.teacherId = this.$route.query.teacherId;
        this.getTeacherInfoEmit();

    },

}
</script>

<style lang="stylus" scoped>

$commonWeight=Regular;
$commonFamily=PingFangSC-Regular;
$commonSize26=0.26rem;
$commonSize28=0.28rem;
$commonColor3=#333333;
$commonColor6=#666666;
$commonColorF=#FFFFFF;
$commonLineH4=0.4rem;

.teacherInfo
    background #f7f7f7
    padding-top 0.25rem
    padding-bottom 0.6rem
</style>