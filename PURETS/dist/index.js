"use strict";
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
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this.city = "Cordoba";
    }
}
const franco = new User("franco@parente.com", "Franco");
// franco.name
