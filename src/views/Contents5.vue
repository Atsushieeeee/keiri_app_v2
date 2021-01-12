<template>
  <div class="contents5">
    <h1>契約書</h1>
    <div class="contents5-wrap">
      <div class="contents5-form">
        <form action="" name="form">
          <input type="tel" class="contract" v-model.number="answer">
        </form>
      </div>
      <div class="contents5-select">
        <select v-model = "selected" name="" id="">
          <option v-for="option in options" v-bind:value="option.name" v-bind:key="option.id">
            {{ option.name }}
          </option>
        </select>
      </div>
      <div class="contents5-btn">
        <button class="mbtn" @click="testNum">計算</button>
        <button class="mbtn" @click="clear">クリア</button>
      </div>
      <div class="contents5-comment">
        <p>※金額は半角数字で入力してください</p>
        <p>※利用は自己責任でお願いします</p>
      </div>
      <div class="contents5-result">

      </div>
      <p style="color:red" v-show="show">結果1:{{num1 | number_format}}</p>
      <p style="color:blue" v-show="show">結果2:{{num2 | number_format}}</p>
      <p style="color:green" v-show="show">結果3:{{num3 | number_format}}</p>
      <p style="color:orange" v-show="show">結果4:{{num4 | number_format}}</p>
    </div>
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
      selected:'不動産、鉱業権、無体財産権、船舶若しくは航空機又は営業の譲渡に関する契約書',
      options:[
        {name:'不動産、鉱業権、無体財産権、船舶若しくは航空機又は営業の譲渡に関する契約書', id:1},
        {name:'請負に関する契約書', id:2}
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

<style lang="scss">

  .contents5 h2 {
      text-align: center;
      padding: 10px;
      font-size: 20px;
  }

  .contents5{
    width: 80vw;
    &-form{
      text-align: center;
    }
    &-button{
      text-align: center;
      padding: 10px;  
    }
    &-comment{
      padding: 10px;
      text-align: center;
      p{
      font-size: 11px;
      color: #BDBDBD;
      }
    }
    &-result{
      text-align: center;
      font-size: 14px;
    }
    &-table{
      font-size: 14px;
      margin: 0 auto;
      tr th{
        color: #424242;
        font-weight: normal;
      }
    }
  }
</style>
