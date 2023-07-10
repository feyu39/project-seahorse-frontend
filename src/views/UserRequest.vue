<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
  
  <form>
    <!-- Delivery location (needed for popup screen, Doug can edit) -->
    <label for="delivery-location">Delivery Location:</label>
    <select id="delivery-location" name="delivery-location" @change="openPopup">
      <option value="">Select a location</option>
      <option value="Location 1">Location 1</option>
      <option value="Location 2">Location 2</option>
      <option value="Location 3">Location 3</option>
    </select>

    <br><br>

    <!-- Popup screen -->
    <div id="popup" class="popup" v-show="popupVisible">
      <div class="popup-content">
        <span class="close" @click="closePopup">&times;</span>
        <h2>Pickup Request</h2>
        <label for="item">Item Requested:</label>
        <input type="text" id="item" name="item" required>

        <br><br>

        <input type="submit" value="Submit Request">
      </div>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      popupVisible: false,
    };
  },
  methods: {
    openPopup() {
      const deliveryLocation = document.getElementById('delivery-location');
      if (deliveryLocation.value !== '') {
        this.popupVisible = true;
      }
    },
    closePopup() {
      this.popupVisible = false;
    },
  },
};
</script>

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
</style>
