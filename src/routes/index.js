import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { Dashboard,Reports,NewProject,AllProjects,Search, Page404 } from '../containers'

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
  <Routes>
    <Route exact path="/" element={<Dashboard/>} />
    <Route exact path="/reports" element={<Reports/>} />
    <Route exact path="/newProject" element={<NewProject/>} />
    <Route exact path="/allprojects" element={<AllProjects/>} />
    <Route exact path="/search" element={<Search/>} />
    <Route element={<Page404/>} />
  </Routes>
)