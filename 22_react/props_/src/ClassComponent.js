// import React from 'react'
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// class ClassComponent extends React.Component{
class ClassComponent extends Component {
  student = '하리보';
  // 클래스형 컴포넌트는 render 함수 필수
  render() {
    const { name } = this.props;
    return (
      <div>
        console.log('this.props',this.props)
        <h1>Hi {this.student}</h1>
        <p>여기는 Class Component</p>
        <p>
          새로운 컴포넌트의 이름은 <b>{name}</b>
        </p>
      </div>
    );
  }

  //   static defaultProps = {
  //     name: '젤리별별',
  //   };
  //   static propTypes = {
  //     name: PropTypes.string,
  //   };
}
// default도 없어야 isRequired 동작함
ClassComponent.defaultProps = {
  name: '젤리별별',
};
ClassComponent.propTypes = {
  name: PropTypes.string.isRequired,
};
export default ClassComponent;
