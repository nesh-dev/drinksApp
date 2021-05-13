import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";

import {
getCocktailDetailEffect
} from "../../Redux/effects/index";
import { AppState } from "../../Redux/store";
import Navbar from "../../Components/navbar";
import { ICocktail } from "../../Redux/types/drink";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 2%;
`;

const Wrapper = styled.div`
  display: flex;
  width: 50%;
  flex-direction: row;
  margin-top: 2%;
  flex-wrap: wrap;
  margin-right: 2%;
`;

const CardTitle = styled.div`
    fontsize: 36px; 
    margin-top: 2%; 
    font-weight: bold; 
`; 

interface ParamTypes {
  idDrink: string
}

export default function Home() {
  const dispatch = useDispatch();
  const  params = useParams<ParamTypes>();

  useEffect(() => {
    console.log("checking");
    dispatch(getCocktailDetailEffect(params?.idDrink));
  }, [dispatch, params?.idDrink]);

  const { cocktail, loading, error } = useSelector(
    (state: AppState) => state.getCocktailDetailReducer
  );
    

  console.log(cocktail, 'uasduasdi')

  return (
    <div>
      <Navbar />
      <Container>
        {
          cocktail  && (
            <div> 
            <img alt={cocktail?.strDrink} src={cocktail.strDrinkThumb}  width="100%" height="50%"/>
            <CardTitle> {cocktail.strDrink}</CardTitle>
            <CardTitle>Type: {cocktail.strAlcoholic}</CardTitle>
            </div>
          )
        }
      </Container>
   
    </div>
  );
}



