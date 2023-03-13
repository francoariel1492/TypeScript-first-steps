class User {
  email: string;
  name: string;
  readonly city: string = "Cordoba";
  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
  }
}

const franco = new User("franco@parente.com", "Franco");
// franco.city = "Buenos Aires"
