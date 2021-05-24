import React from 'react'
import Sdata from './Sdata'
import Card from './Cards';
const Netflix = () => {
    return(
        <Card
          key={Sdata[0].id}
          imgsrc={Sdata[0].imgsrc}
          sname={Sdata[0].sname}
          title={Sdata[0].title}
        />
      );
}
export default Netflix;