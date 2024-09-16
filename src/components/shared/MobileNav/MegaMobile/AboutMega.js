import React from 'react'
import './megaMobile.scss'
import { aboutData } from '../../Megamenus/AboutMegamenu/aboutData'

const AboutMega = () => {
    return (
        <div className="mega-items">
            <h3>Agency</h3>
            {aboutData.agency.map((props) => {
                return (
                    <p key={props.id}>
                        <span>{props.defaultMessage}</span>
                    </p>
                )
            })}

            <h3>Models</h3>
            {aboutData.models.map((props) => {
                return (
                    <p key={props.id}>
                        <span>{props.defaultMessage}</span>
                    </p>
                )
            })}
        </div>
    )
}

export default AboutMega