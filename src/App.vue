<template>
  <div id="app">

    <index />
  
  </div>
</template>

<script>

import Index from './components/Index'

export default {
  name: 'App',
  components: {
    Index
  }
}
</script>

<style>

@import url('https://fonts.googleapis.com/css?family=Livvic|Permanent+Marker&display=swap');

* {
  font-family: 'Livvic', sans-serif;
}

h1, h2, h3, h4 {
  font-family: 'Permanent Marker', cursive;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #2c3e50;
}
.padding {
  padding: 32px 0;
}
</style>
