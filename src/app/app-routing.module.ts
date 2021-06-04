import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
    {
      path: "",
      component: HomeComponent
    },

    {
      path: "feedback",
      component: FeedbackComponent
    },
    {
      path: "product",
      component: ProductComponent
    }, {
      path:"add-product",
      component: AddProductComponent
    },
    {
      path:"register",
      component: RegisterComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
