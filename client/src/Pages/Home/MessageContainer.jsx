import React from "react";
import User from "./User";
import Message from "./Message";

const MessageContainer = () => {
  return (
    <div className="h-screen w-full flex flex-col">
      <div className="p-3 border-b border-blue-50">
        <User />
      </div>
      <div className="h-full overflow-y-auto p-3">
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="w-[96%] p-3">
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-info w-full"
          />
        </div>
        <div className="">
          <button className="btn btn-ghost">Ghost</button>
        </div>
      </div>
    </div>
  );
};

export default MessageContainer;
