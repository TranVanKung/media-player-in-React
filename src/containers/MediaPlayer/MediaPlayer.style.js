import styled from 'styled-components';

const MediaPlayerWrapper = styled.div`

  .main{
    display: flex;
    flex-direction: column;
    width: 100vw;
    opacity: 0.9;
    position: absolute;
    top:50%;
    left: 50%;
    transform: translate(-50%,-50%);
    position: fixed;
    box-shadow: 0px 0px 45px 4px rgba(0, 0, 0, 0.2), 0px 0px 55px 16px rgba(0, 0, 0, 0.19);
    background-image: linear-gradient(60deg, #3d3393 0%, #2b76b9 37%, #2cacd1 65%, #35eb93 100%);

    .main__title  {
      text-align: center;
      font-family: monospace;
      font-size: 0.7rem;
      color: white;
    }

    .main__player{
      color:#333;
      padding-bottom: 1rem;
      display: flex;
      flex-direction: row;
      position: relative;

      .select-options {
        position: absolute;
        top:50%;
        left: 25%;
        transform: translate(-50%,-50%);
        width: 20vw;
        padding: 0 50px;

        .select-dropdown {
          width: 100%;
          position: relative;
          top:50%;
          left: 50%;
          transform: translate(-50%,-50%);
          padding: 10px 70px 10px 13px !important;
          height: auto !important;
          background-image: linear-gradient(15deg, #3d3393 0%, #2b76b9 37%, #2cacd1 65%, #35eb93 100%);
          border: 1px solid #e3e3e3;
          border-radius: 3px;
          font-size: 1.1rem;
          line-height: 1.2rem !important;
          color: white;

          option {
             padding: 0 4px;
             color: white;
          }


        }
      }

      .buttons {
        height: 50px;
        width: 30%;
        margin-top: 2rem;
        position:relative;
        top:10%;
        left: 50%;
        transform: translate(-50%,-50%);

        .buttons__play, .buttons__next, .buttons__pre{
          width: 3rem;
          height: 3rem;
          border: 0;
          background-color: #001f3f;
          border-radius: 50%;
          outline: none;
          cursor: pointer;
          position: absolute;

          top:50%;
          left: 50%;
          transform: translate(-50%,-50%);

          :hover {
            box-shadow: 0px 0px 40px 2px rgba(255, 255, 255, .1), 0px 0px 20px 10px rgba(0.9, 255, 255, .15);
          }
        }

        .buttons__play {
          width: 3.5rem;
          height: 3.5rem;
          box-shadow: 0px 0px 40px 2px rgba(0, 0, 0, 0.2), 0px 0px 20px 10px rgba(0, 0, 0, 0.19);


          img {
            position: absolute;
            top:50%;
            left: 50%;
            transform: translate(-50%,-50%);
          }
        }

        .buttons__next {
          width: 2.5rem;
          height: 2.5rem;
          left: 70%;
          box-shadow: 0px 0px 50px 1px rgba(0, 0, 0, 0.2), 0px 0px 20px 5px rgba(0, 0, 0, 0.19);


          img {
            position: absolute;
            top:50%;
            left: 50%;
            transform: translate(-50%,-50%);
          }
        }

        .buttons__pre {
          width: 2.5rem;
          height: 2.5rem;
          left: 30%;
          box-shadow: 0px 0px 50px 1px rgba(0, 0, 0, 0.2), 0px 0px 20px 5px rgba(0, 0, 0, 0.19);


          img {
            position: absolute;
            top:50%;
            left: 50%;
            transform: translate(-50%,-50%);
          }
        }
      }

      .time-bar {
        display: flex;
        position: absolute;
        align-items: center;
        margin-left: 5vw;
        top:50%;
        left: 75%;
        transform: translate(-50%,-50%);

        .bar {
          width: 25vw;
          height: 5px;
          background-color:white;
          display: flex;
          border-radius: 3rem;
          cursor: pointer;

          #bar__fill {
            height: 5px;
            background-color:#001f3f;
            border-radius: 1.3rem;
          }

          .bar__handle {
            align-self: center;
            width: 8px;
            height: 8px;
            background-color:#3d3393;
            border-radius: 50%;
            margin-left: -5px;
            transform: scale(2);
          }
        }

        #time {
        margin-left: 0.8rem;
        font-family: monospace;
        font-size: 1rem;
        font-weight: bold;
        color: white;
        }
      }
    }
  }

`;

export { MediaPlayerWrapper };
