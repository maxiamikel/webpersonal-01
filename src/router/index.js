import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "@/views/home/HomeView.vue"
import AboutView from "@/views/home/AboutView.vue"
import ProjectView from "@/views/projects/ProjectView.vue"
import Project1View from "@/views/projects/Project1View.vue"
import Project2View from "@/views/projects/Project2View.vue"
import Project3View from "@/views/projects/Project3View.vue"
import ContactView from "@/views/contact/ContactView.vue"
import Page404 from "@/views/home/Page404.vue"
import ProjectDetail from "@/views/projects/ProjectDetail.vue"
import ApiView from "@/views/apis/ApiView.vue"
import HelpView from "@/views/helps/HelpView.vue"

const routes = [
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
