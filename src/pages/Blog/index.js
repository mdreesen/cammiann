import React, { useState, useEffect } from 'react';

import Post from '../../components/Post';

const Blog = () => {

    return (
        <main>
            <section>
                <h1>Blog</h1>
                <div>
                    <Post />
                </div>
            </section>
        </main>
    );
}

export default Blog;