import React from 'react';

import { useHistory } from 'react-router-dom';

import { DeleteForever, Edit } from '@material-ui/icons';

import { Card, CardHeader, CardContent, Typography } from '@material-ui/core/';

import { ActionView, Avatar, ActionButton } from './styles';

export default function CardUser() {
  const history = useHistory();

  function handleNavigate() {
    history.push('/details');
  }

  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar src="https://clinicforspecialchildren.org/wp-content/uploads/2016/08/avatar-placeholder.gif" />
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />

      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
        <ActionView>
          <ActionButton color="secondary">
            <DeleteForever fontSize="small" color="secondary" />
            Deletar
          </ActionButton>
          <ActionButton onClick={handleNavigate} color="primary">
            <Edit fontSize="small" color="primary" />
            Editar
          </ActionButton>
        </ActionView>
      </CardContent>
    </Card>
  );
}
