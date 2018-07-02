<template>
  <div class="footer">
     <div class="left"></div>
     <div class="right">
        <div class="total">
            <span>总计:${{pris}}.00</span>
            <span>(含运费)</span>
        </div>
        <div class="submit" @click="submit">
            提交订单
        </div>
     </div>
  </div>
</template>

<script>
import Bus from '../js/globelBus.js'
export default {
  data() {
    return {
      pris:0,
      dienum:''
    }
  },
  mounted(){
      Bus.$on("bus",res=>{
        this.dienum=res
      })
      Bus.$on("pris",res=>{
        this.pris=res
      })
  },
  methods:{
    submit(){
      Bus.$emit("index",{
        a:this.dienum,
        b:this.pris
      })
    }
  }
}
</script>

<style scoped>
  .footer{
    height:45px;
    display:flex;
    align-items:center;
    justify-content:space-between;
  }
  .right{
    display:flex;

  }
  .total{
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    padding-right:10px;
  }
  .total span:nth-child(1){
    color:#F71919;
  }.total span:nth-child(2){
    color:#ccc;
  }
  .submit{
    width:100px;
    text-align:center;
    line-height:45px;
    background:#FB4141;
    color:#fff;
  }
</style>
