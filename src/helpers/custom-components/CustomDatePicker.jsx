import * as React from 'react';
import PropTypes from 'prop-types';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const CustomDatePicker = ({ label,
    value,
    onChange,
    minDate,
    maxDate,
    disablePast = false,
    disableFuture = false,
    views = ['year', 'month', 'day'],
    openTo = 'day', }) => {

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
                label={label}
                value={value}
                onChange={onChange}
                minDate={minDate}
                maxDate={maxDate}
                disablePast={disablePast}
                disableFuture={disableFuture}
                views={views}
                openTo={openTo}
            />
        </LocalizationProvider>
    );
}
// Define PropTypes for validation
CustomDatePicker.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
    onChange: PropTypes.func.isRequired,
    minDate: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
    maxDate: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
    disablePast: PropTypes.bool,
    disableFuture: PropTypes.bool,
    views: PropTypes.arrayOf(PropTypes.oneOf(['year', 'month', 'day'])),
    openTo: PropTypes.oneOf(['year', 'month', 'day']),
};

export default CustomDatePicker;
