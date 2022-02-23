import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ButtonStyle = styled.div`
  margin-top: 2rem;
  .button {
    font-size: 14px;
    text-align: center;
    align-items: right;
    background-color: ${(props) =>
    props.outline ? '#1f2235' : 'yellow'};
    padding: 14px 0;
    width: 160px;
    border: 2px solid wheat;
    text-decoration: none;
    font-family: "Poppins SemiBold";
    border-radius: 50px;
    display: inline-block;
    color: ${(props) => (props.outline ? 'var(--white)' : 'black')};
    cursor: pointer;
  transition: 0.2s;
  }
  @media only screen and (max-width: 768px) {
    .button {
      font-size: 10px;
    }
  }
`;

export default function Button({
  btnText = 'test',
  btnLink = 'test',
  outline = false,
}) {
  return (
    <ButtonStyle outline={outline} className="button-wrapper">
      <Link className="button" to={btnLink}>
        {btnText}
      </Link>
    </ButtonStyle>
  );
}