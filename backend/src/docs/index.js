const userDocs = require("./user");
const basicInfo = require("./basicInfor");
const bookDocs = require("./book");

const merge = (obj1, obj2) => {
    let obj = { ...obj1 };
    for (const key in obj2.paths) {
        obj.paths[key] = obj2.paths[key];
    }
    return obj;
};

let groups = merge(userDocs, bookDocs);

module.exports = {
    ...basicInfo,
    ...groups,
};
