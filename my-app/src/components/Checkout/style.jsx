import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #2eb5d6;
`;
export const Image = styled.img`
  height: 180px;
  padding: 15px;
`;
export const Checkout = styled.div`
  width: 1320px;
  display: flex;
  justify-content: space-between;
`;
export const Title = styled.h1`
  margin-left: 30px;
`;
export const LineQtde = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
`;
export const Qntde = styled.input`
  width: 30px;
  height: 15px;
`;

export const ProductsDescription = styled.div`
  width: 65%;
  margin-top: 20px;
  margin-right: 5%;
  padding: 5px;
  border: 2px solid #2eb5d6;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`;
export const ProductsTotal = styled.div`
  width: 100%;
  margin-top: 20px;
  padding: 5px;
  border: 2px solid #2eb5d6;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
`;
export const LineProduct = styled.div`
  display: flex;
  align-items: center;
  border-top: 1px solid #2eb5d6;
  margin-left: 100px;
  margin-right: 100px;
  justify-content: space-between;
`;
export const Products = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-right: 30px;
`;
export const Trash = styled.p`
  color: red;
  cursor: pointer;
`;
export const IconImage = styled.img`
  width: 50px;
  height: 50px;
  margin: 10px;
`;
export const ProductName = styled.p`
  display: flex;
  align-items: center;
  margin-left: 30px;
  margin-right: 50px;
  font-size: 25px;
  text-transform: capitalize;
`;
export const LabelTotal = styled.p`
  margin-right: 30px;
  font-size: 30px;
  font-weight: bold;
  text-transform: capitalize;
`;
export const TotalValue = styled.p`
  font-size: 30px;
  margin-right: 30px;
  font-weight: bold;
`;
export const Prices = styled.div`
  width: 30%;
  margin-top: 20px;
  padding: 5px;
  border: 2px solid #2eb5d6;
  border-radius: 10px;
`;

export const Footer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #2eb5d6;
`;

export const BoxCarEmpty = styled.div`
  width: 1320px;
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  padding:50px;
`;
export const CarEmpty = styled.img`
  width: 300px;
  padding: 20px;
  background-color: #2eb5d6;
  border: 2px solid black;
  border-radius: 10px;
`;
export const TextCarEmpty = styled.h1`
  font-size: 50px;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
`;