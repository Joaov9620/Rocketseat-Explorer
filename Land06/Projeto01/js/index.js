import {Router} from './router.js'

const router = new Router()

router.add("/" , "/pages/home.html")
router.add("/universe" , "/pages/universe.html")
router.add("/exploration" , "/pages/exploration.html")
router.add(404, "/pages/404.html")

router.handle()

//ap disparar o popstate despertar a função rundle
window.onpopstate = () => router.handle()
//coloco no window a função route que vai despertar ela mesma
window.route = () => router.route() 

