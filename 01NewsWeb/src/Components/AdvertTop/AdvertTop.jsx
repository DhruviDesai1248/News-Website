import React from "react";

function AdvertTop() {
  const url = 'https://www.kindpng.com/picc/m/724-7248125_sky-news-logo-png-transparent-png.png';
  const url1 = "https://mir-s3-cdn-cf.behance.net/project_modules/disp/95593152827745.591f2cedd6a3a.gif";

  return (
    <div className="mx-auto my-14 max-w-8xl px-2 sm:px-6 lg:px- text-black-600 font-normal text-sm break-words font-sans box-border">
      <div className="relative flex h-12 items-center justify-between">
        <div className="flex items-center justify-center">
          <a className="flex items-center space-x-4">
            <img style={{ width: '250px', height: '90px' }} src={url} alt="Sky News" />
            <div>
              <h1 className="text-lg text-black font-semibold mb-2">Illuminating the World's Headlines</h1>
              <p className="text-gray-600">Stay updated with the latest news from around the globe.</p>
            </div>
          </a>
        </div>
        <div className="hidden sm:block px-6">
          <div className="w-40 h-40 rounded-full overflow-hidden shadow-lg">
            <img className="w-full h-full object-cover" src={url1} alt="Air India" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdvertTop;
