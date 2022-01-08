import React from 'react'
import Andrabank from './Andrabank'
import Corporatebank from './Corporatebank'

export default function Unionbank() {
    return (
        <div>
            <Andrabank  location="kavali" />
            <Corporatebank location="kadapa"/>
        </div>
    )
}
