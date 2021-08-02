import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import plus from "../../assets/svgs/plus.svg";
import CustomTextField from "./CustomTextField";
import LoadingButton from "./LoadingButton";
import useSvg from "../../utils/useSvg";
import CustomSelect from "./CustomSelect";

const svgPath = `  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />`;

interface Props {
    templateData: any
    handleSaveTemplate: (tagsList: string[], selectedCategory: string) => void
}

const SaveTemplate: React.FC<Props> = ({ templateData, handleSaveTemplate }) => {
    const [tagsList, setTagsList] = useState([]);
    const [isFirstTag, setIsFirstTag] = useState(true);
    const [tag, setTag] = useState("");
    const [categoryList, setCategoryList] = useState(["cat1", "cat2", "cat3"])
    const [selectedCategory, setSelectedCategory] = useState(categoryList[0])

    useEffect(() => {
        if (!!templateData.tags?.length) {
            setTagsList(templateData.tags)
        }
    }, [])

    const closeIcon = useSvg(
        "http://www.w3.org/2000/svg",
        "0 0 24 24",
        "white",
        "#FF3C69",
        svgPath
    );

    const pushTagToTagsList = (tagName) => {
        if (!tagName) {
            return;
        }
        let checkExisting = tagsList.filter((currentTag) => currentTag == tagName);
        if (checkExisting.length && !isFirstTag) {
            swal({
                title: "Tag already added",
                icon: "error",
            });
        } else {
            setTagsList([...tagsList, tagName]);
            setIsFirstTag(false);
        }
    };
    const removeFromTagsList = (index) => {
        let newTagsList = [...tagsList];
        newTagsList.splice(index, 1);
        setTagsList(newTagsList);
    };

    const handleChangeTag = (e) => {
        setTag(e.target.value);
    };

    const handlePushTag = () => {
        pushTagToTagsList(tag);
        setTag("");
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            pushTagToTagsList(tag);
            setTag("");
        }
    };

    const onCategoryChange = (val) => {
        setSelectedCategory(val)
    }

    const onSubmit = () => {
        handleSaveTemplate(tagsList, selectedCategory)
    }

    return (
        <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

                <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

                <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div className="h-96">
                            <div>
                                <CustomTextField
                                    label="Enter Tag"
                                    id="tagName"
                                    name="tagName"
                                    value={tag}
                                    onChange={handleChangeTag}
                                    placeholder="Enter tag"
                                    onKeyDown={handleKeyDown}
                                    onClick={handlePushTag}
                                    endIcon={plus}
                                    className="relative  border border-grey appearance-none rounded w-full p-2 mt-0 focus:outline-none cursor-text"
                                />
                                <div className="flex flex-grow flex-wrap flex-col">
                                    {tagsList.map((item, index) => (
                                        <div key={index} className="flex justify-between rounded-3xl px-5 py-1 border-radicalRed border-2 mt-1 text-radicalRed ">
                                            <p>{item}</p>
                                            <img
                                                onClick={() => removeFromTagsList(index)}
                                                src={closeIcon}
                                                alt="error"
                                                className="w-4  cursor-pointer "
                                            />
                                        </div>
                                    ))}
                                </div>

                                <div className="z-20" >
                                    <CustomSelect
                                        label="Select Category"
                                        value={selectedCategory}
                                        onChange={onCategoryChange}
                                        dataArray={categoryList}
                                    />
                                </div>

                            </div>

                        </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:px-6 flex justify-between">
                        <div className="mt-2">
                            <LoadingButton
                                loadingProps={{
                                    size: 24,
                                    style: { color: "white" },
                                }}
                                disableElevation
                                onClick={onSubmit}
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="secondary"
                                className="red-button"
                            >
                                Close
                            </LoadingButton>
                        </div>
                        <div className="mt-2">
                            <LoadingButton
                                loadingProps={{
                                    size: 24,
                                    style: { color: "white" },
                                }}
                                disableElevation
                                onClick={onSubmit}
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="secondary"
                                className="red-button"
                            >
                                Save Template
                            </LoadingButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default SaveTemplate;
