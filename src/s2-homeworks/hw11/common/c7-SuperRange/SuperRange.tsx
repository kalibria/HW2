import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{
                width: 200,
                height: 4,
                color: 'rgba(0, 204, 34, 1)',
                display: 'flex',
                '& .MuiSlider-thumb': {
                    border: '1px solid rgba(0, 204, 34, 1)',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(246, 246, 246, 246)',
                    position: 'relative',
                },
                '& .MuiSlider-thumb::before': {
                    content: `" "`,
                    position: 'absolute',
                    width: 6,
                    height: 6,
                    backgroundColor: 'rgba(0, 204, 34, 1)',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)'
                },
                '& .MuiSlider-thumb:last-child': {
                    left: '90%'
                },

            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
