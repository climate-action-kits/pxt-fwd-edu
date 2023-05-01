namespace fwdSensors {

  //% fixedInstances
  export class FwdSoilMoistureClient extends modules.SoilMoistureClient {

    constructor(role: string) {
      super(role)
    }

    /**
    */
    //% group="Moisture"
    //% block="$this moisture level (\\%)"
    //% blockId=fwd_moisture_get_level
    fwdMoistureLevel(): number { return this.moisture() }

    /**
    */
    //% group="Moisture"
    //% block="on $this moisture level changed by $threshold (\\%)"
    //% blockId=fwd_moisture_on_level_change
    //% weight=97
    //% threshold.min=0 threshold.max=100 threshold.defl=5
    onMoistureLevelChangedBy(threshold: number, handler: () => void): void {
      this.onReadingChangedBy(threshold, handler)
    }

    /**
    */
    //% group="Moisture"
    //% block="on $this moisture level $direction $threshold (\\%)"
    //% blockId=fwd_moisture_on_level_threshold_check
    //% threshold.min=0 threshold.max=100 threshold.defl=5
    fwdIsMoistureLevelPastThreshold( threshold: number, direction: thresholdDirection ): boolean {
      const difference = this.moisture() - threshold > 0;
      const isPastThreshold = 
        direction === thresholdDirection.over && difference ||
        direction === thresholdDirection.under && !difference;
      return isPastThreshold;
    }
  }

  //% fixedInstance whenUsed
  export const soilMoisture1 = new FwdSoilMoistureClient("soil moisture 1");
}
