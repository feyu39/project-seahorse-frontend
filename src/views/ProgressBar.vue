<template>
    <div style="position: relative;">
      <div class="progress" style="height: 20px;">
        <div class="progress-bar" :style="{ width: progressWidth }"></div>
      </div>
      <div class="text-center mt-2">
        <span style="position: absolute; left: 50%;">^ Robot arrived at location 1</span>
        <span style="position: absolute; right: 0;">Robot arrived at location 2 ^</span>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        progressWidth: '0%',
      };
    },
    methods: {
  async fetchData() {
    axios.get('http://127.0.0.1:5000/location')
      .then(response => {
        if (response.data['location'] === 1) {
          this.progressWidth = '100%';
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  },
},
created() {
  this.fetchData();
  // Call the fetchData method every 5 seconds (adjust the interval as needed)
  setInterval(this.fetchData, 5000);
},
  };
  </script>
  
  <style>
  .progress {
    height: 20px;
    margin-bottom: 10px;
    overflow: hidden;
    background-color: #f5f5f5;
    border-radius: 4px;
  }
  
  .progress-bar {
    transition: width 0.6s ease;
    height: 100%;
    background-color: #007bff;
  }
  </style>
  