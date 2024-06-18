import { Link } from "react-router-dom";

export function Blank() {
  return (
    <main className='flex-1 flex items-center justify-center text-base-400'>
      Selecione ou crie um documento.
      <br/>
      <Link to='/document'> Acessar document</Link>
    </main>
  )
}