namespace fwdSensors {

  //% group="LED Lights"
  //% blockId=fwd_led_names
  export const enum PixelNames {
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
    toBlocksBrightness ( serviceBrightness: number ): number {
      return this.MAX_REPORT_BRIGHTNESS * serviceBrightness / this.MAX_SERVICE_BRIGHTNESS
    } 
    toServiceBrightness ( reportBrightness: number ): number {
      return this.MAX_SERVICE_BRIGHTNESS * reportBrightness / this.MAX_REPORT_BRIGHTNESS
    } 

    constructor(role: string) {
      super(role)
    }

    /**
     * Set the brightness of the LED ring
     * @param brightness Level between 0 (off) and 10 (full power)
     */
    //% block="set $this brightness to $value"
    //% blockId=fwd_led_set_brightness
    //% group="LED Lights"
    //% value.min=0 value.max=10 value.defl=10
    fwdSetBrightness(value: number): void {
      this.setBrightness(this.toServiceBrightness(value))
    }

    /**
     * Returns how many lights make up an LED ring
     */
    //% block="$this number of pixels"
    //% blockId=fwd_led_num_pixels
    //% group="LED Lights"
    fwdNumPixels(): number {
      return this.numPixels();
    }

    /**
     * Returns the brightness level of the ring, 0-10
     */
    //% block="$this brightness"
    //% blockId=fwd_led_get_brightness
    //% group="LED Lights"
    fwdBrightness(): number {
      return this.toBlocksBrightness(this.brightness())
    }

    /**
     * Set a specific LED to a color
     * @param index the LED number
     * @param rgb color value using either the blocks color picker or hex
     */
    //% block="set $this $index to $rgb=colorNumberPicker"
    //% blockId=fwd_led_set_single_pixel_colour
    //% group="LED Lights"
    fwdSetPixelColour(index: PixelNames | number, rgb: number): void { this.setPixelColor(index, rgb) }

    /**
     * Set all LEDs to a color
     * @param rgb color value using either the blocks color picker or hex 
     */
    //% block="set all $this LEDs to $rgb=colorNumberPicker"
    //% blockId=fwd_led_set_all_pixels_colour
    //% group="LED Lights"
    fwdSetAllPixelsColour(rgb: number): void { this.setAll(rgb) }

    /**
     * Rotate the light pattern left or right, wrapping the last pixel back to the first
     * @param offset The number of positions to rotate. Positive are clockwise, negative are counter-clockwise
     */
    //% block="rotate $this pattern by $offset"
    //% blockId=fwd_led_rotate_pattern
    //% group="LED Lights"
    //% offset.defl=1
    fwdRotate(offset:number): void { this.rotate(offset) }

    /**
     * Shift the light pattern left or right. If the light pattern is shifted past the first or last light, that part of the pattern is removed.
     * @param offset The number of positions to shift. Positive are clockwise, negative are counter-clockwise
     */
    //% block="shift $this pattern by $offset"
    //% blockId=fwd_led_shift_pattern
    //% group="LED Lights"
    //% offset.defl=1
    fwdShift(offset:number): void { this.shift(offset) }

  }

  //% fixedInstance whenUsed
  export const ledRing = new FwdLEDClient("LED ring")
}
