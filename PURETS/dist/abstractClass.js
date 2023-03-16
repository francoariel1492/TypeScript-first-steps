"use strict";
//The first difference with interface is that 
// you cannot create an object from the abstrac class
// that would be a duty of the class where is it esxtended
class TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getReelTime() {
        //will do some complex calculation
        return 8;
    }
}
//If you want to take a constructor like these
// you have yo use the keyword super
class Instagram extends TakePhoto {
    constructor(cameraMode, filter, bust) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.bust = bust;
    }
    getSepia() {
        console.log("Sepia");
    }
}
const fp = new Instagram("test", "test", 3);
fp.getReelTime();
