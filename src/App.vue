<template>
  <img alt="Vue logo" src="./assets/logo-3.png">
  <HelloWorld msg="School In-Site"/>
  <!-- This is a sample learning staff -->
  <br />
  <h3>Button component</h3>
  <ButtonClicked />
  <button-clicked />
  <!-- This is a counter component -->
  <br>
  <h3>Counter</h3>
  <counter />
  <event-handling></event-handling>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import ButtonClicked from '@/components/ButtonClicked';
import Counter from '@/components/Counter';
import EventHandling from '@/components/EventHandling';
//import EventHandling from './components/EventHandling.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    ButtonClicked,
    Counter,
    EventHandling,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
