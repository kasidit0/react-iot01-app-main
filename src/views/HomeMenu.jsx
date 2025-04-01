import React from 'react'
import { Box, Typography, Button, Avatar } from '@mui/material' // ✅ แก้ Typhography เป็น Typography

function HomeMenu() {
  return (
    <>
      <Box sx = {{ display: 'flex',  height: '100vh'}}>
        <Box sx={{ width: '70%', boxShadow: 2, mx: 'auto', my: 'auto', p: 3}}>
          
          
          <Avatar 
            src="https://cdn.pixabay.com/photo/2022/04/02/13/47/internet-of-things-7107054_640.jpg"
            sx={{ width: 100, height: 100, mx: 'auto' }} // ✅ เพิ่ม mx: 'auto' เพื่อให้อยู่ตรงกลาง
          />
          <Typography variant="h3" sx={{ mt: 2, textAlign: 'center' }}>
            Kasidit
          </Typography>


        </Box>
      </Box>
    </>
  )
}

export default HomeMenu
