namespace fwdSensors {
    /**
     * Senses RGB colors
     **/
    //% fixedInstances blockGap=8
    export class ColorClient extends jacdac.SensorClient {
        private readonly _brightness: jacdac.RegisterClient<[number]>;

        constructor(role: string) {
            super(jacdac.SRV_COLOR, role, jacdac.ColorRegPack.Color)

            this._brightness = this.addRegister<[number]>(
                jacdac.ColorReg.Brightness,
                jacdac.ColorRegPack.Brightness
            );
        }


        /**
         * Indicates the brightness of the light bulb. Zero means completely off and 0xffff means completely on.
         * For non-dimmable lights, the value should be clamp to 0xffff for any non-zero value.
         */
        //% group="Color"
        //% blockId=jacdac_color_brightness___set
        //% block="set %color brightness to %value (\\%)"
        //% weight=97
        //% value.min=0
        //% value.max=100
        //% value.defl=100
        setBrightness(value: number) {
            this.start()
            const values = this._brightness.values as any[]
            values[0] = value / 100
            this._brightness.values = values as [number]
        }


        /**
         * Detected color in the RGB color space.
         */
        //% callInDebugger
        //% group="Color"
        //% block="%color red (\\%)"
        //% blockId=jacdac_color_color_red_get
        //% weight=100
        red(): number {
            this.setStreaming(true)
            const values = this._reading.pauseUntilValues() as any[]
            return values[0] * 100
        }

        /**
         * Detected color in the RGB color space.
         */
        //% callInDebugger
        //% group="Color"
        //% block="%color green (\\%)"
        //% blockId=jacdac_color_color_green_get
        //% weight=99
        green(): number {
            this.setStreaming(true)
            const values = this._reading.pauseUntilValues() as any[]
            return values[1] * 100
        }

        /**
         * Detected color in the RGB color space.
         */
        //% callInDebugger
        //% group="Color"
        //% block="%color blue (\\%)"
        //% blockId=jacdac_color_color_blue_get
        //% weight=98
        blue(): number {
            this.setStreaming(true)
            const values = this._reading.pauseUntilValues() as any[]
            return values[2] * 100
        }
    }

    //% fixedInstance whenUsed weight=1 block="color1"
    export const color1 = new ColorClient("color1")
}