<template>
  <div id="app">
  <input type="text" name="" v-model="text" value="">
  <ul>
    <li v-for="(value,index) in filterPerson">{{value}}</li>
  </ul>
  <button type="button" @click="sortAge(1)" name="button">升序排列</button>
  <button type="button" @click="sortAge(-1)" name="button">降序排列</button>
  </div>
</template>
<script>
export default {
  name: 'App',
  data(){
  return{
    sortNum:0,
    text:'',
   persons:[
     {age:20,name:'许琳'},
      {age:22,name:'许1'},
        {age:24,name:'许1'},
          {age:21,name:'许1'},
     {age:22,name:'孙骑龙'},
     {age:28,name:'qt'}
   ]
  }
},
methods:{
 sortAge(x){
   this.sortNum=x;
   console.log(this.sortNum);
 }
},
  computed:{//也是model的一种 混合属性 计算属性 无论在页面开始还是在数据监视的过程中 都会触发 而且有缓存
filterPerson:{
  get(){
    //取出相关数据
      const {text,persons,sortNum}=this;
      //filter()参数可以是函数,函数内参数为element,index,arr,需要返回true才能添加给新数组元素
     let arr=persons.filter(p=>p.name.indexOf(text)!==-1);
     arr.sort(function(p1,p2){
       if (sortNum==-1) {
         return p2.age-p1.age
       }
       else if(sortNum==1){
          return p1.age-p2.age
       }
     })
     return arr;
  }
}
  },
  watch:{
}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
