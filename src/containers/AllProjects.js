import React from 'react';
import './AllProjects.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCalendarDays, faSearch } from '@fortawesome/free-solid-svg-icons';

export default class AllProjects extends React.Component {
    render() {
        return (
            <div>

                <div>
                    <div className='inbox-container'>
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
                    <div className='component-container'>
                        <p className='comp-element'><img src='https://manageartworks.com/wp-content/uploads/2017/09/highres-ma.png' className='img' alt='img' /></p>

                        <div className='comp-element'>
                            <p>Request Number</p>
                            <p>81P-1C</p>
                        </div>
                        <div className='comp-element'>
                            <p>Initiated By</p>
                            <p>Designer</p>
                        </div>
                        <div className='comp-element'>
                            <p>Initiated Date</p>
                            <p>31-Jul-2020</p>
                        </div>
                        <div className='comp-element'>
                            <p>Product</p>
                            <p>ggg</p>
                        </div>
                        <div className='comp-element'>
                            <p>Component Type</p>
                            <p>Front back</p>
                        </div>
                        <FontAwesomeIcon icon={faBars} style={{ fontSize: '1em', marginLeft: '80px' }} />
                    </div>
                    <hr style={{ margin: '0' }} />
                    <div className='progress-box-container'>
                        <p><span className='status-color'>Satus:</span> Artwork Approved and Released</p>
                    </div>
                </div>
                <div className='component-container'>
                    <p className='comp-element'><img src='https://manageartworks.com/wp-content/uploads/2017/09/highres-ma.png' className='img' alt='img' /></p>

                    <div className='comp-element'>
                        <p>Request Number</p>
                        <p>62P-1C</p>
                    </div>
                    <div className='comp-element'>
                        <p>Initiated By</p>
                        <p>Designer</p>
                    </div>
                    <div className='comp-element'>
                        <p>Initiated Date</p>
                        <p>24-Jul-2020</p>
                    </div>
                    <div className='comp-element'>
                        <p>Product</p>
                        <p>ggg</p>
                    </div>
                    <div className='comp-element'>
                        <p>Component Type</p>
                        <p>Front back</p>
                    </div>
                    <FontAwesomeIcon icon={faBars} style={{ fontSize: '1em', marginLeft: '80px' }} />
                </div>
                <hr style={{ margin: '0' }} />
                <div className='progress-box-container'>
                    <p><span className='status-color'>Satus:</span> Artwork Approved and Released</p>
                </div>
                <div className='component-container'>
                    <p className='comp-element'><img src='https://manageartworks.com/wp-content/uploads/2017/09/highres-ma.png' className='img' alt='img' /></p>

                    <div className='comp-element'>
                        <p>Request Number</p>
                        <p>56P-1C</p>
                    </div>
                    <div className='comp-element'>
                        <p>Initiated By</p>
                        <p>Approver</p>
                    </div>
                    <div className='comp-element'>
                        <p>Initiated Date</p>
                        <p>23-Jul-2020</p>
                    </div>
                    <div className='comp-element'>
                        <p>Product</p>
                        <p>hh</p>
                    </div>
                    <div className='comp-element'>
                        <p>Component Type</p>
                        <p>Back Label</p>
                    </div>
                    <FontAwesomeIcon icon={faBars} style={{ fontSize: '1em', marginLeft: '80px' }} />
                </div>
                <hr style={{ margin: '0' }} />
                <div className='progress-box-container'>
                    <p><span className='status-color'>Satus:</span> Artwork Approved and Released</p>
                </div>
                <div className='component-container'>
                    <p className='comp-element'><img src='https://manageartworks.com/wp-content/uploads/2017/09/highres-ma.png' className='img' alt='img' /></p>

                    <div className='comp-element'>
                        <p>Request Number</p>
                        <p>30P-1C</p>
                    </div>
                    <div className='comp-element'>
                        <p>Initiated By</p>
                        <p>Approver</p>
                    </div>
                    <div className='comp-element'>
                        <p>Initiated Date</p>
                        <p>20-Jul-2020</p>
                    </div>
                    <div className='comp-element'>
                        <p>Product</p>
                        <p>test</p>
                    </div>
                    <div className='comp-element'>
                        <p>Component Type</p>
                        <p>Box</p>
                    </div>
                    <FontAwesomeIcon icon={faBars} style={{ fontSize: '1em', marginLeft: '80px' }} />
                </div>
                <hr style={{ margin: '0' }} />
                <div className='progress-box-container'>
                    <p><span className='status-color'>Satus:</span> Artwork Approved and Released</p>
                </div>

            </div>
        );
    };
}