import React from 'react';
import './modal.scss';

function Modal(props) {
  return (
    <div className="Modal">
      {props.children}
      {
        props.btnActive &&
        <button
          onClick={props.handleClick}
          className="Modal-close"
        />
      }
    </div>
  )
}

export default Modal;