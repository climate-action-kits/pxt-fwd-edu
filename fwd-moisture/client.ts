namespace fwdSensors {

  //% fixedInstances
  export class FwdSoilMoistureClient extends modules.SoilMoistureClient {

    constructor(role: string) {
      super(role)
    }

    /**
     * Returns the sensor's moisture level as a number between 0-100
    */
    //% group="Moisture"
    //% block="$this level (\\%)"
    //% blockId=fwd_moisture_get_moisture_level
    fwdMoistureLevel(): number { return this.moisture() }

    /**
     * Runs code when the moisture level changes by more than a certain amount between readings
     * @param threshold how many percent two readings have to differ by before code is run
    */
    //% group="Moisture"
    //% block="on $this level changed by $threshold (\\%)"
    //% blockId=fwd_moisture_on_level_change
    //% threshold.min=1 threshold.max=100 threshold.defl=5
    fwdOnMoistureLevelChangedBy(threshold: number, handler: () => void): void { this.onReadingChangedBy(threshold, handler) }

    /**
     * Runs code when the moisture level goes above or below a set threshold
     * @param threshold what moisture level is the cut off before the code is run
     * @param direction run when the level is above or below your set threshold
    */
    //% group="Moisture"
    //% block="$this level is $direction $threshold (\\%)"
    //% blockId=fwd_moisture_is_moisture_level_past_threshold
    //% threshold.min=0 threshold.max=100 threshold.defl=5
    fwdIsMoistureLevelPastThreshold( threshold: number, direction: ThresholdDirection ): boolean {
      const difference = this.moisture() - threshold > 0;
      const isPastThreshold = 
        direction === ThresholdDirection.Over && difference ||
        direction === ThresholdDirection.Under && !difference;
      return isPastThreshold;
    }
  }

  //% fixedInstance whenUsed
  export const soilMoisture1 = new FwdSoilMoistureClient("soil moisture 1");
}
