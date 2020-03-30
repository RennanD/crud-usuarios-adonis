import React, { useState } from 'react';

import { useHistory } from 'react-router-dom';

import { DeleteForever, Edit } from '@material-ui/icons';

import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from '@material-ui/core/';

import PropTypes from 'prop-types';

import { ActionView, Avatar, ActionButton, Content } from './styles';

export default function CardUser({ user, handleDetele }) {
  const [open, setOpen] = useState(false);

  const history = useHistory();

  function handleNavigate() {
    history.push(`/details/${user.id}`);
  }

  function handleClose() {
    setOpen(false);
  }

  async function handlePress() {
    await handleDetele(user.id);
    setOpen(false);
  }

  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar src="https://clinicforspecialchildren.org/wp-content/uploads/2016/08/avatar-placeholder.gif" />
        }
        title={user.name}
        subheader={`${user.email} - ${user.dateFormatted}`}
      />

      <CardContent>
        <ActionView>
          <ActionButton onClick={() => setOpen(true)} color="secondary">
            <DeleteForever fontSize="small" color="secondary" />
            Deletar
          </ActionButton>
          <ActionButton onClick={handleNavigate} color="primary">
            <Edit fontSize="small" color="primary" />
            Editar
          </ActionButton>
        </ActionView>

        <Content>
          <Typography variant="body2" color="textSecondary" component="p">
            {user.bio}
          </Typography>
        </Content>
      </CardContent>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Opa, cuidado!!</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Deseja realmente excluir esse usuário?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancelar
          </Button>
          <Button onClick={handlePress} color="primary" autoFocus>
            Deletar
          </Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
}

CardUser.propTypes = {
  user: PropTypes.shape().isRequired,
  handleDetele: PropTypes.func.isRequired,
};
