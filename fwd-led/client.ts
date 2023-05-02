namespace fwdSensors {

  //% block="LED labels"
  //% blockId=fwd_led_names
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
    MAX_REPORT_BRIGHTNESS = 10
    MAX_SERVICE_BRIGHTNESS = 100
    toBlocksBrightness = ( serviceBrightness: number ): number => { return this.MAX_REPORT_BRIGHTNESS * serviceBrightness / this.MAX_SERVICE_BRIGHTNESS } 
    toServiceBrightness = ( reportBrightness: number ): number => { return this.MAX_SERVICE_BRIGHTNESS * reportBrightness / this.MAX_REPORT_BRIGHTNESS } 

    constructor(role: string) {
      super(role)
    }

    //% block="$this set brightness to $value"
    //% blockId=fwd_led_set_brightness
    //% group="LED Lights"
    //% value.min=0 value.max=10 value.defl=10
    fwdSetBrightness(value: number): void {
      this.setBrightness(this.toServiceBrightness(value))
    }

    //% block="$this number of pixels"
    //% blockId=fwd_led_num_pixels
    //% group="LED Lights"
    fwdNumPixels(): number {
      return this.numPixels();
    }

    //% block="$this brightness"
    //% blockId=fwd_led_get_brightness
    //% group="LED Lights"
    fwdBrightness(): number {
      return this.toBlocksBrightness(this.brightness())
    }

    //% block="$this set $index to $rgb=colorWheelPicker"
    //% blockId=fwd_led_set_single_pixel_colour
    //% group="LED Lights"
    fwdSetPixelColour(index: pixelNames | number, rgb: number): void { this.setPixelColor(index, rgb) }

    //% block="$this set all LEDs to $rgb=colorWheelPicker"
    //% blockId=fwd_led_set_all_pixels_colour
    //% group="LED Lights"
    fwdSetAllPixelsColour(rgb: number): void { this.setAll(rgb) }

    //% block="$this rotate the pattern by $offset"
    //% blockId=fwd_led_rotate_pattern
    //% group="LED Lights"
    fwdRotate(offset = 1): void { this.rotate(offset) }

    //% block=shift the pattern by $offset"
    //% blockId=fwd_led_shift_pattern
    //% group="LED Lights"
    fwdShift(offset = 1): void { this.shift(offset) }

  }

  //% fixedInstance whenUsed
  export const ledRing = new FwdLEDClient("LED ring")
}
