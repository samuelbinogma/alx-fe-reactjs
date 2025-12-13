import { useQuery } from 'react-query';

const fetchPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) {
        throw new Error('Network response was not okay');
    }
        return response.json();
}
function PostsComponent() {
    const {
        data: posts,
        isLoading,
        isError,
        error,
        refetch,
        isFetching,
    } = useQuery('posts', fetchPosts);

    return (
        <div>
            <h1>Posts from JSONPlaceholder</h1>

            <button onClick={() => refetch()} disabled={isFetching}>
                {isFetching ? 'Refetching...' : 'Refetch Posts'}
            </button>

            {isFetching && !isLoading && (
                <p className='background-update'>Background updating</p>
            )}

            {isLoading && <div className="loading">Loading posts...</div>}

            {isError && (
                <div className='error'>
                    Error: {error?.message || 'failed to fetch posts'} 
                </div> 
            )}

            {posts && (
                <ul>
                    {posts.slice(0, 10).map((post) => (
                        <li key={post.id}>
                            <h3>{post.title}</h3>
                            <p>{post.body}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default PostsComponent