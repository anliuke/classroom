<template>
    <div class="keChengInfo">
        <!-- 导航栏 -->
        <CommonHeader :title="title"></CommonHeader>
       <!-- 主体 -->
       <Main :keChengObject='keChengObject' :fuWenContent='fuWenContent'></Main>
        <!-- 参加实训营 -->
        <ShiXun :joinShiXunList='joinShiXunList'></ShiXun>
        <!-- 底部按钮 -->
       <Footer :keChengObject='keChengObject'></Footer>
    </div>
</template>

<script>
import { getKeChengInfo } from '@/api/kecheng.js'
import CommonHeader from '@/component/CommonHeader'
import Main from './modules/Main'
import ShiXun from './modules/ShiXun'
import Footer from './modules/Footer'
export default {
    name: 'keChengInfo',
    components:  {
        CommonHeader,
        Main,
        ShiXun,
        Footer
    },
    data () {
        return {
            title: '课程内容', 
            condition: false,
            keChengId: 0,
            keChengObject: {},
            joinShiXunList: [],  // 参加实训营数据
            fuWenContent: '',  // 富文本中文字数据
        }
    },

    methods: {

        // 获取课程数据
        getKeChengList() {
            var appid = this.$t.getUrlParam('appid');
            var t = this.$t.getTime();
            var sgText = appid + t + "shiniu_tkjidi"; 
            var sign = this.$md5(sgText); 
            getKeChengInfo({
                id: this.keChengId,
                app_id: appid,
                sign: sign,
                t: t
            }).then((res) => {
                if (res.status_code == 200) {
                    this.keChengObject = res.data.info;
                    // 获取课程内容
                    if (this.keChengObject.course_info != false && this.keChengObject.course_info != null) {
                        this.fuWenContent = this.keChengObject.course_info;    
                    }
                }
                // 实训营数组
                if (res.data != null) {
                    this.joinShiXunList = res.data.shixun;
                }
            })
        },

    },

    created() {
        this.keChengId = this.$route.query == '' ? '' : this.$route.query.id;
        this.getKeChengList();
    },

    mounted() {
 
    },

}
</script>

<style lang="stylus" scoped>
</style>