<template>
  <div class="cricle" @click="Tab" :class="[flag?'show':'']">
      <span></span>
  </div>
</template>

<script>
export default {
  props:["name"],
  data() {
    return {
      flag:false
    }
  },
  methods:{
    Tab(){
      this.flag=!this.flag;
      this.$emit("datas",{
        flag:this.flag,
        name:this.name
      })
    }
  }
}
</script>

<style scoped>
  .cricle{
    width:60px;
    height:30px;
    border-radius:20px;
    border:1px solid #ccc;
    transition:.6s all;
  }
  .cricle span{
    width:29px;
    height:29px;
    background:#fff;
    display:inline-block;
    border-radius:50%;
    box-shadow:1px 1px 3px #ccc;
  }
  .show{
    text-align:right;
    background:lightgreen;
  }
</style>
