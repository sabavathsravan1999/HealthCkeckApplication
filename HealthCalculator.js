import { LightningElement } from 'lwc';

export default class HealthCalculator extends LightningElement {
    height='';
    weight='';
    healthcheck='';
    resValue='';
    handleonchange(event){
        event.preventDefault();
        const {name, value}=event.target;
        if(name==='height'){
            this.height=value;
        }
        if(name==='weight'){
            this.weight=value;  
        }
    }
    onsumbitHandler(event){
        event.preventDefault();
        this.calculate();
    }
    calculate(){
        let height=Number(this.height)/100; //to conver to meter
        this.healthcheck=Number(this.weight)/(height*height);
        this.healthcheck=Number(this.healthcheck.toFixed(2));
        
        let bmi=this.healthcheck;
        if(bmi<18.5){
            this.resValue='Underweight';
        }else if(bmi>18.5 && bmi<24.9){
            this.resValue='Healthy';
        }else if(bmi>25 && bmi<29.9){
            this.resValue='Overwight';
        }else if(bmi>30){
            this.resValue='Obese';
        }
    }

    recalculate(event){
        this.height='';
        this.weight='';
        this.healthcheck='';
        this.resValue='';
    }

}
