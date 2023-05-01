namespace fwdSensors {

  //% fixedInstances
  export class FwdSolarClient extends modules.LightLevelClient {

    constructor(role: string) {
      super(role)
    }

    /**
    */
    //% group="Solar"
    //% block="$this light level (\\%)"
    //% blockId=fwd_solar_light_level
    fwdLightLevel(): number { return this.lightLevel() }

    /**
     * Run code when the light level changes by the given threshold value.
     */
    //% group="Solar"
    //% block="on $this light level changed by $threshold (\\%)"
    //% blockId=fwd_solar_on_light_level_changed
    //% threshold.min=0 threshold.max=100 threshold.defl=5
    fwdOnLightLevelChangedBy(threshold: number, handler: () => void): void { this.onReadingChangedBy(threshold, handler) }

    /**
     * Run code when the light level changes by the given threshold value.
     */
    //% group="Solar"
    //% block="is $this light level changed by $threshold (\\%)"
    //% blockId=fwd_solar_is_light_level_past_threshold
    //% threshold.min=0 threshold.max=100 threshold.defl=5
    fwdIsLightLevelPastThreshold(threshold: number, direction: thresholdDirection ): boolean {
      const difference = this.lightLevel() - threshold > 0;
      const isPastThreshold = 
        direction === thresholdDirection.over && difference ||
        direction === thresholdDirection.under && !difference;
      return isPastThreshold 
    }

    /**
     * Convenience function to graph luminance
     */
    //% group="Solar"
    //% block="graph the light level of $this"
    //% blockId=fwd_solar_chart
    //% weight=40
    fwdDisplayLuminance(): void {
      loops.everyInterval(100, () => {
        let lum = 100 - this.lightLevel();
        led.plotBarGraph(lum, 100);
      });
    }
  }

  //% fixedInstance whenUsed
  export const solar1 = new FwdSolarClient("solar 1");
}
