const ChildB = ({ array }) => {
  // console.log("props childB: ",array);

  const lengthArr = array.length;
  // console.log(lengthArr);

  return (
    <>
      {lengthArr > 0
        ? array.map((item, index) => {
            return <h1 key={index}>{item.name}</h1>;
          })
        : "Khong co du lieu"}
    </>
  );
};

export default ChildB;
