import React from 'react'
import { Row, Col } from "react-bootstrap";
import TitleFirstPlace from './elements/FirstPrize/TitleFirstPlace';
import ImageOfMedal from './elements/FirstPrize/ImageOfMedal';
import ButtonViewDetail from './elements/FirstPrize/ButtonViewDetail';
import FirstPlaceInfo from './elements/FirstPrize/FirstPlaceInfo';
import SecondPlaceInfo from './elements/SecondPrize/SecondPlaceInfo';
import TitleSecondPlace from './elements/SecondPrize/TitleSecondPlace';
import TItlThirdPlace from './elements/ThirdPrize/TItleThirdPlace';
import ThirdPlaceInfo from './elements/ThirdPrize/ThirdPlaceInfo';
import TitleWinner from './elements/TitleWinner';

function WinnerCharts() {
    return (
        <div>

            <TitleWinner />

            <Row className="px-5">
                <Col className="pt-5 mt-5">

                    <TitleSecondPlace />

                    <SecondPlaceInfo />

                </Col>
                <Col className="">

                    <TitleFirstPlace />

                    <div style={{ height: 659 }} className="w-75 bg-primary d-block mx-auto">

                        <FirstPlaceInfo />

                        <ImageOfMedal />

                        <ButtonViewDetail />

                    </div>
                </Col>
                <Col className="pt-5 mt-5">

                    <TItlThirdPlace />

                    <div style={{ height: 563 }} className="w-75 bg-warning d-block mx-auto overflow-auto">

                        <ThirdPlaceInfo />

                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default WinnerCharts