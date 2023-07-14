<template>
  <form @submit.prevent="submitRequest">
    <!-- Delivery location (needed for popup screen, Doug can edit later) -->
    <label for="delivery-location">Delivery Location:</label>
    <select id="delivery-location" name="delivery-location" v-model="selectedLocation">
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
        <input type="text" id="item" name="item" v-model="requestedItem" required>

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
      selectedLocation: '',
      requestedItem: ''
    };
  },
  methods: {
    openPopup() {
      this.popupVisible = this.selectedLocation !== '';
    },
    closePopup() {
      this.popupVisible = false;
    },
    submitRequest() {
      // Perform form submission logic here
      // For demonstration purposes, simply navigate to ProgressBar.vue after form submission
      this.$router.push('/progressbar');
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
