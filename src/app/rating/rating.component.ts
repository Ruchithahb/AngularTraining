// rating.component.ts

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {
  ratingForm: FormGroup;

  selectedRating: number | null = null;
  starsArray: number[] = [1, 2, 3, 4, 5];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.ratingForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      rating: [null, Validators.required]
    });
  }

  setRating(rating: number): void {
    this.selectedRating = rating;
    this.ratingForm.patchValue({ rating }); // Update the form value
  }

  submitRatingForm(): void {
    console.log(this.ratingForm)
    if (this.ratingForm.valid) {
      // Perform your submit action here, e.g., send the form data and rating to a service or API
      console.log('Submitting Form:', this.ratingForm.value);
      console.log('Rating:', this.selectedRating);

      // Show an alert message
      alert('Rating submitted!\n\nForm Data:\n' + JSON.stringify(this.ratingForm.value, null, 2));
    }
  }
}
