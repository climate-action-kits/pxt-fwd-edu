namespace fwdSensors {
    /**
     * Controls LED lights
     **/
    //% fixedInstances blockGap=8
    export class LightsClient extends jacdac.Client {
        private readonly _brightness: jacdac.RegisterClient<[number]>;

        constructor(role: string) {
            super(jacdac.SRV_LIGHTS, role)

            this._brightness = this.addRegister<[number]>(
                jacdac.LightsReg.Brightness,
                jacdac.LightsRegPack.Brightness
            );
        }


        /**
         * Indicates the brightness of the light bulb. Zero means completely off and 0xffff means completely on.
         * For non-dimmable lights, the value should be clamp to 0xffff for any non-zero value.
         */
        //% group="Lights"
        //% blockId=jacdac_lights_brightness___set
        //% block="set %lights brightness to %value (\\%)"
        //% weight=100
        //% value.min=0
        //% value.max=100
        //% value.defl=100
        setBrightness(value: number) {
            if (value < 0 || value > 100) {
                // If out of range, do nothing
                return
            }

            this.start()
            const values = this._brightness.values as any[]
            values[0] = value / 100
            this._brightness.values = values as [number]
        }
    }

    //% fixedInstance whenUsed weight=1 block="lights1"
    export const lights1 = new LightsClient("lights1")
}