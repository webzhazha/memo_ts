import ItemData from './createInfo'
// 操作函数
export default class DataHelper {
  pname:string;
  constructor(pname:string){
    this.pname = pname
  }
  // 读取方法
  readData():any{
    let arr:any = localStorage.getItem(this.pname)
    console.log(arr);
    
    if(arr){
      return JSON.parse(arr)
    }else {
      return []
    }
  }
  // 保存方法
  saveData(arr:any){
    localStorage.setItem(this.pname,JSON.stringify(arr))
  }
  // 添加方法
  addData(name:string,status:number,text:string):void{
    // 
    let arr:any = this.readData()
    // 获取id
    let id:number = arr.length>0? arr[arr.length-1].id+1 : 1
    let itemData:ItemData = new ItemData(id,name,status,text)
    console.log(arr);
    
    console.log(itemData);
    
    arr.push(itemData)
    
    this.saveData(arr)
  }
  // 修改方法
  changeData(id:number,name:string,status:number,text:string){
    let arr = this.readData()
    let index:number = arr.findIndex((item:any)=>{
      return item.id == id
    })
    let itemData = arr[index]
    itemData.name = name
    itemData.status = status
    itemData.text = text
    arr.splice(index,1,itemData)
    this.saveData(arr)
  }
  // 删除方法
  delData(id:number){
    let arr = this.readData()
    let index:number = arr.findIndex((item:any)=>{
      return item.id == id
    })
    arr.splice(index,1)
    this.saveData(arr)
  }
}