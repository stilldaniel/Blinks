<template>
    <div class="container">
      <div class="home">
          <nav class="navbar">
        
              <div class="logo">
                <img src="../assets/image.png">
                  
              </div>
     
              <div class="nav-button">
                  <button  @click="openWalletSelection" class="btn">Connect</button>
              </div>
          </nav>
          <div class="header-text">
              <h1>Everyone can Create <span><br>Blinks</span> </h1>
              <p>Create blinks without a single line of code</p>
              <button @click="openWalletSelection" class="header-btn">Connect</button>
              <router-link to="/DashBoard">
                <p class="page-link">Click Here</p>
              </router-link>
          </div>
      </div>
      <div v-if="isWalletSelectionOpen" class="modal-overlay">
        <div class="modal-content">
          <h2>Connect Wallet</h2>
          <p>Select a supported Solana wallet to continue</p>
          <ul class="wallet-list">
            <li @click="selectWallet('Phantom')" class="wallet-item">Phantom Wallet</li>
            <li @click="selectWallet('Solflare')" class="wallet-item">Solflare Wallet</li>
            <li @click="selectWallet('MetaMask')" class="wallet-item">MetaMask Wallet</li>
            <li @click="selectWallet('Math')" class="wallet-item">Math Wallet</li>
          </ul>
          <button @click="closeWalletSelection" class="close-button">Close</button>
        </div>
      </div>
  
      <!-- Phantom Wallet Modal -->
      <div v-if="isPhantomWalletOpen" class="modal-overlay">
        <div class="modal-content">
          <h2>Phantom Wallet</h2>
          <!-- Tab Buttons -->
          <div class="tabs">
            <button @click="selectTab('QR')" :class="{ active: activeTab === 'QR' }">QR code</button>
            <button @click="selectTab('Browser')" :class="{ active: activeTab === 'Browser' }">Browser</button>
          </div>
          <!-- Tab Content -->
          <div class="wallet-content">
            <!-- QR Code Content -->
            <div class="qr-code" v-if="activeTab === 'QR'">
              <img src="../assets/png-transparent-qr-code-computer-icons-font-awesome-two-dimensional-code-icon-miscellaneous-angle-text-removebg-preview.png" alt="QR Code">
              <p>Scan QR code with phone to continue</p>
              <button @click="copyLink">Copy link</button>
            </div>
            <!-- Browser Content -->
            <div v-if="activeTab === 'Browser'">
              <img src="../assets/metamask_logo.png" alt="MetaMask">
              <p>Detecting for MetaMask...</p>
            </div>
          </div>
          <button @click="closeModal" class="close-button">Close</button>
        </div>
      </div>
    </div>
  </template>
   
  <script>
      export default {
            name: 'MainCard',
    data() {
      return {
        isWalletSelectionOpen: false, // Wallet selection modal visibility
        isPhantomWalletOpen: false,   // Phantom wallet modal visibility
        activeTab: 'QR'               // Active tab for Phantom wallet modal
      };
    },
    methods: {
      openWalletSelection() {
        this.isWalletSelectionOpen = true; // Show wallet selection modal
      },
      closeWalletSelection() {
        this.isWalletSelectionOpen = false; // Hide wallet selection modal
      },
      selectWallet(wallet) {
        this.closeWalletSelection(); // Close wallet selection modal
        if (wallet === 'Phantom') {
          this.isPhantomWalletOpen = true; // Show Phantom wallet modal
        } else if(wallet === 'Solflare'){
          this.isPhantomWalletOpen = true;
        }
        else if(wallet === 'MetaMask'){
          this.isPhantomWalletOpen = true;
        }else if(wallet === 'Math'){
          this.isPhantomWalletOpen = true;
        }
        // Handle other wallets if necessary
      },
      closeModal() {
        this.isPhantomWalletOpen = false; // Close Phantom wallet modal
      },
      selectTab(tab) {
        this.activeTab = tab; // Change active tab
      },
      copyLink() {
        // Logic to copy the QR code link to clipboard
        navigator.clipboard.writeText('thrdydchjcbv...ufy');
        alert('Link copied to clipboard!');
      }
    }
  };
  </script>
  
  <style scoped>
  
    template {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    .home {
        background: radial-gradient(circle at center, rgba(150, 0, 255, 0.8) 0%, rgba(75, 0, 130, 0.7) 25%, rgba(43, 0, 77, 0.9) 50%, #0d001f 80%),
        linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.9));
        height: 100vh;
    }
    .navbar{
      display: flex;
      justify-content: space-between;
      background-color: rgba(0, 0, 0, 0.4);
    }
  .logo img{
      margin-left: 100px;
      width: 100px;
     
  }
  .btn{
      background-color: #50057b;
      padding: 10px 40px;
      border: 1px solid white;
      border-radius: 20px;
      margin-right: 100px;
      margin-top: 7px;
      cursor: pointer;
  }
  .header-text {
      margin-top: 15%;
      text-align: center;
      color: white;
  }
  h1 {
      font-size: 6.5rem;
  }
  p {
      font-size: 1.4rem
  }
  span {
      color: #44075e;
  }
  .header-btn{
      display: none;
      background-color: #50057b;
      padding: 10px 50px;
      color: white;
      border-radius: 20px;
      /* margin-right: 100px; */
      margin-top: 28px;
      border: 2px solid slateblue;
  
  }
  .modal-overlay {
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
    background-color: #fff;
    color: #333;
    width: 300px;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    position: relative;
  }
  
  .modal-content h2 {
    margin-top: 0;
    font-size: 24px;
  }
  
  .tabs {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
  }
  
  .tabs button {
    background-color: #f0f0f0;
    border: none;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .tabs button.active {
    background-color: #4d046a;
    color: white;
  }
  
  .wallet-content {
    margin-top: 20px;
  }
  
  .wallet-content img {
    width: 100px;
    height: 100px;
  }
  .qr-code img {
      width: 150px;
  }
  .close-button {
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #4d046a;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
   .qr-code img {
      width: 200px;
  }
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000; /* Ensure it overlays other content */
  }
  
  /* Modal Content */
  .modal-content {
    background-color: #ffffff; /* White background */
    border-radius: 15px; /* Rounded corners */
    padding: 30px;
    width: 350px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    text-align: center;
    color: #000; /* Black text */
  }
  
  /* Modal Header */
  .modal-content h2 {
    margin-bottom: 10px;
    font-size: 24px;
    color: #333; /* Darker text color for header */
  }
  
  /* Modal Description */
  .modal-content p {
    margin-bottom: 20px;
    font-size: 14px;
    color: #555; /* Lighter text color for description */
  }
  
  /* Wallet List */
  .wallet-list {
    list-style: none;
    padding: 0;
    margin: 0 0 20px 0;
  }
  
  /* Wallet Items */
  .wallet-item {
    display: flex;
    align-items: center;
    padding: 12px;
    margin: 8px 0;
    background-color: #f5f5f5; /* Light gray background */
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.2s;
    font-size: 16px;
  }
  
  .wallet-item:hover {
    background-color: #e0e0e0; /* Slightly darker on hover */
  }
  
  /* Wallet Icon */
  .wallet-item::before {
    content: '';
    display: inline-block;
    width: 20px;
    height: 20px;
    background-color: #ccc; /* Placeholder for icon background */
    border-radius: 50%;
    margin-right: 10px;
  }
  
  /* Button to Close Modal */
  .close-button {
    margin-top: 10px;
    padding: 8px 16px;
    background-color: #f44336; /* Red background */
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px;
  }
  
  .close-button:hover {
    background-color: #d32f2f; /* Darker red on hover */
  }
  .page-link {
    margin-top: 20px;
    color: #ccc;
    font-size: 12px;
  }
  
  @media only screen and (max-width: 1024px) {
      .header-text {
          margin-top: 27%;
      }
      h1 {
          font-size: 5rem;
      }
      p {
          font-size: 1.1rem
      }
  }
  @media only screen and (max-width: 800px) {
      .header-text {
          margin-top: 34%;
      }
  }
  @media only screen and (max-width: 500px) {
      .header-text {
          margin-top: 40%;
      }
      /* .header-btn{
          display: block;
          margin-left: 200px;
          margin-top: 63px;
        
      } */
  }
  
  @media only screen and (max-width: 440px) {
      .navbar{
          display: flex;
          justify-content: space-between;
          background-color: rgba(0, 0, 0, 0);
      }
      .logo img{
          position: relative;
          margin-left: 100px;
          left: 50%;
          transform: translateX(-50%);
          top: 50px;
      }
      .btn {
          display: none;
      }
      .header-btn{
          display: block;
          position: relative;
          left: 50%;
          transform: translateX(-50%);
          margin-top: 63px;
        
      }
  }
  @media only screen and (max-width: 400px) {
      .header-text {
          margin-top: 50%;
      }
      h1 {
          font-size: 4.5rem;
      }
      p {
          font-size: 0.9rem
      }
      .header-btn{
          display: block;
          position: relative;
          left: 50%;
          /* transform: translateX(-50%); */
          margin-top: 63px;
        
      }
  }
  @media only screen and (max-width: 350px) {
      .header-text {
          margin-top: 55%;
      }
      h1 {
          font-size: 4.0rem;
      }
      p {
          font-size: 0.8rem
      }
      .logo img {
          position: relative;
          margin-left: 100px; /* Keep the margin left */
          left: 50%; /* Move the image 50% to the right */
          transform: translateX(-100%); /* Center it */
          top: 50px
      }
      /* .header-btn{
          display: block;
          margin-right: 90px;
          margin-top: 63px;
      } */
  }
  @media only screen and (max-width: 425px) {
      /* .header-btn{
          display: block;
          margin-left: 140px;
          margin-top: 63px;
      } */
  
  }
  </style>