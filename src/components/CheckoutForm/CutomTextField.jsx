import React from 'react'
import { TextField, Grid } from '@material-ui/core'
import { useFormContext, Controller } from 'react-hook-form'


export default function CutomTextField({ name, label, required }) {
    const { control } = useFormContext()
    return (
        <Grid item xs={12} sm={6}>
            <Controller
                as={TextField}
                control={control}
                fullWidth
                name={name}
                label={label}
                required={required}
                render={({ field }) => (
                    <TextField {...field} name={name} label={label} required={required} fullWidth />
                )}
            />
        </Grid>
    )
}
