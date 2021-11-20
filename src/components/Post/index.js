import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import sanityClient from "../../client.js";

const Post = () => {

    const [postData, setPost] = useState(null);

    useEffect(() => {
        sanityClient
            .fetch(`*[_type == "post"]{
                title,
                slug,
                mainImage{
                    asset->{
                        _id,
                        url
                    },
                    alt
                }
            }`)
            .then((data) => setPost(data))
            .catch(console.error)
    })

    return (
        <main>
            <section>

                {postData && postData.map((post, index) => (
                    <article>
                        <Link to={"/post/" + post.slug.data} key={post.slug.current}>
                            <span>
                                <img src={post.mainImage.asset.url}
                                    alt={post.mainImage.alt}
                                />
                                <span>
                                    <h3>{post.title}</h3>
                                </span>
                            </span>
                        </Link>
                    </article>
                ))
                }
            </section>
        </main>
    );
}

export default Post;