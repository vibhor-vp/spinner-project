import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'spinner',
    templateUrl: 'spinner.component.html'
})

export class SpinnerComponent implements OnInit {
    @Input('spinnersCount') spinnersCount: number;
    public spinners = [];
    timerStarted: boolean = false;
    setIntervalEventHandler: any;
    @Output('spinnerStopped') spinnerStopped: EventEmitter<any> = new EventEmitter();
    public timerEndTime: number = 1000;  //in ms;
    timerInterval: number = 100;

    constructor() { }

    ngOnInit(): void {
        for (let i = 0; i < this.spinnersCount; i++) {
            this.spinners.push({ name: 'spinner' + (i + 1), value: 1 });
        }
    }

    startSpinner() {
        this.timerStarted = true;
        let timerRunningValue = 0;
        this.setIntervalEventHandler = setInterval(() => {
            timerRunningValue += this.timerInterval;
            if (timerRunningValue > this.timerEndTime) {
                this.stopSpinner();
            }
            else {
                for (let i = 0; i < this.spinnersCount; i++) {
                    this.spinners[i].value = +(Math.random() * 10).toFixed(0);
                }
            }
        }, this.timerInterval);
    }

    stopSpinner(): void {
        this.timerStarted = false;
        this.clearSpinnerInterval();
    }

    clearSpinnerInterval(): void {
        clearInterval(this.setIntervalEventHandler);
        this.spinnerStopped.emit(this.getSpinnerValuesSum());
    }

    getSpinnerValuesSum(): number {
        let sum = 0;
        for (let i = 0; i < this.spinners.length; i++) {
            sum += this.spinners[i].value;
        }
        return sum;
    }
}