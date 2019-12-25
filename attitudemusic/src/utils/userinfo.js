import Cookie from 'js-cookie'
import vuex from '../store'
export const saveUserInfo = function saveUserInfo() {
  let userInfo = Cookie.get('userInfo');
  userInfo = JSON.parse(userInfo)
  if (userInfo) {
    vuex.state.user = userInfo
  }
}
