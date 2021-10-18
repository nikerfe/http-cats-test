import './Form.css';
import React from 'react';

function Form(props) {

    const [codeValue, setCodeValue] = React.useState('');

    const handleChangeCode = (e) => {
        setCodeValue(e.target.value);
        
    };

    const handleSubmitCode = (e) => {
        e.preventDefault();
        props.onShowImage(codeValue)
    }


    return (
        <div className="form">
           <form className="form__container" onSubmit={handleSubmitCode}>
          <input className="form__input" 
          onChange={handleChangeCode} 
          type="number" 
          min="0"
          placeholder="КОД" 
          required/>
          <p className="form__describe">Введите код состояния HTTP, чтобы посмотреть кота</p>
               <button className="form__button">Отправить код</button>
           </form>
            </div>
    );
}

export default Form