
import Link from "next/link";
import { Roboto } from "next/font/google";
import LoginForm from "@/components/LoginForm";
import RegisterForm from "@/components/RegisterForm";


const roboto = Roboto({
  weight: ["500"],
  subsets: ["latin"],
});

export default function MyAccount() {
  return (
    <div>
      <div className="w-full min-h-screen   pt-16">
        <div
          className={`${roboto.className} text-[10px] uppercase p-6   pt-10 pl-10`}
        >
          <span className="text-gray-500 pr-2  ">
            <Link className="hover:text-black" href="/">
              Home
            </Link>
          </span>
          <span className="pr-2">|</span>
          <span>My Account</span>
        </div>
        <div className=" mx-4 md:flex">
          <div className="w-full  md:w-1/2">
            <LoginForm />
          </div>
          <div className=" w-full md:w-1/2">
            <RegisterForm />
          </div>
        </div>
      </div>
    </div>
  );
}
