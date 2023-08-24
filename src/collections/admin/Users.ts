import { CollectionConfig } from 'payload/types';

const Users: CollectionConfig = {
    slug: 'users',
    auth: {
        useAPIKey: true
    },
    admin: {
        useAsTitle: 'email'
    },
    access: {
        read: () => true
    },
    fields: []
};

export default Users;
