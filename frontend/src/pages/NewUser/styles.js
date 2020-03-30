import styled from 'styled-components';

import { Select } from '@material-ui/core';

export const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
`;

export const FormContainer = styled.div`
  margin-top: 70px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const SelectInput = styled(Select)`
  flex: 1;
  margin: 0 25px;
`;

export const InputGroup = styled.div`
  display: flex;
  padding: 23px 0;
  align-items: center;
  justify-content: space-between;
`;
