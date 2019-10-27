const fs = require('fs');

hexo.extend.tag.register('constants', function (args) {
    var constants = fs.readFileSync(require.resolve('bomberjam-backend/dist/constants.js'));
    return hexo.render.renderSync({text: '```javascript-content\n'+constants+'\n```', engine: 'markdown'});;
}, {async: false});