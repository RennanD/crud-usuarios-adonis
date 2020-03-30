import styled from 'styled-components';
import { Button } from '@material-ui/core';

export const Avatar = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background: #eee;
  border: 2px solid #eee;
`;

export const ActionView = styled.div`
  margin: 5px 0;
`;

export const ActionButton = styled(Button)`
  svg {
    margin-right: 3px;
  }
`;
