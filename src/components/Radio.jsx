import React from 'react';
import MUIRadio from '@mui/material/Radio';
import { FormControlLabel } from '@mui/material';

export default function Radio({ label, checked, value, setState }) {
    function handleChange() {
        setState(value);
    }

    return (
        <FormControlLabel
            label={label}
            control={
                <MUIRadio 
                    color='primary'
                    checked={checked}
                    onChange={handleChange}
                />
            }
        />
    );
}