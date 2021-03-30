import styled from "styled-components";


export const Card = styled.div`
  width: 85%;
  max-width: 85%
  min-height: 40px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 1.25rem rgba(31, 45, 61, 0.08);
  padding: 2em;
  margin-bottom: 10px;
  border-radius: 15px 50px;

  p {
    margin-top: 0px;
  }

  h3 {
    margin-bottom: 0px;
  }

  &:hover {
    box-shadow: 0 5px 15px rgba(0,0,0,0.3);
    transition: box-shadow 0.3s ease-in-out;
  }
`;


export const Card1 = styled.div`
  border-radius: 5px;
  outline: 2px solid grey;
  width: 85%;
  min-height: 8vh;
  height: fit-content;
  box-shadow: 0 0 1.25rem rgba(31, 45, 61, 0.08);
  padding: 2em;
  margin-bottom: 60px;

  p {
    margin-top: 0px;
  }

  &:hover {
    box-shadow: 0 5px 15px rgba(0,0,0,0.3);
    transition: box-shadow 0.3s ease-in-out;
  }
`;

export const Card2 = styled.div`
  width: 85%;
  min-height: 8vh;
  height: fit-content;
  box-shadow: 0 0 1.25rem rgba(31, 45, 61, 0.08);
  padding: 2em;
  margin-bottom: 60px;
  border-radius: 15px 50px;
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  flex-direction: column;

  p {
    margin-top: 0px;
  }

  &:hover {
    box-shadow: 0 5px 15px rgba(0,0,0,0.3);
    transition: box-shadow 0.3s ease-in-out;
  }
`;


export const Name = styled.h3`
  color: #555555;
  font-weight: 0 !important;
`;
export const Link = styled.a`
  color: rgba(31, 45, 61, 0.5);
`;

export const Description = styled.p`
  color: rgba(43, 46, 50, 0.85);
`;

export const Img = styled.img`
  width: 100%;
`;
