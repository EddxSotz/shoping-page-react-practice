import { useRef, useEffect } from 'react';
export default function CartModal({ cartModalState, onClose, children }) {

  const modalRef = useRef();

 
useEffect(()=>{
  if(cartModalState){
    modalRef.current.showModal();
  }else {
    modalRef.current.close();
  }
}, [cartModalState])

  return (
    <dialog id="modal" ref={modalRef}>
      <div id="modal-content">
        <h2>Your Cart</h2>
        {children}              
        <button onClick={onClose} id="modal-close">Close</button>
      </div>         
    </dialog>    
  );
};

