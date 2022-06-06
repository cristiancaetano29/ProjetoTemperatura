import React, { useState } from 'react';
import fetchData from './services/api';
import initialData from './helpers/initialData';

import Card from './components/Card';
import Ramdola from './components/Ramdom';

function App() {
  // eslint-disable-next-line no-unused-vars
  const [cidade, setCidade] = useState('');
  const [data, setData] = useState(initialData);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchData(cidade).then((response) => {
      setData(response);
    });
  };

  return (
    <div className="flex flex-col w-full h-screen items-center justify-center">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Cidade"
          className="p-3 rounded-lg outline-none"
          value={cidade}
          onChange={({ target: { value } }) => setCidade(value)}
        />
        <button
          type="submit"
          className="bg-blue-500 p-3 rounded-lg ml-3 text-white font-bold"
        >
          Pesquisar
        </button>
      </form>
      <Card data={data} />
      <Ramdola data={data} />
    </div>
  );
}

export default App;
