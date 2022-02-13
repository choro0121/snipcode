import { getHighlighter, Lang } from "shiki";

// icon from https://devicon.dev/
// shiki.BUNDLED_LANGUAGES.forEach((lang) => {
//   console.log(lang.id);
// });

type LangInfo = {
  lang: Lang;
  icon?: string;
};

const langs: LangInfo[] = [
  { lang: "abap" },
  { lang: "actionscript-3" },
  { lang: "ada" },
  { lang: "apache", icon: "devicon-apache-plain" },
  { lang: "apex" },
  { lang: "apl" },
  { lang: "applescript", icon: "devicon-apple-original" },
  { lang: "asm" },
  { lang: "astro" },
  { lang: "awk" },
  { lang: "ballerina" },
  { lang: "bat" },
  { lang: "berry" },
  { lang: "bibtex" },
  { lang: "bicep" },
  { lang: "c" },
  { lang: "clojure", icon: "devicon-clojure-plain" },
  { lang: "cobol" },
  { lang: "codeql" },
  { lang: "coffee", icon: "devicon-coffeescript-original" },
  { lang: "cpp", icon: "devicon-cplusplus-plain" },
  { lang: "crystal", icon: "devicon-crystal-original" },
  { lang: "csharp", icon: "devicon-csharp-plain" },
  { lang: "css", icon: "devicon-css3-plain" },
  { lang: "cue" },
  { lang: "d" },
  { lang: "dart", icon: "devicon-dart-plain" },
  { lang: "diff" },
  { lang: "docker", icon: "devicon-docker-plain" },
  { lang: "dream-maker" },
  { lang: "elixir", icon: "devicon-elixir-plain" },
  { lang: "elm", icon: "devicon-elm-plain" },
  { lang: "erb" },
  { lang: "erlang", icon: "devicon-erlang-plain" },
  { lang: "fish" },
  { lang: "fsharp", icon: "devicon-fsharp-plain" },
  { lang: "gherkin" },
  { lang: "git-commit", icon: "devicon-git-plain" },
  { lang: "git-rebase", icon: "devicon-git-plain" },
  { lang: "gnuplot" },
  { lang: "go", icon: "devicon-go-plain" },
  { lang: "graphql", icon: "devicon-graphql-plain" },
  { lang: "groovy", icon: "devicon-groovy-plain" },
  { lang: "hack" },
  { lang: "haml" },
  { lang: "handlebars", icon: "devicon-handlebars-plain" },
  { lang: "haskell", icon: "devicon-haskell-plain" },
  { lang: "hcl" },
  { lang: "hlsl" },
  { lang: "html", icon: "devicon-html5-plain" },
  { lang: "ini" },
  { lang: "java", icon: "devicon-java-plain" },
  { lang: "javascript", icon: "devicon-javascript-plain" },
  { lang: "jinja-html" },
  { lang: "json" },
  { lang: "jsonc" },
  { lang: "jsonnet" },
  { lang: "jssm" },
  { lang: "jsx" },
  { lang: "julia", icon: "devicon-julia-plain" },
  { lang: "jupyter", icon: "devicon-jupyter-plain" },
  { lang: "kotlin", icon: "devicon-kotlin-plain" },
  { lang: "latex" },
  { lang: "less", icon: "devicon-less-plain-wordmark" },
  { lang: "lisp" },
  { lang: "logo" },
  { lang: "lua", icon: "devicon-lua-plain" },
  { lang: "make" },
  { lang: "markdown", icon: "devicon-markdown-original" },
  { lang: "matlab", icon: "devicon-matlab-plain" },
  { lang: "mdx" },
  { lang: "nginx", icon: "devicon-nginx-original" },
  { lang: "nim" },
  { lang: "nix", icon: "devicon-nixos-plain" },
  { lang: "objective-c", icon: "devicon-objectivec-plain" },
  { lang: "objective-cpp" },
  { lang: "ocaml", icon: "devicon-ocaml-plain" },
  { lang: "pascal" },
  { lang: "perl", icon: "devicon-perl-plain" },
  { lang: "php", icon: "devicon-php-plain" },
  { lang: "plsql" },
  { lang: "postcss" },
  { lang: "powershell" },
  { lang: "prisma" },
  { lang: "prolog" },
  { lang: "pug" },
  { lang: "puppet" },
  { lang: "purescript" },
  { lang: "python", icon: "devicon-python-plain" },
  { lang: "r", icon: "devicon-r-original" },
  { lang: "raku" },
  { lang: "razor" },
  { lang: "riscv" },
  { lang: "ruby", icon: "devicon-ruby-plain" },
  { lang: "rust", icon: "devicon-rust-plain" },
  { lang: "sas" },
  { lang: "sass", icon: "devicon-sass-original" },
  { lang: "scala", icon: "devicon-scala-plain" },
  { lang: "scheme" },
  { lang: "scss" },
  { lang: "shaderlab" },
  { lang: "shellscript" },
  { lang: "smalltalk" },
  { lang: "solidity" },
  { lang: "sparql" },
  { lang: "sql", icon: "devicon-mysql-plain" },
  { lang: "ssh-config", icon: "devicon-ssh-original" },
  { lang: "stylus", icon: "devicon-stylus-original" },
  { lang: "svelte", icon: "devicon-svelte-plain" },
  { lang: "swift", icon: "devicon-swift-plain" },
  { lang: "system-verilog" },
  { lang: "tasl" },
  { lang: "tcl" },
  { lang: "tex" },
  { lang: "toml" },
  { lang: "tsx" },
  { lang: "turtle" },
  { lang: "twig" },
  { lang: "typescript", icon: "devicon-typescript-plain" },
  { lang: "vb" },
  { lang: "verilog" },
  { lang: "vhdl" },
  { lang: "viml" },
  { lang: "vue-html" },
  { lang: "vue", icon: "devicon-vuejs-plain" },
  { lang: "wasm" },
  { lang: "wenyan" },
  { lang: "xml" },
  { lang: "xsl" },
  { lang: "yaml" },
];

const langList = langs.map((l) => l.lang);
const getIcon = (lang: Lang): string | undefined =>
  langs.find((l) => l.lang == lang)?.icon;

const highlight = async ({
  code,
  lang,
}: {
  code: string;
  lang: string;
}): Promise<string> => {
  const highligher = await getHighlighter({ theme: "one-dark-pro" });
  return highligher.codeToHtml(code, { lang: lang });
};

export { highlight, langList, getIcon };
