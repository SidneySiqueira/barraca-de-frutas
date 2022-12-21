import * as S from "./style";
import axios from "axios";
import { useEffect, useState } from "react";

export default function CardFruit({validate, setValidate, setAddedToCart, choiceFruit}) {
  const url = "https://api-de-frutas-default-rtdb.firebaseio.com/frutas/checkout.json"

    const addCheckout = (dados) => {
          axios.post(url, 
        {
            img: `${dados.img}`,
            nome: `${dados.nome}`,
            valor: `${dados.valor}`,
            qnte: `${dados.qtde}`,
        }
        ).then((res) => {
           console.log("res", res)
        })
      }
    
  return (
    <>
      {choiceFruit?.map((item) => {
        return (
          <S.Container>
            <S.Image src={item.img} />
            <S.FruitName>{item.nome}</S.FruitName>
            <S.Preço>{`R$${item.valor}`}</S.Preço>
            {validate ?(
              <S.Button onClick={() => {
                addCheckout(item);
                setAddedToCart(true);
              }}>Adicionar ao carrinho</S.Button>) :
            (<S.ButtonOut>Faça o Login</S.ButtonOut>)}
          </S.Container>
        );
      })}
    </>
  );
}
