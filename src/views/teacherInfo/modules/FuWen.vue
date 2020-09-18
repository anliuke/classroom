<template>
    <div class="FuWen">   
        <div class="tuWenHeader" :class="{'headerTu' :andriodStatus, 'headerTu-phoneX': phoneStaus, 'headerTu-phone8': phone8Staus}">
            <div class="tuWenheader_top" >
                <div v-html='fuWenArray'></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FuWen',
    props: ['fuWenArray'],
    data() {
        return{
            andriodStatus: true,
            phoneStaus: false,
            phone8HeaderStaus: true,
            phone8Staus: false,
        }
    },

    methods: {

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
$commonWeight=Regular;
$commonFamily=PingFangSC-Regular;
$commonSize26=0.26rem;
$commonSize28=0.28rem;
$commonColor3=#333333;
$commonColor6=#666666;
$commonColorF=#FFFFFF;
$commonLineH4=0.4rem;
.headerTu
    margin-top 0.88rem
.headerTu-phoneX
    margin-top 1.88rem
.headerTu-phone8
    margin-top 1.28rem
.tuWenHeader
    width 95%
    min-height 4rem
    background $commonColorF
    margin-left auto 
    margin-right auto 
    border-radius 0.2rem
    min-height 6.6rem
    .tuWenheader_top
        margin 0 0.18rem
        padding-top 0.54rem
        min-height 3.06rem  
        /deep/p
            // text-indent 0.5rem 
            color $commonColor6
            font-size $commonSize28
            line-height $commonLineH4
            font-family $commonFamily
            font-weight 330
        /deep/.image
            min-height 2.4rem 
            img
                width 100% 
                height 100% 
                border-radius 0.2rem
</style>