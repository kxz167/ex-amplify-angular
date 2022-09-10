import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Subscription } from "rxjs";
import { Restaurant, APIService } from "../API.service";

@Component({
	selector: 'app-amp-example',
	templateUrl: './amp-example.component.html'
})
export class AmpExampleComponent implements OnInit, OnDestroy {
	title = 'amplify-angular';

	public createForm: FormGroup;
	public restaurants: Array<Restaurant> = [];

	private subscription: Subscription | null = null;

	constructor(private api: APIService, private fb: FormBuilder) {
		this.createForm = this.fb.group({
			name: ['', Validators.required],
			description: ['', Validators.required],
			city: ['', Validators.required]
		});

	}

	public async ngOnInit(): Promise<void> {
		this.api.ListRestaurants().then((event) => {
			this.restaurants = event.items as Restaurant[];
		});

		this.subscription = <Subscription>(
			this.api.OnCreateRestaurantListener().subscribe((event: any) => {
				const newRestaurant = event.value.data.onCreateRestaurant;
				this.restaurants = [newRestaurant, ...this.restaurants];
			})
		);
	}

	public ngOnDestroy(): void {
		if (this.subscription) {
			this.subscription.unsubscribe();
		}
		this.subscription = null;
	}

	public onCreate(restaurant: Restaurant) {
		this.api
			.CreateRestaurant(restaurant)
			.then((event) => {
				console.log('item created!');
				this.createForm.reset();
			})
			.catch((e) => {
				console.log('error creating restaurant...', e);
			});
	}
}