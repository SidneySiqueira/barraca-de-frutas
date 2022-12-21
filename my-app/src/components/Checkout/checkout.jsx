import React, { useEffect, useState } from "react";
import * as S from "./style";
import axios from "axios";

export default function Checkout() {
  const [choiceFruit, setChoiceFruit] = useState();

  const getValue = [...document.getElementsByClassName("Valor")]

  function somar() {
    let soma = 0
    for(let i in getValue) {
      soma += +getValue[i].innerHTML.slice(3, 8)
    }
    return soma
  }

  useEffect(()=>{
    somar()
  },[])

  const total = somar()

  const url =
    "https://api-de-frutas-default-rtdb.firebaseio.com/frutas/checkout.json";
  useEffect(() => {
    axios.get(url).then((response) => {
      console.log("response", response);
      setChoiceFruit(Object.entries(response.data));
    });
    return choiceFruit;
  }, []);

const values = choiceFruit?.filter(function (a) {
  return !this[JSON.stringify(a[1].nome)] && (this[JSON.stringify(a[1].nome)] = true);
}, Object.create(null))

const addQuantities = (dados, choice) => {
  values.map((item)=>{
  if (dados[0] === item[0]) {
    axios.patch(url, 
    {[`${dados[0]}`]:{
        img: `${dados[1].img}`,
        nome: `${dados[1].nome}`,
        qnte: `${choice}`,
        valor: `${dados[1].valor}`,}
      }
      ).then((res) => {
        document.location.reload(true);
      })
  } 
})
}

  const deleteItem = (dados) => {
      axios.delete(url,
    {
        img: `${dados.img}`,
        nome: `${dados.nome}`,
        valor: `${dados.valor}`
    }
    ).then((res) => {
        document.location.reload(true);
    })
  };

  console.log("values",values);

const sumFruits = values?.map((item)=>{
  return item[1].qnte
})

var totalFruits = 0;
for(var i = 0; i < sumFruits?.length; i++) {
  totalFruits += +sumFruits[i];
}

  return (
    <S.Container>
      <S.Header>
        <a href="/">
          <S.Image src="https://mir-s3-cdn-cf.behance.net/projects/404/5b190e91667859.Y3JvcCw4NjAsNjczLDUxLDA.png" />
        </a>
      </S.Header>
      <S.Checkout>
        <S.ProductsDescription>
          <S.Products>
            <S.Title>Carrinho de compras</S.Title>
            <S.Trash
              onClick={() => {
                deleteItem(choiceFruit);
              }}
            >
              Esvaziar lixeira
            </S.Trash>
          </S.Products>
          {values?.map((item) => {
            return (
              <S.LineProduct>
                <S.IconImage src={item[1].img} />
                <S.ProductName>{`- ${item[1].nome}`}</S.ProductName>
                <S.LineQtde>
                  <p>Qtde:</p>
                <S.Qntde type="number" max={9} min={1} value={item[1].qnte} onChange={(e)=> addQuantities(item, e.target.value)}/>
                </S.LineQtde>
              </S.LineProduct>
            );
          })}
        </S.ProductsDescription>
        <S.Prices>
          <S.Title>Valores</S.Title>
          {values?.map((item) => {
            return (
              <S.LineProduct>
                <S.ProductName className="Valor">{`R$ ${parseFloat(item[1].qnte*item[1].valor).toFixed(2)}`}</S.ProductName>
              </S.LineProduct>
            );
          })}
        </S.Prices>
      </S.Checkout>
      <S.Checkout>
        <S.ProductsTotal>
          <S.ProductName>{`Quantidade de itens: ${totalFruits}`}</S.ProductName>
          <div style={{display: "flex", alignItems: "center"}}>
          <S.LabelTotal>Total:</S.LabelTotal>
          <S.TotalValue>{`R$ ${parseFloat(total).toFixed(2)}`}</S.TotalValue>
          </div>
        </S.ProductsTotal>
      </S.Checkout>
    </S.Container>
  );
}
