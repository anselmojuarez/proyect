import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    ProductListComponent,
    TopBarComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      //* en esta parte indicamos,cargamos el componente que se desa
      RouterModule.forRoot([
        {path:'',component:ProductListComponent},
        {path:'products/:productId', component:ProductDetailsComponent},
        
      ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
