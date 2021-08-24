import React, { useEffect, useState } from 'react'
import * as svg from "../../../../utils/svg"
import { useForm } from 'react-hook-form'
import CustomTextField from '../../../tailwindComponents/CustomTextField'
import swal from 'sweetalert'
import useSvg from '../../../../utils/useSvg'
import plus from "../../../../assets/svgs/plus.svg"
import { svg_service } from '../../../../services/svgService'
import SvgListContainer from './SvgListContainer'
import { useMutation, useQuery } from 'react-query'
import ButtonLoader from '../../../tailwindComponents/ButtonLoader'

const SvgLibrary = () => {
    const svgPath = `  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />`;
    const closeIcon = useSvg(
        "http://www.w3.org/2000/svg",
        "0 0 24 24",
        "white",
        "#FF3C69",
        svgPath
    );

    const { register, handleSubmit } = useForm()
    const [tag, setTag] = useState("")
    const [tagsList, setTagsList] = useState([]);
    const [isFirstTag, setIsFirstTag] = useState(true);
    const [searchTags, setSearchTags] = useState([])

    const { data: svgList, error: svgListError, isLoading: svgListLoading, refetch: refetchSvgList } = useQuery<any, Error>(
        "svgSearch", () => svg_service.searchSvgsByTags([...searchTags])
    )

    // useEffect(() => {
    //     refetchSvgList()
    // }, [searchTags])

    const { mutate: mutateNewSvg, isLoading: addingNewSvg, error: errorAddingSvg } = useMutation(
        (SVG_STRING: string) => svg_service.addNewSvg({
            svgURL: "",
            svgString: SVG_STRING,
            tags: tagsList
        }), {
        onSuccess: (data, variables, context) => {
            refetchSvgList()
        }
    })

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
            e.preventDefault();
            pushTagToTagsList(tag);
            setTag("");
        }
    };
    const onSubmit = (data) => {

        if (!tagsList?.length) {
            swal({
                title: "please enter appsumo code",
                text: `Hit '+' icon or press enter after typing your code`,
                icon: "error",
            });
            return
        }

        if (!!data?.svgupload) {
            const inputFiles = data?.svgupload
            svg.getSvgStringFromUpload(inputFiles).then((SVG_STRING: string) => {

                mutateNewSvg(SVG_STRING)

                // TODO - upload this svg to amazon s3 then get url and pass that to svgURL
                // svg_service.addNewSvg({
                //     svgURL: "",
                //     svgString: SVG_STRING,
                //     tags: tagsList
                // }).then(res => {
                //     console.log({ res })
                // })

            })
        }
    }

    return (
        <div className="p-5" >
            <SvgListContainer
                svgList={svgList}
                svgListError={svgListError}
                svgListLoading={svgListLoading}
                refetchSvgList={refetchSvgList}
                setSearchTags={setSearchTags}
            />
            <div>
                <div>
                    <p className="text-2xl">Upload new Svg</p>
                </div>
                <div className="flex justify-center">
                    <form onSubmit={handleSubmit(onSubmit)} >
                        <CustomTextField
                            label="Enter Tag"
                            id="tagName"
                            name="tagName"
                            value={tag}
                            onChange={handleChangeTag}
                            placeholder="Type and hit Enter/Return key"
                            onKeyDown={handleKeyDown}
                            onClick={handlePushTag}
                            endIcon={plus}
                            className="relative  border border-grey appearance-none rounded w-full p-2 mt-0 focus:outline-none cursor-text"
                        />
                        <div className="flex flex-grow flex-wrap flex-col">
                            {tagsList.map((item, index) => (
                                <div key={item} className="flex justify-between rounded-3xl px-5 py-1 border-radicalRed border-2 mt-1 text-radicalRed ">
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
                        <input
                            {...register('svgupload')}
                            className="mt-3 mb-3"
                            name="svgupload"
                            type="file"
                            accept=".svg"
                        // onChange={handleSvgUpload}
                        />
                        <button
                            disabled={!!addingNewSvg}
                            className="bg-indigo500 hover:bg-indigo700 text-white font-bold py-2 px-4 w-24 rounded outline-none"
                        >
                            {!!addingNewSvg ? <ButtonLoader /> : <p>Submit</p>}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SvgLibrary
