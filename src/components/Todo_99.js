import React, { useState } from 'react';
import Modal_99 from './Modal_99';
import Backdrop_99 from './Backdrop_99';

function Todo_99(props) {
  const [showModal, setShowModal] = useState(false);

  function showModalHandler() {
    setShowModal(true);
  }
  function closeModalHandler() {
    setShowModal(false);
  }

  return (
    <div>
      <div className='card'>
        <h2>{props.text}</h2>
        <div className='actions'>
          <button className='btn' onClick={showModalHandler}>
            {props.text2}
          </button>
        </div>
      </div>
      {showModal && <Backdrop_99 onClose={closeModalHandler} />}
      {showModal && (
        <Modal_99 text='Are you sure?' onClose={closeModalHandler} />
      )}
    </div>
  );
}

export default Todo_99;
