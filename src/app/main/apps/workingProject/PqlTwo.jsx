import { useState } from 'react';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import menu from 'src/helpers/menu';

const PqlTwo = () => {
  const initialState = {
    transport: [],
    geographic_area: [],
  }

  const [data, setData] = useState(initialState);

  const handleCheckbox = category => e => {
    const { name, checked } = e.target;
    setData({ ...data, [category]: checked ? [...data[category], name] : data[category].filter((item) => item !== name), });
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormLabel>Assign responsibility</FormLabel>
        <FormGroup>
          {menu.transportActivity.map((item, index) => (
            <FormControlLabel key={index} control={<Checkbox checked={data.transport.includes(item.value)} onChange={handleCheckbox('transport')} name={item.value} />} label={item.label} />
          ))}
        </FormGroup>
      </FormControl>
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormLabel>Geographic area</FormLabel>
        <FormGroup>
          {menu.geographicArea.map((item, index) => (
            <FormControlLabel key={index} control={<Checkbox checked={data.geographic_area.includes(item.value)} onChange={handleCheckbox('geographic_area')} name={item.value} />} label={item.label} />
          ))}
        </FormGroup>
      </FormControl>
    </Box>
  );
};

export default PqlTwo;
