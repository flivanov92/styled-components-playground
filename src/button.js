import styled, { css } from 'styled-components';

const getButtonType = ({ type }) => type || 'button';

const getAttribute = ({ type }) => ({
  type: getButtonType({ type }),
});

const getSpecialStyles = ({ type }) =>
  type === 'submit' &&
  css`
    ${SubmitButtonStyle}
  `;

const DefaultStyle = css`
  background: blue;
  border: none;
  color: white;
  padding: 0.25rem;
  cursor: pointer;
`;

const SubmitButtonStyle = css`
  display: block;
  margin-top: 1rem;
  border-radius: 0.25rem;
  background: purple;
`;

export const SButton = styled.button.attrs(getAttribute)`
  ${DefaultStyle}
  ${getSpecialStyles}
`;
