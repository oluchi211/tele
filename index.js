class telephone{
    constructor(){
        this.phoneNumbers = [];
        this.observers = [];
    }
     addphoneNumber(){
        if(!this.phoneNumbers.includes(phoneNumber)){
            this.phoneNumbers.push(phoneNumber);
            console.log('phone number ${phoneNumber} added.');
        }else{
            console.log('phone number ${phoneNumber} already exists.');
        }
     }
     
     removePhoneNumber(phoneNumber){
        const index = this.phoneNumbers.indexOf(phoneNumber);
        if(index!== -1){
            this.phoneNumbers.splice(index,-1);
            console.log('phone number ${phoneNumber}removed.');
        }else{
            console.log('phone number ${phoneNumber} not found');
        }
        
     }
      dialPhoneNumber(phoneNumber){
        if(this.phoneNumbers.includes(phoneNumber)){
            console.log('dialing ${phoneNumber}.....');
            this.notifyObservers(phoneNumber);
        }else{
            console.log('phone number ${phoneNumber} not found.');
        }
      }
    add(observer){
        this.observers.push(observer);
    }
       notifyObservers(phoneNumber){
        this.observers.forEach(observer => observer(phoneNumber));
       } 
    observer1(){
        console.log("print the phone number");

       }
       observer2(){
        console.log("now dialing 2347023232");
       }

        
       }
        
        
        const telephone = new telephone();
       
