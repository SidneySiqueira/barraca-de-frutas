import React, { useEffect, useState } from "react";
import * as S from "../style";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";

export default function Home({validate, setValidate}) {
  const defaultLogin = sessionStorage.getItem("Login");
  const [login, setLogin] = useState();
  const [password, setPassword] = useState();
  const [alert, setAlert] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);
  const [choiceFruit, setChoiceFruit] = useState();

  const loginRegistered = "admin";
  const passwordRegistered = "admin1234";

  const SignIn = () => {
    if (login === loginRegistered && password === passwordRegistered) {
      setValidate(true);
      sessionStorage.setItem("Login", login);
      sessionStorage.setItem("password", password);
      sessionStorage.setItem("validate", true);
    } else {
      setAlert(true);
    }
  };

  const SignOut = () => {
    setValidate(false);
      sessionStorage.setItem("validate", false);
  };  

  return (
    <S.Container>
      {alert && (
        <S.Alert onClick={() => setAlert(false)}>
          <S.TextAlert>usuario ou senha incorretos</S.TextAlert>
          <S.ButtonAlert>tente novamente</S.ButtonAlert>
        </S.Alert>
      )}
      {addedToCart && (
        <S.Alert onClick={() => setAddedToCart(false)}>
          <S.TextAlert>item adicionado ao carrinho<br/><S.Span>Quantidade alterada somente no carrinho de compras</S.Span></S.TextAlert>
        </S.Alert>
      )}
      <S.Header>
        <Header
          SignIn={SignIn}
          SignOut={SignOut}
          login={login}
          setLogin={setLogin}
          password={password}
          setPassword={setPassword}
          validate={validate}
          loginRegistered={loginRegistered}
          setChoiceFruit={setChoiceFruit}
        />
      </S.Header>
      <Main validate={validate} setValidate={setValidate} setAddedToCart={setAddedToCart} choiceFruit={choiceFruit}/>
      <S.Footer>
        <Footer />
      </S.Footer>
    </S.Container>
  );
}
