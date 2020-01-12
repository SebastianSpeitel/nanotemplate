import nano from "../../index";
import Article from "./Article";
import Head from "./Head";

const articles = [
  { title: "First", content: "Lorem", img: "https://picsum.photos/200" },
  { title: "Second", content: "Ipsum" }
];

export default nano`<!doctype html>
<html lang="de">
${Head("Generated from nanolit")}
<body>
  <h1>Headline</h1>
  ${articles.map(Article)}
</body>
</html>`;
