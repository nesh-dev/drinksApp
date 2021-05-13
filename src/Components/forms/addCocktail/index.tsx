import React from 'react'; 
import styled from 'styled-components'; 

const FormInput = styled.input`
background: #ffffff;
border: 2px solid #E1B8A0;
box-sizing: border-box;
height: 50px;
position: relative;
padding-left: 5%;
width: 100%;
margin-bottom: 20px;
&:focus {
  outline: none;
  box-shadow: 0px 0px 2px #E1B8A0;
  border: 2px solid #000000;
}
`;

const SubmitButton = styled.button`
  background: #e1b8a0;
  height: 50px;
  flex: 0.5;
  color: #fff;
  padding-left: 5%;
  padding-right: 5%;
`;

 const  AddCocktail = ({ handleSubmit }: any)  => {
    return (
        <div>
            <form onSubmit={handleSubmit}> 
            <FormInput  placeholder="Drink name"/>

            <FormInput  placeholder="Type e.g alcholic or none-alcoholic"/>

            <FormInput type="file" />
        
            <SubmitButton> Submit </SubmitButton>

            </form>
        </div>
    )
}

export default AddCocktail;
