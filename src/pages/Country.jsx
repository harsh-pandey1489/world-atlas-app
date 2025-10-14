import React, { useEffect, useState, useTransition } from 'react'
import { getCountriesData } from '../Api/PostApi';
import Loader from '../components/Ui/Loader';
import { NavLink } from 'react-router';

const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);
  const [type, setType] = useState('');
  const [input, setInput] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const res = await getCountriesData();
      const apidata = res.data;
      
      startTransition(() => {
        setCountries(apidata);
      });
    };

    fetchData();
  }, []); 


  const handleInput = (e) => {
    setInput(e.target.value);

  }

  const filteredCountries = countries.filter((country) => {
    const search = input ? country.name.common.toLowerCase().includes(input.toLowerCase()) : country
    const matchesRegion = type ? country.region === type : true;

    return search && matchesRegion
  });

  if (isPending) {
    return <Loader />;
  }
  return (
    <div className='country-container'>

      <div className='country-box'>
        <div className='text-white country-upper-box'>
          <div>
            <input onChange={handleInput} type='text' placeholder='search here for country' className=' country-input' />

          </div>

          <div >
            <select className='w-[140px] text-white text-sm font-bold  border-2 rounded-sm select' value={type} onChange={(e) => setType(e.target.value)} >
              <option className='text-black' value=''>Select Region</option>
              <option className='text-black' value='Asia'>Asia</option>
              <option className='text-black' value='Europe'>Europe</option>
              <option className='text-black' value='Americas'>Americas</option>
            </select>
          </div>

        </div>
        <ul>
          {
            filteredCountries.map((item, index) => (
              <div key={index} className='list-container'>
                <li key={index} className='country-card'>
                  <img src={item.flags?.png} alt={item.name?.common} />
                  <div className='w-[160px] country-content'>
                    <h3 className='font-bold text-xl'>{item.name?.common}</h3>
                    <p className='text-white'><span className='text-gray-500'>Capital:</span> {item.capital?.[0]}</p>
                    <p className='text-white'> <span className='text-gray-500'>Population:</span> {item.population}</p>
                    <p className='text-white'> <span className='text-gray-500'>Region:</span> {item.region}</p>
                  </div>
                  <NavLink to={`/country/${item.name?.common}`}>

                    <button>Read More</button></NavLink>
                </li>
              </div>
            ))
          }





        </ul>
        {/* <div className='country-card-container'>
       
               </div> */}
      </div>

    </div>
  )
}

export default Country
