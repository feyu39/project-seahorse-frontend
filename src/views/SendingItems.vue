<template>
  <div class="home">
    <h4 id="item-to-send">Item to send: {{itemToSend}}</h4>
    <button id="myButton" @click="handleClick">Request Completed</button>
  </div>
</template>
    

<style scoped>

#myButton {
background-color: #FFBF00;
margin-top: 40px;
padding: 10px 40px;
border: none;
cursor: pointer;
}


#myButton:hover {
background-color: #45a049;
}
</style>


<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import axios from 'axios'

const itemToSend = ref('None');
const timer = setInterval(() => {
fetchItemData()
}, 30000);

onMounted(() => {
fetchItemData();
});

onUnmounted(() => {
clearInterval(timer)
});

async function fetchItemData(){
  try {
    const response = await axios.get('http://127.0.0.1:5000/get-item');
    itemToSend.value = response.data['item'];
    console.log('Sucessfully got item')
    console.log(itemToSend.value)
  }
  catch (error) {
    console.log(error)
  }
}
const handleClick = () => {
// Perform actions when the button is clicked
  axios.post('http://127.0.0.1:5000/send', {}, {withCredentials: true, 
    headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'}
    })
    .then(response => {
      console.log(response.data)
    })
    .catch(error => {
      console.log(error);
    });
itemToSend.value = 'None'
console.log('Send button clicked!');
}
</script>
  