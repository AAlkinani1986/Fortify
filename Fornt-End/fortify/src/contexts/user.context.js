import { createContext, useState } from 'react'
import { App, Credentials } from 'realm-web'
import { APP_ID } from '../realm/constants'

// Creating a Realm App
// Creating a Realm App Instance
const app = new App(APP_ID)
// Creating a user context to manage and access all the user related functions
// across different components and pages.
export const UserContext = createContext()
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState()

  // Function to log in user into our App Service app using their email & password
  const emailPasswordLogin = async (email, password) => {
    const credentials = Credentials.emailPassword(email, password)
    const authenticatedUser = await app.logIn(credentials)
    setUser(authenticatedUser)
    return authenticatedUser
  }
  // Function to sign up user into our App Service app using their email & password
  const emailPasswordSignup = async (email, password) => {
    try {
      await app.emailPasswordAuth.registerUser(email, password)
      // Since we are automatically confirming our users, we are going to log in
      // the user using the same credentials once the signup is complete.
      return emailPasswordLogin(email, password)
    } catch (error) {
      throw error
    }
  }
  //function to fetch the user (if the user is already logged in) from local storage
  const fetchUser = async () => {
    if (!app.currentUser) return false
    try {
      await app.currentUser.refreshCustomData()
      // Now, if we have a user, we are setting it to our user context
      // so that we can use it in our app across different components.
      setUser(app.currentUser)
      return app.currentUser
    } catch (error) {
      throw error
    }
  }
  // Function to logout user from our App Services app
  const logOutUser = async () => {
    if (!app.currentUser) return false
    try {
      await app.currentUser.logOut()
      // Setting the user to null once loggedOut.
      setUser(null)
      return true
    } catch (error) {
      throw error
    }
  }
  // function to fetch organizations from mongo db
  const getOrganizations = async () => {
    const rests = app.currentUser
      .mongoClient('mongodb-atlas')
      .db('Fortify')
      .collection('Organizations')
      .find()
    return rests
  }
  // function to insert organization in fortify organizations collection
  const InsertOrganization = async (form) => {
    try {
      console.log(form)
      app.currentUser
        .mongoClient('mongodb-atlas')
        .db('Fortify')
        .collection('Organizations')
        .insertOne({
          name: form.name,
          email: form.email,
          aboutUs: form.aboutUs,
          address: form.address,
          phoneNumber: form.phoneNumber,
          image: form.image,
          environmentHIP: {
            applicationControl: form.applicationControl,
            PatchApp: form.PatchApplication,
            configureMS365: form.configureMS365,
            userWebAPP: form.userWebAPP,
            restrictAdminP: form.restrictAdminP,
            patchOP: form.patchOP,
            multiFactorAuth: form.multiFactorAuth,
            backups: form.backups,
          },
          processCapability: {
            penetration: form.penetration,
            developCp: form.developCp,
            developCS: form.developCS,
            developCA: form.developCA,
          },
          incidentResponse: {
            ransomwareAttack: form.ransomwareAttack,
            websiteCom: form.websiteCom,
            userAccountComm: form.userAccountComm,
            dataLoss: form.dataLoss,
            malwareDetect: form.malwareDetect,
          },

          organization_id: app?.currentUser?.id,
        })
    } catch (error) {
      return error
    }
  }
  // function to insert organization in fortify organizations collection
  const InsertVolunteer = async (form) => {
    try {
      console.log(form)
      app.currentUser
        .mongoClient('mongodb-atlas')
        .db('Fortify')
        .collection('Volunteers')
        .insertOne({
          first_name: form.first_name,
          last_name: form.last_name,
          skills: form.skills,
          qualification: form.qualification,
          email: form.email,
          aboutUs: form.aboutUs,
          address: form.address,
          phoneNumber: form.phoneNumber,
          image: form.image,
          environmentHIP: {
            applicationControl: form.applicationControl,
            PatchApp: form.PatchApplication,
            configureMS365: form.configureMS365,
            userWebAPP: form.userWebAPP,
            restrictAdminP: form.restrictAdminP,
            patchOP: form.patchOP,
            multiFactorAuth: form.multiFactorAuth,
            backups: form.backups,
          },
          processCapability: {
            penetration: form.penetration,
            developCp: form.developCp,
            developCS: form.developCS,
            developCA: form.developCA,
          },
          incidentResponse: {
            ransomwareAttack: form.ransomwareAttack,
            websiteCom: form.websiteCom,
            userAccountComm: form.userAccountComm,
            dataLoss: form.dataLoss,
            malwareDetect: form.malwareDetect,
          },

          volunteer_id: app?.currentUser?.id,
        })
    } catch (error) {
      return error
    }
  }
  return (
    <UserContext.Provider
      value={{
        InsertVolunteer,
        getOrganizations,
        user,
        InsertOrganization,
        setUser,
        fetchUser,
        emailPasswordLogin,
        emailPasswordSignup,
        logOutUser,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
