//% block="Light Ring" color=#cc00cc
namespace fwdEduLED {
  const MAX_BRIGHTNESS = 10

  //% fixedInstances
  export class FwdEduLEDClient extends modules.LedClient {

    constructor(role: string) {
      super(role)
    }

    //% block
    fwdSetBrightness(value: number): void {
      this.setBrightness(value / MAX_BRIGHTNESS)
    }

    //% block="$ledRing brightness"
    fwdBrightness(): number {
      return this.brightness() * MAX_BRIGHTNESS
    }

    //% block
    fwdRotate(offset = 1): void { this.rotate(offset) }

    //% block
    fwdShift(offset = 1): void { this.shift(offset) }

  }

  //% fixedInstance whenUsed
  export const ledRing = new FwdEduLEDClient("LED ring")
}
