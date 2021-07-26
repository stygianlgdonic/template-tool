import React from 'react';
import HomeCard from './components/HomeCard/HomeCard'
import StatCard from './components/StatCard/StatCard';
import RecentActivity from './components/RecentActivity/RecentActivity'
import CreateEmail from './../RightSidebar/components/CreateEmail/CreateEmail'
const cardimage1 = require('./../../assets/images/card1.png');
const cardimage2 = require('./../../assets/images/card2.png');



import { ORIGINAL_SVG_mailicon } from './../../utils/defaults'
import StatCardinfo from './../Centerboard/components/StatsCardinfo/StatCardinfo'
import Imageinfo from './../Centerboard/components/ImagesInfo/ImagesInfo'
const Centerboard: React.FC = () => {
    let Card_1_title = "Personlized Images"
    let Card_1_impressions = 7540
    let Card_1_clicks = 122
    let Card_1_tag = "Impressions"
    let Card_1_time = "in last 24 hours "
    let title1 = "Personlized Images"
    let Card_2_title = "Email campaigns"
    let Card_2_impressions = 8775
    let Card_2_clicks = 233
    let Card_2_tag = "Clicks"
    let Card_2_time = "in last 2 days"
    let title2 = "Personlized Images"



    let email_title_1 = "Create a new email campaign"
    let email_text_1 = "Use our intuitive newsletter builder to create engaging emails to send to your contacts."
    let email_button_text_1 = "Create New Email campaign"
    let email_title_2 = "Create a new personalized image"
    let email_text_2 = "Use our hyperpersonalize image editing tool to create better & engaging images"
    let email_button_text_2 = "Create New Personalize image"
    return (
        <div className="overflow-y-auto flex-grow px-10">
            <div className="mt-10">

                <HomeCard />
            </div>
            <div className="mt-6 flex flex-row  justify-between mb-10 gap-2">
                <StatCard bio={Card_1_title} bio1={Card_1_impressions} bio2={Card_1_clicks} bio3={Card_1_tag} bio4={title1} image={cardimage1} bio5={Card_1_time} />
                <StatCard bio={Card_2_title} bio1={Card_2_impressions} bio2={Card_2_clicks} bio3={Card_2_tag} bio4={title2} image={cardimage2} bio5={Card_2_time} />

            </div>
            <div className="">
                <RecentActivity />
            </div>
            <div className="">

                <CreateEmail bio1={email_title_1} bio2={email_text_1} bio3={email_button_text_1} bio4={ORIGINAL_SVG_mailicon} />

            </div>
            <div className="">

                <StatCardinfo />
            </div>
            <div className="">
                <Imageinfo />
            </div>

        </div>

    )

};

export default Centerboard;
