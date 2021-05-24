import React from 'react'
import '../src/Assets/Style/style.css'
import Amezon from './Compoents/Amezon';
import Netflix from './Compoents/Netflix';

const favSeries = 'amezon';

// const FavS = () => {
//   if(favSeries === 'netflix'){
//     return <Netflix />;
//   } 
//   else {
//     return <Amezon />;
//   }
// }
const App = () => {
  return(
    <>
      <h1 className="heading_style">Top 5 NetFlix Series</h1>
      {/* <FavS /> */}
      {favSeries === 'netflix' ?  <Netflix /> :   <Amezon />}
    </>
  );
}
export default App;