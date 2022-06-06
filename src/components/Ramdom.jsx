/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable linebreak-style */
import React from 'react';

// eslint-disable-next-line react/prop-types
function Ramdola({ data }) {
  // eslint-disable-next-line react/prop-types
  const { location } = data;
  return (
    <div className="flex text-center flex-col items-start pt-7 bg-white mt-10 p-6 rounded-lg shadow-md">
      <span className="block text-xl font-bold text-slate-400">
        latitude:
        {location.lat}
      </span>
      <span className="block text-xl font-bold text-slate-400">
        longitude:
        {location.lon}
      </span>
      <span className="block text-xl font-bold text-slate-400">
        Pesquisado em:
        {location.localtime}
      </span>
    </div>
  );
}

export default Ramdola;
