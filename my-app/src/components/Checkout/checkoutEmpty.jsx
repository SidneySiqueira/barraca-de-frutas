import React from 'react'
import * as S from "./style";

export default function CheckoutEmpty() {
  return (
    <S.Container>
    <S.Header>
      <a href="/">
        <S.Image src="https://mir-s3-cdn-cf.behance.net/projects/404/5b190e91667859.Y3JvcCw4NjAsNjczLDUxLDA.png" />
      </a>
    </S.Header>
    <S.Checkout>
        <S.BoxCarEmpty>
        <S.CarEmpty src='https://cdn-icons-png.flaticon.com/512/126/126510.png'></S.CarEmpty>
        <S.TextCarEmpty>Carrinho Vazio</S.TextCarEmpty>
        </S.BoxCarEmpty>
    </S.Checkout>
  </S.Container>
  )
}
