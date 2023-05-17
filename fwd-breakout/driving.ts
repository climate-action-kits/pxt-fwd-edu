namespace fwdMotors {
   
  function createDrivingControls () {
    let enabled = false
    let leftMotor: fwdMotors.FwdServoClient
    let rightMotor: fwdMotors.FwdServoClient
    let leftBias = 1
    let rightBias = 1

    function initMotors (left: fwdMotors.FwdServoClient, right: fwdMotors.FwdServoClient, bias = 0) {
      leftMotor = left
      rightMotor = right
      if (bias > 0) {
        leftBias = (100 - bias) / 100
      } else { 
        rightBias = (100 - bias) / 100
      }
      enabled = true
    }

    function drive (direction: -1 | 1, speed: number) : void {
      if (!enabled) return
      leftMotor.fwdSetSpeed( direction * speed * leftBias )
      rightMotor.fwdSetSpeed( -direction * speed * rightBias )  //motors are mounted opposite directions
    }

    function turnInPlace ( angle: number ) : void {
      if (!enabled) return
      // angle is how far to turn. Neg: left, Pos: right.
      const DEG_PER_SEC = 30  // magic number, determined by testing
      const direction = angle > 0 ? 1 : -1
      leftMotor.fwdSetSpeed( 60 * direction * leftBias )
      rightMotor.fwdSetSpeed( 60 * direction * rightBias )
      basic.pause( Math.abs(angle) /  DEG_PER_SEC * 1000 )
      leftMotor.fwdSetSpeed(0)
      rightMotor.fwdSetSpeed(0)
    }

    return {
      initMotors: initMotors,
      drive: drive,
      turnInPlace: turnInPlace
    }

  }

  export const enum drivingDirection {
    //% block="forward"
    forward = -1,
    //% block="reverse"
    reverse = 1
  }

  export const drivingControls = createDrivingControls()

  //% group="Driving"
  //% block="Setup driving| left motor $left | right motor $right || left/right bias $bias"
  //% blockId=fwd_driving_setup
  //% bias.shadow="speedPicker"
  //% inlineInputMode=external
  export function setupDriving (left: FwdServoClient, right: FwdServoClient, bias?: number) {
    drivingControls.initMotors(left, right, bias)
  }

  //% group="Driving"
  //% block="Drive $direction at $speed"
  //% blockId=fwd_driving_drive
  //% speed.shadow="speedPicker"
  export function drive (direction: drivingDirection, speed: number) {
    drivingControls.drive(direction, speed)
  }

  //% group="Driving"
  //% block="Stop motors"
  //% blockId=fwd_driving_drive
  export function stop () {
    drivingControls.drive(1, 0)
  }

  //% group="Driving"
  //% block="Turn $angle in place"
  //% blockId=fwd_driving_turn_in_place
  //% angle.min=-359 angle.max=359
  export function turn (angle: number) {
    drivingControls.turnInPlace(angle)
  }

}
