import Banner from '../../components/Banner/Banner';
import React, { useEffect, useState } from 'react';
import {Button,  Flex, Stack, Wrap, WrapItem } from '@chakra-ui/react';
import { BsFillGridFill, BsFillGrid3X3GapFill } from 'react-icons/bs';
import { ChevronRight } from 'react-bootstrap-icons';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

import { TfiLayoutGrid4Alt } from 'react-icons/tfi';
import { VscFilter } from 'react-icons/vsc';
import { GrFormClose } from 'react-icons/gr';
import '../shop/shop.scss';
import { Link } from 'react-router-dom';



export default function Shop() {

  const [isActive, setActive] = useState(false);
  const [isFilter, setFilter] = useState(false);
 

  
  const handleToggle = () => {
    setActive(!isActive);
  };
  const handleFilterToggle = () => {
    setFilter(!isFilter);
  };


  return (
    <section className="shop">
      <Banner
        title="Shop"
        pageName="Shop"
        coverPhoto="https://casona.familab.net/wp-content/uploads/2021/09/heading_bg_dark.jpg"
        sliderExist={true}
        bannerHeight="440px"
      />
      <div className="container">
        <div className="shop-control">
          <Flex gap="20"  justifyContent="space-between">
            <button className="filtering" onClick={handleFilterToggle}>
              <div className="filterDropdown">
                <VscFilter className="filterIco" />
                <span>FILTER</span>
              </div>

              <div id="filterList" className={isFilter ? 'active' : ''}>
                <div  className='hideFilter'>
                  <button className='closefilter'>
                   <GrFormClose className='closeIcon' /><span>Hide Filters</span>
                  </button>
                  </div>
                <Flex gap="20" alignItems="center" justifyContent="space-between">
                  <div className="productCategories">
                    <p>Product Categories</p>
                    <div className="categoryList">
                    <ul className='menuList'>
                      <li>
                        <Link to='/'>Accessories</Link>
                      </li>
                      <li>
                        <Link to='/'>Backpacks</Link>
                      </li>
                      <li className='digital'>
                        <Link to='/'>Digitals </Link>
                        <button className='icon' ><MdOutlineKeyboardArrowDown/></button>
                        <ul  id='subMenu'>
                          <li>
                            <Link to='/'>Headphones</Link>
                          </li>
                          <li>
                            <Link to='/'>Speaker</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to='/'>Wallets</Link>
                      </li>
                      <li>
                        <Link to='/'>Watches</Link>
                      </li>
                      <li>
                        <Link to='/'>Water Bootles</Link>
                      </li>
                      <li>
                        <Link to='/'></Link>
                      </li>
                    </ul>
                    </div>
                    
                  </div>
                  <div className="productTags">
                    <p>Product Tags</p>
                    <Stack direction='column'>
                           <Wrap spacing={10}>
                              <WrapItem>
                                <Button className='btn'><span>Bosch</span></Button>
                              </WrapItem>
                              <WrapItem>
                                <Button className='btn'><span>Corkcicle</span></Button>
                              </WrapItem>
                              <WrapItem>
                                <Button className='btn'><span>Handmade</span></Button>
                              </WrapItem>
                              <WrapItem>
                                <Button className='btn'><span>Kinto</span></Button>
                              </WrapItem>  <WrapItem>
                                <Button className='btn'><span>Lether</span></Button>
                              </WrapItem>  <WrapItem>
                                <Button className='btn'><span>Lifestyle</span></Button>
                              </WrapItem>  <WrapItem>
                                <Button className='btn'><span>Orbitkey</span></Button>
                              </WrapItem>  <WrapItem>
                                <Button className='btn'><span>Pet</span></Button>
                              </WrapItem>  <WrapItem>
                                <Button className='btn'><span>Soma</span></Button>
                              </WrapItem>
                             </Wrap>
                      </Stack>
                  </div>
                  <div className="productColor">
                    <p>Product Color</p>
                    <div className="color-groups">
                      <button className="color colorOne"></button>
                      <button className="color colorTwo"></button>
                      <button className="color colorThere"></button>
                      <button className="color colorFour"></button>
                      <button className="color colorFive"></button>
                      <button className="color colorSix"></button>
                      <button className="color colorSeven"></button>
                      <button className="color colorEight"></button>
                      <button className="color colorNine"></button>
                      <button className="color colorTen"></button>
                      <button className="color colorEleven"></button>
                      <button className="color colorTwelve"></button>
                      <button className="color colorThereteen lastest"></button>
                    </div>
                  </div>
                  <div className="productSize">
                    <p>Product Size</p>
                    <div className="btnGroups">
                      <button className='large'>Large</button>
                      <button className='medium'>Medium</button>
                      <button className='small'>Small</button>

                    </div>
                  
                  </div>
                  <div className="filterBySize">
                    <p>Filter By Size</p>
                  
                  </div>
                </Flex>
              </div>
            </button>

            <div className="results">
              <p>Showing 1–12 of 27 results</p>
            </div>
            <div className="card-view">
              <button>
                <BsFillGridFill className="grid gridOne" />
              </button>
              <button>
                <BsFillGrid3X3GapFill className="grid gridTwo" />
              </button>
              <button>
                <TfiLayoutGrid4Alt className="grid gridThere" />
              </button>
            </div>
            <div className="sort">
              <button className="default-sorting" onClick={handleToggle}>
                <p>Default sorting</p>
                <ChevronRight className="rightIco" />
                <div id="sortingList" className={isActive ? 'active' : ''}>
                  <div className="item">
                    <p>Default sorting</p>
                  </div>
                  <p>Sort by popularity</p>
                  <p>Sort by avarage rating</p>
                  <p>Sort by lastest</p>
                  <p>Sort by price:low to high</p>
                </div>
              </button>
            </div>
          </Flex>
        </div>
      </div>
    </section>
  );
}
