import fs from "node:fs";

let content = "nome;telefone\n";

for (let index = 0; index < 1e6; index++) {
  content += "John Smith;55119" + index + "\n";
}

fs.writeFile("../files/bigFile.csv", content, {}, (err) => {});
