import React from "react";
import Link from "next/link";
import { Hero } from "./[id]";

export async function getServerSideProps() {
  const res = await fetch(`${process.env.SERVER_URL}/api/hero`);
  const { data } = await res.json();
  return {
    props: {
      allHeroes: data,
    },
  };
}

export default function Home({ allHeroes }: { allHeroes: Hero[] }) {
  return (
    <div>
      <h1 className="container display">Superhero Identities</h1>
      {allHeroes.map((hero) => (
        <div key={hero.madeUpName} className="border p-2 m-2">
          <h2>{hero.madeUpName}</h2>
          <Link href={`${hero?._id}`}>Reveal Identity</Link>
        </div>
      ))}
    </div>
  );
}
