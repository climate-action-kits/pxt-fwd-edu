namespace fwdSensors {
  const MAX_REPORT_BRIGHTNESS = 10
  const MAX_SERVICE_BRIGHTNESS = 100
  const toBlocksBrightness = ( serviceBrightness: number ): number => { return MAX_REPORT_BRIGHTNESS * serviceBrightness / MAX_SERVICE_BRIGHTNESS } 
  const toServiceBrightness = ( reportBrightness: number ): number => { return MAX_SERVICE_BRIGHTNESS * reportBrightness / MAX_REPORT_BRIGHTNESS } 

  //% block="LEDs"
  //% blockId=fwd_led_pixel_names
  //% group="LED Lights"
  export const enum pixelNames {
		//% block="%led PXL1"
    PXL1 = 0,
		//% block="%led PXL2"
    PXL2 = 1,
		//% block="%led PXL3"
    PXL3 = 2,
		//% block="%led PXL4"
    PXL4 = 3,
		//% block="%led PXL5"
    PXL5 = 4,
		//% block="%led PXL6"
    PXL6 = 5,
		//% block="%led PXL7"
    PXL7 = 6,
		//% block="%led PXL8"
    PXL8 = 7,
  }

  //% fixedInstances
  export class FwdLEDClient extends modules.LedClient {

    constructor(role: string) {
      super(role)
    }

    //% block="%led set brightness to %value"
    //% blockId=fwd_led_set_brightness
    //% group="LED Lights"
    //% value.min=0 value.max=10 value.defl=10
    fwdSetBrightness(value: number): void {
      this.setBrightness(toServiceBrightness(value))
    }

    //% block="%led number of pixels"
    //% blockId=fwd_led_num_pixels
    //% group="LED Lights"
    fwdNumPixels(): number {
      return this.numPixels();
    }

    //% block="%led brightness"
    //% blockId=fwd_led_get_brightness
    //% group="LED Lights"
    fwdBrightness(): number {
      return toBlocksBrightness(this.brightness())
    }

    //% block="%led set %index to %rgb=colorPicker"
    //% blockId=fwd_led_set_single_pixel_colour
    //% group="LED Lights"
    fwdSetPixelColour(index: pixelNames | number, rgb: number): void { this.setPixelColor(index, rgb) }

    //% block="%led set all LEDs to %rgb=colorPicker"
    //% blockId=fwd_led_set_all_pixels_colour
    //% group="LED Lights"
    fwdSetAllPixelsColour(rgb: number): void { this.setAll(rgb) }

    //% block="%led rotate the pattern by %offset"
    //% blockId=fwd_led_rotate_pattern
    //% group="LED Lights"
    fwdRotate(offset = 1): void { this.rotate(offset) }

    //% block=shift the pattern by %offset"
    //% blockId=fwd_led_shift_pattern
    //% group="LED Lights"
    fwdShift(offset = 1): void { this.shift(offset) }

  }

  //% fixedInstance whenUsed
  export const ledRing = new FwdLEDClient("LED ring")
}
