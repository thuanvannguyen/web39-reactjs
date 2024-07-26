
const ChildA = ({array}) => {



  // Check array co ton tai gia tri hay khong ? mang rong ?
  if (array.length < 0 ) return <p>Khong ton tai gia tri</p>

  return (
    <>
      {array.map((item, index) => {
        // console.log(item);
        // console.log(index);
        return (
          <h1 key={index}>{item.name}</h1>
        )
      })}
    </>
  )
}

export default ChildA