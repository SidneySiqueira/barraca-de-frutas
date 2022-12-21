import React from 'react'
import CardFruit from '../CardFruit/CardFruit';
import * as S from "./style";

export default function Main({validate, setValidate, setAddedToCart, choiceFruit, setChoiceFruit}) {
  return (
    <S.Container>
        <CardFruit validate={validate} setValidate={setValidate} setAddedToCart={setAddedToCart} choiceFruit={choiceFruit} setChoiceFruit={setChoiceFruit}/>
    </S.Container>
  )
}
