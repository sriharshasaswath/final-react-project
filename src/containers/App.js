import React, { Component } from 'react';
import { Link } from "react-router-dom";

import '../css/style.css';
import Routing from '../routes'
import { TopNavBar } from '../components'
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

import '@trendmicro/react-sidenav/dist/react-sidenav.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTachometerAlt, faChartLine, faSignOutAlt, faUserCircle, faBriefcase, faFileArchive, faInbox, faProjectDiagram, faDiagramProject, faAddressBook, faSearch, faBookJournalWhills, faSquarePollVertical, faHome } from '@fortawesome/free-solid-svg-icons'

library.add(faTachometerAlt, faChartLine, faSignOutAlt, faUserCircle);

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      sideBarIsOpen: false,
      navMargine: '64px'
    };
  }

  toggleSideBar = () => {
    this.setState({
      sideBarIsOpen: !this.state.sideBarIsOpen
    },
      () => {
        if (this.state.sideBarIsOpen === true) {
          this.setState({
            navMargine: '240px'
          })
        } else {
          this.setState({
            navMargine: '64px'
          })
        }
      });
  }

  closeSideBar = () => {
    if (this.state.sideBarIsOpen === true) {
      this.setState({
        sideBarIsOpen: false
      });
    }
  }

  authenticate() {
    return new Promise(resolve => setTimeout(resolve, 500))
  }

  componentDidMount() {
    this.authenticate().then(() => {
      const ele = document.getElementById('ipl-progress-indicator')
      if (ele) {
        ele.classList.add('available')
        setTimeout(() => {
          ele.outerHTML = ''
        }, 500)
      }
    })
  }

  render() {
    return (
      <div className="">
        <div className="side-nav">
          <SideNav style={{ backgroundColor: '#141b27' }}
            onSelect={(selected) => {
              const to = '/' + selected;
              console.log(to)
            }}
          >
            <SideNav.Toggle onClick={this.toggleSideBar} />
            <SideNav.Nav defaultSelected="Dashboard">
              <NavItem eventKey="Dashboard">
                <NavIcon>
                <Link to="/" style={{textDecoration: 'none'}}><FontAwesomeIcon icon={faHome} style={{ fontSize: '1.75em', marginTop: '14px' }} /></Link>
                </NavIcon>
                <NavText>
                  <Link to="/" style={{textDecoration: 'none'}}>Dashboard</Link>
                </NavText>
              </NavItem>
              <NavItem eventKey="newProject">
                <NavIcon>
                <Link to="newProject" style={{textDecoration: 'none'}}><FontAwesomeIcon icon={faFileArchive} style={{ fontSize: '1.75em', marginTop: '14px' }} /></Link>
                </NavIcon>
                <NavText >
                  <Link to="newProject" style={{textDecoration: 'none'}}>Start a new project</Link>
                </NavText>
              </NavItem>
              <hr style={{color: 'white'}}/>
              <NavItem>
                <NavIcon>
                <FontAwesomeIcon icon={faBriefcase} style={{ fontSize: '1.75em', marginTop: '14px' }} />
                </NavIcon>
                <NavText>Workflows</NavText>
              </NavItem>
              <NavItem eventKey="inbox">
                <NavIcon>
                <Link to="allprojects" style={{textDecoration: 'none'}}><FontAwesomeIcon icon={faInbox} style={{ fontSize: '1.75em', marginTop: '14px' }} /></Link>
                </NavIcon>
                <NavText><Link to="allprojects" style={{textDecoration: 'none'}}>Inbox</Link></NavText>
              </NavItem>
              <NavItem eventKey="myprojects">
                <NavIcon>
                <Link to="allprojects" style={{textDecoration: 'none'}}><FontAwesomeIcon icon={faProjectDiagram} style={{ fontSize: '1.75em', marginTop: '14px' }} /></Link>
                </NavIcon>
                <NavText><Link to="allprojects" style={{textDecoration: 'none'}}>My Projects(75)</Link></NavText>
              </NavItem>
              <NavItem eventKey="allprojects">
                <NavIcon>
                <Link to="allprojects" style={{textDecoration: 'none'}}><FontAwesomeIcon icon={faDiagramProject} style={{ fontSize: '1.75em', marginTop: '14px' }} /></Link>
                </NavIcon>
                <NavText><Link to="allprojects" style={{textDecoration: 'none'}}>All Projects(85)</Link></NavText>
              </NavItem>
              <hr style={{color: 'white'}}/>
              <NavItem >
                <NavIcon>
                <FontAwesomeIcon icon={faAddressBook} style={{ fontSize: '1.75em', marginTop: '14px' }} />
                </NavIcon>
                <NavText>Assest Library</NavText>
              </NavItem>
              <NavItem eventKey="search">
                <NavIcon>
                <Link to="search" style={{textDecoration: 'none'}}><FontAwesomeIcon icon={faSearch} style={{ fontSize: '1.75em', marginTop: '14px' }} /></Link>
                </NavIcon>
                <NavText style={{textDecoration: 'none'}}><Link to="search" style={{textDecoration: 'none'}}>search</Link></NavText>
              </NavItem>
              <NavItem eventKey="browse">
                <NavIcon>
                <Link to="search" style={{textDecoration: 'none'}}><FontAwesomeIcon icon={faBookJournalWhills} style={{ fontSize: '1.75em', marginTop: '14px' }} /></Link>
                </NavIcon>
                <NavText><Link to="search" style={{textDecoration: 'none'}}>browse</Link></NavText>
              </NavItem>
              <hr style={{color: 'white'}}/>
              <NavItem >
                <NavIcon>
                <Link to="reports" style={{textDecoration: 'none'}}><FontAwesomeIcon icon={faSquarePollVertical} style={{ fontSize: '1.75em', marginTop: '14px' }} /></Link>
                </NavIcon>
                <NavText><Link to="reports" style={{textDecoration: 'none'}}>Reports</Link></NavText>
              </NavItem>
              <hr style={{color: 'white'}}/>
            </SideNav.Nav>
          </SideNav>
        </div>
        <header>
          <TopNavBar navMargine={this.state.navMargine} />
        </header>
        <main id="body" style={this.state.sideBarIsOpen === true ? { marginLeft: '240px' } : { marginLeft: '64px' }}>
          <div id="content">
            <Routing />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
