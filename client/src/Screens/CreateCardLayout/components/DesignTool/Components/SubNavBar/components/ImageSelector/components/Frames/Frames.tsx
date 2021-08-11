import React from "react";
import {
    defaultCircle,
    defaultPolygon,
    defaultRect,
    defaultTriangle,
} from "../../../../../../../../../../utils/defaults";

import CardElementsFunctions from "../../../../../../../../../../Hooks/CardElementsFunctions";
const image1 = require("./../../../../../../../../../../assets/images/polygon.png");
const image2 = require("./../../../../../../../../../../assets/images/circle.png");
const image3 = require("./../../../../../../../../../../assets/images/square.png");
const image4 = require("./../../../../../../../../../../assets/images/triangle.png");
const Frames: React.FC = (): JSX.Element => {
    const {
        handleAddNewRect,
        handleAddNewCircle,
        handleAddNewTrianlge,
        handleAddNewPolygon,
    } = CardElementsFunctions();
    return (
        <div className="flex flex-col w-full ">
            <div className="flex flex-col w-full">
                <h1 className="text-xl font-bold">Frames</h1>
                <div className="grid w-full grid-cols-4 gap-4 mt-6 ">
                    <div>
                        <button
                            onClick={() =>
                                handleAddNewCircle({
                                    ...defaultCircle,
                                    isFrame: true,
                                    fill: undefined,
                                    patternImageUrl:
                                        "https://ca.slack-edge.com/T0100HQFETG-U01PVA68RDE-90fc2d0a43dd-72",
                                })
                            }
                        >
                            <img src={image2} className="w-16 h-18" />
                        </button>
                    </div>
                    <div>
                        <button
                            onClick={() =>
                                handleAddNewRect({
                                    ...defaultRect,
                                    isFrame: true,
                                    fill: undefined,
                                    patternImageUrl:
                                        "https://ca.slack-edge.com/T0100HQFETG-U01PVA68RDE-90fc2d0a43dd-72",
                                })
                            }
                        >
                            <img src={image3} className="w-16 h-18" />
                        </button>
                    </div>
                    <div>
                        <button
                            onClick={() =>
                                handleAddNewPolygon({
                                    ...defaultPolygon,
                                    isFrame: true,
                                    fill: undefined,
                                    patternImageUrl:
                                        "https://ca.slack-edge.com/T0100HQFETG-U01PVA68RDE-90fc2d0a43dd-72",
                                })
                            }
                        >
                            <img src={image1} className="w-16 h-18" />
                        </button>
                    </div>
                    <div>
                        <button
                            onClick={() =>
                                handleAddNewTrianlge({
                                    ...defaultTriangle,
                                    isFrame: true,
                                    fill: undefined,
                                    patternImageUrl:
                                        "https://ca.slack-edge.com/T0100HQFETG-U01PVA68RDE-90fc2d0a43dd-72",
                                })
                            }
                        >
                            <img src={image4} className="w-16 h-18" />
                        </button>
                    </div>
                    <div>
                        <button
                            onClick={() =>
                                handleAddNewCircle({
                                    ...defaultCircle,
                                    fill: undefined,
                                    patternImageUrl:
                                        "https://ca.slack-edge.com/T0100HQFETG-U01PVA68RDE-90fc2d0a43dd-72",
                                })
                            }
                        >
                            <img src={image2} className="w-16 h-18" />
                        </button>
                    </div>
                    <div>
                        <button
                            onClick={() =>
                                handleAddNewRect({
                                    ...defaultRect,
                                    fill: undefined,
                                    patternImageUrl:
                                        "https://ca.slack-edge.com/T0100HQFETG-U01PVA68RDE-90fc2d0a43dd-72",
                                })
                            }
                        >
                            <img src={image3} className="w-16 h-18" />
                        </button>
                    </div>
                    <div>
                        <button
                            onClick={() =>
                                handleAddNewPolygon({
                                    ...defaultPolygon,
                                    fill: undefined,
                                    patternImageUrl:
                                        "https://ca.slack-edge.com/T0100HQFETG-U01PVA68RDE-90fc2d0a43dd-72",
                                })
                            }
                        >
                            <img src={image1} className="w-16 h-18" />
                        </button>
                    </div>
                    <div>
                        <button
                            onClick={() =>
                                handleAddNewTrianlge({
                                    ...defaultTriangle,
                                    fill: undefined,
                                    patternImageUrl:
                                        "https://ca.slack-edge.com/T0100HQFETG-U01PVA68RDE-90fc2d0a43dd-72",
                                })
                            }
                        >
                            <img src={image4} className="w-16 h-18" />
                        </button>
                    </div>
                    <div>
                        <button
                            onClick={() =>
                                handleAddNewCircle({
                                    ...defaultCircle,
                                    fill: undefined,
                                    patternImageUrl:
                                        "https://ca.slack-edge.com/T0100HQFETG-U01PVA68RDE-90fc2d0a43dd-72",
                                })
                            }
                        >
                            <img src={image2} className="w-16 h-18" />
                        </button>
                    </div>
                    <div>
                        <button
                            onClick={() =>
                                handleAddNewRect({
                                    ...defaultRect,
                                    fill: undefined,
                                    patternImageUrl:
                                        "https://ca.slack-edge.com/T0100HQFETG-U01PVA68RDE-90fc2d0a43dd-72",
                                })
                            }
                        >
                            <img src={image3} className="w-16 h-18" />
                        </button>
                    </div>
                    <div>
                        <button
                            onClick={() =>
                                handleAddNewPolygon({
                                    ...defaultPolygon,
                                    fill: undefined,
                                    patternImageUrl:
                                        "https://ca.slack-edge.com/T0100HQFETG-U01PVA68RDE-90fc2d0a43dd-72",
                                })
                            }
                        >
                            <img src={image1} className="w-16 h-18" />
                        </button>
                    </div>
                    <div>
                        <button
                            onClick={() =>
                                handleAddNewTrianlge({
                                    ...defaultTriangle,
                                    fill: undefined,
                                    patternImageUrl:
                                        "https://ca.slack-edge.com/T0100HQFETG-U01PVA68RDE-90fc2d0a43dd-72",
                                })
                            }
                        >
                            <img src={image4} className="w-16 h-18" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Frames;
