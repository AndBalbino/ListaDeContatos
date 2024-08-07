import React from 'react'
import { Fade, ModalCard } from './styled';


interface Props  {
  children: React.ReactNode
}

const Modal = ({children}: Props) => {
  const closeModal = (e: React.MouseEvent): void => {
    const modal = document.querySelector("#modal")
    modal!.classList.add("hide")
  };


  return (
    <div id='modal' className='hide'>
        <Fade onClick={closeModal}></Fade>
        <ModalCard>
            {children}
        </ModalCard>
    </div>
  )
}

export default Modal