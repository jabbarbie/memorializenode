const formatText = (text: string) => {
    return text.split('\n').map((line, index) => {
        if (line.trim().startsWith('#')) {
            return <span key={index} className="text__h1">{line.slice(1).toUpperCase()} <br /></span>;
        } else if (line.trim().startsWith('-')) {
            return <span key={index} className="text__li">{line} <br /></span>;
        }
        else {
            return <span key={index}>{line}<br /></span>;
        }
    });
};


export {
    formatText
}