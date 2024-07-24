const ChildParentA = ({ data, email, age }) => {
  // console.log(data);
  // console.log(email);
  console.log(age);

  return (
    <>
      <h1>Hello Anh Em Lop {data}</h1>
      <p>email: {email}</p>
      <p>Tuoi: {age}</p>
    </>
  );
};

export default ChildParentA;
