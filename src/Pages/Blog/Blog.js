import React from 'react';
import ReactReadMoreReadLess from "react-read-more-read-less";
import './Blog.css'

const Blog = () => {

     return (
          <div className='max-w-5xl mx-auto '>
               <p className='text-center text-xl font-serif font-semibold my-3 underline'>Blogs</p>
               <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-5'>
                    <div className='border shadow-xl p-2 rounded-md'>
                         <ReactReadMoreReadLess
                              charLimit={20}
                              readMoreText={"Read more ▼"}
                              readLessText={"Read less ▲"}
                              readMoreClassName="read-more-less--more"
                              readLessClassName="read-more-less--less"
                         >
                              A quick brown fox jumps over the lazy dog and again a quick brown fox jumps over the lazy dog
                         </ReactReadMoreReadLess>
                    </div>
                    <div className='border shadow-xl p-2 rounded-md'>
                         <ReactReadMoreReadLess
                              charLimit={20}
                              readMoreText={"Read more ▼"}
                              readLessText={"Read less ▲"}
                              readMoreClassName="read-more-less--more"
                              readLessClassName="read-more-less--less"
                         >
                              A quick brown fox jumps over the lazy dog and again a quick brown fox jumps over the lazy dog
                         </ReactReadMoreReadLess>
                    </div>
                    <div className='border shadow-xl p-2 rounded-md'>
                         <ReactReadMoreReadLess
                              charLimit={20}
                              readMoreText={"Read more ▼"}
                              readLessText={"Read less ▲"}
                              readMoreClassName="read-more-less--more"
                              readLessClassName="read-more-less--less"
                         >
                              A quick brown fox jumps over the lazy dog and again a quick brown fox jumps over the lazy dog
                         </ReactReadMoreReadLess>
                    </div>
               </div>
          </div>
     );
};

export default Blog;