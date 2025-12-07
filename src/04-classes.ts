class Customer {
  constructor(
    private _firstName: string,
    private _lastName: string
  ) {}

  get firstName(): string {
    return this._firstName;
  }

  set firstName(value: string) {
    this._firstName = value;
  }
}

let myCustomer = new Customer("Martin", "Dixon");
myCustomer.firstName = "Susan";
console.log(myCustomer.firstName);
