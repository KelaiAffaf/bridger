// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { data } from "./NewComponents/data.js";
import Tag from "./NewComponents/Tag";
import InfoBox from "./NewComponents/InfoBox";

function App() {
  

  const [value, setValue] = useState("");

  const getTags = (data) => {
    const tagsArray = [];

    data.forEach((user) => {
      user.tags.forEach((tag) => {
        if (!tagsArray.includes(tag)) {
          tagsArray.push(tag);
        }
      });
    });

    return tagsArray;
  };

  const uniqueTags = getTags(data);

  return (
    <div 
    style={{ 
      display: "flex", 
      justifyContent: "space-between" , 
      width:"600px" , 
      height:"600px", 
      border:"1px solid black",
      backgroundColor:"red",
      overflow:"hidden",
      position:
     }}
      >
      <div>
        <h1>Tags</h1>
        <h6>Selected Tags</h6>
        <Tag tags={uniqueTags} />
      </div>

      <div 
      style={{
        height: "500px",
        backgroundColor:"red"
      }}
      >
        <input onChange={(e) => setValue(e.target.value)} />
        {data &&
          data.map((user) => (
            <div key={user.id}>
              {(user.title.includes(value) ||
                user.content.includes(value)) && (
                <InfoBox title={user.title} body={user.content} />
              )}
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
