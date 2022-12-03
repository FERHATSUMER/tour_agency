import { ReactComponent as Google } from "./../../assets/google.svg";
import { FaSearch } from "react-icons/fa";
import { FiDelete } from "react-icons/fi";
import "./input.css";
import { useState } from "react";


export default function InputSection() {
  const[value,setValue]=useState()
  const [search,setSearch]=useState()

  function handleDelete(){
    setValue("")
  }
  function handleSearch(){
    setSearch(value)
  }
  return (
  
    <div>
      <div className="google">
        <Google />
      </div>

      <div class="container1">
        <input 
        value={value}
        onChange={(e)=> setValue(e.target.value)}
        type="text"
        name="" 
        placeholder="Search..."
        />
        <button className="delete btn"
        onClick={handleDelete}
        >
          <i>
            <FiDelete />
          </i>
        </button>
        <button 
        onClick={handleSearch}
        className="search btn">
          <i>
            <FaSearch />
          </i>
        </button>
      </div>
      <div>
        Aranan kelime:{value}
      </div>
      <div>
        Gönderilen kelime:{search}
      </div>
    </div>
  );
}
