import fs from "node:fs";

const writeFile = fs.createWriteStream("../files/bigFile2.csv");

function* generator() {
  yield "nome;telefone\n";
  for (let index = 0; index < 1e8; index++) {
    const chunk = "John Smith;55119" + index + "\n";
    yield chunk;
  }
}

for (const chunk of generator()) {
  const response = writeFile.write(chunk);
  if (!response) {
    await new Promise((resolve) => {
      writeFile.once("drain", resolve);
    });
  }
}
