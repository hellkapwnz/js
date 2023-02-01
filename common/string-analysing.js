const path = "/users/download/index.html"

const isHtml = path => {
    const requireExt = '.html';
    const pathExt = path.slice(-5);

    return pathExt === requireExt;
}

console.log(isHtml(path));