import { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [singUpData, setSingUpData] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setSingUpData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleClick=()=>{
    console.log(singUpData)
  }
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-[40rem] bg-gray-600 p-5  rounded-sm ">
        <h5 className="text-white font-bold text-center">Sign Up</h5>
        <div className="flex flex-col gap-5 items-center">
          <input
            type="text"
            placeholder="Name"
            className="input w-full max-w-[30rem]"
            name="fullName"
            value={singUpData.fullName}
            onChange={handleInputChange}
          />
          <input
            type="text"
            placeholder="Email"
            className="input w-full max-w-[30rem]"
            name="email"
            value={singUpData.email}
            onChange={handleInputChange}
          />
          <input
            type="text"
            placeholder="Password"
            className="input w-full max-w-[30rem]"
            name="password"
            value={singUpData.password}
            onChange={handleInputChange}
          />
          <input
            type="text"
            placeholder="Confirm password"
            className="input w-full max-w-[30rem]"
            name="confirmPassword"
            value={singUpData.confirmPassword}
            onChange={handleInputChange}
          />
          <button className="btn btn-success w-full max-w-[30rem]" onClick={handleClick}>
            Sign up
          </button>
          <p className="text-white">
            Already have an account? please{" "}
            <Link to={"/login"}>
              <span className="text-red-200 underline">Login</span>{" "}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
