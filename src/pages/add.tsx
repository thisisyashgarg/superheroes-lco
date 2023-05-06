import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";

type Form = {
  madeUpName: string;
  realName: string;
};

const addANewHero = () => {
  const [form, setForm] = useState<Form>({
    madeUpName: "",
    realName: "",
  });
  const router = useRouter();
  console.log(form);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    // submit the form to endpoint /api/hero
    try {
      await fetch(`${process.env.SERVER_URL}/api/hero`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      console.log("added to db successfully");
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
      <h1>Add a new superhero</h1>
      <form action="POST" onSubmit={handleSubmit}>
        <label htmlFor="madeUpName">MadeUp Name</label>
        <input
          type="text"
          name="madeUpName"
          id="madeUpName"
          onChange={handleChange}
          required
        />
        <label htmlFor="realName">Real Name</label>
        <input
          type="text"
          name="realName"
          id="realName"
          onChange={handleChange}
          required
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default addANewHero;
