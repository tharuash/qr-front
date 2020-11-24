import { Injectable } from '@angular/core';
import {io} from 'socket.io-client';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  socket;
  constructor() { }

  setupConnection() {
    this.socket = io(environment.SOCKET_ENDPOINT);
  }
}
