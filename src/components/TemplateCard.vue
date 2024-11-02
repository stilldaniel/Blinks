<template>
  <div class="container">
    <nav class="about_nav">
            <div class="about_nav_logo">
                <img src="../assets/image.png">
            </div>
            <div class="icon-container">
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
        <div class="template_container">
        <div class="template">
          <h2>{{ selectedOption === 'minting' ? 'NFT Minting' : 'Token Distribution' }}</h2>
          <hr class="divider">
          <div class="create-template-container">
  
            <!-- Sidebar -->
            <aside class="sidebar">
              <div class="radio-option">
                <label>
                  <input type="radio" value="minting" v-model="selectedOption" />
                  <span class="custom-radio"></span> NFT Minting
                </label>
              </div>
              <div class="radio-option" :class="{'active-option': selectedOption === 'distribution'}">
                <label class="distribution">
                  <input type="radio" value="distribution" v-model="selectedOption" />
                  <span class="custom-radio"></span> Token Distribution
                </label>
              </div>
            </aside>
  
            <!-- Form Section -->
            <section class="form-section">
            <div v-if="selectedOption === 'minting'">
              <div class="form-header">
                <h2>NFT Minting</h2>
                <p>Please complete details for NFT minting</p>
              </div>
              <div class="form-content">
                <form @submit.prevent="submitForm">
                  <label for="nft-name">NFT Name</label>
                  <input id="nft-name" v-model="nftName" placeholder="Enter NFT name here" />

                  <label for="nft-description">NFT Description</label>
                  <input type="text" id="nft-description" v-model="nftDescription" placeholder="Enter NFT description here" />
                </form>
              </div>
            </div>

            <div v-if="selectedOption === 'distribution'">
              <div class="form-header">
                <h2>Token Distribution</h2>
                <p>Please complete details for token distribution</p>
              </div>
              <div class="form-content">
                <form @submit.prevent="submitForm">
                  <label for="token-name">Token Name</label>
                  <input id="token-name" v-model="tokenName" placeholder="Enter token name here" />

                  <label for="token-amount">Token Amount</label>
                  <input id="token-amount" v-model="tokenAmount" placeholder="Enter token amount here" />

                  <label for="wallet-address">Wallet Address</label>
                  <input id="wallet-address" v-model="walletAddress" placeholder="Enter wallet address here" />

                  <label for="distribution-date">Distribution Date</label>
                  <input id="distribution-date" v-model="distributionDate" type="date" />
                </form>
              </div>
            </div>

            <button type="submit" class="continue-btn">Continue</button>
          </section>

  
            <!-- Preview Section -->
            <section class="preview-section">
            <div class="preview-card">
              <h3 v-if="selectedOption === 'minting'">{{ nftName || '<NFT Name>' }}</h3>
              <p v-if="selectedOption === 'minting'">{{ nftDescription || '<NFT Description>' }}</p>

              <h3 v-if="selectedOption === 'distribution'">{{ tokenName || '<Token Name>' }}</h3>
              <p v-if="selectedOption === 'distribution'">{{ tokenAmount ? tokenAmount + ' Tokens' : '<Amount>' }}</p>
              <p v-if="selectedOption === 'distribution'">{{ walletAddress || '<Wallet Address>' }}</p>
              <p v-if="selectedOption === 'distribution'">{{ distributionDate || '<Distribution Date>' }}</p>
            </div>
          </section>
          </div>
        </div>
      </div>


        
      
    </div>
</template>

<script>
import NotificationMenu from './NotificationMenu.vue';
export default {
    name: 'TemplateCard',
    components: {
    NotificationMenu, 
  },
  data() {
    return {
      isMenuOpen: false,
      showNotifications: false,
      nftName: '',
      nftDescription: '',
      isSystem: true,
      selectedOption: 'minting'
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    toggleNotifications() {
      this.showNotifications = !this.showNotifications;
    },
    toggleTemplate(type) {
      this.isSystem = type === 'system';
    },
    submitForm() {
      alert('Form Submitted!');
    }
  }
};


</script>

<style scoped>
.template_system{
    display: flex;

}
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
    /* li.active {
        border-bottom: 4px solid  #78309a;
        background: rgba(210, 96, 185, 0.2);
    } */
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
    .template_container{
         /* display: flex;
    justify-content: space-between;
    align-items: center; */
    margin:0 25px;
    padding: 5px 22px;
    border-bottom: 1px solid #c1b1bcb6; /* Creates a full-width line */
    /* padding-bottom: 10px; */
    background: white;
    }
    .form-text{
        display: flex;
        justify-content: space-between;
    }
    .form-text .text-top {
        display: none;
        font-size: 20px;
        color: #950ECD;

    }


    h2 {
                font-size: 1.5rem;
                margin-bottom: 10px;
        }
    .divider {
        border: 1px solid #ddd;
        margin-bottom: 20px;
    }
    .template_nft{
        display: flex;
    }
    .create-template-container {
  display: flex;
  min-height: 70vh;
  gap: 30px;
  margin-bottom: 20px;
}



/* Sidebar styling */
.sidebar {
 
  background-color: whitesmoke;
  border: 1px solid #dddd;
  padding: 10px;
  
}

.radio-option {
  margin-bottom: 20px;
  position: relative;
}
.radio-option .nft{
    background: rgba(210, 96, 185, 0.2);
    padding: 8px;
    border-left: 2px solid #78309a;
}
.form-space {
    display: flex;
    justify-content: space-between;
}
.radio-option label {
  display: flex;
  align-items: center;
  font-weight: bold;
  color: #666;
  padding-left: 10px; /* Add padding to align with the border */
  border-left: 3px solid transparent; /* Initially transparent */
  transition: border-left 0.3s ease, color 0.3s ease;
}

.radio-option:hover label {
  color: #950ECD; /* Hover effect */
}

.radio-option input[type="radio"] {
  display: none; /* Hide default radio button */
}

.custom-radio {
  width: 16px;
  height: 16px;
  border: 2px solid #950ECD;
  border-radius: 50%;
  display: inline-block;
  margin-right: 10px;
  position: relative;
  
}

.radio-option input[type="radio"]:checked + .custom-radio::before {
  content: '';
  width: 10px;
  height: 10px;
  background: #950ECD;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

/* Empty circle for unselected option */
.radio-option input[type="radio"]:not(:checked) + .custom-radio::before {
  content: '';
  width: 10px;
  height: 10px;
  background-color: white;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

/* Active state styling */
/* .radio-option input[type="radio"]:checked + .custom-radio + label {
  color: #6e44ff;
  border-left: 3px solid #6e44ff;
}

.radio-option label:hover {
  color: #333;
} */

/* Form Section styling */
.form-section {
  flex: 1;
  padding: 20px;
  background-color: whitesmoke;
  border: 1px solid #dddd;
}
.form-button{
    /* margin-top: 10px; */
  padding: 3px;
  border-radius: 20px;
  background-color: #fff;
  display: none;

}
.form-button button{
    padding: 5px 7px;
  border: none;
  border-radius: 30px;
  background-color: #eaeaea;
  color: #666;
  cursor: pointer;

}
.form-button button.active{
    background: #950ECD;
  color: white;
}



.form-header h2 {
  margin: 0;
  font-size: 24px;
  font-weight: bold;
}

.form-header p {
  color: #666;
  margin-top: 20px;
}

.template-toggle {
  margin-top: 10px;
  padding: 6px;
  border-radius: 20px;
  background-color: #fff;
}

.template-toggle button {
  padding: 8px 14px;
  border: none;
  border-radius: 30px;
  background-color: #eaeaea;
  color: #666;
  cursor: pointer;
}

.template-toggle button.active {
    background: #950ECD;
  color: white;
}

.form-content {
  background-color: white;
  padding: 20px;
  border-radius: 12px;
  margin-top: 20px;
  width: 77%;
}

.form-content label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.form-content input,
.form-content textarea {
  width: 80%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #dddd;
  border-radius: 5px;
}

.continue-btn {
  width: 90%;
  padding: 15px;
  background: linear-gradient(180deg, #950ECD 0%, rgba(119, 5, 167, 0.5) 118.28%);
  color: white;
  border-radius: 30px;
  font-size: 18px;
  cursor: pointer;
  border: 4px solid #ca6bf1;
  margin-top: 7rem;
  margin-left: 10px;
}
.continue-btn:hover {
  background-color: #5633cc;
}
/* Preview Section styling */
.preview-section {
  width: 25%;
  padding: 40px;
  background: white;
}
.preview-card {
  border: 2px solid;
  border-image: linear-gradient(45deg, #6e44ff, #00e6ff) 1;
  background: whitesmoke;
  padding: 405px 22px 15px;
  text-align: left;
  border-radius: 8px;
  
    
}

.preview-card h3 {
  font-size: 20px;
  font-weight: bold;
  color: #333;
}

.preview-card p {
  color: #888;
  margin-top: 10px;
}
@media only screen and (max-width: 1024px){
    .template-toggle button{
        font-size: 10px;
        padding:5px;

    }
    .template-toggle{
        padding: 2px;
    }
    .form-space p{
        font-size: 10px;
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
        .create-template-container{
            flex-direction: column;
        }
        .preview-section{
            display: none
        }
        /* .form-space{
            flex-direction: column;
            padding: 2px;
        }
        .template-toggle button{
        font-size: 10px;
    }
    
    .form-space p{
        font-size: 10px;
    } */
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
.form-text .text-top{
    display: block;
    
}
.form-button{
    display: block;
}
.template-toggle {

    
  margin-top: 10px;
  padding: 1px;
  border-radius: 10px;
  background-color: #fff;
}

.template-toggle button {
  padding: 5px;
  border: none;
  border-radius: 15px;
  font-size: 15px;
    
  color: #666;
  cursor: pointer;
}
.form-space p{
        font-size: 15px;
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
    .form-space p{
        font-size: 10px;
      
    }
    .template-toggle button{
        padding: px;
        font-size: 10px;
    }

   
    
   
}
@media only screen and (max-width: 380px) {
    .search {
        margin-left: 10px;
    }
    .form-text .text-top{
        font-size: 16px;
        margin-top: 5px;
        
    }
    .form-button button{
        font-size: 8px;
    }
    .template-toggle button{
        padding: 2px;
        font-size: 8px;
    }
  
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
    .form-space p{
        font-size: 10px;
      
    }
    
    
}
 


</style>