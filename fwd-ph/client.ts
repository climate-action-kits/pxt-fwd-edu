namespace fwdSensors {

    //% fixedInstances
    export class FwdPhClient extends modules.AcidityClient {

        private calibrated: boolean = false;
        private standard1: number;
        private reading1: number;
        private standard2: number;
        private reading2: number;

        constructor(role: string) {
            super(role)
        }

        /**
         * Returns the sensor's distance reading in meters
         */
        //% group="pH"
        //% block="$this pH"
        //% blockId=fwd_ph_get_ph
        fwdPh(): number {
            
            if (this.calibrated) {
                
                const slope = (this.standard2 - this.standard1) / (this.reading2 - this.reading1);
                const intercept = 4 - slope * this.reading1;
                const reading = super.acidity();

                return slope * reading + intercept;

            } else {
                return super.acidity();
            }
        }


        /**
         * Generates linear calibration and saves slope and y-intercept for future readings
         * @param standard1
         * @param reading1
         * @param standard2
         * @param reading2
         */
        //% group="pH"
        //% block="Calibrate $this measures $standard1 as $reading1 measures $standard2 as $reading2"
        //% blockId=fwd_ph_calibration
        //% inlineInputMode=external
        fwdPhCalibrate( standard1: number, reading1: number, standard2: number, reading2: number ): void {
            
            this.standard1 = standard1;
            this.reading1 = reading1;
            this.standard2 = standard2;
            this.reading2 = reading2;
            this.calibrated = true;
        }
    }

    //% fixedInstance whenUsed
    export const ph1 = new FwdPhClient("ph1");
}