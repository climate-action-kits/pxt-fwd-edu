function demoRunPumpDuration () {
  console.log("Make sure the pump is connected to the board, and the board is on")
  console.log("A heart will display on the microbit, and then random icons will cycle for 5s\n \
               while the pump runs for 2 seconds in the background. This will repeat twice.")
  let startTime = 0
  while (!fwdMotors.pump.isConnected()) {
      basic.pause(100)
  }
  for (let index = 0; index < 3; index++) {
      basic.showIcon(IconNames.Heart)
      startTime = control.millis()
      fwdMotors.pump.fwdTimedRun(2000)
      while (control.millis() - startTime < 5000) {
          basic.showIcon(randint(3,20))
      }
      basic.clearScreen()
      basic.pause(1000)
  }
}

function demoSetAngleAndWait () {
  console.log("Make sure a positional servo is connected to the left board connector, and the board is on")
  console.log("A heart will display on the microbit, and then the servo arm will sweep between its maxima\n \
               for 10 seconds. It should be able to reach its maxima before additional code gets run. This will repeat twice.")
  let startTime = 0
  while (!fwdMotors.servo1.isConnected()) {
      basic.pause(100)
  }
  fwdMotors.servo1.setEnabled(true)
  const minAngle = 0
  const maxAngle = 270
  console.log(`Move between ${minAngle} and ${maxAngle}`)
  for (let index = 0; index < 3; index++) {
      basic.showIcon(IconNames.Heart)
      startTime = control.millis()
      while (control.millis() - startTime < 10000) {
          fwdMotors.servo1.fwdSetAngleAndWait(minAngle)
          fwdMotors.servo1.fwdSetAngleAndWait(maxAngle)
      }
      basic.clearScreen()
      basic.pause(1000)
  }
}

console.log("Test new pump block")
demoRunPumpDuration()
console.log("Test new servo block")
demoSetAngleAndWait()
