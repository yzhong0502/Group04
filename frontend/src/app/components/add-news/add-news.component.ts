import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent implements OnInit {
  newsform = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    url: ['', Validators.required],
    urlToImage: ['', Validators.required],
    publishedAt: ['', Validators.required],
    add: [''],
    terms: ['', Validators.required],
  });
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
