import { CollectionConfig } from 'payload/types';

import { coloredSubhead } from '../../fields/coloredSubhead';
import { emoji } from '../../fields/emoji';
import { heading, headingAsTitle } from '../../fields/heading';
import { requiredField } from '../../utils/functions';

const Heroes: CollectionConfig = {
    slug: 'heroes',
    labels: {
        singular: 'Hero',
        plural: 'Heroes'
    },
    admin: {
        ...headingAsTitle,
        defaultColumns: ['emoji', 'heading', 'updatedAt']
    },
    fields: [...emoji, ...requiredField(heading('h1')), ...coloredSubhead]
};

export default Heroes;
