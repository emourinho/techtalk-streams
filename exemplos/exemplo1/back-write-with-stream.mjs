import fs from "node:fs";

const writeFile = fs.createWriteStream("../files/bigFile.csv");

let title = "nome;telefone\n";
writeFile.write(title);

for (let index = 0; index < 1e6; index++) {
  const chunk = "John Smith;55119" + index + "\n";
  writeFile.write(chunk);
}

writeFile.end();
