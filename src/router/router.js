// src/router/index.js

import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue' // 메인 페이지
import LoginPage from '../components/login/LoginPage.vue' // 로그인 페이지 컴포넌트

const routes = [
    { path: '/', component: HomePage },
    { path: '/login', component: LoginPage },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
