<template>
  <div class="contents7">
    <h1>Contents7</h1>
        <form action="" name="form">
      <input type="tel" class="receipt" v-model.number="answer">
    </form>
    <button class="mbtn" @click="testNum">計算</button>
    <button class="mbtn" @click="clear">クリア</button>
    <p style="color:red" v-show="show">結果1:{{num1 | number_format | addSlice1}}</p>
    <p style="color:blue" v-show="show">結果2:{{num2 | number_format | addSlice2}}</p>
  </div>
</template>

<script>
export default {
  data (){
    return{
      answer: '',
      num1:'',
      num2:'',
      show:false
    }
  },
  methods:{
    testNum:function(){
        this.num1 = this.answer
        this.num2 = this.answer
        this.show = true
    },
    clear:function(){
      this.show = false
      this.answer = ''
    }
  },
    filters:{
    addSlice1(value){
      return value.toString().slice(1)
    },
    addSlice2(value){
      return value.toString().slice(2)
    }
  },
}
</script>

