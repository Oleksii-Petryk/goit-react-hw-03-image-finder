import React, { Component } from 'react';
import styles from './ImageGalleryItem.module.css';

class ImageGalleryItem extends Component {
  setSelectedImgs = e => {
    const tags = e.target.dataset.alt;
    const largeImageURL = e.target.dataset.url;
    this.props.onClick({ tags, largeImageURL });
  };

  render() {
    const { images } = this.props;

    return images.map(({ id, webformatURL, tags, largeImageURL }) => (
      <li
        className={styles.ImageGalleryItem}
        key={id}
        onClick={this.setSelectedImgs}
      >
        <img
          className={styles.image}
          src={webformatURL}
          data-alt={tags}
          data-url={largeImageURL}
          alt={tags}
        />
      </li>
    ));
  }
}

export default ImageGalleryItem;
