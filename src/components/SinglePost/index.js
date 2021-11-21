// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import sanityClient from "../../client.js";
// import imageUrlBuilder from '@sanity/image-url';

// const builder = imageUrlBuilder(sanityClient);
// function urlFor(source) {
//     return builder.image(source);
// }

// const Post = () => {

//     const [singlePost, setSinglePost] = useState(null);

//     const { slug } = useParams();

//     useEffect(() => {
//         sanityClient
//             .fetch(`*[slug.current]{
//                 title,
//                 slug,
//                 mainImage{
//                     asset->{
//                         _id,
//                         url
//                     },
//                     alt
//                 }
//             }`)
//             .then((data) => setPost(data))
//             .catch(console.error)
//     })

//     return (
//         <main>
//             <section>
//             </section>
//         </main>
//     );
// }

// export default Post;