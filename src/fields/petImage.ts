import { Field } from 'payload/types';

import { ThumbnailCell } from '../custom/ThumbnailCell';

export const petImage = (name: string) =>
    [
        {
            name,
            type: 'upload',
            relationTo: 'images',
            admin: {
                components: {
                    Cell: ThumbnailCell
                }
            }
        }
    ] as Field[];
