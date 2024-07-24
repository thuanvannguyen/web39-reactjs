import React from 'react'

const ChildParentC = ({title, ...test}) => {
  console.log(test);
  return (
    <div>ChildParentC</div>
  )
}

export default ChildParentC