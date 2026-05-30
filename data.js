window.STUDY_DATA = {
  units: [
    {
      id: "intro",
      title: "発音・あいさつ・基本表現",
      description: "入門書で音と基本表現を確認する"
    },
    {
      id: "nouns-articles",
      title: "名詞の性・数・冠詞",
      description: "男性名詞・女性名詞、単数・複数、定冠詞・不定冠詞"
    },
    {
      id: "pronouns-sentences",
      title: "人称代名詞と基本文",
      description: "eu, você, ele, ela などと基本語順"
    },
    {
      id: "ser-estar-ter",
      title: "ser / estar / ter",
      description: "存在・性質・状態・所有を表す基本動詞"
    },
    {
      id: "adjectives",
      title: "形容詞・副詞",
      description: "性数一致、位置、程度表現"
    },
    {
      id: "present",
      title: "直説法現在",
      description: "-ar, -er, -ir 動詞の現在形"
    },
    {
      id: "prepositions",
      title: "前置詞と縮合形",
      description: "de, em, a, para と冠詞の縮合"
    },
    {
      id: "past",
      title: "過去表現",
      description: "完全過去・不完全過去の基本"
    },
    {
      id: "future-conditional",
      title: "未来・条件表現",
      description: "ir + 不定詞、未来形、条件法"
    },
    {
      id: "subjunctive",
      title: "接続法の入口",
      description: "願望・必要・不確実性を表す表現"
    }
  ],

  questions: [
    {
      id: "q001",
      unitId: "ser-estar-ter",
      type: "choice",
      prompt: "Eu ___ japonês.",
      choices: ["sou", "estou", "tenho", "vou"],
      answer: "sou",
      explanation: "国籍や身分のような比較的変わりにくい性質には ser を使います。",
      tags: ["ser", "国籍"]
    },
    {
      id: "q002",
      unitId: "ser-estar-ter",
      type: "choice",
      prompt: "Ela ___ cansada hoje.",
      choices: ["é", "está", "tem", "vai"],
      answer: "está",
      explanation: "hoje があるので、一時的な状態です。状態には estar を使います。",
      tags: ["estar", "状態"]
    },
    {
      id: "q003",
      unitId: "ser-estar-ter",
      type: "choice",
      prompt: "Nós ___ dois livros.",
      choices: ["somos", "estamos", "temos", "vamos"],
      answer: "temos",
      explanation: "「持っている」は ter を使います。nós に対応する形は temos です。",
      tags: ["ter", "所有"]
    },
    {
      id: "q004",
      unitId: "nouns-articles",
      type: "choice",
      prompt: "___ casa é bonita.",
      choices: ["O", "A", "Os", "Um"],
      answer: "A",
      explanation: "casa は女性名詞なので、定冠詞は A になります。",
      tags: ["冠詞", "女性名詞"]
    },
    {
      id: "q005",
      unitId: "nouns-articles",
      type: "choice",
      prompt: "___ livros são interessantes.",
      choices: ["O", "A", "Os", "As"],
      answer: "Os",
      explanation: "livros は男性複数名詞なので、定冠詞は Os です。",
      tags: ["冠詞", "複数"]
    },
    {
      id: "q006",
      unitId: "present",
      type: "choice",
      prompt: "Eu ___ português todos os dias.",
      choices: ["estudo", "estuda", "estudamos", "estudam"],
      answer: "estudo",
      explanation: "estudar は -ar 動詞です。eu の現在形は estudo です。",
      tags: ["直説法現在", "-ar動詞"]
    },
    {
      id: "q007",
      unitId: "present",
      type: "choice",
      prompt: "Você ___ café?",
      choices: ["bebo", "bebe", "bebemos", "bebem"],
      answer: "bebe",
      explanation: "você は文法上3人称単数扱いなので、beber の形は bebe です。",
      tags: ["直説法現在", "-er動詞"]
    },
    {
      id: "q008",
      unitId: "prepositions",
      type: "choice",
      prompt: "Eu moro ___ Brasil.",
      choices: ["em o", "no", "na", "do"],
      answer: "no",
      explanation: "em + o は縮合して no になります。Brasil は通常 o Brasil と扱います。",
      tags: ["前置詞", "縮合形"]
    },
    {
      id: "q009",
      unitId: "adjectives",
      type: "choice",
      prompt: "As flores são ___.",
      choices: ["bonito", "bonita", "bonitos", "bonitas"],
      answer: "bonitas",
      explanation: "flores は女性複数なので、形容詞も女性複数の bonitas になります。",
      tags: ["形容詞", "性数一致"]
    },
    {
      id: "q010",
      unitId: "pronouns-sentences",
      type: "input",
      prompt: "「私は学生です」をポルトガル語で入力してください。",
      answer: "Eu sou estudante.",
      alt: ["Sou estudante", "Sou estudante."],
      explanation: "主語 eu は省略できます。身分を表すので ser を使います。",
      tags: ["基本文", "ser"]
    },
    {
      id: "q011",
      unitId: "past",
      type: "choice",
      prompt: "Ontem eu ___ em casa.",
      choices: ["fico", "fiquei", "ficava", "ficar"],
      answer: "fiquei",
      explanation: "ontem は完了した過去を表しやすい語です。ficar の完全過去 eu 形は fiquei です。",
      tags: ["完全過去"]
    },
    {
      id: "q012",
      unitId: "future-conditional",
      type: "choice",
      prompt: "Amanhã eu ___ estudar.",
      choices: ["vou", "fui", "sou", "estou"],
      answer: "vou",
      explanation: "近い未来は ir + 不定詞で表せます。eu に対応する ir の現在形は vou です。",
      tags: ["未来", "ir + 不定詞"]
    },
    {
      id: "q013",
      unitId: "subjunctive",
      type: "choice",
      prompt: "Espero que você ___ bem.",
      choices: ["está", "esteja", "estar", "esteve"],
      answer: "esteja",
      explanation: "Espero que ... の後では接続法を使うことがあります。estar の接続法現在は esteja です。",
      tags: ["接続法現在"]
    }
  ]
};
