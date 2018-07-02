<template>
  <header class="page">
       <i class="icon iconfont icon-angle-left"></i>
       <slot></slot>
       <i class="icon iconfont icon-xiaoxi"></i>
  </header>
</template>

<script>
export default {
    props:['heads']
}
</script>

<style scoped>
    header{
        height:45px;
        display:flex;
        justify-content: space-between;
        align-items:center;
        padding:0 10px;
    }
</style>
