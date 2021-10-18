import './Header.css';

function Header(props) {
    return (
      
      <header  className={`header ${!props.colorHeader ? 'header_green' : 'header_red'}`}>
        <h1 className="header__title">HTTP КОТ</h1>
      </header>
    
    );
  }

  export default Header