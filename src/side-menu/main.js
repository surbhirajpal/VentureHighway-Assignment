import React, { useState } from 'react'
import { Menu, Icon } from 'antd'
import './styles.scss'
import Home from '../home/main'

function Main() {
    const [selectedMenuItem, setSelectedMenuItem] = useState('item1');
    const componentsSwtich = (key) => {
        switch (key) {
            case 'item1':
                return (<Home />);
            default:
                break;
        }
    };
    return (
        <div className="menu">
            <div className="menu-bar">
                <Menu selectedKeys={selectedMenuItem} mode="vertical" >
                    <Menu.Item key="item1" onClick={(e) => setSelectedMenuItem(e.key)}>
                        <Icon type="home" />
                    </Menu.Item>
                </Menu>
            </div>
            <div className="content">
                {componentsSwtich(selectedMenuItem)}
            </div>
        </div>
    )
}

export default Main