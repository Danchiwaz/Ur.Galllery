import { Routes } from "@angular/router"
import { HeroSection } from "../Components/HeroSection/Hero.Component"
import { LoginComponent } from "../Components/Login/login/login.component"
import { AlbumComponent } from "../Components/Profile/albums/album.component"
import { ProfileComponent } from "../Components/Profile/profile.component"
import { UsersComponent } from "../Components/Profile/Users/users.component"

export const appRoutes:Routes =[
    {
        path:'',
        component: HeroSection,
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'profile',
        component:ProfileComponent,
        children:[
            {
                path:'users',
                component:UsersComponent
            },
            {
                path:'albums',
                component: AlbumComponent
            },
        
        ]
    }
]