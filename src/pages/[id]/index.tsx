import React from "react";
import Link from "next/link";
export type Hero = {
  madeUpName: string;
  realName: string;
  _id: string;
};

export async function getServerSideProps({
  params,
}: {
  params: { id: string };
}) {
  const id = params.id;
  console.log(id);
  const res = await fetch(`${process.env.SERVER_URL}/api/hero/${id}`);
  const { data }: { data: Hero } = await res.json();
  console.log(data);
  return {
    props: {
      hero: data,
    },
  };
}

const EachHero = async ({ hero }: { hero: Hero }) => {
  console.log(hero);
  //   const { madeUpName, realName } = hero;
  return (
    <div className="border p-2 m-2">
      {/* <h2>{madeUpName}</h2> */}
      <Link href={`/`}>Edit Hero</Link>
      <Link href={`/`}>Delete Hero</Link>
    </div>
  );
};

export default EachHero;
