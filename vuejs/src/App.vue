<template>
  <div id="app">

    <BoardComponent />
  </div>
</template>

<script>
import BoardComponent from './components/Board.vue'

export default {
  name: 'App',
  components: {
    BoardComponent
  }
}
</script>


<style>
#app {
  display: flex; /* 화면에 맞게 디스플레이 */
  justify-content: center; /*세로 가운데 정렬*/
  align-items: center; /*아이템 가운데 정렬*/
  min-height: 100vh;
  background-color: #FFFFFF;
  margin: 0;
}
</style>
