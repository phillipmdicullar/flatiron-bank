import React, { useEffect, useState } from "react";

function App() {

  const [data, setData] = useState([]);

  const fetchData = () => {

    return fetch("http://localhost:3000/transactions")

      .then((res) => res.json())

      .then((d) => setData(d));

  };

  useEffect(() => {

    fetchData();

  }, []);

  const [query, setQuery] = useState("");

  const search_parameters = Object.keys(Object.assign({}, ...data));

  function search(data) {

    return data.filter((data) =>

      search_parameters.some((parameter) =>

        data[parameter].toString().toLowerCase().includes(query)

      )

    );

  }

  return (

    <div className="container">

      <center>

        <h1>Please search by placing description</h1>

      </center>

      <div className="input-box">

        <input

          type="search"

          name="search-form"

          id="search-form"

          className="search-input"

          onChange={(e) => setQuery(e.target.value)}

          placeholder="Search description: "

        />

      </div>

      <center>

        {search(data).map((dataObj) => {

          return (

            <div className="box">

              <thead>
                <tr>
                  <th>Date</th>
                  <th>Description</th>
                  <th>Category</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr key={dataObj.id}>
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