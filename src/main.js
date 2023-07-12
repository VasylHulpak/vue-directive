import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
app.directive('color', function(el, binding) {
    el.style.color = binding.value?.color || 'red'
})

app.mount('#app')
