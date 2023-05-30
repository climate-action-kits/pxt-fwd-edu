namespace fwdMotors {

  /**
   */
  //% fixedInstances
  export class FwdRelayClient extends modules.RelayClient {

    constructor(role: string) {
      super(role)
    }

    /**
     */
    //% group="Pump"
    //% block="$this active"
    //% blockId=fwd_relay_get_status
    fwdIsActive(): boolean { return this.active() }

    /**
     */
    //% group="Pump"
    //% block="set $this $state"
    //% blockId=fwd_relay_set_status
    //% state.shadow="toggleOnOff"
    fwdSetActive(state: boolean): void { this.setActive(state) }
    
    /**
     */
    //% group="Pump"
    //% block="run $this for $duration"
    //% blockId=fwd_relay_timed_run
    //% duration.shadow="timePicker"
    fwdTimedRun(duration: number): void { control.inBackground(() => {
        this.setActive(true)
        basic.pause(duration)
        this.setActive(false)
      })
    }
    
  }

  //% fixedInstance
  export const pump = new FwdRelayClient("pump")

  /**
   */
  //% fixedInstances
  export class FwdServoClient extends modules.ServoClient {

    constructor(role: string) {
      super(role)
    }

    get angleRange(): number {
      return this.maxAngle() - this.minAngle()
    }

    mapToServo(angle: number, min: number, max: number): number {
      let inputRange = max - min
      let scaledInput = (angle - min) / inputRange
      return scaledInput * this.angleRange + this.minAngle();
    }

    /**
     */
    //% group="Servo (270° Positional)"
    //% block="$this angle (°)"
    //% blockId=fwd_servo_get_angle
    fwdGetAngle(): number { return this.angle() }

    /**
     */
    //% group="Servo (270° Positional)"
    //% block="set $this to $angle °"
    //% blockId=fwd_servo_set_angle
    //% angle.shadow="protractorPicker"
    //% angle.min=-90 angle.max=90
    fwdSetAngle(angle: number): void { this.setAngle(angle) }

    /**
     */
    //% group="Servo (270° Positional)"
    //% block="set $this to $target ° and wait"
    //% blockId=fwd_servo_set_angle_and_wait
    //% target.shadow="protractorPicker"
    //% target.min=-90 target.max=90
    fwdSetAngleAndWait(target: number): void {
      let maxPauseDuration = (this.responseSpeed() / 60) * this.angleRange || 360
      let travelDistance = Math.abs(this.fwdGetAngle() > target ?
        this.fwdGetAngle() - target :
        target - this.fwdGetAngle()
      )
      this.setAngle(target)
      basic.pause( maxPauseDuration * travelDistance / this.angleRange )
    }

    /**
     */
    //% group="Servo (270° Positional)"
    //% block="$this state"
    //% blockId=fwd_servo_is_enabled
    fwdIsEnabled(): boolean { return this.enabled() }

    /**
     */
    //% group="Servo (270° Positional)"
    //% block="set $this $state"
    //% blockId=fwd_servo_set_enabled
    //% state.shadow="toggleOnOff"
    fwdSetEnabled(state: boolean): void { return this.setEnabled(state) }

    /**
     */
    //% group="Servo (continuous)"
    //% block="set $this $speed \\%"
    //% blockId=fwd_servo_continuous_set_speed
    //% speed.shadow="speedPicker"
    //% speed.min=-100 speed.max=100
    fwdSetSpeed(speed: number): void { 
      this.setAngle( this.mapToServo(speed, -100, 100) )
    }

  }

  export const enum presetServoPosition {
    //% block="🕛 00:00"
    pos0 = 0,
    //% block="🕐 01:00"
    pos1 = 30,
    //% block="🕑 02:00"
    pos2 = 60,
    //% block="🕒 03:00"
    pos3 = 90,
    //% block="🕓 04:00"
    pos4 = 120,
    //% block="🕔 05:00"
    pos5 = 150,
    //% block="🕕 06:00"
    pos6 = 180,
    //% block="🕖 07:00"
    pos7 = 210,
    //% block="🕗 08:00"
    pos8 = 240,
    //% block="🕘 09:00"
    pos9 = 270,
  }

  /**
   */
  //% group="Servo (270° Positional)"
  //% block="position %position"
  //% blockId=fwd_servo_position_enum
  //% position.defl=0
  export function fwdPositionPresets(position: presetServoPosition): number {
    return position as number
  }

    
  //% fixedInstance
  export const servo1 = new FwdServoClient("servo 1")
  //% fixedInstance
  export const servo2 = new FwdServoClient("servo 2")
  //% fixedInstance
  export const servo3 = new FwdServoClient("servo 3")
}
