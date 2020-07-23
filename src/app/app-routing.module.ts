import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {AuthComponent} from "./component/routed/auth/auth.component"
import {RegisterComponent} from "./component/routed/register/register.component"
import {MessagingComponent} from "./component/routed/messaging/messaging.component"
import {HomeComponent} from "./component/routed/home/home.component"
import {AboutComponent} from "./component/routed/about/about.component"
import {FeaturesComponent} from "./component/routed/features/features.component"


const routes: Routes = [
	{
		path: 'home',
		component: HomeComponent
	},
	{
		path: 'about',
		component: AboutComponent
	},
	{
		path: 'features',
		component: FeaturesComponent
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
	}
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
