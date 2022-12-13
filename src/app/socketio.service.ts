import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SocketioService {
  socket;

  constructor() {   }

  setupSocketConnection() {
    this.socket = io(environment.SOCKET_ENDPOINT);

    // this.socket.emit('my message', 'Hello there from Angular.');

    this.socket.on('events', (data: string) => {
      console.log(data);
    });
  }

  disconnect() {
    if (this.socket) {
        this.socket.disconnect();
    }
}
}
