import React from 'react'

const ChildD = ({star}) => {
  console.log(star);

  const rating = {
    3: "Tuyen voi luon",
    2: "Binh thuong",
    1: "Rat te"
  }

  // console.log(rating.name);
  return (
    <div>{rating[star]}</div>
  )
}

export default ChildD