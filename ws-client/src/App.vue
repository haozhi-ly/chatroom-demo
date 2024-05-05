<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import ChatRoom from './components/ChatRoom.vue'
</script>

<template>

    <ChatRoom />
    
</template>

<style scoped>


.grid-content {
  border-radius: 4px;
  background-color: green;
  min-height: 200px;
}


</style>
