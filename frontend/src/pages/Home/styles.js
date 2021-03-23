import styled from 'styled-components'

export const MetaContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

`

export const MediumContainer = styled.div`
  max-width: 1024px;
  position: relative;
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  justify-content: center;
  align-content: center;
  justify-items: center;
  align-items: center;
  padding: 60px 20px;
`

export const AboutDescription = styled.div`
  position: relative;
  display: grid;
  width: 100%;
  backgroundcolor: "green";
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  justify-content: center;
  align-content: center;
  padding: 100px 0px;
`

export const Header1 = styled.h1`
    color: #4f5d75;
`

export const Details = styled.p`
    margin: 2rem 0;
    color: rgba(43,46,50,.85);
    line-height: 1.5715;
    text-align: center;
`

export const HeaderImage = styled.img`
  width: 100%;
  max-width: 400px;
  height: auto;
  align-self: center;
  justify-self: center;
  padding: 20px;
`

export const Button = styled.button`
    padding: 8px 20px;
    border-radius: 4px;
    background-color: #9467BD;
    border: none;
    color: #ffffff;
    font-size: 16px;
    box-shadow: 0 2px 0 rgba(0,0,0,.045);
    height: 45px;
    font-weight: 600;
    margin-left: 20px;
    margin-bottom: 10px;

    & a{
      text-decoration: none;
      color: #ffffff;
    }
  `

  export const Container = styled.div`
      width: 90%;
      margin: auto;
      justify-content: center;
      align-items: center;
      margin-bottom: 20px;
      display: flex;
  `

  export const Container2 = styled.div`
      width: 90%;
      min-width: 85%;
      margin: auto;
      margin-bottom: 20px;
      padding: auto;
      justify-content: center;
  `

  export const Input = styled.input`
    width: 70%;
    margin-bottom: 10px;
    background-color: #fff;
    padding: 0.75rem 0 0.75rem 1rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #8492a6;
    transition: 0.2s;
    box-shadow: none;
    border: 1px solid #e0e6ed;
    border-radius: 0.25rem;
    font-family: 'Inter', sans-serif;


    &:focus {
      outline: 0;
      border-color: #9467BD;
      box-shadow: 0 0 1.25rem rgba(31, 45, 61, 0.08);
    }
  `;
