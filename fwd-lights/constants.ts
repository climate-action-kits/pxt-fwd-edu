namespace jacdac {
    // Lights Service constants
    export const SRV_LIGHTS = 0x1cab054c
    export const enum LightsReg {
        /**
         * Read-write ratio u0.8 (uint8_t). Set the luminosity of the strip.
         * At `0` the power to the strip is completely shut down.
         *
         * ```
         * const [brightness] = jdunpack<[number]>(buf, "u0.8")
         * ```
         */
        Brightness = 0x1,
    }

    export namespace LightsRegPack {
        /**
        * Pack format for 'brightness' data.
        */
        export const Brightness = "u0.8"
    }
}
