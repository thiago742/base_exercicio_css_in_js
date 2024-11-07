import { FormEvent, useState } from 'react'

import { BtnEstilizado, CampoEstilizado, FormEstilizado } from './styles'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <FormEstilizado onSubmit={aoEnviarForm}>
      <CampoEstilizado
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
      <BtnEstilizado type="submit">Pesquisar</BtnEstilizado>
    </FormEstilizado>
  )
}
export default FormVagas
