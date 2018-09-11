const Storage_Key='store';
export default{
  fetch(){
    return JSON.parse(window.localStorage.getItem(Storage_Key)||'[]');
  },
  save(items){
    window.localStorage.setItem(Storage_Key,JSON.stringify(items))
  }
}
