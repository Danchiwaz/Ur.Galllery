import { Routes } from "@angular/router"
import { HeroSection } from "../Components/HeroSection/Hero.Component"
import { LoginComponent } from "../Components/Login/login/login.component"

export const appRoutes:Routes =[
    {
        path:'',
        component: HeroSection,
    },
    {
        path:'login',
        component:LoginComponent
    }
]