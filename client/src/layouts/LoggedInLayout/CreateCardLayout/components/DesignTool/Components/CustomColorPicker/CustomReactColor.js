import React from "react";
import { CustomPicker } from "react-color";
import {
    EditableInput,
    Hue,
    Saturation
} from "react-color/lib/components/common";

export const MyPicker = ({ hex, hsl, hsv, onChange }) => {
    const styles = {
        pickerContainer: {
            width: "100%"
        },
        hue: {
            width: "100%",
            height: 12,
            margin: "10px 0px",
            position: "relative"
        },
        saturation: {
            width: "100%",
            height: 150,
            margin: "10px 0px",
            position: "relative"
        },
        input: {
            width: "100px",
            height: 40,
            borderRadius: 5,
            outline: "none",
            margin: "10px 0px",
            border: `1px solid ${hex}`,
            paddingLeft: 10,
        },
        confirm: {
            width: "100px",
            height: 40,
            borderRadius: 5,
            outline: "none",
            margin: "10px 0px",
        }
    };
    return (
        <div style={styles.pickerContainer}>
            <div style={styles.saturation}>
                <Saturation hsl={hsl} hsv={hsv} onChange={onChange} />
            </div>

            <div style={styles.hue}>
                <Hue pointer={Pointer} hsl={hsl} onChange={onChange} />
            </div>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <EditableInput
                    style={{ input: styles.input }}
                    value={hex}
                    onChange={onChange}
                />
                <button style={styles.confirm} className="bg-bluish text-white" >Confirm</button>
            </div>
        </div>
    );
};

const Pointer = () => {
    return (
        <div
            style={{
                backgroundColor: "transparent",
                border: "2px solid white",
                boxShadow: "0px 0px 2px 1px rgba(0,0,0,0.75)",
                borderRadius: "50%",
                width: "12px",
                height: "12px"
            }}
        ></div>
    );
};

export default CustomPicker(MyPicker);
