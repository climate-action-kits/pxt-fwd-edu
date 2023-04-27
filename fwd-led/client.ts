//% block="Light Ring" color=#cc00cc
namespace fwdEduLED {
  const MAX_REPORT_BRIGHTNESS = 10
  const MAX_SERVICE_BRIGHTNESS = 100
  const toBlocksBrightness = ( serviceBrightness: number ): number => { return MAX_REPORT_BRIGHTNESS * serviceBrightness / MAX_SERVICE_BRIGHTNESS } 
  const toServiceBrightness = ( reportBrightness: number ): number => { return MAX_SERVICE_BRIGHTNESS * reportBrightness / MAX_REPORT_BRIGHTNESS } 

  //% fixedInstances
  export class FwdEduLEDClient extends modules.LedClient {
    

    constructor(role: string) {
      super(role)
    }

    //% block="set brightness to $value"
    //% $value.min=0
    //% $value.max=10
    //% $value.defl=10
    fwdSetBrightness(value: number): void {
      this.setBrightness(toServiceBrightness(value))
    }

    //% block="brightness"
    fwdBrightness(): number {
      return toBlocksBrightness(this.brightness())
    }

    //% block="
    fwdRotate(offset = 1): void { this.rotate(offset) }

    //% block
    fwdShift(offset = 1): void { this.shift(offset) }

  }

  //% fixedInstance whenUsed
  export const ledRing = new FwdEduLEDClient("LED ring")
}
