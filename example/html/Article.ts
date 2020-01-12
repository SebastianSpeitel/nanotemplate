import nano from "../../index";

interface Article {
  title: string;
  content: string;
  img?: string;
}

export default ({ title, content, img }: Article) =>
  nano`<article>
  <h2>${title}</h2>
  <p>${content}</p>
  ${img ? `<img src="${img}" />` : ""}
</article>`;
