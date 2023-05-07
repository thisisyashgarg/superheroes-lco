import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import { Form, Hero } from "@/types";

// get the hero data with the id from the url
export async function getServerSideProps({
  params,
}: {
  params: { id: string };
}) {
  const id = params.id;
  const res = await fetch(`${process.env.SERVER_URL}/api/hero/${id}`);
  const { data }: { data: Hero } = await res.json();
  return {
    props: {
      hero: data,
    },
  };
}

// edit the hero data with the id from the url
const EditHero = ({ hero }: { hero: Hero }) => {
  const router = useRouter();
  const [form, setForm] = useState<Form>({
    madeUpName: hero?.madeUpName,
    realName: hero?.realName,
  });

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    try {
      await fetch(`${process.env.SERVER_URL}/api/hero/${hero?._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      console.log("edited successfully");
      router.push("/");
    } catch (error) {
      console.error(error);
    }
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setForm((prev: Form) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  }

  return (
    <div>
      <h1>Edit {hero?.madeUpName}</h1>
      <form action="PUT" onSubmit={handleSubmit}>
        <label htmlFor="madeUpName">MadeUp Name</label>
        <input
          type="text"
          name="madeUpName"
          id="madeUpName"
          onChange={handleChange}
          value={form?.madeUpName}
          required
        />
        <label htmlFor="realName">Real Name</label>
        <input
          type="text"
          name="realName"
          id="realName"
          onChange={handleChange}
          value={form?.realName}
          required
        />
        <button type="submit">Edit</button>
      </form>
    </div>
  );
};

export default EditHero;
