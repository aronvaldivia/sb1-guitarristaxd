import React from 'react';
import { Mail, Phone, Instagram, Youtube, Music } from 'lucide-react';

function App() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section 
        className="h-screen relative flex items-center justify-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-4">Alex Rivers</h1>
          <p className="text-xl md:text-2xl text-red-500 font-semibold">Independent Guitarist & Composer</p>
        </div>
      </section>

      {/* Music Section */}
      <section className="bg-black py-20 px-4">
        <h2 className="text-4xl font-bold text-center text-green-500 mb-12">Latest Releases</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Urban Nights",
              image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?auto=format&fit=crop&q=80",
              year: "2024"
            },
            {
              title: "Electric Dreams",
              image: "https://images.unsplash.com/photo-1509973385458-f9609c21b528?auto=format&fit=crop&q=80",
              year: "2023"
            },
            {
              title: "Acoustic Soul",
              image: "https://images.unsplash.com/photo-1462965326201-d02e4f455804?auto=format&fit=crop&q=80",
              year: "2023"
            }
          ].map((album, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg">
              <img 
                src={album.image} 
                alt={album.title}
                className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white">{album.title}</h3>
                <p className="text-red-400">{album.year}</p>
                <div className="flex items-center mt-2">
                  <Music className="w-5 h-5 text-green-500 mr-2" />
                  <span className="text-white text-sm">Listen Now</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-zinc-900 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-green-500 mb-12">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white mb-4">Contact Info</h3>
              <div className="flex items-center text-gray-300">
                <Mail className="w-6 h-6 text-red-500 mr-3" />
                <span>alex.rivers@email.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="w-6 h-6 text-red-500 mr-3" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex space-x-4 mt-6">
                <a href="#" className="text-red-500 hover:text-red-400 transition-colors">
                  <Instagram className="w-8 h-8" />
                </a>
                <a href="#" className="text-red-500 hover:text-red-400 transition-colors">
                  <Youtube className="w-8 h-8" />
                </a>
              </div>
            </div>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 bg-zinc-800 text-white rounded-lg border border-zinc-700 focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 bg-zinc-800 text-white rounded-lg border border-zinc-700 focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full p-3 bg-zinc-800 text-white rounded-lg border border-zinc-700 focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-red-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-red-600 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;