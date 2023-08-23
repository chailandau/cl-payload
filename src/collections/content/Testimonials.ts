import { CollectionConfig } from 'payload/types';

import { author, authorAsTitle } from '../../fields/author';
import { image } from '../../fields/image';
import { testimonial } from '../../fields/testimonial';
import { requiredField } from '../../utils/functions';

const Testimonials: CollectionConfig = {
    slug: 'testimonials',
    admin: {
        ...authorAsTitle
    },
    fields: [
        ...requiredField(author),
        {
            name: 'linkedin',
            label: 'LinkedIn',
            type: 'text'
        },
        ...requiredField(image),
        ...testimonial
    ]
};

export default Testimonials;
