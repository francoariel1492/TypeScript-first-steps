// const User = {
//     name: "Franco",
//     email: "franco@parente.com",
//     isActive: true
// }

// function createUser({name: string, isPaid: boolean}){}

// let newUser = {name: "Franco", isPaid: false, email: "franco@parente.com"}

// createUser(newUser)


// function createCourse():{name: string, price: number}{
//     return {name: "reactjs", price: 400}
// }



// type User = {
//     name: string;
//     email: string;
//     isActive: boolean
// }



// function createUser(user: User): User{
//     return {name: "", email: "", isActive: true}
// }

// createUser({name: "", email: "", isActive: true})
//readonly is exactly for that, you can not modifie the field
// the ? is to make an optional
type User = {
    readonly _id: string
    name: string
    email: string
    isActive: boolean
    credcardDetails?: number
}

let myUser: User = {
    _id: "12345",
    name: "h",
    email: "h@h.com",
    isActive: false
}

type cardNumber = {
    cardnumber: string,
}

type cardDate = {
    cardDate: string,
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}





myUser.email = "franco@parente.com"
// myUser._id = "jojo"







export {}