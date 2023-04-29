// ---------------------------filer-------------------------------
// import { axios } from "https://unpkg.com/axios@1.1.2/dist/axios.min.js";

// ---------------filter------------------------------

import axios from "https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm";

let filterField = document.getElementById("filter");
let filterResult = document.getElementById("filter-results");
let clearList = [];

async function getUser() {
  try {
    const response = await axios.get("https://reqres.in/api/users?page=2");
    // return response;
    console.log(response);
    response.data.data.forEach((element) => {
      let li = document.createElement("li");
      console.log("avtoooo");
      li.textContent = `${element.first_name} ${element.last_name}`;
      clearList.push(li);
      filterResult.appendChild(li);
    });
  } catch (error) {
    console.error(error);
  }
}
getUser();

function filterUser(searchItem) {
  clearList.forEach((item) => {
    if (item.innerText.toLowerCase().includes(searchItem.toLowerCase())) {
      item.classList.remove("hide");
    } else {
      item.classList.add("hide");
    }
  });
}

filterField.addEventListener("keyup", function (event) {
  filterUser(event.target.value);
});
