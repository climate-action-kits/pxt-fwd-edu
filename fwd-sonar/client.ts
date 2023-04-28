namespace fwdSensors {

  //% fixedInstances
  export class FwdSonarClient extends modules.DistanceClient {

    constructor(role: string) {
      super(role)
    }

    /**
    */
    //% group="Sonar"
    //% block="%distance distance "
    fwdLightLevel(): number { return this.distance() }

    /**
    */
    //% group="Sonar"
    //% block="on %distance distance changed by %threshold m"
    //% weight=97
    fwdOnDistanceChangedBy(threshold: number, handler: () => void): void {
      this.onReadingChangedBy(threshold / 100, handler)
    }

    /**
    */
    //% group="Sonar"
    //% block="on %distance distance is %direction %threshold m"
    fwdDistancePastThreshold(threshold: number, direction: 'over' | 'under' ): boolean {
      const difference = this.distance() - threshold > 0;
      const isPastThreshold = 
        direction === 'over' && difference ||
        direction === 'under' && !difference;
      return isPastThreshold 
    }
  }
}
