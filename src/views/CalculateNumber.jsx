import React from 'react'
import { Box, Typography, Avatar, TextField, FormControl, InputLabel, Select, MenuItem, Button } from '@mui/material'
function CalculateNumber() {
  return (

    <Box sx = {{ display: 'flex',  height: '100vh'}}>
    <Box sx={{ width: '70%', boxShadow: 2, mx: 'auto', my: 'auto', p: 3}}>
      <Avatar 
          src="https://cdn.pixabay.com/photo/2022/04/02/13/47/internet-of-things-7107054_640.jpg"
         sx={{ width: 100, height: 100, mx: 'auto' }} // ✅ เพิ่ม mx: 'auto' เพื่อให้อยู่ตรงกลาง
                />
      <Typography variant="h3" sx={{ mt: 2, textAlign: 'center' }}>
        Calculate Number
      </Typography>
      <Typography sx = {{ mt: 2 }}>
        ตัวเลขตัวที่1
      </Typography>
        <TextField variant='outlined' fullWidth type='number' />


      <Typography sx = {{ mt: 2 }}>
        ตัวเลขตัวที่2
      </Typography>
        <TextField variant='outlined' fullWidth type='number' />
        

      <Typography>
        เลือกเครื่องหมายการคำณวน
      </Typography>
      <FormControl fullWidth>
      <InputLabel>เครืองหมาย</InputLabel>
      <Select>
        <MenuItem value={"+"}>+</MenuItem>
        <MenuItem value={"-"}>-</MenuItem>
        <MenuItem value={'*'}>*</MenuItem>
        <MenuItem value={'÷'}>÷</MenuItem> 
      </Select>

      <Button  fullWidth sx={{ mt: 2, backgroundColor: 'black', color: 'white' }}>
          <Typography variant="h6">Calculate Number</Typography>
      </Button>
      <Typography sx={{textAlign: 'center', mt: 4, fontSize: 100, color: 'gray'}}>
        0.00
      </Typography>

    </FormControl>

     





    </Box>
  </Box>
  )
}

export default CalculateNumber