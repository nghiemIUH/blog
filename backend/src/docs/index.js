const userDocs = require("./user");
const basicInfo = require("./basicInfor");
const bookDocs = require("./book");
const blogDocs = require("./blog");

const merge = (obj1, obj2) => {
    let obj = { ...obj1 };
    for (const key in obj2.paths) {
        obj.paths[key] = obj2.paths[key];
    }
    return obj;
};

var groups = merge(userDocs, bookDocs);
var groups = merge(groups, blogDocs);

module.exports = {
    ...basicInfo,
    ...groups,
};
