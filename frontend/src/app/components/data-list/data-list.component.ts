import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.css']
})
export class DataListComponent implements OnInit {
  newsList: any = [];
  editable:boolean = false;
  editItem: any;
  editIndex: number;

  dtOptions: DataTables.Settings = {};

  name:string;
  email:string;

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.name = window.localStorage.getItem("name");
    this.email = window.localStorage.getItem("email");
    this.getNews();
    this.dtOptions = {
      "lengthMenu": [
        [5,15,20,-1],
        [5,15,20,"ALL"]
      ],
      "pageLength": 5,
      "columnDefs": [{
        'orderable':true,
        'targets':[0,1,2]
      }, {
        "searchable":true,
        "targets":[0,1,2]
      }],
    }
  }

  getNews(){
    this.newsService.listNews().subscribe(data=>{
      this.newsList = data?.data;
    })
  }



  onClickDelete(index){
    console.log(index);
    console.log(this.newsList[index]._id);
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
    console.log(i);
    this.editable = true;
    this.editItem = this.newsList[i];
    this.editIndex = i;
  }

  editSubmit(form) {
    this.newsService.editNews(
      {
        _id: this.newsList[this.editIndex]._id,
        title:form.value.title,
      description:form.value.description,
      publishedAt:form.value.publishedAt}).subscribe(data=>{
        this.editable=false;
        alert(data.message);
        this.getNews();
    });
  }

  cancel() {
    this.editable = false;
  }
}
