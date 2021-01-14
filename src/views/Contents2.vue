<template>
  <div class="contents2">
    <h2>預金利息</h2>
    <div class="contents2-wrap">
      <div class="contents2-form">
        <form action="" name="form">
          金額：
          <input type="tel" class="risoku" v-model.number="answer">
        </form>
      </div>
      <div class="contents2-btn">
        <button class="mbtn" @click="testNum">計算</button>
        <button class="cbtn" @click="clear">クリア</button>
      </div>
      <div class="contents2-comment">
        <p>※金額は半角数字で入力してください</p>
        <p>※利用は自己責任でお願いします</p>
      </div>
      <div class="contents2-result">
        <table class="contents2-table">
          <tr class='caution'>
            <th>受取利息 :</th>
            <td id='c2risoku' v-show="show">{{num1 | number_format}}</td>
          </tr>
          <tr class='caution'>
            <th>所得税額 :</th>
            <td id='c2syotoku' v-show="show">{{num2 | number_format}}</td>
          </tr>
          <tr class='caution'>
            <th>復興税額 :</th>
            <td id='c2hukkou' v-show="show">{{num3 | number_format}}</td>
          </tr>
          <tr class='caution'>
            <th>税額合計 :</th>
            <td id='c2totalTax' v-show="show">{{num4 | number_format}}</td>
          </tr>
        </table>
      </div>
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
      var val1 = Math.floor(this.answer / 0.84685 * 0.15315)
      var val2 = Math.ceil(val1 * 315/15315 - 0.5)
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

<style lang="scss">

.contents2 h2 {
    text-align: center;
    padding: 10px;
    font-size: 20px;
}

.contents2{
  width: 80vw;
  &-form{
    text-align: center;
  }
  &-btn{
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