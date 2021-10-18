import React from 'react';
import './App.css';
import Header from './Header/Header'
import Form from './Form/Form'
import Image from './Image/Image'
import httpCodes from './utils/httpCode';


function App() {

  const [image, setImage] = React.useState('');
  const [message, setMessage] = React.useState('Здесь будет HTTP кот');
  const [colorHeader, setcolorHeader] = React.useState(false);


  const getCats = (code) => {
    setImage('');
    setMessage('');
    setcolorHeader(false);
    const httpCodesArray = Object.keys(httpCodes);
    const checkCodeStatus = httpCodesArray.some(function (item) {
      return item === code;
    });
  
    if (checkCodeStatus) {
      setImage(`https://http.cat/${code}.jpg`);
    }  else {
      setMessage('Такого кода не существует или мема с котом для него еще не придумали');
      setcolorHeader(true);
    }
  }

  return (
    <div className="App">
      <Header
        colorHeader={colorHeader} />
      <section className="App__section">
        <Form
          onShowImage={getCats} />
        <Image
          image={image}
          message={message} />
      </section>



    </div>
  );
}

export default App;
