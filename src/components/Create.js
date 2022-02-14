import { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";


const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Ayo');
    const [isLoading, setIsLoading] = useState(false);
    const history = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newPost = { title, body, author }
        console.log(newPost);

        setIsLoading(true);

        fetch('https://my-json-server.typicode.com/ayoyemi/react-blog-project/posts', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newPost)
        })
        .then(() => {
            alert("post added successfully")
            setIsLoading(false);
            history('/home')
        })
    }
    return (
        <div className="container">
            <h1>Create Post</h1>
            <hr />

            <div className="form">
                <form onSubmit={ handleSubmit }>
                    <label>Post title</label>
                    <input 
                        type="text"
                        required
                        value= { title }
                        onChange={ (e) => setTitle(e.target.value) }
                    />
                    <label>Post body</label>
                    <textarea
                        required
                        value= { body }
                        onChange = { (e) => setBody(e.target.value) }
                    ></textarea>
                    <label>Post author</label>
                    <select
                        required
                        value= { author }
                        onChange = { (e) => setAuthor(e.target.value) }
                    >
                        <option value="Ayo">Ayo</option>
                        <option value="Ade">Ade</option>
                        <option value="Yemi">Yemi</option>
                    </select>
                    { !isLoading && <button>Add post</button> }
                    { isLoading && <button disabled>Adding post...</button> }
                </form>
                <div className="dont-have">
                    <p>Already have an account? <Link to="/login">Login</Link></p>
                </div>
            </div>
        </div>
    );
}
 
export default Create;