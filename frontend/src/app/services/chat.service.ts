import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { io } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private url = 'http://localhost:3000'; //socket server port
  private socket: any;

  ngOnInit() {
  }

  sendMessage(message: string) {
    this.socket.emit('chat message', message);
  }

  getMessages(): Observable<any> {
    return new Observable(observer => {
      this.socket = io(this.url);
      this.socket.on('chat message', (data) => {
        console.log("data received:"+data);
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      }
    })
  }
}
