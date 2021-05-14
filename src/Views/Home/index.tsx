import React, { useState, useEffect } from "react";
import styled from "styled-components";
import _ from "lodash";
import { useDispatch, useSelector } from "react-redux";
import {
  getCocktails,
  searchCocktailsEffect,
  getRandomObjectEffect,
  getPopularPosts,
} from "../../Redux/effects/index";
import { AppState } from "../../Redux/store";
import SearchBar from "../../Components/forms/searchBar";
import DrinkCard from "../../Components/drinkCard";
import ShuffleImg from "../../assets/shuffle.png";
import addImg from "../../assets/add.png";
import Navbar from "../../Components/navbar";
import Modal from "../../Components/Modal";
import AddCocktail from "../../Components/forms/addCocktail";
import { ICocktail } from "../../Redux/types/drink";

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
  margin-top: 1%;
  flex-wrap: wrap;
  margin-right: 2%;
`;

const CardWrapper = styled.div`
  margin-top: 5%;
  width: 30%;
  flex-direction: row;
  margin-right: 3%;
`;

const RandomButton = styled.button`
  background: #ffffff;
  border: 1px solid #e1b8a0;
  box-sizing: border-box;
  height: 50px;
  flex: 0.5;
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

const Title = styled.h2`
  color: #e1b8a0;
  margin-top: 2%;
`;

export default function Home() {
  const dispatch = useDispatch();

  const { cocktails, loading, error } = useSelector(
    (state: AppState) => state.getCocktailReducer
  );
  const [drinksToDisplay, setDrinksToDisplay] =
    useState<ICocktail[] | undefined>();

  const [showModal, setShowModal] = useState(false);

  const { cocktails: searchedCocktails } = useSelector(
    (state: AppState) => state.searchCocktailReducer
  );

  const { cocktails: randomCocktail } = useSelector(
    (state: AppState) => state.getCocktailItemReducer
  );

  const { cocktails: customCocktails, cocktail } = useSelector(
    (state: AppState) => state.getPopularReducer
  );

  useEffect(() => {
    dispatch(getCocktails());
    dispatch(getPopularPosts());
    const handlePost = () => {
      if (cocktail) {
        closeModal();
      }
    };
    handlePost();
  }, [dispatch, cocktail]);

  const handleSearch = (value: string) => {
    dispatch(searchCocktailsEffect(value));
  };

  const onValueChange = (e: React.FormEvent<HTMLInputElement>) => {
    // e.preventDefault()
    // _.debounce(handleSearch)(e.currentTarget.value)
  };

  const handleRefresh = () => {
    setDrinksToDisplay([]);
  };

  const handleRandom = (e: React.FormEvent<HTMLButtonElement>) => {
    dispatch(getRandomObjectEffect());
    setDrinksToDisplay(randomCocktail);
    _.debounce(handleRefresh, 400);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleEsc = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Escape") {
      setShowModal(false);
    }
  };
  if (loading) return <div>loading....</div>;

  return (
    <div>
      <Navbar />
      <Container>
        <Wrapper>
          <SearchBar onValueChange={onValueChange} />

          <RandomButton onClick={handleRandom}>
            <ImageIcon src={ShuffleImg} />
          </RandomButton>

          <AddButton onClick={() => setShowModal(true)}>
            <ImageIcon src={addImg} />
          </AddButton>
        </Wrapper>
        <Title>Popular Drinks</Title>
        <Wrapper>
          {drinksToDisplay && drinksToDisplay.length > 0
            ? drinksToDisplay?.map((drink, index) => (
                <CardWrapper>
                  <DrinkCard
                    key={index}
                    idDrink={drink.idDrink}
                    strAlcoholic={drink.strAlcoholic}
                    strDrinkThumb={drink.strDrinkThumb}
                    strDrink={drink.strDrink}
                  />
                </CardWrapper>
              ))
            : cocktails?.map((drink, index) => (
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
        <Title>Custom Drinks</Title>
        <Wrapper>
          {customCocktails?.map((drink, index) => (
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
      {showModal && (
        <Modal
          showModal={showModal}
          closeModal={closeModal}
          title={"Add Cocktail"}
          handleEsc={handleEsc}
        >
          <AddCocktail />
        </Modal>
      )}
    </div>
  );
}
