import React from 'react'

function ButtonLinks({value,type,color}) {
  return <button className={`btn btn--${type || color} `}>{value}</button>;
}

export default ButtonLinks
