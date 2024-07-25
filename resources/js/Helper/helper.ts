function convertText(text: string) {
    const urlPattern = /^(https?:\/\/[^\s]+)/;
    if (urlPattern.test(text)) {
        return `<a href="${text}" target="_blank">${text}</a>`;
    }

    if (!text) {
        return ''
    }
    return text;
}

export {
    convertText
}