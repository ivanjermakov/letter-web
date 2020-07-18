import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthComponent} from "./component/routed/auth/auth.component";
import {RegisterComponent} from "./component/routed/register/register.component";
import {MessagingComponent} from "./component/routed/messaging/messaging.component";
import {AboutComponent} from "./component/routed/about/about.component";


const routes: Routes = [
	{
		path: 'about',
		component: AboutComponent
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
