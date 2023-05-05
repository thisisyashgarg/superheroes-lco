import React from "react";

export async function getStaticProps() {
  const res = await fetch(`${process.env.SERVER_URL}/api/hero`);
  const { data } = await res.json();
  return {
    props: {
      allHeroes: data,
    },
  };
}

export default function Home({
  allHeroes,
}: {
  allHeroes: {
    madeUpName: string;
    realName: string;
  }[];
}) {
  return (
    <div>
      <h1 className="container display">Superhero Identities</h1>
      {allHeroes.map((hero) => (
        <div key={hero.madeUpName}>
          <h2>{hero.madeUpName}</h2>
          <h1>{hero.realName}</h1>
        </div>
      ))}
    </div>
  );
}
