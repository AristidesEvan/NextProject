import Circle from "@/components/Circle";
import { GeoForm } from "@/components/GeoForm";
import Square from "@/components/Square";

function Page() {
  return (
    <>
      <h1 className="font-bold text-2xl">Olá, mundo!</h1>
      <h3>Algum outro texto!</h3>

      <GeoForm/>
      <Square/>
      <Circle/>
    </>
  )
}

export default Page;