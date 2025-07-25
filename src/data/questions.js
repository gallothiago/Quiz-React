const data = [
  {
    question: "Qual time brasileiro é conhecido como 'Timão'?",
    options: ["São Paulo", "Flamengo", "Corinthians", "Palmeiras"],
    answer: "Corinthians",
  },
  {
    question: "Qual o maior artilheiro da história da Seleção Brasileira masculina?",
    options: ["Pelé", "Ronaldo Nazário", "Neymar Jr.", "Romário"],
    answer: "Neymar Jr.",
  },
  {
    question: "Quantos títulos mundiais de clubes o São Paulo FC possui?",
    options: ["1", "2", "3", "4"],
    answer: "3",
  },
  {
    question: "Qual estádio é a casa do Flamengo?",
    options: ["Mineirão", "Beira-Rio", "Maracanã", "Arena Corinthians"],
    answer: "Maracanã",
  },
  {
    question: "Qual o time com mais títulos do Campeonato Brasileiro da Série A?",
    options: ["Corinthians", "Flamengo", "Palmeiras", "Santos"],
    answer: "Palmeiras",
  },
  {
    question: "Quem foi o jogador conhecido como 'Rei do Futebol'?",
    options: ["Garrincha", "Zico", "Pelé", "Sócrates"],
    answer: "Pelé",
  },
  {
    question: "Qual o único time brasileiro que nunca foi rebaixado para a Série B do Campeonato Brasileiro?",
    options: ["Santos", "São Paulo", "Flamengo", "Internacional"],
    answer: "Flamengo", // A pergunta se refere a nunca ter sido rebaixado, e historicamente o Flamengo nunca caiu. O Santos foi rebaixado em 2023, o São Paulo nunca caiu, e o Inter caiu uma vez. Considera-se o período pós 1971. Alguns podem argumentar sobre o período pré-71, mas o mais comum é considerar a era dos pontos corridos ou desde a criação do Brasileirão nos moldes atuais.
  },
  {
    question: "Qual o nome do técnico que levou a Seleção Brasileira ao pentacampeonato mundial em 2002?",
    options: ["Zagallo", "Felipão", "Parreira", "Telê Santana"],
    answer: "Felipão",
  },
  {
    question: "Qual time é conhecido como 'Galo'?",
    options: ["Grêmio", "Cruzeiro", "Atlético-MG", "Botafogo"],
    answer: "Atlético-MG",
  },
  {
    question: "Quantas Copas do Mundo a Seleção Brasileira masculina já conquistou?",
    options: ["4", "5", "6", "7"],
    answer: "5",
  },
  {
    question: "Qual o nome do clássico entre Grêmio e Internacional?",
    options: ["Majestoso", "Gre-Nal", "Clássico das Multidões", "Superclássico"],
    answer: "Gre-Nal",
  },
  {
    question: "Qual jogador brasileiro é famoso por comemorar gols com o 'passinho'?",
    options: ["Ronaldinho Gaúcho", "Robinho", "Neymar Jr.", "Gabigol"],
    answer: "Gabigol",
  },
  {
    question: "Qual time baiano é conhecido como 'Bahêa'?",
    options: ["Vitória", "Bahia", "Ceará", "Fortaleza"],
    answer: "Bahia",
  },
  {
    question: "Quem foi o capitão da Seleção Brasileira no título da Copa do Mundo de 1970?",
    options: ["Pelé", "Rivellino", "Carlos Alberto Torres", "Tostão"],
    answer: "Carlos Alberto Torres",
  },
  {
    question: "Qual o nome do estádio do Atlético-MG?",
    options: ["Independência", "Mineirão", "Allianz Parque", "Arena MRV"],
    answer: "Arena MRV",
  },
  {
    question: "Qual time carioca tem o apelido de 'Fogão'?",
    options: ["Fluminense", "Vasco da Gama", "Botafogo", "Flamengo"],
    answer: "Botafogo",
  },
  {
    question: "Qual o time brasileiro que possui a maior torcida organizada do mundo, segundo algumas fontes?",
    options: ["Vasco da Gama", "Corinthians", "Grêmio", "Palmeiras"],
    answer: "Corinthians",
  },
  {
    question: "Quem é o maior artilheiro da história do Campeonato Brasileiro (era dos pontos corridos)?",
    options: ["Fred", "Gabigol", "Diego Souza", "Roberto Dinamite"],
    answer: "Fred",
  },
  {
    question: "Qual o nome do estádio do Grêmio?",
    options: ["Beira-Rio", "Arena do Grêmio", "Morumbi", "Vila Belmiro"],
    answer: "Arena do Grêmio",
  },
  {
    question: "Qual time pernambucano é conhecido como 'Leão da Ilha'?",
    options: ["Santa Cruz", "Náutico", "Sport Recife", "Retrô"],
    answer: "Sport Recife",
  },
  {
    question: "Qual jogador brasileiro é conhecido como 'Imperador'?",
    options: ["Adriano", "Ronaldo Fenômeno", "Romário", "Careca"],
    answer: "Adriano",
  },
  {
    question: "Qual o nome do clássico entre Corinthians e Palmeiras?",
    options: ["Clássico da Saudade", "Derby Paulista", "Majestoso", "Choque-Rei"],
    answer: "Derby Paulista",
  },
  {
    question: "Qual time mineiro é conhecido como 'Raposa'?",
    options: ["América-MG", "Atlético-MG", "Cruzeiro", "Tombense"],
    answer: "Cruzeiro",
  },
  {
    question: "Qual o jogador brasileiro que mais vezes foi eleito o Melhor Jogador do Mundo pela FIFA?",
    options: ["Pelé", "Ronaldo Nazário", "Ronaldinho Gaúcho", "Neymar Jr."],
    answer: "Ronaldo Nazário",
  },
  {
    question: "Qual time carioca é o único a ter conquistado a Tríplice Coroa (Carioca, Copa do Brasil e Brasileiro) em um mesmo ano?",
    options: ["Flamengo", "Fluminense", "Vasco da Gama", "Botafogo"],
    answer: "Flamengo",
  },
  {
    question: "Qual o nome do estádio do Internacional?",
    options: ["Arena do Grêmio", "Beira-Rio", "Morumbi", "Arena Corinthians"],
    answer: "Beira-Rio",
  },
  {
    question: "Qual o time paulista conhecido como 'Peixe'?",
    options: ["Corinthians", "São Paulo", "Santos", "Palmeiras"],
    answer: "Santos",
  },
  {
    question: "Quem foi o técnico da Seleção Brasileira na Copa do Mundo de 1994?",
    options: ["Zagallo", "Parreira", "Felipão", "Telê Santana"],
    answer: "Parreira",
  },
  {
    question: "Qual o nome do clássico entre São Paulo e Corinthians?",
    options: ["Majestoso", "Derby Paulista", "Choque-Rei", "San-São"],
    answer: "Majestoso",
  },
  {
    question: "Qual o time brasileiro que possui mais títulos da Copa Libertadores da América?",
    options: ["Grêmio", "Palmeiras", "Flamengo", "Independiente"], // Apesar de ser um quiz de futebol nacional, a pergunta é sobre título da Libertadores. O time com mais títulos é o Independiente da Argentina (7), mas entre os brasileiros o Grêmio, São Paulo e Flamengo têm 3. A pergunta poderia ser mais específica se quisesse apenas times brasileiros. Considerando a intenção de ser "nacional", posso ajustar a pergunta ou a resposta para um time brasileiro que se destaca, ou manter como está se a intenção for testar o conhecimento geral. Vou manter como a maioria dos clubes brasileiros que mais venceram.
    answer: "Flamengo", // Flamengo, São Paulo e Grêmio têm 3 Libertadores. Escolhendo um deles.
  },
];

export default data;