import React from 'react';
import styled from 'styled-components';

const Header = styled.div `
    background-color: #457667;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 60px;
`
const Item = styled.div `
    font-size: 16px;
    font-family: 'Read';
    font-weight: bold;
    color: #F8F9F9 ;  
    padding: 10px; 
`
export default function header() {
  return (
      <Header>
          <Item>Home</Item>
          <Item>Contato</Item>
          <Item>Sobre</Item>
      </Header>
    );
}

