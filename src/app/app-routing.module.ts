import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthComponent} from "./component/routed/auth/auth.component";
import {RegisterComponent} from "./component/routed/register/register.component";
import {MessagingComponent} from "./component/routed/messaging/messaging.component";
import {HomeComponent} from "./component/routed/home/home.component";


const routes: Routes = [
	{
		path: 'home',
		component: HomeComponent
	},
	{
		path: 'auth',
		component: AuthComponent
	},
	{
		path: 'register',
		component: RegisterComponent
	},
	{
		path: 'im',
		component: MessagingComponent
	},
	{
		path: '*',
		redirectTo: 'im'
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
