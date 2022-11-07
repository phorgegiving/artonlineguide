export const scrollbar = `
  ::-webkit-scrollbar {
    width: 12px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px #A365F1;
  }
  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgb(225 225 225 / 30%);
    border-radius: 10px;
  }`

export const article = `
  article {
    margin: 5em auto 0;
    padding: 1em;
    font-size: 140%;
    max-width: 800px;
    min-width: 400px;
    background: var(--article-color);
    box-shadow: rgba(0,0,0,.05) 0 3px 15px;
    border-radius: 20px;
    margin-top; 200px;
  }
  `