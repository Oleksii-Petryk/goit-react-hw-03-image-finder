import { Component } from 'react';
import styles from './Searchbar.module.css';
import { toast } from 'react-toastify';

class Searchbar extends Component {
  state = {
    searchImage: '',
  };

  handleSearchChange = e => {
    this.setState({ searchImage: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.searchImage.trim() === '') {
      return toast.error('Please enter name of requested image');
    }

    const { searchImage } = this.state;
    this.props.onSubmit(searchImage);
    this.setState({ searchImage: '' });
  };

  render() {
    return (
      <header className={styles.Searchbar}>
        <form className={styles.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={styles.button}>
            <span className={styles.label}>Search</span>
          </button>

          <input
            className={styles.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.searchImage}
            onChange={this.handleSearchChange}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
