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
        <div class="transaction-container">
            <div class="transaction">
                <h2>Transaction History</h2>
                <hr class="divider">
                <div class="transaction-history">
  <table>
    <thead>
      <tr>
        <th>S/N</th>
        <th>Transaction Ref</th>
        <th>Transaction Amount</th>
        <th>Transaction Date</th>
        <th>Transaction Type</th>
        <th>Description</th>
        <th>Template</th>
        <th>Status</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>BLK5285tyGH</td>
        <td>10 Sol</td>
        <td>Wed 17th Jul, 2024</td>
        <td>Swap</td>
        <td>Nil</td>
        <td>NFT</td>
        <td class="status-success">Successful</td>
        <td><i class="fas fa-ellipsis-v action-icon"></i></td>
      </tr>
      <tr>
        <td>2</td>
        <td>BLK5285tyGH</td>
        <td>10 Sol</td>
        <td>Wed 17th Jul, 2024</td>
        <td>Swap</td>
        <td>Nil</td>
        <td>NFT</td>
        <td class="status-pending">Pending</td>
        <td><i class="fas fa-ellipsis-v action-icon"></i></td>
      </tr>
      <tr>
        <td>3</td>
        <td>BLK5285tyGH</td>
        <td>10 Sol</td>
        <td>Wed 17th Jul, 2024</td>
        <td>Swap</td>
        <td>Nil</td>
        <td>NFT</td>
        <td class="status-success">Successful</td>
        <td><i class="fas fa-ellipsis-v action-icon"></i></td>
      </tr>
      <tr>
        <td>4</td>
        <td>BLK5285tyGH</td>
        <td>10 Sol</td>
        <td>Wed 17th Jul, 2024</td>
        <td>Swap</td>
        <td>Nil</td>
        <td>NFT</td>
        <td class="status-success">Successful</td>
        <td><i class="fas fa-ellipsis-v action-icon"></i></td>
      </tr>
      <tr>
        <td>5</td>
        <td>BLK5285tyGH</td>
        <td>10 Sol</td>
        <td>Wed 17th Jul, 2024</td>
        <td>Swap</td>
        <td>Nil</td>
        <td>NFT</td>
        <td class="status-failed">Failed</td>
        <td><i class="fas fa-ellipsis-v action-icon"></i></td>
      </tr>
    </tbody>
  </table>
</div>
            </div>
        </div>
    </div>
</template>

<script>
import NotificationMenu from './NotificationMenu.vue'; // Notification component
export default {
    name: 'TransactionHistory',
    components: {
    NotificationMenu,  // Add your Notification component here
  },
  data() {
    return {
      isMenuOpen: false,  // Menu tracking
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen; // Toggles the menu
    },
  },
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
    .transaction-container {
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
    .transaction-history {
  width: 100%;
  margin-top: 20px;
  font-family: Arial, sans-serif;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 12px 15px;
  text-align: left;
}

thead {
  background-color: #f4f4f8;
}

th {
  font-size: 14px;
  color: #555;
}

tbody tr {
  border-bottom: 1px solid #f1f1f1;
}

td {
  font-size: 14px;
  color: #333;
}

.status-success {
  color: green;
  font-weight: bold;
}

.status-pending {
  color: #f0ad4e;
  font-weight: bold;
}

.status-failed {
  color: red;
  font-weight: bold;
}

.action-icon {
  cursor: pointer;
  color: #999;
}

.action-icon:hover {
  color: #555;
}
@media (max-width: 1024px) {
    .transaction-container {
        max-width: 970px;
    overflow-x: auto;
    }
    .transaction-history {
        overflow-x: auto; /* Enable horizontal scrolling */
    }

    table {
        width: max-content; /* Table will take necessary width */
        min-width: 600px; /* Set a minimum width to avoid too much shrink */
        border-collapse: collapse;
    }
}

@media (max-width: 600px) {
    table {
        min-width: 500px; /* Adjust the min-width for smaller screens */
    }
}

@media (max-width: 480px) {
    table {
        min-width: 400px; /* Further adjust for small devices */
    }
}

th, td {
    padding: 12px 15px;
    text-align: left;
    white-space: nowrap; /* Prevent wrapping in table cells */
}

/* Rest of your existing styles */
thead {
    background-color: #f4f4f8;
}

th {
    font-size: 14px;
    color: #555;
}

tbody tr {
    border-bottom: 1px solid #f1f1f1;
}

td {
    font-size: 14px;
    color: #333;
}

.status-success {
    color: green;
    font-weight: bold;
}

.status-pending {
    color: #f0ad4e;
    font-weight: bold;
}

.status-failed {
    color: red;
    font-weight: bold;
}

.action-icon {
    cursor: pointer;
    color: #999;
}

.action-icon:hover {
    color: #555;
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
    
}

    /* @media only screen and (max-width: 950px) {
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
} */
</style>