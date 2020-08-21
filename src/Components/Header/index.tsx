import React from 'react';
import { Navbar, DropdownButton, Dropdown } from 'react-bootstrap';
import './styles.css'
import { useSelected, useInputFilter } from '../../Context/ContextMain';
import { Input } from 'semantic-ui-react'
const imageLOGO = require('../../Assets/pague.png');
const Header: React.FC = () => {
  const { selected, setSelected } = useSelected();
  const { setInputFilter } = useInputFilter();
  return (
    <>
      <div className='header' />
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>
          <img
            alt=""
            src={imageLOGO}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{'   '}

       ESTOQUE
    </Navbar.Brand>
        <div className='barSpace'>
          <DropdownButton id="dropdown-basic-button" title={selected}>
            <Dropdown.Item onClick={() => setSelected('Maracanã')}>Maracanã</Dropdown.Item>
            <Dropdown.Item onClick={() => setSelected('Leblon')} >Leblon</Dropdown.Item>
            <Dropdown.Item onClick={() => setSelected('Getúlio')} >Getúlio</Dropdown.Item>
            <Dropdown.Item onClick={() => setSelected('Centro de Distribuição')} >Centro de Distribuição</Dropdown.Item>
          </DropdownButton>

          <Input onChange={(e) => setInputFilter(e.target.value)} placeholder='Dias...' />
        </div>
      </Navbar>
      <hr className='hr' />
    </>
  )
}


export default Header;

