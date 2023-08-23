import { GlobalConfig } from 'payload/types';

import { emoji } from '../../fields/emoji';
import { title } from '../../fields/title';

const TestimonialListing: GlobalConfig = {
    slug: 'testimonial-listing',
    fields: [...title, ...emoji]
};

export default TestimonialListing;
