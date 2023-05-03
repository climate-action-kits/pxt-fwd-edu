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
    
    /**
     */
    //% group="Servo"
    //% block="$this angle (°)"
    //% blockId=fwd_servo_get_angle
    fwdGetAngle(): number { return this.actualAngle() }

    /**
     */
    //% group="Servo"
    //% block="set $this to $angle °"
    //% blockId=fwd_servo_set_angle
    //% angle.min=-90 angle.max=90
    fwdSetAngle(angle: number): void { this.setAngle(angle) }

    /**
     */
    //% group="Servo"
    //% block="$this state"
    //% blockId=fwd_servo_is_enabled
    fwdIsEnabled(): boolean { return this.enabled() }

    /**
     */
    //% group="Servo"
    //% block="set $this $state"
    //% blockId=fwd_servo_set_enabled
    //% state.shadow="toggleOnOff"
    fwdSetEnabled(state: boolean): void { return this.setEnabled(state) }

  }

  //% fixedInstance
  export const servo1 = new FwdServoClient("servo 1")
  //% fixedInstance
  export const servo2 = new FwdServoClient("servo 2")
  //% fixedInstance
  export const servo3 = new FwdServoClient("servo 3")
}
