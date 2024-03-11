// 先引入 readUtils 工具函数
import readUtils from "./readUtils";

// 对图片进行排序函数
 function sortImages(urls) {
  // 将图片按照指定规则排序
  urls.sort((a, b) => {
    // 提取图片文件名并去掉时间戳
    const nameA = readUtils.deleteTimestampFromName(
      readUtils.getFileFromUrl(a)
    );
    const nameB = readUtils.deleteTimestampFromName(
      readUtils.getFileFromUrl(b)
    );
    // 判断是否为 spec 或者 specs 图片
    const isSpecA = nameA.endsWith("-spec.png") || nameA.endsWith("-specs.png");
    const isSpecB = nameB.endsWith("-spec.png") || nameB.endsWith("-specs.png");

    // 如果其中一个是 spec 或者 specs 图片，则将其排在最后
    if (isSpecA && !isSpecB) {
      return 1;
    } else if (!isSpecA && isSpecB) {
      return -1;
    } else {
      // 否则按照名称进行排序
      return nameA.localeCompare(nameB);
    }
  });

  // 返回排序后的图片数组
  return urls;
}


export default sortImages;