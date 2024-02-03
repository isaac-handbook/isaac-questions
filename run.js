const fs = require("fs");
const path = require("path");

const PATH = path.join(__dirname, "src/item/meta.json");
const data = fs.readFileSync(PATH, "utf8");

const itemsTagMap = {};
const items = JSON.parse(data);
items.forEach((item) => {
  itemsTagMap[item.id] = item.tags;
});

// 保存到 itemTagMap.json
fs.writeFileSync(
  path.join(__dirname, "itemTagMap.json"),
  JSON.stringify(itemsTagMap, null, 2),
  "utf8"
);
