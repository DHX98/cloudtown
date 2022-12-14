import React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

function Copyright() {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        m: 'auto',
        mb: 2,
        border: '10px',
        borderRadius: '16px',
        backgroundColor: 'grey',
      }}
    >
      <Container maxWidth="sm" sx={{ textAlign: 'center' }}>
        <Typography variant="h5">
          Cloudtown 云棠舞社
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {'Copyright © '}
          <Link color="inherit" href="/">
            cloudtown-vancouver.com
          </Link>
          {' '}
          {new Date().getFullYear()}
          .
        </Typography>
      </Container>
    </Box>
  );
}

export default Copyright;
