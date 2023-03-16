//The first difference with interface is that 
// you cannot create an object from the abstrac class
// that would be a duty of the class where is it esxtended

abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string
    ){}

    abstract getSepia(): void
    getReelTime():number{
        //will do some complex calculation
        return 8
    }
}

//If you want to take a constructor like these
// you have yo use the keyword super

class Instagram extends TakePhoto{
    constructor(
        public cameraMode: string,
        public filter: string,
        public bust: number
        ){
            super(cameraMode,filter)
        }
        getSepia(): void {
            console.log("Sepia")
        }
}


const fp = new Instagram("test", "test", 3)

fp.getReelTime()