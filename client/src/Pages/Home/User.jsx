import React from "react";

const User = () => {
  return (
    <div className="flex gap-5 items-center bg-slate-400 p-1 my-1 mx-4 rounded-md">
      <div className="avatar online">
        <div className="w-12 rounded-full">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <div className="">
        <h2 className="line-clamp-1 text-xl font-bold">Full Name</h2>
        <p className="text-xs">Username</p>
      </div>
    </div>
  );
};

export default User;
