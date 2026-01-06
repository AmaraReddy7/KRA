import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <h1>Hello Welcome </h1>;
      <label>
        <input type="text" placeholder="Enter your Email" />
      </label>
      <label>
        <input type="password" placeholder="Enter Your password" />
      </label>
      <button>Login</button>
    </div>
  );
}
