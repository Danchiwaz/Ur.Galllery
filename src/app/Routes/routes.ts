import { Routes } from "@angular/router"
import { LoginComponent } from "../Components/authentication/login/login.component"
import { HeroSection } from "../Components/HeroSection/Hero.Component"
import { PagenotfoundComponent } from "../Components/pagenotFound/pagenotfound/pagenotfound.component"
import { AlbumComponent } from "../Components/Profile/albums/album.component"
import { PicComponent } from "../Components/Profile/pic/pic.component"
import { ProfileComponent } from "../Components/Profile/profile.component"
import { SingleAlbumComponent } from "../Components/Profile/single-album/single-album.component"
import { SingleUserComponent } from "../Components/Profile/single-user/single-user.component"
import { UsersComponent } from "../Components/Profile/Users/users.component"
import { GotologinGuard } from "../gotologin.guard"
import { GuardsGuard } from "../guards.guard"

export const appRoutes:Routes =[
    {
        path:'',
        component: HeroSection,
    },
    {
        path:'login',
        canActivate:[GotologinGuard],
        component:LoginComponent
    },
    {
        path:'profile',
        canActivate:[GuardsGuard],
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
            {
                path:'user/:userId',
                component: SingleUserComponent
            },
            {
                path:'singlealbum/:albumId',
                component:SingleAlbumComponent
            },
            {
                path:'pic/:photoId',
                component:PicComponent
            },
            // incase page searched not found 
            {
                path:"**",
                component:PagenotfoundComponent
            }
        
        ]
    }
]