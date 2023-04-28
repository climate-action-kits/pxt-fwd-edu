namespace fwdMotors {

  /**
   */
  //% fixedInstances
  export class FwdRelayClient extends modules.RelayClient {

    constructor(role: string) {
      super(role)
    }
    
  }

  /**
   **/
  //% fixedInstances
  export class FwdServoClient extends modules.ServoClient {

    constructor(role: string) {
      super(role)
    }
    
  }

}
