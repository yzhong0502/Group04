import { Component, OnInit } from '@angular/core';
import { ChatService } from "../../services/chat.service";

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.css']
})
export class ChatBoxComponent implements OnInit {
  connection: any;
  messages = [];
  message: string;
  nickname: string;

  constructor(private chatService: ChatService) { }

  ngOnInit() {
    this.connection = this.chatService.getMessages().subscribe(message => {
      console.log("received - "+message);
      this.messages.push(message);
    });
  }

  sendMessage() {
    console.log("send message");
    let nickname = "Anonymous";
    if (this.nickname) {
      nickname = this.nickname;
    }
    this.chatService.sendMessage(nickname + ": "+this.message);
    this.message = "";
  }

  ngOnDestroy() {
    this.connection.unsubscribe();
  }

}
