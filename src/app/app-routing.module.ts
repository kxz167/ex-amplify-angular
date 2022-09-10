import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AmpExampleComponent } from './amp-example/amp-example.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
	{
		path: 'example',
		component: AmpExampleComponent
	},
	{
		path: '',
		component: HomeComponent
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
