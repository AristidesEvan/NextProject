import { Circle } from "@/components/Circle";
import { GeoForm } from "@/components/GeoForm";
import { Person } from "@/components/Person";
import { Square } from "@/components/Square";
import { Card } from "@/components/card";

function Page() {
  return (
    <>
      <h1 className="font-bold text-2xl">Olá, mundo!</h1>
      <h3>Algum outro texto!</h3>

        <Card>
          <>
            <h1 className="font-bold text-3xl italic">"Frase de muitooo efeito!"</h1>
            <div className="text-right text-stone-400">- Autor da frase.</div>
          </>
        </Card>

      {
      /* <GeoForm/>
      <Square/>
      <Circle/> */
      }

      {
      /* <Person 
        name="joão"
        avatar="https://img.freepik.com/fotos-gratis/homem-bonito_144627-14183.jpg?t=st=1723042125~exp=1723045725~hmac=9a7c3b596f7ff4d9a803379af87f45a09e71e38cf964200e727c5077138d9b37&w=360"
        roles={["Um cara legal", "Um cara..."]}
      />

      <Person 
        name="joão 2"
        avatar="https://img.freepik.com/fotos-gratis/homem-bonito_144627-14183.jpg?t=st=1723042125~exp=1723045725~hmac=9a7c3b596f7ff4d9a803379af87f45a09e71e38cf964200e727c5077138d9b37&w=360"
        roles={["O irmão do cara legal", "Um cara tmb..."]}
      />

      <Person 
        roles={["É um cara legal?", "Um cara???"]}
      /> */
      }

    </>
  )
}

export default Page;