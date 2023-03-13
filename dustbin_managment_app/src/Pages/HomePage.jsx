import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { ref, onValue } from "firebase/database";
import DustbinBox from "../Components/DustbinBox";
import Spinner from "../Components/Spinner";
const HomePage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    // const key = [];
    const val = [];
    onValue(ref(db, "smartbin"), (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        // key.push(childSnapshot.key);
        val.push({
          key: childSnapshot.key,
          data: childSnapshot.val(),
        });
        setLoading(false);
      });
    });
    setData(val);
  }, []);

  if (loading) return <Spinner message="Loading Your Data" />;

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-wrap items-center justify-between">
        {data &&
          data.map((value, index) => (
            <DustbinBox
              key={index}
              data={value.data}
              name={value}
            />
          ))}
      </div>
    </div>
  );
};

export default HomePage;
