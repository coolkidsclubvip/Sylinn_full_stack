import React from 'react'
import {Link} from "react-router-dom"
import FelicityPage from './FelicityPage'

function BathPage() {
  return (
    <div className="mt-5">
      <h1>BathPage</h1>
      <Link to={"/products/bath/felicity"}> Felicity</Link>
      {/* <FelicityPage/> */}
    </div>
  );
}

export default BathPage