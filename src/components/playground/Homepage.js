import { useState } from "react";

function Homepage() {
    const [articles, setArticles] = useState([
        {id: 1, author: "Ayo", title: "My favourite things", body: "Lorem Ipsum"},
        {id: 2, author: "Ade", title: "My favourite things", body: "Lorem Ipsum"},
        {id: 3, author: "Yemi", title: "My favourite things", body: "Lorem Ipsum"}
    ])
   
    return (  
        <div className="content">
           <h1>Homepage</h1>
        </div>
    );
}

export default Homepage;