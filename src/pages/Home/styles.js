import styled from 'styled-components';

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding-top: 50px;

  h3 {
    color: #ffffff;
    font-size: 42px;
    margin: 20px 0 0;
  }

  input {
    padding: 6px;
    border-radius: 5px;
    border: none;
    margin-top: 15px;
    box-shadow: 0px 0px 5px #fff;
  }
`;

export const Intro = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  background: #ffffff;
  width: 100%;

  .text {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;
    max-width: 700px;

    h2 {
      font-size: 42px;
      margin-bottom: 10px;
      color: #064ba5;
    }

    p {
      text-align: justify;
      font-size: 18px;
      font-weight: bold;
    }
  }

  img {
    width: 100%;
  }

  @media(min-width: 1200px) {
    flex-direction: row;
    justify-content: center;

    .text {
      padding: 30px;
      max-width: 450px;
    }

    img {
      max-width: 900px;
    }
  }
`;

export const Catalog = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 15px;

  p {
    font-size: 18px;
    padding: 10px;
    font-weight: bold;
    color: #ffffff;
  }

  @media(min-width: 765px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  padding: 25px;
  border-radius: 4px;
  margin: 10px 0 20px;
  width: 100%;
  max-width: 500px;
  max-height: 355px;
  box-shadow: 0px 0px 1rem #fff;
  color: #038ccf;
  font-weight: bold;

  @media(min-width: 765px) {
    max-width: 400px;
    margin-right: 15px;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 0 10px;

    img {
      width: 200px;
    }

    .info {
      display: flex;
      flex-direction: column;
      margin-top: 15px;


      span, a {
      font-size: 18px;
      margin: 0 0 8px;
      }

      a {
        color: #038ccf;

        &:hover {
          color:#551A8B;
          transition: 0.2s;
        }
      }
    }


  }
`;
