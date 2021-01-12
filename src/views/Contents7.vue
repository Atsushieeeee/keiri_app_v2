<template>
  <div class="contents7">
    <h2>売上代金に係る金銭又は有価証券の受取書</h2>
    <div class="contents7-wrap">
      <div class="contents7-left">
        <div class="contents7-form">
          <form action="" name="form">
            <p>金額入力:</p>
            <input type="tel" class="receipt" v-model.number="answer">
          </form>
        </div>
        <div class="contents7-select">
          <select v-model = "selected" name="" id="">
            <option v-for="option in options" v-bind:value="option.name" v-bind:key="option.id">
              {{ option.name }}
            </option>
          </select>
        </div>
        <div class="contents7-btn">
          <button class="mbtn" @click="testNum">計算</button>
          <button class="cbtn" @click="clear">クリア</button>
        </div>
        <div class="contents7-result">
          <p style="color:red" v-show="show">結果1:{{num1 | number_format}}</p>
          <p style="color:blue" v-show="show">結果2:{{num2 | number_format}}</p>
          <p style="color:green" v-show="show">結果3:{{num3 | number_format}}</p>
          <p style="color:orange" v-show="show">結果4:{{num4 | number_format}}</p>
          <p style="color:red" v-show="show">結果11:{{num11 | number_format}}</p>
          <p style="color:blue" v-show="show">結果12:{{num12 | number_format}}</p>
          <p style="color:green" v-show="show">結果13:{{num13 | number_format}}</p>
          <p style="color:orange" v-show="show">結果14:{{num14 | number_format}}</p>
          <p style="color:green" v-show="show">結果15:{{num15 | number_format}}</p>
          <p style="color:orange" v-show="show">結果16:{{num16 | number_format}}</p>
        </div>
      </div>
      <div class="contents7-right">
        <div class='contents7-data'>
          <table class='contents7-table'>
            <tr>
            <th>記載金額</th>
            <td>税額</td>
            <th>記載金額</th>
            <td>税額</td>
            </tr>
            <tr>
            <th>5万円未満</th>
            <td>非課税</td>
            <td>3千万円を超え5千万円以下</td>
            <td>1万円</td>
            </tr>
            <tr>
            <th>5万円以上100万円以下</th>
            <td>200円</td>
            <td>5千万円を超え1億円以下</td>
            <td>2万円</td>
            </tr>
            <tr>
            <th>100万円を超え200万円以下</th>
            <td>400円</td>
            <td>1億円を超え2億円以下</td>
            <td>4万円</td>
            </tr>
            <tr>
            <th>200万円を超え300万円以下</th>
            <td>600円</td>
            <td>2億円を超え3億円以下</td>
            <td>6万円</td>
            </tr>
            <tr>
            <th>300万円を超え500万円以下</th>
            <td>1千円</td>
            <td>3億円を超え5億円以下</td>
            <td>10万円</td>
            </tr>
            <tr>
            <th>500万円を超え1千万円以下</th>
            <td>2千円</td>
            <td>5億円を超え10億円以下</td>
            <td>15万円</td>
            </tr>
            <tr>
            <th>1千万円を超え2千万円以下</th>
            <td>4千円</td>
            <td>10億円を超えるもの</td>
            <td>20万円</td>
            </tr>
            <tr>
            <th>2千万円を超え3千万円以下</th>
            <td>6千円</td>
            <td></td>
            <td></td>
            </tr>
          </table>
        </div>
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
      num11:'',
      num12:'',
      num13:'',
      num14:'',
      num15:'',
      num16:'',
      selected:'受取書2枚',
      options:[
        {name:'受取書2枚', id:1},
        {name:'受取書3枚', id:2}
      ],
      show:false
    }
  },
  methods:{
    testNum:function(){
      var cash = this.answer
      var st0 = "0円"
      var st200 = "200円"
      var st400 = "400円"
      var st600 = "600円"
      var st1k = "1000円"
      var st2k = "2000円"
      var st4k = "4000円"
      var st6k = "6000円"
      var st10k = "10000円"
      var st20k = "20000円"
      var st40k = "40000円"
      var st60k = "60000円"
      var st100k = "100000円"
      var st150k = "150000円"
      var st200k = "200000円"

      if(this.selected === 'Name1'){

        if (0 <= cash && cash <= 54999) { this.num1 = cash , this.num2 = "", this.num3 = st0, this.num4 = ""}																									
        else if (55000 <= cash && cash <= 1000000) { this.num1 = cash , this.num2 = "", this.num3 = st200, this.num4 = ""}																									
        else if (1000001 <= cash && cash <= 1054999) { this.num1 = "1000000" , this.num2 = cash - 1000000, this.num3 = st200, this.num4 = st0}																									
        else if (1055000 <= cash && cash <= 2000000) { this.num1 = cash, this.num2 = "", this.num3 = st400, this.num4 = ""}																									
        else if (2000001 <= cash && cash <= 2054999) { this.num1 = "2000000" , this.num2 = cash - 2000000, this.num3 = st400, this.num4 = st0}																									
        else if (2055000 <= cash && cash <= 3000000) { this.num1 = cash, this.num2 = "", this.num3 = st600, this.num4 = ""}																									
        else if (3000001 <= cash && cash <= 3054999) { this.num1 = "3000000" , this.num2 = cash - 3000000, this.num3 = st600, this.num4 = st0}																									
        else if (3055000 <= cash && cash <= 4000000) { this.num1 = "3000000" , this.num2 = cash - 3000000, this.num3 = st600, this.num4 = st200}																									
        else if (4000001 <= cash && cash <= 5000000) { this.num1 = cash, this.num2 = "", this.num3 = st1k, this.num4 = ""}																									
        else if (5000001 <= cash && cash <= 5054999) { this.num1 = "5000000" , this.num2 = cash - 5000000, this.num3 = st1k, this.num4 = st0}																									
        else if (5055000 <= cash && cash <= 6000000) { this.num1 = "5000000" , this.num2 = cash - 5000000, this.num3 = st1k, this.num4 = st200}																									
        else if (6000001 <= cash && cash <= 7000000) { this.num1 = "5000000" , this.num2 = cash - 5000000, this.num3 = st1k, this.num4 = st400}																									
        else if (7000001 <= cash && cash <= 8000000) { this.num1 = "5000000" , this.num2 = cash - 5000000, this.num3 = st1k, this.num4 = st600}																									
        else if (8000001 <= cash && cash <= 10000000) { this.num1 = cash, this.num2 = "", this.num3 = st2k, this.num4 = ""}																									
        else if (10000001 <= cash && cash <= 10054999) { this.num1 = "10000000" , this.num2 = cash - 10000000, this.num3 = st2k, this.num4 = st0}																									
        else if (10055000 <= cash && cash <= 11000000) { this.num1 = "10000000" , this.num2 = cash - 10000000, this.num3 = st2k, this.num4 = st200}																									
        else if (11000001 <= cash && cash <= 12000000) { this.num1 = "10000000" , this.num2 = cash - 10000000, this.num3 = st2k, this.num4 = st400}																									
        else if (12000001 <= cash && cash <= 13000000) { this.num1 = "10000000" , this.num2 = cash - 10000000, this.num3 = st2k, this.num4 = st600}																									
        else if (13000001 <= cash && cash <= 15000000) { this.num1 = "10000000" , this.num2 = cash - 10000000, this.num3 = st2k, this.num4 = st1k}																									
        else if (15000001 <= cash && cash <= 20000000) { this.num1 = cash, this.num2 = "", this.num3 = st4k, this.num4 = ""}																									
        else if (20000001 <= cash && cash <= 20054999) { this.num1 = "20000000" , this.num2 = cash - 20000000, this.num3 = st4k, this.num4 = st0}																									
        else if (20055000 <= cash && cash <= 21000000) { this.num1 = "20000000" , this.num2 = cash - 20000000, this.num3 = st4k, this.num4 = st200}																									
        else if (21000001 <= cash && cash <= 22000000) { this.num1 = "20000000" , this.num2 = cash - 20000000, this.num3 = st4k, this.num4 = st400}																									
        else if (22000001 <= cash && cash <= 23000000) { this.num1 = "20000000" , this.num2 = cash - 20000000, this.num3 = st4k, this.num4 = st600}																									
        else if (23000001 <= cash && cash <= 25000000) { this.num1 = "20000000" , this.num2 = cash - 20000000, this.num3 = st4k, this.num4 = st1k}																									
        else if (25000001 <= cash && cash <= 30000000) { this.num1 = cash, this.num2 = "", this.num3 = st6k, this.num4 = ""}																									
        else if (30000001 <= cash && cash <= 30054999) { this.num1 = "30000000" , this.num2 = cash - 30000000, this.num3 = st6k, this.num4 = st0}																									
        else if (30055000 <= cash && cash <= 31000000) { this.num1 = "30000000" , this.num2 = cash - 30000000, this.num3 = st6k, this.num4 = st200}																									
        else if (31000001 <= cash && cash <= 32000000) { this.num1 = "30000000" , this.num2 = cash - 30000000, this.num3 = st6k, this.num4 = st400}																									
        else if (32000001 <= cash && cash <= 33000000) { this.num1 = "30000000" , this.num2 = cash - 30000000, this.num3 = st6k, this.num4 = st600}																									
        else if (33000001 <= cash && cash <= 35000000) { this.num1 = "30000000" , this.num2 = cash - 30000000, this.num3 = st6k, this.num4 = st1k}																									
        else if (35000001 <= cash && cash <= 40000000) { this.num1 = "30000000", this.num2 = cash - 30000000, this.num3 = st6k, this.num4 = st2k}																									
        else if (40000001 <= cash && cash <= 50000000) { this.num1 = cash, this.num2 = "", this.num3 = st10k, this.num4 = ""}																									
        else if (50000001 <= cash && cash <= 50054999) { this.num1 = "50000000" , this.num2 = cash - 50000000, this.num3 = st10k, this.num4 = st0}																									
        else if (50055000 <= cash && cash <= 51000000) { this.num1 = "50000000" , this.num2 = cash - 50000000, this.num3 = st10k, this.num4 = st200}																									
        else if (51000001 <= cash && cash <= 52000000) { this.num1 = "50000000" , this.num2 = cash - 50000000, this.num3 = st10k, this.num4 = st400}																									
        else if (52000001 <= cash && cash <= 53000000) { this.num1 = "50000000" , this.num2 = cash - 50000000, this.num3 = st10k, this.num4 = st600}																									
        else if (53000001 <= cash && cash <= 55000000) { this.num1 = "50000000" , this.num2 = cash - 50000000, this.num3 = st10k, this.num4 = st1k}																									
        else if (55000001 <= cash && cash <= 60000000) { this.num1 = "50000000", this.num2 = cash - 50000000, this.num3 = st10k, this.num4 = st2k}																									
        else if (60000001 <= cash && cash <= 70000000) { this.num1 = "50000000" , this.num2 = cash - 50000000, this.num3 = st10k, this.num4 = st4k}																									
        else if (70000001 <= cash && cash <= 80000000) { this.num1 = "50000000" , this.num2 = cash - 50000000, this.num3 = st10k, this.num4 = st6k}																									
        else if (80000001 <= cash && cash <= 100000000) { this.num1 = cash, this.num2 = "", this.num3 = st20k, this.num4 = ""}																									
        else if (100000001 <= cash && cash <= 100054999) { this.num1 = "100000000" , this.num2 = cash - 100000000, this.num3 = st20k, this.num4 = st0}																									
        else if (100055000 <= cash && cash <= 101000000) { this.num1 = "100000000" , this.num2 = cash - 100000000, this.num3 = st20k, this.num4 = st200}																									
        else if (101000001 <= cash && cash <= 102000000) { this.num1 = "100000000" , this.num2 = cash - 100000000, this.num3 = st20k, this.num4 = st400}																									
        else if (102000001 <= cash && cash <= 103000000) { this.num1 = "100000000" , this.num2 = cash - 100000000, this.num3 = st20k, this.num4 = st600}																									
        else if (103000001 <= cash && cash <= 105000000) { this.num1 = "100000000" , this.num2 = cash - 100000000, this.num3 = st20k, this.num4 = st1k}																									
        else if (105000001 <= cash && cash <= 110000000) { this.num1 = "100000000", this.num2 = cash - 100000000, this.num3 = st20k, this.num4 = st2k}																									
        else if (110000001 <= cash && cash <= 120000000) { this.num1 = "100000000" , this.num2 = cash - 100000000, this.num3 = st20k, this.num4 = st4k}																									
        else if (120000001 <= cash && cash <= 130000000) { this.num1 = "100000000" , this.num2 = cash - 100000000, this.num3 = st20k, this.num4 = st6k}																									
        else if (130000001 <= cash && cash <= 150000000) { this.num1 = "100000000" , this.num2 = cash - 100000000, this.num3 = st20k, this.num4 = st10k}																									
        else if (150000001 <= cash && cash <= 200000000) { this.num1 = cash , this.num2 = "", this.num3 = st40k, this.num4 = ""}																									
        else if (200000001 <= cash && cash <= 200054999) { this.num1 = "200000000" , this.num2 = cash - 200000000, this.num3 = st40k, this.num4 = st0}																									
        else if (200055000 <= cash && cash <= 201000000) { this.num1 = "200000000" , this.num2 = cash - 200000000, this.num3 = st40k, this.num4 = st200}																									
        else if (201000001 <= cash && cash <= 202000000) { this.num1 = "200000000" , this.num2 = cash - 200000000, this.num3 = st40k, this.num4 = st400}																									
        else if (202000001 <= cash && cash <= 203000000) { this.num1 = "200000000" , this.num2 = cash - 200000000, this.num3 = st40k, this.num4 = st600}																									
        else if (203000001 <= cash && cash <= 205000000) { this.num1 = "200000000" , this.num2 = cash - 200000000, this.num3 = st40k, this.num4 = st1k}																									
        else if (205000001 <= cash && cash <= 210000000) { this.num1 = "200000000", this.num2 = cash - 200000000, this.num3 = st40k, this.num4 = st2k}																									
        else if (210000001 <= cash && cash <= 220000000) { this.num1 = "200000000" , this.num2 = cash - 200000000, this.num3 = st40k, this.num4 = st4k}																									
        else if (220000001 <= cash && cash <= 230000000) { this.num1 = "200000000" , this.num2 = cash - 200000000, this.num3 = st40k, this.num4 = st6k}																									
        else if (230000001 <= cash && cash <= 250000000) { this.num1 = "200000000" , this.num2 = cash - 200000000, this.num3 = st40k, this.num4 = st10k}																									
        else if (250000001 <= cash && cash <= 300000000) { this.num1 = cash , this.num2 = "", this.num3 = st60k, this.num4 = ""}																									
        else if (300000001 <= cash && cash <= 300054999) { this.num1 = "300000000" , this.num2 = cash - 300000000, this.num3 = st60k, this.num4 = st0}																									
        else if (300055000 <= cash && cash <= 301000000) { this.num1 = "300000000" , this.num2 = cash - 300000000, this.num3 = st60k, this.num4 = st200}																									
        else if (301000001 <= cash && cash <= 302000000) { this.num1 = "300000000" , this.num2 = cash - 300000000, this.num3 = st60k, this.num4 = st400}																									
        else if (302000001 <= cash && cash <= 303000000) { this.num1 = "300000000" , this.num2 = cash - 300000000, this.num3 = st60k, this.num4 = st600}																									
        else if (303000001 <= cash && cash <= 305000000) { this.num1 = "300000000" , this.num2 = cash - 300000000, this.num3 = st60k, this.num4 = st1k}																									
        else if (305000001 <= cash && cash <= 310000000) { this.num1 = "300000000", this.num2 = cash - 300000000, this.num3 = st60k, this.num4 = st2k}																									
        else if (310000001 <= cash && cash <= 320000000) { this.num1 = "300000000" , this.num2 = cash - 300000000, this.num3 = st60k, this.num4 = st4k}																									
        else if (320000001 <= cash && cash <= 330000000) { this.num1 = "300000000" , this.num2 = cash - 300000000, this.num3 = st60k, this.num4 = st6k}																									
        else if (330000001 <= cash && cash <= 350000000) { this.num1 = "300000000" , this.num2 = cash - 300000000, this.num3 = st60k, this.num4 = st10k}																									
        else if (350000001 <= cash && cash <= 400000000) { this.num1 = "300000000" , this.num2 = cash - 300000000, this.num3 = st60k, this.num4 = st20k}																									
        else if (400000001 <= cash && cash <= 500000000) { this.num1 = cash , this.num2 = "", this.num3 = st100k, this.num4 = ""}																									
        else if (500000001 <= cash && cash <= 500054999) { this.num1 = "500000000" , this.num2 = cash - 500000000, this.num3 = st100k, this.num4 = st0}																									
        else if (500055000 <= cash && cash <= 501000000) { this.num1 = "500000000" , this.num2 = cash - 500000000, this.num3 = st100k, this.num4 = st200}																									
        else if (501000001 <= cash && cash <= 502000000) { this.num1 = "500000000" , this.num2 = cash - 500000000, this.num3 = st100k, this.num4 = st400}																									
        else if (502000001 <= cash && cash <= 503000000) { this.num1 = "500000000" , this.num2 = cash - 500000000, this.num3 = st100k, this.num4 = st600}																									
        else if (503000001 <= cash && cash <= 505000000) { this.num1 = "500000000" , this.num2 = cash - 500000000, this.num3 = st100k, this.num4 = st1k}																									
        else if (505000001 <= cash && cash <= 510000000) { this.num1 = "500000000", this.num2 = cash - 500000000, this.num3 = st100k, this.num4 = st2k}																									
        else if (510000001 <= cash && cash <= 520000000) { this.num1 = "500000000" , this.num2 = cash - 500000000, this.num3 = st100k, this.num4 = st4k}																									
        else if (520000001 <= cash && cash <= 530000000) { this.num1 = "500000000" , this.num2 = cash - 500000000, this.num3 = st100k, this.num4 = st6k}																									
        else if (530000001 <= cash && cash <= 550000000) { this.num1 = "500000000" , this.num2 = cash - 500000000, this.num3 = st100k, this.num4 = st10k}																									
        else if (550000001 <= cash && cash <= 600000000) { this.num1 = "500000000" , this.num2 = cash - 500000000, this.num3 = st100k, this.num4 = st20k}																									
        else if (600000001 <= cash && cash <= 700000000) { this.num1 = "500000000" , this.num2 = cash - 500000000, this.num3 = st100k, this.num4 = st40k}																									
        else if (700000001 <= cash && cash <= 1000000000) { this.num1 = cash , this.num2 = "", this.num3 = st150k, this.num4 = ""}																									
        else if (1000000001 <= cash) { this.num1 = cash , this.num2 = "", this.num3 = st200k, this.num4 = ""}		

        this.show = true

      }else{

        if (0 <= cash && cash <= 54999) { this.num11 = cash , this.num12 = "",this.num13 = "", this.num14 = st0, this.num15 = "", this.num16 = ""}																									
        else if (55000 <= cash && cash <= 1000000) { this.num11 = cash , this.num12 = "",this.num13 = "", this.num14 = st200, this.num15 = "", this.num16 = ""}																									
        else if (1000001 <= cash && cash <= 1054999) { this.num11 = "1000000" , this.num12 = cash - 1000000, this.num13 = "", this.num14 = st200, this.num15 = st0, this.num16 = ""}																									
        else if (1055000 <= cash && cash <= 2000000) { this.num11 = cash , this.num12 = "",this.num13 = "", this.num14 = st400, this.num15 = "", this.num16 = ""}																									
        else if (2000001 <= cash && cash <= 2054999) { this.num11 = "2000000" , this.num12 = cash - 2000000, this.num13 = "", this.num14 = st400, this.num15 = st0, this.num16 = ""}																									
        else if (2055000 <= cash && cash <= 3000000) { this.num11 = cash , this.num12 = "", this.num13 = "", this.num14 = st600, this.num15 = "", this.num16 = ""}																									
        else if (3000001 <= cash && cash <= 3054999) { this.num11 = "3000000" , this.num12 = cash - 3000000, this.num13 = "", this.num14 = st600, this.num15 = st0, this.num16 = ""}																									
        else if (3050000 <= cash && cash <= 4000000) { this.num11 = "3000000" , this.num12 = cash - 3000000, this.num13 = "", this.num14 = st600, this.num15 = st200, this.num16 = ""}																									
        else if (4000001 <= cash && cash <= 4054999) { this.num11 = "3000000" , this.num12 = "1000000", this.num13 = cash - 4000000, this.num14 = st600, this.num15 = st200, this.num16 = st0}																									
        else if (4055000 <= cash && cash <= 5000000) { this.num11 = cash , this.num12 = "", this.num13 = "", this.num14 = st1k, this.num15 = "", this.num16 = ""}																									
        else if (5000001 <= cash && cash <= 5054999) { this.num11 = "5000000" , this.num12 = cash - 5000000, this.num13 = "", this.num14 = st1k, this.num15 = st0, this.num16 = ""}																									
        else if (5055000 <= cash && cash <= 6000000) { this.num11 = "5000000" , this.num12 = cash - 5000000, this.num13 = "", this.num14 = st1k, this.num15 = st200, this.num16 = ""}																									
        else if (6000001 <= cash && cash <= 6054999) { this.num11 = "5000000" , this.num12 = "1000000", this.num13 = cash - 6000000, this.num14 = st1k, this.num15 = st200, this.num16 = st0}																									
        else if (6055000 <= cash && cash <= 7000000) { this.num11 = "5000000" , this.num12 = cash - 5000000, this.num13 = "", this.num14 = st1k, this.num15 = st400, this.num16 = ""}																									
        else if (7000001 <= cash && cash <= 7054999) { this.num11 = "5000000" , this.num12 = "2000000", this.num13 = cash - 7000000, this.num14 = st1k, this.num15 = st400, this.num16 = st0}																									
        else if (7055000 <= cash && cash <= 8000000) { this.num11 = "5000000" , this.num12 = cash - 5000000, this.num13 = "", this.num14 = st1k, this.num15 = st600, this.num16 = ""}																									
        else if (8000001 <= cash && cash <= 8054999) { this.num11 = "5000000" , this.num12 = "3000000", this.num13 = cash - 8000000, this.num14 = st1k, this.num15 = st600, this.num16 = st0}																									
        else if (8055000 <= cash && cash <= 9000000) { this.num11 = "5000000" , this.num12 = "3000000", this.num13 = cash - 8000000, this.num14 = st1k, this.num15 = st600, this.num16 = st200}																									
        else if (9000001 <= cash && cash <= 10000000) { this.num11 = cash , this.num12 = "", this.num13 = "", this.num14 = st2k, this.num15 = "", this.num16 = ""}																									
        else if (10000001 <= cash && cash <= 10054999) { this.num11 = "10000000" , this.num12 = cash - 10000000, this.num13 = "", this.num14 = st2k, this.num15 = st0, this.num16 = ""}																									
        else if (10055000 <= cash && cash <= 11000000) { this.num11 = "10000000" , this.num12 = cash - 10000000, this.num13 = "", this.num14 = st2k, this.num15 = st200, this.num16 = ""}																									
        else if (11000001 <= cash && cash <= 11054999) { this.num11 = "10000000" , this.num12 = "1000000", this.num13 = cash - 11000000, this.num14 = st2k, this.num15 = st200, this.num16 = st0}																									
        else if (11055000 <= cash && cash <= 12000000) { this.num11 = "10000000" , this.num12 = cash - 10000000, this.num13 = "", this.num14 = st2k, this.num15 = st400, this.num16 = ""}																									
        else if (12000001 <= cash && cash <= 12054999) { this.num11 = "10000000" , this.num12 = "2000000", this.num13 = cash - 12000000, this.num14 = st2k, this.num15 = st400, this.num16 = st0}																									
        else if (12055000 <= cash && cash <= 13000000) { this.num11 = "10000000" , this.num12 = cash - 10000000, this.num13 = "", this.num14 = st2k, this.num15 = st600, this.num16 = ""}																									
        else if (13000001 <= cash && cash <= 13054999) { this.num11 = "10000000" , this.num12 = "3000000", this.num13 = cash - 13000000, this.num14 = st2k, this.num15 = st600, this.num16 = st0}																									
        else if (13055000 <= cash && cash <= 14000000) { this.num11 = "10000000" , this.num12 = "3000000", this.num13 = cash - 13000000, this.num14 = st2k, this.num15 = st600, this.num16 = st200}																									
        else if (14000001 <= cash && cash <= 15000000) { this.num11 = "10000000" , this.num12 = cash - 10000000, this.num13 = "", this.num14 = st2k, this.num15 = st1k, this.num16 = ""}																									
        else if (15000001 <= cash && cash <= 15054999) { this.num11 = "10000000" , this.num12 = "5000000", this.num13 = cash - 15000000, this.num14 = st2k, this.num15 = st1k, this.num16 = st0}																									
        else if (15055000 <= cash && cash <= 16000000) { this.num11 = "10000000" , this.num12 = "5000000", this.num13 = cash - 15000000, this.num14 = st2k, this.num15 = st1k, this.num16 = st200}																									
        else if (16000001 <= cash && cash <= 17000000) { this.num11 = "10000000" , this.num12 = "5000000", this.num13 = cash - 15000000, this.num14 = st2k, this.num15 = st1k, this.num16 = st400}																									
        else if (17000001 <= cash && cash <= 18000000) { this.num11 = "10000000" , this.num12 = "5000000", this.num13 = cash - 15000000, this.num14 = st2k, this.num15 = st1k, this.num16 = st600}																									
        else if (18000001 <= cash && cash <= 20000000) { this.num11 = cash , this.num12 = "", this.num13 = "", this.num14 = st4k, this.num15 = "", this.num16 = ""}																									
        else if (20000001 <= cash && cash <= 20054999) { this.num11 = "20000000" , this.num12 = cash - 20000000, this.num13 = "", this.num14 = st4k, this.num15 = st0, this.num16 = ""}																									
        else if (20055000 <= cash && cash <= 21000000) { this.num11 = "20000000" , this.num12 = cash - 20000000, this.num13 = "", this.num14 = st4k, this.num15 = st200, this.num16 = ""}																									
        else if (21000001 <= cash && cash <= 21054999) { this.num11 = "20000000" , this.num12 = "1000000", this.num13 = cash - 21000000, this.num14 = st4k, this.num15 = st200, this.num16 = st0}																									
        else if (21055000 <= cash && cash <= 22000000) { this.num11 = "20000000" , this.num12 = cash - 20000000, this.num13 = "", this.num14 = st4k, this.num15 = st400, this.num16 = ""}																									
        else if (22000001 <= cash && cash <= 22054999) { this.num11 = "20000000" , this.num12 = "2000000", this.num13 = cash - 22000000, this.num14 = st4k, this.num15 = st400, this.num16 = st0}																									
        else if (22055000 <= cash && cash <= 23000000) { this.num11 = "20000000" , this.num12 = cash - 20000000, this.num13 = "", this.num14 = st4k, this.num15 = st600, this.num16 = ""}																									
        else if (23000001 <= cash && cash <= 23054999) { this.num11 = "20000000" , this.num12 = "3000000", this.num13 = cash - 23000000, this.num14 = st4k, this.num15 = st600, this.num16 = st0}																									
        else if (23055000 <= cash && cash <= 24000000) { this.num11 = "20000000" , this.num12 = "3000000", this.num13 = cash - 23000000, this.num14 = st4k, this.num15 = st600, this.num16 = st200}																									
        else if (24000001 <= cash && cash <= 25000000) { this.num11 = "20000000" , this.num12 = cash - 20000000, this.num13 = "", this.num14 = st4k, this.num15 = st1k, this.num16 = ""}																									
        else if (25000001 <= cash && cash <= 25054999) { this.num11 = "20000000" , this.num12 = "5000000", this.num13 = cash - 25000000, this.num14 = st4k, this.num15 = st1k, this.num16 = st0}																									
        else if (25055000 <= cash && cash <= 26000000) { this.num11 = "20000000" , this.num12 = "5000000", this.num13 = cash - 25000000, this.num14 = st4k, this.num15 = st1k, this.num16 = st200}																									
        else if (26000001 <= cash && cash <= 27000000) { this.num11 = "20000000" , this.num12 = "5000000", this.num13 = cash - 25000000, this.num14 = st4k, this.num15 = st1k, this.num16 = st400}																									
        else if (27000001 <= cash && cash <= 28000000) { this.num11 = "20000000" , this.num12 = "5000000", this.num13 = cash - 25000000, this.num14 = st4k, this.num15 = st1k, this.num16 = st600}																									
        else if (28000001 <= cash && cash <= 30000000) { this.num11 = cash , this.num12 = "", this.num13 = "", this.num14 = st6k, this.num15 = "", this.num16 = ""}																									
        else if (30000001 <= cash && cash <= 30054999) { this.num11 = "30000000" , this.num12 = cash - 30000000, this.num13 = "", this.num14 = st6k, this.num15 = st0, this.num16 = ""}																									
        else if (30055000 <= cash && cash <= 31000000) { this.num11 = "30000000" , this.num12 = cash - 30000000, this.num13 = "", this.num14 = st6k, this.num15 = st200, this.num16 = ""}																									
        else if (31000001 <= cash && cash <= 31054999) { this.num11 = "30000000" , this.num12 = "1000000", this.num13 = cash - 31000000, this.num14 = st6k, this.num15 = st200, this.num16 = st0}																									
        else if (31055000 <= cash && cash <= 32000000) { this.num11 = "30000000" , this.num12 = cash - 30000000, this.num13 = "", this.num14 = st6k, this.num15 = st400, this.num16 = ""}																									
        else if (32000001 <= cash && cash <= 32054999) { this.num11 = "30000000" , this.num12 = "2000000", this.num13 = cash - 32000000, this.num14 = st6k, this.num15 = st400, this.num16 = st0}																									
        else if (32055000 <= cash && cash <= 33000000) { this.num11 = "30000000" , this.num12 = cash - 30000000, this.num13 = "", this.num14 = st6k, this.num15 = st600, this.num16 = ""}																									
        else if (33000001 <= cash && cash <= 33054999) { this.num11 = "30000000" , this.num12 = "3000000", this.num13 = cash - 33000000, this.num14 = st6k, this.num15 = st600, this.num16 = st0}																									
        else if (33055000 <= cash && cash <= 34000000) { this.num11 = "30000000" , this.num12 = "3000000", this.num13 = cash - 33000000, this.num14 = st6k, this.num15 = st600, this.num16 = st200}																									
        else if (34000001 <= cash && cash <= 35000000) { this.num11 = "30000000" , this.num12 = cash - 30000000, this.num13 = "", this.num14 = st6k, this.num15 = st1k, this.num16 = ""}																									
        else if (35000001 <= cash && cash <= 35054999) { this.num11 = "30000000" , this.num12 = "5000000", this.num13 = cash - 35000000, this.num14 = st6k, this.num15 = st1k, this.num16 = st0}																									
        else if (35055000 <= cash && cash <= 36000000) { this.num11 = "30000000" , this.num12 = "5000000", this.num13 = cash - 35000000, this.num14 = st6k, this.num15 = st1k, this.num16 = st200}																									
        else if (36000001 <= cash && cash <= 37000000) { this.num11 = "30000000" , this.num12 = "5000000", this.num13 = cash - 35000000, this.num14 = st6k, this.num15 = st1k, this.num16 = st400}																									
        else if (37000001 <= cash && cash <= 38000000) { this.num11 = "30000000" , this.num12 = "5000000", this.num13 = cash - 35000000, this.num14 = st6k, this.num15 = st1k, this.num16 = st600}																									
        else if (38000001 <= cash && cash <= 40000000) { this.num11 = "30000000" , this.num12 = cash - 30000000, this.num13 = "", this.num14 = st6k, this.num15 = st2k, this.num16 = ""}																									
        else if (40000001 <= cash && cash <= 40054999) { this.num11 = "30000000" , this.num12 = "10000000", this.num13 = cash - 40000000, this.num14 = st6k, this.num15 = st2k, this.num16 = st0}																									
        else if (40055000 <= cash && cash <= 41000000) { this.num11 = "30000000" , this.num12 = "10000000", this.num13 = cash - 40000000, this.num14 = st6k, this.num15 = st2k, this.num16 = st200}																									
        else if (41000001 <= cash && cash <= 42000000) { this.num11 = "30000000" , this.num12 = "10000000", this.num13 = cash - 40000000, this.num14 = st6k, this.num15 = st2k, this.num16 = st400}																									
        else if (42000001 <= cash && cash <= 43000000) { this.num11 = "30000000" , this.num12 = "10000000", this.num13 = cash - 40000000, this.num14 = st6k, this.num15 = st2k, this.num16 = st600}																									
        else if (43000001 <= cash && cash <= 45000000) { this.num11 = "30000000" , this.num12 = "10000000", this.num13 = cash - 40000000, this.num14 = st6k, this.num15 = st2k, this.num16 = st1k}																									
        else if (45000001 <= cash && cash <= 50000000) { this.num11 = cash , this.num12 = "", this.num13 = "", this.num14 = st10k, this.num15 = "", this.num16 = ""}																									
        else if (50000001 <= cash && cash <= 50054999) { this.num11 = "50000000" , this.num12 = cash - 50000000, this.num13 = "", this.num14 = st10k, this.num15 = st0, this.num16 = ""}																									
        else if (50055000 <= cash && cash <= 51000000) { this.num11 = "50000000" , this.num12 = cash - 50000000, this.num13 = "", this.num14 = st10k, this.num15 = st200, this.num16 = ""}																									
        else if (51000001 <= cash && cash <= 51054999) { this.num11 = "50000000" , this.num12 = "1000000", this.num13 = cash - 51000000, this.num14 = st10k, this.num15 = st200, this.num16 = st0}																									
        else if (51055000 <= cash && cash <= 52000000) { this.num11 = "50000000" , this.num12 = cash - 50000000, this.num13 = "", this.num14 = st10k, this.num15 = st400, this.num16 = ""}																									
        else if (52000001 <= cash && cash <= 52054999) { this.num11 = "50000000" , this.num12 = "2000000", this.num13 = cash - 52000000, this.num14 = st10k, this.num15 = st400, this.num16 = st0}																									
        else if (52055000 <= cash && cash <= 53000000) { this.num11 = "50000000" , this.num12 = cash - 50000000, this.num13 = "", this.num14 = st10k, this.num15 = st600, this.num16 = ""}																									
        else if (53000001 <= cash && cash <= 53054999) { this.num11 = "50000000" , this.num12 = "3000000", this.num13 = cash - 53000000, this.num14 = st10k, this.num15 = st600, this.num16 = st0}																									
        else if (53100000 <= cash && cash <= 54000000) { this.num11 = "50000000" , this.num12 = "3000000", this.num13 = cash - 53000000, this.num14 = st10k, this.num15 = st600, this.num16 = st200}																									
        else if (54000001 <= cash && cash <= 55000000) { this.num11 = "50000000" , this.num12 = cash - 50000000, this.num13 = "", this.num14 = st10k, this.num15 = st1k, this.num16 = ""}																									
        else if (55000001 <= cash && cash <= 55054999) { this.num11 = "50000000" , this.num12 = "5000000", this.num13 = cash - 55000000, this.num14 = st10k, this.num15 = st1k, this.num16 = st0}																									
        else if (55055000 <= cash && cash <= 56000000) { this.num11 = "50000000" , this.num12 = "5000000", this.num13 = cash - 55000000, this.num14 = st10k, this.num15 = st1k, this.num16 = st200}																									
        else if (56000001 <= cash && cash <= 57000000) { this.num11 = "50000000" , this.num12 = "5000000", this.num13 = cash - 55000000, this.num14 = st10k, this.num15 = st1k, this.num16 = st400}																									
        else if (57000001 <= cash && cash <= 58000000) { this.num11 = "50000000" , this.num12 = "5000000", this.num13 = cash - 55000000, this.num14 = st10k, this.num15 = st1k, this.num16 = st600}																									
        else if (58000001 <= cash && cash <= 60000000) { this.num11 = "50000000" , this.num12 = cash - 50000000, this.num13 = "", this.num14 = st10k, this.num15 = st2k, this.num16 = ""}																									
        else if (60000001 <= cash && cash <= 60054999) { this.num11 = "50000000" , this.num12 = "10000000", this.num13 = cash - 60000000, this.num14 = st10k, this.num15 = st2k, this.num16 = st0}																									
        else if (60055000 <= cash && cash <= 61000000) { this.num11 = "50000000" , this.num12 = "10000000", this.num13 = cash - 60000000, this.num14 = st10k, this.num15 = st2k, this.num16 = st200}																									
        else if (61000001 <= cash && cash <= 62000000) { this.num11 = "50000000" , this.num12 = "10000000", this.num13 = cash - 60000000, this.num14 = st10k, this.num15 = st2k, this.num16 = st400}																									
        else if (62000001 <= cash && cash <= 63000000) { this.num11 = "50000000" , this.num12 = "10000000", this.num13 = cash - 60000000, this.num14 = st10k, this.num15 = st2k, this.num16 = st600}																									
        else if (63000001 <= cash && cash <= 65000000) { this.num11 = "50000000" , this.num12 = "10000000", this.num13 = cash - 60000000, this.num14 = st10k, this.num15 = st2k, this.num16 = st1k}																									
        else if (65000001 <= cash && cash <= 70000000) { this.num11 = "50000000" , this.num12 = cash - 50000000, this.num13 = "", this.num14 = st10k, this.num15 = st4k, this.num16 = ""}																									
        else if (70000001 <= cash && cash <= 70054999) { this.num11 = "50000000" , this.num12 = "20000000", this.num13 = cash - 70000000, this.num14 = st10k, this.num15 = st4k, this.num16 = st0}																									
        else if (70055000 <= cash && cash <= 71000000) { this.num11 = "50000000" , this.num12 = "20000000", this.num13 = cash - 70000000, this.num14 = st10k, this.num15 = st4k, this.num16 = st200}																									
        else if (71000001 <= cash && cash <= 72000000) { this.num11 = "50000000" , this.num12 = "20000000", this.num13 = cash - 70000000, this.num14 = st10k, this.num15 = st4k, this.num16 = st400}																									
        else if (72000001 <= cash && cash <= 73000000) { this.num11 = "50000000" , this.num12 = "20000000", this.num13 = cash - 70000000, this.num14 = st10k, this.num15 = st4k, this.num16 = st600}																									
        else if (73000001 <= cash && cash <= 75000000) { this.num11 = "50000000" , this.num12 = "20000000", this.num13 = cash - 70000000, this.num14 = st10k, this.num15 = st4k, this.num16 = st1k}																									
        else if (75000001 <= cash && cash <= 80000000) { this.num11 = "50000000" , this.num12 = cash - 50000000, this.num13 = "", this.num14 = st10k, this.num15 = st6k, this.num16 = ""}																									
        else if (80000001 <= cash && cash <= 80054999) { this.num11 = "50000000" , this.num12 = "30000000", this.num13 = cash - 80000000, this.num14 = st10k, this.num15 = st6k, this.num16 = st0}																									
        else if (80055000 <= cash && cash <= 81000000) { this.num11 = "50000000" , this.num12 = "30000000", this.num13 = cash - 80000000, this.num14 = st10k, this.num15 = st6k, this.num16 = st200}																									
        else if (81000001 <= cash && cash <= 82000000) { this.num11 = "50000000" , this.num12 = "30000000", this.num13 = cash - 80000000, this.num14 = st10k, this.num15 = st6k, this.num16 = st400}																									
        else if (82000001 <= cash && cash <= 83000000) { this.num11 = "50000000" , this.num12 = "30000000", this.num13 = cash - 80000000, this.num14 = st10k, this.num15 = st6k, this.num16 = st600}																									
        else if (83000001 <= cash && cash <= 85000000) { this.num11 = "50000000" , this.num12 = "30000000", this.num13 = cash - 80000000, this.num14 = st10k, this.num15 = st6k, this.num16 = st1k}																									
        else if (85000001 <= cash && cash <= 90000000) { this.num11 = "50000000" , this.num12 = "30000000", this.num13 = cash - 80000000, this.num14 = st10k, this.num15 = st6k, this.num16 = st2k}																									
        else if (90000001 <= cash && cash <= 100000000) { this.num11 = cash , this.num12 = "", this.num13 = "", this.num14 = st20k, this.num15 = "", this.num16 = ""}																									
        else if (100000001 <= cash && cash <= 100054999) { this.num11 = "100000000" , this.num12 = cash - 100000000, this.num13 = "", this.num14 = st20k, this.num15 = st0, this.num16 = ""}																									
        else if (100055000 <= cash && cash <= 101000000) { this.num11 = "100000000" , this.num12 = cash - 100000000, this.num13 = "", this.num14 = st20k, this.num15 = st200, this.num16 = ""}																									
        else if (101000001 <= cash && cash <= 101054999) { this.num11 = "100000000" , this.num12 = "1000000", this.num13 = cash - 101000000, this.num14 = st20k, this.num15 = st200, this.num16 = st0}																									
        else if (101055000 <= cash && cash <= 102000000) { this.num11 = "100000000" , this.num12 = cash - 100000000, this.num13 = "", this.num14 = st20k, this.num15 = st400, this.num16 = ""}																									
        else if (102000001 <= cash && cash <= 102054999) { this.num11 = "100000000" , this.num12 = "2000000", this.num13 = cash - 102000000, this.num14 = st20k, this.num15 = st400, this.num16 = st0}																									
        else if (102055000 <= cash && cash <= 103000000) { this.num11 = "100000000" , this.num12 = cash - 100000000, this.num13 = "", this.num14 = st20k, this.num15 = st600, this.num16 = ""}																									
        else if (103000001 <= cash && cash <= 103054999) { this.num11 = "100000000" , this.num12 = "3000000", this.num13 = cash - 103000000, this.num14 = st20k, this.num15 = st600, this.num16 = st0}																									
        else if (103055000 <= cash && cash <= 104000000) { this.num11 = "100000000" , this.num12 = "3000000", this.num13 = cash - 103000000, this.num14 = st20k, this.num15 = st600, this.num16 = st200}																									
        else if (104000001 <= cash && cash <= 105000000) { this.num11 = "100000000" , this.num12 = cash - 100000000, this.num13 = "", this.num14 = st20k, this.num15 = st1k, this.num16 = ""}																									
        else if (105000001 <= cash && cash <= 105054999) { this.num11 = "100000000" , this.num12 = "5000000", this.num13 = cash - 105000000, this.num14 = st20k, this.num15 = st1k, this.num16 = st0}																									
        else if (105055000 <= cash && cash <= 106000000) { this.num11 = "100000000" , this.num12 = "5000000", this.num13 = cash - 105000000, this.num14 = st20k, this.num15 = st1k, this.num16 = st200}																									
        else if (106000001 <= cash && cash <= 107000000) { this.num11 = "100000000" , this.num12 = "5000000", this.num13 = cash - 105000000, this.num14 = st20k, this.num15 = st1k, this.num16 = st400}																									
        else if (107000001 <= cash && cash <= 108000000) { this.num11 = "100000000" , this.num12 = "5000000", this.num13 = cash - 105000000, this.num14 = st20k, this.num15 = st1k, this.num16 = st600}																									
        else if (108000001 <= cash && cash <= 110000000) { this.num11 = "100000000" , this.num12 = cash - 100000000, this.num13 = "", this.num14 = st20k, this.num15 = st2k, this.num16 = ""}																									
        else if (100000001 <= cash && cash <= 110054999) { this.num11 = "100000000" , this.num12 = "10000000", this.num13 = cash - 110000000, this.num14 = st20k, this.num15 = st2k, this.num16 = st0}																									
        else if (110055000 <= cash && cash <= 111000000) { this.num11 = "100000000" , this.num12 = "10000000", this.num13 = cash - 110000000, this.num14 = st20k, this.num15 = st2k, this.num16 = st200}																									
        else if (111000001 <= cash && cash <= 112000000) { this.num11 = "100000000" , this.num12 = "10000000", this.num13 = cash - 110000000, this.num14 = st20k, this.num15 = st2k, this.num16 = st400}																									
        else if (112000001 <= cash && cash <= 113000000) { this.num11 = "100000000" , this.num12 = "10000000", this.num13 = cash - 110000000, this.num14 = st20k, this.num15 = st2k, this.num16 = st600}																									
        else if (113000001 <= cash && cash <= 115000000) { this.num11 = "100000000" , this.num12 = "10000000", this.num13 = cash - 110000000, this.num14 = st20k, this.num15 = st2k, this.num16 = st1k}																									
        else if (115000001 <= cash && cash <= 120000000) { this.num11 = "100000000" , this.num12 = cash - 100000000, this.num13 = "", this.num14 = st20k, this.num15 = st4k, this.num16 = ""}																									
        else if (120000001 <= cash && cash <= 120054999) { this.num11 = "100000000" , this.num12 = "20000000", this.num13 = cash - 120000000, this.num14 = st20k, this.num15 = st4k, this.num16 = st0}																									
        else if (120100000 <= cash && cash <= 121000000) { this.num11 = "100000000" , this.num12 = "20000000", this.num13 = cash - 120000000, this.num14 = st20k, this.num15 = st4k, this.num16 = st200}																									
        else if (121000001 <= cash && cash <= 122000000) { this.num11 = "100000000" , this.num12 = "20000000", this.num13 = cash - 120000000, this.num14 = st20k, this.num15 = st4k, this.num16 = st400}																									
        else if (122000001 <= cash && cash <= 123000000) { this.num11 = "100000000" , this.num12 = "20000000", this.num13 = cash - 120000000, this.num14 = st20k, this.num15 = st4k, this.num16 = st600}																									
        else if (123000001 <= cash && cash <= 125000000) { this.num11 = "100000000" , this.num12 = "20000000", this.num13 = cash - 120000000, this.num14 = st20k, this.num15 = st4k, this.num16 = st1k}																									
        else if (125000001 <= cash && cash <= 130000000) { this.num11 = "100000000" , this.num12 = cash - 100000000, this.num13 = "", this.num14 = st20k, this.num15 = st6k, this.num16 = ""}																									
        else if (130000001 <= cash && cash <= 130054999) { this.num11 = "100000000" , this.num12 = "30000000", this.num13 = cash - 130000000, this.num14 = st20k, this.num15 = st6k, this.num16 = st0}																									
        else if (130055000 <= cash && cash <= 131000000) { this.num11 = "100000000" , this.num12 = "30000000", this.num13 = cash - 130000000, this.num14 = st20k, this.num15 = st6k, this.num16 = st200}																									
        else if (131000001 <= cash && cash <= 132000000) { this.num11 = "100000000" , this.num12 = "30000000", this.num13 = cash - 130000000, this.num14 = st20k, this.num15 = st6k, this.num16 = st400}																									
        else if (132000001 <= cash && cash <= 133000000) { this.num11 = "100000000" , this.num12 = "30000000", this.num13 = cash - 130000000, this.num14 = st20k, this.num15 = st6k, this.num16 = st600}																									
        else if (133000001 <= cash && cash <= 135000000) { this.num11 = "100000000" , this.num12 = "30000000", this.num13 = cash - 130000000, this.num14 = st20k, this.num15 = st6k, this.num16 = st1k}																									
        else if (135000001 <= cash && cash <= 140000000) { this.num11 = "100000000" , this.num12 = "30000000", this.num13 = cash - 130000000, this.num14 = st20k, this.num15 = st6k, this.num16 = st2k}																									
        else if (140000001 <= cash && cash <= 150000000) { this.num11 = "100000000" , this.num12 = cash - 100000000, this.num13 = "", this.num14 = st20k, this.num15 = st10k, this.num16 = ""}																									
        else if (150000001 <= cash && cash <= 150054999) { this.num11 = "100000000" , this.num12 = "50000000", this.num13 = cash - 150000000, this.num14 = st20k, this.num15 = st10k, this.num16 = st0}																									
        else if (150055000 <= cash && cash <= 151000000) { this.num11 = "100000000" , this.num12 = "50000000", this.num13 = cash - 150000000, this.num14 = st20k, this.num15 = st10k, this.num16 = st200}																									
        else if (151000001 <= cash && cash <= 152000000) { this.num11 = "100000000" , this.num12 = "50000000", this.num13 = cash - 150000000, this.num14 = st20k, this.num15 = st10k, this.num16 = st400}																									
        else if (152000001 <= cash && cash <= 153000000) { this.num11 = "100000000" , this.num12 = "50000000", this.num13 = cash - 150000000, this.num14 = st20k, this.num15 = st10k, this.num16 = st600}																									
        else if (153000001 <= cash && cash <= 155000000) { this.num11 = "100000000" , this.num12 = "50000000", this.num13 = cash - 150000000, this.num14 = st20k, this.num15 = st10k, this.num16 = st1k}																									
        else if (155000001 <= cash && cash <= 160000000) { this.num11 = "100000000" , this.num12 = "50000000", this.num13 = cash - 150000000, this.num14 = st20k, this.num15 = st10k, this.num16 = st2k}																									
        else if (160000001 <= cash && cash <= 170000000) { this.num11 = "100000000" , this.num12 = "50000000", this.num13 = cash - 150000000, this.num14 = st20k, this.num15 = st10k, this.num16 = st4k}																									
        else if (170000001 <= cash && cash <= 180000000) { this.num11 = "100000000" , this.num12 = "50000000", this.num13 = cash - 150000000, this.num14 = st20k, this.num15 = st10k, this.num16 = st6k}																									
        else if (180000001 <= cash && cash <= 200000000) { this.num11 = cash , this.num12 = "", this.num13 = "", this.num14 = st40k, this.num15 = "", this.num16 = ""}																									
        else if (200000001 <= cash && cash <= 200054999) { this.num11 = "200000000" , this.num12 = cash - 200000000, this.num13 = "", this.num14 = st40k, this.num15 = st0, this.num16 = ""}																									
        else if (200055000 <= cash && cash <= 201000000) { this.num11 = "200000000" , this.num12 = cash - 200000000, this.num13 = "", this.num14 = st40k, this.num15 = st200, this.num16 = ""}																									
        else if (201000001 <= cash && cash <= 201054999) { this.num11 = "200000000" , this.num12 = "1000000", this.num13 = cash - 201000000, this.num14 = st40k, this.num15 = st200, this.num16 = st0}																									
        else if (201055000 <= cash && cash <= 202000000) { this.num11 = "200000000" , this.num12 = cash - 200000000, this.num13 = "", this.num14 = st40k, this.num15 = st400, this.num16 = ""}																									
        else if (202000001 <= cash && cash <= 202054999) { this.num11 = "200000000" , this.num12 = "2000000", this.num13 = cash - 202000000, this.num14 = st40k, this.num15 = st400, this.num16 = st0}																									
        else if (202055000 <= cash && cash <= 203000000) { this.num11 = "200000000" , this.num12 = cash - 200000000, this.num13 = "", this.num14 = st40k, this.num15 = st600, this.num16 = ""}																									
        else if (203000001 <= cash && cash <= 203054999) { this.num11 = "200000000" , this.num12 = "3000000", this.num13 = cash - 203000000, this.num14 = st40k, this.num15 = st600, this.num16 = st0}																									
        else if (203055000 <= cash && cash <= 204000000) { this.num11 = "200000000" , this.num12 = "3000000", this.num13 = cash - 203000000, this.num14 = st40k, this.num15 = st600, this.num16 = st200}																									
        else if (204000001 <= cash && cash <= 205000000) { this.num11 = "200000000" , this.num12 = cash - 200000000, this.num13 = "", this.num14 = st40k, this.num15 = st1k, this.num16 = ""}																									
        else if (205000001 <= cash && cash <= 205054999) { this.num11 = "200000000" , this.num12 = "5000000", this.num13 = cash - 205000000, this.num14 = st40k, this.num15 = st1k, this.num16 = st0}																									
        else if (205055000 <= cash && cash <= 206000000) { this.num11 = "200000000" , this.num12 = "5000000", this.num13 = cash - 205000000, this.num14 = st40k, this.num15 = st1k, this.num16 = st200}																									
        else if (206000001 <= cash && cash <= 207000000) { this.num11 = "200000000" , this.num12 = "5000000", this.num13 = cash - 205000000, this.num14 = st40k, this.num15 = st1k, this.num16 = st400}																									
        else if (207000001 <= cash && cash <= 208000000) { this.num11 = "200000000" , this.num12 = "5000000", this.num13 = cash - 205000000, this.num14 = st40k, this.num15 = st1k, this.num16 = st600}																									
        else if (208000001 <= cash && cash <= 210000000) { this.num11 = "200000000" , this.num12 = cash - 200000000, this.num13 = "", this.num14 = st40k, this.num15 = st2k, this.num16 = ""}																									
        else if (210000001 <= cash && cash <= 210054999) { this.num11 = "200000000" , this.num12 = "10000000", this.num13 = cash - 210000000, this.num14 = st40k, this.num15 = st2k, this.num16 = st0}																									
        else if (210055000 <= cash && cash <= 211000000) { this.num11 = "200000000" , this.num12 = "10000000", this.num13 = cash - 210000000, this.num14 = st40k, this.num15 = st2k, this.num16 = st200}																									
        else if (211000001 <= cash && cash <= 212000000) { this.num11 = "200000000" , this.num12 = "10000000", this.num13 = cash - 210000000, this.num14 = st40k, this.num15 = st2k, this.num16 = st400}																									
        else if (212000001 <= cash && cash <= 213000000) { this.num11 = "200000000" , this.num12 = "10000000", this.num13 = cash - 210000000, this.num14 = st40k, this.num15 = st2k, this.num16 = st600}																									
        else if (213000001 <= cash && cash <= 215000000) { this.num11 = "200000000" , this.num12 = "10000000", this.num13 = cash - 210000000, this.num14 = st40k, this.num15 = st2k, this.num16 = st1k}																									
        else if (215000001 <= cash && cash <= 220000000) { this.num11 = "200000000" , this.num12 = cash - 200000000, this.num13 = "", this.num14 = st40k, this.num15 = st4k, this.num16 = ""}																									
        else if (220000001 <= cash && cash <= 220054999) { this.num11 = "200000000" , this.num12 = "20000000", this.num13 = cash - 220000000, this.num14 = st40k, this.num15 = st4k, this.num16 = st0}																									
        else if (220055000 <= cash && cash <= 221000000) { this.num11 = "200000000" , this.num12 = "20000000", this.num13 = cash - 220000000, this.num14 = st40k, this.num15 = st4k, this.num16 = st200}																									
        else if (221000001 <= cash && cash <= 222000000) { this.num11 = "200000000" , this.num12 = "20000000", this.num13 = cash - 220000000, this.num14 = st40k, this.num15 = st4k, this.num16 = st400}																									
        else if (222000001 <= cash && cash <= 223000000) { this.num11 = "200000000" , this.num12 = "20000000", this.num13 = cash - 220000000, this.num14 = st40k, this.num15 = st4k, this.num16 = st600}																									
        else if (223000001 <= cash && cash <= 225000000) { this.num11 = "200000000" , this.num12 = "20000000", this.num13 = cash - 220000000, this.num14 = st40k, this.num15 = st4k, this.num16 = st1k}																									
        else if (225000001 <= cash && cash <= 230000000) { this.num11 = "200000000" , this.num12 = cash - 200000000, this.num13 = "", this.num14 = st40k, this.num15 = st6k, this.num16 = ""}																									
        else if (230000001 <= cash && cash <= 230054999) { this.num11 = "200000000" , this.num12 = "30000000", this.num13 = cash - 230000000, this.num14 = st40k, this.num15 = st6k, this.num16 = st0}																									
        else if (230055000 <= cash && cash <= 231000000) { this.num11 = "200000000" , this.num12 = "30000000", this.num13 = cash - 230000000, this.num14 = st40k, this.num15 = st6k, this.num16 = st200}																									
        else if (231000001 <= cash && cash <= 232000000) { this.num11 = "200000000" , this.num12 = "30000000", this.num13 = cash - 230000000, this.num14 = st40k, this.num15 = st6k, this.num16 = st400}																									
        else if (232000001 <= cash && cash <= 233000000) { this.num11 = "200000000" , this.num12 = "30000000", this.num13 = cash - 230000000, this.num14 = st40k, this.num15 = st6k, this.num16 = st600}																									
        else if (233000001 <= cash && cash <= 235000000) { this.num11 = "200000000" , this.num12 = "30000000", this.num13 = cash - 230000000, this.num14 = st40k, this.num15 = st6k, this.num16 = st1k}																									
        else if (235000001 <= cash && cash <= 240000000) { this.num11 = "200000000" , this.num12 = "30000000", this.num13 = cash - 230000000, this.num14 = st40k, this.num15 = st6k, this.num16 = st2k}																									
        else if (240000001 <= cash && cash <= 250000000) { this.num11 = "200000000" , this.num12 = cash - 200000000, this.num13 = "", this.num14 = st40k, this.num15 = st10k, this.num16 = ""}																									
        else if (250000001 <= cash && cash <= 250054999) { this.num11 = "200000000" , this.num12 = "50000000", this.num13 = cash - 250000000, this.num14 = st40k, this.num15 = st10k, this.num16 = st0}																									
        else if (250100000 <= cash && cash <= 251000000) { this.num11 = "200000000" , this.num12 = "50000000", this.num13 = cash - 250000000, this.num14 = st40k, this.num15 = st10k, this.num16 = st200}																									
        else if (251000001 <= cash && cash <= 252000000) { this.num11 = "200000000" , this.num12 = "50000000", this.num13 = cash - 250000000, this.num14 = st40k, this.num15 = st10k, this.num16 = st400}																									
        else if (252000001 <= cash && cash <= 253000000) { this.num11 = "200000000" , this.num12 = "50000000", this.num13 = cash - 250000000, this.num14 = st40k, this.num15 = st10k, this.num16 = st600}																									
        else if (253000001 <= cash && cash <= 255000000) { this.num11 = "200000000" , this.num12 = "50000000", this.num13 = cash - 250000000, this.num14 = st40k, this.num15 = st10k, this.num16 = st1k}																									
        else if (255000001 <= cash && cash <= 260000000) { this.num11 = "200000000" , this.num12 = "50000000", this.num13 = cash - 250000000, this.num14 = st40k, this.num15 = st10k, this.num16 = st2k}																									
        else if (260000001 <= cash && cash <= 270000000) { this.num11 = "200000000" , this.num12 = "50000000", this.num13 = cash - 250000000, this.num14 = st40k, this.num15 = st10k, this.num16 = st4k}																									
        else if (270000001 <= cash && cash <= 280000000) { this.num11 = "200000000" , this.num12 = "50000000", this.num13 = cash - 250000000, this.num14 = st40k, this.num15 = st10k, this.num16 = st6k}																									
        else if (280000001 <= cash && cash <= 300000000) { this.num11 = cash , this.num12 = "", this.num13 = "", this.num14 = st60k, this.num15 = "", this.num16 = ""}																									
        else if (300000001 <= cash && cash <= 300054999) { this.num11 = "300000000" , this.num12 = cash - 300000000, this.num13 = "", this.num14 = st60k, this.num15 = st0, this.num16 = ""}																									
        else if (300055000 <= cash && cash <= 301000000) { this.num11 = "300000000" , this.num12 = cash - 300000000, this.num13 = "", this.num14 = st60k, this.num15 = st200, this.num16 = ""}																									
        else if (301000001 <= cash && cash <= 301054999) { this.num11 = "300000000" , this.num12 = "1000000", this.num13 = cash - 301000000, this.num14 = st60k, this.num15 = st200, this.num16 = st0}																									
        else if (301055000 <= cash && cash <= 302000000) { this.num11 = "300000000" , this.num12 = cash - 300000000, this.num13 = "", this.num14 = st60k, this.num15 = st400, this.num16 = ""}																									
        else if (302000001 <= cash && cash <= 302054999) { this.num11 = "300000000" , this.num12 = "2000000", this.num13 = cash - 302000000, this.num14 = st60k, this.num15 = st400, this.num16 = st0}																									
        else if (302055000 <= cash && cash <= 303000000) { this.num11 = "300000000" , this.num12 = cash - 300000000, this.num13 = "", this.num14 = st60k, this.num15 = st600, this.num16 = ""}																									
        else if (303000001 <= cash && cash <= 303054999) { this.num11 = "300000000" , this.num12 = "3000000", this.num13 = cash - 303000000, this.num14 = st60k, this.num15 = st600, this.num16 = st0}																									
        else if (303055000 <= cash && cash <= 304000000) { this.num11 = "300000000" , this.num12 = "3000000", this.num13 = cash - 303000000, this.num14 = st60k, this.num15 = st600, this.num16 = st200}																									
        else if (304000001 <= cash && cash <= 305000000) { this.num11 = "300000000" , this.num12 = cash - 300000000, this.num13 = "", this.num14 = st60k, this.num15 = st1k, this.num16 = ""}																									
        else if (305000001 <= cash && cash <= 305054999) { this.num11 = "300000000" , this.num12 = "5000000", this.num13 = cash - 305000000, this.num14 = st60k, this.num15 = st1k, this.num16 = st0}																									
        else if (305055000 <= cash && cash <= 306000000) { this.num11 = "300000000" , this.num12 = "5000000", this.num13 = cash - 305000000, this.num14 = st60k, this.num15 = st1k, this.num16 = st200}																									
        else if (306000001 <= cash && cash <= 307000000) { this.num11 = "300000000" , this.num12 = "5000000", this.num13 = cash - 305000000, this.num14 = st60k, this.num15 = st1k, this.num16 = st400}																									
        else if (307000001 <= cash && cash <= 308000000) { this.num11 = "300000000" , this.num12 = "5000000", this.num13 = cash - 305000000, this.num14 = st60k, this.num15 = st1k, this.num16 = st600}																									
        else if (308000001 <= cash && cash <= 310000000) { this.num11 = "300000000" , this.num12 = cash - 300000000, this.num13 = "", this.num14 = st60k, this.num15 = st2k, this.num16 = ""}																									
        else if (310000001 <= cash && cash <= 310054999) { this.num11 = "300000000" , this.num12 = "10000000", this.num13 = cash - 310000000, this.num14 = st60k, this.num15 = st2k, this.num16 = st0}																									
        else if (310100000 <= cash && cash <= 311000000) { this.num11 = "300000000" , this.num12 = "10000000", this.num13 = cash - 310000000, this.num14 = st60k, this.num15 = st2k, this.num16 = st200}																									
        else if (311000001 <= cash && cash <= 312000000) { this.num11 = "300000000" , this.num12 = "10000000", this.num13 = cash - 310000000, this.num14 = st60k, this.num15 = st2k, this.num16 = st400}																									
        else if (312000001 <= cash && cash <= 313000000) { this.num11 = "300000000" , this.num12 = "10000000", this.num13 = cash - 310000000, this.num14 = st60k, this.num15 = st2k, this.num16 = st600}																									
        else if (313000001 <= cash && cash <= 315000000) { this.num11 = "300000000" , this.num12 = "10000000", this.num13 = cash - 310000000, this.num14 = st60k, this.num15 = st2k, this.num16 = st1k}																									
        else if (315000001 <= cash && cash <= 320000000) { this.num11 = "300000000" , this.num12 = cash - 300000000, this.num13 = "", this.num14 = st60k, this.num15 = st4k, this.num16 = ""}																									
        else if (320000001 <= cash && cash <= 320054999) { this.num11 = "300000000" , this.num12 = "20000000", this.num13 = cash - 320000000, this.num14 = st60k, this.num15 = st4k, this.num16 = st0}																									
        else if (320055000 <= cash && cash <= 321000000) { this.num11 = "300000000" , this.num12 = "20000000", this.num13 = cash - 320000000, this.num14 = st60k, this.num15 = st4k, this.num16 = st200}																									
        else if (321000001 <= cash && cash <= 322000000) { this.num11 = "300000000" , this.num12 = "20000000", this.num13 = cash - 320000000, this.num14 = st60k, this.num15 = st4k, this.num16 = st400}																									
        else if (322000001 <= cash && cash <= 323000000) { this.num11 = "300000000" , this.num12 = "20000000", this.num13 = cash - 320000000, this.num14 = st60k, this.num15 = st4k, this.num16 = st600}																									
        else if (323000001 <= cash && cash <= 325000000) { this.num11 = "300000000" , this.num12 = "20000000", this.num13 = cash - 320000000, this.num14 = st60k, this.num15 = st4k, this.num16 = st1k}																									
        else if (325000001 <= cash && cash <= 330000000) { this.num11 = "300000000" , this.num12 = cash - 300000000, this.num13 = "", this.num14 = st60k, this.num15 = st6k, this.num16 = ""}																									
        else if (330000001 <= cash && cash <= 330054999) { this.num11 = "300000000" , this.num12 = "30000000", this.num13 = cash - 330000000, this.num14 = st60k, this.num15 = st6k, this.num16 = st0}																									
        else if (330100000 <= cash && cash <= 331000000) { this.num11 = "300000000" , this.num12 = "30000000", this.num13 = cash - 330000000, this.num14 = st60k, this.num15 = st6k, this.num16 = st200}																									
        else if (331000001 <= cash && cash <= 332000000) { this.num11 = "300000000" , this.num12 = "30000000", this.num13 = cash - 330000000, this.num14 = st60k, this.num15 = st6k, this.num16 = st400}																									
        else if (332000001 <= cash && cash <= 333000000) { this.num11 = "300000000" , this.num12 = "30000000", this.num13 = cash - 330000000, this.num14 = st60k, this.num15 = st6k, this.num16 = st600}																									
        else if (333000001 <= cash && cash <= 335000000) { this.num11 = "300000000" , this.num12 = "30000000", this.num13 = cash - 330000000, this.num14 = st40k, this.num15 = st6k, this.num16 = st1k}																									
        else if (335000001 <= cash && cash <= 340000000) { this.num11 = "300000000" , this.num12 = "30000000", this.num13 = cash - 330000000, this.num14 = st60k, this.num15 = st6k, this.num16 = st2k}																									
        else if (340000001 <= cash && cash <= 350000000) { this.num11 = "300000000" , this.num12 = cash - 300000000, this.num13 = "", this.num14 = st60k, this.num15 = st10k, this.num16 = ""}																									
        else if (350000001 <= cash && cash <= 350054999) { this.num11 = "300000000" , this.num12 = "50000000", this.num13 = cash - 350000000, this.num14 = st60k, this.num15 = st10k, this.num16 = st0}																									
        else if (350055000 <= cash && cash <= 351000000) { this.num11 = "300000000" , this.num12 = "50000000", this.num13 = cash - 350000000, this.num14 = st60k, this.num15 = st10k, this.num16 = st200}																									
        else if (351000001 <= cash && cash <= 352000000) { this.num11 = "300000000" , this.num12 = "50000000", this.num13 = cash - 350000000, this.num14 = st60k, this.num15 = st10k, this.num16 = st400}																									
        else if (352000001 <= cash && cash <= 353000000) { this.num11 = "300000000" , this.num12 = "50000000", this.num13 = cash - 350000000, this.num14 = st60k, this.num15 = st10k, this.num16 = st600}																									
        else if (353000001 <= cash && cash <= 355000000) { this.num11 = "300000000" , this.num12 = "50000000", this.num13 = cash - 350000000, this.num14 = st60k, this.num15 = st10k, this.num16 = st1k}																									
        else if (355000001 <= cash && cash <= 360000000) { this.num11 = "300000000" , this.num12 = "50000000", this.num13 = cash - 350000000, this.num14 = st60k, this.num15 = st10k, this.num16 = st2k}																									
        else if (360000001 <= cash && cash <= 370000000) { this.num11 = "300000000" , this.num12 = "50000000", this.num13 = cash - 350000000, this.num14 = st60k, this.num15 = st10k, this.num16 = st4k}																									
        else if (370000001 <= cash && cash <= 380000000) { this.num11 = "300000000" , this.num12 = "50000000", this.num13 = cash - 350000000, this.num14 = st60k, this.num15 = st10k, this.num16 = st6k}																									
        else if (380000001 <= cash && cash <= 400000000) { this.num11 = cash , this.num12 = "", this.num13 = "", this.num14 = st60k, this.num15 = st20k, this.num16 = ""}																									
        else if (400000001 <= cash && cash <= 400054999) { this.num11 = "300000000" , this.num12 = "100000000", this.num13 = cash - 400000000, this.num14 = st60k, this.num15 = st20k, this.num16 = st0}																									
        else if (400055000 <= cash && cash <= 401000000) { this.num11 = "300000000" , this.num12 = "100000000", this.num13 = cash - 400000000, this.num14 = st60k, this.num15 = st20k, this.num16 = st200}																									
        else if (401000001 <= cash && cash <= 402000000) { this.num11 = "300000000" , this.num12 = "100000000", this.num13 = cash - 400000000, this.num14 = st60k, this.num15 = st20k, this.num16 = st400}																									
        else if (402000001 <= cash && cash <= 403000000) { this.num11 = "300000000" , this.num12 = "100000000", this.num13 = cash - 400000000, this.num14 = st60k, this.num15 = st20k, this.num16 = st600}																									
        else if (403000001 <= cash && cash <= 405000000) { this.num11 = "300000000" , this.num12 = "100000000", this.num13 = cash - 400000000, this.num14 = st60k, this.num15 = st20k, this.num16 = st1k}																									
        else if (405000001 <= cash && cash <= 410000000) { this.num11 = "300000000" , this.num12 = "100000000", this.num13 = cash - 400000000, this.num14 = st60k, this.num15 = st20k, this.num16 = st2k}																									
        else if (410000001 <= cash && cash <= 420000000) { this.num11 = "300000000" , this.num12 = "100000000", this.num13 = cash - 400000000, this.num14 = st60k, this.num15 = st20k, this.num16 = st4k}																									
        else if (420000001 <= cash && cash <= 430000000) { this.num11 = "300000000" , this.num12 = "100000000", this.num13 = cash - 400000000, this.num14 = st60k, this.num15 = st20k, this.num16 = st6k}																									
        else if (430000001 <= cash && cash <= 450000000) { this.num11 = "300000000" , this.num12 = "100000000", this.num13 = cash - 400000000, this.num14 = st60k, this.num15 = st20k, this.num16 = st10k}																									
        else if (450000001 <= cash && cash <= 500000000) { this.num11 = cash , this.num12 = "", this.num13 = "", this.num14 = st100k, this.num15 = "", this.num16 = ""}																									
        else if (500000001 <= cash && cash <= 500054999) { this.num11 = "500000000" , this.num12 = cash - 500000000, this.num13 = "", this.num14 = st100k, this.num15 = st0, this.num16 = ""}																									
        else if (500055000 <= cash && cash <= 501000000) { this.num11 = "500000000" , this.num12 = cash - 500000000, this.num13 = "", this.num14 = st100k, this.num15 = st200, this.num16 = ""}																									
        else if (501000001 <= cash && cash <= 501054999) { this.num11 = "500000000" , this.num12 ="1000000" , this.num13 = cash - 501000000, this.num14 = st100k, this.num15 = st200, this.num16 = st0}																									
        else if (501055000 <= cash && cash <= 502000000) { this.num11 = "500000000" , this.num12 = cash - 500000000, this.num13 = "", this.num14 = st100k, this.num15 = st400, this.num16 = ""}																									
        else if (502000001 <= cash && cash <= 502054999) { this.num11 = "500000000" , this.num12 = "2000000", this.num13 = cash - 502000000, this.num14 = st100k, this.num15 = st400, this.num16 = st0}																									
        else if (502055000 <= cash && cash <= 503000000) { this.num11 = "500000000" , this.num12 = cash - 500000000, this.num13 = "", this.num14 = st100k, this.num15 = st600, this.num16 = ""}																									
        else if (503000001 <= cash && cash <= 503054999) { this.num11 = "500000000" , this.num12 ="3000000" , this.num13 = cash - 503000000, this.num14 = st100k, this.num15 = st600, this.num16 = st0}																									
        else if (503055000 <= cash && cash <= 504000000) { this.num11 = "500000000" , this.num12 = "3000000", this.num13 = cash - 503000000, this.num14 = st100k, this.num15 = st600, this.num16 = st200}																									
        else if (504000000 <= cash && cash <= 505000000) { this.num11 = "500000000" , this.num12 = cash - 500000000, this.num13 = "", this.num14 = st100k, this.num15 = st1k, this.num16 = ""}																									
        else if (505000001 <= cash && cash <= 505054999) { this.num11 = "500000000" , this.num12 = "5000000", this.num13 = cash - 505000000, this.num14 = st100k, this.num15 = st1k, this.num16 = st0}																									
        else if (505055000 <= cash && cash <= 506000000) { this.num11 = "500000000" , this.num12 = "5000000", this.num13 = cash - 505000000, this.num14 = st100k, this.num15 = st1k, this.num16 = st200}																									
        else if (506000000 <= cash && cash <= 507000000) { this.num11 = "500000000" , this.num12 = "5000000", this.num13 = cash - 505000000, this.num14 = st100k, this.num15 = st1k, this.num16 = st400}																									
        else if (507000000 <= cash && cash <= 508000000) { this.num11 = "500000000" , this.num12 = "5000000", this.num13 = cash - 505000000, this.num14 = st100k, this.num15 = st1k, this.num16 = st600}																									
        else if (508000001 <= cash && cash <= 510000000) { this.num11 = "500000000" , this.num12 = cash - 500000000, this.num13 = "", this.num14 = st100k, this.num15 = st2k, this.num16 = ""}																									
        else if (510000001 <= cash && cash <= 510054999) { this.num11 = "500000000" , this.num12 = "10000000", this.num13 = cash - 510000000, this.num14 = st100k, this.num15 = st2k, this.num16 = st0}																									
        else if (510100000 <= cash && cash <= 511000000) { this.num11 = "500000000" , this.num12 = "10000000", this.num13 = cash - 510000000, this.num14 = st100k, this.num15 = st2k, this.num16 = st200}																									
        else if (511000001 <= cash && cash <= 512000000) { this.num11 = "500000000" , this.num12 = "10000000", this.num13 = cash - 510000000, this.num14 = st100k, this.num15 = st2k, this.num16 = st400}																									
        else if (512000001 <= cash && cash <= 513000000) { this.num11 = "500000000" , this.num12 = "10000000", this.num13 = cash - 510000000, this.num14 = st100k, this.num15 = st2k, this.num16 = st600}																									
        else if (513000001 <= cash && cash <= 515000000) { this.num11 = "500000000" , this.num12 = "10000000", this.num13 = cash - 510000000, this.num14 = st100k, this.num15 = st2k, this.num16 = st1k}																									
        else if (515000001 <= cash && cash <= 520000000) { this.num11 = "500000000" , this.num12 = cash - 500000000, this.num13 = "", this.num14 = st100k, this.num15 = st4k, this.num16 = ""}																									
        else if (520000001 <= cash && cash <= 520054999) { this.num11 = "500000000" , this.num12 = "20000000", this.num13 = cash - 520000000, this.num14 = st100k, this.num15 = st4k, this.num16 = st0}																									
        else if (520055000 <= cash && cash <= 521000000) { this.num11 = "500000000" , this.num12 = "20000000", this.num13 = cash - 520000000, this.num14 = st100k, this.num15 = st4k, this.num16 = st200}																									
        else if (521000001 <= cash && cash <= 522000000) { this.num11 = "500000000" , this.num12 = "20000000", this.num13 = cash - 520000000, this.num14 = st100k, this.num15 = st4k, this.num16 = st400}																									
        else if (522000001 <= cash && cash <= 523000000) { this.num11 = "500000000" , this.num12 = "20000000", this.num13 = cash - 520000000, this.num14 = st100k, this.num15 = st4k, this.num16 = st600}																									
        else if (523000001 <= cash && cash <= 525000000) { this.num11 = "500000000" , this.num12 = "20000000", this.num13 = cash - 520000000, this.num14 = st100k, this.num15 = st4k, this.num16 = st1k}																									
        else if (525000001 <= cash && cash <= 530000000) { this.num11 = "500000000" , this.num12 = cash - 500000000, this.num13 = "", this.num14 = st100k, this.num15 = st6k, this.num16 = ""}																									
        else if (530000001 <= cash && cash <= 530054999) { this.num11 = "500000000" , this.num12 = "30000000", this.num13 = cash - 530000000, this.num14 = st100k, this.num15 = st6k, this.num16 = st0}																									
        else if (530055000 <= cash && cash <= 531000000) { this.num11 = "500000000" , this.num12 = "30000000", this.num13 = cash - 530000000, this.num14 = st100k, this.num15 = st6k, this.num16 = st200}																									
        else if (531000001 <= cash && cash <= 532000000) { this.num11 = "500000000" , this.num12 = "30000000", this.num13 = cash - 530000000, this.num14 = st100k, this.num15 = st6k, this.num16 = st400}																									
        else if (532000001 <= cash && cash <= 533000000) { this.num11 = "500000000" , this.num12 = "30000000", this.num13 = cash - 530000000, this.num14 = st100k, this.num15 = st6k, this.num16 = st600}																									
        else if (533000001 <= cash && cash <= 535000000) { this.num11 = "500000000" , this.num12 = "30000000", this.num13 = cash - 530000000, this.num14 = st100k, this.num15 = st6k, this.num16 = st1k}																									
        else if (535000001 <= cash && cash <= 540000000) { this.num11 = "500000000" , this.num12 = "30000000", this.num13 = cash - 530000000, this.num14 = st100k, this.num15 = st6k, this.num16 = st2k}																									
        else if (540000001 <= cash && cash <= 550000000) { this.num11 = "500000000" , this.num12 = cash - 500000000, this.num13 = "", this.num14 = st100k, this.num15 = st10k, this.num16 = ""}																									
        else if (550000001 <= cash && cash <= 550054999) { this.num11 = "500000000" , this.num12 = "50000000", this.num13 = cash - 550000000, this.num14 = st100k, this.num15 = st10k, this.num16 = st0}																									
        else if (550055000 <= cash && cash <= 551000000) { this.num11 = "500000000" , this.num12 = "50000000", this.num13 = cash - 550000000, this.num14 = st100k, this.num15 = st10k, this.num16 = st200}																									
        else if (551000001 <= cash && cash <= 552000000) { this.num11 = "500000000" , this.num12 = "50000000", this.num13 = cash - 550000000, this.num14 = st100k, this.num15 = st10k, this.num16 = st400}																									
        else if (552000001 <= cash && cash <= 553000000) { this.num11 = "500000000" , this.num12 = "50000000", this.num13 = cash - 550000000, this.num14 = st100k, this.num15 = st10k, this.num16 = st600}																									
        else if (553000001 <= cash && cash <= 555000000) { this.num11 = "500000000" , this.num12 = "50000000", this.num13 = cash - 550000000, this.num14 = st100k, this.num15 = st10k, this.num16 = st1k}																									
        else if (555000001 <= cash && cash <= 560000000) { this.num11 = "500000000" , this.num12 = "50000000", this.num13 = cash - 550000000, this.num14 = st100k, this.num15 = st10k, this.num16 = st2k}																									
        else if (560000001 <= cash && cash <= 570000000) { this.num11 = "500000000" , this.num12 = "50000000", this.num13 = cash - 550000000, this.num14 = st100k, this.num15 = st10k, this.num16 = st4k}																									
        else if (570000001 <= cash && cash <= 580000000) { this.num11 = "500000000" , this.num12 = "50000000", this.num13 = cash - 550000000, this.num14 = st100k, this.num15 = st10k, this.num16 = st6k}																									
        else if (580000001 <= cash && cash <= 600000000) { this.num11 = "500000000" , this.num12 = cash - 500000000, this.num13 = "", this.num14 = st100k, this.num15 = st20k, this.num16 = ""}																									
        else if (600000001 <= cash && cash <= 600054999) { this.num11 = "500000000" , this.num12 = "100000000", this.num13 = cash - 600000000, this.num14 = st100k, this.num15 = st20k, this.num16 = st0}																									
        else if (600055000 <= cash && cash <= 601000000) { this.num11 = "500000000" , this.num12 = "100000000", this.num13 = cash - 600000000, this.num14 = st100k, this.num15 = st20k, this.num16 = st200}																									
        else if (601000001 <= cash && cash <= 602000000) { this.num11 = "500000000" , this.num12 = "100000000", this.num13 = cash - 600000000, this.num14 = st100k, this.num15 = st20k, this.num16 = st400}																									
        else if (602000001 <= cash && cash <= 603000000) { this.num11 = "500000000" , this.num12 = "100000000", this.num13 = cash - 600000000, this.num14 = st100k, this.num15 = st20k, this.num16 = st600}																									
        else if (603000001 <= cash && cash <= 605000000) { this.num11 = "500000000" , this.num12 = "100000000", this.num13 = cash - 600000000, this.num14 = st100k, this.num15 = st20k, this.num16 = st1k}																									
        else if (605000001 <= cash && cash <= 610000000) { this.num11 = "500000000" , this.num12 = "100000000", this.num13 = cash - 600000000, this.num14 = st100k, this.num15 = st20k, this.num16 = st2k}																									
        else if (610000001 <= cash && cash <= 620000000) { this.num11 = "500000000" , this.num12 = "100000000", this.num13 = cash - 600000000, this.num14 = st100k, this.num15 = st20k, this.num16 = st4k}																									
        else if (620000001 <= cash && cash <= 630000000) { this.num11 = "500000000" , this.num12 = "100000000", this.num13 = cash - 600000000, this.num14 = st100k, this.num15 = st20k, this.num16 = st6k}																									
        else if (630000001 <= cash && cash <= 650000000) { this.num11 = "500000000" , this.num12 = "100000000", this.num13 = cash - 600000000, this.num14 = st100k, this.num15 = st20k, this.num16 = st10k}																									
        else if (650000001 <= cash && cash <= 700000000) { this.num11 = "500000000" , this.num12 = cash - 500000000, this.num13 = "", this.num14 = st100k, this.num15 = st40k, this.num16 = ""}																									
        else if (700000001 <= cash && cash <= 700054999) { this.num11 = "500000000" , this.num12 = "200000000", this.num13 = cash - 700000000, this.num14 = st100k, this.num15 = st40k, this.num16 = st0}																									
        else if (700055000 <= cash && cash <= 701000000) { this.num11 = "500000000" , this.num12 = "200000000", this.num13 = cash - 700000000, this.num14 = st100k, this.num15 = st40k, this.num16 = st200}																									
        else if (701000001 <= cash && cash <= 702000000) { this.num11 = "500000000" , this.num12 = "200000000", this.num13 = cash - 700000000, this.num14 = st100k, this.num15 = st40k, this.num16 = st400}																									
        else if (702000001 <= cash && cash <= 703000000) { this.num11 = "500000000" , this.num12 = "200000000", this.num13 = cash - 700000000, this.num14 = st100k, this.num15 = st40k, this.num16 = st600}																									
        else if (703000001 <= cash && cash <= 705000000) { this.num11 = "500000000" , this.num12 = "200000000", this.num13 = cash - 700000000, this.num14 = st100k, this.num15 = st40k, this.num16 = st1k}																									
        else if (705000001 <= cash && cash <= 710000000) { this.num11 = "500000000" , this.num12 = "200000000", this.num13 = cash - 700000000, this.num14 = st100k, this.num15 = st40k, this.num16 = st2k}																									
        else if (710000001 <= cash && cash <= 720000000) { this.num11 = "500000000" , this.num12 = "200000000", this.num13 = cash - 700000000, this.num14 = st100k, this.num15 = st40k, this.num16 = st4k}																									
        else if (710000001 <= cash && cash <= 720000000) { this.num11 = "500000000" , this.num12 = "200000000", this.num13 = cash - 700000000, this.num14 = st100k, this.num15 = st40k, this.num16 = st6k}																									
        else if (730000001 <= cash && cash <= 1000000000) { this.num11 = cash , this.num12 = "", this.num13 = "", this.num14 = st150k, this.num15 = "", this.num16 = ""}																									
        else if (1000000001 <= cash) { this.num11 = cash , this.num12 = "", this.num13 = "", this.num14 = st200k, this.num15 = "", this.num16 = ""}																									

        this.show = true

      }
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
    },
  },
}
</script>

<style lang="scss">
  
  .receipt{
    height: 30px;
    width: 150px;
  }

  .contents7{
    /* height: calc(100vh-150px); */
    width: 80vw;
  }

  .contents7-wrap{
    flex-direction: row;
    display: flex;  
    justify-content: space-between;
    margin: 0px 10%;
  }

  .contents7-left{
    width:40%;
    display: flex;
    flex-direction: column;
  }

  .contents7-form form{
    display: flex;
    flex-direction: row;
    // display: inline-block;
    // justify-content: flex-start;
  }

  .contents7-select{
    padding: 10px;
    text-align: center;
    select{
      width: 200px;
      height:30px;
      font-size:13px;
    }
  }

  .contents7-btn{
    text-align: center;
    padding: 10px;
  }

  .contents7-comment{
    padding: 10px;
    text-align: center;
    p{
    font-size: 11px;
    color: #BDBDBD;
    }
  }

  .contents7-result{
    flex-direction: row;
    display: flex;
    font-size: 14px;
  }

  .contents7-table{
    border: #6E6E6E 1px solid;
    font-size: 11px;
    width: 100%;
    height: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    th,td{
      padding: 4px 15px;
      text-align: left;
      font-weight: normal;
    }
    tr:nth-child(odd){
      background-color: #eee
    }
    tr:nth-child(even){
      background-color: #fff
    }

    tr:first-child{
      border-bottom: 1px solid #6E6E6E;
    }
  }



</style>
