import React from "react";
import Avatar from "../../../assets/images/Avatar.png";

function UserAccountInfo() {
  return (
    <div className="flex items-center">
      <img
        className="p-1 w-10 h-10 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 mr-2"
        src={Avatar}
        alt="Avatar"
      />
      <p className="text-sage-green">John</p>
    </div>
  );
}

export default UserAccountInfo;
