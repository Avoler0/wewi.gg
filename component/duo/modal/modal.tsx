import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import DuoInput from "./add/duoAdd";

type Props = {
  isShowing: boolean,
  hide: Function,
  method:'ADD' | 'DELETE'
}
function DuoModal({ isShowing, hide, method }:Props){
  function handler(event:any){
    event.stopPropagation(); 
    hide()
  }
  
  return(
    isShowing
    ? ReactDOM.createPortal(
        <>
          <Overlay onClick={handler} />
          <ModalLayOut>
            {method === 'ADD' && <DuoInput hide={hide} />}
            {method === 'DELETE' && <DuoInput hide={hide} />}
          </ModalLayOut>
        </>
        ,
        document.body
      ) : null
  )
}

export default DuoModal;

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
