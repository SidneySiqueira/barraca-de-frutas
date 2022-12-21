import styled from 'styled-components'

export const Container = styled.div`
    width: 250px;
    height: 400px;
    margin: 50px auto;
    border: 2px solid #2eb5d6;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`
export const Image = styled.img`
    width: auto;
    height: 150px;
`
export const FruitName = styled.p`
    font-size: 25px;
    font-weight: bold;
    text-transform: uppercase;
    margin: 0;
`
export const Preço = styled.p`
   font-size: 35px;
    font-weight: bold;
    color: red;
    text-transform: uppercase;
    margin: 0;

`
export const Button = styled.button`
    height: 50px;
    font-size: 20px;
    border-radius: 5px;
    font-weight: bold;
    color: white;
    background-color: #2eb5d6;
    border: none;
    cursor: pointer;
`
export const ButtonOut = styled.button`
    height: 50px;
    font-size: 20px;
    border-radius: 5px;
    font-weight: bold;
    color: black;
    background-color: #717779;
    border: none;
`
