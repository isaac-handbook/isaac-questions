const fs = require("fs");
const path = require("path");

const itemsExtra = fs.readFileSync(
  path.join(__dirname, "itemsExtra.json"),
  "utf8"
);

const itemTagMap = fs.readFileSync(
  path.join(__dirname, "itemTagMap.json"),
  "utf8"
);

const itemsExtraObj = JSON.parse(itemsExtra);
const itemTagMapObj = JSON.parse(itemTagMap);

// 将 itemTagMapObj 中的 tags 塞进 itemsExtraObj 中
Object.keys(itemsExtraObj).forEach((key) => {
  itemsExtraObj[key].classes = itemTagMapObj[key];
});

// 保存到 itemsExtraWithTags.json
fs.writeFileSync(
  path.join(__dirname, "itemsExtraWithTags.json"),
  JSON.stringify(itemsExtraObj, null, 2),
  "utf8"
);
