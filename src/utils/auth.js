import storage from './storage'

const publicList = [
  '/common/sign-in'
]

export default {
  // checkToken (path) {
  //   return storage.token
  //     ? publicList.indexOf(path) < 0 ? true : { path: '/' }
  //     :
  // },
  checkPermission () {

  },
  async verify (to) {
    if (storage.token) {
      return publicList.indexOf(to.path) < 0 ? true : { path: '/' }
    } else {
      return (publicList.indexOf(to.path) < 0) ? {
        path: '/common/sign-in',
        query: {
          redirect: to.path
        }
      } : true
    }
  }
}