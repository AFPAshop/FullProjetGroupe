import {
  createRouter,
  createWebHistory
} from 'vue-router'
import Home from '../views/Home.vue'
import ProductDetails from '../views/ProductDetails.vue'
import Admin from '../views/admin/DashBoard.vue'
import Association from '../views/admin/Association.vue'
import Commande from '../views/admin/Commande.vue'
import CompteBoutique from '../views/admin/CompteBoutique.vue'
import CompteClient from '../views/admin/CompteClient.vue'
import Produits from '../views/admin/Produits.vue'
import Stock from '../views/admin/Stock.vue'
import Tva from '../views/admin/Tva.vue'
import Categories from '../views/admin/Category.vue'
import CartDetails from '../views/CartDetails.vue'
import SignUp from '../views/SignUp.vue'
import ProduitCreate from '../views/admin/creationProduit.vue'
import test from '../views/test.vue'
import UserInfos from '../views/UserInfos.vue'
import Roles from '../views/admin/Roles.vue'

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/:id',
    name: 'HomeId',
    component: Home
  },
  {
    path: '/product/:id',
    name: 'ProductDetails',
    component: ProductDetails
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin
  },
  {
    path: '/admin/association',
    name: 'Association',
    component: Association
  },
  {
    path: '/admin/commande',
    name: 'AdminCommande',
    component: Commande
  },
  {
    path: '/admin/compteboutique',
    name: 'CompteBoutique',
    component: CompteBoutique
  },
  {
    path: '/admin/compteclient',
    name: 'CompteClient',
    component: CompteClient
  },
  {
    path: '/admin/produits',
    name: 'Produits',
    component: Produits
  },
  {
    path: '/admin/stock',
    name: 'Stock',
    component: Stock
  },
  {
    path: '/admin/tva',
    name: 'Tva',
    component: Tva
  },
  {
    path: '/cartDetails',
    name: 'CartDetails',
    component: CartDetails
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/admin/creationProduit',
    name: 'ProduitCreate',
    component: ProduitCreate
  },
  {
    path: '/admin/categories',
    name: 'Categories',
    component: Categories
  },
  {
    path: '/test',
    name: 'test',
    component: test
  },
  {
    path: '/user/infos/:id',
    name: 'UserInfos',
    component: UserInfos
  },
  {
    path: '/admin/roles',
    name: 'Roles',
    component: Roles
  },
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router