import React from 'react'
import Sdata from './Sdata'
import Card from './Cards';

const Amezon = () => {
    return(
        <Card
          key={Sdata[3].id}
          imgsrc={Sdata[3].imgsrc}
          sname={Sdata[3].sname}
          title={Sdata[3].title}
        />
      )
}
export default Amezon;