import { useState } from 'react';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import menu from 'src/helpers/menu';
import CustomTextInput from 'src/helpers/custom-components/CustomTextInput';

const PqlThree = () => {
  const initialState = {
    first_name: "",
    transport: [],
  }
  const initialError = {
    first_name: false,
  }
  const [data, setData] = useState(initialState);
  const [error, setError] = useState(initialError);

  const handleChange = e => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    setError({ ...error, [name]: !value });
  };

  const handleCheckbox = category => e => {
    const { name, checked } = e.target;
    setData({ ...data, [category]: checked ? [...data[category], name] : data[category].filter((item) => item !== name), });
  };

  return (
    <Box>
      <CustomTextInput
        required
        label="First name"
        name="first_name"
        value={data.first_name}
        error={error.first_name}
        onChange={handleChange}
      />
      <br />
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormLabel>Assign responsibility</FormLabel>
        <FormGroup>
          {menu.transportActivity.map((item, index) => <FormControlLabel key={index} control={<Checkbox checked={data.transport.includes(item.value)} onChange={handleCheckbox('transport')} name={item.value} />} label={item.label} />)}
        </FormGroup>
      </FormControl>
    </Box>
  );
};

export default PqlThree;
