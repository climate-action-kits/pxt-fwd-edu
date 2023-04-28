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
    //% block="%reflectedlight state"
    fwdLineSensorState(): lineSensorState { return Math.round(this.brightness()/100) }

    /**
    */
    //% group="Line"
    //% block="%reflectedlight state is %state"
    fwdIsLineSensorState(state: lineSensorState): boolean { return state === this.fwdLineSensorState() }

    /**
     */
    //% group="Line"
    //% block="on %reflectedlight state changes"
    fwdOnLineSensorStateChange( handler: () => void ): void { this.onReadingChangedBy( 50, handler ) }

  }

}
