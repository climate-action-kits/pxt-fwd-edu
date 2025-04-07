namespace jacdac {
    // Service Color constants
    export const SRV_COLOR = 0x1630d567
    export const enum ColorReg {
        /**
         * Detected color in the RGB color space.
         *
         * ```
         * const [red, green, blue] = jdunpack<[number, number, number]>(buf, "u0.16 u0.16 u0.16")
         * ```
         */
        Color = 0x101,

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

    export namespace ColorRegPack {
        /**
         * Pack format for 'color' data.
         */
        export const Color = "u0.16 u0.16 u0.16"

        /**
        * Pack format for 'brightness' data.
        */
        export const Brightness = "u0.8"
    }
}
