import styled from "styled-components";

export const Container = styled.div`
  width: 69.69%;
  margin: auto;
  background-color: #ffffff;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const StyledRegister = styled.div`
  margin: 100px auto;
  width: 50%;

  @media (max-width: 768px) {
    width: 75%;
  }
`;

export const H1 = styled.h1`
  text-align: center;
  font-size: 28px;
  line-height: 42px;
  font-weight: 400;
  color: #0c0d36;
`;

export const Form = styled.form`
  align-items: center;
  margin: auto;
  width: 100%;
`;

export const P = styled.p``;

export const Input = styled.input`
  padding-left: 10px;
  margin: 10px auto;
  width: 100%;
  min-height: 36px;
  border: 1px solid #29a867;
  border-radius: 6px;
`;

export const Button = styled.button`
  margin-left: 5px;
  margin-top: 10px;
  width: 100%;
  height: 35px;
  background-color: #29a867;
  color: #ffffff;
  text-align: center;
  border-radius: 12px;
  border: 0;
  cursor: pointer;

  :hover {
    border: 1px solid #29a867;
    background-color: #ffffff;
    color: #29a867;
  }

  @media screen and (max-width: 768px) {
    margin-left: 5px;
    margin-top: 10px;
    width: 100%;
    height: 35px;
    background-color: #29a867;
    color: #ffffff;
    text-align: center;
    border-radius: 12px;
    border: 0;
  }
`;
