import React, { useEffect, useState } from "react";
import SingleTool from "../SingleTool/SingleTool";

const Tools = () => {
  const [tools, setTools] = useState([]);
  useEffect(() => {
    fetch("https://speedx-manufacturer-a8fc85684ad6.herokuapp.com/tool")
      .then((res) => res.json())
      .then((data) => setTools(data.slice(0, 6)));
  }, []);
  return (
    <div>
      <h1 className="text-center sm:text-2xl  lg:text-3xl text-primary uppercase font-bold">
        Tools We Have
      </h1>
      <div className="grid lg:grid-cols-3 xs:grid-cols-1 place-items-center gap-y-20">
        {tools.map((tool) => (
          <SingleTool tool={tool}></SingleTool>
        ))}
      </div>
    </div>
  );
};

export default Tools;
