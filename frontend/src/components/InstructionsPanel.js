import React from 'react'
import {Stack, Typography} from '@mui/material'
const InstructionsPanel = ({instructions}) => {
    return (
        <Stack spacing={2}
        direction='column'
    >
        {instructions.map((instruction) => (
            <Typography variant='body2' key={instruction.number}>{instruction.number}. {instruction.step}</Typography>
        ))}
    </Stack>
    )
}

export default InstructionsPanel
