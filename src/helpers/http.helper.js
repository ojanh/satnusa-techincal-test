import axios from "axios";
import { AppActions } from "slices/app.slice";

export function SetupInterceptor(dispatch) {
   axios.interceptors.request.use(r => {
      dispatch(AppActions.setLoading(true))
      return r;
   })


   axios.interceptors.response.use(r => {
      dispatch(AppActions.setLoading(false))
   return r;
   }, e => {
      dispatch(AppActions.setLoading(false))
      dispatch(AppActions.setError({isError: true, errorMessage: e?.errorMessage ?? ''}))
   return e;
   })

}