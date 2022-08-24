import React from 'react';
import './Search.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faBars, faCalendarDays, faSearch, faUpDown } from '@fortawesome/free-solid-svg-icons';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export default class Search extends React.Component {
    render() {
        return (
            <div>
                <div className='newproject-container'>
                    <div style={{ border: '1px solid',paddingLeft: '8px'}}>
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
                            </div>
                        </div>
                        <div >
                            <p className='dropdown'>category <FontAwesomeIcon icon={faAngleDown} style={{ fontSize: '1em'}} /></p>
                            <div>
                                <div>
                                    <input type="checkbox" /><span>{" "}Fabric Care(12)</span>
                                </div>
                                <div>
                                    <input type="checkbox" /><span>{" "}Test Category(12)</span>
                                </div>
                                <hr/>
                            </div>
                        </div>
                        <div>
                            <p className='dropdown'>Brand <FontAwesomeIcon icon={faAngleDown} style={{ fontSize: '1em'}} /></p>
                            <div>
                                <div>
                                    <input type="checkbox" /><span>{" "}Tide(7)</span>
                                </div>
                                <div>
                                    <input type="checkbox" /><span>{" "}Pantene(6)</span>
                                </div>
                                <hr/>
                            </div>
                        </div>
                        <div>
                            <p className='dropdown'>Product <FontAwesomeIcon icon={faAngleDown} style={{ fontSize: '1em'}} /></p>
                            <div>
                                <div>
                                    <input type="checkbox" /><span>{" "}test(8)</span>
                                </div>
                                <div>
                                    <input type="checkbox" /><span>{" "}hh(3)</span>
                                </div>
                                <hr/>
                            </div>
                        </div>
                        <div>
                            <p className='dropdown'>SKU Name <FontAwesomeIcon icon={faAngleDown} style={{ fontSize: '1em'}} /></p>
                        </div>
                        <div>
                            <p className='dropdown'>Component Type <FontAwesomeIcon icon={faAngleDown} style={{ fontSize: '1em'}} /></p>
                        </div>
                        <div>
                            <p className='dropdown'>Pack Size <FontAwesomeIcon icon={faAngleDown} style={{ fontSize: '1em'}} /></p>
                        </div>
                    </div>
                    <div style={{ backgroundColor: 'white', padding: '20px' }}>
                        <div className='right-side-container'>
                            <div style={{border: '1px solid', width: '140px',margin: '8px'}}>
                                <img src='https://cdn.pixabay.com/photo/2016/01/03/00/43/upload-1118929_1280.png' alt='img' className='img' style={{backgroundColor: '#e2dbce', padding: '10px',width: '138px',height: '138px'}}/>
                                <p className='upload'>Upload Files</p>
                            </div>
                            <div style={{border: '1px solid', width: '140px',margin: '8px'}}>
                                <img src='https://media.istockphoto.com/vectors/infographics-flowchart-colored-shadows-scheme-vector-id1296015976?k=20&m=1296015976&s=612x612&w=0&h=LVzrMKBPQj-hHMukIpbn18Xfcz57QZgvtezqjI1ut9I=' alt='img' className='img' style={{backgroundColor: '#e2dbce', padding: '10px',width: '138px',height: '138px'}}/>
                                <div className='card-bottom'>
                                    <span style={{backgroundColor: '#626263', color: 'white',height: '33px', paddingTop: '4px'}}>V1</span>
                                    <div>
                                    <p style={{marginBottom: '0',marginLeft: '10px',fontSize: '11px',fontWeight: 'bold'}}>front label</p>
                                    <p style={{marginBottom: '0',marginLeft: '10px',fontSize: '11px',color: 'blue'}}>ggg</p>
                                    </div>
                                    <FontAwesomeIcon icon={faBars} style={{ fontSize: '1em',marginLeft: '35px'}} />
                                </div>
                            </div>
                            <div style={{border: '1px solid', width: '140px',margin: '8px'}}>
                                <img src='https://assets.asana.biz/m/76d3b5ecfe2e6624/original/inline-project-management-what-is-a-flow-chart-1-2x.png' alt='img' className='img' style={{backgroundColor: '#e2dbce', padding: '10px',width: '138px',height: '138px'}}/>
                                <div className='card-bottom'>
                                    <span style={{backgroundColor: '#626263', color: 'white',height: '33px', paddingTop: '4px'}}>V1</span>
                                    <div>
                                    <p style={{marginBottom: '0',marginLeft: '10px',fontSize: '11px',fontWeight: 'bold'}}>front label</p>
                                    <p style={{marginBottom: '0',marginLeft: '10px',fontSize: '11px',color: 'blue'}}>ggg</p>
                                    </div>
                                    <FontAwesomeIcon icon={faBars} style={{ fontSize: '1em',marginLeft: '35px'}} />
                                </div>
                            </div>
                            <div style={{border: '1px solid', width: '140px',margin: '8px'}}>
                                <img src='https://media.istockphoto.com/vectors/infographics-flowchart-colored-shadows-scheme-vector-id1296015976?k=20&m=1296015976&s=612x612&w=0&h=LVzrMKBPQj-hHMukIpbn18Xfcz57QZgvtezqjI1ut9I=' alt='img' className='img' style={{backgroundColor: '#e2dbce', padding: '10px',width: '138px',height: '138px'}}/>
                                <div className='card-bottom'>
                                    <span style={{backgroundColor: '#626263', color: 'white',height: '33px', paddingTop: '4px'}}>V1</span>
                                    <div>
                                    <p style={{marginBottom: '0',marginLeft: '10px',fontSize: '11px',fontWeight: 'bold'}}>front label</p>
                                    <p style={{marginBottom: '0',marginLeft: '10px',fontSize: '11px',color: 'blue'}}>ggg</p>
                                    </div>
                                    <FontAwesomeIcon icon={faBars} style={{ fontSize: '1em',marginLeft: '35px'}} />
                                </div>
                            </div>
                            <div style={{border: '1px solid', width: '140px',margin: '8px'}}>
                                <img src='https://assets.asana.biz/m/76d3b5ecfe2e6624/original/inline-project-management-what-is-a-flow-chart-1-2x.png' alt='img' className='img' style={{backgroundColor: '#e2dbce', padding: '10px',width: '138px',height: '138px'}}/>
                                <div className='card-bottom'>
                                    <span style={{backgroundColor: '#626263', color: 'white',height: '33px', paddingTop: '4px'}}>V1</span>
                                    <div>
                                    <p style={{marginBottom: '0',marginLeft: '10px',fontSize: '11px',fontWeight: 'bold'}}>front label</p>
                                    <p style={{marginBottom: '0',marginLeft: '10px',fontSize: '11px',color: 'blue'}}>ggg</p>
                                    </div>
                                    <FontAwesomeIcon icon={faBars} style={{ fontSize: '1em',marginLeft: '35px'}} />
                                </div>
                            </div>
                            <div style={{border: '1px solid', width: '140px',margin: '8px'}}>
                                <img src='https://media.istockphoto.com/vectors/infographics-flowchart-colored-shadows-scheme-vector-id1296015976?k=20&m=1296015976&s=612x612&w=0&h=LVzrMKBPQj-hHMukIpbn18Xfcz57QZgvtezqjI1ut9I=' alt='img' className='img' style={{backgroundColor: '#e2dbce', padding: '10px',width: '138px',height: '138px'}}/>
                                <div className='card-bottom'>
                                    <span style={{backgroundColor: '#626263', color: 'white',height: '33px', paddingTop: '4px'}}>V1</span>
                                    <div>
                                    <p style={{marginBottom: '0',marginLeft: '10px',fontSize: '11px',fontWeight: 'bold'}}>front label</p>
                                    <p style={{marginBottom: '0',marginLeft: '10px',fontSize: '11px',color: 'blue'}}>ggg</p>
                                    </div>
                                    <FontAwesomeIcon icon={faBars} style={{ fontSize: '1em',marginLeft: '35px'}} />
                                </div>
                            </div>
                            <div style={{border: '1px solid', width: '140px',margin: '8px'}}>
                                <img src='https://assets.asana.biz/m/76d3b5ecfe2e6624/original/inline-project-management-what-is-a-flow-chart-1-2x.png' alt='img' className='img' style={{backgroundColor: '#e2dbce', padding: '10px',width: '138px',height: '138px'}}/>
                                <div className='card-bottom'>
                                    <span style={{backgroundColor: '#626263', color: 'white',height: '33px', paddingTop: '4px'}}>V1</span>
                                    <div>
                                    <p style={{marginBottom: '0',marginLeft: '10px',fontSize: '11px',fontWeight: 'bold'}}>front label</p>
                                    <p style={{marginBottom: '0',marginLeft: '10px',fontSize: '11px',color: 'blue'}}>ggg</p>
                                    </div>
                                    <FontAwesomeIcon icon={faBars} style={{ fontSize: '1em',marginLeft: '35px'}} />
                                </div>
                            </div>
                            <div style={{border: '1px solid', width: '140px',margin: '8px'}}>
                                <img src='https://media.istockphoto.com/vectors/infographics-flowchart-colored-shadows-scheme-vector-id1296015976?k=20&m=1296015976&s=612x612&w=0&h=LVzrMKBPQj-hHMukIpbn18Xfcz57QZgvtezqjI1ut9I=' alt='img' className='img' style={{backgroundColor: '#e2dbce', padding: '10px',width: '138px',height: '138px'}}/>
                                <div className='card-bottom'>
                                    <span style={{backgroundColor: '#626263', color: 'white',height: '33px', paddingTop: '4px'}}>V1</span>
                                    <div>
                                    <p style={{marginBottom: '0',marginLeft: '10px',fontSize: '11px',fontWeight: 'bold'}}>front label</p>
                                    <p style={{marginBottom: '0',marginLeft: '10px',fontSize: '11px',color: 'blue'}}>ggg</p>
                                    </div>
                                    <FontAwesomeIcon icon={faBars} style={{ fontSize: '1em',marginLeft: '35px'}} />
                                </div>
                            </div>
                            <div style={{border: '1px solid', width: '140px',margin: '8px'}}>
                                <img src='https://media.istockphoto.com/vectors/infographics-flowchart-colored-shadows-scheme-vector-id1296015976?k=20&m=1296015976&s=612x612&w=0&h=LVzrMKBPQj-hHMukIpbn18Xfcz57QZgvtezqjI1ut9I=' alt='img' className='img' style={{backgroundColor: '#e2dbce', padding: '10px',width: '138px',height: '138px'}}/>
                                <div className='card-bottom'>
                                    <span style={{backgroundColor: '#626263', color: 'white',height: '33px', paddingTop: '4px'}}>V1</span>
                                    <div>
                                    <p style={{marginBottom: '0',marginLeft: '10px',fontSize: '11px',fontWeight: 'bold'}}>front label</p>
                                    <p style={{marginBottom: '0',marginLeft: '10px',fontSize: '11px',color: 'blue'}}>ggg</p>
                                    </div>
                                    <FontAwesomeIcon icon={faBars} style={{ fontSize: '1em',marginLeft: '35px'}} />
                                </div>
                            </div>
                            <div style={{border: '1px solid', width: '140px',margin: '8px'}}>
                                <img src='https://assets.asana.biz/m/76d3b5ecfe2e6624/original/inline-project-management-what-is-a-flow-chart-1-2x.png' alt='img' className='img' style={{backgroundColor: '#e2dbce', padding: '10px',width: '138px',height: '138px'}}/>
                                <div className='card-bottom'>
                                    <span style={{backgroundColor: '#626263', color: 'white',height: '33px', paddingTop: '4px'}}>V1</span>
                                    <div>
                                    <p style={{marginBottom: '0',marginLeft: '10px',fontSize: '11px',fontWeight: 'bold'}}>front label</p>
                                    <p style={{marginBottom: '0',marginLeft: '10px',fontSize: '11px',color: 'blue'}}>ggg</p>
                                    </div>
                                    <FontAwesomeIcon icon={faBars} style={{ fontSize: '1em',marginLeft: '35px'}} />
                                </div>
                            </div>
                            <div style={{border: '1px solid', width: '140px',margin: '8px'}}>
                                <img src='https://media.istockphoto.com/vectors/infographics-flowchart-colored-shadows-scheme-vector-id1296015976?k=20&m=1296015976&s=612x612&w=0&h=LVzrMKBPQj-hHMukIpbn18Xfcz57QZgvtezqjI1ut9I=' alt='img' className='img' style={{backgroundColor: '#e2dbce', padding: '10px',width: '138px',height: '138px'}}/>
                                <div className='card-bottom'>
                                    <span style={{backgroundColor: '#626263', color: 'white',height: '33px', paddingTop: '4px'}}>V1</span>
                                    <div>
                                    <p style={{marginBottom: '0',marginLeft: '10px',fontSize: '11px',fontWeight: 'bold'}}>front label</p>
                                    <p style={{marginBottom: '0',marginLeft: '10px',fontSize: '11px',color: 'blue'}}>ggg</p>
                                    </div>
                                    <FontAwesomeIcon icon={faBars} style={{ fontSize: '1em',marginLeft: '35px'}} />
                                </div>
                            </div>
                            <div style={{border: '1px solid', width: '140px',margin: '8px'}}>
                                <img src='https://media.istockphoto.com/vectors/infographics-flowchart-colored-shadows-scheme-vector-id1296015976?k=20&m=1296015976&s=612x612&w=0&h=LVzrMKBPQj-hHMukIpbn18Xfcz57QZgvtezqjI1ut9I=' alt='img' className='img' style={{backgroundColor: '#e2dbce', padding: '10px',width: '138px',height: '138px'}}/>
                                <div className='card-bottom'>
                                    <span style={{backgroundColor: '#626263', color: 'white',height: '33px', paddingTop: '4px'}}>V1</span>
                                    <div>
                                    <p style={{marginBottom: '0',marginLeft: '10px',fontSize: '11px',fontWeight: 'bold'}}>front label</p>
                                    <p style={{marginBottom: '0',marginLeft: '10px',fontSize: '11px',color: 'blue'}}>ggg</p>
                                    </div>
                                    <FontAwesomeIcon icon={faBars} style={{ fontSize: '1em',marginLeft: '35px'}} />
                                </div>
                            </div>
                            <div style={{border: '1px solid', width: '140px',margin: '8px'}}>
                                <img src='https://assets.asana.biz/m/76d3b5ecfe2e6624/original/inline-project-management-what-is-a-flow-chart-1-2x.png' alt='img' className='img' style={{backgroundColor: '#e2dbce', padding: '10px',width: '138px',height: '138px'}}/>
                                <div className='card-bottom'>
                                    <span style={{backgroundColor: '#626263', color: 'white',height: '33px', paddingTop: '4px'}}>V1</span>
                                    <div>
                                    <p style={{marginBottom: '0',marginLeft: '10px',fontSize: '11px',fontWeight: 'bold'}}>front label</p>
                                    <p style={{marginBottom: '0',marginLeft: '10px',fontSize: '11px',color: 'blue'}}>ggg</p>
                                    </div>
                                    <FontAwesomeIcon icon={faBars} style={{ fontSize: '1em',marginLeft: '35px'}} />
                                </div>
                            </div>
                            <div style={{border: '1px solid', width: '140px',margin: '8px'}}>
                                <img src='https://media.istockphoto.com/vectors/infographics-flowchart-colored-shadows-scheme-vector-id1296015976?k=20&m=1296015976&s=612x612&w=0&h=LVzrMKBPQj-hHMukIpbn18Xfcz57QZgvtezqjI1ut9I=' alt='img' className='img' style={{backgroundColor: '#e2dbce', padding: '10px',width: '138px',height: '138px'}}/>
                                <div className='card-bottom'>
                                    <span style={{backgroundColor: '#626263', color: 'white',height: '33px', paddingTop: '4px'}}>V1</span>
                                    <div>
                                    <p style={{marginBottom: '0',marginLeft: '10px',fontSize: '11px',fontWeight: 'bold'}}>front label</p>
                                    <p style={{marginBottom: '0',marginLeft: '10px',fontSize: '11px',color: 'blue'}}>ggg</p>
                                    </div>
                                    <FontAwesomeIcon icon={faBars} style={{ fontSize: '1em',marginLeft: '35px'}} />
                                </div>
                            </div>
                            <div style={{border: '1px solid', width: '140px',margin: '8px'}}>
                                <img src='https://assets.asana.biz/m/76d3b5ecfe2e6624/original/inline-project-management-what-is-a-flow-chart-1-2x.png' alt='img' className='img' style={{backgroundColor: '#e2dbce', padding: '10px',width: '138px',height: '138px'}}/>
                                <div className='card-bottom'>
                                    <span style={{backgroundColor: '#626263', color: 'white',height: '33px', paddingTop: '4px'}}>V1</span>
                                    <div>
                                    <p style={{marginBottom: '0',marginLeft: '10px',fontSize: '11px',fontWeight: 'bold'}}>front label</p>
                                    <p style={{marginBottom: '0',marginLeft: '10px',fontSize: '11px',color: 'blue'}}>ggg</p>
                                    </div>
                                    <FontAwesomeIcon icon={faBars} style={{ fontSize: '1em',marginLeft: '35px'}} />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    };
}