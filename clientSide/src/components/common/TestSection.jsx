import { useEffect, useState } from "react";
import api from '../../services/api'

function TestSection() {
  const [toiletData,setToiletData]=useState([])


async function getToilet(){
 const response = await api.get("/toilet");
 return response
}

useEffect(() => {
  async function fetchData() {
    const response = await getToilet();
    setToiletData(response.data);
  }
  fetchData();
}, []);

console.log("toiletData in test section:", toiletData);
  return (
    <div>
      <div>
        <ul>
          {toiletData.map((item, index) => (
            <div key={index}>
              {" "}
              <li>
                <b>NAME:</b> {item.name}
              </li>
              <li>
                <b>DESCRIPTION:</b> {item.description}
              </li>
              <li>
                <b>PRICE:</b> {item.rrp}
              </li>
              <li>
                <b>STOCK:</b> {item.stock}
              </li>
              <hr />
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TestSection