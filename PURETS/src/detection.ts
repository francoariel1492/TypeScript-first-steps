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
