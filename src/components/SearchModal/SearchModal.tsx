import './SearchModal.scss';
import { AiOutlineClose } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import React, { useState } from 'react';

interface IProps {
  isOpen: boolean;
  handleClose: () => void;
}

export default function SearchModal(props: IProps) {
  const { isOpen, handleClose } = props;
  const [toggle, setToggle] = useState(false);

  return (
    <div className="SearchModal-field">
      <div className="SearchModal-header">
        <button className="x-button" onClick={handleClose}>
          <span className="sidebar-button-text">
            <AiOutlineClose className="button-x formobileicon" />
            <span className="button-title">Close</span>
          </span>
        </button>
        <p>Type the keyword or SKU</p>
      </div>
      <div className="SearchModal-bottom">
        <div className="SearchModal-bottom-content">
          <input type="search" placeholder='Search...' />
          <button type='submit'>
            <BiSearch />
          </button>
        </div>
      </div>
    </div>
  );
}
