import Image from "next/image";
import React from "react";

function Home() {
  return (
    <div>
      <header>
        <div className="relative w-36 h-10">
          <Image
            src="https://rb.gy/vtbzlp"
            priority={1}
            alt=""
            fill
            sizes="100vw"
            style={{
              objectFit: "contain"
            }} />
        </div>
      </header>
    </div>
  );
}

export default Home;
