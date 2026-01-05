class User {
  email: string;
  name: string;
  city: string = "";
  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
  }
}

const hitesh = new User("h@h.com", "hitesh");
hitesh.city = "jaipur";
//access modifiers
class person {
  public email: string;
  name: string;
  private city: string = "jaipur";
  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
  }
}

const himans = new person("h@h.com", "hitesh");
//simpler syntax
class Users {
  readonly city: string = "jaipur";
  constructor(
    public email: string,
    public name: string //private city:string
  ) {}
}
const hite = new Users("h@h.com", "hitesh");

//getters and setters in classes
class Users1 {
  protected _courseCount = 1;
  readonly city: string = "jaipur";
  constructor(
    public email: string,
    public name: string //private city:string
  ) {}

  private deleteToken() {
    console.log("Token deleted");
  }
  get getAppleEmail(): string {
    return `apple${this.email}`;
  }
  get courseCount(): number {
    return this._courseCount;
  }
  set courseCount(courseNum) {
    if (courseNum <= 1) {
      throw new Error("Course count should be more than 1");
    }
    this._courseCount = courseNum;
  }
}

class SubUser extends Users1 {
  isFamily: boolean = true;
  changeCourseCount() {
    this.courseCount = 4;
  }
}
const hit3 = new Users1("h@h.com", "hitw");
