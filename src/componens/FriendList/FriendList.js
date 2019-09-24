import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

const FriendList = ({ friends, alt }) => {
  return (
    <ul className={styles.listItem}>
      {friends.map(el => (
        <li className={styles.item} key={el.id}>
          <span className={el.isOnline ? styles.statusRed : styles.status} />
          <img src={el.avatar} alt={alt} width="48" />
          <p>{el.name}</p>
        </li>
      ))}
    </ul>
  );
};
FriendList.defaultProps = {
  alt: 'Foto',
};
FriendList.propTypes = {
  alt: PropTypes.string,
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }),
  ).isRequired,
};

export default FriendList;
