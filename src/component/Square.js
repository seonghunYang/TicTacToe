//react는 반드시 가져와야함
import React from 'react';

//React.component를 가져온다
class Square extends React.Component {

  //render는 class가 반드시 가져야한다
  // this.props에 변수들이 다 담아진다 {value: "1"} 이런식
  render() {
    //여기서 변경x read only
    const { value } = this.props;
    return (
      //여기서 나오는 html같은 엘리먼트는(jsx) 리엑트 컴포넌트이다. 그걸 html처럼 만들어줌 babel이 추후 컴파일해준다.
      //class가 위랑 이름이 같아서 className으로 써야함
    <button className="square" onClick={() => {this.props.onClick()}}>{value}</button>
    );
  }
}

//export를 꼭 해줘야한다.
export default Square;