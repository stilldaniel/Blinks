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
        <div class="overview_container">
            <div class="overview">
                <h2>Overview</h2>
            </div>
            <div class="overview_button">
                <button><i class="fa-solid fa-plus"></i> New Blink</button>
            </div>
        </div>
        <div class="card_container">
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
        </div>
        <div class="analytics-section">
            <h2>Analytics and Engagements</h2>
            <hr class="divider" />
            <div class="engagements-container">
                <div v-for="(item, index) in engagementData" :key="index" class="engagement-card">
                    <div class="icon-title">
                        <img src="../assets/Solana_.png" alt="Icon" class="engagement-icon" />
                        <div class="engagement-details">
                            <span class="engagement-title">{{ item.title }}</span>
                            <span class="engagement-subtitle">Solana</span>
                        </div>
                    </div>
                    <div class="engagement-amounts">
                        <span class="engagement-amount">{{ item.amount }} </span>
                        <span :class="['engagement-change', item.changeType]">{{ item.change }}</span>
                    </div>
                </div>
            </div>
        </div>
    <line-chart></line-chart>
 
  <div>
    <!-- Other components like Analytics and Engagement -->

    <!-- Line chart for number of clicks -->
    
    

  </div>

   

        
      
    </div>
</template>

<script>
import LineChart from './LineChart.vue'; // Adjust the path as necessary
import NotificationMenu from './NotificationMenu.vue'; // Notification component


export default {
  name: "DashBoard",
  components: {
    LineChart,
    NotificationMenu,  // Add your Notification component here
  },
  data() {
    return {
      isMenuOpen: false,    // Existing data for menu
      showNotifications: false,   // Add state for notifications
      engagementData: [
        {
          title: "Swap",
          change: "2 Sol",
          changeType: ""
        },
        {
          title: "Received",
          change: "+ 2 Sol",
          changeType: "positive"
        },
        {
          title: "Sent",
          change: "- 1 Sol",
          changeType: "negative"
        }
      ]
    };
  },
  
  methods: {
    toggleMenu() {         // Existing menu toggle logic
      this.isMenuOpen = !this.isMenuOpen;
    },
    toggleNotifications() {  // New notification toggle logic
      this.showNotifications = !this.showNotifications;
    }
  }
};
</script>
<!-- <script>
export default {
  name: 'DashBoard',
  

  data() {
    return {
      isMenuOpen: false, // To track if the menu is open
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen; // Toggle the menu
    },
  }
  
  
};


</script> -->

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
    .overview_container{
        display: flex;
    justify-content: space-between;
    align-items: center;
    margin:0 25px;
    padding: 5px 22px;
    border-bottom: 1px solid #c1b1bcb6; /* Creates a full-width line */
    /* padding-bottom: 10px; */
    background: white;
    }
    .overview h2 {
        font-size: 33px;
        margin: 0;
        background: white;
}
    .overview_button button{
        background-color: #9B59B6; /* Purple color for the button */
    color: #fff;
    border: none;
    border-radius: 20px;
    padding: 10px 20px;
    cursor: pointer;
        
    }
    .overview_button button i {
    margin-right: 5px;
}
.card_container{
    display: flex;
    justify-content: space-between;
    gap: 10px;
    margin:0 25px;
    padding: 15px 22px 15px 22px;
    background: white;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth
    
}
.card{
    border: 2px solid;
  border-image-slice: 1;
  border-image-source: linear-gradient(to right, #06b6d4, #a855f7);
  padding: 20px; 
  transition: transform 0.3s ease;
  padding-top: 20%;
  background: #fff;
  /* min-width: 200px;
  flex: 0 0 auto;
  min-height: 250px; */
}
.card:hover {
  transform: translateY(-10px);
}

 img {
  width: 20px;
}
.analytics-section {
    margin: 25px;
    /* padding: 5px 22px; */
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

.engagements-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.engagement-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f9f9f9;
  padding: 10px 20px;
  border-radius: 10px;
  width: 30%;
}

.icon-title {
  display: flex;
  align-items: center;
}

.engagement-icon {
  width: 50px;
  height: 40px;
  margin-right: 10px;
}

.engagement-details {
  display: flex;
  flex-direction: column;
}

.engagement-title {
  font-weight: bold;
}

.engagement-subtitle {
  color: #777;
  font-size: 0.8rem;
}

.engagement-amounts {
  text-align: right;
}

.engagement-amount {
  font-weight: bold;
}

.engagement-change {
  display: block;
  margin-top: 5px;
}

.positive {
  color: green;
}

.negative {
  color: red;
}
/* .analytics-section{
    margin: 25px; 
    padding: 5px 22px;
    background: white;  
    
  

}

.analytics-container {
    display: flex;
  justify-content: space-between;
  padding: 12px;
  
}
.analytics-section h2{
    font-size: 33px;
  font-weight: 600;
  margin-bottom: 20px;
  color: #1a1a1a;
  

}
.analytics-card{
    display: flex;
  align-items: center;
  background-color: #f8f8f8;
  padding: 10px;
  margin-right: 60px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  width: 40%;
  transition: box-shadow 0.2s ease-in-out;
}
.analytics-left{
    display: flex;

}
.analytics-info{
    margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: #1a1a1a;
}
.analytics-info p{
    margin: 0;
  font-size: 14px;
  color: #666;
}
.analytics-right{
    padding-left:  340px;
}
.analytics-right p {
  font-size: 20px;
  font-weight: 500;
  color: #1a1a1a;
}
    
 .analytics-left img{
    width: 50px;
    border-radius: 10px;
 } */


    @media only screen and (max-width: 1030px) {
        .engagement-card {
            width: 25%;
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
    @media only screen and (max-width: 900px){
        .card_container {
            overflow-x: scroll;
        }
        .card {
            min-width: 250px;
            min-height: 250px;
        }
        .header {
            margin-top: 10rem;
        }
        /* .card {
            padding-top: 30%;
            width: 80%;
            min-width: 200px;
            flex: 0 0 auto;
            min-height: 250px;
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
        margin-right: 100px;
        margin-top: 15px;
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

 }
 @media only screen and (max-width: 680px) {
    .analytics-section{
        display: none;
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
    .overview_container{
        margin-left: 25px;
    }
    .overview_button button{
        margin-right: -14px;
        padding-left: 10px;
    }
    .card {
        padding-top: 30%;
        width: 70%;
        min-width: 150px;
        flex: 0 0 auto;
        min-height: 250px;
    }
    /* .card_container{
        flex-direction: column;
    } */
  
 }
 @media only screen and (max-width: 380px) {
    .search {
        margin-left: 10px;
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
    .overview_container{
        padding: 5px;
        margin-left: 25px;
    }
    .overview_button button{
        padding: 10px;
        margin-right: 0;
    }
    .card {
        padding-top: 30%;
        width: 80%;
        min-width: 150px;
        flex: 0 0 auto;
        min-height: 250px;
    }
 }



</style>