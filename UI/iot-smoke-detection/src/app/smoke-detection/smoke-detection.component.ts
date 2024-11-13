import { Component, OnInit } from '@angular/core';
import { SmokeDetectionService } from './../smoke-detection.service';

@Component({
  selector: 'app-smoke-detection',
  templateUrl: './smoke-detection.component.html',
  styleUrls: ['./smoke-detection.component.css']
})
export class SmokeDetectionComponent implements OnInit {
  analogValue: number = 0;
  digitalValue: number = 0;
  smokeDetected: boolean = false;

  constructor(private smokeDetectionService: SmokeDetectionService) { }

  ngOnInit(): void {
    // Subscribe to WebSocket messages
    this.smokeDetectionService.connectToWebSocket().subscribe((data: { analogValue: number; digitalValue: number; }) => {
      this.analogValue = data.analogValue;
      this.digitalValue = data.digitalValue;

      // Check if smoke is detected (digital value = 1)
      this.smokeDetected = this.digitalValue === 1;
    });
  }
}
