import React from 'react'
import Card from './Card.jsx'

const Archived = ({data}) => {
  return (
    <div>
      <Card data={data.filter(el=>el.via)} archive={false}/>
    </div>
  )
}

export default Archived