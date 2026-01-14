import React, { useEffect, useState, useTransition } from "react";
import { NavLink, useParams } from "react-router";
import { getIndividualCountriesData ,getBorderCountriesByCodes } from "../../Api/PostApi";

const CountryDetails = () => {
  const params = useParams();
  const [isPending, startTransition] = useTransition();
  const [countryData, setCountryData] = useState(null);
  const [borderNames, setBorderNames] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
            try {
        const res = await getIndividualCountriesData(params.id);
        // API returns an array of countries (usually just one)
        startTransition(() => {
          setCountryData(res.data[0]);
        });
      } catch (error) {
        console.error("Error fetching country data:", error);
      }

    };

    fetchData();
  }, [params.id]);

  console.log(countryData);
  useEffect(() => {
  if (countryData?.borders?.length > 0) {
    getBorderCountriesByCodes(countryData.borders.join(","))
      .then((res) => {
        const names = res.data.map((c) => c.name.common);
        setBorderNames(names);
      })
      .catch((err) => console.log(err));
  }
}, [countryData]);


  // Show loader while waiting
  if (!countryData) {
    return <p>Loading country data...</p>;
  }

    const {
   
    currencies,
    languages,
    borders,
  } = countryData;

   const currencyNames = currencies
    ? Object.values(currencies)
        .map((c) => `${c.name} (${c.symbol})`)
        .join(", ")
    : "N/A";

  const languageList = languages ? Object.values(languages).join(", ") : "N/A";
const borderList =
  borderNames.length > 0
    ? borderNames.join(", ")
    : "No border countries";

  return (
    <>
    <section className="w-full h-[90vh] flex justify-center items-center">
        <div className=" md:grid-cols-2  w-[50%] h-[400px] grid grid-row-2  countryData-container">
       <div className="w-full flex justify-center items-center">
      <img src={countryData.flags.png} alt={countryData.name.common} />
      </div>
      <div className="country-details-container w-full flex flex-col justify-center">
         <h2 className='font-bold text-2xl'>{countryData.name.common}</h2>
      <p className='text-white '><span className="text-gray-500  text-xl">Population:</span> {countryData.population.toLocaleString()}</p>
      <p className='text-white '><span className="text-gray-500  text-xl ">Region:</span> {countryData.region}</p>
      <p className='text-white '><span className="text-gray-500   text-xl">Capital:</span> {countryData.capital && countryData.capital[0]}</p>
      <p className='text-white '><span className="text-gray-500  text-xl ">Currencies:</span> {currencyNames}</p>
      <p className='text-white '><span className="text-gray-500  text-xl ">Languages:</span> {languageList}</p>
      <p className='text-white '><span className="text-gray-500  text-xl ">Borders:</span> {borderList}</p>



     </div>
     
      </div>
      <NavLink className=" md:top-160  w-[200px] rounded-2xl h-[40px] bg-gray-800 text-white font-bold text-xl border-1  absolute top-190 cursor-pointer flex justify-center " to='/country'> <button className="cursor-pointer" >Go Back</button></NavLink>
      
      </section>
    </>
  );
};

export default CountryDetails;
