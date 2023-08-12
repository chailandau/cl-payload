import { Field } from 'payload/types';

import { ThumbnailCell } from '../custom/ThumbnailCell';

export const emoji = [
    {
        name: 'emoji',
        type: 'upload',
        relationTo: 'emojis',
        admin: {
            components: {
                Cell: ThumbnailCell
            }
        }
    }
] as Field[];
