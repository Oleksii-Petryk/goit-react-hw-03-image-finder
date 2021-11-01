import { Component } from 'react';
import styles from './Button.module.css';

class Button extends Component {
  render() {
    const { onClick } = this.props;
    return (
      <button type="button" className={styles.button} onClick={onClick}>
        Load more
      </button>
    );
  }
}

export default Button;
