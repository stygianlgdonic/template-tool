import React from 'react'
import { ChromePicker } from 'react-color'

interface Props {
    color: string
    onChange: any
}

const Picker: React.FC<Props> = ({ color, onChange }) => {
    return (
        <div>
            <ChromePicker
                color={color}
                onChange={onChange}
            />

        </div>
    )
}

export default Picker
