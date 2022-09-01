import React from 'react'
import ListRender from './ListRender'

function Second() {
    const countries=["India","China","America","Australia","UK","Nepal"]
    // const s = 5
    // this.state={
    //     contry:""
    // }
    const names=[{"id":101,"username":"Shubham","city":"Banglore"},
    {"id":102,"username":"Rahul","city":"Chennai"},
    {"id":103,"username":"Bhola","city":"Delhi"}
]
    
// const myNames=names.map(data=><h2>My name is {data.username} and id is {data.id}, I am in {data.city}</h2>)
    const myNames=names.map(data=><ListRender data={names}/>)

  return (
    <div>
      <h1>List of Countries</h1>
      {/* <ul>
        <li>{countries[0]}</li>
        <li>{countries[1]} </li>
        <li>{countries[2]}</li>
        <li>{countries[3]}</li>
        <li>{countries[4]}</li>
        <li>{countries[5]}</li>
      </ul> */}
      {/* {countries.map(a=><h4>{a}</h4>)} */}
      {myNames}
    </div>
  )

    }
export default Second
