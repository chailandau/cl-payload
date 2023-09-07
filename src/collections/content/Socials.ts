import { CollectionConfig } from 'payload/types';

import { icon } from '../../fields/icon';
import { label, labelAsTitle } from '../../fields/label';
import { isValidUrl, requiredField } from '../../utils/functions';

const Socials: CollectionConfig = {
    slug: 'socials',
    admin: {
        ...labelAsTitle,
        defaultColumns: ['label', 'icon', 'linksTo', 'updatedAt']
    },
    fields: [
        ...requiredField(icon),
        ...requiredField(label),
        {
            name: 'socialLink',
            type: 'text',
            admin: {
                description:
                    'Input a valid URL. Example: "https://google.com/".'
            },
            validate: (val) => {
                if (!isValidUrl(val)) {
                    return 'Please enter a valid URL.';
                }
            }
        }
    ]
};

export default Socials;
