window.STUDY_DATA = {
  units: [
    {
      id: "intro",
      title: "発音・あいさつ・基本表現",
      description: "あいさつ、自己紹介、簡単な受け答え"
    },
    {
      id: "nouns-articles",
      title: "名詞の性・数・冠詞",
      description: "男性名詞・女性名詞、単数・複数、定冠詞・不定冠詞"
    },
    {
      id: "pronouns-sentences",
      title: "人称代名詞と基本文",
      description: "eu, você, ele, ela, nós などと基本語順"
    },
    {
      id: "ser-estar-ter",
      title: "ser / estar / ter",
      description: "性質・状態・所有を表す基本動詞"
    },
    {
      id: "adjectives",
      title: "形容詞・副詞",
      description: "形容詞の性数一致、位置、程度表現"
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
      description: "ir + 不定詞、未来、条件法"
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
      unitId: "intro",
      type: "choice",
      prompt: "朝のあいさつとして自然なのはどれですか。",
      choices: ["Boa noite", "Bom dia", "Até logo", "Com licença"],
      answer: "Bom dia",
      explanation: "Bom dia は朝から昼ごろまで使うあいさつです。",
      tags: ["あいさつ", "基本表現"]
    },
    {
      id: "q002",
      unitId: "intro",
      type: "choice",
      prompt: "「ありがとう」にあたる表現はどれですか。",
      choices: ["Desculpe", "Obrigado", "Prazer", "Tchau"],
      answer: "Obrigado",
      explanation: "Obrigado は男性話者が使う「ありがとう」です。女性話者なら Obrigada です。",
      tags: ["あいさつ", "基本表現"]
    },
    {
      id: "q003",
      unitId: "intro",
      type: "choice",
      prompt: "別れ際に使う表現として自然なのはどれですか。",
      choices: ["Até amanhã", "Muito prazer", "Meu nome é", "Tudo bem"],
      answer: "Até amanhã",
      explanation: "Até amanhã は「また明日」という意味です。",
      tags: ["あいさつ", "別れ"]
    },
    {
      id: "q004",
      unitId: "intro",
      type: "input",
      prompt: "「私の名前はアナです」をポルトガル語で入力してください。",
      answer: "Meu nome é Ana.",
      alt: ["Meu nome e Ana", "Meu nome é Ana"],
      explanation: "Meu nome é ... で「私の名前は〜です」を表します。",
      tags: ["自己紹介", "基本文"]
    },
    {
      id: "q005",
      unitId: "intro",
      type: "choice",
      prompt: "相手に「お元気ですか」とたずねる表現はどれですか。",
      choices: ["Tudo bem?", "Até logo?", "Boa noite?", "De nada?"],
      answer: "Tudo bem?",
      explanation: "Tudo bem? は「元気ですか」「大丈夫ですか」のように広く使えます。",
      tags: ["あいさつ", "疑問文"]
    },
    {
      id: "q006",
      unitId: "intro",
      type: "choice",
      prompt: "「どういたしまして」にあたる表現はどれですか。",
      choices: ["De nada", "Obrigado", "Desculpe", "Bom dia"],
      answer: "De nada",
      explanation: "De nada は Obrigado/Obrigada に対する返答として使えます。",
      tags: ["あいさつ", "返答"]
    },

    {
      id: "q007",
      unitId: "nouns-articles",
      type: "choice",
      prompt: "___ livro é interessante.",
      choices: ["O", "A", "Os", "As"],
      answer: "O",
      explanation: "livro は男性単数名詞なので、定冠詞は O です。",
      tags: ["冠詞", "男性名詞"]
    },
    {
      id: "q008",
      unitId: "nouns-articles",
      type: "choice",
      prompt: "___ casa é bonita.",
      choices: ["O", "A", "Os", "As"],
      answer: "A",
      explanation: "casa は女性単数名詞なので、定冠詞は A です。",
      tags: ["冠詞", "女性名詞"]
    },
    {
      id: "q009",
      unitId: "nouns-articles",
      type: "choice",
      prompt: "___ carros são novos.",
      choices: ["O", "A", "Os", "As"],
      answer: "Os",
      explanation: "carros は男性複数名詞なので、定冠詞は Os です。",
      tags: ["冠詞", "複数"]
    },
    {
      id: "q010",
      unitId: "nouns-articles",
      type: "choice",
      prompt: "___ cidades são grandes.",
      choices: ["O", "A", "Os", "As"],
      answer: "As",
      explanation: "cidades は女性複数名詞なので、定冠詞は As です。",
      tags: ["冠詞", "複数"]
    },
    {
      id: "q011",
      unitId: "nouns-articles",
      type: "choice",
      prompt: "___ problema é difícil.",
      choices: ["O", "A", "Os", "As"],
      answer: "O",
      explanation: "problema は -a で終わりますが男性名詞です。したがって O problema です。",
      tags: ["冠詞", "例外"]
    },
    {
      id: "q012",
      unitId: "nouns-articles",
      type: "input",
      prompt: "「一冊の本」をポルトガル語で入力してください。",
      answer: "um livro",
      alt: ["Um livro"],
      explanation: "livro は男性名詞なので、不定冠詞は um です。",
      tags: ["不定冠詞", "男性名詞"]
    },

    {
      id: "q013",
      unitId: "pronouns-sentences",
      type: "choice",
      prompt: "「私は」にあたる主語代名詞はどれですか。",
      choices: ["eu", "você", "ele", "nós"],
      answer: "eu",
      explanation: "eu は「私は」を表します。",
      tags: ["人称代名詞", "主語"]
    },
    {
      id: "q014",
      unitId: "pronouns-sentences",
      type: "choice",
      prompt: "「あなたは」にあたる語としてブラジルでよく使われるのはどれですか。",
      choices: ["você", "nós", "eles", "ela"],
      answer: "você",
      explanation: "ブラジルでは「あなた」に você がよく使われます。動詞は3人称単数形になります。",
      tags: ["人称代名詞", "você"]
    },
    {
      id: "q015",
      unitId: "pronouns-sentences",
      type: "choice",
      prompt: "Você ___ estudante.",
      choices: ["sou", "é", "somos", "são"],
      answer: "é",
      explanation: "você は意味としては「あなた」ですが、文法上は3人称単数扱いです。",
      tags: ["você", "ser"]
    },
    {
      id: "q016",
      unitId: "pronouns-sentences",
      type: "choice",
      prompt: "「彼女は」にあたる語はどれですか。",
      choices: ["ele", "ela", "eles", "elas"],
      answer: "ela",
      explanation: "ela は「彼女は」です。ele は「彼は」です。",
      tags: ["人称代名詞", "基本"]
    },
    {
      id: "q017",
      unitId: "pronouns-sentences",
      type: "choice",
      prompt: "否定文として正しいものはどれですか。",
      choices: [
        "Eu não falo português.",
        "Eu falo não português.",
        "Não eu falo português.",
        "Eu português não falo."
      ],
      answer: "Eu não falo português.",
      explanation: "否定の não は、ふつう動詞の前に置きます。",
      tags: ["否定文", "語順"]
    },
    {
      id: "q018",
      unitId: "pronouns-sentences",
      type: "input",
      prompt: "「私たちは学生です」をポルトガル語で入力してください。",
      answer: "Nós somos estudantes.",
      alt: ["Somos estudantes", "Somos estudantes."],
      explanation: "nós に対応する ser の現在形は somos です。主語 nós は省略できます。",
      tags: ["基本文", "ser"]
    },

    {
      id: "q019",
      unitId: "ser-estar-ter",
      type: "choice",
      prompt: "Eu ___ japonês.",
      choices: ["sou", "estou", "tenho", "vou"],
      answer: "sou",
      explanation: "国籍や身分などを表すときは ser を使います。",
      tags: ["ser", "国籍"]
    },
    {
      id: "q020",
      unitId: "ser-estar-ter",
      type: "choice",
      prompt: "Ela ___ cansada hoje.",
      choices: ["é", "está", "tem", "vai"],
      answer: "está",
      explanation: "hoje があり、一時的な状態を表しているので estar を使います。",
      tags: ["estar", "状態"]
    },
    {
      id: "q021",
      unitId: "ser-estar-ter",
      type: "choice",
      prompt: "Nós ___ dois livros.",
      choices: ["somos", "estamos", "temos", "vamos"],
      answer: "temos",
      explanation: "所有を表す「持っている」は ter を使います。nós の形は temos です。",
      tags: ["ter", "所有"]
    },
    {
      id: "q022",
      unitId: "ser-estar-ter",
      type: "choice",
      prompt: "O livro ___ na mesa.",
      choices: ["é", "está", "tem", "sou"],
      answer: "está",
      explanation: "物の場所を表すときは estar を使います。",
      tags: ["estar", "場所"]
    },
    {
      id: "q023",
      unitId: "ser-estar-ter",
      type: "choice",
      prompt: "Ele ___ médico.",
      choices: ["é", "está", "tem", "vai"],
      answer: "é",
      explanation: "職業や身分を表すときは ser を使います。",
      tags: ["ser", "職業"]
    },
    {
      id: "q024",
      unitId: "ser-estar-ter",
      type: "input",
      prompt: "「私は20歳です」をポルトガル語で入力してください。",
      answer: "Eu tenho vinte anos.",
      alt: ["Tenho vinte anos", "Tenho vinte anos."],
      explanation: "年齢は ser ではなく ter を使って表します。",
      tags: ["ter", "年齢"]
    },

    {
      id: "q025",
      unitId: "adjectives",
      type: "choice",
      prompt: "A casa é ___.",
      choices: ["branco", "branca", "brancos", "brancas"],
      answer: "branca",
      explanation: "casa は女性単数なので、形容詞は branca になります。",
      tags: ["形容詞", "性一致"]
    },
    {
      id: "q026",
      unitId: "adjectives",
      type: "choice",
      prompt: "Os carros são ___.",
      choices: ["novo", "nova", "novos", "novas"],
      answer: "novos",
      explanation: "carros は男性複数なので、形容詞は novos になります。",
      tags: ["形容詞", "数一致"]
    },
    {
      id: "q027",
      unitId: "adjectives",
      type: "choice",
      prompt: "As meninas são ___.",
      choices: ["inteligente", "inteligentes", "inteligenta", "inteligentas"],
      answer: "inteligentes",
      explanation: "inteligente は男女で形が変わりませんが、複数では inteligentes になります。",
      tags: ["形容詞", "複数"]
    },
    {
      id: "q028",
      unitId: "adjectives",
      type: "choice",
      prompt: "Um livro ___.",
      choices: ["interessante", "interessantes", "interessanta", "interessantas"],
      answer: "interessante",
      explanation: "livro は単数なので interessante も単数形です。",
      tags: ["形容詞", "単数"]
    },
    {
      id: "q029",
      unitId: "adjectives",
      type: "choice",
      prompt: "Maria fala português ___.",
      choices: ["bom", "boa", "bem", "bons"],
      answer: "bem",
      explanation: "動詞 fala を修飾するので、形容詞ではなく副詞 bem を使います。",
      tags: ["副詞", "bem"]
    },
    {
      id: "q030",
      unitId: "adjectives",
      type: "input",
      prompt: "「新しい車」をポルトガル語で入力してください。",
      answer: "carro novo",
      alt: ["um carro novo", "O carro novo"],
      explanation: "carro は男性単数なので、形容詞は novo です。",
      tags: ["形容詞", "男性単数"]
    },

    {
      id: "q031",
      unitId: "present",
      type: "choice",
      prompt: "Eu ___ português todos os dias.",
      choices: ["estudo", "estuda", "estudamos", "estudam"],
      answer: "estudo",
      explanation: "estudar は -ar 動詞です。eu の現在形は estudo です。",
      tags: ["直説法現在", "-ar動詞"]
    },
    {
      id: "q032",
      unitId: "present",
      type: "choice",
      prompt: "Você ___ café?",
      choices: ["bebo", "bebe", "bebemos", "bebem"],
      answer: "bebe",
      explanation: "você は3人称単数扱いなので、beber の形は bebe です。",
      tags: ["直説法現在", "-er動詞"]
    },
    {
      id: "q033",
      unitId: "present",
      type: "choice",
      prompt: "Nós ___ em Tóquio.",
      choices: ["moro", "mora", "moramos", "moram"],
      answer: "moramos",
      explanation: "nós に対応する morar の現在形は moramos です。",
      tags: ["直説法現在", "-ar動詞"]
    },
    {
      id: "q034",
      unitId: "present",
      type: "choice",
      prompt: "Eles ___ português bem.",
      choices: ["fala", "falo", "falamos", "falam"],
      answer: "falam",
      explanation: "eles に対応する falar の現在形は falam です。",
      tags: ["直説法現在", "3人称複数"]
    },
    {
      id: "q035",
      unitId: "present",
      type: "choice",
      prompt: "Eu ___ ao trabalho de trem.",
      choices: ["vou", "vai", "vamos", "vão"],
      answer: "vou",
      explanation: "ir は不規則動詞です。eu に対応する現在形は vou です。",
      tags: ["直説法現在", "不規則動詞"]
    },
    {
      id: "q036",
      unitId: "present",
      type: "input",
      prompt: "「私たちは昼食を食べます」をポルトガル語で入力してください。",
      answer: "Nós almoçamos.",
      alt: ["Almoçamos", "Almocamos", "Nos almocamos"],
      explanation: "almoçar は -ar 動詞です。nós の形は almoçamos です。",
      tags: ["直説法現在", "-ar動詞"]
    },

    {
      id: "q037",
      unitId: "prepositions",
      type: "choice",
      prompt: "Eu moro ___ Brasil.",
      choices: ["em o", "no", "na", "do"],
      answer: "no",
      explanation: "em + o は縮合して no になります。o Brasil と扱うので no Brasil です。",
      tags: ["前置詞", "縮合形"]
    },
    {
      id: "q038",
      unitId: "prepositions",
      type: "choice",
      prompt: "Ela mora ___ cidade grande.",
      choices: ["no", "na", "do", "da"],
      answer: "na",
      explanation: "em + a は縮合して na になります。cidade は女性名詞です。",
      tags: ["前置詞", "縮合形"]
    },
    {
      id: "q039",
      unitId: "prepositions",
      type: "choice",
      prompt: "Eu sou ___ Japão.",
      choices: ["do", "da", "no", "na"],
      answer: "do",
      explanation: "de + o は縮合して do になります。o Japão と扱うので do Japão です。",
      tags: ["前置詞", "出身"]
    },
    {
      id: "q040",
      unitId: "prepositions",
      type: "choice",
      prompt: "Vou ___ banco agora.",
      choices: ["ao", "à", "do", "da"],
      answer: "ao",
      explanation: "a + o は縮合して ao になります。ir a ... で「〜へ行く」です。",
      tags: ["前置詞", "方向"]
    },
    {
      id: "q041",
      unitId: "prepositions",
      type: "choice",
      prompt: "O livro é ___ professora.",
      choices: ["do", "da", "no", "na"],
      answer: "da",
      explanation: "de + a は縮合して da になります。professora は女性名詞です。",
      tags: ["前置詞", "所有"]
    },
    {
      id: "q042",
      unitId: "prepositions",
      type: "input",
      prompt: "「私は学校にいます」をポルトガル語で入力してください。",
      answer: "Eu estou na escola.",
      alt: ["Estou na escola", "Estou na escola."],
      explanation: "em + a escola は na escola になります。場所には estar を使います。",
      tags: ["estar", "前置詞"]
    },

    {
      id: "q043",
      unitId: "past",
      type: "choice",
      prompt: "Ontem eu ___ em casa.",
      choices: ["fico", "fiquei", "ficava", "ficar"],
      answer: "fiquei",
      explanation: "ontem は完了した過去を表しやすい語です。ficar の完全過去 eu 形は fiquei です。",
      tags: ["完全過去", "ficar"]
    },
    {
      id: "q044",
      unitId: "past",
      type: "choice",
      prompt: "Ontem nós ___ ao cinema.",
      choices: ["vamos", "íamos", "fomos", "ir"],
      answer: "fomos",
      explanation: "ontem の具体的な過去の出来事なので、完全過去 fomos を使います。",
      tags: ["完全過去", "ir"]
    },
    {
      id: "q045",
      unitId: "past",
      type: "choice",
      prompt: "Quando eu era criança, eu ___ muito.",
      choices: ["brinquei", "brincava", "brinco", "brincar"],
      answer: "brincava",
      explanation: "過去の習慣を表すので、不完全過去 brincava が自然です。",
      tags: ["不完全過去", "習慣"]
    },
    {
      id: "q046",
      unitId: "past",
      type: "choice",
      prompt: "Na semana passada, ela ___ uma carta.",
      choices: ["escreve", "escrevia", "escreveu", "escrever"],
      answer: "escreveu",
      explanation: "na semana passada は完了した過去の時点なので、完全過去 escreveu を使います。",
      tags: ["完全過去", "escrever"]
    },
    {
      id: "q047",
      unitId: "past",
      type: "choice",
      prompt: "Antes, eu ___ perto da estação.",
      choices: ["moro", "morei", "morava", "morar"],
      answer: "morava",
      explanation: "以前の継続的な状態を表すので、不完全過去 morava が自然です。",
      tags: ["不完全過去", "状態"]
    },
    {
      id: "q048",
      unitId: "past",
      type: "input",
      prompt: "「昨日、私はポルトガル語を勉強しました」をポルトガル語で入力してください。",
      answer: "Ontem eu estudei português.",
      alt: ["Ontem estudei português", "Ontem eu estudei portugues", "Ontem estudei portugues"],
      explanation: "ontem は完了した過去を表しやすく、estudar の eu 完全過去は estudei です。",
      tags: ["完全過去", "estudar"]
    },

    {
      id: "q049",
      unitId: "future-conditional",
      type: "choice",
      prompt: "Amanhã eu ___ estudar português.",
      choices: ["vou", "fui", "sou", "estou"],
      answer: "vou",
      explanation: "近い未来は ir + 不定詞で表せます。eu に対応する ir の現在形は vou です。",
      tags: ["未来", "ir + 不定詞"]
    },
    {
      id: "q050",
      unitId: "future-conditional",
      type: "choice",
      prompt: "No domingo, nós ___ visitar nossos amigos.",
      choices: ["vamos", "fomos", "somos", "estamos"],
      answer: "vamos",
      explanation: "未来の予定を表すので vamos + 不定詞を使います。",
      tags: ["未来", "予定"]
    },
    {
      id: "q051",
      unitId: "future-conditional",
      type: "choice",
      prompt: "Eu ___ um café, por favor.",
      choices: ["gostaria de", "gostei de", "gosto de", "gostar"],
      answer: "gostaria de",
      explanation: "gostaria de は丁寧に希望を伝える表現です。",
      tags: ["条件法", "丁寧表現"]
    },
    {
      id: "q052",
      unitId: "future-conditional",
      type: "choice",
      prompt: "Você ___ me ajudar?",
      choices: ["poderia", "podia", "podeu", "poder"],
      answer: "poderia",
      explanation: "poderia は「〜していただけますか」のような丁寧な依頼に使えます。",
      tags: ["条件法", "依頼"]
    },
    {
      id: "q053",
      unitId: "future-conditional",
      type: "choice",
      prompt: "Eles ___ viajar amanhã.",
      choices: ["vão", "foram", "são", "estão"],
      answer: "vão",
      explanation: "eles に対応する ir の現在形は vão です。vão + 不定詞で未来を表します。",
      tags: ["未来", "ir + 不定詞"]
    },
    {
      id: "q054",
      unitId: "future-conditional",
      type: "input",
      prompt: "「明日、私は働きます」をポルトガル語で入力してください。",
      answer: "Amanhã eu vou trabalhar.",
      alt: ["Amanhã vou trabalhar", "Amanha eu vou trabalhar", "Amanha vou trabalhar"],
      explanation: "amanhã は未来を表します。vou trabalhar で「私は働くつもりです」。",
      tags: ["未来", "ir + 不定詞"]
    },

    {
      id: "q055",
      unitId: "subjunctive",
      type: "choice",
      prompt: "Espero que você ___ bem.",
      choices: ["está", "esteja", "estar", "esteve"],
      answer: "esteja",
      explanation: "Espero que ... の後では接続法を使うことがあります。estar の接続法現在は esteja です。",
      tags: ["接続法現在", "estar"]
    },
    {
      id: "q056",
      unitId: "subjunctive",
      type: "choice",
      prompt: "É importante que você ___ todos os dias.",
      choices: ["estuda", "estude", "estudou", "estudar"],
      answer: "estude",
      explanation: "É importante que ... の後では接続法現在が使われます。estudar の形は estude です。",
      tags: ["接続法現在", "必要"]
    },
    {
      id: "q057",
      unitId: "subjunctive",
      type: "choice",
      prompt: "Quero que ele ___ comigo.",
      choices: ["fala", "fale", "falou", "falar"],
      answer: "fale",
      explanation: "Quero que ... は願望を表すので、後ろの動詞は接続法になることがあります。",
      tags: ["接続法現在", "願望"]
    },
    {
      id: "q058",
      unitId: "subjunctive",
      type: "choice",
      prompt: "Talvez ela ___ mais tarde.",
      choices: ["chega", "chegue", "chegou", "chegar"],
      answer: "chegue",
      explanation: "talvez は不確実性を表すため、接続法が使われることがあります。",
      tags: ["接続法現在", "不確実性"]
    },
    {
      id: "q059",
      unitId: "subjunctive",
      type: "choice",
      prompt: "Quando eu ___ tempo, vou estudar.",
      choices: ["tenho", "tive", "tiver", "ter"],
      answer: "tiver",
      explanation: "未来の条件を表す quando の後では、未来接続法 tiver が使われます。",
      tags: ["未来接続法", "ter"]
    },
    {
      id: "q060",
      unitId: "subjunctive",
      type: "input",
      prompt: "「あなたがよく勉強することが大切です」をポルトガル語で入力してください。",
      answer: "É importante que você estude bem.",
      alt: ["E importante que voce estude bem", "É importante que você estude bem"],
      explanation: "É importante que ... の後では接続法現在を使います。estudar は estude になります。",
      tags: ["接続法現在", "重要表現"]
    }
  ]
};
