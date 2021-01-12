<template>
  <div class="contents6">
    <h1>源泉</h1>
    <div class="contents6-wrap">
      <div class="contents6-form">
        <form action="" name="form">
          <input type="tel" class="gensen" v-model.number="answer">
        </form>
      </div>
      <div class="contents6-select">
        <select v-model = "selected" name="" id="">
          <option v-for="option in options" v-bind:value="option.name" v-bind:key="option.id">
            {{ option.name }}
          </option>
        </select>
      </div>
      <div class="contents6-btn">
        <button class="mbtn" @click="testNum">計算</button>
        <button class="cbtn" @click="clear">クリア</button>
      </div>
      <div class="contents6-comment">
        <p>※金額は半角数字で入力してください</p>
        <p>※利用は自己責任でお願いします</p>
      </div>
      <div class="contents6-result">
        <table class='contents6-table'>
          <tr class='caution'>
          <th>報酬金額 :</th>
          <td id='ghousyuu' v-show="show">{{num1 | number_format}}</td>
          </tr>
          <tr class='caution'>
          <th>所得税額 :</th>
          <td id='gsyotoku' v-show="show">{{num2 | number_format}}</td>
          </tr>
          <tr class='caution'>
          <th>復興税額 :</th>
          <td id='ghukkou' v-show="show">{{num3 | number_format}}</td>
          </tr>
          <tr class='caution'>
          <th>税額合計 :</th>
          <td id='gtotalTax' v-show="show">{{num4 | number_format}}</td>
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
      selected:'講演料等報酬の源泉計算',
      options:[
        {name:'講演料等報酬の源泉計算', id:1},
        {name:'税理士等報酬の源泉計算', id:2}
      ],
      show:false
    }
  },
  methods:{
    testNum:function(){
      var tax = 110
      if(this.selected === 'Name1'){
        if(this.answer <= 897900){
          var val1 = Math.floor(this.answer / 0.8979)
          var val2 = Math.floor(val1 * 0.1)
          var val3 = val4 - val2
          var val4 = Math.floor(val1 * 0.1021)

          this.num1 = val1
          this.num2 = val2
          this.num3 = val3
          this.num4 = val4
          this.show = true
        }else{
          var valplus1 = this.answer - 897900
          var valplus2 = Math.floor(valplus1 / 0.7958)
          var valplus3 = valplus2 + 1000000
          var valplus4 = Math.floor(valplus2 * 0.2042)+102100
          var valplus5 = Math.floor(valplus2 * 0.2)+100000
          var valplus6 = valplus4 - valplus5

          this.num1 = valplus3
          this.num2 = valplus5
          this.num3 = valplus6
          this.num4 = valplus4
          this.show = true
        }
      }else{
        if(this.answer <=977900){
          var val5 = Math.floor(this.answer / (1 - 100 / tax * 0.1021));
          var val6 = Math.floor(val5 * 100 / tax);
          var val7 = Math.floor(val6 * 0.1021);
          var val8 = Math.floor(val6 * 0.1);
          var val9 = val7 - val8;

          this.num1 = val5
          this.num2 = val8
          this.num3 = val9
          this.num4 = val7
          this.show = true

          } else {
          var valplus7 = this.answer - 977900;
          var valplus8 = Math.floor(valplus7 / (1 - 100 / tax * 0.2042));
          var valplus9 = valplus8 + (1000000 * tax / 100);
          var valplus10 = Math.floor(valplus8 * 100 / tax * 0.2042) + 102100;
          var valplus11 = Math.floor(valplus8 * 100 / tax * 0.2) + 100000;
          var valplus12 = valplus10 - valplus11;

          this.num1 = valplus9
          this.num2 = valplus11
          this.num3 = valplus12
          this.num4 = valplus10
          this.show = true

        }
      }
    },
    clear:function(){
      this.show = false
      this.answer = ''
    }
  }
}
</script>

<style lang="scss">

  .contents6 h2 {
      text-align: center;
      padding: 10px;
      font-size: 20px;
  }

  .contents6{
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
