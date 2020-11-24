import { Component, OnInit, ChangeDetectorRef, VERSION, ViewChild } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-qr-scan',
  templateUrl: './qr-scan.component.html',
  styleUrls: ['./qr-scan.component.css']
})
export class QrScanComponent implements OnInit {
  constructor(private chatService: ChatService) { }

  ngOnInit() {
    this.chatService.setupConnection();
  }
}
