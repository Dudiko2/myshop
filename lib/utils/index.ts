export const shortenText = (str: string, charLimit: number): string => {
    const text =
        str.length > charLimit
            ? str.slice(0, charLimit).trimEnd().concat("...")
            : str;

    return text;
};
