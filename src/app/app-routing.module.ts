import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CrisisListComponent }   from './crisis-list.component';
//import { HeroListComponent }     from './hero-list.component';
import { PageNotFoundComponent }   from './page-not-found.component';

const appRoutes: Routes = [
  { path: 'crisis-center', component: CrisisListComponent },
 // { path: 'heroes', component: HeroListComponent },
  { path: '**', component: PageNotFoundComponent },
];


@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports:[
      RouterModule,
  ]
})
export class AppRoutingModule { }
