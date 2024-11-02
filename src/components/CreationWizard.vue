<template>
 <div class="container">
    <nav class="about_nav">
            <div class="about_nav_logo">
                <img src="../assets/image.png">
            </div>
            <div class="icon-container">
                <!-- <i @click="toggleNotifications" class="fa-solid fa-bell"></i> -->
                <NotificationMenu />
                
            </div>
            <div class="nav-menu" @click="toggleMenu"><i class="fa-solid fa-bars"></i></div>
            
        </nav>
        <div class="nav-container">
            <div class="nav-list">
                <ul :class="{'navbar-menu': true, 'active': isMenuOpen}">
                    <li>
                        <router-link to="/DashBoard" class="navbar-item" exact-active-class="active">Dashboard <i class="fa-solid fa-arrow-right"></i></router-link>
                    </li>
                    <li>
                        <router-link to="/CreationWizard" class="navbar-item" active-class="active">Creation Wizard <i class="fa-solid fa-arrow-right"></i></router-link>
                    </li>
                    <li>
                        <router-link to="/TemplateCard" class="navbar-item" active-class="active">Template <i class="fa-solid fa-arrow-right"></i></router-link>
                        
                    </li>
                    <li>
                        <router-link to="/TransactionHistory" class="navbar-item" active-class="active">Transaction History <i class="fa-solid fa-arrow-right"></i></router-link>
                    </li>
                </ul>
            </div>
            <div class="search">
                <input type="search" placeholder="Search here" class="searches">
                <i class="fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
        <div class="blink-details">
            <h2>Confirm Blink Details</h2>
            <hr class="divider" />
            <div class="nft-page">
    <!-- Left and Middle Sections (NFT Preview + NFT Details) -->
    <div class="main-content">
      <!-- Left Side (NFT Preview) -->
      <div class="card">
                <div class="header">
                    <img src="../assets/Solana-removebg-preview.png" alt="">
                    <span>Solana</span>
                </div>
                <h3 class="card_title">med.trade</h3>
                <p class="card_text">
                    Lorem ipsum dolor sit amet consectetur. Risus cras elementum id fermentum est.
                </p>

        </div>

      <!-- Middle Side (NFT Details) -->
      <div class="nft-details">
        <!-- Creator and Blink Type (using Flexbox for alignment) -->
        <div class="row">
          <div class="left-side">
            <i class="fas fa-user-circle icon"></i>
            <span class="label">Creator Name</span>
            <div class="values">Michael O.</div>
          </div>
          <div class="right-side">
            <span class="label">Blink Type: </span>
            <span class="value">Custom</span>
          </div>
        </div>

        <!-- NFT Description, Image URL, Wallet, etc. -->
        <div class="row">
          <div class="left-side">
            <span class="label">NFT Description:</span>
          </div>
          <div class="right-side">
            <span class="value">trading with solana</span>
          </div>
        </div>
        <hr class="divider" />

        <div class="row">
          <div class="left-side">
            <span class="label">Image URL:</span>
          </div>
          <div class="right-side">
            <span class="value">image.gtf.urls/86/uhshgh/756</span>
          </div>
        </div>
        <hr class="divider" />

        <div class="row">
          <div class="left-side">
            <span class="label">Recipient Wallet:</span>
          </div>
          <div class="right-side">
            <span class="value">trdhevg45576%43...bfguhbc</span>
          </div>
        </div>
        <hr class="divider" />

        <div class="row">
          <div class="left-side">
            <span class="label">Number of Copies:</span>
          </div>
          <div class="right-side">
            <span class="value">2</span>
          </div>
        </div>
        <hr class="divider" />

        <div class="row">
          <div class="left-side">
            <span class="label">Minting Date:</span>
          </div>
          <div class="right-side">
            <span class="value">Fri, Jul 21st, 2024</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Payment Section -->
    <div class="payment-section">
      <!-- Info Box -->
      <div class="info-box">
        <i class="fas fa-info-circle"></i>
        <p class="processing-fee">To complete blink creation, a processing fee of <b>0.5 SOL</b> is required</p>
      </div>

      <!-- Payment Button -->
      <button @click="openModal" class="payment-btn">Continue to Payment</button>
      <p class="secured-payment">
        <i class="fas fa-lock"></i> Secured Payment
      </p>
    </div>
    <div v-if="showModal" class="modal-overlay">
      <div v-if="!isProcessing && !isSuccess" class="payment-modal">
        <h3>Confirm Payment</h3>
        <hr class="divider" />
        <p>
          Confirming this payment, a processing fee of <strong>0.5 SOL</strong>
          will be deducted from your wallet account
        </p>
        <input type="text" value="gfhsdhbhchb657w7%$#37&657yvt.........uthb74o7t" readonly />
        <div class="modal-actions">
          <button @click="cancelPayment" class="cancel-btn">Cancel</button>
          <button @click="confirmPayment" class="confirm-btn">Confirm and Pay</button>
        </div>
      </div>
    </div>
    <div v-if="isProcessingPayment" class="modal-overlay">
  <div class="payment-modal">
    <img src="../assets/processing-image.png"/>
    <h3>Processing Payment</h3>
    <p>Please wait while we process your payment</p>
  </div>
</div>
<div v-if="paymentSuccess" class="modal-overlay">
  <div class="payment-modal">
    <i class="fa-solid fa-check"></i>
    <h3>Payment Successful</h3>
    <p>Your payment of <strong>0.5 SOL</strong> for blink creation was successful</p>
    <button @click="generateBlinkLink" class="success-btn">Generate Blink Link</button>
  </div>
</div>
<div v-if="blinkLinkModal" class="modal-overlay">
  <div class="blink-link-modal">
    <div class="modal-header">
      <h3>Blink Link</h3>
      <i class="fas fa-times close-btn" @click="closeBlinkLink"></i> <!-- Close button -->
    </div>
    <hr class="divider" />
    <p>Here's your generated blink link</p>
    <input type="text" value="blink.template.builder/trydbj....7696" readonly />
    <button class="copy-btn">
      <i class="fas fa-copy"></i> <!-- Copy Icon -->
    </button>
    <div class="share-options">
      <button @click="openQRCodeModal" class="qr-code-btn"><i class="fa-solid fa-qrcode"></i>QR Code</button>
      <span>or share via:</span>
      <div class="social-media-icons">
        <i class="fa-brands fa-twitter"></i>
      <i class="fa-brands fa-instagram"></i>
      <i class="fa-brands fa-facebook"></i>
      <i class="fa-solid fa-envelope"></i>
      <i class="fa-brands fa-whatsapp"></i>
      </div>
    </div>
  </div>
</div>
<div v-if="qrCodeModal" class="modal-overlay">
  <div class="qr-code-modal">
    <div class="modal-header">
      <h3>Blink QR code</h3>
      <i class="fas fa-times close-btn" @click="closeQRCodeModal"></i> <!-- Close button -->
    </div>
    <hr class="divider" />
    <div class="qr-code-container">
      <!-- Example QR code image -->
      <i class="fa-solid fa-qrcode"></i>
    </div>
    <input type="text" value="blink.template.builder/code/jfbh" readonly />
    <button class="copy-btn">
      <i class="fas fa-copy"></i> <!-- Copy Icon -->
    </button>
  </div>
</div>
  </div>
        </div>
    </div> 
</template>

<script>
import NotificationMenu from './NotificationMenu.vue'; // Notification component
export default {
    name: 'CreationWizard',
    components: {
    NotificationMenu,  // Add your Notification component here
  },

    data() {
  return {
    isMenuOpen: false,  // Menu tracking
    showModal: false,   // Controls confirm payment modal visibility
    isProcessingPayment: false,  // Controls "Processing Payment" modal
    paymentSuccess: false,  // Controls "Payment Successful" modal
    blinkLinkModal: false,  // Controls Blink Link modal visibility
    qrCodeModal: false, // Controls QR Code modal visibility
  };
},
methods: {
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen; // Toggles the menu
  },
  openModal() {
    this.showModal = true; // Opens the confirm payment modal
  },
  cancelPayment() {
    this.showModal = false; // Closes the confirm payment modal
  },
  confirmPayment() {
    this.showModal = false; // Hides the confirm payment modal
    this.isProcessingPayment = true; // Shows the processing payment modal

    // Simulate payment processing (9 seconds)
    setTimeout(() => {
      this.isProcessingPayment = false; // Hide the processing modal
      this.paymentSuccess = true;  // Show payment success modal
    }, 9000);
  },
  generateBlinkLink() {
    this.paymentSuccess = false; // Hide the payment success modal
    this.blinkLinkModal = true; // Show Blink Link modal
  },
  closeBlinkLink() {
    this.blinkLinkModal = false; // Close the Blink Link modal
  },
  openQRCodeModal() {
    this.blinkLinkModal = false; // Hide the Blink Link modal
    this.qrCodeModal = true; // Show QR Code modal
  },
  closeQRCodeModal() {
    this.qrCodeModal = false; // Close the QR Code modal
  }
}
  
  

}
</script>

<style scoped>
.container{
    background: whitesmoke;
    overflow-x: hidden;
}

.about_nav{
    display: flex;
    justify-content: space-between;
    background-color: black;
    color: white;

}
.about_nav_logo img{
    margin-left: 100px;
    width: 100px;
}
.icon-container {
    display: flex;
    gap: 30px;
    font-size: 20px;
    margin-right: 120px;
    cursor: pointer;
}
    .nav-menu {
        display: none;
    }
    .icon-container i {
    margin-top: 15px;
}
.nav-container {
    display: flex;
    justify-content: space-between;
    margin: 25px;
    padding: 5px 22px;
    background: white; 
}

ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
    gap: 30px;
}
ul li a{
    align-items: center;
    text-decoration: none;
    color: #000;
}
li {
    margin: 10px 0 10px 0;
    padding: 14px 0 6px 0;
}
.navbar-item {
    
    padding: 14px 14px 6px 14px;
    background: rgba(130, 127, 127, 0.1);
    
}
    .navbar-item:hover {
        border-bottom: 4px solid  #78309a;
        background: rgba(210, 96, 185, 0.2);
        transition: 0.1s;
    }
    .navbar-item i {
        display: none;
    }
    .active {
        border-bottom: 4px solid  #78309a;
        background: rgba(210, 96, 185, 0.2);
    }
    .searches {
        border: none;
        background: whitesmoke;
        padding: 10px;
    }
    .search {
        display: flex;
        gap: 40px;
        background: whitesmoke;
        margin: 10px 0 10px 0;
    }
    .search i {
        margin-top: 10px;
        padding: 0px 10px;
    }


    .blink-details {
        margin: 25px;
        padding: 20px;
        background-color: white;
    }

    h2 {
        font-size: 1.5rem;
        margin-bottom: 10px;
    }

    .divider {
        border: 1px solid #ddd;
        margin-bottom: 20px;
    }



    /* Container for the entire page */
.nft-page {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: #fafbfb;
  font-family: Arial, sans-serif;
  border: 1px solid #eeeff1;
  padding: 40px;
}

/* Left and Middle Sections Wrapper */
.main-content {
  display: flex;
  border-radius: 8px;
  width: 65%;
  gap: 20px;
}

/* Left side (NFT Preview Section) */
.nft-preview {
  width: 40%;
  padding: 20px;
  background-color: white;
  border-radius: 8px;
  border: 1px solid #eeeff1;
  margin-right: 20px;
}

.nft-image-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.nft-logo {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-bottom: 10px;
}

.nft-name {
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 8px;
}

.nft-desc {
  font-size: 12px;
  color: #666;
  margin-bottom: 10px;
}

.preview-text {
  font-size: 12px;
  color: #888;
  margin-top: 10px;
}

.divider {
  width: 100%;
  border: 0;
  height: 1px;
  background-color: #eeeff1;
  margin: 10px 0;
}

/* Middle Side (NFT Details) */
.nft-details {
  width: 60%;
  background-color: #fff;
    border: 1px solid #eeeff1;
    padding: 20px;
    border-radius: 8px;
}

.row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
}

.label {
  font-weight: bold;
  font-size: 18px;
  color: #333;
}

.fa-user-circle:before {
    font-size: 30px;
    
}
.value {
  font-size: 14px;
  color: #555;
}
.values {
    font-size: 15px;
    color: #555;
    margin-left: 40px;
}

.left-side {
  flex-basis: 40%;
  margin-top: 50px;
}

.right-side {
  flex-basis: 60%;
  text-align: right;
  margin-top: 50px;
}

.icon {
  margin-right: 5px;
}

/* Payment Section */
.payment-section {
  width: 25%;
  height: 30%;
  background-color: white;
  padding: 20px;
  text-align: center;
  border-radius: 8px;
  border: 1px solid #eeeff1;
}

.info-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fafbfb;
  padding: 10px;
  border: 1px solid #eeeff1;
  border-radius: 8px;
  margin-bottom: 20px;
}

.info-box i {
  margin-right: 5px;
  font-size: 20px;
}

.processing-fee {
    margin-top: 10px;
  font-size: 12px;
  color: #666;
}
.processing-fee b {
    color: #000;
}

.payment-btn {
    background: linear-gradient(180deg, #950ECD 0%, rgba(119, 5, 167, 0.5) 118.28%);
    border: 4px solid #CA6BF1;
  color: #fff;
  padding: 12px 30px;
  border-radius: 25px;
  font-size: 16px;
  cursor: pointer;
  margin-bottom: 10px;
}

.secured-payment {
  font-size: 12px;
  color: #666;
}

.secured-payment i {
  margin-right: 5px;
}

.card{
    border: 2px solid;
  border-image-slice: 1;
  border-image-source: linear-gradient(to right, #06b6d4, #a855f7);
  padding: 20px; 
  transition: transform 0.3s ease;
  padding-top: 25%;
  background: #fff;
    width: 25%;
    height: 17%;
  /* min-width: 200px;
  flex: 0 0 auto;
  min-height: 250px; */
}
/* .card:hover {
  transform: translateY(-10px);
} */

 img {
  width: 20px;
}   
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.payment-modal {
  background-color: white;
  width: 450px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.payment-modal h3 {
  margin-bottom: 15px;
  font-size: 20px;
  font-weight: bold;
}

.payment-modal p {
  font-size: 14px;
  margin-bottom: 15px;
  color: #666;
}

.payment-modal input {
  width: 90%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #eeeff1;
  color: #B275B2;
  background: #FCF9FC;
  text-align: center;
  margin-bottom: 20px;
}

.modal-actions {
  display: flex;
  justify-content: space-between;
}

.cancel-btn,
.confirm-btn {
  padding: 10px 20px;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-size: 14px;
}

.cancel-btn {
  background-color: #e5e5e5;
  color: #333;
}

.confirm-btn {
    background: linear-gradient(180deg, #950ECD 0%, rgba(119, 5, 167, 0.5) 118.28%);
    border: 4px solid #CA6BF1;
    color: #fff;
}
.payment-modal img {
    width: 60px;
    background: #F0DCFD;
    border-radius: 50%;
}
.success-btn {
    background: linear-gradient(180deg, #950ECD 0%, rgba(119, 5, 167, 0.5) 118.28%);
    border: 4px solid #CA6BF1;
    color: #fff;
    padding: 10px 25px;
    border-radius: 25px;
    font-size: 15px;
    cursor: pointer;
    margin-top: 20px;
}
.payment-modal i {
    font-size: 30px;
    color: #fff;
    background: #0DC5A3;
    border-radius: 50%;
    padding: 10px;
}
.payment-modal h3 {
    margin-top: 25px;
}
.blink-link-modal {
    background-color: white;
    width: 450px;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
}
.blink-link-modal p {
    margin-top: 50px;
    font-weight: bold;
}
.blink-link-modal input {
    width: 70%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #eeeff1;
  color: #B275B2;
  background: #FCF9FC;
  text-align: center;
  margin-bottom: 20px;
  margin-top: 20px;
}
.qr-code-btn {
    background: linear-gradient(180deg, #950ECD 0%, rgba(119, 5, 167, 0.5) 118.28%);
    border: 4px solid #CA6BF1;
    color: #fff;
    padding: 8px 25px;
    border-radius: 25px;
    font-size: 15px;
    cursor: pointer;
    
}
.share-options {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
}
.share-options span {
    padding: 10px 0;

}
.social-media-icons i {
    padding: 10px 0;
    background: #F7F6F7;
    padding: 10px;
    border-radius: 50%;
}
.copy-btn {
    background: #991ECB;
    border: none;
    margin-left: 7px;
    padding: 7px;
    border-radius: 8px;
}
.copy-btn i {
    color: #fff;
}
.qr-code-modal {
    background-color: white;
    width: 450px;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
}
.qr-code-modal input {
    width: 70%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #eeeff1;
  color: #B275B2;
  background: #FCF9FC;
  text-align: center;
  margin-bottom: 20px;
  margin-top: 20px;
}
.qr-code-container i {
    font-size: 9rem;
    color: #fff;
    background: #981ECC;
    border-radius: 6px;
    padding: 10px 20px;
}
    @media only screen and (max-width: 1025px) {
        .main-content {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
        .nft-page {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
        .nft-details {
            width: 100%;
        }
        .card {
            width: 70%;
            padding-top: 55%;
        }
        .payment-section {
            margin-top: 30px;
            width: 45%;
        }
    }
    @media only screen and (max-width: 950px) {
        ul {
            gap: 15px;
        }
        ul li {
            font-size: 12px;
        }
        .search {
            margin-left: 20px;
            gap: 30px;
        }
    }
    @media only screen and (max-width: 800px) {
       ul {
        gap: 10px;
       }
       ul li {
            font-size: 10px;
        }
    }
    @media only screen and (max-width: 770px) {
    .icon-container {
        margin-right: -20rem;
    }
    .nav-menu {
        display: block;
        font-size: 20px;
        margin-top: 15px;
        margin-right: 100px;
    }
    .navbar-menu.active {
        display: block;
        position: fixed;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #fff;
        padding: 20px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        z-index: 1000;
    }
    .navbar-item i {
        display: inline-block;
        margin-left: 50px;
    }

    ul {
        display: none;
    }
    .nav-container {
    display: flex;
    justify-content: unset;
} 
.nav-container ul li {
    margin: 10px 0 40px 0;
}
.nav-container ul li a {
    font-size: 15px;
}
.fa-user-circle:before {
    font-size: 20px;
}

 }
 @media only screen and (max-width: 680px) {
    .nft-page {
        padding: 40px 20px;
    }
    .nft-details {
        width: 130%;
    }
    .payment-section {
        width: 55%;
    }
 }
 @media only screen and (max-width: 530px) {
    .payment-btn {
  padding: 9px 20px;
  font-size: 13px;
}
.value {
    font-size: 10px;
}
.values {
    margin-left: 30px;
    font-size: 12px;
}
.label {
    font-size: 12px;
}
.payment-modal {
    margin: 0px 10px;
}
.blink-link-modal {
    margin: 0px 10px;
}
.qr-code-modal {
    margin: 0px 10px;
}
 }
 @media only screen and (max-width: 480px) {
    .share-options {
    display: flex;
    flex-direction: column;
}
 }
 @media only screen and (max-width: 470px) {
    .icon-container {
        margin-right: -100px
    }
    .about_nav_logo img {
        margin-left: 20px;
    }
    .nav-menu {
        margin-right: 20px;
    }
    .fa-user-circle:before {
    font-size: 17px;
}
.label {
    font-size: 10px;
}
.card_text {
    font-size: 10px;
}
.card_title {
    font-size: 12px;
}
.card {
    width: 80%;
    padding-top: 85%;
}
.payment-btn {
  padding: 7px 14px;
  font-size: 10px;
  border: 3px solid #CA6BF1;
}


 }
 @media only screen and (max-width: 430px) {
    .values {
        margin-left: 22px;
    }
 }
 @media only screen and (max-width: 395px) {
    .label {
        font-size: 8px;
    }
    .values {
        margin-left: 23px;
        font-size: 10px;
    }
    .processing-fee {
        font-size: 10px;
    }
    .secured-payment {
        font-size: 10px;
    }
    .info-box i {
        font-size: 17px;
    }
 }
 @media only screen and (max-width: 380px) {
    .search {
        margin-left: 10px;
    }
    .values {
        margin-left: 20px;
        font-size: 10px;
    }
    .payment-modal input {
        font-size: 12px;
    }

 @media only screen and (max-width: 330px) {
    .icon-container {
        gap: 8px;
    }
    .search {
        margin-left: 15px;
        gap: 15px;
    }
    .nav-container {
        padding: 0;
    }
    .searches {
        margin-bottom: 7px;
    }
    .overview_container{
        padding: 5px;
        margin-left: 25px;
    }
    .payment-btn {
        padding: 4px 9px;
        font-size: 8px;
    }
    .processing-fee {
        font-size: 7px;
    }
    .right-side {
        margin-top: 30px;
    }
    .left-side {
        margin-top: 30px;
    }
    .value {
        font-size: 8px;
    }
    .values {
        font-size: 8px;
    }
    .fa-user-circle:before {
        font-size: 14px;
    }
    .label {
        font-size: 7px;
    }
    .secured-payment {
        font-size: 8px;
    }
    .info-box i {
        font-size: 15px;
    }
    .payment-modal input {
        font-size: 10px;
    }
    .blink-link-modal input {
        font-size: 10px;
    }
 }
    
  
   
    
   
}


</style>