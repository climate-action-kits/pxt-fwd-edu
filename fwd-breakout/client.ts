namespace fwdMotors {

  /**
   */
  //% fixedInstances
  export class FwdRelayClient extends modules.RelayClient {

    constructor(role: string) {
      super(role)
    }
    
    //% group="Pump"
    //% block="%dial clicks per full turn"
    //% blockId=fwd_dial_get_clicks_per_turn
    clicksPerTurn(): number { return this.clicksPerTurn() }
    
    //% group="Pump"
    //% block="%dial absolute position"
    //% blockId=fwd_dial_get_position
    position(): number { return this.position() }

  }

  /**
   **/
  //% fixedInstances
  export class FwdServoClient extends modules.ServoClient {

    constructor(role: string) {
      super(role)
    }
    
    //% group="Servo (Positional)"
    //% block="%dial clicks per full turn"
    //% blockId=fwd_dial_get_clicks_per_turn
    clicksPerTurn(): number { return this.clicksPerTurn() }
    
    //% group="Servo (Positional)"
    //% block="%dial absolute position"
    //% blockId=fwd_dial_get_position
    position(): number { return this.position() }

  }

}
