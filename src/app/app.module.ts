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
import {PreviewsComponent} from './component/embedded/previews/previews.component'
import {DetailsComponent} from './component/embedded/details/details.component'
import {ConversationComponent} from './component/embedded/conversation/conversation.component'
import {PreviewComponent} from './component/embedded/preview/preview.component'
import {MessagesComponent} from './component/embedded/messages/messages.component'
import {MessageGroupComponent} from './component/embedded/message-group/message-group.component'
import {MessageComponent} from './component/embedded/message/message.component'

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
		FeatureCardComponent,
		PreviewsComponent,
		DetailsComponent,
		ConversationComponent,
		PreviewComponent,
		MessagesComponent,
		MessageGroupComponent,
		MessageComponent
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
