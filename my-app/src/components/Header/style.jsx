import styled from "styled-components";

export const Container = styled.div`
  width: 1320px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Image = styled.img`
  height: 180px;
  padding: 15px;
`;
export const BoxSearch = styled.p`
  display: flex;
  align-items: center;
`;
export const Search = styled.p`
  font-size: 25px;
  font-weight: bold;
  color: white;
`;
export const InputSearch = styled.input`
  width: 300px;
  height: 25px;
  margin: 5px;
  padding: 5px;
`;
export const Login = styled.div`
  display: flex;
  align-items: center;
`;

export const InputLogin = styled.input`
  width: 150px;
  height: 30px;
  margin: 5px;
`;
export const Cart = styled.img`
  width: 30px;
  height: 30px;
  margin: 5px;
  padding: 3px;
  border: 1px solid black;
  border-radius: 50%;
  background-color: white;
`;
export const Welcome = styled.p`
  margin: 5px;
  font-size: 25px;
  font-weight: bold;
  text-transform: capitalize;
`;
export const Button = styled.button`
  height: 30px;
  background-color: #2eb5d6;
  color: white;
  text-transform: uppercase;
  border: 2px solid white;
  border-radius: 5px;
  cursor: pointer;
`;
