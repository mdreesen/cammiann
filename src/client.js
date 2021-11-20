import sanityClient from '@sanity/client';
import { Source } from 'graphql';

export default sanityClient({
    productId: process.env.ID,
    dataset: "production"
});