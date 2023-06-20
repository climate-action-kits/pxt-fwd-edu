namespace fwdSensors {

  //% fixedInstances
  export class FwdSolarClient extends modules.LightLevelClient {
    MAX_REPORT_BRIGHTNESS = 100
    MAX_SERVICE_BRIGHTNESS = 1

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
     * Returns the sensor's light level as a number between 0-100
    */
    //% group="Solar"
    //% block="$this light level (\\%)"
    //% blockId=fwd_solar_get_light_level
    fwdLightLevel(): number { return this.lightLevel() }

    /**
     * Runs code when the light level changes by more than a certain amount between readings
     * @param threshold how many percent two readings have to differ by before code is run
    */
    //% group="Solar"
    //% block="on $this light level changed by $threshold (\\%)"
    //% blockId=fwd_solar_on_light_level_changed
    //% threshold.min=0 threshold.max=100 threshold.defl=5
    fwdOnLightLevelChangedBy(threshold: number, handler: () => void): void { this.onReadingChangedBy( this.toServiceBrightness(threshold), handler) }

    /**
     * Runs code when the light level goes above or below a set threshold
     * @param threshold what light level is the cut off before the code is run
     * @param direction run when the level is above or below your set threshold
    */
    //% group="Solar"
    //% block="$this light level is $direction $threshold (\\%)"
    //% blockId=fwd_solar_is_light_level_past_threshold
    //% threshold.min=0 threshold.max=100 threshold.defl=5
    fwdIsLightLevelPastThreshold(threshold: number, direction: ThresholdDirection ): boolean {
      const difference = this.lightLevel() - threshold > 0;
      const isPastThreshold = 
        direction === ThresholdDirection.Over && difference ||
        direction === ThresholdDirection.Under && !difference;
      return isPastThreshold 
    }
  }

  //% fixedInstance whenUsed
  export const solar1 = new FwdSolarClient("solar 1");
}
