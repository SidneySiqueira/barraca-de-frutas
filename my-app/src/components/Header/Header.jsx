import axios from "axios";
import React, { useEffect, useState } from "react";
import * as S from "./style";

export default function Header({
  setLogin,
  password,
  setPassword,
  validate,
  loginRegistered,
  SignIn,
  SignOut,
  setChoiceFruit,
}) {
  const [typing, setTyping] = useState();
  const [search, setSearch] = useState();   

  useEffect(() => {
    axios.get("https://api-de-frutas-default-rtdb.firebaseio.com/frutas.json").then((res) => {

      const filterFruits = res.data.lista.filter(item =>{
        return item !== null 
      })
      setChoiceFruit(filterFruits)
      setSearch(filterFruits)
    });
  }, []);

  useEffect(() => {
    const lowerBusca = typing?.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")
    setChoiceFruit(search?.filter((fruta) =>
      fruta.nome.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").includes(lowerBusca)
    ))
  }, [typing]);

  const defaultLogin = localStorage.getItem("Login");

  return (
    <S.Container>
      <S.Image src="https://mir-s3-cdn-cf.behance.net/projects/404/5b190e91667859.Y3JvcCw4NjAsNjczLDUxLDA.png" />
      <S.BoxSearch>
        <S.Search>Procurar Frutas</S.Search>
        <S.InputSearch
          onChange={(e) => setTyping(e.target.value)}
          placeholder="maça, banana, etc."
        />
      </S.BoxSearch>
      <div>
        <S.Login>
          {validate && <a href="/carrinho">
            <S.Cart src="https://cdn-icons-png.flaticon.com/512/126/126510.png" />
          </a>}
          {!validate  && (
            <S.InputLogin  
              onChange={(e) => setLogin(e.target.value)}
              placeholder="Login"
            />
          )}
          {!validate ? (
            <S.InputLogin type='password' defaultValue={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Senha"
            />
          ) : (
            <S.Welcome>Bem vindo "{loginRegistered}"</S.Welcome>
          )}
          {validate ? (
            <S.Button onClick={()=>{SignOut()}}>Log off</S.Button>
          ) : (
            <S.Button onClick={()=> {SignIn()}}>sign in</S.Button>
          )}
        </S.Login>
      </div>
    </S.Container>
  );
}
