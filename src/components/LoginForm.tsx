import React, { useState, useEffect } from "react";
import Link from "next/link";
import { UserAuth } from "~/context/AuthContext";
import { useRouter } from "next/router";
import { FaUser } from 'react-icons/fa'

const LoginForm = () => {
  const { signedInUser, logIn } = UserAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      await logIn(email, password)
      router.push("/account")
    } catch(error){
        console.log(error.message);
        setError(error.message);
    }
  }

  return (
    <div className="mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
      <div className="rounded-lg bg-white shadow dark:border w-80 md:mt-0 xl:p-0">
        <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900  md:text-2xl">
           Login
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6" action="#">
            <div>
              {error ? <span className="text-red-700">{error}.</span> : ""}
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-gray-900 "
              >
                Your email
              </label>
              <input
                type="email"
                onChange={e => setEmail(e.target.value)}
                name="email"
                id="email"
                className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900   sm:text-sm"
                placeholder="name@company.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium text-gray-900"
              >
                Password
              </label>
              <input
                onChange={e => setPassword(e.target.value)}
                type="password"
                name="password"
                id="password"
                placeholder="must be 8 characters"
                className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900  sm:text-sm"
                required
              />
            </div>
            <button
              type="submit"
              className="hover:bg-primary-700 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 w-full rounded-lg bg-pink-600 px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4"
            >
              Login
            </button>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">

            Don&#39;t have an account?{" "}

              <Link
                href="/signup"
                className="text-primary-600  dark:text-primary-500 font-medium hover:underline"
              >
              Sign up

              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
