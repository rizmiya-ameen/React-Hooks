import React, { useEffect, useState } from 'react'

const EffectOne = () => {

  const [ resourceType, setResourceType] = useState("Posts")
  const [ items, setItems ] = useState([])

  /*
  01
  useEffect(() => {
    console.log("Renders")
  }) 
  Executed everytime component renders
  */


  /*
  02
  useEffect(() => {
    console.log("Renders")
  }, [resourceType]) 
  whenever the resourceType changes, this will be executed
  */

  /*
  03
  console.log("Renders")

  useEffect(() => {
    console.log("resourceType changed")
  }, [resourceType])
  //if i click "post for the second time, the useEffect hook doesnt executed eventhough the page re-renders."
  */

  /*
  04
  useEffect(() => {
    console.log("onMount")
  }, [])
  //This runs only at component mount
  */

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then(response => response.json())
      .then(json => setItems(json))
  }, [resourceType])

  return (
    <div>
      <h1>useEffect</h1>
      <button onClick={() => setResourceType("Posts")}>Posts</button>
      <button onClick={() => setResourceType("Users")}>Users</button>
      <button onClick={() => setResourceType("Comments")}>Comments</button>
      <h3>{resourceType}</h3>

      {items.slice(0,5).map(item => {
        return <pre>{JSON.stringify(item)}</pre>
      })}
      <hr />
    </div>
  )
}

export default EffectOne