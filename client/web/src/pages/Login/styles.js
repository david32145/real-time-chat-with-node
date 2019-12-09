import styled from 'styled-components';

export const Container = styled.div`
  margin: 100px auto;
  width: 370px;
  height: 450px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  background: #FFFFFF;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  .container-logo{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 30px;
    .logo{
        width: 170px;
    }
    .logo-name{
        width: 150px;
        margin-top: 20px;
    }
  }
  .input-container{
    margin: auto 30px 50px;

    .button{
      border: none;
      height: 40px;
      border-radius: 20px;
      width: 100%;
      margin-top: 15px;
      background: #85DEE7;
      box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
      display: flex;
      align-items: center;
      justify-content: center;
      span{
        font-weight: 500;
        font-size: 15px;
        display: flex;
        letter-spacing: 0.05em;
        text-transform: uppercase;

        color: #FFFDFD;
      }
    }
  }

`;
