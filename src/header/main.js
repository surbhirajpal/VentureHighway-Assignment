import React from 'react'
import { Icon, Input } from 'antd'
import './styles.scss'
import Logo from '../images/logo.png'
import ProfilePicture from '../images/profile.png'
import { HeaderData } from '../config'

function Main() {

    return (
        <div className="header">
            <div className="logo">
                <img src={Logo} alt="logo" />
            </div>
            <div className="header-content">
                <div className="search">
                    <Icon type="search" />
                    <Input placeholder="Search for a startup by name or website" />
                </div>
                <div className="data">
                    <div className="data-display">
                        <ul>
                            {
                                HeaderData.map((item, index) => {
                                    const { value, quantity } = item;
                                    return (
                                        <li>
                                            <span className="quantity">{quantity}</span>
                                            <span className="value">{value}</span>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className="profile-photo">
                        <img src={ProfilePicture} alt="profile-picture" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main