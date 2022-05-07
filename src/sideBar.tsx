import React from 'react'
import SideBarIcon from './sideBarIcon'
import {BsPlus, BsFillLightningFill, BsGearFill} from 'react-icons/bs'
import {FaFire, FaPoo} from 'react-icons/fa'

const SideBar = () => {
    return (
        <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-900 text-white shadow-lg">
            <SideBarIcon icon={<BsPlus size="32"/>}/>
            <i>B</i>
            <i>C</i>
            <i>D</i>
            <i>E</i>
        </div>
    )
}

export default SideBar
