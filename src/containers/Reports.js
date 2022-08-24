import React from 'react';
import './Reports.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCheck, faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import { PieChart, Pie, Legend, Cell, ResponsiveContainer } from "recharts"

const data = [
    {
        count: 809680,
        language: "Telugu",
    },
    {
        count: 4555697,
        language: "Hindi",
    },
    {
        count: 12345657,
        language: "English",
    },
]

export default class Reports extends React.Component {
    render() {
        return (
            <div>
                <div className='top-part'>
                    <div className='first-container'>
                        <FontAwesomeIcon icon={faFolderOpen} style={{ fontSize: '1.75em', marginLeft: '14px' }} />
                        <div style={{ marginRight: '10px' }}>
                            <p style={{ marginBottom: '0', marginTop: '10px' }}>Files in Library</p>
                            <p >412</p>
                        </div>
                    </div>
                    <div className='second-container'>
                        <FontAwesomeIcon icon={faCheck} style={{ fontSize: '1.75em', marginLeft: '14px' }} />
                        <div style={{ marginRight: '10px' }}>
                            <p style={{ marginBottom: '0', marginTop: '10px' }}>First Time Right</p>
                            <p>25</p>
                        </div>
                    </div>
                </div>
                <div  className='chart-containers'>
                    <div>
                        <div className='chart-container'>
                            <p>File Types Report</p>
                            <FontAwesomeIcon icon={faBars} style={{ fontSize: '1.25em' }} />
                        </div>
                        <div style={{ backgroundColor: 'white', width: '550px' }}>
                            <ResponsiveContainer width="100%" height={300} >
                                <PieChart>
                                    <Pie
                                        cx="50%"
                                        cy="40%"
                                        data={data}
                                        startAngle={0}
                                        endAngle={360}
                                        innerRadius="40%"
                                        outerRadius="70%"
                                        dataKey="count"
                                    >
                                        <Cell name="Telugu" fill="#fecba6" />
                                        <Cell name="Hindi" fill="#b3d23f" />
                                        <Cell name="English" fill="#a44c9e" />
                                    </Pie>
                                    <Legend
                                        iconType="circle"
                                        layout="vertical"
                                        verticalAlign="middle"
                                        align="right"
                                    />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                    <div>
                        <div className='chart-container'>
                            <p>File Types Report</p>
                            <FontAwesomeIcon icon={faBars} style={{ fontSize: '1.25em' }} />
                        </div>
                        <div style={{ backgroundColor: 'white', width: '550px' }}>
                            <ResponsiveContainer width="100%" height={300} >
                                <PieChart>
                                    <Pie
                                        cx="50%"
                                        cy="40%"
                                        data={data}
                                        startAngle={0}
                                        endAngle={360}
                                        innerRadius="40%"
                                        outerRadius="70%"
                                        dataKey="count"
                                    >
                                        <Cell name="Telugu" fill="#fecba6" />
                                        <Cell name="Hindi" fill="#b3d23f" />
                                        <Cell name="English" fill="#a44c9e" />
                                    </Pie>
                                    <Legend
                                        iconType="circle"
                                        layout="vertical"
                                        verticalAlign="middle"
                                        align="right"
                                    />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                    <div>
                        <div className='chart-container'>
                            <p>File Types Report</p>
                            <FontAwesomeIcon icon={faBars} style={{ fontSize: '1.25em' }} />
                        </div>
                        <div style={{ backgroundColor: 'white', width: '550px' }}>
                            <ResponsiveContainer width="100%" height={300} >
                                <PieChart>
                                    <Pie
                                        cx="50%"
                                        cy="40%"
                                        data={data}
                                        startAngle={0}
                                        endAngle={360}
                                        innerRadius="40%"
                                        outerRadius="70%"
                                        dataKey="count"
                                    >
                                        <Cell name="Telugu" fill="#fecba6" />
                                        <Cell name="Hindi" fill="#b3d23f" />
                                        <Cell name="English" fill="#a44c9e" />
                                    </Pie>
                                    <Legend
                                        iconType="circle"
                                        layout="vertical"
                                        verticalAlign="middle"
                                        align="right"
                                    />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                    <div>
                        <div className='chart-container'>
                            <p>File Types Report</p>
                            <FontAwesomeIcon icon={faBars} style={{ fontSize: '1.25em' }} />
                        </div>
                        <div style={{ backgroundColor: 'white', width: '550px' }}>
                            <ResponsiveContainer width="100%" height={300} >
                                <PieChart>
                                    <Pie
                                        cx="50%"
                                        cy="40%"
                                        data={data}
                                        startAngle={0}
                                        endAngle={360}
                                        innerRadius="40%"
                                        outerRadius="70%"
                                        dataKey="count"
                                    >
                                        <Cell name="Telugu" fill="#fecba6" />
                                        <Cell name="Hindi" fill="#b3d23f" />
                                        <Cell name="English" fill="#a44c9e" />
                                    </Pie>
                                    <Legend
                                        iconType="circle"
                                        layout="vertical"
                                        verticalAlign="middle"
                                        align="right"
                                    />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>

            </div>

        );
    };
}