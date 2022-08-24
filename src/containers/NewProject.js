import React from 'react';
import './NewProject.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCalendarDays, faSearch } from '@fortawesome/free-solid-svg-icons';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export default class NewProject extends React.Component {
    render() {
        return (
            <div>
                <div className='inbox-containe'>
                    <div className='search-box-container'>
                        <div>
                            <input
                                placeholder="Filter items...."
                                type="search"
                                style={{ outline: 'none' }}
                            />
                            <button
                                type="button"
                                testid="searchButton"
                                style={{ backgroundColor: 'white', border: '1px solid black', borderLeft: '0', paddingTop: '2px' }}
                            >
                                <FontAwesomeIcon icon={faSearch} style={{ fontSize: '1em', backgroundColor: 'white' }} />
                            </button>
                        </div>
                        <FontAwesomeIcon icon={faBars} style={{ fontSize: '1em', marginRight: '10px', marginLeft: '10px' }} />
                        <FontAwesomeIcon icon={faCalendarDays} style={{ fontSize: '1em', marginRight: '10px' }} />
                    </div>
                </div>
                <div className='newproject-container'>
                    <div>
                        <div className='side-container'>
                            <div className='component-container'>
                                <p><img src='https://i.pinimg.com/originals/20/04/9a/20049a59327b849eebbc2af53043ae0e.png' className='img' alt='img' /></p>
                                <div>
                                    <p style={{ fontSize: '12px', marginLeft: '10px', marginTop: '10px' }}>Request Number</p>
                                    <p style={{ fontSize: '12px', marginLeft: '10px' }}>81P-1C</p>
                                </div>
                                <div>
                                    <p style={{ fontSize: '12px', marginLeft: '10px', marginTop: '10px' }}>Initiated By</p>
                                    <p style={{ fontSize: '12px', marginLeft: '10px' }}>Designer</p>
                                </div>
                            </div>
                            <hr style={{ margin: '0' }} />
                            <div className='progress-box-container'>
                                <p style={{ fontSize: '12px', marginRight: '40px', marginLeft: '10px', marginTop: '10px' }}><span className='pro'>Status :</span> Artwork Approved and Released</p>
                            </div>
                        </div>
                        <div className='side-container'>
                            <div className='component-container'>
                                <p><img src='https://www.slideteam.net/media/catalog/product/cache/1280x720/s/i/six_months_engineering_roadmap_timeline_powerpoint_template_slide01.jpg' className='img' alt='img' /></p>
                                <div>
                                    <p style={{ fontSize: '12px', marginLeft: '10px', marginTop: '10px' }}>Request Number</p>
                                    <p style={{ fontSize: '12px', marginLeft: '10px' }}>81P-1C</p>
                                </div>
                                <div>
                                    <p style={{ fontSize: '12px', marginLeft: '10px', marginTop: '10px' }}>Initiated By</p>
                                    <p style={{ fontSize: '12px', marginLeft: '10px' }}>Designer</p>
                                </div>
                            </div>
                            <hr style={{ margin: '0' }} />
                            <div className='progress-box-container'>
                                <p style={{ fontSize: '12px', marginRight: '40px', marginLeft: '10px', marginTop: '10px' }}><span className='pro'>Status :</span> Artwork Approved and Released</p>
                            </div>
                        </div>
                        <div className='side-container'>
                            <div className='component-container'>
                                <p><img src='https://www.slideegg.com/image/catalog/703844-Sales_Process_Flowchart_PPT.png' className='img' alt='img' /></p>
                                <div>
                                    <p style={{ fontSize: '12px', marginLeft: '10px', marginTop: '10px' }}>Request Number</p>
                                    <p style={{ fontSize: '12px', marginLeft: '10px' }}>81P-1C</p>
                                </div>
                                <div>
                                    <p style={{ fontSize: '12px', marginLeft: '10px', marginTop: '10px' }}>Initiated By</p>
                                    <p style={{ fontSize: '12px', marginLeft: '10px' }}>Designer</p>
                                </div>
                            </div>
                            <hr style={{ margin: '0' }} />
                            <div className='progress-box-container'>
                                <p style={{ fontSize: '12px', marginRight: '40px', marginLeft: '10px', marginTop: '10px' }}><span className='pro'>Status :</span> Artwork Approved and Released</p>
                            </div>
                        </div>
                        <div className='side-container'>
                            <div className='component-container'>
                                <p><img src='https://www.slideteam.net/media/catalog/product/cache/1280x720/s/i/six_months_engineering_roadmap_timeline_powerpoint_template_slide01.jpg' className='img' alt='img' /></p>
                                <div>
                                    <p style={{ fontSize: '12px', marginLeft: '10px', marginTop: '10px' }}>Request Number</p>
                                    <p style={{ fontSize: '12px', marginLeft: '10px' }}>81P-1C</p>
                                </div>
                                <div>
                                    <p style={{ fontSize: '12px', marginLeft: '10px', marginTop: '10px' }}>Initiated By</p>
                                    <p style={{ fontSize: '12px', marginLeft: '10px' }}>Designer</p>
                                </div>
                            </div>
                            <hr style={{ margin: '0' }} />
                            <div className='progress-box-container'>
                                <p style={{ fontSize: '12px', marginRight: '40px', marginLeft: '10px', marginTop: '10px' }}><span className='pro'>Status :</span> Artwork Approved and Released</p>
                            </div>
                        </div>
                    </div>
                    <div style={{ backgroundColor: 'white', padding: '20px'}}>
                        <div className='right-container'>
                            <div className='project-name'>
                                <FontAwesomeIcon icon={faBars} style={{ fontSize: '1.5em', marginRight: '10px', backgroundColor: '#e363e2', color: 'white', padding: '10px' }} />
                                <div>
                                    <p style={{ marginBottom: '0px', marginTop: '15px' }}>New Project</p>
                                    <div className='project-items'>
                                        <p style={{ marginRight: '10px', fontSize: '0.8em' }}>Info</p>
                                        <p style={{ marginRight: '10px', fontSize: '0.8em' }}>Files</p>
                                        <p style={{ marginRight: '10px', fontSize: '0.8em' }}>StakeHolders</p>
                                    </div>
                                </div>
                            </div>
                            <div style={{backgroundColor: '#eeefef', color: 'red', fontWeight: 'bold',display: 'flex', justifyContent: 'center'}}>Instructions</div>
                            <div>
                                <p style={{ margin: '0', color: '#e17d39' }}>Please follow below instructions:</p>
                                <p style={{ border: '1px solid black' }}>
                                    1. To start your Project Workflow, please fill in the fields within the Request Info Tab<br />
                                    2. Select the required Worldlow Template<br />
                                    3. Click on Files Tab to upload any file required by selecting the File type then click Add Files button to upload your self <br />
                                    4. Click on the Stakeholders Tab to check d all the required activities and stakeholders are<br />
                                </p>
                                <div className='newproject-container'>
                                    <input
                                        placeholder="Initiated By"
                                        type="search"
                                        style={{ outline: 'none', marginRight: '10px', marginBottom: '10px' }}
                                    />
                                    <input
                                        placeholder="Select Date"
                                        type="search"
                                        style={{ outline: 'none', marginRight: '10px', marginBottom: '10px' }}
                                    />
                                    <InputGroup className="mb-3" style={{ width: '200px', marginRight: '10px', marginBottom: '10px' }}>
                                        <Form.Control aria-label="Text input with dropdown button" placeholder="Template Name" />
                                        <DropdownButton
                                            variant="outline-secondary"
                                            id="input-group-dropdown-2"
                                            align="end"
                                        >
                                            <Dropdown.Item href="#">Action</Dropdown.Item>
                                            <Dropdown.Item href="#">Another action</Dropdown.Item>
                                            <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                            <Dropdown.Divider />
                                            <Dropdown.Item href="#">Separated link</Dropdown.Item>
                                        </DropdownButton>
                                    </InputGroup>
                                    <InputGroup className="mb-3" style={{ width: '200px', marginRight: '10px', marginBottom: '10px' }}>
                                        <Form.Control aria-label="Text input with dropdown button" placeholder="category" />
                                        <DropdownButton
                                            variant="outline-secondary"
                                            id="input-group-dropdown-2"
                                            align="end"
                                        >
                                            <Dropdown.Item href="#">Action</Dropdown.Item>
                                            <Dropdown.Item href="#">Another action</Dropdown.Item>
                                            <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                            <Dropdown.Divider />
                                            <Dropdown.Item href="#">Separated link</Dropdown.Item>
                                        </DropdownButton>
                                    </InputGroup>
                                    <InputGroup className="mb-3" style={{ width: '200px', marginRight: '10px', marginBottom: '10px' }}>
                                        <Form.Control aria-label="Text input with dropdown button" placeholder="Brand" />
                                        <DropdownButton
                                            variant="outline-secondary"
                                            id="input-group-dropdown-2"
                                            align="end"
                                        >
                                            <Dropdown.Item href="#">Action</Dropdown.Item>
                                            <Dropdown.Item href="#">Another action</Dropdown.Item>
                                            <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                            <Dropdown.Divider />
                                            <Dropdown.Item href="#">Separated link</Dropdown.Item>
                                        </DropdownButton>
                                    </InputGroup>
                                    <input
                                        placeholder="Product Code"
                                        type="search"
                                        style={{ outline: 'none', marginRight: '10px', marginBottom: '10px' }}
                                    />
                                    <input
                                        placeholder="Select Code"
                                        type="search"
                                        style={{ outline: 'none', marginRight: '10px', marginBottom: '10px' }}
                                    />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}