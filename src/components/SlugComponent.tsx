"use client";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";

const SlugComponent = ({
  image,
}: string | string[] | StaticImageData | any) => {
  const [path, setPath] = useState("");
  
  return (
    <div>
      <Image
        className=" lg:h-auto  object-cover object-center rounded"
        src={path ? path : image}
        alt="ecoomerce"
        width={400}
        height={400}
      />
      <div className="flex items-center justify-evenly mt-4 mx-auto">
        <div>
          <Image
            src={image}
            alt="ecoomerce"
            width={60}
            height={60}
            onClick={() => setPath(image)}
          />
        </div>
      </div>
    </div>
  );
};

export default SlugComponent;
