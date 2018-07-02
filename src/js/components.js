import Vue from 'vue'
import Bus from './globelBus'

export default Vue.component('overall', {
    data() {
        return {
            style: {
                borderRadius: '15px',
                background: '#333333',
                color: '#fff',
                width: '70%',
                textAlign: 'center',
                lineHeight: 2.4,
                position: 'absolute',
                bottom: '50px',
                left: '15%'
            },
            flag: false,
            num: '',
            num1: ''
        }
    },
    template: `<transition  enter-active-class="animated bounceInRight"
  leave-active-class="animated fadeOutDown"><div class="menus" :style="style" v-show="flag">
      金额不足,请选择其他方式!
    </div></transition>`,
    mounted() {
        Bus.$on('index', res => {
            this.num = res.a
            this.num1 = res.b
            console.log(this.num)
            console.log(this.num1)
            if (this.num1 > 0) {
                if (this.num < this.num1) {
                    this.flag = true
                } else {
                    this.flag = false
                }
            }
            setTimeout(() => {
                this.flag = false
            }, 3000)
        })
    }
})