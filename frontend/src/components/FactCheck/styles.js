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
  border-radius: 15px;
  background-color: #eeeeee;

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


export const Title = styled.h3`
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
