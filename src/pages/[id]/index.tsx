import React from "react";
import { useRouter } from "next/router";
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

  const array: Hero[] = [];
  const res = await fetch(`${process.env.SERVER_URL}/api/hero/${id}`);
  const { data }: { data: Hero } = await res.json();

  return {
    props: {
      hero: data,
    },
  };
}

const EachHero = ({ hero }: { hero: Hero }) => {
  const router = useRouter();
  async function deleteHero() {
    try {
      await fetch(`${process.env.SERVER_URL}/api/hero/${hero._id}`, {
        method: "DELETE",
      });
      console.log("deleted successfully");
      router.push("/");
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className="border p-2 m-2">
      <h1>{hero?.madeUpName}</h1>
      <h2>Real Name : {hero?.realName}</h2>
      <button onClick={deleteHero}>Delete Hero</button>
      <Link href={`${hero._id}/edit`}>Edit Hero</Link>
    </div>
  );
};

export default EachHero;
