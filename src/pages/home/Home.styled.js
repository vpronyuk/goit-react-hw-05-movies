import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  overflow: hidden;
  border-right: 0.15em solid red;
  white-space: nowrap;
  letter-spacing: 0.15em;
  animation: typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite;

  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }

  @keyframes blink-caret {
    from,
    to {
      border-color: transparent;
    }
    50% {
      border-color: red;
    }
  }
`;

// export const Title = styled.h1`
//   font-size: 3rem;
//   text-transform: uppercase;
//   color: darkblue;
//   position: relative;
//   text-align: center;
//   text-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);
//   perspective: 1000px;
//   transform-style: preserve-3d;

//   &:before {
//     content: attr(data-title);
//     position: absolute;
//     left: -2px;
//     top: -2px;
//     color: #000;
//     text-shadow: none;
//     transform: rotateY(0deg) translateZ(-1px);
//   }

//   &:after {
//     content: attr(data-title);
//     position: absolute;
//     left: 2px;
//     top: 2px;
//     color: rgba(255, 255, 255, 0.3);
//     text-shadow: none;
//     transform: rotateY(0deg) translateZ(-1px);
//   }

//   &:hover:before {
//     transform: rotateY(180deg) translateZ(-1px);
//   }

//   &:hover:after {
//     transform: rotateY(180deg) translateZ(-1px);
//   }
// `;

export const ErrorMessage = styled.div`
  font-size: 18px;
  color: red;
  text-align: center;
`;

export const LoadingMessage = styled.div`
  font-size: 18px;
  color: grey;
  text-align: center;
`;
