import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import firebase from "../../../firebase";
import { addPopularPosts } from "../../../Redux/effects";
import { ICocktail } from "../../../Redux/types/drink";
import { AppState } from "../../../Redux/store";
import ClipLoader from "react-spinners/ClipLoader";

const db = firebase.database();

const FormInput = styled.input`
  background: #ffffff;
  border: 2px solid #e1b8a0;
  box-sizing: border-box;
  height: 50px;
  position: relative;
  padding-left: 5%;
  width: 100%;
  margin-bottom: 20px;
  &:focus {
    outline: none;
    box-shadow: 0px 0px 2px #e1b8a0;
    border: 2px solid #000000;
  }
`;

const SelectInput = styled.select`
  background: #ffffff;
  border: 2px solid #e1b8a0;
  box-sizing: border-box;
  height: 50px;
  position: relative;
  padding-left: 5%;
  width: 100%;
  margin-bottom: 20px;
  &:focus {
    outline: none;
    box-shadow: 0px 0px 2px #e1b8a0;
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

const AddCocktail = () => {
  const [strDrink, setStrDrink] = useState("");
  const [strAlcoholic, setStrAlcoholic] = useState("");
  const [strDrinkThumb, setStrDrinkThumb] = useState("");
  const [loading, setLoading] = useState(false);

  const { cocktail } = useSelector(
    (state: AppState) => state.getPopularReducer
  );

  const dispatch = useDispatch();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    let myuuid = uuidv4();
    e.preventDefault();
    const newCocktailObj: ICocktail = {
      strDrink,
      strAlcoholic,
      strDrinkThumb,
      idDrink: myuuid,
    };
    dispatch(addPopularPosts(newCocktailObj));
    setLoading(false);
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <FormInput
          placeholder="Drink name"
          onChange={(e) => setStrDrink(e.target.value)}
          required
        />

        <SelectInput
          name="drink type"
          onChange={(e) => setStrAlcoholic(e.target.value)}
          required
        >
          <option value="alcoholic">Alcoholic</option>
          <option value="non-alcoholic">None-alcoholic</option>
        </SelectInput>

        <FormInput
          placeholder="URL link to the "
          onChange={(e) => setStrDrinkThumb(e.target.value)}
          required
        />
        {!loading ? (
          <SubmitButton>Submit </SubmitButton>
        ) : (
          <ClipLoader loading={loading} size={150}/>
        )}
      </form>
    </div>
  );
};

export default AddCocktail;
