const fs = require('fs');
const path = require('path');

// 定义目标目录和文件类型
const targetDirectory = 'neko';
const fileTypes = ['.png', '.jpg', '.jpeg', '.gif', '.webp', '.ico'];

// 读取目录下的所有文件
fs.readdir(targetDirectory, (err, files) => {
    if (err) {
        console.error('Error reading directory:', err);
        return;
    }

    // 过滤出符合条件的图片文件
    const imageFiles = files.filter(file => {
        return fileTypes.some(type => path.extname(file).toLowerCase() === type);
    });

    // 构建JSON数据
    const jsonData = {
        data: {
            filenames: imageFiles
        }
    };

    // 将数据写入到filedata.json文件中
    fs.writeFile('filedata.json', JSON.stringify(jsonData, null, 4), err => {
        if (err) {
            console.error('Error writing JSON file:', err);
            return;
        }
        console.log('Image filenames have been saved to filedata.json');
    });
});
