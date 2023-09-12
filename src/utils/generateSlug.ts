/**
 * Formats a string into a slug by converting it to lowercase and replacing  all non-alphanumeric characters with hyphens. Also removes leading and trailing hyphens.
 *
 * @param {string} str - The string to be formatted into a slug.
 * @return {string} - The formatted slug.
 */
const formatSlug = (str: string): string =>
    str
        .toLowerCase()
        .replaceAll(/[_\W]+|-+/g, '-')
        .replaceAll(/^-+|-+$/g, '');

/**
 * Generates a slug based on the provided title field and assigns it to the slug field of the data object.
 *
 * @param {string} titleField - The field in the data object that contains the title.
 * @param {string} [slugField='slug'] - The field in the data object where the slug will be assigned. Defaults to 'slug'.
 * @returns {object} - The modified data object with the generated slug.
 */

interface GenerateSlug {
    /** Title field to generate slug from */
    titleField?: string;
    /** Slug field to assign generated slug to */
    slugField?: string;
    /** Optional category */
    category?: string;
}
export const generateSlug =
    ({ titleField = 'title', slugField = 'slug', category }: GenerateSlug) =>
    ({ data }) => {
        const generatedSlug = category
            ? `${category}/${formatSlug(data[titleField])}`
            : formatSlug(data[titleField]);

        if (!(titleField in data)) {
            return data;
        }

        return {
            ...data,
            [slugField]: generatedSlug
        };
    };
