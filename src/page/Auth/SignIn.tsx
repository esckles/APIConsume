/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { data, Link, useNavigate, useParams } from "react-router-dom";
import { signin, signup, verifyaccount } from "../../API/Authapi";
import { jwtDecode } from "jwt-decode";

import toast, { Toaster } from "react-hot-toast";

const SignIn = () => {
  const [email, setemail] = useState<string>("");
  const [password, setpassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const { token } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      const decoded: any = jwtDecode(token!);
      verifyaccount(decoded?.id);
    }
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    await signin({ email, password })
      .then((res) => {
        if (res.status === 201) {
          const getID: any = jwtDecode(res.data!);
          localStorage.setItem("userAuthLogin", JSON.stringify(getID?.id));
          navigate("/dash");
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
            Welcome to e-Sam <br /> Login Page
          </p>
          <div className="w-[400px] min-h-[300px] border rounded-md p-6">
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
              <Link to="/auth/signup">
                <u>Register</u>
              </Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
