import{ Routes, RouterModule} from '@angular/router';
import { PeliculaListComponent } from './pelicula-list/pelicula-list.component';
import { PeliculaAboutComponent } from './pelicula-about/pelicula-about.component';
import { NgModule } from '@angular/core';
import { PeliculaPeliculasComponent } from './pelicula-peliculas/pelicula-peliculas.component';
import { CarritoComponent } from './carrito/carrito.component';

const routes: Routes = [
    {
        path : '',
        redirectTo: 'peliculas',
        pathMatch: 'full'
    },
    { 
        path : 'peliculas',
        component: PeliculaPeliculasComponent 
    },
    { 
        path : 'about', 
        component: PeliculaAboutComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})


export class AppRoutingModule{ }