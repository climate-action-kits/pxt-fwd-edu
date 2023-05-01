namespace fwdSensors {
  const MAX_REPORT_BRIGHTNESS = 100
  const MAX_SERVICE_BRIGHTNESS = 1
  const toBlocksBrightness = ( serviceBrightness: number ): number => { return MAX_REPORT_BRIGHTNESS * serviceBrightness / MAX_SERVICE_BRIGHTNESS } 
  const toServiceBrightness = ( reportBrightness: number ): number => { return MAX_SERVICE_BRIGHTNESS * reportBrightness / MAX_REPORT_BRIGHTNESS } 

  //% fixedInstances
  export class FwdSolarClient extends modules.LightLevelClient {

    constructor(role: string) {
      super(role)
    }

    /**
    */
    //% group="Solar"
    //% block="$this light level (\\%)"
    //% blockId=fwd_solar_get_light_level
    fwdLightLevel(): number { return toBlocksBrightness(this.lightLevel()) }

    /**
    */
    //% group="Solar"
    //% block="on $this light level changed by $threshold (\\%)"
    //% blockId=fwd_solar_on_light_level_changed
    //% threshold.min=0 threshold.max=100 threshold.defl=5
    fwdOnLightLevelChangedBy(threshold: number, handler: () => void): void { this.onReadingChangedBy( toServiceBrightness(threshold), handler) }

    /**
    */
    //% group="Solar"
    //% block="is $this light level $direction $threshold (\\%)"
    //% blockId=fwd_solar_is_light_level_past_threshold
    //% threshold.min=0 threshold.max=100 threshold.defl=5
    fwdIsLightLevelPastThreshold(threshold: number, direction: thresholdDirection ): boolean {
      const difference = this.lightLevel() - threshold > 0;
      const isPastThreshold = 
        direction === thresholdDirection.over && difference ||
        direction === thresholdDirection.under && !difference;
      return isPastThreshold 
    }
  }

  //% fixedInstance whenUsed
  export const solar1 = new FwdSolarClient("solar 1");
}
