import React from 'react'
import { useRouteError } from 'react-router-dom'

function Error() {

  const error = useRouteError()

  return (
    <div>Something went wrong {error.status}</div>
  )
}

export default Error