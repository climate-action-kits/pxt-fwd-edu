//% block="Dial" color=#cccc00
namespace FwdEduDial {
  /**
   * Wrapper for FWD Edu rotary encoder, "Dial"
   **/
  //% fixedInstances
  export class FwdEduDialClient extends modules.RotaryEncoderClient {
    private _cwAction: (delta: number) => void
    private _ccwAction: (delta: number) => void

    constructor(role: string) {
      super(role)

      this._cwAction = (_) => {}
      this._ccwAction = (_) => {}

      this.onReadingChangedBy(1, (delta) => {
        if (delta < 0) {
          this._cwAction(delta)
        } else {
          this._ccwAction(delta)
        }
      })

    }
    
    //% group="Dial"
    //% block="%dial clicks per full turn"
    //% blockId=fwd_dial_get_clicks_per_turn
    clicksPerTurn(): number { return this.clicksPerTurn() }
    
    //% group="Dial"
    //% block="%rotaryencoder absolute position"
    //% blockId=fwd_dial_get_position
    position(): number { return this.position() }
    
  }

  //% fixedInstance whenUsed weight=1 block="dial1"
  export const dial1 = new FwdEduDialClient("dial1")
}
