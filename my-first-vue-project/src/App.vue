<template>
  <div id="app">
    <h1 v-text="title"></h1>
        <input v-model="newItem" v-on:keyup.enter="onSubmit"/>
    <ul>
     <li v-for="item in items" v-text="item.lable" v-bind:class="[{finished: item.isfinished}]" v-on:click="toggleFinished(item)">
     </li>
    </ul>
  </div>
</template>

<script>
import Store from './store'
export default {
  data(){
  return{
    title:'vary easy todo list',
    items:Store.fetch(),
    newItem:''
  }
  },
  methods:{
  toggleFinished:function(item){
     item.isfinished=!item.isfinished;
  },
  onSubmit:function(){
  if(this.newItem!=""){
  this.items.push({
  lable:this.newItem,
  isfinished:false
  })
  this.newItem='';
  }
  }
  },
  watch:{
    "items":{
    handler:function(items){
         Store.save(items)
    },
    deep:true
    }
  }
}
</script>

<style>
ul{
list-style:none;
}
li{
color:blue;
padding:10px;
background:#ccc;
margin-top:10px;
width:10%;
margin-left:560px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
li{
cursor:pointer
}
.finished{
 text-decoration:underline
}
</style>
