const fs = require("fs").promises;

async function createFile(filePath, content) {
  try {
    await fs.writeFile(filePath, content);

    console.log(`File created successfully.`);
  } catch (error) {
    console.log(error);
  }
}


const fileName = "test.txt";
const fileContent = "Hello world";

createFile(fileName, fileContent);
