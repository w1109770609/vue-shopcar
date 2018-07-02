<template>
  <div class="pages">

    <shopList id="a1" price="500" v-on:total="data"></shopList>
    <shopList id="a2" price="800" v-on:total="data"></shopList>
    <div class="computed">
        <p><span>商品总金额</span><span id="z">${{initNumber}}.00</span></p>
    </div>
  </div>
</template>

<script>
import shopList from './childs/shoplist'
import Bus from '../js/globelBus.js'
export default {
  data() {
    return {
        storage:{},
        initNumber:0
    }
  },
  components: {
    shopList
  },
   watch:{
    storage(n){
      let sums=0;
      for(let i in n){
        sums+=n[i];
      }
      this.initNumber=sums;
      Bus.$emit("pris",this.initNumber)
    }
  },
  methods:{
    data(data){
      let obj =Object.assign({},this.storage)
      obj[data.id]=data.sum;
      this.storage=obj;
    }
  }
}
</script>

<style scoped>
</style>
