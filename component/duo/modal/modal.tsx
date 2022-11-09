import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import DuoInput from "./add";
function Modal({ isShowing, hide, message }){
  function handler(event:any){
    event.stopPropagation(); 
    console.log("버블링?")
    hide()
  }
  return(
    isShowing
    ? ReactDOM.createPortal(
        <>
          <Overlay onClick={handler} />
          <ModalLayOut>
            <DuoInput hide={hide} />
          </ModalLayOut>
        </>
        ,
        document.body
      ) : null
  )
}

export default Modal;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
  z-index: 0;
`;

const ModalLayOut = styled.div`
  
  z-index: 1;
`;
