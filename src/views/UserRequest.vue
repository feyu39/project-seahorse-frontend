<script>
import axios from 'axios';
axios.defaults.withCredentials = true;


// eslint-disable-next-line no-unused-vars
function changeWords(a,b,c,d) {
  var elem = document.getElementById(a);
  var txt = elem.innerHTML;

  if((txt.includes("Pick") == false) && (txt.includes("Drop") == false)) {
    elem.innerHTML = b;
    document.getElementById(c).style.backgroundColor = '#FAEC9B';
  } else if (d.includes("yes")) {
    alert('Already picked a location, refresh the page to restart');
  }
}

export default {
  data() {
    return {
      popupVisible: false,
      requestedItem: '',
      startLocation: '',
      endLocation: '',
      requestData: {}
    };
  },
  methods: {
    closePopup() {
      this.popupVisible = false;
    },
    submitRequest() {
      // Perform form submission logic here
      // For demonstration purposes, simply navigate to ProgressBar.vue after form submission
      this.requestData = {start_location: this.startLocation, end_location: this.endLocation, item: this.requestedItem};
      axios.post('http://127.0.0.1:5000/request', this.requestData, {withCredentials: true})
        .then(response => {
          console.log(response.data)
        })
        .catch(error => {
          console.log(error);
        });
      this.$router.push('/progress');
    },
    changeWords(a,b,c,d, start) {
      var elem = document.getElementById(a);
      var txt = elem.innerHTML;

      if((txt.includes("Pick") == false) && (txt.includes("Drop") == false)) {
        elem.innerHTML = b;
        if(start) {
          this.startLocation = b;
        }
        else {
          this.endLocation = b
        }
        document.getElementById(c).style.backgroundColor = '#FAEC9B';
      } else if (d.includes("yes")) {
        alert('Already picked a location, refresh the page to restart');
      }
    },
  }
}
</script>

<template>
  <form @submit="submitRequest">
    <head>
      <h3 class="instructions">Select the pick-up and drop-off locations for the robot delivery</h3>
      <h2 class="PickupHeader">Pickup Location</h2>
    </head>
    <body>
      <div class="container FromSelection">
        <!--<h2>Start/Pickup Location</h2>-->
        <img src="RIC Conference Rooms Map.jpg" alt="Ric Conference Room Map" class="center" style="border:1px solid black">
        <button type= "button" id="CafeBtn" class="btn cafeBox" @mouseover="changeWords('FromSelection','From the Cafeteria', 'FromBoxDiv','no', true)" @mouseout="changeWords('FromSelection',' ', 'FromBoxDiv','no', true)" @click="changeWords('FromSelection','Pick up at Cafeteria', 'FromBoxDiv','yes', true)">Cafe</button>
        <button type= "button" id="VVBtn" class="btn VVBox" @mouseover="changeWords('FromSelection','From V&V Lab', 'FromBoxDiv','no', true)" @mouseout="changeWords('FromSelection',' ', 'FromBoxDiv','no', true)" @click="changeWords('FromSelection','Pick up at V&V Lab', 'FromBoxDiv', 'yes', true)">V&V</button>
        <button type= "button" id="DemoBtn" class="btn DemoBox" @mouseover="changeWords('FromSelection','From Demo Room', 'FromBoxDiv','no', true)" @mouseout="changeWords('FromSelection',' ', 'FromBoxDiv','no')" @click="changeWords('FromSelection','Pick up at Demo Room', 'FromBoxDiv', 'yes', true)">Demo</button>

        <div id="FromBoxDiv" class="FromBox">
          <p id="FromSelection" class="SelectionChoice center"> </p>    
        </div>
      </div>

      <div class="container ToSelection">
        <!--<p>End/Dropoff Location</p>-->
        <img src="RIC Conference Rooms Map.jpg" alt="Ric Conference Room Map" class="center" style="border:1px solid black">
        <button type= "button" id="CafeBtn" class="btn cafeBox" @mouseover="changeWords('ToSelection','To the Cafeteria', 'ToBoxDiv', 'no', false)" @mouseout="changeWords('ToSelection',' ', 'ToBoxDiv', 'no', false)" @click="changeWords('ToSelection','Drop off at Cafeteria', 'ToBoxDiv', 'yes', false)">Cafe</button>
        <button type= "button" id="VVBtn" class="btn VVBox" @mouseover="changeWords('ToSelection','To V&V Lab', 'ToBoxDiv', 'no', false)" @mouseout="changeWords('ToSelection',' ', 'ToBoxDiv', 'no', false)" @click="changeWords('ToSelection','Drop off at V&V Lab', 'ToBoxDiv', 'yes', false)">V&V</button>
        <button type= "button" id="DemoBtn" class="btn DemoBox" @mouseover="changeWords('ToSelection','To Demo Room', 'ToBoxDiv', 'no', false)" @mouseout="changeWords('ToSelection',' ', 'ToBoxDiv', 'no')" @click="changeWords('ToSelection','Drop off at Demo Room', 'ToBoxDiv', 'yes', )">Demo</button>

        <div id="ToBoxDiv" class="ToBox">
          <p id="ToSelection" class="SelectionChoice center"> </p>    
        </div>
      </div> 
    </body>

    <br><br>

    <!-- Popup screen
    <div id="popup" class="popup" v-show="popupVisible">
      <div class="popup-content">
        <span class="close" @click="closePopup">&times;</span>
        <h2>Pickup Request</h2>
        <label for="item">Item Requested:</label>
        <input type="text" id="item" name="item" v-model="requestedItem" required>

        <br><br>

        <input type="submit" value="Submit Request">
      </div>
    </div> -->
    <input type="submit" value="Submit Request">
  </form>
</template>



<style scoped>
/* Styles for the popup */
.popup {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
}

.popup-content {
  background-color: #fff;
  border-radius: 5px;
  width: 300px;
  padding: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.close {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
}

.center {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 70%;
    height: 70%;
  }

  .instructions {
    margin-left: 37%;
  }

  .PickupHeader {
    margin-left: 2vw;
  }

  .FromSelection {
    margin-left:2%;
    margin-top: 0;
    float: left;
  }

  .ToSelection {
    margin-left:52%;
    margin-top:3%;
  }

  .FromBox {
    border: 2px solid black;
    width:9vw;
    height:5vw;
    margin: auto;
    margin-top: 2vw;
    vertical-align: middle;
  }

  .FromBox .SelectionChoice {
    font-size: 1.2vw;
    text-align: center;
  }

  .ToBox {
    border: 2px solid black;
    width:9vw;
    height:5vw;
    margin: auto;
    margin-top: 2vw;
    vertical-align: middle;
  }

  .ToBox .SelectionChoice {
    font-size: 1.2vw;
    text-align: center;
  }

  .container {
    position: relative;
    width: 45%;
  }

  .container img {
    width: 100%;
    height: auto;
  }

  .container .btn{
    transform: translate(-50%, -50%);
    background-color: rgba(117, 113, 113, 0.499);
    color: black;
    font-size: 0.9vw;
    border: 5px dashed black;
    cursor: pointer;
    border-radius: 5px;
  }

  .container .cafeBox {
    position: absolute;
    top: 12.25vw;
    left: 80%;
    width:9%;
    height:6.25vw;
  }

  .container .VVBox {
    position: absolute;
    top: 13.75vw;
    left: 11.75vw;
    width:5.5vw;
    height: 2vw;
  }

  .container .DemoBox {
    position: absolute;
    top: 10.75vw;
    left: 25.5vw;
  }

  .container .btn:hover {
    /*background-color: rgba(204, 204, 68, 0.577);*/
    background-color: #dfd07a8f;
    transition: 0.3s;
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
  }

</style>
