import React from "react";

class LifeCycleClass extends React.Component {
  constructor(props) {
    // Phuong thuc co san truoc khi tao state
    super(props);

    // Cach tao ra 1 state (Trang thai)
    this.state = { color: "red" };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ color: "blue" });
    }, 3000);
  }

  render() {
    // Cach console.log state de debug
    // console.log(this.state.color);

    return (
      <h1 style={{ color: this.state.color }}>Hello 500 anh em lop web39!</h1>
    );
  }
}

export default LifeCycleClass;

// B1: constructor -> Doc xong de day
// B2: render() -> Tao ra giao tron lan dau tien
// B3: chay vao componentDidMount() check cap gi nua khong ?
