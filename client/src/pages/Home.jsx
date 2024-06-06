import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import PostCard from '../components/PostCard';
import Typewriter from '../components/Typewriter'; // Import Typewriter component

export default function Home() {
  const [posts, setPosts] = useState([]);

  const imageUrls = [
    'https://source.unsplash.com/random/300×300?poems',
    'https://source.unsplash.com/random/300×300?coding',
    'https://source.unsplash.com/random/300×300?poems',
    "https://source.unsplash.com/random/300×300?book",
    "https://source.unsplash.com/random/300×300?poems",
    "https://source.unsplash.com/random/300×300?technology",
  ];

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/post/getPosts');
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);

  return (
    <div className='flex flex-col  px-3 max-w-6xl mx-auto '>
      {/* <div className="flex items-center">
        <h1 className='text-3xl text-blue-700 font-bold lg:text-6xl'>
          <Typewriter text="VerseValley" delay={100} />
        </h1>
      </div> */}

      <div className='carousel-container'>
        <Carousel
          showThumbs={false}
          autoPlay
          infiniteLoop
          interval={3000}
          transitionTime={500}
          showStatus={false}
          showIndicators={false}
        >
          {imageUrls.map((url, index) => (
            <div key={index} className='carousel-image-wrapper'>
              <img src={url} alt={`Carousel image ${index + 1}`} />
            </div>
          ))}
        </Carousel>
      </div>


      <h1 className='font-bold text-teal-500 text-lg lg:text-lg'>
        <Typewriter text="Discover how advancements in various fields are reshaping life, health, and beyond, revolutionizing the way we live and thrive." delay={50} />
      </h1>
      <Link
        to='/search'
        className='text-xs sm:text-sm text-black-500 font-bold hover:underline'
      >
        View all posts
      </Link>


      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7'>
        {posts && posts.length > 0 && (
          <div className='flex flex-col gap-6'>
            <h2 className='text-2xl font-semibold text-center'>Posts</h2>
            <div className='flex flex-wrap gap-12'>
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={'/search'}
              className='text-lg text-teal-500 hover:underline text-center'
            >
              View all posts
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
