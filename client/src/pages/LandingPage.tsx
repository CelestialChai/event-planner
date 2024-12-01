// import React from "react";
import './LandingPage.css'
import skyline from '../assets/WeddingPlanner/skyline.jpg'
import table from '../assets/WeddingPlanner/table.jpg'
import bride from '../assets/WeddingPlanner/bride.jpg'
import ballroom from '../assets/WeddingPlanner/ballroom.jpg'
import aisle from '../assets/WeddingPlanner/aisle.jpg'
import barn from '../assets/WeddingPlanner/barn.jpg'
import flowers from '../assets/WeddingPlanner/flowers.jpg'
import beach from '../assets/WeddingPlanner/beach.jpg'
import dance from '../assets/WeddingPlanner/dance.jpg'

const WeddingLandingPage = () => {
  return (
    <div className="bg-gray-100">
      {/* Header */}
      <header className="bg-pink-600 shadow-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-pink-600">Tie Your Knot</h1>
          <nav className="space-x-6">
            <a href="#moments" className="text-gray-700 hover:text-pink-600">
              Create Moments
            </a>
            <a href="#events" className="text-gray-700 hover:text-pink-600">
              My Events
            </a>
            <a href="#catering" className="text-gray-700 hover:text-pink-600">
              Catering
            </a>
            <a href="#venues" className="text-gray-700 hover:text-pink-600">
              Event Venues & Decor
            </a>
            <a href="#about-us" className="text-gray-700 hover:text-pink-600">
              About Us
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
         className="bg-cover bg-center h-screen text-white bg">
        <div className="flex flex-col justify-center items-center h-full bg-black bg-opacity-40">
          <h1 className="text-4xl lg:text-6xl font-bold">
            Your Dream Wedding Awaits
          </h1>
          <p className="text-lg lg:text-xl mt-4">
            Let us make your special day unforgettable.
          </p>
          <button className="mt-6 px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-lg">
            Get Started
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-6 max-w-screen-xl">
          <h2 className="text-3xl font-bold text-center text-gray-800">
            Our Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
                <h3 className="text-2xl font-semibold text-pink-600">
                Venue Selection
                </h3>
                <img src={skyline} alt="Wedding Skyline" style={{ width: "80%", height: "auto", margin: "0 auto" }} />
              <p className="text-gray-600 mt-4">
                Choose from the best venues for your big day.

              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-semibold text-pink-600">
                Catering Services
              </h3>
              <img src={table} alt="Dinner Table" style={{ width: "80%", height: "auto", margin: "0 auto" }} />
              <p className="text-gray-600 mt-4">
                A wide range of menus crafted by top chefs.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-semibold text-pink-600">
                Photography
              </h3>
              <img src={bride} alt="Bride Photo" style={{ width: "80%", height: "auto", margin: "0 auto" }} />
              <p className="text-gray-600 mt-4">
                Capture every precious moment with professional photographers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pictures/Moments Section */}
      <section id="moments" className="py-16 bg-white">
      <div className="container mx-auto px-6 max-w-screen-xl">
          <h2 className="text-3xl font-bold text-center text-gray-800">
            Cherished Moments
          </h2>
          <p className="text-center text-gray-600 mt-4">
            Relive the magic through stunning moments captured during your
            weddings.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <img
              src={dance}
              alt="Moment 1"
              className="rounded-lg shadow-md"
            />
            <img
              src={beach}
              alt="Moment 2"
              className="rounded-lg shadow-md"
            />
            <img
              src={flowers}
              alt="Moment 3"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Venues Section */}
      <section id="venues" className="py-16 bg-gray-100">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <h2 className="text-3xl font-bold text-center text-gray-800">
            Exquisite Venues
          </h2>
          <p className="text-center text-gray-600 mt-4">
            Find the perfect location for your wedding, from grand halls to
            serene gardens.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold text-pink-600">
                Grand Ballroom
              </h3>
              <img src={ballroom} alt="Ballroom Venue" style={{ width: "80%", height: "auto", margin: "0 auto" }} />
              <p className="text-gray-600 mt-2">
                A spacious venue for luxurious celebrations.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold text-pink-600">
                Garden Bliss
              </h3>
              <img src={aisle} alt="Garden Venue" style={{ width: "80%", height: "auto", margin: "0 auto" }} />
              <p className="text-gray-600 mt-2">
                Perfect for outdoor weddings with breathtaking views.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold text-pink-600">
                Rustic Barn
              </h3>
              <img src={barn} alt="Barn Venue" style={{ width: "80%", height: "40%", margin: "0 auto" }} />
              <p className="text-gray-600 mt-2">
                A charming choice for a cozy, intimate wedding.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Catering Section */}
      <section id="catering" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800">
            Catering Delights
          </h2>
          <p className="text-center text-gray-600 mt-4">
            Indulge your guests with exceptional cuisine crafted by our chefs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <img
              src="/WeddingPlanner/cake.jpg"
              alt="Wedding Cake"
              className="rounded-lg shadow-md"
            />
            <img
              src="/WeddingPlanner/food-apps.jpg"
              alt="Food Spread"
              className="rounded-lg shadow-md"
            />
            <img
              src="/WeddingPlanner/buffet.jpg"
              alt="Buffet Spread"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Photography Section */}
      <section id="photographs" className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800">
            Photography
          </h2>
          <p className="text-center text-gray-600 mt-4">
            Capture every moment with our professional photographers.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <img
              src="/WeddingPlanner/rings.jpg"
              alt="Wedding Rings"
              className="rounded-lg shadow-md"
            />
            <img
              src="/WeddingPlanner/shoes.jpg"
              alt="Bride's Shoes"
              className="rounded-lg shadow-md"
            />
            <img
              src="/WeddingPlanner/heartHands.jpg"
              alt="Photo 3"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-gray-800 text-center text-gray-400">
        <p>&copy; 2024 Tie Your Knot. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default WeddingLandingPage;