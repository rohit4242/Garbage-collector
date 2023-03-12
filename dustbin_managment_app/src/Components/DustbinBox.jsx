import React, { useEffect, useState } from "react";

const DustbinBox = () => {
  const [level, setLevel] = useState(81);
  const [color, setColor] = useState("red");

  useEffect(() => {
    if (level > 80 && level <= 100) {
      setColor("teal");
    }
    if (level > 50 && level <= 80) {
      setColor("yellow");
      console.log(color);
    }
    if (level > 25 && level <= 50) {
      setColor("gray");
      console.log(color);
    }
    if (level > 0 && level <= 25) {
      setColor("red");
    }
  }, [level, color]);
  console.log(color);
  return (
    <div className="w-64 h-96 m-4 p-1 bg-slate-200/50 flex flex-col justify-end rounded-md border-2 border-gray-400">
      <div
        className={`cursor-default bg-${color}-400 rounded-tl-xl rounded-tr-xl text-xs font-bold leading-none py-4 text-center text-white`}
        style={{ height: `${level}%`, width: "100%" }}
      >
        <div className="mx-8 text-gray-800 text-2xl leading-6 tracking-wide">
          {level + "%"}
        </div>
      </div>

    </div>
  );
};

export default DustbinBox;
