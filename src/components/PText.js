import React from 'react';
import styled from 'styled-components';

const PStyle = styled.div`
  max-width: 500px;
  margin-left : 0rem;
  font-size: 1.7rem;
  line-height: 1.3em;
  
  
  @media only screen and (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

export default function PText({ children }) {
  return (
    <PStyle className="para ">
      <p>{children}</p>
    </PStyle>
  );
}