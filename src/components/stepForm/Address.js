import React from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export const Address = ({ formData, setForm, navigation }) => {
  const { address, city, state, zip } = formData;
  return (
    <Container maxWidth="xs">
      <h3>Alamat</h3>
      <TextField label="Alamat" name="address" value={address} onChange={setForm} margin="normal" variant="outlined" autoComplete="off" fullWidth />
      <TextField label="Provinsi" name="city" value={city} onChange={setForm} margin="normal" variant="outlined" autoComplete="off" fullWidth />
      <TextField label="Kota" name="state" value={state} onChange={setForm} margin="normal" variant="outlined" autoComplete="off" fullWidth />
      <TextField label="Kode Pos" name="zip" type="number" value={zip} onChange={setForm} margin="normal" variant="outlined" autoComplete="off" fullWidth />
      <div style={{ marginTop: '1rem' }}>
        <Button color="secondary" variant="contained" style={{ marginRight: '1rem' }} onClick={() => navigation.previous()}>
          Kembali
        </Button>
        <Button color="primary" variant="contained" onClick={() => navigation.next()}>
          Selanjutnya
        </Button>
      </div>
    </Container>
  );
};
