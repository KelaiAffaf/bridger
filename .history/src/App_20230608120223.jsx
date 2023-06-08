// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { data } from "./NewComponents/data.js";
import Tag from "./NewComponents/Tag";
import InfoBox from "./NewComponents/InfoBox";

function App() {
  

  const [value, setValue] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);

  const handleTagClick = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };


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
        gap: 44,
        height: "700px", 
        border: "1px solid black",
        overflow: "scroll",
        position: "absolute",
        top: "20%",
        left: "30%",
        padding: "16px"
      }}
    >
      <div 
      >
        <h1>Tags</h1>
        <h6>Selected Tags</h6>
        <div style={{ display: 'flex', gap: 10, marginBottom: '10px', flexWrap:"wrap" }}>
          {selectedTags.map((tag) => (
            <div key={tag} style={{ backgroundColor: 'grey', padding: '5px', borderRadius: '5px' }}>
              {tag}
            </div>
          ))}
        </div>
        <Tag 
        tags={uniqueTags}
        onTagClick={handleTagClick}
         />
      </div>
  
      <div style={{ height: "600px" }}>
        <input
          onChange={(e) => setValue(e.target.value)}
          style={{
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            fontSize: '16px',
            width: '100%',
            boxSizing: 'border-box' 
          }}
        />
       
        <div style={{ overflow: "scroll" }}>
          {data &&
            data.map((user) => (
              <div key={user.id}>
                
                {((user.title.includes(value) ||
                  user.content.includes(value)
                  ||
                  user.tags.some((tag) => selectedTags.includes(tag)))
                  ) && (
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
