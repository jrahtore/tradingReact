import React, { useEffect, useState } from "react";
import "./TableNSEFO.css";
import NseFO from "./NseFO";
import MAPI from "../../api_test";
export default function TableNSEFO(props) {
  var data = props.data;
  
  const [searchString, setSearchString] = useState(null);
  const [filteredData, setFilteredData] = useState(data);

  const handleChange = (e) => {
    
    data  = filteredData;
    data.forEach((d) => {
      if (e.target.value === d.name) {
        d.isChecked = e.target.checked;
        console.log("here is value of d.isChecked",d.isChecked)
      }
    });

    props.checkBoxClickCTA(e);
  };
  

  async function handleSearchChange  (e)  {
    setSearchString(e.target.value);
    var a=e.target.value 
       var config = {
        method: "GET",
        data:data,
        url: "trading/symbol_search/?search=" +a,
      };
     var result = {};
      await MAPI(config)
                 .then(result => {
                   result = result.data
                  var ret = [];
                  
                  var d = localStorage.getItem("nseFO")
                      var fruites = props.data;
                  result["results"].map((val,i)=>{
                     ret[i] =  { name: val.trading_symbol, isChecked: false };
                   
                   })
                   
                   props.setDataNFOChecked(  fruites );

                   data = ret;
                   const tempArr = [];
                   Object.values(ret).map((d,i)=>{
                     {
                       tempArr.push(d);
                     }
                      
                   });
                   setFilteredData(tempArr);
                 })
                 .catch(error => console.log('error124665', error));
  };
 

  return (
    <div>
      <input
        type="text"
        id="search"
        onChange={handleSearchChange}
        value={searchString}
        placeholder="Search"
      />

      <table id="myTable">
        <tr class="header">
          <th style={{ width: "10%" }}></th>
          <th style={{ width: "90%" }}>Name</th>
        </tr>
        {filteredData &&
          filteredData.map((d) => (
            <tr key={d.name}>
              <td>
                <input
                  type="checkbox"
                  checked={d.isChecked || localStorage.getItem('nseFO')? localStorage.getItem('nseFO').split('/MCX:').join(' ').split('/NFO:').join(' ').split('NFO:').join(' ').split('MCX:').join(' ').split(' ').find(element => element === d.name): ''}
                  onChange={handleChange}
                  value={d.name}
                />
              </td>
              <td>{d.name.toUpperCase()}</td>
            </tr>
          ))}
      </table>
    </div>
  );
}
