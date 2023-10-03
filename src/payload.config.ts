import path from 'path';

import { buildConfig } from 'payload/config';
import { CollectionConfig, GlobalConfig } from 'payload/types';
import generateBase64 from 'payload-base64-plugin';

import Users from './collections/admin/Users';
import CTA from './collections/content/CTAs';
import Socials from './collections/content/Socials';
import Testimonials from './collections/content/Testimonials';
import Tools from './collections/content/Tools';
import { Icons } from './collections/media/Icons';
import Images from './collections/media/Images';
import Heroes from './collections/sections/Heroes';
import CaseStudies from './collections/templates/CaseStudies';
import Pages from './collections/templates/Pages';
import Projects from './collections/templates/Projects';
import About from './globals/About';
import CaseStudyListing from './globals/listings/CaseStudyListing';
import TestimonialListing from './globals/listings/TestimonialListing';
import ToolboxListing from './globals/listings/ToolboxListing';
import Nav from './globals/Nav';
import { createGroup } from './utils/createGroups';

export default buildConfig({
    admin: {
        css: path.resolve(__dirname, './styles/main.scss')
    },
    serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
    plugins: [generateBase64({ removeAlpha: false })],
    collections: [
        ...(createGroup(
            [CaseStudies, Pages, Projects],
            'Templates'
        ) as CollectionConfig[]),
        ...(createGroup([Heroes], 'Sections') as CollectionConfig[]),
        ...(createGroup(
            [CTA, Socials, Testimonials, Tools],
            'Content'
        ) as CollectionConfig[]),
        ...(createGroup([Icons, Images], 'Media') as CollectionConfig[]),
        ...(createGroup([Users], 'Admin') as CollectionConfig[])
    ],
    globals: [
        ...(createGroup([About, Nav], 'Global') as GlobalConfig[]),
        ...(createGroup(
            [CaseStudyListing, ToolboxListing, TestimonialListing],
            'Listings'
        ) as GlobalConfig[])
    ],
    typescript: {
        outputFile: path.resolve(__dirname, 'payload-types.ts')
    },
    graphQL: {
        schemaOutputFile: path.resolve(__dirname, 'payload-schema.graphql')
    },
    cors: [`${process.env.PAYLOAD_PUBLIC_SERVER_URL}`]
});
