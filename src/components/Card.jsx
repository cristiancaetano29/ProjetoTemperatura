/* eslint-disable linebreak-style */
import React from 'react';
import propTypes from 'prop-types';

function Card({ data }) {
  const { location, current } = data;

  return (
    <div className="bg-white p-6 mt-10 rounded-lg shadow-md">
      <div className="text-center">
        <span className="block text-xl font-bold text-slate-500">{location.name}</span>
        <span className="text-slate-400 text-sm font-medium">
          {`${location.region}, ${location.country}`}
        </span>
      </div>

      <div className="font-bold text-slate-500 flex mt-4 mb-2">
        <span className="text-7xl">{current.temp_c}</span>
        <span className="text-3xl mt-2">°C</span>
      </div>

      <div className="flex text-center flex-col items-center">
        <img src={current.condition.icon} alt="Tempo" />
        <span className="text-slate-500 font-medium">{current.condition.text}</span>
      </div>
    </div>
  );
}

export default Card;

Card.propTypes = {
  data: propTypes.object,
}.isRequired;
