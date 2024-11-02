import { createRouter, createWebHistory } from 'vue-router';
import MainCard from '../components/MainCard.vue'; // Update the path as per your folder structure
import DashBoard from '../components/DashBoard.vue'; // Update the path as per your folder structure
import TemplateCard from '../components/TemplateCard.vue';
import CreationWizard from '../components/CreationWizard.vue';
import TransactionHistory from '../components/TransactionHistory.vue';



const routes = [
  { path: '/', name: 'MainCard', component: MainCard },
  { path: '/DashBoard', name: 'DashBoard', component: DashBoard },
  { path: '/TemplateCard', name: 'TemplateCard', component: TemplateCard },
  { path: '/CreationWizard', name: 'CreationWizard', component: CreationWizard  },
  { path: '/TransactionHistory', name: 'TransactionHistory', component: TransactionHistory },
  // { path: '/NotificationMenu', name: 'NotificationMenu', component: NotificationMenu },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;