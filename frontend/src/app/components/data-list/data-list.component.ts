import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.css']
})
export class DataListComponent implements OnInit {
  newsList: any = [];
  editable:boolean[] = [];

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.getNews();
  }

  getNews(){
    this.newsService.listNews().subscribe(data=>{
      this.newsList = data?.data;
      for (let i=0;i < this.newsList.length; i++) {
        this.editable.push(false);
      }
    })
  }



  onClickDelete(index){
    this.newsService.deleteNews(this.newsList[index]._id).subscribe(data=>{
      if (data.status==="success") {
        alert(data.message);
        this.getNews();
      } else {
        alert(data.message);
      }
    });
  }

  //can only edit one line at a time
  edit(i) {
    for (let j=0;j<this.editable.length;j++) {
      this.editable[j] = false;
    }
    this.editable[i] = true;
  }

  editSubmit(i,form) {
    this.editable[i]=false;
    this.newsService.editNews(
      {
        _id: this.newsList[i]._id,
        title:form.value.title,
      description:form.value.description,
      publishedAt:form.value.publishedAt}).subscribe(data=>{
          alert(data.message);
    });
  }
}
