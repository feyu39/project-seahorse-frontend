<template>
    <div class="home">
      <input type="text" id="textbox1" v-model="textbox1Value" />
      <input type="text" id="textbox2" />
      <button id="reqCompBut" @click="handleClick">Request Completed</button>
    </div>
  </template>
      
  
  <style scoped>
  #textbox1,
  #textbox2 {
    margin-bottom: 10px;
  }
  
  #myButton {
    background-color: #4CAF50;
    color: white;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
  }
  
  #myButton:hover {
    background-color: #45a049;
  }
  </style>
  
  
  <script setup>
  import { ref } from 'vue';
  import axios from 'axios'
  const textboxValue = ref('');
  
  const handleClick = () => {
    // Perform actions when the button is clicked
      axios.post('http://127.0.0.1:5000/send')
        .then(response => {
          console.log(response.data)
        })
        .catch(error => {
          console.log(error);
        });
    console.log('Button clicked!');
    console.log('Textbox value:', textboxValue.value);
  }
  </script>
    