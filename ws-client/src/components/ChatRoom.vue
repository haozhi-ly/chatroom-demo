<script setup lang="ts">
import {ref,computed} from 'vue'
import ChatRoomItem from './ChatRoomItem.vue'


const allUserList = [
  {
    id:1,
    name:"zhansan"
  },
  {
    id:2,
    name:"zhansan1"
  }
  ,{
    id:3,
    name:"zhansan2"
  },{
    id:4,
    name:"zhansan3"
  },{
    id:5,
    name:"zhansan4"
  }
];
const partUsersList=[];

let index =0 ;
for (let round=0;round<allUserList.length/4;round++){
    let userList =[];
    for (let i=0;i<4&& index< allUserList.length;i++){
      userList.push(allUserList[index++]);
    }
    partUsersList.push(userList)
}

const reativePartUsersList = ref(partUsersList)



</script>

<template >
      <div>
        
        <el-row v-for="(userList,index) in reativePartUsersList" :key="index" :gutter="20" class="chat-out-box">

          <ChatRoomItem v-for="userInfo in userList" :key="userInfo.id"  :username="userInfo.name"/>
        </el-row>
    </div>
      
    
         
    
</template>

<style scoped>
.chat-out-box {
  margin-bottom: 10px;
}


</style>
