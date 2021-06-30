import { useImmerState } from '@shrugsy/use-immer-state';
import { stageDimensions } from '../utils/defaults';

const INITIAL_STATE = {
    palette: [
        { name: "primary", color: "#ff0000" },
        { name: "secondary", color: "#00ff00" },
        { name: "tertiary", color: "#0000ff" }
    ],
    rectangles: [{
        id: 'background',
        name: 'background',
        type: "shape",
        x: 0,
        y: 0,
        width: stageDimensions.width,
        height: stageDimensions.height,
        fill: '#559955',
        draggable: false,
    }]
}

const useTemplateData = () => {
    const [templateData, setTemplateData] = useImmerState(INITIAL_STATE)
    return { templateData, setTemplateData }
}

export default useTemplateData
