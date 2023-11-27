namespace fwdSensors {

  export const enum LineSensorState {
    //% block="○"
    Miss = 0,
    //% block="●"
    Hit = 1
  } 

  //% fixedInstances
  export class FwdLineFollowerClient extends modules.ReflectedLightClient {

    constructor(role: string) {
      super(role)
    }

    /**
     * Returns whether or not the line sensor is detecting a reflection
    */
    //% group="Line"
    //% block="$this state"
    //% blockId=fwd_line_sensor_state
    fwdLineSensorState(): LineSensorState { return Math.round(this.brightness()/100) }

    /**
     * Checks for a specific line sensor state
     * @param state ○ (miss) or ● (hit)
    */
    //% group="Line"
    //% block="$this state is $state"
    //% blockId=fwd_line_sensor_state_check
    fwdIsLineSensorState(state: LineSensorState): boolean { return state === this.fwdLineSensorState() }

    /**
     * Runs code when the sensor changes from one state to another
     */
    //% group="Line"
    //% block="on $this state changes"
    //% blockId=fwd_line_sensor_on_state_change
    fwdOnLineSensorStateChange( handler: () => void ): void { this.onReadingChangedBy( 0.50, handler ) }

  }

  //% fixedInstance
  export const line1 = new FwdLineFollowerClient("line1?srvo=0");
  //% fixedInstance
  export const line2 = new FwdLineFollowerClient("line2?srvo=1");
  //% fixedInstance
  export const line3 = new FwdLineFollowerClient("line3?srvo=2");
}
