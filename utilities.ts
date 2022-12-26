export const keyCapitalise = (text: string): string => {
    return text
        .replaceAll('_', ' ')
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
};

export const trimURL = (text: string): string => {
    return text.split('//')[1].split('/')[0];
};
