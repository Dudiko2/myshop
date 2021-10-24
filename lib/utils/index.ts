export const shortenText = (str: string, charLimit: number): string => {
    const text =
        str.length > charLimit
            ? str.slice(0, charLimit).trimEnd().concat("...")
            : str;

    return text;
};

export const getOneQueryParam = (param?: string | Array<string>) => {
    if (!param) return null;

    return param?.constructor === Array ? param[0] : (param as string);
};
