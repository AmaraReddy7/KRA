interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  //startTrail: () => string;
  startTrail(): string;
  getCoupon(couponname: string, value: number): number;
}
//Reopening of a interface
interface User {
  githubToken: string;
}

interface Admin extends User {
  role: "admin" | "ta" | "learner";
}

const hitesh: User = {
  dbId: 22,
  email: "h@gmail.com",
  userId: 123,
  githubToken: "github",
  startTrail: () => {
    return "trail started";
  },
  getCoupon: (name: "hit", off: 10) => {
    return 10;
  },
};
hitesh.email = "h@gmail.com";

const hites: Admin = {
  dbId: 22,
  email: "h@gmail.com",
  userId: 123,
  role: "admin",
  githubToken: "github",
  startTrail: () => {
    return "trail started";
  },
  getCoupon: (name: "hit", off: 10) => {
    return 10;
  },
};
