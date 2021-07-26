import React from 'react';
import CreateEmail from './components/CreateEmail/CreateEmail';
import svg1 from './../../assets/images/imageicon.svg'
import svg2 from './../../assets/images/mailicon.svg'
import { ORIGINAL_SVG_mailicon } from './../../utils/defaults'
import { ORIGINAL_SVG_imageicon } from './../../utils/defaults'
import ImagePreview from './components/ImagePreview/ImagePreview';
const image1 = require('./../../assets/images/ALP-Summer.png');

import StatGraph from './components/StatGraph/StatGraph';
import SocialStats from './components/SocialStats/SocialStats';


let email_title_1 = "Create a new email campaign"
let email_text_1 = "Use our intuitive newsletter builder to create engaging emails to send to your contacts."
let email_button_text_1 = "Create New Email campaign"
let email_title_2 = "Create a new personalized image"
let email_text_2 = "Use our hyperpersonalize image editing tool to create better & engaging images"
let email_button_text_2 = "Create New Personalize image"

let date = "20 June, 2011"
let creator = "John Doe"
let last_edited_by = "Harry Potter"

let impressions = 344
let link_clicks = 203
let conversionrate = 3.4

let fb_impressions = 5467
let fb_clicks = 203
let socialmedia1 = "Facebook"
let insta_impressions = 7890
let insta_clicks = 244
let socialmedia2 = "Instagram"
const RightSidebar: React.FC = () => {

    return (
        <div className="pt-36 overflow-y-auto bg-rightbackgroundcolor h-full px-4">
            <div >

                <CreateEmail bio1={email_title_1} bio2={email_text_1} bio3={email_button_text_1} bio4={ORIGINAL_SVG_mailicon} />
                <CreateEmail bio1={email_title_2} bio2={email_text_2} bio3={email_button_text_2} bio4={ORIGINAL_SVG_imageicon} />

            </div>
            <div>


                <ImagePreview date={date} creator={creator} last_edited_by={last_edited_by} image={image1} />
            </div>
            <div className="mt-6">
                <StatGraph impressions={impressions} link_clicks={link_clicks} conversionrate={conversionrate} />
            </div>
            <div className="mt-6">

                <SocialStats fb_impressions={fb_impressions} fb_clicks={fb_clicks} socialmedia1={socialmedia1} insta_impressions={insta_impressions} insta_clicks={insta_clicks} socialmedia2={socialmedia2} />
            </div>



        </div>

    )

};

export default RightSidebar;
