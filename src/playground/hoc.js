// Higher Order Component (HOC) - a Component that renders another component

import React from 'react'
import ReactDOM from 'react-dom'

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info: { props.info }</p>
  </div>
)

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      { props.isAdmin && <p>Private info</p> }
      <WrappedComponent {...props} />
    </div>
  )
}

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      { props.isAuthenticated ? (
        <WrappedComponent { ...props } />
      ) : (
        <p>Need to authenticate, sucka</p>
      )}
    </div>
  )
}

const AdminInfo = withAdminWarning(Info)
const AuthInfo = requireAuthentication(Info)

// ReactDOM.render(<AdminInfo isAdmin={ true } info="details" />, document.getElementById('app'))
ReactDOM.render(<AuthInfo isAuthenticated={ true } info="details" />, document.getElementById('app'))
