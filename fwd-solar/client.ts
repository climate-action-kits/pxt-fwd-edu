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
    //% blockId=fwd_solar_light_level
    fwdLightLevel(): number { return this.lightLevel() * 100 }

    /**
     * Run code when the light level changes by the given threshold value.
     */
    //% group="Solar"
    //% block="on %lightlevel light level changed by %threshold (\\%)"
    //% blockId=fwd_solar_on_light_level_changed
    //% threshold.min=0 threshold.max=100 threshold.defl=5
    fwdOnLightLevelChangedBy(threshold: number, handler: () => void): void { this.onReadingChangedBy(threshold, handler) }

    /**
     * Run code when the light level changes by the given threshold value.
     */
    //% group="Solar"
    //% block="on %lightlevel light level changed by %threshold (\\%)"
    //% blockId=fwd_solar_on_light_level_changed
    //% threshold.min=0 threshold.max=100 threshold.defl=5
    fwdIsLightLevelPastThreshold(threshold: number, direction: 'over' | 'under' ): boolean {
      const difference = this.lightLevel() - threshold > 0;
      const isPastThreshold = 
        direction === 'over' && difference ||
        direction === 'under' && !difference;
      return isPastThreshold 
    }

    /**
     * Convenience function to graph luminance
     */
    //% group="Solar"
    //% block="graph the light level"
    //% blockId=fwd_solar_chart
    //% weight=40
    fwdDisplayLuminance(): void {
      loops.everyInterval(100, () => {
        let lum = 100 - this.lightLevel();
        led.plotBarGraph(lum, 100);
      });
    }
  }
}
