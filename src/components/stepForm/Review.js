import React from 'react';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetail from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import ListItemText from '@material-ui/core/ListItemText';

import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';

export const Review = ({ formData, navigation }) => {
  const { go } = navigation;
  const { firstName, lastName, nickName, address, city, state, zip, phone, email } = formData;

  return (
    <Container maxWidth="sm">
      <h3>CEK DATA YANG SUDAH DI ISI (SESUAIKAN DENGAN KTP)</h3>
      <RenderAccordion summary="Nama" go={go} details={[{ 'Nama Depan': firstName }, { 'Nama Belakang': lastName }, { 'Nama Panggilan': nickName }]} />
      <RenderAccordion summary="Alamat" go={go} details={[{ Alamat: address }, { Provinsi: city }, { Kota: state }, { 'Kode Pos': zip }]} />
      <RenderAccordion summary="Kontak" go={go} details={[{ Phone: phone }, { Email: email }]} />
      <Button color="primary" variant="contained" style={{ marginTop: '1.5rem' }} onClick={() => go('submit')}>
        Submit EFORM
      </Button>
    </Container>
  );
};

export const RenderAccordion = ({ summary, details, go }) => (
  <Accordion>
    <AccordionSummary expandIcon={<ExpandMoreIcon />}>{summary}</AccordionSummary>
    <AccordionDetail>
      <div>
        {details.map((data, index) => {
          const objKey = Object.keys(data)[0];
          const objValue = data[Object.keys(data)[0]];

          return <ListItemText key={index}>{`${objKey}: ${objValue}`}</ListItemText>;
        })}
        <IconButton color="primary" component="span" onClick={() => go(`${summary.toLowerCase()}`)}>
          <EditIcon />
        </IconButton>
      </div>
    </AccordionDetail>
  </Accordion>
);
