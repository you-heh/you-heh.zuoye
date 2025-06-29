<template>
  <div class="weather-container">
    <h3>重庆天气预报</h3>
    <div class="weather-list">
      <div class="weather-card" v-for="(day, index) in weatherData" :key="index">
        <p>{{ day.date }}</p>
        <img
          :src="getWeatherImg(day.wea)"
          :alt="day.wea"
          class="weather-img"
          @error="imgError"
        />
        <p>{{ day.wea }}</p>
        <p>{{ day.tem_night }}℃ ~ {{ day.tem_day }}℃</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      weatherData: []
    }
  },
  mounted() {
    this.fetchWeatherData()
  },
  methods: {
    fetchWeatherData() {
      const appid = '84444332'
      const appsecret = '7pFCRFsD'
      axios.get('http://v1.yiketianqi.com/free/week', {
        params: {
          appid,
          appsecret,
          city: '重庆'
        }
      })
      .then(response => {
        this.weatherData = response.data.data || []
      })
      .catch(error => {
        console.error('获取天气失败:', error)
      })
    },
    getWeatherImg(wea) {
      // 直接返回 public 下的路径
      return `/weather/${wea}.png`
    },
    imgError(event) {
      event.target.src = '/weather/logo.png'
    }
  }
}
</script>

<style>
.weather-container {
  padding: 20px;
  border: 1px solid #eee;
  border-radius: 5px;
  width: 800px;
  margin: 30px auto;
  background: #fff;
}
.weather-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}
.weather-card {
  width: 150px;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 12px 8px;
  text-align: center;
  background: #fafbfc;
  box-shadow: 0 2px 8px #f0f1f2;
}
.weather-img {
  width: 48px;
  height: 48px;
  margin: 8px 0;
}
</style>