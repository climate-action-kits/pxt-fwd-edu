namespace fwdSensors {

  //% fixedInstances
  export class FwdSoilMoistureClient extends modules.SoilMoistureClient {

    constructor(role: string) {
      super(role)
    }

    /**
    */
    //% group="Moisture"
    //% block="%soilmoisture moisture level (\\%)"
    fwdMoistureLevel(): number { return this.moisture() }

    /**
    */
    //% group="Moisture"
    //% block="on %soilmoisture moisture level changed by %threshold (\\%)"
    //% weight=97
    //% threshold.min=0 threshold.max=100 threshold.defl=5
    onMoistureLevelChangedBy(threshold: number, handler: () => void): void {
      this.onReadingChangedBy(threshold, handler)
    }

    /**
     */
    //% group="Moisture"
    //% block="on %soilmoisture moisture level %direction %threshold (\\%)"
    //% threshold.min=0 threshold.max=100 threshold.defl=5
    onLightLevelPastThreshold(threshold: number, direction: 'over' | 'under', handler: () => void): void {
      this.onReadingChangedBy(0.01, (_) => {
        const difference = this.moisture() - threshold > 0;
        const isPastThreshold = 
          direction === 'over' && difference ||
          direction === 'under' && !difference;
        return isPastThreshold && handler();
      })
    }

  }

}
