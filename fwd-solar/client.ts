namespace fwdSensors {

  //% fixedInstances
  export class FwdSolarClient extends modules.LightLevelClient {

    constructor(role: string) {
      super(role)
    }

    /**
    */
    //% group="Solar"
    //% block="%lightlevel light level (\\%)"
    fwdLightLevel(): number { return this.lightLevel() * 100 }

    /**
     * Run code when the light level changes by the given threshold value.
     */
    //% group="Solar"
    //% block="on %lightlevel light level changed by %threshold (\\%)"
    //% weight=97
    //% threshold.min=0 threshold.max=100 threshold.defl=5
    onLightLevelChangedBy(threshold: number, handler: () => void): void {
      this.onReadingChangedBy(threshold / 100, handler)
    }

    /**
     * Run code when the light level changes by the given threshold value.
     */
    //% group="Solar"
    //% blockId=jacdac_lightlevel_on_light_level_past_threshold
    //% block="on %lightlevel light level changed by %threshold (\\%)"
    //% threshold.min=0 threshold.max=100 threshold.defl=5
    onLightLevelPastThreshold(threshold: number, direction: 'over' | 'under', handler: () => void): void {
      this.onReadingChangedBy(0.01, (_) => {
          const difference = this.lightLevel() - threshold > 0;
          const isPastThreshold = 
          direction === 'over' && difference ||
          direction === 'under' && !difference;
          return isPastThreshold && handler();
          })
    }

    /**
     * Convenience function to graph luminance
     */
    //% group="Solar"
    //% block="graph the light level"
    //% weight=40
    displayLuminance(): void {
      this.onReadingChangedBy(5 / 100, () => {
          let lum = 100 - this.lightLevel();
          led.plotBarGraph(lum, 100);
          });
    }
    }

}
