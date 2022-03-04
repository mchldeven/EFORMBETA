import React from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export const Names = ({ formData, setForm, navigation }) => {
  const { firstName, lastName, nickName } = formData;

  return (
    <Container maxWidth="xs">
      <h3>E-FORM NASABAH (BARU) (SESUAIKAN DENGAN KTP)</h3>
      <TextField label="Nama Depan" name="firstName" value={firstName} onChange={setForm} margin="normal" variant="outlined" autoComplete="off" fullWidth />
      <TextField label="Nama Belakang" name="lastName" value={lastName} onChange={setForm} margin="normal" variant="outlined" autoComplete="off" fullWidth />
      <TextField label="NamaPanggilan(ALIAS)" name="nickName" value={nickName} onChange={setForm} margin="normal" variant="outlined" autoComplete="off" fullWidth />
      <TextField label="No KTP" name="noktp" value={nickName} onChange={setForm} margin="normal" variant="outlined" autoComplete="off" fullWidth />
      <TextField label="Tanggal Lahir" name="tgllahir" value={nickName} onChange={setForm} margin="normal" variant="outlined" autoComplete="off" fullWidth />
      <TextField label="Agama" name="Agama" value={nickName} onChange={setForm} margin="normal" variant="outlined" autoComplete="off" fullWidth />
      <TextField label="Nama Ibu" name="Nama Ibu" value={nickName} onChange={setForm} margin="normal" variant="outlined" autoComplete="off" fullWidth />
      <TextField label="Hobby" name="hobby" value={nickName} onChange={setForm} margin="normal" variant="outlined" autoComplete="off" fullWidth />
      <Button variant="contained" fullWidth color="#003b70" style={{ marginTop: '1rem' }} onClick={() => navigation.next()}>
        Selanjutnya
      </Button>
    </Container>
  );
};
