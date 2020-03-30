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

export const Empty = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 50px auto;
  height: 60vh;
  width: 100%;
  max-width: 900px;

  strong {
    font-size: 24px;
    color: #999;
  }
`;
