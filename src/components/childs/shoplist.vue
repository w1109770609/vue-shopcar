<template>
    <div class="shopend">
       <div class="shopList">
            <dl>
                <dt><img src="static/img/1.gif" alt=""></dt>
                <dd>
                    <div class="menu">
                        QWERTYUI欧派水电费规划局快乐的风格和加快人体与
                    </div>
                    <div class="shops">
                        <div class="price">
                            <span>{{price}}</span>
                        </div>
                        <div class="increatment">
                            <span @click="last">-</span>
                            <b>{{num}}</b>
                            <span @click="next">+</span>
                        </div>
                    </div>
                </dd>
            </dl>
        </div>
    </div>
</template>

<script>
export default {
  props:['id','price'],
  data() {
    return {
      num:1,
      sum:''
    }
  },
  mounted(){
     this.last()
     this.next()
  },
  methods:{
      last(){
        this.num--;
        if(this.num<0){
           this.num=0;
        }
        this.$emit("total",{
            id:this.id,
            sum:this.price*this.num
        })
      },
      next(){
        this.num++;
        this.$emit("total",{
            id:this.id,
            sum:this.price*this.num
        })
      }
  }
}
</script>

<style scoped>
    .shopend{
        padding:0 10px;
    }
    .shopList dl{
        display:flex;
    }
    dl dt{
        width:85px;
        height:85px;
    }
    dl dt img{
        width:100%;
        height:100%;
    }
    dl dd{
        padding-left:10px;
        color:#666666;
    }
    dl dd .shops{
        display:flex;
        justify-content:space-between;
        padding:14px 0;
    }
     dl dd .price{
         color:#FC4141;
         font-size:18px;
         font-weight:800;
     }
     dl dd .increatment{
        border:1px solid #ccc;
        border-radius:6px;
        padding:0 10px;
     }
    dl dd .increatment span,dl dd .increatment b{
         width:15px;
        height:34px;
        line-height:34px;
         display:inline-block;
         text-align:center;
     }
     dl dd .increatment b{
         width:35px;
         text-align:center;
         border-left:1px solid #ccc;
         border-right:1px solid #ccc;
     }
     
</style>
