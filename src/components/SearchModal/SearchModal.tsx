import './SearchModal.scss';
import { AiOutlineClose } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import { motion } from 'framer-motion';
import React from 'react';

interface IProps {
  isSearchOpen: boolean;
  handleCloseSearch: () => void;
}

export default function SearchModal(props: IProps) {
  const { isSearchOpen, handleCloseSearch } = props;

  const variants = {
    setSearch: { x: 4, y: 14, opacity: 1 },
    notSetSearch: { x: 4, y: 700, opacity: 0 },
  };

  return (
    <div className={isSearchOpen ? 'SearchModal-field search-open' : 'SearchModal-field'}>
      <div className="SearchModal-header">
        <button className="x-button" onClick={handleCloseSearch}>
          <span className="sidebar-button-text">
            <AiOutlineClose className="button-x formobileicon" />
            <span className="button-title">Close</span>
          </span>
        </button>
        <p>Type the keyword or SKU</p>
      </div>
      <motion.div
        className="SearchModal-bottom"
        initial={{
          x: 4,
          y: 700,
          opacity: 0,
        }}
        animate={isSearchOpen ? 'setSearch' : 'notSetSearch'}
        transition={{
          duration: 1.2,
        }}
        variants={variants}
      >
        <div className="SearchModal-bottom-content">
          <input type="text" placeholder="Search..." />
          <button type="submit">
            <BiSearch />
          </button>
        </div>
      </motion.div>
    </div>
  );
}
