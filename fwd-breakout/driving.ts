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

  export const enum DrivingDirection {
    //% block="forward"
    Forward = 1,
    //% block="reverse"
    Reverse = -1
  }

  export const drivingControls = createDrivingControls()

  /*
   * Use this block before using the other driving blocks to set which motors get treated as left and right
   * @param left set which motor will be treated as the left motor
   * @param right set which motor will be treated as the right motor
   * @param bias if the motors don't spin at quite the same rate, use the bias to balance them
   */
  //% group="Driving"
  //% weight=20
  //% block="setup driving|left motor $left|right motor $right||left/right bias $bias"
  //% blockId=fwd_driving_setup
  //% bias.shadow="speedPicker"
  //% bias.defl=0
  //% inlineInputMode=external
  export function setupDriving (left: FwdServoClient, right: FwdServoClient, bias = 0) {
    drivingControls.initMotors(left, right, bias)
  }

  /*
   * Drive either forwards or backwards
   * (requires setup driving to used first)
   * @param direction choose forwards or backwards
   * @param speed choose 0-100% speed
   */
  //% group="Driving"
  //% block="drive $direction at $speed"
  //% blockId=fwd_driving_drive
  //% speed.shadow="speedPicker"
  export function drive (direction: DrivingDirection, speed: number) {
    drivingControls.drive(direction, speed)
  }

  /*
   * Stop driving or turning. Sets speeds to zero.
   */
  //% group="Driving"
  //% block="stop motors"
  //% blockId=fwd_driving_stop
  export function stop () {
    drivingControls.drive(1, 0)
  }

  /*
   * Turns the vehicle left or right in place by turning the wheels in opposite directions
   * @param angle Positive angles turn right, negative angles turn left
   */
  //% group="Driving"
  //% block="turn $angle ° in place"
  //% blockId=fwd_driving_turn_in_place
  //% angle.min=-359 angle.max=359
  export function turn (angle: number) {
    drivingControls.turnInPlace(angle)
  }

}
