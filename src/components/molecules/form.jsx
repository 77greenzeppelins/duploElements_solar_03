import React, { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import {
  messageForSmartyOn,
  telephonInputLabel,
  emailInputLabel,
  telephonInputWarnings,
  emailInputWarnings,
} from '../../assets/dataForScreens';

//=============================================================
const validationSchema = yup.object().shape({
  telephon: yup.number().positive().integer(),
  email: yup.string(),
});

//{resolver: yupResolver(validationSchema)}
//=============================================================

let clientWidth = document.body.clientWidth;
let innerWidth = window.innerWidth;

console.log('clientWidth: ', clientWidth);
console.log('innerWidth: ', innerWidth);

//=============================================================

const Form = () => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const [messageForSmarty, setMessageForSmarty] = useState(false);

  const messageForSmartyBox = useRef(null);

  const onSubmit = data => {
    console.log('........data from <Form>:', data);
    //general/initial validation - passing empty <Form> is not allowed
    (data.telephon.length === 0) & (data.email.length === 0)
      ? setMessageForSmarty(true)
      : setMessageForSmarty(false);
    //as <Form> is not empty we can....
    if (errors) {
      console.log(
        `%c errors.telephon from onSubmit:`,
        'color:green',
        errors.telephon?.message
      );
    }
  };

  function onClick() {
    console.log('telephone was clicked...');
  }
  return (
    <div className="form-container">
      <div
        ref={messageForSmartyBox}
        className={
          messageForSmarty
            ? 'message-for-smarty--on'
            : 'message-for-smarty--off'
        }
      >
        <p>cwaniaki wysyłają puste wiadomości</p>
      </div>
      <form className="form-wrapper" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-input-box">
          <ul className="form-input-box__header">
            {telephonInputLabel.map(({ text, id }) => (
              <li key={id}>{text}</li>
            ))}
          </ul>
          <div className="form-input-box__input">
            <input
              name="telephon"
              autoComplete="off"
              type="text"
              placeholder="&nbsp;"
              ref={register}
              onClick={onClick}
            />
            <label>telefon</label>
          </div>

          {/* {console.log(
            `%cerrors.telephon:`,
            'color:green',
            errors.telephon?.message
          )} */}
        </div>

        <div className="form-input-box">
          <ul className="form-input-box__header">
            {emailInputLabel.map(({ text, id }) => (
              <li key={id}>{text}</li>
            ))}
          </ul>
          <div className="form-input-box__input">
            <input
              name="email"
              autoComplete="off"
              type="text"
              placeholder="&nbsp;"
              ref={register}
              /* {errors.email && console.log('error object of email:', errors.email)} */
            />
            <label>email</label>
          </div>
        </div>

        <div className="form-button-box">
          <button type="submit" className="form-button-box__button">
            Wyślij !
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;

/**
 * ======================================
    // console.log('data', data);
    // console.log('typeof(data)', typeof data);
    // console.log('data.email.length', data.email.length);
    // console.log('data.telephon.length:', data.telephon.length);
    // console.log('data.email.length:', data.email.length);
    // console.log('messageForSmarty 2:', messageForSmarty);
 * =====================================
 * 
 * 
 * 
 * function FormBody() {
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  });

  return (
    <div className="block">
      <input className="input" ref={inputRef}></input>
      <input className="input"></input>
    </div>
  );
}
 */
