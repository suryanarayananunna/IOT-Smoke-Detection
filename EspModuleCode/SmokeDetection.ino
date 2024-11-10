const int MQ2_DIGITAL_PIN = 23;  // Digital pin connected to D0 esp32 board on MQ2 sensor

void setup() {
  Serial.begin(115200);
  pinMode(MQ2_DIGITAL_PIN, INPUT);
}

void loop() {
  int smokeDetected = digitalRead(MQ2_DIGITAL_PIN);
  
  if (smokeDetected == LOW) {  // Low value is smoke detected
    Serial.println("Smoke Detected!");
  } else {
    Serial.println("Air is clear.");
  }

  delay(1000); 
}
