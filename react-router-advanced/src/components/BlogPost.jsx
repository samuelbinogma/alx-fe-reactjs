import { useParams } from 'react-router-dom';

export default function BlogPost() {
    const { postId } = useParams();
    return (
        <div className='blog-post'>
            <h1>Blog Post</h1>
            <p>Viewing post with ID: <strong>{postId}</strong></p>
            <p>This is a simple dynamic blog post page</p>
        </div>
    );
}