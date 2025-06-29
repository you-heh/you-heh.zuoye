import Vue from 'vue'
import VueRouter from 'vue-router'
// 注意这里的组件引入路径是否正确！
import WeatherView from '@/components/WeatherView.vue' 

Vue.use(VueRouter)

const routes = [
  {
    path: '/weather', // 或你想设置的路径，比如 '/weather'
    component: WeatherView
  }
]

const router = new VueRouter({
  routes
})

export default router