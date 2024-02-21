// 读取当前目录下的 isaac-exam-data.json，进行格式化
const fs = require("fs");
const path = "./isaac-exam-data.json";

// 读取文件
fs.readFile(path, "utf8", (err, data) => {
  if (err) {
    console.error("读取文件时发生错误:", err);
    return;
  }

  try {
    // 解析 JSON
    const json = JSON.parse(data);

    // 具体的格式化操作
    const formated = handleJSON(json);

    // 保存文件
    fs.writeFile(path, JSON.stringify(formated, null, 2), "utf8", (err) => {
      if (err) {
        console.error("写入文件时发生错误:", err);
      } else {
        console.log("成功。");
      }
    });
  } catch (err) {
    console.error("发生错误:", err);
  }
});

const handleJSON = (json) => {
  // json.item 中的每个元素，删除 tags 属性
  json.item.forEach((it) => {
    delete it.tags;
  });
  return json;
};
