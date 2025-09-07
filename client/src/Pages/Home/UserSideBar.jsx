import React from "react";
import { CiSearch } from "react-icons/ci";
import User from "./User";

const UserSideBar = () => {
  return (
    <div className="max-w-[20rem] w-full h-screen flex flex-col">
      <div>
        <h1>Gup Shup</h1>
      </div>
      <div className="p-4">
        <label className="input input-bordered flex items-center gap-2">  
          <input type="text" className="grow" placeholder="Search" />
          <CiSearch />
        </label>
      </div>
      <div className="h-full overflow-y-auto">
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
      </div>
      <div className="h-[3rem] bg-black">footer</div>
    </div>
  );
};

export default UserSideBar;
