import Image from "next/image";
import { format } from "date-fns";
import Header from "./header";
import { ptBR } from "date-fns/locale";
import Search from "./components/search";
import BookingItem from "../components/ui/booking-item";
import { db } from "../lib/prisma";
import { Key } from "react";
import FieldItem from "./components/field-item";

export default async function Home() {
  // chamar prisma e pegar os locais
  const fields = await db.field.findMany({});

  return (
    <div>
      <Header />
      <div className="px-5 pt-5 gap-2">
        <h2 className="text-xl font-bold">Eai Bruxo!</h2>
        <p className="capitalize text-sm">
          {format(new Date(), "EEEE',' dd 'de' MMMM", {
            locale: ptBR,
          })}
        </p>
      </div>

      <div className="px-5 mt-6">
        <Search />
      </div>

      <div className="px-5 mt-6">
        <h2 className="text-xs uppercase text-gray-400 mb-3">Agendamentos</h2>
        <BookingItem />
      </div>

      <div className="mt-6">
        <h2 className="px-5 text-xs uppercase text-gray-400 mb-3">Recomendados</h2>

        <div className="flex px-5 gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
          {fields.map((field) => {
            return <FieldItem field={field} key={field.id} />;
          })}
        </div>
      </div>

      <div className="mt-6 mb-[4.75rem]">
        <h2 className="px-5 text-xs uppercase text-gray-400 mb-3">Populares</h2>

        <div className="flex px-5 gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
          {fields.map((field) => {
            return <FieldItem field={field} key={field.id} />;
          })}
        </div>
      </div>
    </div>
  );
}
