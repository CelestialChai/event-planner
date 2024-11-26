import React from "react";

const WeddingLandingPage = () => {
  return (
    <div className="bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-md">
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
        className="bg-cover bg-center h-screen text-white"
        style={{
          backgroundImage: "url('back 1.jpg')",
        }}
      >
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
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800">
            Our Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-semibold text-pink-600">
                Venue Selection
              </h3>
              <p className="text-gray-600 mt-4">
                Choose from the best venues for your big day.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-semibold text-pink-600">
                Catering Services
              </h3>
              <p className="text-gray-600 mt-4">
                A wide range of menus crafted by top chefs.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-semibold text-pink-600">
                Photography
              </h3>
              <p className="text-gray-600 mt-4">
                Capture every precious moment with professional photographers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pictures/Moments Section */}
      <section id="moments" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800">
            Cherished Moments
          </h2>
          <p className="text-center text-gray-600 mt-4">
            Relive the magic through stunning moments captured during our
            weddings.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <img
              src="wed 2.jpg"
              alt="Moment 1"
              className="rounded-lg shadow-md"
            />
            <img
              src="wed 4.jpg"
              alt="Moment 2"
              className="rounded-lg shadow-md"
            />
            <img
              src="wed 5.jpg"
              alt="Moment 3"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Venues Section */}
      <section id="venues" className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
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
              <p className="text-gray-600 mt-2">
                A spacious venue for luxurious celebrations.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold text-pink-600">
                Garden Bliss
              </h3>
              <p className="text-gray-600 mt-2">
                Perfect for outdoor weddings with breathtaking views.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold text-pink-600">
                Rustic Barn
              </h3>
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
              src="cake 1.jpg"
              alt="Catering 1"
              className="rounded-lg shadow-md"
            />
            <img
              src="cake 2.jpg"
              alt="Catering 2"
              className="rounded-lg shadow-md"
            />
            <img
              src="cake 3.jpg"
              alt="Catering 3"
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
              src="deco 1.jpg"
              alt="Photo 1"
              className="rounded-lg shadow-md"
            />
            <img
              src="deco 2.jpg"
              alt="Photo 2"
              className="rounded-lg shadow-md"
            />
            <img
              src="deco 3.jpg"
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
