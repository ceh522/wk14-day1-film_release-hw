import React, { Fragment } from "react"
import Release from "./Release"

function ReleaseList({ releases }) {

  const releaseComponents = releases.map(release => {
    return (
      <Release
      key={release.id}
      url={release.url}
      name={release.name}>
      </Release>
    )
  })

  return (
    <Fragment>
    <ul className="release-list">
    {releaseComponents}
    </ul>
    </Fragment>
  )
}


export default ReleaseList
    //
