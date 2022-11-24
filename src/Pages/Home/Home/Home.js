import React from 'react';
import Advertisement from '../Advertisement/Advertisement';

import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';

const Home = () => {
     return (
          <div className=''>
               <Banner></Banner>
               <Advertisement></Advertisement>
               <Categories></Categories>
          </div>
     );
};

export default Home;