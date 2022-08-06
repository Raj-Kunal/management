import React from 'react'
import "./home.css"
const Home = () => {

    function getAllDaysInMonth(year, month) {
        const date = new Date(year, month, 1);
        const dates = [];
      
        while (date.getMonth() === month) {
          dates.push(new Date(date).getDate());
          date.setDate(date.getDate() + 1);
        }
      
        return dates;
      }
    const now = new Date();
    const mnth = getAllDaysInMonth(now.getFullYear(), now.getMonth());
    console.log(mnth)

  return (
        <div className="container">
        <h1>Attendance Sheet</h1>

<table>
  <thead>
    <tr>
      <th class="name-col">Student Name</th>
       {(mnth).map((index, num) => 
          <th>  {num + 1}</th>
      )}
      <th class="missed-col">Days Missed-col</th>
    </tr>
  </thead>
  <tbody>
    <tr class="student">
      <td class="name-col">Slappy the Frog</td>
      {(mnth).map((index, num) => 
           <td class="attend-col"><input type="checkbox" /></td>
      )}
     
      
      <td class="missed-col">0</td>
    </tr>
    <tr class="student">
      <td class="name-col">Lilly the Lizard</td>
      <td class="attend-col"><input type="checkbox" /></td>
      <td class="attend-col"><input type="checkbox"/></td>
      <td class="attend-col"><input type="checkbox"/></td>
      <td class="attend-col"><input type="checkbox"/></td>
      <td class="attend-col"><input type="checkbox"/></td>
      <td class="attend-col"><input type="checkbox"/></td>
      <td class="attend-col"><input type="checkbox"/></td>
      <td class="attend-col"><input type="checkbox"/></td>
      <td class="attend-col"><input type="checkbox"/></td>
      <td class="attend-col"><input type="checkbox"/></td>
      <td class="attend-col"><input type="checkbox"/></td>
      <td class="attend-col"><input type="checkbox"/></td>
      <td class="missed-col">0</td>
    </tr>
    <tr class="student">
      <td class="name-col">Paulrus the Walrus</td>
      <td class="attend-col"><input type="checkbox" /></td>
      <td class="attend-col"><input type="checkbox"/></td>
      <td class="attend-col"><input type="checkbox"/></td>
      <td class="attend-col"><input type="checkbox"/></td>
      <td class="attend-col"><input type="checkbox"/></td>
      <td class="attend-col"><input type="checkbox"/></td>
      <td class="attend-col"><input type="checkbox"/></td>
      <td class="attend-col"><input type="checkbox"/></td>
      <td class="attend-col"><input type="checkbox"/></td>
      <td class="attend-col"><input type="checkbox"/></td>
      <td class="attend-col"><input type="checkbox"/></td>
      <td class="attend-col"><input type="checkbox"/></td>
      <td class="missed-col">0</td>
    </tr>
    <tr class="student">
      <td class="name-col">Gregory the Goat</td>
      <td class="attend-col"><input type="checkbox" /></td>
      <td class="attend-col"><input type="checkbox"/></td>
      <td class="attend-col"><input type="checkbox"/></td>
      <td class="attend-col"><input type="checkbox"/></td>
      <td class="attend-col"><input type="checkbox"/></td>
      <td class="attend-col"><input type="checkbox"/></td>
      <td class="attend-col"><input type="checkbox"/></td>
      <td class="attend-col"><input type="checkbox"/></td>
      <td class="attend-col"><input type="checkbox"/></td>
      <td class="attend-col"><input type="checkbox"/></td>
      <td class="attend-col"><input type="checkbox"/></td>
      <td class="attend-col"><input type="checkbox"/></td>
      <td class="missed-col">0</td>
    </tr>
    <tr class="student">
      <td class="name-col">Adam the Anaconda</td>
      <td class="attend-col"><input type="checkbox" /></td>
      <td class="attend-col"><input type="checkbox"/></td>
      <td class="attend-col"><input type="checkbox"/></td>
      <td class="attend-col"><input type="checkbox"/></td>
      <td class="attend-col"><input type="checkbox"/></td>
      <td class="attend-col"><input type="checkbox"/></td>
      <td class="attend-col"><input type="checkbox"/></td>
      <td class="attend-col"><input type="checkbox"/></td>
      <td class="attend-col"><input type="checkbox"/></td>
      <td class="attend-col"><input type="checkbox"/></td>
      <td class="attend-col"><input type="checkbox"/></td>
      <td class="attend-col"><input type="checkbox"/></td>
      <td class="missed-col">0</td>
    </tr>

  </tbody>

 
</table>
    </div>

  )
  }
  export default Home







