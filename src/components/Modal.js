import React from 'react';
import { useDispatch } from 'react-redux';
import { clearCart } from '../features/cart/cartSlice';
import { closeModal } from '../features/modal/modalSlice';

const Modal = () => {
  const dispatch = useDispatch();
  return (
    <aside className='modal-container'>
      <div className='modal'>
        <h4>Do you want to revove your shopping cart ? </h4>
        <div className='btn-container'>
          <button
            type='button'
            className='btn confirm-btn'
            onClick={() => {
              dispatch(clearCart());
              dispatch(closeModal());
            }}
          >
            Yes
          </button>
          <button
            type='button'
            className='btn cancel-btn'
            onClick={() => {
              dispatch(closeModal());
            }}
          >
            No
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Modal;
