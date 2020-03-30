import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const UserList = styled.ul`
  margin: 50px auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  width: 100%;
  max-width: 900px;
`;
