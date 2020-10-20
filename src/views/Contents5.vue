<template>
  <div class="contents5">
    <h1>契約書</h1>
    <form action="" name="form">
      <input type="tel" class="contract" v-model.number="answer">
    </form>
    <select v-model = "selected" name="" id="">
      <option v-for="option in options" v-bind:value="option.name" v-bind:key="option.id">
        {{ option.name }}
      </option>
    </select>
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
      selected:'Name1',
      options:[
        {name:'Name1', id:1},
        {name:'Name2', id:2}
      ],
      show:false
    }
  },
  filters:{
    addComma(value){
      return value.toString().replace( /([0-9]+?)(?=(?:[0-9]{3})+$)/g,'$1,')
    }
  },
  methods:{
    testNum:function(){
      if(this.selected === 'Name1'){
        var val1 = Math.floor(this.answer / 0.7958 * 0.2042)
        var val2 = Math.ceil(val1 * 42/2042 - 0.5)
          this.num1 = val1 + this.answer
          this.num2 = val1 - val2
          this.num3 = val2
          this.num4 = val2 + this.num2
          this.show = true
      }else{
        var val3 = Math.floor(this.answer / 0.84685 * 0.15315)
        var val4 = Math.ceil(val3 * 21/1021 - 0.5)
          this.num1 = val3 + this.answer
          this.num2 = val3 - val4
          this.num3 = val3
          this.num4 = val3 + this.num2
          this.show = true
      }
    },
    // testNum2:function(){
    // },
    clear:function(){
      this.show = false
      this.answer = ''
    }
  }
}
</script>

