import { Component, OnInit } from "@angular/core";
import { ITabsConfig } from '@aberrant/ui/widgets';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: [
		'./home.component.scss'
	]
})
export class HomeComponent {
	public testTabs: ITabsConfig = {
		tabs: [
			{
				text: 'Tab 1',
				value: 'val1',
			},
			{
				text: 'Tab 2',
				value: 'val2',
			},
			{
				text: 'Tab 3',
				value: 'val3',
			}
		]
	}
}