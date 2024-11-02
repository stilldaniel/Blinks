<template>
  <div>
    <div class="icon-container">
        <i @click="toggleNotifications" class="fa-solid fa-bell"></i>
        <div v-if="showNotifications" class="notification-menu">
            <div class="notifications-header">
                <h3>Notifications</h3>
            </div>
            <div v-for="(notification, index) in notifications" :key="index" class="notification-item">
                <div class="notification-icon">
                    <i :class="notification.icon"></i>
                </div>
                <div class="notification-text">
                    <p class="notification-title">{{ notification.title }}</p>
                    <p class="notification-message">{{ notification.message }} <a href="#" class="view-more">View More</a></p>
                </div>
            </div>
        </div>
        <i @click="toggleBlinkDetails" class="fa-regular fa-circle-question"></i>
    </div>
    <div v-if="showBlinkDetails" class="blink-details-modal" @click.self="showBlinkDetails = false">
      <div class="blink-details-content">
        <div class="modal-header">
          <h2>Blink Details</h2>
          <button @click="showBlinkDetails = false" class="close-btn">×</button>
        </div>
        <div class="modal-body">
          <h3>med.trade</h3>
          <p>Created July 15th, 2024</p>
          <p><strong>Creator:</strong> Michael O.</p>
          <p><strong>Description:</strong> Trading with Solana</p>
          <p><strong>Recipient Wallet:</strong> trading with Solana</p>
          <p><strong>Meta Data:</strong> gfegeye642888x4...dsgphjBG</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import LineChart from './LineChart.vue'
export default {
//   components: { LineChart },
  name: "NotificationMenu",
  data() {
    return {
        showNotifications: false,
        showBlinkDetails: false,
        notifications: [
            {
                icon: "fa-solid fa-bell purple",
                title: "New Blinks Created",
                message: "A new blink has been created with creator name 'Daniel' with NFT name..."
            },
            {
                icon: "fa-solid fa-bell purple",
                title: "New Blinks Created",
                message: "A new blink has been created with creator name 'Daniel' with NFT name..."
            },
            {
                icon: "fa-solid fa-bell smoke",
                title: "New Blinks Created",
                message: "A new blink has been created with creator name 'Daniel' with NFT name..."
            }
        ],
        blinkTitle: 'med.trade',
        blinkDescription: 'Trading with Solana',
        creator: 'Michael O.',
        recipientWallet: 'gfeyge642882x4...dsgehgjb',
        metaData: 'gfeyge642882x4...dsgehgjb'
    };
  },
  methods: {
    toggleNotifications() {
        this.showNotifications = !this.showNotifications;
    },
    toggleBlinkDetails() {
        this.showBlinkDetails = !this.showBlinkDetails;
    }
  }
}
</script>

<style>
    .icon-container {
        display: flex;
        align-items: center;
        
        cursor: pointer;
    }
    .notification-menu {
        position: absolute;
        top: 50px;
        right: 10px;
        background-color: #fff;
        border: 1px solid #dddd;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        border-radius: 12px;
        padding: 15px;
        width: 300px;
        z-index: 1000;
    }
    .notification-item {
        display: flex;
        align-items: center;
        padding: 10px 0;
        color: #333;
    }
    .fa-solid {
        margin-right: 10px;
    }
    .fa-regular {
        margin-left: 10px
    }
    .notification-icon .first{
        color: #eaeaea;
        margin-top: 15px;
    }
    .notification-icon .purple{
        padding: 7px;
        background: purple;
        color: white;
        border-radius: 50%;
    }
    .notification-icon .smoke{
        padding: 7px;
        background: whitesmoke;
        border-radius: 50%;
    }
    .notification-icon {
        margin: 0 10px;
    }
    .notifications-header {
        color: #333;
        border-bottom: 1px solid #eaeaea;
    }
    .notification-text {
        flex-flow: 1;
        background-color: whitesmoke;
        border-radius: 30px;
        padding: 15px;
    }
    .notification-title {
        font-weight: bold;
        font-size: 15px;
    }
    .notification-message {
        font-size: 12px;
        color: #666;
    }
    .view-more {
        font-size: 10px;
        color: #9B59B6;
        text-decoration: none;
        cursor: pointer;
    }
    .notification-item + .notification-item {
        border-top: 1px solid #f0f0f0;
    }
    .blink-details-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.blink-details-content {
  background: white;
  color: #333;
  padding: 20px;
  border-radius: 10px;
  width: 90%;
  max-width: 600px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.close-btn {
  background: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
}

.modal-body h3 {
  margin-top: 0;
}

.modal-analytics img {
  width: 100%;
  margin-top: 15px;
}
    @media only screen and (max-width: 330px) {
        .fa-regular {
            margin-left: 0px
        }
        .fa-solid {
            margin-right: 5px;
        }
    }
    @media only screen and (max-width: 470px) {
        .blink-details-content {
            width: 80%;
        }
    }

    /* .notification-text {
        color: #444;
    } */
</style>