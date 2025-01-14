import React, { useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../../API/Authapi";

import toast, { Toaster } from "react-hot-toast";

const SignUp = () => {
  const [userName, setuserName] = useState<string>("");
  const [email, setemail] = useState<string>("");
  const [password, setpassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    await signup({ userName, email, password })
      .then((res) => {
        if (res.status === 201) {
          navigate("/auth/create-account-notification");
        } else {
          toast("error");
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Toaster />
        <div className=" h-screen w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center justify-center pl-[80px] gap-10">
          <p className="text-[45px] font-semibold text-blue-600">
            Welcome to e-Sam <br /> Register Page
          </p>
          <div className="w-[400px] min-h-[400px] border rounded-md p-6">
            <div className=" flex flex-col mb-5 gap-3">
              <label htmlFor="" className="font-semibold">
                userName
              </label>
              <input
                type="text"
                placeholder="Search..."
                className="px-4 py-4 rounded-md border outline-none focus:outline-none focus:border-blue-500"
                value={userName}
                onChange={(e) => setuserName(e.target.value)}
              />
            </div>
            <div className=" flex flex-col mb-5 gap-3">
              <label htmlFor="" className="font-semibold">
                email
              </label>
              <input
                type="text"
                placeholder="Search..."
                className="px-4 py-4 rounded-md border outline-none focus:outline-none focus:border-blue-500"
                value={email}
                onChange={(e) => setemail(e.target.value)}
              />
            </div>
            <div className=" flex flex-col mb-5 gap-3">
              <label htmlFor="" className="font-semibold">
                password
              </label>
              <input
                type="text"
                placeholder="Search..."
                className="px-4 py-4 rounded-md border outline-none focus:outline-none focus:border-blue-500"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
              />
            </div>
            <button
              className="px-4 py-3 rounded-md w-full flex items-center justify-center text-white font-semibold bg-blue-600 mb-3"
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? <FaSpinner className="ml-6" /> : "Submit"}
            </button>
            <p className="w-full flex items-center justify-center gap-2">
              Already have an account{" "}
              <Link to="/auth/signin">
                <u>Login</u>
              </Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
