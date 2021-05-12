import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Navbar from "../../Components/navbar";
import { useDispatch, useSelector } from "react-redux";
import { getCocktails } from "../../Redux/effects/index";
import { AppState } from "../../Redux/store";
import SearchBar from "../../Components/forms/searchBar";
import DrinkCard from "../../Components/drinkCard";
import ShuffleImg from "../../assets/shuffle.png";
import addImg from "../../assets/add.png";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Wrapper = styled.div`
  display: flex;
  width: 50%;
  flex-direction: row;
  margin-top: 2%;
`;

const CardWrapper = styled.div`
  margin-top: 5%;
  width: 30%;
`;

const RandomButton = styled.button`
  background: #ffffff;
  border: 1px solid #e1b8a0;
  box-sizing: border-box;
  height: 50px;
  flex: 0.5;
  margin-right: 2%;
`;
const AddButton = styled.button`
  background: #e1b8a0;
  height: 50px;
  flex: 0.5;
  margin-left: 2%;
`;

const ImageIcon = styled.img`
  margin-left: -10%;
  margin-bottom: -2%;
  position: relative;
`;

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("checking");
    dispatch(getCocktails());
  }, [dispatch]);

  const { cocktails, loading, error } = useSelector(
    (state: AppState) => state.getCocktailReducer
  );

  const onValueChange = async (e: React.FormEvent<HTMLInputElement>) => {};
  if (loading) return <div>loading....</div>;
  return (
    <div>
      <Navbar />
      <Container>
        <Wrapper>
          <SearchBar onValueChange={onValueChange} />

          <RandomButton>
            <ImageIcon src={ShuffleImg} />
          </RandomButton>

          <AddButton>
            <ImageIcon src={addImg} />
          </AddButton>
        </Wrapper>

        <Wrapper>
          {cocktails?.map((drink, index) => (
            <CardWrapper>
              <DrinkCard
                key={index}
                idDrink={drink.idDrink}
                strAlcoholic={drink.strAlcoholic}
                strDrinkThumb={drink.strDrinkThumb}
                strDrink={drink.strDrink}
              />
            </CardWrapper>
          ))}
        </Wrapper>
      </Container>
    </div>
  );
}
