import React from 'react';
import { Box, Typography, Button, Avatar } from '@mui/material';
import { Link } from 'react-router-dom'; // ✅ นำเข้า Link ให้ถูกต้อง

function HomeMenu() {
  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <Box sx={{ width: '70%', boxShadow: 2, mx: 'auto', my: 'auto', p: 3, textAlign: 'center' }}>
        
        <Avatar 
          src="https://cdn.pixabay.com/photo/2022/04/02/13/47/internet-of-things-7107054_640.jpg"
          sx={{ width: 100, height: 100, mx: 'auto' }}
        />

        <Typography variant="h3" sx={{ mt: 2 }}>
          Kasidit
        </Typography>

        <Button component={Link} to="/calnum" fullWidth sx={{ mt: 2, backgroundColor: 'black', color: 'white' }}>
          <Typography variant="h6">Calculate Number</Typography>
        </Button>

        <Button component={Link} to="/calmoneyshare" fullWidth sx={{ mt: 2, backgroundColor: 'black', color: 'white' }}>
          <Typography variant="h6">Calculate Money</Typography>
        </Button>

      </Box>
    </Box>
  );
}

export default HomeMenu;
