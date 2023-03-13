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
        this._courseCount = 1;
        this.city = "Cordoba";
    }
    deleteToken() {
        console.log("Token deleted");
    }
    //getter
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    //setter
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1");
        }
        this._courseCount = courseNum;
    }
}
const franco = new User("franco@parente.com", "Franco");
// franco.name
