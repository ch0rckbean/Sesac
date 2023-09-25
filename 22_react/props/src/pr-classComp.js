import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ClassComp extends Component {
  render() {
    const { text, valid } = this.props;
    return (
      <>
        console.log({text});
        <button onClick={valid} style={{ position: 'absolute', left: '80%' }}>
          버튼
        </button>
      </>
    );
  }
  static defaultProps = {
    text: '이건 기본 text props 입니다.',
  };
  static propTypes = {
    text: PropTypes.string,
  };
}
export default ClassComp;
