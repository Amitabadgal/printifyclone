import React, { useRef } from 'react';
import { faCheck, faStar, faStarHalfAlt, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import shopify from "./shopify.png";
import trustpilot from "./trust.png";

const Main = () => {
  const scrollContainerRef = useRef(null);

  const photos = [
    
    { url: './2.jpg', caption: 'Kids Tshirt' },
    { url: './3.jpg', caption: 'Cup' },
    { url: './5.jpg', caption: 'Bag' },
    { url: './6.jpg', caption: 'Sticker' },
    { url: './8.jpg', caption: 'Hoodies' },
  ];

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="pt-32">
      
      <section className="text-black-500 py-10">
        <div className="flex">
          <div className="container px-4 text-left w-full lg:w-3/5 lg:ml-32">
            <h1 className="text-7xl font-sans font-bold mb-4">CREATE AND SELL CUSTOM PRODUCTS</h1>
            <div className="container mx-auto p-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-x-0.5 gap-y-0.5">
                <div>
                  <span className="p-0 m-0"><FontAwesomeIcon icon={faCheck} className="text-black" /><span className="ml-2">100% Free to use</span></span>
                </div>
                <div>
                  <span className="p-0 m-0"><FontAwesomeIcon icon={faCheck} className="text-black" /><span className="ml-2">900+ products</span></span>
                </div>
                <div>
                  <span className="p-0 m-0"><FontAwesomeIcon icon={faCheck} className="text-black" /><span className="ml-2">Global Delivery</span></span>
                </div>
              </div>
            </div>
            <button className="bg-customGreen text-black text-l font-semibold px-12 py-4 mt-8 mb-4 rounded-md hover:bg-customGreen1 transition-colors duration-200 ease-in-out">
              Get started for free
            </button>
            <p className="my-4">No credit card required</p>
            <div className="grid sm:grid-cols-2 gap-1 lg:grid-cols-5 mt-10 ">
      <div className="flex items-center "> 
      
      
        <div className="font-bold text whitespace-nowrap w-full mr-4">Trusted by 10M+ sellers</div>
        <div className="mx-4">|</div>
        <div className="flex items-center text-xl">
          <FontAwesomeIcon icon={faStar} className="text-gray-800" />
          <FontAwesomeIcon icon={faStar} className="text-gray-800" />
          <FontAwesomeIcon icon={faStar} className="text-gray-800" />
          <FontAwesomeIcon icon={faStar} className="text-gray-800" />
          <FontAwesomeIcon icon={faStarHalfAlt} className="text-gray-800 " />
          <span className="font-bold mx-4">4.8</span>
          <span className="mr-4">on</span>
        </div>
      

      <div className="flex items-center "> 
        <img src={shopify} alt="S" className="h-8 mr-2" />
        <span className="font-bold mr-8">Shopify</span>
      </div>
      <div className="flex items-center "> 
        <img src={trustpilot} alt="S" className="h-8" />
        <span className="font-bold">Trustpilot</span>
      </div>
      
    </div>
      </div>
          </div>

          <div className="container w-2/5 pr-32">
            <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
              <source src={`${process.env.PUBLIC_URL}/video.mp4`} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

     
      <section className="bg-gray-200 py-32">
        <div className="flex">
          <div className="container px-4 text-left w-full lg:w-1/2 lg:ml-32">
            <h1 className="text-5xl font-sans font-bold">Start with $0</h1>
            <h1 className="text-5xl font-sans font-bold mb-12">investment</h1>
            <ol className="list-decimal pl-6 w-[70%] space-y-4">
              <li>
                <h3 className="text-xl font-bold">Select your product</h3>
                <p className="text-gray-700">Choose from over 1000 top-quality products including brands you know and love.</p>
                <hr className="border-t-2 border-gray-300 mt-4" />
              </li>
              <li>
                <h3 className="text-xl font-bold">Add your design</h3>
                <p className="text-gray-700">Designing your products is easy and fun!</p>
                <hr className="border-t-2 border-gray-300 mt-4" />
              </li>
              <li>
                <h3 className="text-xl font-bold">Start selling</h3>
                <p className="text-gray-700">You set profit margin, we take care of production and delivery</p>
                <hr className="border-t-2 border-gray-300 mt-4" />
              </li>
            </ol>
            <button className="bg-customBrown text-white text-lg font-bold px-12 py-4 mt-8 mb-4 rounded-md hover:bg-customBrown1 transition-colors duration-200 ease-in-out">
              Start designing
            </button>
            <div>
              <a href="#" className="text-customBrown font-bold hover:text-customPurple underline">
                Learn More
              </a>
            </div>
          </div>

          <div className="container w-1/2 pr-32">
            <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
              <source src={`${process.env.PUBLIC_URL}/video2.mp4`} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      
      <h1 className="text-5xl font-sans font-bold text-center my-32">Your next bestseller awaits</h1>
      <div className="flex items-center justify-center mb-32">
        <button onClick={scrollLeft} className="p-2 bg-gray-200 rounded-full shadow-md hover:bg-gray-300 ml-32 ">
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>

        <div ref={scrollContainerRef} className="flex overflow-x-auto scrollbar-hide mx-32 space-x-4" style={{ scrollSnapType: 'x mandatory' }}>
          {photos.map((photo, index) => (
            <div key={index} className="min-w-[250px] h-60 flex flex-col items-center bg-cover bg-center border" style={{ scrollSnapAlign: 'start' }}>
              <div className="w-full h-48 bg-cover bg-center my-8" style={{ backgroundImage: `url(${photo.url})`, width: '150px', height: '130px' }} />
              <p className="text-center mt-2 font-medium text-gray-700 hover:text-customPurple hover:underline">{photo.caption}</p>
            </div>
          ))}
        </div>

        <button onClick={scrollRight} className="p-2 bg-gray-200 rounded-full shadow-md hover:bg-gray-300 mr-32 ">
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
      <div className="bg-gray-100 py-16">
      <div className="container mx-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
       
          <div>
            <h2 className="text-xl font-bold mb-4">Integrations</h2>
            <ul className="space-y-2">
              <li>Shopify</li>
              <li>Etsy</li>
              <li>eBay</li>
              <li>Amazon</li>
              <li>TikTok Shop</li>
              <li>PrestaShop</li>
              <li>BigCommerce</li>
              <li>Wix</li>
              <li>WooCommerce</li>
              <li>Squarespace</li>
              <li>Printify API</li>
              <li>Printify Pop-Up Store</li>
              <li>Shutterstock</li>
            </ul>
          </div>

         
          <div>
            <h2 className="text-xl font-bold mb-4">Discover</h2>
            <ul className="space-y-2">
              <li>Blog</li>
              <li>Guides</li>
              <li>Products</li>
              <li>Etsy print-on-demand</li>
              <li>Shopify print-on-demand</li>
              <li>Woocommerce print-on-demand</li>
              <li>Wix print-on-demand</li>
              <li>Squarespace print-on-demand</li>
              <li>Make Your Own Shirt</li>
              <li>Brands</li>
            </ul>
          </div>

        
          <div>
            <h2 className="text-xl font-bold mb-4">Start Selling</h2>
            <ul className="space-y-2">
              <li>Pricing</li>
              <li>Shipping Rates</li>
              <li>Mockup Generator</li>
              <li>Custom T-shirts</li>
              <li>Custom Hoodies</li>
              <li>Custom Mugs</li>
              <li>Custom Socks</li>
              <li>Custom Backpacks</li>
              <li>Sell on Etsy</li>
              <li>Sell on Social Media</li>
              <li>Custom Products</li>
              <li>Start a Clothing Line</li>
              <li>Start POD Business</li>
            </ul>
          </div>

       
          <div>
            <h2 className="text-xl font-bold mb-4">Printify & Design</h2>
            <ul className="space-y-2">
              <li>Print Providers</li>
              <li>Experts Program</li>
              <li>Printify Express Delivery</li>
              <li>Become a Partner</li>
              <li>Printify Quality Promise</li>
              <li>Jobs</li>
              <li>Webinars</li>
              <li>Printing Profits Podcast</li>
              <li>Affiliate</li>
              <li>Contact Sales</li>
              <li>POD Glossary</li>
              <li>Network Fulfillment Status</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
    </div>
  );
};

export default Main;
