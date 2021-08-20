import React from 'react'
import CustomReactColor from './CustomReactColor'
// import { ChromePicker } from 'react-color'

interface Props {
    color: string
    onChange: any
}

const Picker: React.FC<Props> = ({ color, onChange }) => {
    return (
        <div>
            <CustomReactColor
                color={color}
                onChange={onChange}
                hex={null}
                hsl={null}
                hsv={null}
            />

        </div>
    )
}

export default Picker
