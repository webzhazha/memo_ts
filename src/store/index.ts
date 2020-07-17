import Vue from 'vue'
import Vuex from 'vuex'
import DataHelper from '../model/dataHelper'
import cateName from '../model/cateEnum'
Vue.use(Vuex)
let optionsNums:any = []
export default new Vuex.Store({
      state : {
        list: new DataHelper('alldata').readData(),
        status: 0,
        optionsNum: optionsNums
      },
      getters: {
        list: state=>state.list,
        optionsNum: state=>state.optionsNum
      },
      mutations: {
        changeList(state){
          let optionsNum = []
          let arr = new DataHelper('alldata').readData()
          let obj0:any = {
            label: '全部',
            value: 0,
            num: arr.length
          }
          optionsNum.push(obj0)
          let arr1 = arr.filter((item:any)=> item.status == cateName.study)
          let obj1 = {
            label: '学习',
            value: cateName.study,
            num: arr1.length
          }
          optionsNum.push(obj1)
          let arr2 = arr.filter((item:any)=> item.status == cateName.game)
          let obj2 = {
            label: '游戏',
            value: cateName.game,
            num: arr2.length
          }
          optionsNum.push(obj2)
          let arr3 = arr.filter((item:any)=> item.status == cateName.emotion)
          let obj3 = {
            label: '感情',
            value: cateName.emotion,
            num: arr3.length
          }
          optionsNum.push(obj3)
          state.optionsNum = optionsNum
          // 根据status来赋值
          if(state.status){
            state.list = arr.filter((item:any)=> item.status == state.status)
          }else {
            state.list = arr
          }
        },
        changeStatus(state,status){
          state.status = status
        }
      }
})