import styled from 'styled-components';

const JustTitle = styled.h1`
  text-align: center;
  color: ${({ special }) => (special ? 'orange' : 'blue')};
`;

export default JustTitle;
