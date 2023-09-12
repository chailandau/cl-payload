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
 * @param titleField - The field in the data object that contains the title.
 * @param slugField - The field in the data object where the slug will be assigned. Defaults to 'slug'.
 * @returns - The modified data object with the generated slug.
 */
export const generateSlug =
    (titleField: string = 'title', slugField: string = 'slug') =>
    ({ data }) => {
        if (!(titleField in data)) {
            return data;
        }

        return {
            ...data,
            [slugField]: formatSlug(data[titleField])
        };
    };
