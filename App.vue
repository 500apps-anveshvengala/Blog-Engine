<template>
  <div id="app">
    <hr>
 <router-view></router-view>
  
    <Login />
  </div>
</template>

<script>


import Login from './components/Login.vue'
export default {
  name: 'App',
  components: {
   Login,
 
  },
 
}
</script>
