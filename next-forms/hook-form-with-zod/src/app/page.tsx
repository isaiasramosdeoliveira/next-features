"use client";
import { useForm } from "react-hook-form";
export default function Home() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const handleFormSubmit = (data: any) => {
    // console.log(data)
  };
  return (
    <main className="gap-6 flex flex-col justify-center items-center h-screen">
      <h2 className="text-3xl mb-4 text-white">Form Example</h2>
      <form
        className="bg-slate-600 w-[420px] py-10 rounded-lg gap-5 flex flex-col justify-center items-center"
        action=""
        onSubmit={handleSubmit(handleFormSubmit)}
      >
        <input
          className="p-2 min-w-[280px] rounded-lg"
          type="text"
          {...register("zipCode")}
          placeholder="CEP"
          maxLength={9}
        />

        <input
          className="p-2 min-w-[280px] rounded-lg"
          type="text"
          {...register("street")}
          placeholder="Rua"
        />

        <input
          className="p-2 min-w-[280px] rounded-lg"
          type="text"
          {...register("district")}
          placeholder="Bairro"
        />

        <input
          className="p-2 min-w-[280px] rounded-lg"
          type="text"
          {...register("complement")}
          placeholder="Complemento"
        />

        <input
          className="p-2 min-w-[280px] rounded-lg"
          type="text"
          {...register("city")}
          placeholder="Cidade"
        />

        <input
          className="p-2 min-w-[280px] rounded-lg"
          type="text"
          {...register("state")}
          placeholder="Estado"
        />

        <button
          type="submit"
          className="bg-slate-700 p-2 min-w-[280px] rounded-lg hover:bg-slate-500 transition-all"
        >
          Enviar
        </button>
      </form>
    </main>
  );
}
