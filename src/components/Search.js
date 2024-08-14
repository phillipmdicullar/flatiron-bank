import React, { useEffect, useState } from "react";

function App() {
  // State to store the fetched transaction data
  const [data, setData] = useState([]);

  // State to store the user's search query
  const [query, setQuery] = useState("");

  // Function to fetch data from the server
  const fetchData = () => {
    return fetch("https://flatiron-backend-virid.vercel.app/transactions") // Fetch data from the server
      .then((res) => res.json()) // Parse the response as JSON
      .then((d) => setData(d)); // Update the data state with the fetched data
  };

  // useEffect hook to fetch data when the component mounts
  useEffect(() => {
    fetchData(); // Call fetchData once when the component mounts
  }, []); // Empty dependency array means this effect runs only once

  // Determine the search parameters from the data keys
  const search_parameters = Object.keys(Object.assign({}, ...data));

  // Function to filter data based on the search query
  function search(data) {
    return data.filter((data) =>
      search_parameters.some((parameter) =>
        data[parameter].toString().toLowerCase().includes(query) // Check if any parameter includes the query
      )
    );
  }

  return (
    <div className="container">
      <div className="typewriter">
      <center>
        <h1>Please search by placing description</h1>
      </center>
      </div>
      <div className="input-box">
        <input
          type="search"
          name="search-form"
          id="search-form"
          className="search-input"
          onChange={(e) => setQuery(e.target.value)} // Update the query state on input change
          placeholder="Search description: " // Placeholder text for the search input
        />
      </div>
      <center>
        {search(data).map((dataObj) => {
          return (
            <div className="box" key={dataObj.id}> {/* Added key prop for each item */}
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Description</th>
                  <th>Category</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{dataObj.date}</td>
                  <td>{dataObj.description}</td>
                  <td>{dataObj.category}</td>
                  <td>{dataObj.amount}</td>
                </tr>
              </tbody>
            </div>
          );
        })}
      </center>
    </div>
  );
}

export default App;
