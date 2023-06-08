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
      alignItems: "center", 
      gap:44,
      height: "600px", 
      border: "1px solid black",
      overflow: "hidden",
      position: "absolute",
      top: "20%",
      left: "30%",
      padding
    }}
      >
      <div>
        <h1>Tags</h1>
        <h6>Selected Tags</h6>
        <Tag tags={uniqueTags} />
      </div>

      <div 
      style={{
        height: "600px",
        // overflow: "auto",
      }}
      >
        <input
          onChange={(e) => setValue(e.target.value)}
          style={{
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            fontSize: '16px',
            width: '100%',
          }}
        />

       <div
        style={{
          height: "600px",
          overflow: "auto",
      }}
       >
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
    </div>
  );
}

export default App;
