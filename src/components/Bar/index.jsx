const Bar = ({ date, countries, country, setCountry }) => (
  <div className="flex text-gray-400 items-center p-2  mb-4">
    <select
      className="mr-4 p-0.5 bg-gray-200 rounded-md text-gray-600"
      defaultValue={country}
      onChange={(e) => setCountry(e.target.value)}
    >
      {countries.map((opt, index) => (
        <option key={index} value={opt}>
          {opt}
        </option>
      ))}
    </select>
    <hr className="flex-1 border-gray-200" />
    <span className="ml-4 uppercase text-xs">
      Last Updated at: <b>{date}</b>
    </span>
  </div>
);

export default Bar;