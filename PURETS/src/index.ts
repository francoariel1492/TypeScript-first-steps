// class User {
//   public email: string;
//   private name: string;
//   readonly city: string = "Cordoba";
//   constructor(email: string, name: string) {
//     this.email = email;
//     this.name = name;
//   }
// }


//THIS IS THE SAME CODE BUT IN A MORE CLEAR WAY IN MY OPINION
class User {

  protected _courseCount = 1
  readonly city: string = "Cordoba";
  constructor(
    public email:string,
    public name:string,
    // private userId: string
    ){
  }
  private deleteToken(){
    console.log("Token deleted")
  }

  //getter
  get getAppleEmail(): string{
    return `apple${this.email}`
  }

  get courseCount(): number{
    return this._courseCount
  }
  //setter
  set courseCount(courseNum){
    if(courseNum <= 1){
        throw new Error("Course count should be more than 1")
    }
    this._courseCount = courseNum
  }
}

//it can't not acquire private property 
class SubUser extends User {
  isFamily: boolean = true
  changeCourseCount(){
    this._courseCount = 4
  }

}
const franco = new User("franco@parente.com", "Franco");
// franco.name
