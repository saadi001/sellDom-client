import React from 'react';
import DownloadApp from '../../DownloadApp/DownloadApp';
import Advertisement from '../Advertisement/Advertisement';

import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';

const Home = () => {
     return (
          <div className=''>
               <Banner></Banner>
               <Advertisement></Advertisement>
               <Categories></Categories>
               <DownloadApp></DownloadApp>
          </div>
     );
};

export default Home;