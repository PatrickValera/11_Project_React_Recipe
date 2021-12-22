import { Box, IconButton, Typography } from '@mui/material'
import React, { useState } from 'react'

const IngredientsPanel = ({ ingredients }) => {
    return (
        <>
            {ingredients && ingredients.map(item => <IngredientItem key={item.id} item={item} />)}
        </>
    )
}

function IngredientItem({ item }) {
    const [checked, setChecked] = useState(false)
    return (
        <Box display='flex' sx={{ alignItems: 'center' }}>
            <IconButton onClick={() => setChecked(state => !state)} color='primary'>
                {checked ? <i className="fas fa-check-circle"></i> : <i className="far fa-circle"></i>}
            </IconButton>
            <Typography variant='body1' sx={{flexGrow:'1'}}>{item.name.toUpperCase()}</Typography>
            <Typography variant='body2' color='grey.600'>{item.amount} {item.unit?item.unit:'count'}</Typography>
        </Box>
    )
}
export default IngredientsPanel
