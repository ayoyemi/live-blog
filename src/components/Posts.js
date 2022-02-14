import avatar from './images/avatar.jpg'
import date_avatar from './images/dt.png'
import comment_avatar from './images/cmt.png'
import { Link } from 'react-router-dom';

const Posts = ({posts, title}) => {
    
    return (
        <div className="container">
            <h3>{ title }</h3>
            {posts.map((post) => (
                <div className="posts-preview" key={ post.id }>
                    <div className="post-title">
                        <h3><Link to={`/posts/${post.id}`}>{ post.title }</Link></h3>
                    </div>
                    <div className="post-details">
                        <img src={ date_avatar } alt="Author avatar" className="avatar" />
                        <span className="post-date"> 12-12-2021</span> &nbsp;&nbsp;|&nbsp;&nbsp;
                        <img src={ avatar } alt="Author avatar" className="avatar" />
                        <span className="post-author"> {post.author}</span> &nbsp;&nbsp;|&nbsp;&nbsp;
                        <img src={ comment_avatar } alt="Author avatar" className="avatar" />
                        <span> No comments</span>
                    </div>
                    <div className="post-body">
                        <p className="post-body-preview">{ post.body }</p> <Link to={`/posts/${post.id}`}><span>Read more...</span></Link>
                    </div>
                    
                    
                </div>
        ))}
        </div>
    );
}
 
export default Posts;