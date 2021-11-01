import React from 'react';
import styles from './ImageGallery.module.css';
// import PropTypes from 'prop-types';

function ImageGallery({ children }) {
  return <ul className={styles.ImageGallery}>{children}</ul>;
}

export default ImageGallery;

// ImageGallery.propTypes = {
//     children: PropTypes.arrayOf(PropTypes.object).isRequired
// };
