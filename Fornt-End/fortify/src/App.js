import './App.css'
import './component/homepage/Style.css'

import NavBar from './NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import NotFoundPage from './pages/NotFoundPage'
import React from 'react'
import OrganisationProfile from './pages/OrganisationProfile'
import Volunteers from './pages/VolunteersPage'
import VolunteerProfile from './component/volunteers/volunteerProfile'
import AboutPage from './pages/AboutPage'
import OrganisationsPage from './pages/OrganisationsPage'
import { UserProvider } from './contexts/user.context'
import PrivateRoute from './Route/PrivateRoute'
//import VolunteerNetwork from './pages/Volunteernetwork'

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <div className="App">
          <header className="App-header">
            <NavBar />
          </header>

          <div id="page-body">
            <Routes>
              <Route path="/about" element={<AboutPage />} />
              <Route path="/" element={<Homepage />} />
              <Route path="/volunteers" element={<Volunteers />} />
              {/*<Route path="/VNetwork" element={<VolunteerNetwork />} />*/}
              <Route
                path="/volunteers/:volunteerId"
                element={<VolunteerProfile />}
              />
              {/* We are protecting our organizations Page from unauthenticated */}
              {/* users by wrapping it with PrivateRoute here. */}
              <Route element={<PrivateRoute />}>
                <Route
                  exact
                  path="/organizations"
                  element={<OrganisationsPage />}
                />
              </Route>
              <Route
                path="/organizations/:organizationId"
                element={<OrganisationProfile />}
              />
              <Route path="/*" element={<NotFoundPage />} />
            </Routes>
          </div>
        </div>
      </UserProvider>
    </BrowserRouter>
  )
}

export default App
