function detectType(val: number | string) {
  if (typeof val === "string") {
    return val.toLocaleLowerCase();
  }
  return val + 3;
}

//Make sure you treat null as anything as string and a number
function provideIdX(id: string | null) {
  if (!id) {
    console.log("Please provide ID");
    return;
  }
  id.toLowerCase();
}

function printAll(strs: string | string[] | null) {
  if (strs) {
    if (typeof strs === "object") {
      for (const s of strs) {
        console.log(s);
      }
    } else if (typeof strs === "string") {
      console.log(strs);
    }
  }
}

interface User {
  name: string;
  email: string;
}

interface Admin {
  name: string;
  email: string;
  isAdmin: boolean;
}

//We use the in operator
function isAdminAccount(account: User | Admin){
    if("isAdmin" in account){
        return account.isAdmin
    }
}

//The instance it can only be used where is a potencial
// word new

function logValue(x: Date | string){
    if(x instanceof Date){
        console.log(x.toUTCString());
    
    }else {
        console.log(x.toUpperCase());
    }
}

type Fish = { swim: () => void}
type Bird = { fly: () => void}

function isFish(pet: Fish | Bird): pet is Fish{
    return (pet as Fish).swim !== undefined
}

function getFood(pet: Fish | Bird): {
    if(isFish(pet)){
        pet
        return "fish food"
    }else {
        pet
        return "bird food"
    }
}