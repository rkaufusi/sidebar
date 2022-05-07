import React from 'react'
import {BsPlus, BsFillLightningFill, BsGearFill} from 'react-icons/bs'
import {FaFire, FaPoo} from 'react-icons/fa'

import { IconType } from 'react-icons'

const SideBarIcon = ({icon}: any) => {
    console.log(icon)
    return (
        <div className="sidebar-icon">
            {icon}
        </div>
    )
}

export default SideBarIcon
