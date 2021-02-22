import { reactive, onMounted } from 'vue'
import request from '@/utils/request'

const commitData = (data) =>
  request({
    url: '/m/l',
    method: 'post',
    data,
  })

export default ({ success }) => {
  // 响应状态
  const state = reactive({
    dlgVisble: false,

    form: {
      iretion: '',
    },
  })

  // 数据请求
  const submit = async () => {
    const commitResponse = await commitData(state.form)
  }

  // 事件响应
  state.onOpen = () => {
    state.dlgVisble = true
  }
  state.onSubmit = async () => {
    await submit()
    success()
  }
  state.onReset = () => {
    state.form = reactive({
      form: {
        iretion: '',
      },
    })
  }

  return state
}
