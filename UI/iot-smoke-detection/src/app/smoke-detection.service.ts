import { Injectable } from '@angular/core';
import { RxStomp } from '@stomp/rx-stomp';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SmokeDetectionService {

  private stompClient: RxStomp;
  private serverUrl = 'ws://localhost:8080/gs-guide-websocket'; // WebSocket endpoint

  constructor() {
    this.stompClient = new RxStomp();

    // Configure the RxStomp client without onConnect and onDisconnect in the configuration object
    this.stompClient.configure({
      brokerURL: this.serverUrl,
      connectHeaders: {},
      debug: (str) => {
        console.log(str);
      }
    });
  }

  // Connects to the WebSocket server and listens for messages
  connectToWebSocket(): Observable<any> {
    return new Observable(observer => {
      // Activate the WebSocket connection and handle connect event here
      this.stompClient.activate();

      // Subscribe to the topic
      this.stompClient.watch('/topic/smoke-detection').subscribe((message) => {
        observer.next(JSON.parse(message.body));
      });

      // Listen to connect event
      this.stompClient.connected$.subscribe(() => {
        console.log('Connected to WebSocket');
      });
    });
  }
}
