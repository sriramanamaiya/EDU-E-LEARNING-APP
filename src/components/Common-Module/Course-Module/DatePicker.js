import React from 'react'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import DatePicker from '@mui/lab/DatePicker'

import TextField from '@mui/material/TextField'

const DatePickerComp = (props) => {
    const { value, handleDatePicker } = props

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
                label="Pick Release Date"
                value={value}
                minDate={new Date()}
                onChange={(date) => {
                    handleDatePicker(date)
                }}
                renderInput={(params) => <TextField  {...params} error={false} margin="normal" />}
            />
        </LocalizationProvider>
    )
}

export default DatePickerComp