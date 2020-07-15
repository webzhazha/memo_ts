// 初始化信息对象

export default class ItemData {
  id:number;
  name:string;
  time:string;
  status:number;
  text:string;
  constructor(id:number,name:string,status:number,text:string){
    this.id = id
    this.name = name
    this.time = (new Date()).toLocaleString()
    this.status = status
    this.text = text
  }
}