import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Navbar from "../../Components/navbar";
import { useDispatch, useSelector } from "react-redux";
import { getCocktails } from "../../Redux/effects/index";
import { AppState } from "../../Redux/store";

const NavWrapper = styled.div`
  width: 100%;
`;
export default function Home() {
  const dispatch = useDispatch()
  useEffect(() => {
    console.log('checking')
    dispatch(getCocktails())
  }, [dispatch]);
  const cocktails = useSelector((state: AppState) => state.getCocktailReducer.cocktails);
  console.log(cocktails, '>>>>>>')
  return (
    <NavWrapper>
      <Navbar />
    </NavWrapper>
  );
}
