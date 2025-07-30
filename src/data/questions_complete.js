const data = [
  {
    category: "Futebol Internacional",
    questions: [
      {
        question: "Qual jogador é conhecido como 'La Pulga'?",
        options: ["Cristiano Ronaldo", "Lionel Messi", "Neymar Jr.", "Mbappé"],
        answer: "Lionel Messi",
        tip: "É um craque argentino que fez história no Barcelona."
      },
      {
        question: "Qual clube europeu conquistou mais títulos da Liga dos Campeões da UEFA?",
        options: ["Barcelona", "Bayern de Munique", "Real Madrid", "Liverpool"],
        answer: "Real Madrid",
        tip: "É o maior vencedor da história da competição, conhecido como 'Os Blancos'."
      },
      {
        question: "Em qual país nasceu o jogador Kylian Mbappé?",
        options: ["Bélgica", "França", "Alemanha", "Portugal"],
        answer: "França",
        tip: "Ele foi campeão mundial com sua seleção em 2018."
      },
      {
        question: "Qual o nome do estádio do Manchester United?",
        options: ["Anfield", "Stamford Bridge", "Old Trafford", "Emirates Stadium"],
        answer: "Old Trafford",
        tip: "É conhecido como 'Teatro dos Sonhos'."
      },
      {
        question: "Qual seleção venceu a Copa do Mundo de 2018?",
        options: ["Alemanha", "Brasil", "França", "Argentina"],
        answer: "França",
        tip: "O capitão dessa seleção levanta a taça no final do torneio."
      },
      {
        question: "Qual jogador é o maior artilheiro da história da Liga dos Campeões da UEFA?",
        options: ["Lionel Messi", "Cristiano Ronaldo", "Robert Lewandowski", "Karim Benzema"],
        answer: "Cristiano Ronaldo",
        tip: "É um atacante português, também conhecido como CR7."
      },
      {
        question: "Qual clube é conhecido como 'Os Blancos'?",
        options: ["Bayern de Munique", "Paris Saint-Germain", "Real Madrid", "Juventus"],
        answer: "Real Madrid",
        tip: "Seu estádio é o Santiago Bernabéu."
      },
      {
        question: "Em qual cidade está localizado o clube Internazionale?",
        options: ["Roma", "Milão", "Turim", "Nápoles"],
        answer: "Milão",
        tip: "Essa cidade é famosa por sua moda e também abriga o rival AC Milan."
      },
      {
        question: "Qual o nome do técnico que levou o Liverpool ao título da Liga dos Campeões em 2019?",
        options: ["Pep Guardiola", "Jürgen Klopp", "José Mourinho", "Carlo Ancelotti"],
        answer: "Jürgen Klopp",
        tip: "É um treinador alemão muito carismático."
      },
      {
        question: "Qual país sediou a Copa do Mundo de 2014?",
        options: ["Alemanha", "Brasil", "África do Sul", "Rússia"],
        answer: "Brasil",
        tip: "Foi a segunda vez que este país sediou o torneio."
      },
    ],
  },
  {
    category: "Futebol Brasileiro",
    questions: [
      {
        question: "Qual time brasileiro é conhecido como 'Timão'?",
        options: ["São Paulo", "Flamengo", "Corinthians", "Palmeiras"],
        answer: "Corinthians",
        tip: "Sua torcida é a 'Fiel'."
      },
      {
        question: "Quantos títulos mundiais de clubes o São Paulo FC possui?",
        options: ["1", "2", "3", "4"],
        answer: "3",
        tip: "Ganhou o último em 2005, contra o Liverpool."
      },
      {
        question: "Qual estádio é a casa do Flamengo?",
        options: ["Mineirão", "Beira-Rio", "Maracanã", "Arena Corinthians"],
        answer: "Maracanã",
        tip: "É um dos maiores e mais icônicos estádios do mundo, no Rio de Janeiro."
      },
      {
        question: "Qual o time com mais títulos do Campeonato Brasileiro da Série A?",
        options: ["Corinthians", "Flamengo", "Palmeiras", "Santos"],
        answer: "Palmeiras",
        tip: "É o time com a maior quantidade de títulos nacionais."
      },
      {
        question: "Qual o único time brasileiro que nunca foi rebaixado para a Série B do Campeonato Brasileiro (considerando a era dos pontos corridos)?",
        options: ["Santos", "São Paulo", "Flamengo", "Internacional"],
        answer: "São Paulo",
        tip: "É um dos grandes de São Paulo e tem o apelido de 'Tricolor'."
      },
      {
        question: "Qual time é conhecido como 'Galo'?",
        options: ["Grêmio", "Cruzeiro", "Atlético-MG", "Botafogo"],
        answer: "Atlético-MG",
        tip: "Seu mascote é um pássaro."
      },
      {
        question: "Qual o nome do clássico entre Grêmio e Internacional?",
        options: ["Majestoso", "Gre-Nal", "Clássico das Multidões", "Superclássico"],
        answer: "Gre-Nal",
        tip: "É o maior clássico do Rio Grande do Sul."
      },
      {
        question: "Qual o nome do estádio do Atlético-MG?",
        options: ["Independência", "Mineirão", "Allianz Parque", "Arena MRV"],
        answer: "Arena MRV",
        tip: "É o estádio mais recente do clube e fica em Belo Horizonte."
      },
      {
        question: "Qual time carioca tem o apelido de 'Fogão'?",
        options: ["Fluminense", "Vasco da Gama", "Botafogo", "Flamengo"],
        answer: "Botafogo",
        tip: "Seu símbolo é uma estrela solitária."
      },
      {
        question: "Qual o nome do clássico entre Corinthians e Palmeiras?",
        options: ["Clássico da Saudade", "Derby Paulista", "Majestoso", "Choque-Rei"],
        answer: "Derby Paulista",
        tip: "É o clássico mais tradicional de São Paulo."
      },
    ],
  },
  {
    category: "Futebol de Seleções",
    questions: [
      {
        question: "Qual o maior artilheiro da história da Seleção Brasileira masculina?",
        options: ["Pelé", "Ronaldo Nazário", "Neymar Jr.", "Romário"],
        answer: "Neymar Jr.",
        tip: "Atualmente, joga na Arábia Saudita e é conhecido como 'Ney'."
      },
      {
        question: "Quantas Copas do Mundo a Seleção Brasileira masculina já conquistou?",
        options: ["4", "5", "6", "7"],
        answer: "5",
        tip: "É o único país a ter conquistado o torneio cinco vezes."
      },
      {
        question: "Quem foi o jogador conhecido como 'Rei do Futebol'?",
        options: ["Garrincha", "Zico", "Pelé", "Sócrates"],
        answer: "Pelé",
        tip: "Considerado por muitos o maior jogador de todos os tempos."
      },
      {
        question: "Qual o nome do técnico que levou a Seleção Brasileira ao pentacampeonato mundial em 2002?",
        options: ["Zagallo", "Felipão", "Parreira", "Telê Santana"],
        answer: "Felipão",
        tip: "Seu nome completo é Luiz Felipe Scolari."
      },
      {
        question: "Quem foi o capitão da Seleção Brasileira no título da Copa do Mundo de 1970?",
        options: ["Pelé", "Rivellino", "Carlos Alberto Torres", "Tostão"],
        answer: "Carlos Alberto Torres",
        tip: "Ele marcou um dos gols mais icônicos da história das Copas nessa final."
      },
      {
        question: "Qual o jogador brasileiro que mais vezes foi eleito o Melhor Jogador do Mundo pela FIFA?",
        options: ["Pelé", "Ronaldo Nazário", "Ronaldinho Gaúcho", "Neymar Jr."],
        answer: "Ronaldo Nazário",
        tip: "É conhecido como 'Fenômeno'."
      },
      {
        question: "Qual o país com mais títulos de Copa do Mundo Feminina da FIFA?",
        options: ["Alemanha", "Estados Unidos", "Noruega", "Japão"],
        answer: "Estados Unidos",
        tip: "Elas são uma potência no futebol feminino e vestem o uniforme branco, azul e vermelho."
      },
      {
        question: "Qual o nome do troféu da Copa do Mundo de futebol?",
        options: ["Taça Jules Rimet", "Copa FIFA", "Taça do Mundo", "Troféu Mundial de Futebol"],
        answer: "Copa FIFA",
        tip: "Foi desenhada por Silvio Gazzaniga."
      },
      {
        question: "Em qual Copa do Mundo a Seleção Brasileira estreou a camisa amarela?",
        options: ["1950", "1954", "1958", "1962"],
        answer: "1954",
        tip: "Foi uma mudança para tentar 'quebrar' a má sorte da Copa anterior."
      },
      {
        question: "Qual país sediará a próxima Copa do Mundo de Futebol masculino (2026)?",
        options: ["Qatar", "Canadá, México e EUA", "Marrocos, Portugal e Espanha", "Itália"],
        answer: "Canadá, México e EUA",
        tip: "Será sediada por três países da América do Norte."
      },
    ],
  },
];

export default data;