<template>
    <div>
      <div class="progress">
        <div class="progress-bar" :style="{ width: progressWidth }"></div>
      </div>
      <div class="text-center mt-2">
        <span>Robot moving to location 1</span>
        <span class="ml-auto">Robot moving to location 2</span>
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
        if (response.data['location'] === 4) {
          this.progressWidth = '50%';
        }
        else if(response.data['location'] === 5) {
          this.progressWidth = '100%'
          setTimeout(3000, this.$router.push('/request'))
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  },
},
created() {
  this.fetchData();
  // Call the fetchData method every 10 seconds (adjust the interval as needed)
  setInterval(this.fetchData, 10000);
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