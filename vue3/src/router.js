import {createRouter, createWebHistory} from "vue-router"
import Home from "./pages/Home"
import DcHeros from "./pages/DcHeros"
import Calendar from "./pages/Calendar"
import Markdown from "./pages/Markdown"
import Slider from "./pages/Slider"
import Calculator from "./pages/Calculator"
import ReuseableModal from "./pages/ReuseableModal"

const routes = [
    {path: "/", component: Home},
    {path: "/dc-heros", component: DcHeros},
    {path: "/calendar", component: Calendar},
    {path: "/markdown", component: Markdown},
    {path: "/slider", component: Slider},
    {path: "/calculator", component: Calculator},
    {path: "/reuseablemodal", component: ReuseableModal},
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;