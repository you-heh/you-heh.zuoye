<template>
  <div id="app">
    <!-- 直接渲染天气组件 -->
    <WeatherView /> 
  </div>
</template>

<script>
// 引入你的天气组件
import WeatherView from './components/WeatherView.vue' 

export default {
  components: {
    WeatherView
  }
}
</script>

<style>
/* 可以保留默认样式，或简单清空 */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>