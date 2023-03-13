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

  readonly city: string = "Cordoba";
  constructor(
    public email:string,
    public name:string,
    // private userId: string
    ){
  }
}

const franco = new User("franco@parente.com", "Franco");
// franco.name
