import styled from 'styled-components';
import { styles } from 'ansi-colors';

export const Container = styled.div`
  padding: 10px 15px;
  background: #FFFFFF;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  height: 540px;
  width: 700px;
  margin: 60px auto;

  .header{
      height: 40px;
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      .logo{
          width: 70px;
      }

      .logo-name{
          width: 70px;
      }

      .icon-close{
        opacity: 0.57;
      }
  }

  .line{
    border: 1px solid #CACACA;
    width: 100%;
  }

  .sub-header{
    margin-top: 15px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    span{
        display: block;
        font-size: 12px;
        text-align: center;
        letter-spacing: 0.05em;
        width: 70%;
        color: #6D6D6D;
    }
  }

  .messages{
      width: 100%;
      height: 67%;
      margin-top: 30px;

      ul{
          width: 100%;
          padding: 0;
        
      }
  }

  .bottom{
    margin-top: 15px;
    width: 100%;
    .line{
        margin-bottom: 7px;
    }

    .actions{
        display: flex;
        flex-direction: row;
        align-items: center;
        .button{
            margin-left: 10px;
            border: none;
            height: 40px;
            width: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 20px;
            background: #85DEE7;
            box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
        }

        .input{
            width: 100%;
        }
    }
  }
`;


export const MessageItem = styled.li`
          width: 100%;
          padding: 0;
          margin-top: 15px;
          display: flex;
          flex-direction: column;
          align-items: ${({me}) => me ? 'flex-end' : 'flex-start'};
          span{
            font-style: normal;
            font-weight: bold;
            font-size: 13px;
            letter-spacing: 0.05em;

            color: #7DBF65;
            margin: 0 0 2px 4px;
          }

          div{
            background: ${({me}) => me ? 'rgba(133, 222, 231, 0.5)' : 'rgba(230, 230, 230, 0.5)'};
            border-radius: 10px;
            height: auto;
            width: 45%;
            padding: 5px 10px;
            word-wrap: break-word;
            font-weight: 50;

            line-height: 20px;
            letter-spacing: 0.05em;

            color: ${({me}) => me ? '#5F5F5F' : 'rgba(0, 0, 0, 0.61)'};
          }
`
