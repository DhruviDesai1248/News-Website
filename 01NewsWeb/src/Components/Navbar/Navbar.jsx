import { Disclosure } from '@headlessui/react';
import { useState } from 'react';
import NewsBoard from '../NewsBoard'; // Import NewsBoard component

const navigation = [
  { name: 'GENERAL', href: '#', current: true },
  { name: 'BUSINESS', href: '#', current: false },
  { name: 'SPORTS', href: '#', current: false },
  { name: 'SCIENCE', href: '#', current: false },
  { name: 'TECHNOLOGY', href: '#', current: false },
  { name: 'HEALTH', href: '#', current: false },
  { name: 'ENTERTAINMENT', href: '#', current: false },  
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar({ setCategory, setSearchQuery, setArticles }) {
  const [activeCategory, setActiveCategory] = useState('GENERAL');
  const [searchText, setSearchText] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('in'); // Initialize selectedCountry state

  const handleCategoryClick = (name) => {
    setActiveCategory(name);
    setCategory(name);
  };

  const handleSearch = async () => {
    setSearchQuery(searchText);
    try {
      const url = `https://newsapi.org/v2/everything?q=${searchText}&apiKey=${import.meta.env.REACT_APP_NEWS_API_KEY}`;
      const response = await fetch(url);
      const data = await response.json();
      setArticles(data.articles);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  const handleCountryChange = (event) => {
    const selectedCountry = event.target.value;
    setSelectedCountry(selectedCountry);
  };

  return (
    <div>
      <Disclosure as="nav" className="bg-red-800">
        <div className="mx-auto max-w-11xl px-2 sm:px-4 lg:px-4">
          <div className="relative flex h-16 items-center justify-between">
            {/* Navigation */}
            <div className="flex flex-1 items-center justify-start">
              <div className="hidden sm:ml-2 sm:block">
                <div className="flex space-x-4">
                  {navigation.map((item, index) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.name === activeCategory ? 'bg-black text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'rounded-md px-4 py-2 text-sm font-medium'
                      )}
                      onClick={() => handleCategoryClick(item.name)}
                      aria-current={item.current ? 'page' : undefined}
                      style={{ paddingRight: '30px', marginRight: index === navigation.length - 1 ? '30px' : '0' }} 
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            {/* Search Bar */}
            <div className="flex items-center justify-end">
              <input
                type="text"
                placeholder="Search..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className="px-3 py-1 rounded-md border border-gray-300 focus:outline-none focus:border-black focus:ring-500"
                style={{ minWidth: '250px' }}
              />
              <button
                onClick={handleSearch}
                className="px-4 py-1 ml-2 bg-gray-700 text-white rounded-md hover:bg-black focus:outline-none focus:bg-gray-700"
              >
                Search
              </button>
            </div>
            {/* Country Select */}
            <div className="flex items-center justify-end">
              <select
                value={selectedCountry}
                onChange={handleCountryChange}
                className="px-3 py-1 ml-2 rounded-md border border-gray-300 focus:outline-none focus:border-black focus:ring-500"
              >
                <option value="in">India</option>
                <option value="us">United States</option>
                <option value="gb">United Kingdom</option>
                <option value="au">Australia</option>
                <option value="nz">New Zealand</option>
                <option value="ca">Canada</option>
                <option value="za">South Africa</option>
                <option value="tr">Turkey</option>
              </select>
            </div>
          </div>
        </div>
      </Disclosure>
      {/* Render NewsBoard component */}
      <NewsBoard
        category={activeCategory}
        searchQuery={searchText}
        selectedCountry={selectedCountry} // Pass selectedCountry to NewsBoard
      />
    </div>
  );
}
