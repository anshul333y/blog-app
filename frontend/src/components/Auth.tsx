import { useState, type ChangeEvent } from "react";
import { Link, useNavigate } from "react-router";
import type { signUpType } from "../lib/type";
import axios from "axios";

function Auth({ type }: { type: "signup" | "signin" }) {
  const navigate = useNavigate();

  const [postInput, setPostInput] = useState<signUpType>({
    email: "",
    password: "",
    name: "",
  });

  async function sendRequest() {
    try {
      const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
      console.log(BACKEND_URL);
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/auth/${type == "signup" ? "signup" : "signin"}`,
        postInput,
      );
      const token = response.data;
      localStorage.setItem("token", token.jwt);
      navigate("/blogs");
    } catch (error) {
      console.log(error);
      alert("Internal Server Error");
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-4">
      <div className="w-full max-w-md">
        <div className="mb-10 text-center">
          <h1 className="text-5xl font-bold tracking-tight">
            {type == "signup" ? "Create an account" : "Login to account"}
          </h1>

          <p className="mt-4 text-lg text-gray-500">
            {type == "signup"
              ? "Already have an account?"
              : "Donot have an account?"}{" "}
            <Link
              to={type == "signup" ? "/signin" : "/signup"}
              className="font-medium text-gray-600 underline hover:text-black"
            >
              {type == "signup" ? "Sign in" : "Sign up"}
            </Link>
          </p>
        </div>

        <div className="space-y-6">
          <div className={`${type === "signup" ? "block" : "hidden"}`}>
            <LabelInput
              label="username"
              placeholder={"John Doe"}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setPostInput({
                  ...postInput,
                  name: e.target.value,
                });
              }}
            />
          </div>

          <div>
            <LabelInput
              label="Email"
              placeholder="johndoe@gmail.com"
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setPostInput({
                  ...postInput,
                  email: e.target.value,
                });
              }}
            />
          </div>

          <div>
            <LabelInput
              label="password"
              placeholder=""
              type="password"
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setPostInput({
                  ...postInput,
                  password: e.target.value,
                });
              }}
            />
          </div>

          <button
            onClick={sendRequest}
            type="submit"
            className="h-12 w-full rounded-md bg-neutral-900 text-lg font-semibold text-white transition hover:bg-black"
          >
            {type == "signup" ? "Sign Up" : "Sign In"}
          </button>
        </div>
      </div>
    </div>
  );
}

interface LabelInputType {
  label: string;
  placeholder: string;
  type?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function LabelInput({ label, placeholder, type, onChange }: LabelInputType) {
  return (
    <>
      <label htmlFor="username" className="mb-2 block text-lg font-semibold">
        {label}
      </label>

      <input
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        className="h-12 w-full rounded-md border border-gray-300 px-4 text-base outline-none transition focus:border-black"
      />
    </>
  );
}

export default Auth;
