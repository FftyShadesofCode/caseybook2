import React from 'react';

const PostForm = (props) => {
    return (
        <form onSubmit={props.submit}>
            <input
                type="text"
                name="title"
                value={props.post.title}
                placeholder="Enter a title ya chump!"
                onChange={props.change}
            />
            <input
                type="text"
                name="content"
                value={props.post.content}
                placeholder="Enter some content ya chump!"
                onChange={props.change}
            />
            <input type="submit" value="Submit your post!" />
        </form>
    )
}

export default PostForm;