"use client"; import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';

const WineTasting = () => {
  const [formData, setFormData] = useState({
    sight: '',
    nose: '',
    palate: '',
    conclusion: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <Container maxWidth="sm">
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Wine Deductive Tasting Exam
        </Typography>
        <TextField
          label="Sight"
          name="sight"
          value={formData.sight}
          onChange={handleChange}
          fullWidth
          multiline
          rows={4}
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Nose"
          name="nose"
          value={formData.nose}
          onChange={handleChange}
          fullWidth
          multiline
          rows={4}
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Palate"
          name="palate"
          value={formData.palate}
          onChange={handleChange}
          fullWidth
          multiline
          rows={4}
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Conclusion"
          name="conclusion"
          value={formData.conclusion}
          onChange={handleChange}
          fullWidth
          multiline
          rows={4}
          margin="normal"
          variant="outlined"
        />
        <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
          Submit
        </Button>
      </Box>
    </Container>
  );
};

export default WineTasting;