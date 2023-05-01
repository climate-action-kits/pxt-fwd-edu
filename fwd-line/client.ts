namespace fwdSensors {

  //% block="line sensor state"
  export const enum lineSensorState {
    //% block="○"
    miss = 0,
    //% block="●"
    hit = 1
  } 

  //% fixedInstances
  export class FwdLineFollowerClient extends modules.ReflectedLightClient {

    constructor(role: string) {
      super(role)
    }

    /**
    */
    //% group="Line"
    //% block="$this state"
    //% blockId=fwd_line_sensor_state
    fwdLineSensorState(): lineSensorState { return Math.round(this.brightness()/100) }

    /**
    */
    //% group="Line"
    //% block="$this state is $state"
    //% blockId=fwd_line_sensor_state_check
    fwdIsLineSensorState(state: lineSensorState): boolean { return state === this.fwdLineSensorState() }

    /**
     */
    //% group="Line"
    //% block="on $this state changes"
    //% blockId=fwd_line_sensor_on_state_change
    fwdOnLineSensorStateChange( handler: () => void ): void { this.onReadingChangedBy( 50, handler ) }

  }

  //% fixedInstance
  export const line1 = new FwdLineFollowerClient("line1");
}
