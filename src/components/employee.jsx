import React from "react";

// Dummy API endpoint URL
const dataURL = "https://jsonplaceholder.typicode.com/posts";
// const dataURL = 'https://dummyjson.com/products';

// display 10 data items in a table
function fetchData() {
  fetch(dataURL)
    // .then for promise API ( deal with asynchronous tasks )
    .then((response) => {
      return response.json(); // Convert into json
    })
    .then((data) => {
      const limitedData = data.slice(0, 10);
      displayData(limitedData);
      console.log(limitedData);
    });
}

// display data in a table
function displayData(data) {
  const tableInner = document.querySelector("#data-table tbody");

  data.forEach((item) => {
    const row = document.createElement("tr");
    row.innerHTML = `
            <td>${item.id}</td>
            <td>${item.title}</td>
            <td>${item.body}</td>
        `;
    tableInner.appendChild(row);
  });
}

// Call function when the page loads
window.addEventListener("load", fetchData);

export const Employee = (props) => {
  return (
    <div id="employee">
      <div className="container">
        <div className="section-title">
          <h2>Employee details </h2>
        </div>
        <div className="row">
          <div className="employee_table">
            <div
              className="table table-striped table-bordered table-hover"
              id="data-table"
            >
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody></tbody>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
