<template>
  <div class="page">
    <div class="tit">
        <p><span>{{adr.name}}</span> <b>{{adr.phone}}</b></p>
        <p><i class="icon iconfont icon-dingwei"></i><span>{{adr.address}}</span></p>
    </div>
     <div class="title">
        <i class="icon iconfont icon-gengduo-2"></i>
        <span>恒自然旗舰店</span>
    </div>
  </div>
</template>

<script>
export default {
  props:["adr"]
}
</script>

<style scoped>
    .tit{
       height:40px;
       padding:0 10px;
    }
    .tit p{
        line-height:1.6;
    }
</style>
