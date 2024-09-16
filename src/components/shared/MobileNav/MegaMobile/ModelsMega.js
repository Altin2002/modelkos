import React from 'react'
import './megaMobile.scss'
import { modelsData } from '../../Megamenus/ModelsMegamenu/modelsData'


const ModelsMega = () => {
  return (
    <div className="mega-items">
      <h3>City</h3>
      {modelsData.city.map((props) => {
        return (
          <p key={props.id}>
            <span>{props.defaultMessage}</span>
          </p>
        )
      })}

      <h3>Female</h3>
      {modelsData.female.map((props) => {
        return (
          <p key={props.id}>
            <span>{props.defaultMessage}</span>
          </p>
        )
      })}

      <h3>Male</h3>
      {modelsData.male.map((props) => {
        return (
          <p key={props.id}>
            <span>{props.defaultMessage}</span>
          </p>
        )
      })}

      <h3>Kids</h3>
      {modelsData.kids.map((props) => {
        return (
          <p key={props.id}>
            <span>{props.defaultMessage}</span>
          </p>
        )
      })}

      <h3>Elderly</h3>
      {modelsData.elderly.map((props) => {
        return (
          <p key={props.id}>
            <span>{props.defaultMessage}</span>
          </p>
        )
      })}
    </div>
  )
}

export default ModelsMega