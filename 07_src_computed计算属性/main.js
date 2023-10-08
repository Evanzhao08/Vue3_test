//引入的不再是vue的构造函数，引入的一个createApp的工厂函数
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

// let app = createApp(App)