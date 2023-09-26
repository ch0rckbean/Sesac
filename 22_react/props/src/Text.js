import { Component } from 'react';
import PropTypes from 'prop-types';

class Text extends Component {
  render() {
    const { text, valid } = this.props;
    return (
      <>
        <h3>App 컴포넌트에서 받아온 text: {text}</h3>
        <button onClick={valid}>버튼</button>
      </>
    );
  }
  static defaultProps = {
    text: '기본 text',
  };
  static propTypes = {
    text: PropTypes.string,
  };
}

export default Text;
