const data = require('./data');

class Tin {
    constructor(id, title, description, image, link) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.image = image;
        this.link = link;
    }
}

function getBody(str, pre, post) {
    const startIndex = str.indexOf(pre) + pre.length;
    const endIndex = str.indexOf(post);
    return str.substring(startIndex, endIndex).trim();
}

function getTinFromItemString(str) {
    const title = getBody(str, '<title>', '</title>');
    const link = getBody(str, '<link>', '</link>');
    const description = getBody(str, '</a></br>', ']]>');
    const image = getBody(str, 'src="', '" ></a></br>');
    const id = link.substr(link.length - 12, 7);
    return new Tin(id, title, description, image, link);
}

const items = data.split('<item>');
items.shift();

console.log(items.map(item => getTinFromItemString(item)));
