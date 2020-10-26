<template>
  <div class="contents7">
    <h1>売上代金に係る金銭又は有価証券の受取書</h1>
        <form action="" name="form">
      <input type="tel" class="receipt" v-model.number="answer">
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

