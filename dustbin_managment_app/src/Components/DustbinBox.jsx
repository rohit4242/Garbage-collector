import React from "react";
import { Link } from "react-router-dom";

const DustbinBox = ({ data, name }) => {
  return (
    <Link to={`/dustbinDetail/${name?.key}`}>
      {" "}
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col justify-end w-32 h-48 p-1 m-4 border-2 border-gray-400 rounded-md bg-slate-200/50">
          <div
            className="py-4 text-xs font-bold leading-none text-center text-white bg-teal-400 cursor-default rounded-tl-xl rounded-tr-xl"
            style={{ height: `${data?.level}%`, width: "100%" }}
          >
            <div className="mx-8 text-2xl leading-6 tracking-wide text-gray-800">
              {parseInt(data?.level) + "%"}
            </div>
          </div>
        </div>
        <p>{data?.address}</p>
      </div>
    </Link>
  );
};

export default DustbinBox;
