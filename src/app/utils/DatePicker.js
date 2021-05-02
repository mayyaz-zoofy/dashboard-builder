import React from 'react';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import { Icon } from '@material-ui/core';

export default function BasicDatePicker(props) {
	const { value, handleChange, required, error, helperText, label, placeholder, disabled } = props;

	return (
		<MuiPickersUtilsProvider utils={MomentUtils}>
			<DatePicker
				label={label}
				value={value}
				onChange={date => handleChange(date ? date.format('YYYY-MM-DD') : null)}
				className="w-full"
				error={!!error}
				helperText={error || helperText}
				required={required}
				placeholder={placeholder}
				disabled={disabled}
				format="MM/DD/yyyy"
				clearable
				InputProps={{
					endAdornment: <Icon className="text-gray-600">event</Icon>
				}}
			/>
		</MuiPickersUtilsProvider>
	);
}
