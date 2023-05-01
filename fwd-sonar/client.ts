namespace fwdSensors {

  //% fixedInstances
  export class FwdSonarClient extends modules.DistanceClient {

    constructor(role: string) {
      super(role)
    }

    /**
    */
    //% group="Sonar"
    //% block="$this distance (m)"
    //% blockId=fwd_sonar_get_distance
    fwdDistance(): number { return this.distance() }

    /**
    */
    //% group="Sonar"
    //% block="on $this distance changed by $threshold m"
    //% blockId=fwd_sonar_on_distance_change
    fwdOnDistanceChangedBy(threshold: number, handler: () => void): void {
      this.onReadingChangedBy(threshold / 100, handler)
    }

    /**
    */
    //% group="Sonar"
    //% block="is $this distance $direction $threshold m"
    //% blockId=fwd_solar_is_distance_past_threshold
    fwdDistancePastThreshold(threshold: number, direction: thresholdDirection ): boolean {
      const difference = this.distance() - threshold > 0;
      const isPastThreshold = 
        direction === thresholdDirection.over && difference ||
        direction === thresholdDirection.under && !difference;
      return isPastThreshold 
    }
  }

  //% fixedInstance whenUsed
  export const sonar1 = new FwdSonarClient("sonar 1");
}
