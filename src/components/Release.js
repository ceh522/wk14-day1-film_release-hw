import React from 'react'

function Release({ children, url, name}) {
  return (
    <li>
    <h4>{children}</h4>
    <a href={url}>{name}</a>
    </li>
  )
}

export default Release
