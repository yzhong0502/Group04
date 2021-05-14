import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.css']
})
export class DataListComponent implements OnInit {
  newsList: any = [];
  filteredList: any = [];
  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.getNews();
  }

  getNews(){
    this.newsService.listNews().subscribe(data=>{
      this.newsList = data?.data;
      this.filteredList = data?.data;
    })
  }

  searchNews(event){
    this.filteredList = this.newsList.filter(o =>
      Object.keys(o).some(k => o[k].toLowerCase().includes(event.target.value.toLowerCase())));
  }

  onChange(recordCount) {
    this.filteredList = this.filteredList.slice(0, recordCount);
  }

  onClickDelete(index){
    const deleteItem = this.filteredList[index];
    this.newsService.deleteNews(deleteItem._id).subscribe(data=>{
      this.filteredList = this.filteredList.splice(index,1)
    })
  }

}
