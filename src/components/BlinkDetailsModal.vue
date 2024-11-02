<template>
    <div v-if="showBlinkDetails" class="modal">
      <div class="modal-content">
        <h2>{{ blinkTitle }}</h2>
        <p>{{ blinkDescription }}</p>
        <button @click="toggleBlinkDetails">Close</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "BlinkDetailsModal",
    props: {
      showBlinkDetails: {
        type: Boolean,
        required: true
      },
      blinkTitle: {
        type: String,
        default: "Blink Details"
      },
      blinkDescription: {
        type: String,
        default: "Details about the blink go here..."
      }
    },
    methods: {
      toggleBlinkDetails() {
        this.$emit('close');  // Emit a close event to the parent component
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add your modal styles here */
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .modal-content {
    background-color: white;
    color: black;
    padding: 20px;
    border-radius: 5px;
    width: 300px;
    text-align: center;
  }
  </style>