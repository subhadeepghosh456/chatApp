import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [loginData, setLoginData] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setLoginData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  const handleSubmit=()=>{
    console.log(loginData)
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-[40rem] bg-gray-600 p-5  rounded-sm ">
        <h5 className="text-white font-bold text-center">Login</h5>
        <div className="flex flex-col gap-5 items-center">
          <input
            type="text"
            name="fullName"
            placeholder="Full name"
            className="input w-full max-w-[30rem]"
            onChange={handleInputChange}
            value={loginData.fullName}
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            className="input w-full max-w-[30rem]"
            onChange={handleInputChange}
            value={loginData.email}
          />
          <input
            type="text"
            name="password"
            placeholder="Password"
            className="input w-full max-w-[30rem]"
            onChange={handleInputChange}
            value={loginData.password}
          />
          <button className="btn btn-success w-full max-w-[30rem]" onClick={handleSubmit}>
            Submit
          </button>
          <p className="text-white">
            Don't have an account? please{" "}
            <Link to={"/signup"}>
              <span className="text-red-200 underline">Sign up</span>{" "}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
