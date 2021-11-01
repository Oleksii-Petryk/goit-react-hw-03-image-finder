import { toast } from 'react-toastify';
import React, { Component } from 'react';
import LoadBox from '../Loader/Loader';
import ImageGallery from '../ImageGallery/ImageGallery';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import { API } from '../../services/API';

class LogicApp extends Component {
  state = {
    searchImage: null,
    images: [],
    error: null,
    status: 'idle',
    showModal: false,
    largeImage: '',
    alt: '',
    page: 1,
  };

  componentDidUpdate(prevProps) {
    const prevValue = prevProps.searchImage;
    const currentValue = this.props.searchImage;
    const { page } = this.state;

    if (prevValue !== currentValue) {
      this.setState({ status: 'pending' });
      API(currentValue, page)
        .then(requestedImages =>
          requestedImages.hits.length !== 0
            ? this.setState({
                images: requestedImages.hits,
                page: page + 1,
                status: 'resolved',
              })
            : Promise.reject(
                toast.error(
                  `Images with name "${currentValue}" not found. Try again!!!`,
                ),
              ),
        )
        .catch(error => this.setState({ error, status: 'rejected' }));
    }

    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }

  onLoadMore = () => {
    const currentValue = this.props.searchImage;
    const { page, images } = this.state;
    this.setState({ status: 'pending' });
    API(currentValue, page)
      .then(requestedImages =>
        this.setState({
          images: [...images, ...requestedImages.hits],
          page: page + 1,
          status: 'resolved',
        }),
      )
      .catch(error => this.setState({ error, status: 'rejected' }));
  };

  onOpenModal = ({ tags, largeImageURL }) => {
    const Alt = tags;
    const Url = largeImageURL;
    this.setState({ alt: Alt, largeImage: Url });
    this.setState({ showModal: true });
  };

  onCloseModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { images, error, status, showModal, largeImage, alt } = this.state;

    if (status === 'idle') {
      return <ImageGallery />;
    }

    if (status === 'pending') {
      return <LoadBox />;
    }

    if (status === 'rejected') {
      return <h1>{error.message}</h1>;
    }

    if (status === 'resolved') {
      return (
        <>
          <ImageGallery>
            <ImageGalleryItem images={images} onClick={this.onOpenModal} />
          </ImageGallery>
          {images.length !== 0 && <Button onClick={this.onLoadMore} />}
          {showModal === true && (
            <Modal
              largeImageURL={largeImage}
              alt={alt}
              onClose={this.onCloseModal}
            />
          )}
        </>
      );
    }
  }
}

export default LogicApp;
