import React from 'react'
import { memo } from 'react'

const Search = ({handleSearch}) => {

  console.log("Search rendered");
  //"Search rendered" is printed at component mount and thats obvious. 
  
  // actually we have wrapped our component inside the memo, so it shouldnt render whenever i shuffle, as handleSearch is not changing. but everytime i click shuffle, "Search rendered" is printed.

  //WHY? - in react functions are re-created at every render
  //actually the contents are the same, but still its getting new everytime the component re-renders


  return (
    <div>
      <input type="text" onChange={(e) => handleSearch(e.target.value)}/>
    </div>
  )
}

export default memo(Search)

/*

In React, the memo function is used to memoize functional components. Memoization is a performance optimization technique that helps prevent unnecessary renders of a component. When a component is memoized using memo, it will only re-render if its props have changed.

it will only re-render if the props (handleSearch in this case) change.
*/


/*
const Search = ({ handleSearch }) => {
  return (
    <div>
      <input type="text" onChange={(e) => handleSearch(e.target.value)} />
    </div>
  );
};

export default Search;


here There is no memoization applied to the Search component. This means that the component will re-render whenever its parent re-renders, regardless of whether the props have changed or not.

In summary, adding memo to a component is a way to optimize performance by preventing unnecessary renders when the props of that component remain the same. It can be especially useful when dealing with components that receive props from a parent and don't need to re-render unless the props change.

*/

/*

const obj1 = { name: 'John' };
const obj2 = { name: 'John' };

const reference1 = obj1;
const reference2 = obj1;

console.log(obj1 === obj2); // false (referential equality: different objects)
console.log(reference1 === obj1); // true (referential equality: same object)
console.log(reference1 === reference2); // true (referential equality: same object)

*/