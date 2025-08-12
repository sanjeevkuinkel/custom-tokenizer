import express from "express";
import gptTokenizer from "./tokenizer.js";
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  const sampleText = "Hello how are you?";
  const tokens = gptTokenizer(sampleText);
  console.log(tokens);
  res.json({ tokens });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
