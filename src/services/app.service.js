import { AppActions } from "slices/app.slice"

export default class AppService {

   static getUser(){
      return dispatch => {
         fetch('https://jsonplaceholder.typicode.com/users')
         .then(r=> r.json())
         .then(r => {
            dispatch(AppActions.setUser(r))
         })
      }
   }

   static filterUser(value, type){
      return AppActions.filterUser({id: value, type})
   }
}