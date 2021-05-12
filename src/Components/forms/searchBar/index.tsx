import React from "react";
import styled from 'styled-components'; 
import SearchImage from '../../../assets/search.png';



const SearchBar = ({onValueChange}: any)  => {
  const FormInput = styled.input`
    background: #ffffff;
    border: 2px solid #E1B8A0;
    box-sizing: border-box;
    height: 50px;
    position: relative;
    padding-left: 5%;
    width: 90%;
    &:focus {
      outline: none;
      box-shadow: 0px 0px 2px #E1B8A0;
      border: 2px solid #000000;
    }
  `;

  const SearchIcon = styled.img`
    margin-left: -10%;
    position: relative;
    height: 80%; 
  `;

  const Wrapper = styled.div`
    display: flex; 
    width: 100%;
    flex: 2
  `;
  return (
    <Wrapper>
      <FormInput
        placeholder="Search for your favorite drinks "
        onChange={onValueChange}
      />
      <SearchIcon src={SearchImage} />
    </Wrapper>
  );
}

export default  SearchBar;
