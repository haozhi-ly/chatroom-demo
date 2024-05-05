<script setup lang="ts">
import { onMounted, ref } from "vue"
import { Msg } from "@/model"

const props=defineProps<{
  username: string
}>();

const toSendMsg = ref("");

const username=props.username;

const receiveMsgList = ref<Msg[]>([])

const ws = new WebSocket('ws://localhost:3000');

onMounted(() => {
  // WebSocket 服务器的 URL
  const wsUrl = 'ws://localhost:3000';

// 创建 WebSocket 连接
const ws = new WebSocket(wsUrl);

// 监听连接成功事件
ws.addEventListener('open', function () {
  console.log('Connected to WebSocket server');

  // 发送消息给服务器
});

// 监听接收到消息事件
ws.addEventListener('message', function (event) {
  
  console.log('Blob content as string:', event.data);
  receiveMsgList.value.push(JSON.parse(event.data))

});

// 监听连接关闭事件
ws.addEventListener('close', function () {
  console.log('Disconnected from WebSocket server');
});

// 监听连接错误事件
ws.addEventListener('error', function (error) {
  console.error('WebSocket error:', error);
});
})

function sendMsg(){
  const msgInfo= new Msg(username,toSendMsg.value)
  ws.send(JSON.stringify(msgInfo));
  toSendMsg.value="";
}

</script>

<template>
  <el-col :span="6">
    <div class="chart-out-box">
      <div class="chart-room-head">
        <el-scrollbar height="400px">
          <div v-for="(item, index) in receiveMsgList" :key="index">
            <p v-if="item.username == username" class="scrollbar-demo-item scrollbar-demo-is-own">


              {{item.content}}<span>{{ ":"+username }}</span>
              </p>
              <p v-else class="scrollbar-demo-item scrollbar-demo-is-other">

<span>{{item.username}}:</span>{{ item.content }}</p>
          </div>
          
        </el-scrollbar>
      </div>
      <div class="chart-room-footer">
        <el-input v-model="toSendMsg" style="width: 240px" :rows="4" type="textarea" placeholder="Please input" />
        <el-button type="success" style="margin-left:20px" @click="sendMsg">发送</el-button>
      </div>
    </div>
  </el-col>

</template>

<style lang="scss" scoped>
.chart-out-box {
  border: 1px solid blue;
  height: 400px;
}

.chart-room-head {
  height: 70%;
}

.chart-room-footer {

}

.scrollbar-demo-item {
  display: flex;
  align-items: center;
  height: 50px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
  background: var(--el-color-primary-light-9);
  color: var(--el-color-primary);
}

.scrollbar-demo-is-own {
  justify-content: right;
  background-color: green;
}

.scrollbar-demo-is-other {
  justify-content: left;
}

</style>
