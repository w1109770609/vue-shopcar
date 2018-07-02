<template>
  <div id="app">
    <section class="section">

      <overall></overall>

      <Heads><span>订单支付</span></Heads>

      <Address :adr="adr"></Address>

      <Computed></Computed>

      <Balance :money="money"></Balance>

    </section>
    <Foots></Foots>
  </div>
</template>

<script>
import Heads from './components/heads'
import Address from './components/address'
import Computed from './components/computed'
import Balance from './components/balance'
import Foots from './components/foots'
import axios from 'axios'

export default {
  name: 'App',
  data(){
    return {
      adr:'',
      money:1200
    }
  },
  components: {
    Heads,
    Address,
    Computed,
    Balance,
    Foots
  },
  mounted(){
      axios.get('/data').then(res=>{
          this.adr=res.data
      })
  }
}
</script>

<style>
  @import url("./css/style.css");
  @import url("./font/iconfont.css");
</style>
