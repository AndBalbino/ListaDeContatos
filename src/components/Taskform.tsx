import React from 'react'

type Props = {
  btnText: string
}

const Taskform = ({btnText}: Props) => {
  return (
    <form>
      <div>
        <label htmlFor='title'>
        Nome: 
        </label>
        <input type="text" name='title' placeholder='Nome do contato' />
      </div>
      <div>
        <label htmlFor='numero'>
        Numero:
        </label>
        <input type="text" name='numero' placeholder='Número do contato' />
      </div>
      <input type="submit" value={btnText}/>
    </form>
  )
}

export default Taskform