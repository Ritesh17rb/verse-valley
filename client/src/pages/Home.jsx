import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import PostCard from '../components/PostCard';
import Typewriter from '../components/Typewriter'; // Import Typewriter component

export default function Home() {
  const [posts, setPosts] = useState([]);
  const imageUrls = [
    "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // local image
    "https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1634838080334-28befa9efe80?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

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
