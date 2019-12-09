import styled from 'styled-components';

export const Container = styled.div`
  background: #FFFFFF;
  border: 1.5px solid #B3ED7A;
  border-radius: 20px;
  height: 40px;
  width: 100%;
  display: flex;
  align-items: center;
  .icon{
      margin-left: 7px;
      
  }
  input{
    border: none;
    font-style: normal;
    font-size: 15px;
    display: flex;
    letter-spacing: 0.05em;
    margin: ${(props) => props.icon ? `0 17px 0 10px` : `0 17px 0 17px`};
    width: 100%;
    color: rgba(180, 180, 180, 0.9);
  }

  input::placeholder{
    color: rgba(180, 180, 180, 0.9)
  }
`;
