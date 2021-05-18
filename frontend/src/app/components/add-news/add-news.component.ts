import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NewsService } from 'src/app/services/news.service';

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
    category: ['', Validators.required]
  });
  constructor(private fb: FormBuilder, private newsService: NewsService) { }

  ngOnInit(): void {
  }

  addNews() {
    const news = {
      'title': this.newsform.get('title').value,
      'description': this.newsform.get('description').value,
      'url': this.newsform.get('url').value,
      'imageUrl': this.newsform.get('urlToImage').value,
      'publishedAt': this.newsform.get('publishedAt').value,
      'category': this.newsform.get('category').value
    }
    this.newsService.addNews(news).subscribe(data => {
      console.log(data)
    })
  }

  onClickReset(){
    this.newsform.reset();
  }

}
