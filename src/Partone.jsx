import React from "react";

export default function Partone({ values, handleFriendship, index }) {
  const { name, image, profession, friendship } = values;
  return (
    <div className="w-64 h-80 bg-zinc-200 overflow-hidden rounded-xl">
      <div className=" h-56 bg-[#F0811A] m-1 rounded-xl">
        <img
          className="object-cover w-full h-full rounded-xl"
          src={image}
          alt=""
        />
      </div>
      <div className=" mt-1 ml-2 ">
        <h1 className="text-2xl font-sans font-semibold">{name}</h1>
        <p className="font-semibold">{profession}</p>
        <button
          className={` ${
            friendship ? "bg-[#1877f2]" : "bg-[#F00707]"
          } text-zinc-100 rounded hover:bg-[#0073Fz] hover:scale-[1.03] transition-transform duration-200 px-1`}
          onClick={() => handleFriendship(index)}
        >
          {friendship == true ? "Remove Friend" : "Add Friend"}
        </button>
      </div>
    </div>
  );
}
