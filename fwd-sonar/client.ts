namespace fwdSensors {

  //% fixedInstances
  export class FwdSonarClient extends modules.DistanceClient {

    constructor(role: string) {
      super(role)
    }

    /**
     * Returns the sensor's distance reading in meters
    */
    //% group="Sonar"
    //% block="$this distance (m)"
    //% blockId=fwd_sonar_get_distance
    fwdDistance(): number { return this.distance() }

    /**
     * Runs code when the distance changes by more than a certain amount between readings
     * @param threshold how many percent two readings have to differ by before code is run
    */
    //% group="Sonar"
    //% block="on $this distance changed by $threshold m"
    //% blockId=fwd_sonar_on_distance_change
    fwdOnDistanceChangedBy(threshold: number, handler: () => void): void {
      this.onReadingChangedBy(threshold, handler)
    }

    /**
     * Runs code when the distance goes over or under a set threshold
     * @param threshold what distance is the cut off before the code is run
     * @param direction run when the distance is over or under your set threshold
    */
    //% group="Sonar"
    //% block="$this distance is $direction $threshold m"
    //% blockId=fwd_solar_is_distance_past_threshold
    fwdDistancePastThreshold(threshold: number, direction: ThresholdDirection ): boolean {
      const difference = this.distance() - threshold > 0;
      const isPastThreshold = 
        direction === ThresholdDirection.Over && difference ||
        direction === ThresholdDirection.Under && !difference;
      return isPastThreshold 
    }
  }

  //% fixedInstance whenUsed
  export const sonar1 = new FwdSonarClient("sonar 1");
}
