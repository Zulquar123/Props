import React, { useState } from "react";
import Partone from "./Partone";

export default function App() {
  const data = [
    {
      name: "Elon Musk",
      image: "https://i.redd.it/tm7ced4yniib1.jpg",
      profession: "Doctor",
      friendship: false,
    },
    {
      name: "Bill Gates",
      image:
        "https://pbs.twimg.com/profile_images/1674815862879178752/nTGMV1Eo_400x400.jpg",
      profession: "Painter",
      friendship: false,
    },
    {
      name: "Lary Page",
      image:
        "https://hips.hearstapps.com/hmg-prod/images/gettyimages-83414114.jpg",
      profession: "Artist",
      friendship: false,
    },
    {
      name: "Jeff Bezoz",
      image:
        "https://pbs.twimg.com/profile_images/1591558315254890500/ETIHb4Nl_400x400.jpg",
      profession: "Police",
      friendship: false,
    },
  ];
  const [rawData, setRawdata] = useState(data);
  const handleFriendship = (cardindex) => {
    setRawdata((previous) => {
      return previous.map((item, index) => {
        if (index == cardindex) {
          return { ...item, friendship: !item.friendship };
        }
        return item;
      });
    });
  };

  return (
    <div className="w-full h-screen bg-[#0065FD] flex justify-center items-center gap-2">
      {rawData.map((item, index) => (
        <Partone
          values={item}
          key={index}
          handleFriendship={handleFriendship}
          index={index}
        />
      ))}
    </div>
  );
}
