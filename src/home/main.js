import React from 'react'
import { Button, Tabs, Row, Col, Menu, Icon, Dropdown, Select,} from 'antd'
import './styles.scss'
import { dropdownData, startupData } from '../config'
import Sample from '../images/startup1.png'
import Profile from '../images/profile.png'
const { Option } = Select;

const { TabPane } = Tabs;

function Main() {
    const menu = (
        <Menu>
            <Menu.Item key="1">Option 1</Menu.Item>
            <Menu.Item key="2">Option 2</Menu.Item>
        </Menu>
    );
    return (
        <div className="home">
            <div className="tabs">
                <Button className="border-btn">Add Startup</Button>
                <Tabs defaultActiveKey="1">
                    <TabPane tab="Recommendations" key="1">
                        <Row>
                            <Col xs={24} sm={24} md={5} lg={5} xl={5}>
                                <div className="col-content">
                                    {
                                        dropdownData.map((item, index) => {
                                            const { name, placeholder,options} = item;
                                            return (
                                                <div className="dropdown">
                                                    <p>{name}</p>
                                                    {/* <Dropdown overlay={menu} trigger={['click']}>
                                                        <Button>
                                                            {button}<Icon type="down" />
                                                        </Button>
                                                    </Dropdown> */}
                                                    <Select placeholder={placeholder}>
                                                        {
                                                            options.map((item,index)=>{
                                                                const{value} =item;
                                                                return(
                                                                <Option value={value} key ={index}>{value}</Option>
                                                                )
                                                            })
                                                        }
                                                    </Select>
                                                </div>
                                            )
                                        })
                                    }
                                    <div className="button">
                                        <Button className="primary-btn">APPLY FILTER</Button>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={24} sm={24} md={19} lg={19} xl={19}>
                                <div className="col-content">
                                    <p className="total-startup">Total list of 23311 startups</p>
                                    <div className="display-startup">
                                        <Row>
                                            {
                                                startupData.map((item, index) => {
                                                    const { logo, name, founded, status, funds, about, rating, chief } = item;
                                                    return (
                                                        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                                                            <div className="startup" key={index}>
                                                                <div className="flex">
                                                                    <div className="about">
                                                                        <div className="logo">
                                                                            <img src={logo} alt="logo" />
                                                                        </div>
                                                                        <div className="details">
                                                                            <p className="name">{name}</p>
                                                                            <p className="founded">{founded}</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="status">
                                                                        <p>{status}</p>
                                                                    </div>
                                                                </div>
                                                                <div className="description">
                                                                    <p className="heading">{funds}</p>
                                                                    <p className="summary">{about}</p>
                                                                </div>
                                                                <div className="flex">
                                                                    <div className="rating">
                                                                        <p><span>{rating}</span>5</p>
                                                                    </div>
                                                                    <div className="chief">
                                                                        <div>
                                                                            <p>Chief</p>
                                                                            <p className="chief-name">{chief}</p>
                                                                        </div>
                                                                        <div className="chief-image">
                                                                            <img src={Profile} alt="image" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Col>
                                                    )
                                                })
                                            }
                                        </Row>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tab="Overview" key="2">
                        Overview
                    </TabPane>
                </Tabs>
            </div>
        </div>
    )
}

export default Main