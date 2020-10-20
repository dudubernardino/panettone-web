import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 140px;

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
  box-shadow: 0px 0px 1rem #fff;
  color: #038ccf;
  font-weight: bold;

  @media(min-width: 765px) {
    max-width: 900px;

    img {

    }
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 0 10px;

    @media(min-width: 765px) {
      flex-direction: row;
      justify-content: space-around;
    }

    img {
      width: 200px;
      pointer-events: none;
    }

    .info {
      display: flex;
      flex-direction: column;
      margin-top: 15px;


      span, a {
      font-size: 18px;
      margin: 0 0 8px;

        @media(min-width: 765px) {
          font-size: 20px;
        }
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

export const Table = styled.table`
  width: 250px;
  align-self: center;
  margin-top: 15px;

  td, th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
    border-collapse: collapse;
  }
`;
