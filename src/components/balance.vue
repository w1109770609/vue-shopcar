<template>
  <div class="balance">
    <div class="bunce">
        <span>余额支付${{money}}.00</span><Cricle v-on:datas="Cricles" name="ye"></Cricle>
    </div>
     <div class="bunce">
        <span>奖金支付${{n}}.00</span><Cricle v-on:datas="Cricles" name="jj"></Cricle>
    </div>
  </div>
</template>

<script>
import Cricle from './childs/cricle'
import Bus from '../js/globelBus.js'
export default {
  props:['money'],
  data() {
    return {
        n:100,
        obj:{}
    }
  },
  components:{
    Cricle
  },
  methods:{
      Cricles(val){
        if(val.flag){
          if(val.name=="ye"){
            this.obj[val.name]=this.money
          }else if(val.name=="jj"){
            this.obj[val.name]=this.n
          }
        }else{
          if(val.name=="ye"){
            this.obj[val.name]=0
          }else if(val.name=="jj"){
            this.obj[val.name]=0
          }
        }
        console.log(this.obj)
        let mons=0;
        for(let i in this.obj){
         if(this.obj[i]){
           mons+=this.obj[i]
         }
        }
        Bus.$emit("bus",mons)
      }
  }
}
</script>

<style scoped>
    .balance{
        padding:0 10px;
        margin-top:10px;
    }
    .balance .bunce{
        color:#777777;
        height:40px;
        display:flex;
        justify-content:space-between;
        align-items:center;
    }
</style>
