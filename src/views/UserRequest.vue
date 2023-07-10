<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>
     <form>
         <!-- Delivery location (needed for popup screen, Doug can edit) -->
         <label for="delivery-location">Delivery Location:</label>
         <select id="delivery-location" name="delivery-location" onchange="openPopup()">
             <option value="">Select a location</option>
             <option value="Location 1">Location 1</option>
             <option value="Location 2">Location 2</option>
             <option value="Location 3">Location 3</option>
         </select>
         
         <br><br>

    <!-- Popup screen -->
    <div id="popup" class="popup">
      <div class="popup-content">
        <span class="close" onclick="closePopup()">&times;</span>
        <h2>Pickup Request</h2>
        <label for="item">Item Requested:</label>
        <input type="text" id="item" name="item" required>

        <br><br>

        <input type="submit" value="Submit Request">
      </div>
    </div>
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
</style>
<script setup>
    function openPopup() {
      var deliveryLocation = document.getElementById("delivery-location");
      if (deliveryLocation.value !== "") {
        var popup = document.getElementById("popup");
        popup.style.display = "block";
      }
    }

    function closePopup() {
      var popup = document.getElementById("popup");
      popup.style.display = "none";
    }
</script>
  
