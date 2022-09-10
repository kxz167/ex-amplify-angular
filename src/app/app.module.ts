import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ContainerComponentModule, FlexContainerComponentModule, TabsComponentModule } from '@aberrant/ui'
import { HomeComponent } from './home/home.component';
import { AmpExampleComponent } from './amp-example/amp-example.component';

const components = [
	AppComponent,
	HomeComponent,
	AmpExampleComponent
]

@NgModule({
	declarations: [
		components
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		ReactiveFormsModule,
		// Amplify authenticator module
		AmplifyAuthenticatorModule,
		ContainerComponentModule,
		FlexContainerComponentModule,
		TabsComponentModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
