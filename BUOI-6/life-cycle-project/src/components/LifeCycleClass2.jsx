import React from "react";

const users = [
  {
    id: 1,
    name: "user 1",
  },
  {
    id: 2,
    name: "user 2",
  },
  {
    id: 3,
    name: "user 3",
  },
];

class LifeCycleClass2 extends React.PureComponent {
  constructor(props) {
    console.log(">>>> Run contructor: 000");

    super(props);
    // Khai bao state
    this.state = {
      users: [],
    };

    // Biến trạng thái
    this.isComponentMounted = false;
  }

  // Component sinh ra -> chay componentDidMount
  async componentDidMount() {

    setTimeout(() => {
      // chuyen ve isComponentMounted = true -> Call du lieu xong
      this.isComponentMounted = true;

      console.log(">>> run didmout");

      // Mo phong qua trinh Call API
      this.setState({
        users: users,
      });
    }, 3000);
  }

  // Component bị unmount
  componentWillUnmount() {
    this.isComponentMounted = false;
  }

  render() {

    console.log(">>> run render");
    return (
      <div>
        <h1>Component Licycle</h1>
        <div>
          {this.isComponentMounted
            ? this.state.users.map(({ id, name }) => <p key={id}>{name}</p>)
            : "Đang cập nhật"}
        </div>
      </div>
    );
  }
}
export default LifeCycleClass2;

// B1: Chay constructor
// B2: Ve giao dien dau tien
// B3: chay componentDidMount -> Call API
// B4: Ve lai giao dien (re-render)
