import Image from "next/image";
import React from "react";

function Home() {
  return (
    <div>
      <header>
        <div className="">
          <Image src="https://rb.gy/vtbzlp" layout="fill" objectFit="contain" priority={1} alt=""/>
        </div>
      </header>
    </div>
  );
}

export default Home;
