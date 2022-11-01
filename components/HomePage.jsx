import Link from "next/link";
import React, { useEffect, useState } from "react";
import database from "../database";
let differentLetters = {
  ",": "",
  "!": "",
  "?": "",
  "*": "",
  ı: "i",
  ş: "s",
  ç: "c",
  ö: "o",
  ü: "u",
  ğ: "g",
  İ: "i",
  Ş: "s",
  Ç: "c",
  Ö: "o",
  Ü: "u",
  Ğ: "g",
  " ": "-",
  ".": "",
};

const HomePage = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-2 row-auto w-5/6 m-auto">

      {database.products.map((i, index) => (
        <div
          key={index}
          className="flex flex-col justify-center bg-white	rounded products"
        >
          <Link
            href={{
              pathname: "products",
              data: i,
            }}
            as={i.id+"/"+i.title
              .toLowerCase()
              .replaceAll(
                /[,!?*ışçöüğİŞÇÖÜĞ .]/g,
                (change) => differentLetters[change]
              )}
          >
            <img src={i.image} alt={i.title} className="w-full rounded" />
          </Link>
          <div className="desc">
            <h4>{i.title}</h4>
            <p>{i.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
