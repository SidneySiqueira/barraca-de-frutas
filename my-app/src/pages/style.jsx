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
export const Alert = styled.div`
  position: fixed;
  font-size: 30px;
  font-weight: bold;
  color: black;
  text-transform: uppercase;
  width: 100%;
  height: 100vh;
  background-color: #ffffff8b;
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content: center;
  cursor: pointer;
`;
export const TextAlert = styled.p`
  font-size: 30px;
  font-weight: bold;
  padding: 50px;
  border-radius: 10px;
  background-color: white;
  color: black;
  border: 3px solid #2eb5d6;
  text-transform: uppercase;
`;

export const Span = styled.div`
  font-size: 15px;
  font-weight: bold;
  color: black;
  text-transform: uppercase;
  text-align: center;
`;
export const ButtonAlert = styled.p`
  font-size: 20px;
  font-weight: bold;
  border-radius: 10px;
  padding: 25px;
  border: 3px solid #2eb5d6;
  background-color: white;
  color: red;
  text-transform: uppercase;
  text-decoration: underline;
`;

export const Footer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #2eb5d6;
`;
