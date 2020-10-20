<template>
  <div class="contents4">
    <h1>非上場株式配当金</h1>
    <form action="" name="form">
      <input type="tel" class="h-haitou" v-model.number="answer">
    </form>
    <button class="mbtn" @click="testNum">計算</button>
    <button class="mbtn" @click="clear">クリア</button>
    <p style="color:red" v-show="show">結果1:{{num1 | number_format}}</p>
    <p style="color:blue" v-show="show">結果2:{{num2 | number_format}}</p>
    <p style="color:green" v-show="show">結果3:{{num3 | number_format}}</p>
    <p style="color:orange" v-show="show">結果4:{{num4 | number_format}}</p>


    <p></p>
  </div>
</template>


<script>
export default {
  data (){
    return{
      answer: '',
      num1:'',
      num2:'',
      num3:'',
      num4:'',
      show:false
    }
  },
  methods:{
    testNum:function(){
      var val1 = Math.floor(this.answer / 0.7958 * 0.2042)
      var val2 = Math.ceil(val1 * 42/2042 - 0.5)
        this.num1 = val1 + this.answer
        this.num2 = val1 - val2
        this.num3 = val2
        this.num4 = val2 + this.num2
        this.show = true
    },
    clear:function(){
      this.show = false
      this.answer = ''
    }
  }
}
</script>

