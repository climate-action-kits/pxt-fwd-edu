namespace fwdSensors {
  const MAX_REPORT_BRIGHTNESS = 10
  const MAX_SERVICE_BRIGHTNESS = 100
  const toBlocksBrightness = ( serviceBrightness: number ): number => { return MAX_REPORT_BRIGHTNESS * serviceBrightness / MAX_SERVICE_BRIGHTNESS } 
  const toServiceBrightness = ( reportBrightness: number ): number => { return MAX_SERVICE_BRIGHTNESS * reportBrightness / MAX_REPORT_BRIGHTNESS } 

  //% block="LEDs"
  //% group="LED Lights"
  export const enum pixelNames {
		//% block="PXL1"
    PXL1 = 0,
		//% block="PXL2"
    PXL2 = 1,
		//% block="PXL3"
    PXL3 = 2,
		//% block="PXL4"
    PXL4 = 3,
		//% block="PXL5"
    PXL5 = 4,
		//% block="PXL6"
    PXL6 = 5,
		//% block="PXL7"
    PXL7 = 6,
		//% block="PXL8"
    PXL8 = 7,
  }

  //% fixedInstances
  export class FwdLEDClient extends modules.LedClient {

    constructor(role: string) {
      super(role)
    }

    //% block="set brightness to %value"
    //% group="LED Lights"
    //% value.min=0 value.max=10 value.defl=10
    fwdSetBrightness(value: number): void {
      this.setBrightness(toServiceBrightness(value))
    }

    //% block="number of pixels"
    //% group="LED Lights"
    fwdNumPixels(): number {
      return this.numPixels();
    }

    //% block="brightness"
    //% group="LED Lights"
    fwdBrightness(): number {
      return toBlocksBrightness(this.brightness())
    }

    //% block="set %index to %rgb=colorPicker
    //% group="LED Lights"
    fwdSetPixelColour(index: pixelNames | number, rgb: number): void { this.setPixelColor(index, rgb) }

    //% block="set all LEDs to %rgb=colorPicker
    //% group="LED Lights"
    fwdSetAllPixelsColour(rgb: number): void { this.setAll(rgb) }

    //% block
    //% group="LED Lights"
    fwdRotate(offset = 1): void { this.rotate(offset) }

    //% block
    //% group="LED Lights"
    fwdShift(offset = 1): void { this.shift(offset) }

  }

  //% fixedInstance whenUsed
  export const ledRing = new FwdLEDClient("LED ring")
}
