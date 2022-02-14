function Playground() {
    const title = "Welcome to my blog";
    const techlink = "http://www.tech4dev.com"
    return (
        <div className="container">
            <h1>{ title }</h1>
            <p className="subtitle">Home of unlimited news and downloads</p>
            <hr />
            <p>Did you know that when you add 2+2 it gives you { 2+2 }</p>
            <p>This paragraph will generate random numbers <b>{ Math.random() }</b>, refresh the page to see the action
            </p>
            <p>This paragraph displays an array, but it's is merged { ["Ayo",1,"Mide",2,"Ade",3,"Yemi",4] }</p>
            <a href={ techlink }>Go to Tech4dev</a>
        </div>
    );
}

export default Playground;