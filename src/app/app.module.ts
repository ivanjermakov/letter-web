import {BrowserModule} from '@angular/platform-browser'
import {NgModule} from '@angular/core'

import {AppRoutingModule} from './app-routing.module'
import {AppComponent} from './component/routed/app/app.component'
import {AuthComponent} from './component/routed/auth/auth.component'
import {RegisterComponent} from './component/routed/register/register.component'
import {MessagingComponent} from './component/routed/messaging/messaging.component'
import {HttpClientModule} from "@angular/common/http"
import {FormsModule} from "@angular/forms"
import {HomeComponent} from './component/routed/home/home.component'
import {NavComponent} from './component/embedded/nav/nav.component'
import {AboutComponent} from './component/routed/about/about.component'
import {FeaturesComponent} from './component/routed/features/features.component'
import {NameComponent} from './component/embedded/name/name.component'
import {FeatureCardComponent} from './component/embedded/feature-card/feature-card.component'

@NgModule({
	declarations: [
		AppComponent,
		AuthComponent,
		RegisterComponent,
		MessagingComponent,
		HomeComponent,
		NavComponent,
		AboutComponent,
		FeaturesComponent,
		NameComponent,
		FeatureCardComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		FormsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
