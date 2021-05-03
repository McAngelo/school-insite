<template>
  <button @click="count++">
    You clicked me {{ count }} times.
  </button>
</template>

<script>
export default {
  name: 'ButtonClicked',
  data(){
    return {
        count: 0
    }
  }
}
</script>