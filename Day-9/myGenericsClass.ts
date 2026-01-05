interface Database {
  connection: string;
  username: string;
  password: string;
}

function anotherfunction<T, U extends number>(valOne: T, val2: U): object {
  return {
    valOne,
    val2,
  };
}
function anotherfunction1<T, U, Z extends Database>(
  valOne: T,
  val2: U,
  val3: Z
): object {
  return {
    valOne,
    val2,
    val3,
  };
}

anotherfunction(2, 4);
anotherfunction1("1", "2", { connection: "1", username: "2", password: "3" });

interface Quiz {
  name: string;
  type: string;
}

interface Course {
  name: string;
  author: string;
  subject: string;
}

class Sellable<T> {
  public cart: T[] = [];

  addToCart(product: T) {
    this.cart.push(product);
  }
}
