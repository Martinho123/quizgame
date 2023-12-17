const startContainer = document.getElementById('start-container');
const quizContainer = document.getElementById('quiz-container');
const categoriaSelect = document.getElementById('categoria-select');
const questionElement = document.getElementById('question');
const optionsContainer = document.getElementById('options-container');
const resultContainer = document.getElementById('result-container');
const scoreContainer = document.getElementById('score-container');
const scoreElement = document.getElementById('score');
const timerContainer = document.getElementById('timer-container');
const timerElement = document.getElementById('timer');

const questionsByCategoria = {
  all: [
    {
      question: 'Qual é a capital do Brasil?',
      options: ['Rio de Janeiro', 'São Paulo', 'Brasília', 'Belo Horizonte', 'Salvador'],
      answer: 'Brasília'
    },
    {
      question: 'Qual é a capital do Japão?',
      options: ['Seul', 'Pequim', 'Tóquio', 'Bangkok', 'Manila'],
      answer: 'Tóquio'
    },
    // Adicione mais perguntas conforme necessário
  ],
  historia: [
    {
      question: 'Qual é a língua oficial do Brasil?',
      options: ['Português', 'Espanhol', 'Inglês', 'Francês', 'Italiano'],
      answer: 'Português'
    },
    {
      question: 'Qual evento histórico marcou o início da Primeira Guerra Mundial?',
      options: ['Assassinato de Arquiduque Franz Ferdinand', 'Batalha de Stalingrado', 'Tratado de Versalhes', 'Revolução Russa', 'Bomba Atômica em Hiroshima'],
      answer: 'Assassinato de Arquiduque Franz Ferdinand'
    },
    {
      question: 'Quem foi o líder da Revolução Russa de 1917?',
      options: ['Vladimir Lenin', 'Josef Stalin', 'Mikhail Gorbachev', 'Czar Nicolau II', 'Leon Trotsky'],
      answer: 'Vladimir Lenin'
    },
    {
      question: 'Em que ano ocorreu a Revolução Francesa?',
      options: ['1789', '1800', '1750', '1830', '1900'],
      answer: '1789'
    },
    {
      question: 'Quem foi o líder militar e político da Revolução Cubana?',
      options: ['Fidel Castro', 'Che Guevara', 'Raul Castro', 'Batista', 'Camilo Cienfuegos'],
      answer: 'Fidel Castro'
    },
    {
      question: 'Qual cidade foi dividida durante a Guerra Fria, representando o confronto entre os blocos oriental e ocidental?',
      options: ['Berlim', 'Viena', 'Varsóvia', 'Praga', 'Budapeste'],
      answer: 'Berlim'
    },
    {
      question: 'Quem foi o líder da independência da Índia, conhecido como "Mahatma"?',
      options: ['Mahatma Gandhi', 'Jawaharlal Nehru', 'Sardar Patel', 'Subhas Chandra Bose', 'Indira Gandhi'],
      answer: 'Mahatma Gandhi'
    },
    {
      question: 'Qual evento marcou o fim da Idade Média e o início da Idade Moderna na Europa?',
      options: ['Queda de Constantinopla', 'Descobrimento da América', 'Guerra dos Cem Anos', 'Peste Negra', 'Revolução Industrial'],
      answer: 'Queda de Constantinopla'
    },
    {
      question: 'Quem foi a rainha da Inglaterra conhecida por seu longo reinado durante o século XIX?',
      options: ['Rainha Victoria', 'Rainha Elizabeth I', 'Rainha Maria', 'Rainha Anne', 'Rainha Elizabeth II'],
      answer: 'Rainha Victoria'
    },
    {
      question: 'Qual foi o impacto da Revolução Industrial no trabalho e na produção?',
      options: ['Automatização e urbanização', 'Agricultura de subsistência', 'Manufatura artesanal', 'Economia de trocas', 'Sociedade feudal'],
      answer: 'Automatização e urbanização'
    },
    {
      question: 'Quem foi o explorador português que alcançou a Índia contornando o Cabo da Boa Esperança em 1498?',
      options: ['Vasco da Gama', 'Cristóvão Colombo', 'Fernão Mendes Pinto', 'Amerigo Vespucci', 'Pedro Álvares Cabral'],
      answer: 'Vasco da Gama'
    },
    {
      question: 'Qual foi o nome dado ao período de expansão cultural, econômica e política na Europa durante os séculos XV e XVI?',
      options: ['Renascimento', 'Iluminismo', 'Reforma', 'Barroco', 'Idade Média'],
      answer: 'Renascimento'
    },
    {
      question: 'Quem foi o líder militar e estrategista francês durante as Guerras Napoleônicas?',
      options: ['Napoleão Bonaparte', 'Luís XIV', 'Joana d\'Arc', 'Robespierre', 'Napoleão III'],
      answer: 'Napoleão Bonaparte'
    },
    {
      question: 'O que foi a Declaração de Independência dos Estados Unidos?',
      options: ['Documento que proclamou a independência das Treze Colônias', 'Tratado que encerrou a Guerra Civil Americana', 'Constituição dos Estados Unidos', 'Proclamação de Emancipação', 'Pacto colonial com a Grã-Bretanha'],
      answer: 'Documento que proclamou a independência das Treze Colônias'
    },
    {
      question: 'Quem foi o faraó egípcio conhecido por suas reformas religiosas e tentativas de estabelecer o monoteísmo?',
      options: ['Akenáton', 'Cleópatra', 'Tutancâmon', 'Ramsés II', 'Hatshepsut'],
      answer: 'Akenáton'
    },
    {
      question: 'Qual evento histórico inspirou a obra "Os Miseráveis" de Victor Hugo?',
      options: ['Revolução Francesa', 'Guerra dos Cem Anos', 'Guerra Civil Americana', 'Revolução Industrial', 'Idade Média'],
      answer: 'Revolução Francesa'
    },
    {
      question: 'Quem foi o líder da independência do Brasil em 1822?',
      options: ['Dom Pedro I', 'Dom Pedro II', 'José Bonifácio', 'Tiradentes', 'Getúlio Vargas'],
      answer: 'Dom Pedro I'
    },
    {
      question: 'Qual foi o nome dado ao período de intensificação do comércio de escravos africanos para as Américas?',
      options: ['Tráfico Atlântico de Escravos', 'Rota da Seda', 'Caminho das Índias', 'Colonização Africana', 'Era dos Descobrimentos'],
      answer: 'Tráfico Atlântico de Escravos'
    },
    {
      question: 'Quem foi a heroína francesa que desempenhou um papel crucial durante a Guerra dos Cem Anos?',
      options: ['Joana d\'Arc', 'Isabel I', 'Catarina de Médici', 'Maria Antonieta', 'Margaret Thatcher'],
      answer: 'Joana d\'Arc'
    },
    {
      question: 'Quem foi o líder da Revolução Bolchevique na Rússia?',
      options: ['Vladimir Lenin', 'Josef Stalin', 'Nicolau II', 'Trotsky', 'Catarina, a Grande'],
      answer: 'Vladimir Lenin'
    },
    {
      question: 'Qual foi o resultado da Guerra Civil Americana?',
      options: ['União preservada, escravidão abolida', 'Independência das Treze Colônias', 'Expansão territorial dos Estados Unidos', 'Anexação do Texas', 'Confederação estabelecida'],
      answer: 'União preservada, escravidão abolida'
    },
    {
      question: 'Quem foi o líder militar romano que desempenhou um papel importante na transformação da República em Império?',
      options: ['Júlio César', 'Marco Polo', 'Augusto', 'Espártaco', 'Cícero'],
      answer: 'Augusto'
    },
    {
      question: 'Onde ocorreu a Revolução Industrial?',
      options: ['Reino Unido', 'França', 'Alemanha', 'Estados Unidos', 'Japão'],
      answer: 'Reino Unido'
    },
    {
      question: 'Quem foi o explorador português que, em 1492, chegou à América, abrindo o caminho para a colonização?',
      options: ['Cristóvão Colombo', 'Fernão Mendes Pinto', 'Amerigo Vespucci', 'Vasco da Gama', 'Pedro Álvares Cabral'],
      answer: 'Cristóvão Colombo'
    },
    {
      question: 'Qual foi o evento que desencadeou a Primeira Guerra Mundial?',
      options: ['Assassinato de Arquiduque Franz Ferdinand', 'Batalha de Stalingrado', 'Tratado de Versalhes', 'Revolução Russa', 'Ataque a Pearl Harbor'],
      answer: 'Assassinato de Arquiduque Franz Ferdinand'
    },
    {
      question: 'Quem foi o líder da Revolução Industrial na Inglaterra?',
      options: ['James Watt', 'Adam Smith', 'Karl Marx', 'Isaac Newton', 'Charles Darwin'],
      answer: 'James Watt'
    },
    {
      question: 'Qual foi a principal causa da Revolução Francesa?',
      options: ['Desigualdade social e econômica', 'Reformas políticas', 'Rivalidade entre nações', 'Conflitos religiosos', 'Colonização'],
      answer: 'Desigualdade social e econômica'
    },
    {
      question: 'Quem foi o líder da Revolução Haitiana, que resultou na independência do Haiti em 1804?',
      options: ['Toussaint Louverture', 'Jean-Jacques Dessalines', 'Simon Bolívar', 'Simón Bolívar', 'José de San Martín'],
      answer: 'Jean-Jacques Dessalines'
    },
    {
      question: 'Qual movimento político e social buscou a igualdade de direitos para as mulheres?',
      options: ['Feminismo', 'Abolicionismo', 'Comunismo', 'Revolução Industrial', 'Iluminismo'],
      answer: 'Feminismo'
    },
    {
      question: 'Quem foi o líder militar e estrategista cartaginense que travou as Guerras Púnicas contra Roma?',
      options: ['Aníbal', 'Hannibal Lecter', 'Escipião', 'Cipião', 'Cartago'],
      answer: 'Aníbal'
    },
    {
      question: 'Qual foi o impacto da Revolução Industrial na classe trabalhadora?',
      options: ['Condições de trabalho precárias e longas jornadas', 'Melhoria nas condições de vida', 'Aumento dos salários', 'Redução da jornada de trabalho', 'Acesso à educação gratuita'],
      answer: 'Condições de trabalho precárias e longas jornadas'
    },
    {
      question: 'Quem foi o líder político e militar romano que desempenhou um papel importante na transição da República para o Império?',
      options: ['Júlio César', 'Marco Polo', 'Augusto', 'Espártaco', 'Cícero'],
      answer: 'Júlio César'
    },
    {
      question: 'Qual foi o impacto da Revolução Industrial nas cidades?',
      options: ['Urbanização rápida e aumento da poluição', 'Decadência das cidades', 'Êxodo rural', 'Diminuição da população urbana', 'Manutenção das condições antigas'],
      answer: 'Urbanização rápida e aumento da poluição'
    },
    {
      question: 'Quem foi o líder da Revolução Bolchevique que se tornou o primeiro líder da União Soviética?',
      options: ['Vladimir Lenin', 'Josef Stalin', 'Trotsky', 'Czar Nicolau II', 'Catarina, a Grande'],
      answer: 'Vladimir Lenin'
    },
    {
      question: 'Qual foi o nome dado ao movimento cultural e intelectual que se espalhou na Europa durante o século XVIII?',
      options: ['Iluminismo', 'Renascimento', 'Reforma', 'Barroco', 'Idade Média'],
      answer: 'Iluminismo'
    },
    {
      question: 'Quem foi o líder político e militar francês que se tornou imperador após a Revolução Francesa?',
      options: ['Napoleão Bonaparte', 'Robespierre', 'Luís XIV', 'Joana d\'Arc', 'Napoleão III'],
      answer: 'Napoleão Bonaparte'
    },
    {
      question: 'O que foi a Revolução Industrial?',
      options: ['Transformação econômica, social e tecnológica', 'Reforma religiosa', 'Descobrimento da América', 'Independência da Índia', 'Revolução Russa'],
      answer: 'Transformação econômica, social e tecnológica'
    },
    {
      question: 'Quem foi o líder da independência dos Estados Unidos e o principal autor da Declaração de Independência?',
      options: ['Thomas Jefferson', 'George Washington', 'John Adams', 'Benjamin Franklin', 'James Madison'],
      answer: 'Thomas Jefferson'
    },
    {
      question: 'Qual foi o impacto da Revolução Industrial na produção de bens?',
      options: ['Aumento da produção em larga escala', 'Diminuição da produção', 'Manufatura artesanal', 'Economia de subsistência', 'Decadência da produção'],
      answer: 'Aumento da produção em larga escala'
    },
    {
      question: 'Qual foi o resultado da Batalha de Waterloo?',
      options: ['Napoleão Bonaparte foi derrotado', 'Inglaterra invadiu a França', 'Início da Revolução Industrial', 'Tratado de Versalhes assinado', 'Rei Luís XVI foi restaurado'],
      answer: 'Napoleão Bonaparte foi derrotado'
    },
    {
      question: 'Quem foi o líder sul-africano que lutou contra o apartheid?',
      options: ['Nelson Mandela', 'Frederik de Klerk', 'Desmond Tutu', 'Steve Biko', 'Winnie Mandela'],
      answer: 'Nelson Mandela'
    },
    {
      question: 'O que foi a Guerra Fria?',
      options: ['Conflito político e ideológico entre EUA e URSS', 'Conflito entre China e Índia', 'Guerra entre Alemanha e França', 'Conflito religioso na Idade Média', 'Conflito na Península Coreana'],
      answer: 'Conflito político e ideológico entre EUA e URSS'
    },
    {
      question: 'Qual imperador romano foi conhecido por suas reformas e código legal?',
      options: ['Justiniano', 'Nero', 'Júlio César', 'Constantino', 'Augusto'],
      answer: 'Justiniano'
    },
    {
      question: 'Quem foi o líder da Revolução Cubana?',
      options: ['Fidel Castro', 'Che Guevara', 'Batista', 'Camilo Cienfuegos', 'Raul Castro'],
      answer: 'Fidel Castro'
    },
    {
      question: 'Qual foi o resultado da Revolução Industrial no século XIX?',
      options: ['Transformações econômicas e tecnológicas', 'Revolução Cultural na China', 'Independência da Índia', 'Descobrimento da Penicilina', 'Invenção da internet'],
      answer: 'Transformações econômicas e tecnológicas'
    },
    {
      question: 'Quem foi o primeiro presidente dos Estados Unidos?',
      options: ['John Adams', 'Thomas Jefferson', 'George Washington', 'James Madison', 'Alexander Hamilton'],
      answer: 'George Washington'
    },
    {
      question: 'Qual foi o evento que marcou o início da Primeira Guerra Mundial?',
      options: ['Bombardeio de Pearl Harbor', 'Assinatura do Tratado de Versalhes', 'Assassinato de Franz Ferdinand', 'Revolução Russa', 'Batalha de Stalingrado'],
      answer: 'Assassinato de Franz Ferdinand'
    },
    {
      question: 'Quem foi o líder da Revolução Bolchevique na Rússia?',
      options: ['Vladimir Lenin', 'Leon Trotsky', 'Joseph Stalin', 'Mikhail Gorbachev', 'Boris Yeltsin'],
      answer: 'Vladimir Lenin'
    },
    {
      question: 'Qual civilização construiu as pirâmides de Teotihuacan no México?',
      options: ['Maias', 'Astecas', 'Toltecas', 'Olmecas', 'Teotihuacanos'],
      answer: 'Teotihuacanos'
    },
    {
      question: 'Em que ano a Segunda Guerra Mundial começou?',
      options: ['1935', '1939', '1941', '1944', '1946'],
      answer: '1939'
    },
    {
      question: 'Quem foi o primeiro faraó do Antigo Egito?',
      options: ['Ramsés II', 'Cleópatra', 'Tutancâmon', 'Narmer', 'Amenhotep III'],
      answer: 'Narmer'
    },
    {
      question: 'Qual foi o evento que marcou o início da Revolução Industrial?',
      options: ['Invenção da máquina a vapor', 'Descobrimento da eletricidade', 'Revolução Francesa', 'Invenção da roda', 'Invenção do tear mecânico'],
      answer: 'Invenção do tear mecânico'
    },
    {
      question: 'Qual foi o resultado da Batalha de Gettysburg durante a Guerra Civil Americana?',
      options: ['Vitória dos Confederados', 'Empate', 'Vitória dos Unionistas', 'Trégua negociada', 'Retirada de ambos os lados'],
      answer: 'Vitória dos Unionistas'
    },
    {
      question: 'Quem foi o líder da Revolução Chinesa em 1949?',
      options: ['Sun Yat-sen', 'Mao Zedong', 'Chiang Kai-shek', 'Deng Xiaoping', 'Zhou Enlai'],
      answer: 'Mao Zedong'
    },
    {
      question: 'Quem foi o explorador português que navegou para a Índia em 1498?',
      options: ['Bartolomeu Dias', 'Vasco da Gama', 'Fernão Mendes Pinto', 'Pedro Álvares Cabral', 'Cristóvão Colombo'],
      answer: 'Vasco da Gama'
    },
    {
      question: 'Qual era o nome do navio em que Cristóvão Colombo chegou às Américas em 1492?',
      options: ['Mayflower', 'Santa Maria', 'Niña', 'Pinta', 'Discovery'],
      answer: 'Santa Maria'
    },
   
    {
      question: 'Quem foi o fundador do Império Mongol?',
      options: ['Genghis Khan', 'Kublai Khan', 'Temujin', 'Batu Khan', 'Hulagu Khan'],
      answer: 'Genghis Khan'
    },
    {
      question: 'Quem foi o primeiro imperador romano?',
      options: ['Júlio César', 'Augusto', 'Tibério', 'Calígula', 'Nero'],
      answer: 'Augusto'
    },
    {
      question: 'Quem foi o primeiro presidente de Angola?',
      options: ['Agostinho Neto', 'José Eduardo dos Santos', 'João Lourenço', 'Samora Machel', 'Mobutu Sese Seko'],
      answer: 'Agostinho Neto'
    },
    {
      question: 'Quem foi o primeiro presidente de Angola?',
      options: ['Agostinho Neto', 'José Eduardo dos Santos', 'João Lourenço', 'Samora Machel', 'Mobutu Sese Seko'],
      answer: 'Agostinho Neto'
    },
    {
      question: 'Em que ano Angola conquistou a independência de Portugal?',
      options: ['1975', '1980', '1960', '1990', '2000'],
      answer: '1975'
    },
    {
      question: 'Qual é a capital de Angola?',
      options: ['Luanda', 'Lubango', 'Cabinda', 'Benguela', 'Huambo'],
      answer: 'Luanda'
    },
    {
      question: 'Quem liderou o movimento de independência em Angola?',
      options: ['Agostinho Neto', 'Holden Roberto', 'Jonas Savimbi', 'Amílcar Cabral', 'Eduardo dos Santos'],
      answer: 'Agostinho Neto'
    },
    {
      question: 'Quantas províncias tem Angola?',
      options: ['18', '12', '24', '8', '30'],
      answer: '18'
    },
    {
      question: 'Qual é a língua oficial de Angola?',
      options: ['Português', 'Francês', 'Inglês', 'Espanhol', 'Italiano'],
      answer: 'Português'
    },
    {
      question: 'Quem foi o líder do MPLA durante a guerra civil angolana?',
      options: ['José Eduardo dos Santos', 'Jonas Savimbi', 'Agostinho Neto', 'Holden Roberto', 'Eduardo Mondlane'],
      answer: 'José Eduardo dos Santos'
    },
    {
      question: 'Qual é o principal grupo étnico em Angola?',
      options: ['Ovimbundu', 'Bakongo', 'Ambundu', 'Himba', 'Hérero'],
      answer: 'Ovimbundu'
    },
    {
      question: 'Em que ano começou a guerra civil angolana?',
      options: ['1975', '1980', '1960', '1990', '2000'],
      answer: '1975'
    },
    {
      question: 'Quem foi o primeiro explorador europeu a chegar à região que é hoje Angola?',
      options: ['Diogo Cão', 'Vasco da Gama', 'Bartolomeu Dias', 'Pedro Álvares Cabral', 'Fernão Mendes Pinto'],
      answer: 'Diogo Cão'
    },
    {
      question: 'Qual é a moeda oficial de Angola?',
      options: ['Kwanza', 'Metical', 'Dólar', 'Euro', 'Libra Esterlina'],
      answer: 'Kwanza'
    },
    {
      question: 'Em que ano Angola conquistou a independência de Portugal?',
      options: ['1975', '1980', '1960', '1990', '2000'],
      answer: '1975'
    },
    {
      question: 'Qual é a capital de Angola?',
      options: ['Luanda', 'Lubango', 'Cabinda', 'Benguela', 'Huambo'],
      answer: 'Luanda'
    },
    {
      question: 'Quem liderou o movimento de independência em Angola?',
      options: ['Agostinho Neto', 'Holden Roberto', 'Jonas Savimbi', 'Amílcar Cabral', 'Eduardo dos Santos'],
      answer: 'Agostinho Neto'
    },
    {
      question: 'Quantas províncias tem Angola?',
      options: ['18', '12', '24', '8', '30'],
      answer: '18'
    },
    {
      question: 'Qual evento histórico é conhecido como "A Noite dos Cristais"?',
      options: ['Queda do Muro de Berlim', 'Início da Segunda Guerra Mundial', 'Kristallnacht', 'Assassinato de JFK', 'Revolução Russa'],
      answer: 'Kristallnacht'
    },
    {
      question: 'Quem foi o autor de "O Príncipe", um tratado político renascentista?',
      options: ['Dante Alighieri', 'Machiavelli', 'Leonardo da Vinci', 'Petrarch', 'Giordano Bruno'],
      answer: 'Machiavelli'
    },
    {
      question: 'Qual foi o resultado da Guerra do Peloponeso entre Atenas e Esparta?',
      options: ['Vitória de Atenas', 'Empate', 'Vitória de Esparta', 'Trégua duradoura', 'Formação da Liga de Delos'],
      answer: 'Vitória de Esparta'
    },
    {
      question: 'Quem foi o líder da Revolução Cultural na China?',
      options: ['Deng Xiaoping', 'Zhou Enlai', 'Mao Zedong', 'Chiang Kai-shek', 'Sun Yat-sen'],
      answer: 'Mao Zedong'
    },
    {
      question: 'Qual foi o impacto da Peste Negra na Europa durante o século XIV?',
      options: ['Crescimento econômico', 'Redução da população', 'Ascensão do feudalismo', 'Expansão territorial', 'Renascimento cultural'],
      answer: 'Redução da população'
    },
    {
      question: 'Quem foi o fundador do Império Persa no século VI a.C.?',
      options: ['Ciro, o Grande', 'Dario I', 'Xerxes', 'Artaxerxes', 'Cambises II'],
      answer: 'Ciro, o Grande'
    },
    {
      question: 'Qual tratado encerrou a Primeira Guerra Mundial?',
      options: ['Tratado de Versalhes', 'Tratado de Brest-Litovsk', 'Tratado de Trianon', 'Tratado de Saint-Germain', 'Tratado de Sèvres'],
      answer: 'Tratado de Versalhes'
    },
    {
      question: 'Quem foi o líder da Revolução Industrial na Alemanha?',
      options: ['Otto von Bismarck', 'Friedrich Engels', 'Karl Marx', 'Werner von Siemens', 'Friedrich List'],
      answer: 'Friedrich List'
    },
    {
      question: 'Em que ano os Estados Unidos declararam independência da Grã-Bretanha?',
      options: ['1754', '1776', '1789', '1803', '1812'],
      answer: '1776'
    },
    {
      question: 'Quem foi a rainha lendária do Reino do Ndongo, conhecida por sua resistência contra o domínio português no século XVII?',
      options: ['Nzinga Mbandi', 'Ana de Sousa Nzinga', 'Rainha Nefertiti', 'Cleópatra', 'Rainha Sheba'],
      answer: 'Nzinga Mbandi'
    },
  ],
    // Adicione mais perguntas sobre historia
  geografia: [
    {
      question: 'Qual é o maior rio do mundo?',
      options: ['Rio Nilo', 'Rio Ganges', 'Rio Amazonas', 'Rio Yangtzé', 'Rio Mississippi'],
      answer: 'Rio Amazonas'
    },
    {
      question: 'Em que continente está localizado o Deserto do Saara?',
      options: ['África', 'Ásia', 'América do Sul', 'Oceania', 'Europa'],
      answer: 'África'
    },
    {
      question: 'Qual é o ponto mais alto do mundo?',
      options: ['Monte Everest', 'Monte Kilimanjaro', 'Monte Aconcágua', 'Monte McKinley', 'Monte Fuji'],
      answer: 'Monte Everest'
    },
    {
      question: 'Qual é a cidade mais populosa do mundo?',
      options: ['Tóquio', 'Delhi', 'Xangai', 'Cidade do México', 'Mumbai'],
      answer: 'Tóquio'
    },
    {
      question: 'Qual é o maior deserto frio do mundo?',
      options: ['Deserto do Saara', 'Deserto da Arábia', 'Deserto de Gobi', 'Deserto do Atacama', 'Antártica'],
      answer: 'Antártica'
    },
    {
      question: 'Em qual continente está localizado o Monte Kilimanjaro?',
      options: ['África', 'Ásia', 'Europa', 'América do Sul', 'Oceania'],
      answer: 'África'
    },
    {
      question: 'Qual é o rio mais longo do mundo?',
      options: ['Rio Nilo', 'Rio Amazonas', 'Rio Yangtzé', 'Rio Indo', 'Rio Paraná'],
      answer: 'Rio Amazonas'
    },
    {
      question: 'Em que país está localizado o Mar Morto?',
      options: ['Israel', 'Jordânia', 'Líbano', 'Síria', 'Egito'],
      answer: 'Israel'
    },
    {
      question: 'Qual é a capital da Austrália?',
      options: ['Sidnei', 'Melbourne', 'Brisbane', 'Canberra', 'Perth'],
      answer: 'Canberra'
    },
    {
      question: 'Qual é o país mais extenso do mundo?',
      options: ['Rússia', 'Canadá', 'China', 'Estados Unidos', 'Brasil'],
      answer: 'Rússia'
    },
    {
      question: 'Em que cordilheira está localizado o Monte Everest?',
      options: ['Andes', 'Himalaias', 'Alpes', 'Rocha Mountains', 'Montanhas Urais'],
      answer: 'Himalaias'
    },
    {
      question: 'Qual é o maior arquipélago do mundo?',
      options: ['Filipinas', 'Malaia', 'Groenlândia', 'Nova Zelândia', 'Indonésia'],
      answer: 'Indonésia'
    },
    {
      question: 'Em que oceano está localizado o Mar de Coral?',
      options: ['Oceano Atlântico', 'Oceano Índico', 'Oceano Pacífico', 'Oceano Ártico', 'Oceano Antártico'],
      answer: 'Oceano Pacífico'
    },
    {
      question: 'Qual é o país mais populoso do mundo?',
      options: ['Índia', 'Estados Unidos', 'China', 'Brasil', 'Indonésia'],
      answer: 'China'
    },
    {
      question: 'Qual é o menor país do mundo?',
      options: ['Vaticano', 'Mônaco', 'Nauru', 'Tuvalu', 'San Marino'],
      answer: 'Vaticano'
    },
    {
      question: 'Em que oceano está localizado o Triângulo das Bermudas?',
      options: ['Oceano Atlântico', 'Oceano Índico', 'Oceano Pacífico', 'Oceano Ártico', 'Oceano Antártico'],
      answer: 'Oceano Atlântico'
    },
    {
      question: 'Qual é o maior país da América do Sul em extensão territorial?',
      options: ['Brasil', 'Argentina', 'Colômbia', 'Peru', 'Chile'],
      answer: 'Brasil'
    },
    {
      question: 'Em que país está localizado o Kilimanjaro, a montanha mais alta da África?',
      options: ['Quênia', 'Tanzânia', 'Uganda', 'Ruanda', 'Burundi'],
      answer: 'Tanzânia'
    },
    {
      question: 'Qual é o país conhecido como "Terra do Sol Nascente"?',
      options: ['China', 'Índia', 'Japão', 'Coreia do Sul', 'Tailândia'],
      answer: 'Japão'
    },
    {
      question: 'Qual é o nome da maior ilha do mundo?',
      options: ['Ilha de Baffin', 'Ilha de Ellesmere', 'Ilha de Java', 'Ilha de Sumatra', 'Ilha da Groenlândia'],
      answer: 'Ilha da Groenlândia'
    },
    {
      question: 'Em que país está localizado o Deserto do Atacama?',
      options: ['Chile', 'Argentina', 'Peru', 'Bolívia', 'Colômbia'],
      answer: 'Chile'
    },
    {
      question: 'Qual é a capital da Argentina?',
      options: ['Santiago', 'Buenos Aires', 'Montevidéu', 'Caracas', 'Assunção'],
      answer: 'Buenos Aires'
    },
    {
      question: 'Qual é o ponto mais baixo da superfície terrestre?',
      options: ['Mar Morto', 'Fossa das Marianas', 'Deserto de Badwater', 'Lago Baikal', 'Depressão Bentley'],
      answer: 'Fossa das Marianas'
    },
    {
      question: 'Em que país está localizado o famoso Canal de Suez?',
      options: ['Egito', 'Israel', 'Arábia Saudita', 'Sudão', 'Iêmen'],
      answer: 'Egito'
    },
    {
      question: 'Qual é o maior produtor de petróleo do mundo?',
      options: ['Estados Unidos', 'Arábia Saudita', 'Rússia', 'Canadá', 'China'],
      answer: 'Estados Unidos'
    },
    {
      question: 'Qual é a ilha mais populosa do mundo?',
      options: ['Ilha de Java', 'Ilha de Bali', 'Ilha de Honshu', 'Ilha de Sumatra', 'Ilha de Luzon'],
      answer: 'Ilha de Java'
    },
    {
      question: 'Em que continente está localizado o Cabo da Boa Esperança?',
      options: ['África', 'Europa', 'Ásia', 'América do Sul', 'Oceania'],
      answer: 'África'
    },
    {
      question: 'Qual é a capital do Canadá?',
      options: ['Toronto', 'Vancouver', 'Montreal', 'Ottawa', 'Calgary'],
      answer: 'Ottawa'
    },
    {
      question: 'Em que país está localizada a Grande Muralha?',
      options: ['Coreia do Norte', 'Índia', 'China', 'Mongólia', 'Rússia'],
      answer: 'China'
    },
    {
      question: 'Qual é o rio mais longo da África?',
      options: ['Rio Congo', 'Rio Nilo', 'Rio Zambeze', 'Rio Orange', 'Rio Niger'],
      answer: 'Rio Nilo'
    },
    {
      question: 'Qual é o país mais populoso da África?',
      options: ['Nigéria', 'Etiópia', 'Egito', 'África do Sul', 'Congo'],
      answer: 'Nigéria'
    },
    {
      question: 'Em que cidade está localizada a Torre Eiffel?',
      options: ['Berlim', 'Paris', 'Londres', 'Roma', 'Madri'],
      answer: 'Paris'
    },
    {
      question: 'Qual é o menor continente do mundo?',
      options: ['África', 'Europa', 'Ásia', 'Oceania', 'Antártica'],
      answer: 'Oceania'
    },
    {
      question: 'Em que país está localizado o Parque Nacional de Yellowstone?',
      options: ['Estados Unidos', 'Canadá', 'México', 'Austrália', 'Nova Zelândia'],
      answer: 'Estados Unidos'
    },
    {
      question: 'Qual é o deserto mais seco do mundo?',
      options: ['Deserto do Atacama', 'Deserto do Saara', 'Deserto de Gobi', 'Deserto da Arábia', 'Deserto do Namibe'],
      answer: 'Deserto do Atacama'
    },
    {
      question: 'Qual é a cidade mais populosa da Índia?',
      options: ['Nova Deli', 'Bombaim', 'Calcutá', 'Chennai', 'Bangalore'],
      answer: 'Bombaim'
    },
    {
      question: 'Qual é o ponto mais alto da Europa?',
      options: ['Monte Branco', 'Monte Elbrus', 'Monte Rosa', 'Monte Cervino', 'Pico Dufour'],
      answer: 'Monte Elbrus'
    },
    {
      question: 'Em que oceano está localizado o Mar de Coral?',
      options: ['Oceano Atlântico', 'Oceano Índico', 'Oceano Pacífico', 'Oceano Ártico', 'Oceano Antártico'],
      answer: 'Oceano Pacífico'
    },
    {
      question: 'Qual é o país mais extenso da América do Sul?',
      options: ['Brasil', 'Argentina', 'Colômbia', 'Peru', 'Chile'],
      answer: 'Brasil'
    },
    {
      question: 'Em que país está localizada a cidade de Istambul?',
      options: ['Grécia', 'Turquia', 'Bulgária', 'Romênia', 'Croácia'],
      answer: 'Turquia'
    },
    {
      question: 'Qual é a capital da Nova Zelândia?',
      options: ['Auckland', 'Wellington', 'Christchurch', 'Hamilton', 'Dunedin'],
      answer: 'Wellington'
    },
    {
      question: 'Em que oceano está localizado o Arquipélago de Maldivas?',
      options: ['Oceano Atlântico', 'Oceano Índico', 'Oceano Pacífico', 'Oceano Ártico', 'Oceano Antártico'],
      answer: 'Oceano Índico'
    },
    {
      question: 'Qual é o país mais populoso do mundo?',
      options: ['Índia', 'Estados Unidos', 'China', 'Brasil', 'Indonésia'],
      answer: 'China'
    },
    {
      question: 'Qual é a capital da Austrália?',
      options: ['Sidnei', 'Melbourne', 'Brisbane', 'Canberra', 'Perth'],
      answer: 'Canberra'
    },
    {
      question: 'Em que oceano está localizado o Triângulo das Bermudas?',
      options: ['Oceano Atlântico', 'Oceano Índico', 'Oceano Pacífico', 'Oceano Ártico', 'Oceano Antártico'],
      answer: 'Oceano Atlântico'
    },
    {
      question: 'Qual é o maior país da América do Norte em termos de extensão territorial?',
      options: ['Estados Unidos', 'Canadá', 'México', 'Groenlândia', 'Cuba'],
      answer: 'Canadá'
    },
    {
      question: 'Em que oceano está localizado o Golfo Pérsico?',
      options: ['Oceano Atlântico', 'Oceano Índico', 'Oceano Pacífico', 'Oceano Ártico', 'Mar Mediterrâneo'],
      answer: 'Oceano Índico'
    },
    {
      question: 'Qual é o maior lago da África?',
      options: ['Lago Vitória', 'Lago Niassa', 'Lago Malawi', 'Lago Tanganica', 'Lago Turkana'],
      answer: 'Lago Vitória'
    },
    {
      question: 'Em que país está localizada a Cordilheira dos Andes?',
      options: ['Chile', 'Argentina', 'Peru', 'Equador', 'Colômbia'],
      answer: 'Chile'
    },
    {
      question: 'Qual é a capital do Quênia?',
      options: ['Nairobi', 'Daca', 'Dar es Salaam', 'Cartum', 'Kampala'],
      answer: 'Nairobi'
    },
    {
      question: 'Quais são os dois rios mais importantes que formam o delta no norte do Egito?',
      options: ['Nilo e Tigre', 'Nilo e Eufrates', 'Nilo e Congo', 'Nilo e Zambeze', 'Nilo e Orange'],
      answer: 'Nilo e Tigre'
    },
    {
      question: 'Em que país está localizado o Deserto do Kalahari?',
      options: ['África do Sul', 'Namíbia', 'Botswana', 'Zimbábue', 'Zâmbia'],
      answer: 'Botswana'
    },
    {
      question: 'Qual é a capital da Angola?',
      options: ['Luanda', 'Maputo', 'Pretória', 'Windhoek', 'Libreville'],
      answer: 'Luanda'
    },
    {
      question: 'Qual é o ponto mais alto da América do Sul?',
      options: ['Aconcágua', 'Monte Roraima', 'Huascarán', 'Monte Pissis', 'Monte Ojos del Salado'],
      answer: 'Aconcágua'
    },
    {
      question: 'Em que país está localizado o Mar de Aral?',
      options: ['Cazaquistão', 'Uzbequistão', 'Turcomenistão', 'Quirguistão', 'Afeganistão'],
      answer: 'Cazaquistão'
    },
    {
      question: 'Qual é o país mais populoso do mundo?',
      options: ['Índia', 'Estados Unidos', 'China', 'Brasil', 'Indonésia'],
      answer: 'China'
    },
    {
      question: 'Qual é a ilha mais populosa do mundo?',
      options: ['Ilha de Java', 'Ilha de Bali', 'Ilha de Honshu', 'Ilha de Sumatra', 'Ilha de Luzon'],
      answer: 'Ilha de Java'
    },
    {
      question: 'Qual é a capital do Canadá?',
      options: ['Toronto', 'Vancouver', 'Montreal', 'Ottawa', 'Calgary'],
      answer: 'Ottawa'
    },
    {
      question: 'Qual é o país conhecido como "Terra do Sol Nascente"?',
      options: ['China', 'Índia', 'Japão', 'Coreia do Sul', 'Tailândia'],
      answer: 'Japão'
    },
    {
      question: 'Qual é o nome da maior ilha do mundo?',
      options: ['Ilha de Baffin', 'Ilha de Ellesmere', 'Ilha de Java', 'Ilha de Sumatra', 'Ilha da Groenlândia'],
      answer: 'Ilha da Groenlândia'
    },
    {
      question: 'Em que país está localizado o Deserto do Atacama?',
      options: ['Chile', 'Argentina', 'Peru', 'Bolívia', 'Colômbia'],
      answer: 'Chile'
    },
    {
      question: 'Qual é a capital da Argentina?',
      options: ['Santiago', 'Buenos Aires', 'Montevidéu', 'Caracas', 'Assunção'],
      answer: 'Buenos Aires'
    },
    {
      question: 'Qual é o ponto mais baixo da superfície terrestre?',
      options: ['Mar Morto', 'Fossa das Marianas', 'Deserto de Badwater', 'Lago Baikal', 'Depressão Bentley'],
      answer: 'Fossa das Marianas'
    },
    {
      question: 'Em que país está localizado o famoso Canal de Suez?',
      options: ['Egito', 'Israel', 'Arábia Saudita', 'Sudão', 'Iêmen'],
      answer: 'Egito'
    },
    {
      question: 'Qual é o maior produtor de petróleo do mundo?',
      options: ['Estados Unidos', 'Arábia Saudita', 'Rússia', 'Canadá', 'China'],
      answer: 'Estados Unidos'
    },
    {
      question: 'Qual é a ilha mais populosa do mundo?',
      options: ['Ilha de Java', 'Ilha de Bali', 'Ilha de Honshu', 'Ilha de Sumatra', 'Ilha de Luzon'],
      answer: 'Ilha de Java'
    },
    {
      question: 'Em que continente está localizado o Cabo da Boa Esperança?',
      options: ['África', 'Europa', 'Ásia', 'América do Sul', 'Oceania'],
      answer: 'África'
    },
    {
      question: 'Qual é a capital do Canadá?',
      options: ['Toronto', 'Vancouver', 'Montreal', 'Ottawa', 'Calgary'],
      answer: 'Ottawa'
    },
    {
      question: 'Qual é a capital da Áustria?',
      options: ['Viena', 'Salzburgo', 'Innsbruck', 'Graz', 'Linz'],
      answer: 'Viena'
    },
    {
      question: 'Em que oceano está localizado o Mar de Bering?',
      options: ['Oceano Atlântico', 'Oceano Índico', 'Oceano Pacífico', 'Oceano Ártico', 'Oceano Antártico'],
      answer: 'Oceano Pacífico'
    },
    {
      question: 'Qual é o país mais extenso da Europa?',
      options: ['Rússia', 'França', 'Espanha', 'Alemanha', 'Suécia'],
      answer: 'Rússia'
    },
    {
      question: 'Em que ano ocorreu a unificação da Alemanha?',
      options: ['1871', '1789', '1918', '1945', '1989'],
      answer: '1871'
    },
    {
      question: 'Qual é a capital do Marrocos?',
      options: ['Casablanca', 'Rabat', 'Marrakech', 'Fez', 'Tânger'],
      answer: 'Rabat'
    },
    {
      question: 'Em que oceano está localizado o Arquipélago de Maldivas?',
      options: ['Oceano Atlântico', 'Oceano Índico', 'Oceano Pacífico', 'Oceano Ártico', 'Oceano Antártico'],
      answer: 'Oceano Índico'
    },
    {
      question: 'Qual é a capital do Egito?',
      options: ['Cairo', 'Alexandria', 'Luxor', 'Aswan', 'Giza'],
      answer: 'Cairo'
    },
    {
      question: 'Qual é o maior lago de água doce da América do Norte?',
      options: ['Lago Superior', 'Lago Michigan', 'Lago Huron', 'Lago Erie', 'Lago Ontario'],
      answer: 'Lago Superior'
    },
    {
      question: 'Em que país está localizada a cidade de Istambul?',
      options: ['Grécia', 'Turquia', 'Bulgária', 'Romênia', 'Croácia'],
      answer: 'Turquia'
    },
    {
      question: 'Qual é a capital da Nova Zelândia?',
      options: ['Auckland', 'Wellington', 'Christchurch', 'Hamilton', 'Dunedin'],
      answer: 'Wellington'
    },
    {
      question: 'Em que oceano está localizado o Mar de Coral?',
      options: ['Oceano Atlântico', 'Oceano Índico', 'Oceano Pacífico', 'Oceano Ártico', 'Oceano Antártico'],
      answer: 'Oceano Pacífico'
    },
    {
      question: 'Qual é o país mais populoso da África?',
      options: ['Nigéria', 'Etiópia', 'Egito', 'África do Sul', 'Congo'],
      answer: 'Nigéria'
    },
    {
      question: 'Qual é a capital da Tailândia?',
      options: ['Bangkok', 'Chiang Mai', 'Phuket', 'Pattaya', 'Krabi'],
      answer: 'Bangkok'
    },
    {
      question: 'Em que país está localizado o Monte Fuji?',
      options: ['China', 'Japão', 'Coreia do Sul', 'Taiwan', 'Filipinas'],
      answer: 'Japão'
    },
    {
      question: 'Qual é o maior lago de água doce do mundo em termos de área?',
      options: ['Lago Superior', 'Lago Baikal', 'Lago Vitória', 'Lago Tanganica', 'Lago Niassa'],
      answer: 'Lago Superior'
    },
    {
      question: 'Qual é a capital de Angola?',
      options: ['Luanda', 'Cabinda', 'Benguela', 'Huambo', 'Lubango'],
      answer: 'Luanda'
    },
    {
      question: 'Qual é o rio mais longo de Angola?',
      options: ['Rio Cubango', 'Rio Cunene', 'Rio Kwanza', 'Rio Zambeze', 'Rio Okavango'],
      answer: 'Rio Kwanza'
    },
    {
      question: 'Em que região de Angola está localizado o Deserto do Namibe?',
      options: ['Norte', 'Centro', 'Leste', 'Sul', 'Oeste'],
      answer: 'Sul'
    },
    {
      question: 'Qual é a província mais populosa de Angola?',
      options: ['Luanda', 'Benguela', 'Huíla', 'Huambo', 'Cuanza Sul'],
      answer: 'Luanda'
    },
    {
      question: 'Quantas províncias possui Angola?',
      options: ['12', '18', '24', '30', '35'],
      answer: '18'
    },
    {
      question: 'Qual é o ponto mais alto de Angola?',
      options: ['Morro do Moco', 'Monte Negro', 'Morro da Cruz', 'Monte Sumi', 'Serra da Chela'],
      answer: 'Morro do Moco'
    },
    {
      question: 'Em que oceano fica a costa de Angola?',
      options: ['Oceano Atlântico', 'Oceano Índico', 'Oceano Pacífico', 'Mar Mediterrâneo', 'Mar do Caribe'],
      answer: 'Oceano Atlântico'
    },
    {
      question: 'Qual é o clima predominante em Angola?',
      options: ['Equatorial', 'Semiárido', 'Mediterrâneo', 'Subtropical', 'Desértico'],
      answer: 'Equatorial'
    },
    {
      question: 'Qual é o nome da reserva natural que abriga uma das maiores concentrações de elefantes em Angola?',
      options: ['Parque Nacional do Quiçama', 'Reserva Natural do Iona', 'Parque Nacional da Kissama', 'Parque Nacional do Bicuar', 'Reserva Integral Luando'],
      answer: 'Parque Nacional do Quiçama'
    },
    {
      question: 'Em que ano Angola conquistou a independência de Portugal?',
      options: ['1960', '1975', '1980', '1990', '2000'],
      answer: '1975'
    },
    {
      question: 'Qual é o nome da cidade portuária na costa central de Angola?',
      options: ['Lobito', 'Namibe', 'Benguela', 'Luanda', 'Cabinda'],
      answer: 'Lobito'
    },
    {
      question: 'Qual é a maior cidade do interior de Angola?',
      options: ['Huambo', 'Lubango', 'Malanje', 'Kuito', 'Saurimo'],
      answer: 'Huambo'
    },
    {
      question: 'Em que rio de Angola foi construída a barragem de Capanda?',
      options: ['Rio Kwanza', 'Rio Cubango', 'Rio Cunene', 'Rio Okavango', 'Rio Longa'],
      answer: 'Rio Kwanza'
    },
    {
      question: 'Qual é a segunda maior cidade de Angola?',
      options: ['Benguela', 'Huambo', 'Lobito', 'Malanje', 'Cabinda'],
      answer: 'Lobito'
    },
    {
      question: 'Qual é o nome da capital da província de Benguela em Angola?',
      options: ['Benguela', 'Lobito', 'Cubal', 'Baía Farta', 'Chongoroi'],
      answer: 'Benguela'
    },
    {
      question: 'Em que província de Angola está localizado o Parque Nacional de Iona?',
      options: ['Namibe', 'Cunene', 'Huila', 'Cuanza Sul', 'Malanje'],
      answer: 'Namibe'
    },
    {
      question: 'Qual é o nome do deserto localizado na província de Namibe em Angola?',
      options: ['Deserto do Namibe', 'Deserto do Kalahari', 'Deserto do Atacama', 'Deserto da Namíbia', 'Deserto do Saara'],
      answer: 'Deserto do Namibe'
    },
    {
      question: 'Quantos quilômetros de litoral Angola possui?',
      options: ['1.650 km', '2.000 km', '2.500 km', '3.000 km', '3.500 km'],
      answer: '1.650 km'
    },
    {
      question: 'Qual é a principal língua falada em Angola?',
      options: ['Português', 'Quimbundo', 'Umbundo', 'Kimbundu', 'Kikongo'],
      answer: 'Português'
    },
    {
      question: 'Em que ano Angola se tornou membro da Comunidade dos Países de Língua Portuguesa (CPLP)?',
      options: ['1996', '2000', '2004', '2008', '2010'],
      answer: '1996'
    },
    {
      question: 'Qual é o país mais populoso da América do Sul?',
      options: ['Brasil', 'Argentina', 'Colômbia', 'Peru', 'Chile'],
      answer: 'Brasil'
    },
    {
      question: 'Qual é o maior arquipélago do mundo?',
      options: ['Filipinas', 'Malaia', 'Groenlândia', 'Nova Zelândia', 'Indonésia'],
      answer: 'Indonésia'
    },
    {
      question: 'Em que oceano está localizado o Triângulo das Bermudas?',
      options: ['Oceano Atlântico', 'Oceano Índico', 'Oceano Pacífico', 'Oceano Ártico', 'Oceano Antártico'],
      answer: 'Oceano Atlântico'
    },
    {
      question: 'Qual é o país conhecido como "Terra do Sol Nascente"?',
      options: ['China', 'Índia', 'Japão', 'Coreia do Sul', 'Tailândia'],
      answer: 'Japão'
    },
    {
      question: 'Qual é o nome da maior ilha do mundo?',
      options: ['Ilha de Baffin', 'Ilha de Ellesmere', 'Ilha de Java', 'Ilha de Sumatra', 'Ilha da Groenlândia'],
      answer: 'Ilha da Groenlândia'
    },
    {
      question: 'Em que país está localizado o Deserto do Atacama?',
      options: ['Chile', 'Argentina', 'Peru', 'Bolívia', 'Colômbia'],
      answer: 'Chile'
    },
    {
      question: 'Qual é a capital da Argentina?',
      options: ['Santiago', 'Buenos Aires', 'Montevidéu', 'Caracas', 'Assunção'],
      answer: 'Buenos Aires'
    },
    {
      question: 'Qual é o ponto mais baixo da superfície terrestre?',
      options: ['Mar Morto', 'Fossa das Marianas', 'Deserto de Badwater', 'Lago Baikal', 'Depressão Bentley'],
      answer: 'Fossa das Marianas'
    },
    {
      question: 'Em que país está localizado o famoso Canal de Suez?',
      options: ['Egito', 'Israel', 'Arábia Saudita', 'Sudão', 'Iêmen'],
      answer: 'Egito'
    },
    {
      question: 'Qual é o maior produtor de petróleo do mundo?',
      options: ['Estados Unidos', 'Arábia Saudita', 'Rússia', 'Canadá', 'China'],
      answer: 'Estados Unidos'
    },
    {
      question: 'Qual é a ilha mais populosa do mundo?',
      options: ['Ilha de Java', 'Ilha de Bali', 'Ilha de Honshu', 'Ilha de Sumatra', 'Ilha de Luzon'],
      answer: 'Ilha de Java'
    },
    {
      question: 'Em que continente está localizado o Cabo da Boa Esperança?',
      options: ['África', 'Europa', 'Ásia', 'América do Sul', 'Oceania'],
      answer: 'África'
    },
    {
      question: 'Qual é a capital do Canadá?',
      options: ['Toronto', 'Vancouver', 'Montreal', 'Ottawa', 'Calgary'],
      answer: 'Ottawa'
    },
    {
      question: 'Qual é o maior lago de água doce do mundo em termos de volume?',
      options: ['Lago Baikal', 'Lago Superior', 'Lago Vitória', 'Lago Tanganica', 'Lago Niassa'],
      answer: 'Lago Baikal'
    },
    // Adicione mais perguntas de Geografia conforme necessário
  ],
  ciencia: [
    {
      question: 'Qual é o símbolo químico do ouro?',
      options: ['Au', 'Ag', 'Cu', 'Fe', 'Pt'],
      answer: 'Au'
    },
    {
      question: 'Qual é o elemento químico mais abundante na crosta terrestre?',
      options: ['Oxigênio', 'Silício', 'Alumínio', 'Ferro', 'Cálcio'],
      answer: 'Oxigênio'
    },
    {
      question: 'Quem desenvolveu a teoria da relatividade?',
      options: ['Isaac Newton', 'Niels Bohr', 'Albert Einstein', 'Marie Curie', 'Galileu Galilei'],
      answer: 'Albert Einstein'
    },
    {
      question: 'O que é a fotossíntese?',
      options: ['Processo de respiração celular', 'Decomposição de matéria orgânica', 'Conversão de energia solar em energia química', 'Produção de proteínas', 'Digestão de alimentos'],
      answer: 'Conversão de energia solar em energia química'
    },
    {
      question: 'Qual é o planeta mais próximo do Sol?',
      options: ['Terra', 'Vênus', 'Júpiter', 'Mercúrio', 'Marte'],
      answer: 'Mercúrio'
    },
    {
      question: 'Quem foi o primeiro cientista a observar células através de um microscópio?',
      options: ['Anton van Leeuwenhoek', 'Robert Hooke', 'Louis Pasteur', 'Gregor Mendel', 'Carl Linnaeus'],
      answer: 'Robert Hooke'
    },
    {
      question: 'O que é um átomo?',
      options: ['A menor partícula de uma substância', 'Uma célula humana', 'Um composto químico', 'Um tipo de molécula', 'A menor unidade de um elemento químico'],
      answer: 'A menor unidade de um elemento químico'
    },
    {
      question: 'Qual é a unidade básica da hereditariedade?',
      options: ['DNA', 'RNA', 'Proteína', 'Cromossomo', 'Gene'],
      answer: 'Gene'
    },
    {
      question: 'O que é a lei da gravidade?',
      options: ['Corpos em movimento permanecem em movimento', 'A força entre dois corpos é diretamente proporcional à massa deles e inversamente proporcional ao quadrado da distância entre eles', 'Todo objeto em um estado de movimento uniforme permanecerá nesse estado a menos que uma força externa atue sobre ele', 'Para cada ação, há uma reação igual e oposta', 'A aceleração de um objeto é diretamente proporcional à força líquida agindo sobre ele'],
      answer: 'A força entre dois corpos é diretamente proporcional à massa deles e inversamente proporcional ao quadrado da distância entre eles'
    },
      {
        question: 'Qual é o maior órgão do corpo humano?',
        options: ['Fígado', 'Pele', 'Cérebro', 'Estômago', 'Coração'],
        answer: 'Pele'
      },
      {
        question: 'Quem é conhecido como o pai da medicina moderna?',
        options: ['Hippocrates', 'Galeno', 'Avicenna', 'Paracelsus', 'Louis Pasteur'],
        answer: 'Hippocrates'
      },
      {
        question: 'O que é um quasar?',
        options: ['Um tipo de galáxia', 'Uma estrela em colapso', 'Um buraco negro', 'Uma fonte de energia subatômica', 'Um objeto astronômico extremamente luminoso'],
        answer: 'Um objeto astronômico extremamente luminoso'
      },
      {
        question: 'Quem é a cientista ganhadora de dois prêmios Nobel em duas categorias diferentes?',
        options: ['Marie Curie', 'Rosalind Franklin', 'Dorothy Crowfoot Hodgkin', 'Barbara McClintock', 'Ada Lovelace'],
        answer: 'Marie Curie'
      },
      {
        question: 'O que é a teoria da evolução?',
        options: ['A explicação do movimento dos planetas', 'A origem do universo', 'A teoria da relatividade', 'A explicação da diversidade das espécies', 'A teoria do Big Bang'],
        answer: 'A explicação da diversidade das espécies'
      },
      {
        question: 'Qual é o nome do primeiro satélite artificial lançado pela União Soviética em 1957?',
        options: ['Apollo 11', 'Voyager 1', 'Hubble', 'Sputnik 1', 'Skylab'],
        answer: 'Sputnik 1'
      },
      {
        question: 'O que é a terapia genética?',
        options: ['Um tipo de cirurgia', 'Um método de tratamento que envolve a alteração do DNA', 'Uma técnica de reprodução assistida', 'Um tipo de terapia psicológica', 'Um método de prevenção de doenças'],
        answer: 'Um método de tratamento que envolve a alteração do DNA'
      },
      {
        question: 'Qual é o ácido encontrado em limões?',
        options: ['Ácido clorídrico', 'Ácido cítrico', 'Ácido acético', 'Ácido fórmico', 'Ácido sulfúrico'],
        answer: 'Ácido cítrico'
      },
      {
        question: 'Quem é conhecido como o pai da computação?',
        options: ['Bill Gates', 'Alan Turing', 'Steve Jobs', 'Charles Babbage', 'Tim Berners-Lee'],
        answer: 'Charles Babbage'
      },
      {
        question: 'O que é a lei da conservação da energia?',
        options: ['A energia não pode ser criada nem destruída, apenas transformada', 'A energia é diretamente proporcional à massa de um objeto', 'A energia total de um sistema é constante', 'A energia é inversamente proporcional à aceleração', 'A energia não pode ser transformada em trabalho'],
        answer: 'A energia não pode ser criada nem destruída, apenas transformada'
      },
      {
        question: 'Quem é conhecido por formular as leis do movimento?',
        options: ['Isaac Newton', 'Albert Einstein', 'Galileu Galilei', 'Nikola Tesla', 'Johannes Kepler'],
        answer: 'Isaac Newton'
      },
      {
        question: 'O que é um fóton?',
        options: ['Uma partícula subatômica', 'Uma onda sonora', 'Uma unidade de medida de energia térmica', 'Uma partícula de luz', 'Uma partícula de antimatéria'],
        answer: 'Uma partícula de luz'
      },
      {
        question: 'Quem desenvolveu a teoria das cordas?',
        options: ['Richard Feynman', 'Stephen Hawking', 'Brian Greene', 'Michio Kaku', 'Edward Witten'],
        answer: 'Edward Witten'
      },
      {
        question: 'O que é a clonagem?',
        options: ['Um método de reprodução assexuada', 'Uma técnica de manipulação genética', 'Um tipo de terapia médica', 'Um processo de multiplicação de células', 'Um método de preservação de espécies ameaçadas'],
        answer: 'Um método de reprodução assexuada'
      },
      {
        question: 'Qual é o processo pelo qual as plantas produzem seu próprio alimento?',
        options: ['Fotossíntese', 'Quimiossíntese', 'Respiração', 'Digestão', 'Excreção'],
        answer: 'Fotossíntese'
      },
      {
        question: 'O que é um neurotransmissor?',
        options: ['Uma célula sanguínea', 'Um hormônio', 'Uma molécula de DNA', 'Uma partícula subatômica', 'Um mensageiro químico no cérebro'],
        answer: 'Um mensageiro químico no cérebro'
      },
      {
        question: 'Qual é a menor partícula subatômica?',
        options: ['Próton', 'Nêutron', 'Elétron', 'Quark', 'Bóson de Higgs'],
        answer: 'Quark'
      },
      {
        question: 'O que é a teoria do caos?',
        options: ['Um ramo da matemática', 'Um modelo climático', 'Uma teoria da conspiração', 'Uma teoria sobre a complexidade de sistemas dinâmicos', 'Um método de previsão do tempo'],
        answer: 'Uma teoria sobre a complexidade de sistemas dinâmicos'
      },
      {
        question: 'Quem é conhecido como o pai da química moderna?',
        options: ['Antoine Lavoisier', 'John Dalton', 'Dmitri Mendeleev', 'Marie Curie', 'Linus Pauling'],
        answer: 'Antoine Lavoisier'
      },
      {
        question: 'Qual é a função do sistema nervoso autônomo?',
        options: ['Controle voluntário dos músculos', 'Controle dos movimentos corporais', 'Regulação das funções internas sem controle consciente', 'Processamento de informações sensoriais', 'Coordenação dos sentidos'],
        answer: 'Regulação das funções internas sem controle consciente'
      },
      {
        question: 'O que é a teoria da seleção natural?',
        options: ['A explicação da origem do universo', 'Um modelo para a formação de galáxias espirais', 'Uma teoria sobre a evolução das espécies', 'A explicação do movimento dos planetas', 'Um método de prevenção de doenças'],
        answer: 'Uma teoria sobre a evolução das espécies'
      },
      {
        question: 'Quem foi o primeiro a formular a tabela periódica dos elementos?',
        options: ['Dmitri Mendeleev', 'Antoine Lavoisier', 'John Dalton', 'Marie Curie', 'Niels Bohr'],
        answer: 'Dmitri Mendeleev'
      },
      {
        question: 'O que é a energia potencial?',
        options: ['A energia associada ao movimento', 'A energia armazenada devido à posição de um objeto', 'A energia proveniente de fontes renováveis', 'A energia térmica liberada durante uma reação química', 'A energia total de um sistema isolado'],
        answer: 'A energia armazenada devido à posição de um objeto'
      },
      {
        question: 'Qual é a principal função das mitocôndrias nas células?',
        options: ['Produção de energia', 'Armazenamento de nutrientes', 'Síntese de proteínas', 'Processamento de resíduos', 'Transporte de íons'],
        answer: 'Produção de energia'
      },
      {
        question: 'O que é um quark?',
        options: ['Uma partícula subatômica', 'Uma onda sonora', 'Uma unidade de medida de energia térmica', 'Uma partícula de luz', 'Uma partícula de antimatéria'],
        answer: 'Uma partícula subatômica'
      },
      {
        question: 'Qual é o ácido encontrado no estômago humano?',
        options: ['Ácido cítrico', 'Ácido acético', 'Ácido clorídrico', 'Ácido fórmico', 'Ácido sulfúrico'],
        answer: 'Ácido clorídrico'
      },
      {
        question: 'O que é a teoria do caos?',
        options: ['Um ramo da matemática', 'Um modelo climático', 'Uma teoria da conspiração', 'Uma teoria sobre a complexidade de sistemas dinâmicos', 'Um método de previsão do tempo'],
        answer: 'Uma teoria sobre a complexidade de sistemas dinâmicos'
      },
      {
        question: 'Qual é o processo pelo qual as plantas produzem oxigênio?',
        options: ['Fotossíntese', 'Respiração', 'Transpiração', 'Decomposição', 'Germinação'],
        answer: 'Fotossíntese'
      },
      {
        question: 'O que é a teoria das cordas?',
        options: ['Uma teoria sobre a origem do universo', 'Um modelo para a formação de galáxias espirais', 'Uma teoria sobre a complexidade de sistemas dinâmicos', 'Uma teoria da conspiração', 'Uma teoria unificada que descreve as partículas fundamentais'],
        answer: 'Uma teoria unificada que descreve as partículas fundamentais'
      },
      {
        question: 'O que é um quasar?',
        options: ['Um tipo de galáxia', 'Uma estrela em colapso', 'Um buraco negro', 'Uma fonte de energia subatômica', 'Um objeto astronômico extremamente luminoso'],
        answer: 'Um objeto astronômico extremamente luminoso'
      },
      {
        question: 'Quem desenvolveu a teoria das cordas?',
        options: ['Richard Feynman', 'Stephen Hawking', 'Brian Greene', 'Michio Kaku', 'Edward Witten'],
        answer: 'Edward Witten'
      },
    {
      question: 'O que é a teoria do Big Bang?',
      options: ['Uma teoria sobre a formação de buracos negros', 'A explicação da origem do universo', 'Um modelo para a formação de galáxias espirais', 'Uma teoria sobre a evolução das estrelas', 'Uma descrição da expansão contínua do universo'],
      answer: 'A explicação da origem do universo'
    },
    {
      question: 'Qual é o componente mais abundante na atmosfera da Terra?',
      options: ['Nitrogênio', 'Oxigênio', 'Dióxido de carbono', 'Argônio', 'Hidrogênio'],
      answer: 'Nitrogênio'
    },
    {
      question: 'Qual é a unidade básica da hereditariedade?',
      options: ['DNA', 'RNA', 'Proteína', 'Cromossomo', 'Gene'],
      answer: 'Gene'
    },
    {
      question: 'O que é um átomo?',
      options: ['A menor partícula de uma substância', 'Uma célula humana', 'Um composto químico', 'Um tipo de molécula', 'A menor unidade de um elemento químico'],
      answer: 'A menor unidade de um elemento químico'
    },
    {
      question: 'Quem foi o inventor da teoria heliocêntrica?',
      options: ['Galileu Galilei', 'Isaac Newton', 'Johannes Kepler', 'Aristóteles', 'Nicolau Copérnico'],
      answer: 'Nicolau Copérnico'
    },
    {
      question: 'O que é um isótopo?',
      options: ['Átomo com o mesmo número de prótons, mas diferente número de nêutrons', 'Molécula com carga elétrica', 'Elemento químico com alta reatividade', 'Partícula subatômica', 'Composto químico estável'],
      answer: 'Átomo com o mesmo número de prótons, mas diferente número de nêutrons'
    },
    {
      question: 'Quem foi a primeira mulher a ganhar um Prêmio Nobel?',
      options: ['Marie Curie', 'Rosalind Franklin', 'Dorothy Crowfoot Hodgkin', 'Barbara McClintock', 'Gerty Cori'],
      answer: 'Marie Curie'
    },
    {
      question: 'O que é a teoria do caos?',
      options: ['Teoria matemática que descreve padrões imprevisíveis', 'Teoria da evolução das espécies', 'Teoria do Big Bang', 'Teoria das cordas', 'Teoria da relatividade'],
      answer: 'Teoria matemática que descreve padrões imprevisíveis'
    },
    {
      question: 'O que é a Lei de Ohm?',
      options: ['Relação entre a corrente elétrica, a tensão e a resistência em um circuito elétrico', 'Lei da gravidade', 'Lei da inércia', 'Lei da termodinâmica', 'Princípio de Arquimedes'],
      answer: 'Relação entre a corrente elétrica, a tensão e a resistência em um circuito elétrico'
    },
    {
      question: 'Qual é a função do sistema nervoso central?',
      options: ['Controle voluntário dos movimentos', 'Regulação da temperatura corporal', 'Transporte de oxigênio no sangue', 'Controle das funções cognitivas', 'Coordenação das atividades do corpo'],
      answer: 'Coordenação das atividades do corpo'
    },
    {
      question: 'O que é a Teoria da Relatividade?',
      options: ['Teoria proposta por Albert Einstein', 'Teoria do caos', 'Teoria do Big Bang', 'Teoria heliocêntrica', 'Teoria da evolução'],
      answer: 'Teoria proposta por Albert Einstein'
    },
    {
      question: 'O que é a luz?',
      options: ['Partícula subatômica', 'Onda eletromagnética', 'Radiação alfa', 'Campo gravitacional', 'Corrente elétrica'],
      answer: 'Onda eletromagnética'
    },
    {
      question: 'Qual é o componente mais abundante na crosta terrestre?',
      options: ['Oxigênio', 'Silício', 'Alumínio', 'Ferro', 'Cálcio'],
      answer: 'Oxigênio'
    },
    {
      question: 'O que é um exoplaneta?',
      options: ['Planeta localizado fora do sistema solar', 'Planeta anão', 'Planeta com anéis', 'Planeta gasoso', 'Planeta com atmosfera tóxica'],
      answer: 'Planeta localizado fora do sistema solar'
    },
    {
      question: 'Qual é o nome da molécula que armazena energia nas células?',
      options: ['Adenosina trifosfato (ATP)', 'Ácido desoxirribonucleico (DNA)', 'Ribonucleico ácido (RNA)', 'Glicose', 'Proteína'],
      answer: 'Adenosina trifosfato (ATP)'
    },
    {
      question: 'O que é um acelerador de partículas?',
      options: ['Dispositivo que aumenta a velocidade das partículas subatômicas', 'Instrumento óptico para observação de estrelas', 'Equipamento para medir a pressão atmosférica', 'Máquina de geração de energia elétrica', 'Dispositivo de comunicação sem fio'],
      answer: 'Dispositivo que aumenta a velocidade das partículas subatômicas'
    },
    {
      question: 'Qual é a função do sistema endócrino?',
      options: ['Regulação do sistema imunológico', 'Controle voluntário dos movimentos', 'Produção de hormônios', 'Transporte de oxigênio no sangue', 'Digestão de alimentos'],
      answer: 'Produção de hormônios'
    },
    {
      question: 'O que é a teoria das ondas?',
      options: ['Teoria que descreve o comportamento de partículas subatômicas', 'Teoria que descreve o movimento de corpos celestes', 'Teoria que explica a propagação de ondas sonoras e luminosas', 'Teoria da relatividade', 'Teoria do caos'],
      answer: 'Teoria que explica a propagação de ondas sonoras e luminosas'
    },
    {
      question: 'Qual é a fórmula química da água?',
      options: ['H2O', 'CO2', 'O2', 'N2', 'CH4'],
      answer: 'H2O'
    },
    {
      question: 'O que é um ecossistema aquático?',
      options: ['Sistema formado por organismos vivos', 'Cadeia alimentar em um deserto', 'Área de influência de um fator ambiental específico', 'Comunidade de plantas', 'Sistema formado por organismos aquáticos e seu ambiente'],
      answer: 'Sistema formado por organismos aquáticos e seu ambiente'
    },
    {
      question: 'Qual é o maior planeta do sistema solar?',
      options: ['Júpiter', 'Saturno', 'Urano', 'Netuno', 'Terra'],
      answer: 'Júpiter'
    },
    {
      question: 'O que é um buraco de minhoca?',
      options: ['Túnel no solo feito por minhocas', 'Abertura no solo causada por atividade vulcânica', 'Anomalia gravitacional no espaço-tempo', 'Condição climática extrema', 'Caverna subterrânea'],
      answer: 'Anomalia gravitacional no espaço-tempo'
    },
    {
      question: 'Qual é o nome do processo pelo qual os organismos produzem sua própria comida usando luz solar?',
      options: ['Fotossíntese', 'Quimiossíntese', 'Respiração celular', 'Digestão', 'Metabolismo'],
      answer: 'Fotossíntese'
    },
    {
      question: 'O que é um eclipse solar?',
      options: ['Bloqueio da luz da lua pela Terra', 'Bloqueio da luz do sol pela lua', 'Alinhamento da Terra, lua e sol', 'Movimento orbital da lua', 'Fase lunar'],
      answer: 'Bloqueio da luz do sol pela lua'
    },
    {
      question: 'O que é a radioatividade?',
      options: ['Emissão de partículas subatômicas de um núcleo instável', 'Transferência de calor por radiação', 'Propagação de ondas de rádio', 'Processo de resfriamento de um material', 'Produção de luz por um objeto aquecido'],
      answer: 'Emissão de partículas subatômicas de um núcleo instável'
    },
    {
      question: 'Qual é a velocidade da luz no vácuo?',
      options: ['299.792.458 metros por segundo', '150.000.000 metros por segundo', '50.000.000 metros por segundo', '100.000.000 metros por segundo', '200.000.000 metros por segundo'],
      answer: '299.792.458 metros por segundo'
    },
    {
      question: 'O que é a lei da conservação da energia?',
      options: ['A energia total de um sistema isolado permanece constante ao longo do tempo', 'A energia é destruída em processos naturais', 'A energia pode ser criada a partir do nada', 'A energia total de um sistema aumenta continuamente', 'A energia total de um sistema diminui continuamente'],
      answer: 'A energia total de um sistema isolado permanece constante ao longo do tempo'
    },
    {
      question: 'O que é um buraco negro?',
      options: ['Um tipo de estrela em colapso', 'Um fenômeno meteorológico', 'Uma região do espaço-tempo com gravidade extrema', 'Uma galáxia sem estrelas', 'Uma anomalia quântica'],
      answer: 'Uma região do espaço-tempo com gravidade extrema'
    },
    {
      question: 'Quem desenvolveu a teoria da relatividade?',
      options: ['Isaac Newton', 'Galileu Galilei', 'Albert Einstein', 'Nikola Tesla', 'Marie Curie'],
      answer: 'Albert Einstein'
    },
    // Adicione mais perguntas de Ciência conforme necessário
  ],
  esportes: [
    {
      question: 'Qual é o esporte que utiliza uma rede e uma bola amarela?',
      options: ['Futebol', 'Tênis', 'Vôlei', 'Golfe', 'Basquete'],
      answer: 'Tênis'
    },
    {
      question: 'Quantos jogadores compõem uma equipe de futebol durante uma partida?',
      options: ['9', '11', '7', '10', '8'],
      answer: '11'
    },
    // Adicione mais perguntas sobre esportes
  ],

  comida: [
    {
      question: 'Qual é o prato típico da culinária italiana que leva massa e molho de tomate?',
      options: ['Sushi', 'Pizza', 'Hambúrguer', 'Lasanha', 'Ramen'],
      answer: 'Pizza'
    },
    {
      question: 'Qual é o prato típico italiano que consiste em massa fina e achatada, geralmente servida com molho de tomate e queijo?',
      options: ['Lasanha', 'Ravioli', 'Fettuccine Alfredo', 'Spaghetti', 'Pizza'],
      answer: 'Pizza'
    },
    {
      question: 'Qual é o nome do prato mexicano que consiste em uma tortilha recheada com carne, feijão, queijo e outros ingredientes?',
      options: ['Taco', 'Burrito', 'Enchilada', 'Quesadilla', 'Nachos'],
      answer: 'Taco'
    },
    {
      question: 'Qual é a bebida japonesa tradicional feita de arroz fermentado?',
      options: ['Sake', 'Soju', 'Tequila', 'Makgeolli', 'Umeshu'],
      answer: 'Sake'
    },
    {
      question: 'Qual é o nome do prato típico brasileiro preparado com feijão preto, carne de porco e linguiça?',
      options: ['Churrasco', 'Feijoada', 'Coxinha', 'Acarajé', 'Moqueca'],
      answer: 'Feijoada'
    },
    {
      question: 'Qual é o prato tradicional indiano feito de carne marinada em iogurte e especiarias, assada em forno tandoor?',
      options: ['Tandoori Chicken', 'Paneer Tikka', 'Butter Chicken', 'Biryani', 'Samosa'],
      answer: 'Tandoori Chicken'
    },
    {
      question: 'Qual é a sobremesa francesa que consiste em massa folhada em camadas, intercalada com creme?',
      options: ['Mille-feuille', 'Croissant', 'Éclair', 'Macaron', 'Tarte Tatin'],
      answer: 'Mille-feuille'
    },
    {
      question: 'Qual é o prato japonês composto por pedaços de peixe cru sobre arroz?',
      options: ['Tempura', 'Sushi', 'Sashimi', 'Ramen', 'Udon'],
      answer: 'Sashimi'
    },
    {
      question: 'Qual é o nome da sopa fria espanhola à base de tomates, pimentões e pepinos?',
      options: ['Gazpacho', 'Paella', 'Tortilla Espanhola', 'Churros', 'Pulpo a la Gallega'],
      answer: 'Gazpacho'
    },
    {
      question: 'Qual é o nome da massa italiana em forma de pequenas bolinhas, frequentemente usada em sopas?',
      options: ['Fusilli', 'Farfalle', 'Gnocchi', 'Orzo', 'Penne'],
      answer: 'Orzo'
    },
    {
      question: 'Qual é o prato nacional da Tailândia, composto por arroz frito com legumes, ovos e carne?',
      options: ['Pad Thai', 'Tom Yum', 'Green Curry', 'Som Tum', 'Massaman Curry'],
      answer: 'Pad Thai'
    },
    {
      question: 'Qual é o nome do queijo francês conhecido por sua textura macia e casca aveludada?',
      options: ['Gruyère', 'Camembert', 'Roquefort', 'Brie', 'Emmental'],
      answer: 'Camembert'
    },
    {
      question: 'Qual é o nome do prato de carne brasileiro, preparado em uma churrasqueira?',
      options: ['Feijoada', 'Coxinha', 'Picanha', 'Acém', 'Carne-seca'],
      answer: 'Picanha'
    },
    {
      question: 'Qual é o prato espanhol que consiste em arroz misturado com frutos do mar, carne, legumes e açafrão?',
      options: ['Gazpacho', 'Churros', 'Tortilla Espanhola', 'Paella', 'Tapas'],
      answer: 'Paella'
    },
    {
      question: 'Qual é o nome do prato tailandês de sopa picante de camarão?',
      options: ['Pad Thai', 'Tom Kha Gai', 'Som Tum', 'Tom Yum', 'Green Curry'],
      answer: 'Tom Yum'
    },
    {
      question: 'Qual é a sobremesa italiana que consiste em café expresso sobre uma bola de sorvete?',
      options: ['Tiramisù', 'Panna Cotta', 'Gelato', 'Affogato', 'Cannoli'],
      answer: 'Affogato'
    },
    {
      question: 'Qual é o nome do prato português de bacalhau desfiado com batatas?',
      options: ['Pastel de Nata', 'Bacalhau à Brás', 'Caldo Verde', 'Francesinha', 'Arroz de Pato'],
      answer: 'Bacalhau à Brás'
    },
    {
      question: 'Qual é o prato tradicional mexicano feito de massa de milho recheada com carne, feijão, queijo e pimenta?',
      options: ['Burrito', 'Taco', 'Quesadilla', 'Nachos', 'Enchilada'],
      answer: 'Burrito'
    },
    {
      question: 'Qual é o nome do prato peruano de peixe cru marinado em suco de limão ou limão?',
      options: ['Ceviche', 'Lomo Saltado', 'Aji de Gallina', 'Anticuchos', 'Papa a la Huancaina'],
      answer: 'Ceviche'
    },
    {
      question: 'Qual é a comida italiana que consiste em carne crua ou curada, geralmente servida com rúcula e lascas de parmesão?',
      options: ['Pizza', 'Pasta Carbonara', 'Tiramisù', 'Prosciutto', 'Carpaccio'],
      answer: 'Carpaccio'
    },
    {
      question: 'Qual é o nome do prato mexicano que consiste em tortillas enroladas em torno de carne, feijão e queijo?',
      options: ['Taco', 'Burrito', 'Enchilada', 'Quesadilla', 'Nachos'],
      answer: 'Enchilada'
    },
    {
      question: 'Qual é o prato de arroz frito chinês tradicionalmente misturado com vegetais, ovos e carne?',
      options: ['Chow Mein', 'Fried Rice', 'Dim Sum', 'Peking Duck', 'Hot Pot'],
      answer: 'Fried Rice'
    },
    {
      question: 'Qual é o nome do sanduíche típico de Nova York, composto por carne defumada, mostarda e picles em pão de centeio?',
      options: ['Club Sandwich', 'Philly Cheesesteak', 'Reuben', 'BLT', 'Cubano'],
      answer: 'Reuben'
    },
    {
      question: 'Qual é o prato italiano de massa em forma de pequenas esferas, muitas vezes servido em sopa?',
      options: ['Gnocchi', 'Pappardelle', 'Ravioli', 'Tortellini', 'Farfalle'],
      answer: 'Tortellini'
    },
    {
      question: 'Qual é o nome do prato francês que consiste em carne bovina cozida lentamente em vinho tinto?',
      options: ['Coq au Vin', 'Boeuf Bourguignon', 'Escargot', 'Ratatouille', 'Quiche Lorraine'],
      answer: 'Boeuf Bourguignon'
    },
    {
      question: 'Qual é o prato tailandês de curry picante feito com leite de coco, frango e vegetais?',
      options: ['Pad Thai', 'Tom Yum', 'Som Tum', 'Massaman Curry', 'Green Curry'],
      answer: 'Massaman Curry'
    },
    {
      question: 'Qual é o prato nigeriano feito de peixe, arroz e uma mistura de vegetais cozidos em folhas de bananeira?',
      options: ['Bobotie', 'Jollof Rice', 'Bunny Chow', 'Fufu', 'Moin Moin'],
      answer: 'Jollof Rice'
    },
    {
      question: 'Qual é o prato etíope que consiste em carne cozida lentamente em molho picante, servido com injera?',
      options: ['Chakalaka', 'Doro Wat', 'Bobotie', 'Piri Piri Chicken', 'Braai'],
      answer: 'Doro Wat'
    },
    {
      question: 'Qual é o prato marroquino que consiste em carne cozida lentamente com frutas secas e especiarias?',
      options: ['Tagine', 'Couscous', 'Shawarma', 'Harira', 'Briouat'],
      answer: 'Tagine'
    },
    {
      question: 'Qual é o prato senegalês feito de arroz, peixe, vegetais e amendoim?',
      options: ['Samosa', 'Ndolé', 'Yassa', 'Thieboudienne', 'Braai'],
      answer: 'Thieboudienne'
    },
    {
      question: 'Qual é o prato sul-africano que consiste em carne grelhada, frequentemente servida em um pão?',
      options: ['Boerewors', 'Biltong', 'Bobotie', 'Bunny Chow', 'Koeksisters'],
      answer: 'Bunny Chow'
    },
    {
      question: 'Qual é a bebida tradicional da Etiópia, feita a partir da fermentação de cereais?',
      options: ['Palm Wine', 'Tej', 'Rooibos Tea', 'Hibiscus Punch', 'Amarula'],
      answer: 'Tej'
    },
    {
      question: 'Qual é o prato nigeriano que consiste em uma mistura de feijão, pimenta e outros ingredientes?',
      options: ['Jollof Rice', 'Efo Riro', 'Moin Moin', 'Fufu', 'Pounded Yam'],
      answer: 'Moin Moin'
    },
    {
      question: 'Qual é o prato argelino de carne grelhada, frequentemente servido com cebolas e pimentões?',
      options: ['Shawarma', 'Chermoula', 'Couscous', 'Brik', 'Chakchouka'],
      answer: 'Chakchouka'
    },
    {
      question: 'Qual é o prato ganês de massa frita coberta com uma mistura de legumes e carne ou peixe?',
      options: ['Fufu', 'Banku', 'Kelewele', 'Chinchinga', 'Red Red'],
      answer: 'Kelewele'
    },
    {
      question: 'Qual é o prato sudanês feito de bolinhos de milho cozidos no vapor?',
      options: ['Chapati', 'Injera', 'Ful Medames', 'Kushari', 'Caccabus'],
      answer: 'Kushari'
    },
    {
      question: 'Qual é o prato marroquino de frango cozido com azeitonas, limões em conserva e especiarias?',
      options: ['Tagine', 'Bastilla', 'Harira', 'Couscous', 'Mrouzia'],
      answer: 'Tagine'
    },
    {
      question: 'Qual é o prato sul-africano de carne moída temperada, geralmente assado no forno?',
      options: ['Biltong', 'Bobotie', 'Droëwors', 'Koeksisters', 'Malva Pudding'],
      answer: 'Bobotie'
    },
    {
      question: 'Qual é o prato nigeriano de arroz temperado com especiarias e vegetais?',
      options: ['Jollof Rice', 'Fufu', 'Efo Riro', 'Pounded Yam', 'Suya'],
      answer: 'Jollof Rice'
    },
    {
      question: 'Qual é o prato senegalês de arroz, peixe e vegetais cozidos em um molho rico?',
      options: ['Ndolé', 'Thieboudienne', 'Yassa', 'Ceebu Jen', 'Domoda'],
      answer: 'Ceebu Jen'
    },
    {
      question: 'Qual é o prato sudanês de carne cozida com legumes e servido com pão?',
      options: ['Ful Medames', 'Kushari', 'Mulawah', 'Gurasa', 'Bazin'],
      answer: 'Ful Medames'
    },
    {
      question: 'Qual é o prato nigeriano de legumes cozidos em um molho de folhas de mandioca?',
      options: ['Efo Riro', 'Suya', 'Pounded Yam', 'Moin Moin', 'Akara'],
      answer: 'Efo Riro'
    },
    {
      question: 'Qual é o prato tunisiano de sopa de tomate e pimenta?',
      options: ['Lablabi', 'Shorba', 'Brik', 'Kafteji', 'Tunisian Couscous'],
      answer: 'Shorba'
    },
    {
      question: 'Qual é o prato nigeriano de carne grelhada, geralmente servido em espetos?',
      options: ['Suya', 'Fufu', 'Jollof Rice', 'Pounded Yam', 'Efo Riro'],
      answer: 'Suya'
    },
    {
      question: 'Qual é o prato malgaxe feito de arroz cozido com carne, legumes e ovos?',
      options: ['Romazava', 'Koba', 'Ravitoto', 'Mofo', 'Akoho sy Voanio'],
      answer: 'Romazava'
    },
    {
      question: 'Qual é o prato angolano de peixe cozido em um molho espesso de óleo de palma, pimenta e outros ingredientes?',
      options: ['Mukimo', 'Calulu', 'Moamba de Galinha', 'Matapa', 'Bacalhau à Brás'],
      answer: 'Calulu'
    },
    {
      question: 'Qual é o prato ganês de feijão-preto cozido com bananas e pimentas?',
      options: ['Red Red', 'Kelewele', 'Banku', 'Jollof Rice', 'Fufu'],
      answer: 'Red Red'
    },
    {
      question: 'Qual é o prato sudanês de carne cozida com legumes e servido com bolinhos de milho?',
      options: ['Bazin', 'Mulawah', 'Ful Medames', 'Kushari', 'Gurasa'],
      answer: 'Gurasa'
    },
    {
      question: 'Qual é o prato malgaxe de carne de porco frita com gengibre e alho?',
      options: ['Romazava', 'Koba', 'Ravitoto', 'Mofo', 'Akoho sy Voanio'],
      answer: 'Mofo'
    },
    {
      question: 'Qual é o prato nigeriano de carne ou peixe grelhado com especiarias e molho de amendoim?',
      options: ['Suya', 'Jollof Rice', 'Efo Riro', 'Moin Moin', 'Pounded Yam'],
      answer: 'Suya'
    },
    {
      question: 'Qual é o esporte que é conhecido como "o esporte bretão"?',
      options: ['Críquete', 'Hóquei', 'Rugby', 'Futebol', 'Curling'],
      answer: 'Futebol'
    },
    {
      question: 'Em que país originou-se o tênis de mesa?',
      options: ['China', 'Japão', 'Suécia', 'Inglaterra', 'Estados Unidos'],
      answer: 'China'
    },
    {
      question: 'Quantos jogadores compõem uma equipe de polo aquático em uma piscina?',
      options: ['5', '6', '7', '8', '9'],
      answer: '7'
    },
    {
      question: 'Qual é o recorde mundial dos 100 metros rasos no atletismo masculino?',
      options: ['9.58 segundos', '9.63 segundos', '9.69 segundos', '9.72 segundos', '9.81 segundos'],
      answer: '9.58 segundos'
    },
    {
      question: 'Qual é o esporte que tem as posições "libero" e "ponteiro"?',
      options: ['Vôlei', 'Handebol', 'Basquete', 'Futebol Americano', 'Badminton'],
      answer: 'Vôlei'
    },
    {
      question: 'Quantos buracos existem em um campo de golfe padrão?',
      options: ['15', '16', '17', '18', '19'],
      answer: '18'
    },
    {
      question: 'Qual esporte é conhecido como "esporte das raquetes"?',
      options: ['Badminton', 'Tênis', 'Squash', 'Pickleball', 'Tênis de Mesa'],
      answer: 'Tênis'
    },
    {
      question: 'Qual é o esporte que tem uma competição chamada "Grand Slam"?',
      options: ['Golfe', 'Tênis', 'Críquete', 'Rugby', 'Atletismo'],
      answer: 'Tênis'
    },
    {
      question: 'Em que país foi originado o esporte do judô?',
      options: ['Japão', 'China', 'Coreia do Sul', 'Brasil', 'Rússia'],
      answer: 'Japão'
    },
    {
      question: 'Qual é o nome do troféu concedido ao vencedor do torneio de tênis de Wimbledon?',
      options: ['Taça Davis', 'Taça Federação', 'Troféu Roland Garros', 'Taça Hopman', 'Taça de Ouro'],
      answer: 'Taça de Ouro'
    },
    {
      question: 'Em que país ocorreu o primeiro torneio de golfe Masters?',
      options: ['Estados Unidos', 'Reino Unido', 'Austrália', 'Canadá', 'África do Sul'],
      answer: 'Estados Unidos'
    },
    {
      question: 'Quantos jogadores compõem uma equipe de futebol durante uma partida?',
      options: ['8', '10', '11', '12', '9'],
      answer: '11'
    },
    {
      question: 'Qual é o esporte que tem uma área chamada "pista de gelo"?',
      options: ['Hóquei', 'Curling', 'Patinação Artística', 'Esqui', 'Bobsleigh'],
      answer: 'Curling'
    },
    {
      question: 'Qual é o nome do estádio de futebol mais famoso em Barcelona, Espanha?',
      options: ['Estádio da Luz', 'Old Trafford', 'Allianz Arena', 'Camp Nou', 'Anfield'],
      answer: 'Camp Nou'
    },
    {
      question: 'Quantos jogadores compõem uma equipe de basquete em uma quadra durante o jogo?',
      options: ['4', '5', '6', '7', '8'],
      answer: '5'
    },
    {
      question: 'Em que esporte os jogadores competem para ganhar a "Camisa Amarela"?',
      options: ['Ciclismo', 'Atletismo', 'Natação', 'Esqui', 'Surfe'],
      answer: 'Ciclismo'
    },
    {
      question: 'Qual é o nome do torneio de tênis que ocorre em Nova York e é o quarto Grand Slam do ano?',
      options: ['Wimbledon', 'Open da Austrália', 'Roland Garros', 'US Open', 'Copa Davis'],
      answer: 'US Open'
    },
    {
      question: 'Qual é o nome do time de futebol mais popular e bem-sucedido da Espanha?',
      options: ['Real Madrid', 'Barcelona', 'Atlético de Madrid', 'Valencia', 'Sevilla'],
      answer: 'Real Madrid'
    },
    {
      question: 'Em que esporte um "hat-trick" se refere a um jogador marcar três gols em uma única partida?',
      options: ['Futebol', 'Críquete', 'Rugby', 'Hóquei', 'Tênis'],
      answer: 'Futebol'
    },
    {
      question: 'Qual é o nome do troféu concedido ao vencedor do torneio de tênis de Roland Garros?',
      options: ['Taça Davis', 'Taça de Ouro', 'Troféu Roland Garros', 'Taça Hopman', 'Taça Federação'],
      answer: 'Troféu Roland Garros'
    },
    {
      question: 'Quantos minutos dura cada tempo em uma partida de futebol?',
      options: ['30 minutos', '35 minutos', '40 minutos', '45 minutos', '50 minutos'],
      answer: '45 minutos'
    },
    {
      question: 'Em que país originou-se o esporte do críquete?',
      options: ['Inglaterra', 'Índia', 'Austrália', 'África do Sul', 'Paquistão'],
      answer: 'Inglaterra'
    },
    {
      question: 'Qual é o nome da competição internacional de rugby entre equipes do Hemisfério Norte e Sul?',
      options: ['Copa do Mundo de Rugby', 'Six Nations', 'Rugby Championship', 'Tri Nations', 'Super Rugby'],
      answer: 'Six Nations'
    },
    {
      question: 'Qual é o esporte que é conhecido como "o esporte rei"?',
      options: ['Futebol', 'Tênis', 'Golfe', 'Críquete', 'Atletismo'],
      answer: 'Futebol'
    },
    {
      question: 'Qual jogador argentino é conhecido como "La Pulga"?',
      options: ['Lionel Messi', 'Diego Maradona', 'Sergio Agüero', 'Carlos Tevez', 'Ángel Di María'],
      answer: 'Lionel Messi'
    },
    {
      question: 'Qual país ganhou a Copa do Mundo da FIFA de 2018?',
      options: ['Brasil', 'Espanha', 'Alemanha', 'França', 'Itália'],
      answer: 'França'
    },
    {
      question: 'Quantas Copas do Mundo a seleção brasileira de futebol masculino venceu?',
      options: ['3', '4', '5', '6', '7'],
      answer: '5'
    },
    {
      question: 'Quem é o maior artilheiro da história da Copa do Mundo?',
      options: ['Pele', 'Miroslav Klose', 'Diego Maradona', 'Lionel Messi', 'Cristiano Ronaldo'],
      answer: 'Miroslav Klose'
    },
    {
      question: 'Qual país sediará a Copa do Mundo de 2022?',
      options: ['Brasil', 'Alemanha', 'Catar', 'Espanha', 'Argentina'],
      answer: 'Catar'
    },
    {
      question: 'Quem é conhecido como "O Fenômeno"?',
      options: ['Lionel Messi', 'Diego Maradona', 'Ronaldo Nazário', 'Cristiano Ronaldo', 'Zinedine Zidane'],
      answer: 'Ronaldo Nazário'
    },
    {
      question: 'Qual é o nome do troféu concedido ao vencedor da Liga dos Campeões da UEFA?',
      options: ['Taça Davis', 'Taça de Ouro', 'Troféu Roland Garros', 'Taça Hopman', 'Orelhuda'],
      answer: 'Orelhuda'
    },
    {
      question: 'Qual clube é conhecido como "Red Devils"?',
      options: ['Manchester City', 'Manchester United', 'Liverpool', 'Chelsea', 'Arsenal'],
      answer: 'Manchester United'
    },
    {
      question: 'Qual é o recorde de mais gols marcados em uma única temporada de La Liga?',
      options: ['Lionel Messi', 'Cristiano Ronaldo', 'Neymar', 'Luis Suárez', 'Karim Benzema'],
      answer: 'Lionel Messi'
    },
    {
      question: 'Quem é o treinador da equipe de futebol masculino do Liverpool FC?',
      options: ['Jürgen Klopp', 'Pep Guardiola', 'Zinedine Zidane', 'Thomas Tuchel', 'Carlo Ancelotti'],
      answer: 'Jürgen Klopp'
    },
    {
      question: 'Qual país sediou a primeira Copa do Mundo da FIFA?',
      options: ['Brasil', 'Alemanha', 'Uruguai', 'Argentina', 'Itália'],
      answer: 'Uruguai'
    },
    {
      question: 'Quem é o artilheiro histórico da Liga dos Campeões da UEFA?',
      options: ['Lionel Messi', 'Cristiano Ronaldo', 'Robert Lewandowski', 'Raul', 'Karim Benzema'],
      answer: 'Cristiano Ronaldo'
    },
    {
      question: 'Qual país ganhou a Eurocopa de 2020?',
      options: ['França', 'Espanha', 'Inglaterra', 'Itália', 'Alemanha'],
      answer: 'Itália'
    },
    {
      question: 'Quem é o capitão da seleção de futebol da Argentina?',
      options: ['Lionel Messi', 'Sergio Agüero', 'Paulo Dybala', 'Ángel Di María', 'Javier Mascherano'],
      answer: 'Lionel Messi'
    },
    {
      question: 'Qual é o clube mais vitorioso da Liga dos Campeões da UEFA?',
      options: ['Real Madrid', 'Barcelona', 'Bayern de Munique', 'Milan', 'Liverpool'],
      answer: 'Real Madrid'
    },
    {
      question: 'Quem é conhecido como "CR7"?',
      options: ['Lionel Messi', 'Neymar', 'Cristiano Ronaldo', 'Kylian Mbappé', 'Mohamed Salah'],
      answer: 'Cristiano Ronaldo'
    },
    {
      question: 'Qual jogador é considerado o "Rei Pelé"?',
      options: ['Lionel Messi', 'Cristiano Ronaldo', 'Neymar', 'Diego Maradona', 'Pelé'],
      answer: 'Pelé'
    },
    {
      question: 'Quantos títulos da Liga dos Campeões da UEFA o Barcelona conquistou até agora?',
      options: ['3', '4', '5', '6', '7'],
      answer: '5'
    },
    {
      question: 'Qual país é conhecido por sua celebração de "Samba" no futebol?',
      options: ['Argentina', 'Alemanha', 'Brasil', 'Espanha', 'Itália'],
      answer: 'Brasil'
    },
    {
      question: 'Quem é o artilheiro histórico da seleção brasileira de futebol?',
      options: ['Romário', 'Pelé', 'Ronaldo Nazário', 'Zico', 'Neymar'],
      answer: 'Pelé'
    },
    {
      question: 'Qual é o apelido do estádio do Barcelona FC?',
      options: ['Anfield', 'Camp Nou', 'Old Trafford', 'Santiago Bernabéu', 'Allianz Arena'],
      answer: 'Camp Nou'
    },
    {
      question: 'Qual clube de futebol é conhecido como "Blues"?',
      options: ['Chelsea', 'Manchester United', 'Arsenal', 'Liverpool', 'Manchester City'],
      answer: 'Chelsea'
    },
    {
      question: 'Quem é o técnico da equipe de futebol masculino do Manchester City?',
      options: ['Pep Guardiola', 'Jürgen Klopp', 'Zinedine Zidane', 'Thomas Tuchel', 'Carlo Ancelotti'],
      answer: 'Pep Guardiola'
    },
    {
      question: 'Qual país é conhecido por sua dança de celebração "Haka" no rugby?',
      options: ['Austrália', 'França', 'Nova Zelândia', 'Inglaterra', 'África do Sul'],
      answer: 'Nova Zelândia'
    },
    {
      question: 'Qual é o clube mais vitorioso da Premier League inglesa?',
      options: ['Manchester United', 'Arsenal', 'Liverpool', 'Chelsea', 'Manchester City'],
      answer: 'Manchester United'
    },
    {
      question: 'Quem é o artilheiro histórico da seleção argentina de futebol?',
      options: ['Diego Maradona', 'Lionel Messi', 'Gabriel Batistuta', 'Hernan Crespo', 'Carlos Tevez'],
      answer: 'Lionel Messi'
    },
    {
      question: 'Em que esporte os competidores realizam saltos e manobras em uma prancha na água?',
      options: ['Surfe', 'Esqui Aquático', 'Wakeboard', 'Pólo Aquático', 'Natação'],
      answer: 'Surfe'
    },
    {
      question: 'Qual é o nome do esporte em que os atletas descem uma montanha coberta de neve usando pranchas?',
      options: ['Snowboard', 'Esqui Alpino', 'Biatlo', 'Luge', 'Curling'],
      answer: 'Snowboard'
    },
    {
      question: 'Em que esporte os atletas competem para levantar o máximo de peso possível no levantamento de barra?',
      options: ['Levantamento de Peso', 'Halterofilismo', 'Crossfit', 'Powerlifting', 'Arremesso de Peso'],
      answer: 'Halterofilismo'
    },
    {
      question: 'Qual é o esporte que envolve correr, saltar e arremessar, sendo considerado o esporte mais completo?',
      options: ['Decatlo', 'Heptatlo', 'Triatlo', 'Pentatlo Moderno', 'Atletismo'],
      answer: 'Decatlo'
    },
    {
      question: 'Em que esporte os atletas usam arcos para atirar flechas em alvos?',
      options: ['Tiro com Arco', 'Esgrima', 'Biatlo', 'Pentatlo Moderno', 'Canoagem'],
      answer: 'Tiro com Arco'
    },
    {
      question: 'Qual é o esporte em que os competidores nadam, pedalam e correm em sequência?',
      options: ['Triatlo', 'Duatlo', 'Aquathlon', 'Ironman', 'Ultramaratona'],
      answer: 'Triatlo'
    },
    {
      question: 'Em que esporte os jogadores deslizam pedras em uma pista de gelo em direção a um alvo circular?',
      options: ['Curling', 'Bobsleigh', 'Skeleton', 'Luge', 'Patinagem Artística'],
      answer: 'Curling'
    },
    {
      question: 'Qual é o esporte que envolve corrida em uma pista com obstáculos, incluindo saltos e barreiras?',
      options: ['Atletismo', 'Corrida de Obstáculos', 'Steeplechase', 'Triatlo', 'Canoagem Slalom'],
      answer: 'Atletismo'
    },
    {
      question: 'Em que esporte os jogadores competem para colocar uma bola em um buraco com o menor número de tacadas?',
      options: ['Golfe', 'Mini Golfe', 'Pólo', 'Críquete', 'Beisebol'],
      answer: 'Golfe'
    },
    {
      question: 'Qual é o esporte que combina esqui cross-country e tiro ao alvo?',
      options: ['Biatlo', 'Esqui Saltos', 'Curling', 'Snowboard Cross', 'Esqui Alpino'],
      answer: 'Biatlo'
    },
    {
      question: 'Em que esporte os jogadores tentam acertar um alvo com uma bola, mantendo o controle sobre cavalos em movimento?',
      options: ['Pólo', 'Hipismo', 'Rugby a Cavalo', 'Canoagem Equestre', 'Salto de Obstáculos'],
      answer: 'Pólo'
    },
    {
      question: 'Qual é o esporte em que os jogadores usam uma raquete para acertar uma bola sobre uma rede?',
      options: ['Tênis', 'Badminton', 'Squash', 'Pádel', 'Tênis de Mesa'],
      answer: 'Tênis'
    },
    {
      question: 'Em que esporte os jogadores lançam uma bola em direção a uma cesta suspensa?',
      options: ['Basquete', 'Vôlei', 'Handebol', 'Badminton', 'Rugby'],
      answer: 'Basquete'
    },
    {
      question: 'Qual é o esporte que envolve a realização de acrobacias em trampolins e outros aparelhos?',
      options: ['Ginástica Artística', 'Salto com Vara', 'Trampolim', 'Ginástica Rítmica', 'Ginástica Aeróbica'],
      answer: 'Trampolim'
    },
    {
      question: 'Em que esporte os jogadores deslizam sobre o gelo e lançam pedras em direção a um alvo circular?',
      options: ['Curling', 'Hóquei no Gelo', 'Patinagem Artística', 'Esqui Cross-Country', 'Bobsleigh'],
      answer: 'Curling'
    },
    {
      question: 'Qual é o esporte que envolve corridas de longa distância a pé, geralmente em terrenos acidentados?',
      options: ['Maratona', 'Corrida de Rua', 'Caminhada', 'Ultramaratona', 'Cross Country'],
      answer: 'Cross Country'
    },
    {
      question: 'Em que esporte os competidores correm em uma pista oval no sentido anti-horário?',
      options: ['Atletismo', 'Natação', 'Ciclismo', 'Corrida de Kart', 'Patinagem de Velocidade'],
      answer: 'Ciclismo'
    },
    {
      question: 'Qual é o esporte que envolve a realização de manobras acrobáticas em uma bicicleta?',
      options: ['BMX', 'Mountain Bike', 'Ciclismo de Estrada', 'Ciclismo de Pista', 'Downhill'],
      answer: 'BMX'
    },
    {
      question: 'Em que esporte os jogadores usam paletas para rebater uma bola sobre uma mesa dividida por uma rede?',
      options: ['Tênis de Mesa', 'Ping Pong', 'Badminton', 'Squash', 'Pádel'],
      answer: 'Tênis de Mesa'
    },
    {
      question: 'Qual é o esporte que combina natação, ciclismo e corrida em uma única competição?',
      options: ['Triatlo', 'Pentatlo Moderno', 'Ironman', 'Aquathlon', 'Decatlo'],
      answer: 'Triatlo'
    },
    {
      question: 'Em que esporte os atletas descem uma pista de gelo sinuosa em trenós pequenos?',
      options: ['Luge', 'Bobsleigh', 'Skeleton', 'Curling', 'Esqui Alpino'],
      answer: 'Luge'
    },
    {
      question: 'Qual clube ganhou mais títulos na história da Premier League?',
      options: ['Manchester United', 'Liverpool', 'Arsenal', 'Chelsea', 'Manchester City'],
      answer: 'Manchester United'
    },
    {
      question: 'Quem é o maior artilheiro da história da Premier League?',
      options: ['Alan Shearer', 'Thierry Henry', 'Wayne Rooney', 'Frank Lampard', 'Sergio Agüero'],
      answer: 'Alan Shearer'
    },
    {
      question: 'Quantas vezes o Liverpool venceu a Liga dos Campeões da UEFA?',
      options: ['5', '6', '7', '8', '4'],
      answer: '6'
    },
    {
      question: 'Qual clube italiano é conhecido como "A Velha Senhora"?',
      options: ['AC Milan', 'Inter de Milão', 'Roma', 'Napoli', 'Juventus'],
      answer: 'Juventus'
    },
    {
      question: 'Quem é o maior artilheiro da história da La Liga?',
      options: ['Lionel Messi', 'Cristiano Ronaldo', 'Telmo Zarra', 'Hugo Sánchez', 'Raúl González'],
      answer: 'Lionel Messi'
    },
    {
      question: 'Quantas vezes o Barcelona venceu a Liga dos Campeões da UEFA?',
      options: ['3', '4', '5', '6', '2'],
      answer: '5'
    },
    {
      question: 'Qual clube alemão é conhecido como "Die Roten"?',
      options: ['Borussia Dortmund', 'Bayern de Munique', 'RB Leipzig', 'Bayer Leverkusen', 'Schalke 04'],
      answer: 'Bayern de Munique'
    },
    {
      question: 'Quem é o maior artilheiro da história da Bundesliga?',
      options: ['Robert Lewandowski', 'Gerd Müller', 'Klaus Fischer', 'Jupp Heynckes', 'Miroslav Klose'],
      answer: 'Gerd Müller'
    },
    {
      question: 'Quantas vezes a Juventus venceu a Serie A italiana de forma consecutiva entre 2011 e 2020?',
      options: ['8', '9', '10', '11', '7'],
      answer: '9'
    },
    {
      question: 'Qual clube francês é conhecido como "Les Parisiens"?',
      options: ['Lyon', 'Marseille', 'Monaco', 'Nice', 'Paris Saint-Germain'],
      answer: 'Paris Saint-Germain'
    },
    {
      question: 'Quem é o maior artilheiro da história da Ligue 1?',
      options: ['Edinson Cavani', 'Radamel Falcao', 'Zlatan Ibrahimović', 'Pauleta', 'Thierry Henry'],
      answer: 'Edinson Cavani'
    },
    {
      question: 'Quantas vezes o Real Madrid venceu a Liga dos Campeões da UEFA?',
      options: ['13', '14', '15', '16', '12'],
      answer: '13'
    },
    {
      question: 'Qual jogador detém o recorde de mais gols marcados em uma única temporada da Premier League?',
      options: ['Alan Shearer', 'Thierry Henry', 'Andy Cole', 'Luis Suárez', 'Harry Kane'],
      answer: 'Andy Cole'
    },
    {
      question: 'Quantas vezes o Bayern de Munique venceu a Liga dos Campeões da UEFA?',
      options: ['6', '7', '8', '9', '5'],
      answer: '6'
    },
    {
      question: 'Qual clube inglês é conhecido como "The Blues"?',
      options: ['Arsenal', 'Manchester City', 'Chelsea', 'Tottenham Hotspur', 'Liverpool'],
      answer: 'Chelsea'
    },
    {
      question: 'Quem é o único jogador a ter vencido a Bola de Ouro enquanto jogava na Ligue 1?',
      options: ['Lionel Messi', 'Cristiano Ronaldo', 'Neymar', 'Kylian Mbappé', 'George Weah'],
      answer: 'George Weah'
    },
    {
      question: 'Quantas vezes a Inter de Milão venceu a Serie A italiana?',
      options: ['16', '17', '18', '19', '15'],
      answer: '19'
    },
    {
      question: 'Qual clube espanhol é conhecido como "Los Blancos"?',
      options: ['Atlético de Madrid', 'Barcelona', 'Real Betis', 'Real Sociedad', 'Real Madrid'],
      answer: 'Real Madrid'
    },
    {
      question: 'Quem é o maior artilheiro da história da Serie A italiana?',
      options: ['Alessandro Del Piero', 'Giuseppe Meazza', 'Silvio Piola', 'Francesco Totti', 'Gonzalo Higuaín'],
      answer: 'Silvio Piola'
    },
    {
      question: 'Quantas vezes o Barcelona venceu a La Liga espanhola de forma consecutiva entre 2008 e 2011?',
      options: ['2', '3', '4', '5', '1'],
      answer: '3'
    },
    {
      question: 'Qual clube alemão é conhecido como "Die Borussen"?',
      options: ['Borussia Mönchengladbach', 'Borussia Dortmund', 'Bayer Leverkusen', 'Schalke 04', 'RB Leipzig'],
      answer: 'Borussia Dortmund'
    },
    {
      question: 'Quem é o único jogador a ter vencido a Bola de Ouro enquanto jogava na Bundesliga?',
      options: ['Franz Beckenbauer', 'Gerd Müller', 'Karl-Heinz Rummenigge', 'Lothar Matthäus', 'Robert Lewandowski'],
      answer: 'Franz Beckenbauer'
    },
    {
      question: 'Quantas vezes o Paris Saint-Germain venceu a Ligue 1 francesa de forma consecutiva entre 2013 e 2020?',
      options: ['6', '7', '8', '9', '5'],
      answer: '7'
    },
    {
      question: 'Qual clube italiano é conhecido como "I Rossoneri"?',
      options: ['Roma', 'Inter de Milão', 'Juventus', 'Napoli', 'AC Milan'],
      answer: 'AC Milan'
    },
    {
      question: 'Quem é o maior artilheiro da história da La Liga espanhola?',
      options: ['Lionel Messi', 'Cristiano Ronaldo', 'Telmo Zarra', 'Hugo Sánchez', 'Raúl González'],
      answer: 'Lionel Messi'
    },
    {
      question: 'Quantas vezes o Manchester City venceu a Premier League?',
      options: ['3', '4', '5', '6', '2'],
      answer: '5'
    },
    {
      question: 'Qual clube francês é conhecido como "Les Gones"?',
      options: ['Marseille', 'Bordeaux', 'Nice', 'Saint-Étienne', 'Lyon'],
      answer: 'Lyon'
    },
    {
      question: 'Quem é o maior artilheiro da história do Bayern de Munique?',
      options: ['Robert Lewandowski', 'Gerd Müller', 'Karl-Heinz Rummenigge', 'Lothar Matthäus', 'Thomas Müller'],
      answer: 'Gerd Müller'
    },
    {
      question: 'Quantas vezes a Juventus venceu a Serie A italiana de forma consecutiva entre 2012 e 2021?',
      options: ['8', '9', '10', '11', '7'],
      answer: '9'
    },
    {
      question: 'Qual clube espanhol é conhecido como "Colchoneros"?',
      options: ['Real Madrid', 'Barcelona', 'Sevilla', 'Valencia', 'Atlético de Madrid'],
      answer: 'Atlético de Madrid'
    },
    {
      question: 'Quem é o maior artilheiro da história da Bundesliga?',
      options: ['Robert Lewandowski', 'Gerd Müller', 'Klaus Fischer', 'Jupp Heynckes', 'Miroslav Klose'],
      answer: 'Gerd Müller'
    },
    {
      question: 'Quantas vezes o Paris Saint-Germain venceu a Ligue 1 francesa de forma consecutiva entre 2012 e 2021?',
      options: ['7', '8', '9', '10', '6'],
      answer: '7'
    },
    {
      question: 'Qual clube italiano é conhecido como "Il Nerazzurri"?',
      options: ['AC Milan', 'Juventus', 'Roma', 'Lazio', 'Inter de Milão'],
      answer: 'Inter de Milão'
    },
    {
      question: 'Quem é o maior artilheiro da história da La Liga?',
      options: ['Lionel Messi', 'Cristiano Ronaldo', 'Telmo Zarra', 'Hugo Sánchez', 'Raúl González'],
      answer: 'Lionel Messi'
    },
    {
      question: 'Quantas vezes o Barcelona venceu a Liga dos Campeões da UEFA?',
      options: ['5', '6', '7', '8', '4'],
      answer: '5'
    },
    {
      question: 'Qual clube alemão é conhecido como "Die Roten"?',
      options: ['Borussia Dortmund', 'Bayern de Munique', 'RB Leipzig', 'Bayer Leverkusen', 'Schalke 04'],
      answer: 'Bayern de Munique'
    },
    {
      question: 'Quem é o maior artilheiro da história da Bundesliga?',
      options: ['Robert Lewandowski', 'Gerd Müller', 'Klaus Fischer', 'Jupp Heynckes', 'Miroslav Klose'],
      answer: 'Gerd Müller'
    },
    {
      question: 'Quantas vezes a Juventus venceu a Serie A italiana de forma consecutiva entre 2011 e 2020?',
      options: ['8', '9', '10', '11', '7'],
      answer: '9'
    },
    {
      question: 'Qual clube francês é conhecido como "Les Parisiens"?',
      options: ['Lyon', 'Marseille', 'Monaco', 'Nice', 'Paris Saint-Germain'],
      answer: 'Paris Saint-Germain'
    },
    {
      question: 'Quem é o maior artilheiro da história da Ligue 1?',
      options: ['Edinson Cavani', 'Radamel Falcao', 'Zlatan Ibrahimović', 'Pauleta', 'Thierry Henry'],
      answer: 'Edinson Cavani'
    },
    {
      question: 'Quantas vezes o Real Madrid venceu a Liga dos Campeões da UEFA?',
      options: ['13', '14', '15', '16', '12'],
      answer: '13'
    },
    {
      question: 'Qual jogador detém o recorde de mais gols marcados em uma única temporada da Premier League?',
      options: ['Alan Shearer', 'Thierry Henry', 'Andy Cole', 'Luis Suárez', 'Harry Kane'],
      answer: 'Andy Cole'
    },
    {
      question: 'Quantas vezes o Bayern de Munique venceu a Liga dos Campeões da UEFA?',
      options: ['6', '7', '8', '9', '5'],
      answer: '6'
    },
    {
      question: 'Qual clube inglês é conhecido como "The Blues"?',
      options: ['Arsenal', 'Manchester City', 'Chelsea', 'Tottenham Hotspur', 'Liverpool'],
      answer: 'Chelsea'
    },
    {
      question: 'Qual é o esporte que combina esqui e tiro ao alvo, e os atletas praticam tanto esqui cross-country quanto tiro?',
      options: ['Biatlo', 'Esqui Alpino', 'Curling', 'Snowboard Cross', 'Esqui Saltos'],
      answer: 'Biatlo'
    },
    {
      question: 'Em que esporte os jogadores tentam acertar um alvo com uma flecha?',
      options: ['Tiro com Arco', 'Esgrima', 'Atletismo', 'Luta Livre', 'Pentatlo Moderno'],
      answer: 'Tiro com Arco'
    },
    {
      question: 'Qual é o esporte em que os competidores correm em pistas de gelo usando patins?',
      options: ['Patinagem Artística', 'Curling', 'Hóquei no Gelo', 'Patinagem de Velocidade', 'Bobsleigh'],
      answer: 'Patinagem de Velocidade'
    },
    {
      question: 'Em que esporte os jogadores lançam um disco de plástico em direção a um alvo em poucos arremessos?',
      options: ['Ultimate Frisbee', 'Frisbee Golfe', 'Golfe', 'Tênis de Mesa', 'Curling'],
      answer: 'Ultimate Frisbee'
    },
    {
      question: 'Qual é o esporte em que os atletas competem para levantar o máximo de peso possível em três movimentos específicos?',
      options: ['Powerlifting', 'Halterofilismo', 'Levantamento de Peso', 'Crossfit', 'Arremesso de Peso'],
      answer: 'Powerlifting'
    },
    {
      question: 'Qual é o nome do troféu concedido ao vencedor da Copa América?',
      options: ['Taça Davis', 'Taça de Ouro', 'Copa das Nações Africanas', 'Taça Hopman', 'Copa América'],
      answer: 'Copa América'
    },
    {
      question: 'Quem é o artilheiro histórico da seleção portuguesa de futebol?',
      options: ['Cristiano Ronaldo', 'Eusébio', 'Luís Figo', 'Pauleta', 'Rui Costa'],
      answer: 'Cristiano Ronaldo'
    },
    {
      question: 'Quantos jogadores compõem uma equipe de rugby durante uma partida?',
      options: ['13', '14', '15', '16', '17'],
      answer: '15'
    },
    {
      question: 'Qual é o nome da competição internacional de futebol entre seleções da Europa?',
      options: ['Copa América', 'Copa do Mundo', 'UEFA Champions League', 'Eurocopa', 'Copa Africana de Nações'],
      answer: 'Eurocopa'
    },
    {
      question: 'Qual é o nome do circuito de corrida de Fórmula 1 realizado em Mônaco?',
      options: ['Silverstone', 'Monza', 'Monte Carlo', 'Interlagos', 'Spa-Francorchamps'],
      answer: 'Monte Carlo'
    },
    {
      question: 'Qual é o prato angolano de peixe cozido em um molho espesso de óleo de palma e vegetais?',
      options: ['Calulu', 'Moamba de Galinha', 'Funje', 'Mukimo', 'Bacalhau à Brás'],
      answer: 'Calulu'
    },
    {
      question: 'Qual é a bebida tradicional angolana feita de milho ou milhete fermentado?',
      options: ['Cafreal', 'Calulu', 'Cazumbi', 'Quissângua', 'Muamba'],
      answer: 'Quissângua'
    },
    {
      question: 'Qual é o prato angolano que consiste em bacalhau desfiado, batatas, ovos e azeitonas?',
      options: ['Calulu', 'Moamba de Galinha', 'Funje', 'Mukimo', 'Bacalhau à Brás'],
      answer: 'Bacalhau à Brás'
    },
    {
      question: 'Qual é o prato angolano tradicional feito com peixe seco, óleo de palma e vegetais?',
      options: ['Calulu', 'Moamba de Galinha', 'Funje', 'Mukimo', 'Bacalhau à Brás'],
      answer: 'Calulu'
    },
    {
      question: 'Qual é o nome do prato angolano feito com frango cozido em molho de óleo de palma, amendoim e quiabo?',
      options: ['Calulu', 'Moamba de Galinha', 'Funje', 'Mukimo', 'Bacalhau à Brás'],
      answer: 'Moamba de Galinha'
    },
    {
      question: 'Qual é o acompanhamento angolano feito de farinha de mandioca cozida?',
      options: ['Calulu', 'Moamba de Galinha', 'Funje', 'Mukimo', 'Bacalhau à Brás'],
      answer: 'Funje'
    },
    {
      question: 'Qual é o prato marroquino de folhas de massa recheadas com carne e especiarias?',
      options: ['Chakalaka', 'Bastilla', 'Brik', 'Harira', 'Pastilla'],
      answer: 'Brik'
    },
    {
      question: 'Qual é o prato senegalês de arroz misturado com folhas de mandioca e servido com molho de coco?',
      options: ['Thieboudienne', 'Ceebu Jen', 'Yassa', 'Bissap', 'Domoda'],
      answer: 'Bissap'
    },
    {
      question: 'Qual é o prato malgaxe de carne de porco cozida em molho de folhas de mostarda?',
      options: ['Romazava', 'Koba', 'Ravitoto', 'Mofo', 'Akoho sy Voanio'],
      answer: 'Ravitoto'
    },
    {
      question: 'Qual é o nome do prato brasileiro que consiste em feijão, arroz, carne seca, linguiça e outros ingredientes?',
      options: ['Feijoada', 'Coxinha', 'Vatapá', 'Acarajé', 'Moqueca'],
      answer: 'Feijoada'
    },
    // Adicione mais perguntas sobre comida
  ],

  filmes: [
    {
      question: 'Qual filme ganhou o Oscar de Melhor Filme em 2020?',
      options: ['Parasita', '1917', 'Coringa', 'Era Uma Vez em... Hollywood', 'Ford vs Ferrari'],
      answer: 'Parasita'
    },
    {
      question: 'Qual filme ganhou o Oscar de Melhor Filme em 1994?',
      options: ['Forrest Gump', 'Pulp Fiction', 'O Rei Leão', 'Titanic', 'Os Imperdoáveis'],
      answer: 'Forrest Gump'
    },
    {
      question: 'Qual é o filme que segue a história de um ex-agente secreto em busca de vingança pela morte de seu cachorro?',
      options: ['John Wick', 'Jason Bourne', 'Taken', 'The Equalizer', 'Die Hard'],
      answer: 'John Wick'
    },
    {
      question: 'Quem dirigiu o filme "A Rede Social" sobre a fundação do Facebook?',
      options: ['David Fincher', 'Aaron Sorkin', 'Mark Zuckerberg', 'Eduardo Saverin', 'Andrew Garfield'],
      answer: 'David Fincher'
    },
    {
      question: 'Qual é o filme que retrata a história de um jovem prodígio do xadrez?',
      options: ['O Gambito da Rainha', 'O Jogo da Imitação', 'Peões', 'Xeque-Mate', 'Rei da Estratégia'],
      answer: 'O Jogo da Imitação'
    },
    {
      question: 'Quem interpretou o personagem Wolverine nos filmes da franquia X-Men?',
      options: ['Chris Hemsworth', 'Ryan Reynolds', 'Hugh Jackman', 'Robert Downey Jr.', 'Chris Evans'],
      answer: 'Hugh Jackman'
    },
    {
      question: 'Qual é o filme sobre um grupo de ilusionistas que realiza roubos espetaculares durante suas performances?',
      options: ['Truque de Mestre', 'Ilusionistas: Nada é o que Parece', 'A Origem', 'Nós Você Eles', 'O Grande Truque'],
      answer: 'Truque de Mestre'
    },
    {
      question: 'Quem dirigiu o filme "A Forma da Água", vencedor do Oscar de Melhor Filme em 2018?',
      options: ['Guillermo del Toro', 'Alfonso Cuarón', 'Alejandro González Iñárritu', 'Pedro Almodóvar', 'Denis Villeneuve'],
      answer: 'Guillermo del Toro'
    },
    {
      question: 'Qual é o filme que conta a história de um astronauta deixado para trás em Marte e sua luta pela sobrevivência?',
      options: ['Interestelar', 'Gravidade', 'Perdido em Marte', 'O Primeiro Homem', 'Apollo 13'],
      answer: 'Perdido em Marte'
    },
    {
      question: 'Quem interpretou o personagem Jack Dawson no filme "Titanic"?',
      options: ['Leonardo DiCaprio', 'Brad Pitt', 'Johnny Depp', 'Tom Cruise', 'Hugh Jackman'],
      answer: 'Leonardo DiCaprio'
    },
    {
      question: 'Qual é o filme que narra a história de um homem que descobre que é um viajante do tempo?',
      options: ['Looper', 'De Volta para o Futuro', 'Efeito Borboleta', 'Predestinado', 'Donnie Darko'],
      answer: 'Predestinado'
    },
    {
      question: 'Quem dirigiu o filme "Clube da Luta"?',
      options: ['Christopher Nolan', 'David Fincher', 'Quentin Tarantino', 'Martin Scorsese', 'Stanley Kubrick'],
      answer: 'David Fincher'
    },
    {
      question: 'Qual é o filme que segue a história de um advogado que representa um homem negro acusado injustamente de estuprar uma mulher branca?',
      options: ['Justiça para Todos', 'Tempo de Matar', 'Os Intocáveis', 'Filadélfia', 'O Veredito'],
      answer: 'Tempo de Matar'
    },
    {
      question: 'Quem interpretou o personagem Tony Stark, também conhecido como Homem de Ferro, no Universo Cinematográfico da Marvel?',
      options: ['Chris Evans', 'Chris Hemsworth', 'Robert Downey Jr.', 'Mark Ruffalo', 'Scarlett Johansson'],
      answer: 'Robert Downey Jr.'
    },
    {
      question: 'Qual é o filme que segue a jornada de um homem em busca de respostas após um acidente de avião?',
      options: ['Náufrago', 'O Sobrevivente', 'Buried', 'O Voo', 'Sully'],
      answer: 'Náufrago'
    },
    {
      question: 'Quem interpretou o personagem Neo no filme "Matrix"?',
      options: ['Keanu Reeves', 'Tom Hardy', 'Joaquin Phoenix', 'Christian Bale', 'Matt Damon'],
      answer: 'Keanu Reeves'
    },
    {
      question: 'Qual é o filme que segue a história de um homem que decide viver em um aeroporto após seu país entrar em guerra civil?',
      options: ['O Terminal', 'Na Natureza Selvagem', 'À Espera de Um Milagre', 'O Náufrago', 'A Vida Secreta de Walter Mitty'],
      answer: 'O Terminal'
    },
    {
      question: 'Quem interpretou o personagem Vito Corleone em "O Poderoso Chefão"?',
      options: ['Robert De Niro', 'Marlon Brando', 'Al Pacino', 'Joe Pesci', 'James Caan'],
      answer: 'Marlon Brando'
    },
    {
      question: 'Qual é o filme que segue a história de um homem com habilidades extraordinárias que se torna um super-herói?',
      options: ['Homem de Ferro', 'Thor', 'Capitão América: O Primeiro Vingador', 'Pantera Negra', 'Homem-Aranha: De Volta ao Lar'],
      answer: 'Homem de Ferro'
    },
    {
      question: 'Quem interpretou o personagem Jack Dawson no filme "Titanic"?',
      options: ['Leonardo DiCaprio', 'Brad Pitt', 'Johnny Depp', 'Tom Cruise', 'Hugh Jackman'],
      answer: 'Leonardo DiCaprio'
    },
    {
      question: 'Qual série de TV se passa em um mundo de fantasia onde casas nobres lutam pelo controle do Trono de Ferro?',
      options: ['The Walking Dead', 'Breaking Bad', 'Stranger Things', 'Game of Thrones', 'Westworld'],
      answer: 'Game of Thrones'
    },
    {
      question: 'Quem é o protagonista da série "Breaking Bad"?',
      options: ['Walter White', 'Jesse Pinkman', 'Saul Goodman', 'Skyler White', 'Hank Schrader'],
      answer: 'Walter White'
    },
    {
      question: 'Qual série de ficção científica retrata um parque temático habitado por androides?',
      options: ['Lost', 'Westworld', 'Black Mirror', 'The Expanse', 'Altered Carbon'],
      answer: 'Westworld'
    },
    {
      question: 'Em que cidade a série "Stranger Things" se passa?',
      options: ['Hawkins', 'Castle Rock', 'Derry', 'Sunnydale', 'Riverdale'],
      answer: 'Hawkins'
    },
    {
      question: 'Quem é conhecido como "Heisenberg" em "Breaking Bad"?',
      options: ['Jesse Pinkman', 'Walter White', 'Saul Goodman', 'Gus Fring', 'Hank Schrader'],
      answer: 'Walter White'
    },
    {
      question: 'Qual é a série de TV sobre um grupo de sobreviventes lutando contra zumbis?',
      options: ['The Walking Dead', 'Fear the Walking Dead', 'Z Nation', 'The Leftovers', 'Black Summer'],
      answer: 'The Walking Dead'
    },
    {
      question: 'Qual é a série de TV que segue um grupo de crianças enfrentando seres sobrenaturais?',
      options: ['The X-Files', 'Twin Peaks', 'Supernatural', 'Stranger Things', 'Buffy, a Caça-Vampiros'],
      answer: 'Stranger Things'
    },
    {
      question: 'Quem é o personagem principal em "The Mandalorian", uma série do universo de Star Wars?',
      options: ['Luke Skywalker', 'Darth Vader', 'Han Solo', 'Boba Fett', 'The Mandalorian'],
      answer: 'The Mandalorian'
    },
    {
      question: 'Qual é a série de TV baseada nas obras de George R.R. Martin?',
      options: ['The Witcher', 'His Dark Materials', 'Game of Thrones', 'The Expanse', 'Westworld'],
      answer: 'Game of Thrones'
    },
    {
      question: 'Em que universidade a série "Community" se passa?',
      options: ['Greendale', 'Harvard', 'MIT', 'Stanford', 'Yale'],
      answer: 'Greendale'
    },
    {
      question: 'Qual é a série de TV que segue a vida de uma família de gângsteres em Birmingham, após a Primeira Guerra Mundial?',
      options: ['Peaky Blinders', 'Boardwalk Empire', 'The Sopranos', 'Breaking Bad', 'Ozark'],
      answer: 'Peaky Blinders'
    },
    {
      question: 'Quem é o personagem principal em "The Witcher", interpretado por Henry Cavill?',
      options: ['Geralt of Rivia', 'Ezio Auditore', 'Aragorn', 'Legolas', 'Frodo Baggins'],
      answer: 'Geralt of Rivia'
    },
    {
      question: 'Qual série segue a vida de um cientista que viaja pelo tempo em uma cabine de poltrona azul?',
      options: ['Doctor Who', 'Timeless', 'The Flash', 'Outlander', 'Dark'],
      answer: 'Doctor Who'
    },
    {
      question: 'Em que série os personagens visitam diferentes dimensões através de portais interdimensionais?',
      options: ['The OA', 'Fringe', 'Black Mirror', 'Dark', 'The Twilight Zone'],
      answer: 'Fringe'
    },
    {
      question: 'Quem é o protagonista de "Sherlock", uma série moderna baseada nas obras de Arthur Conan Doyle?',
      options: ['John Watson', 'Mycroft Holmes', 'Sherlock Holmes', 'Greg Lestrade', 'Jim Moriarty'],
      answer: 'Sherlock Holmes'
    },
    {
      question: 'Qual série de TV segue um grupo de pessoas tentando sobreviver a um ataque de criaturas alienígenas cegas?',
      options: ['The 100', 'The Leftovers', 'The Walking Dead', 'Stranger Things', 'A Quiet Place'],
      answer: 'The Leftovers'
    },
    {
      question: 'Quem é o protagonista da série "Dexter", um perito forense que também é um serial killer?',
      options: ['Dexter Morgan', 'Harry Morgan', 'James Doakes', 'Debra Morgan', 'Trinity Killer'],
      answer: 'Dexter Morgan'
    },
    {
      question: 'Qual é a série que segue a vida de uma família que se muda para um hotel assombrado?',
      options: ['American Horror Story', 'The Haunting of Hill House', 'Bates Motel', 'Penny Dreadful', 'The X-Files'],
      answer: 'American Horror Story'
    },
    {
      question: 'Em que série de TV os personagens são desafiados por uma misteriosa entidade chamada "The Game"?',
      options: ['Black Mirror', 'Westworld', 'Mr. Robot', 'The OA', 'Altered Carbon'],
      answer: 'Black Mirror'
    },
    {
      question: 'Qual é a série que segue as façanhas de um consultor criminal que ajuda a polícia de Nova York a resolver casos?',
      options: ['Elementary', 'Sherlock', 'Castle', 'Mindhunter', 'The Mentalist'],
      answer: 'Elementary'
    },
    {
      question: 'Quem é o personagem principal em "The Mandalorian", uma série do universo de Star Wars?',
      options: ['Luke Skywalker', 'Darth Vader', 'Han Solo', 'Boba Fett', 'The Mandalorian'],
      answer: 'The Mandalorian'
    },
    {
      question: 'Qual é a série que segue um grupo de pessoas tentando sobreviver em uma prisão durante um apocalipse zumbi?',
      options: ['The Walking Dead', 'Fear the Walking Dead', 'Z Nation', 'The Leftovers', 'World War Z'],
      answer: 'The Walking Dead'
    },
    {
      question: 'Quem é o protagonista da série "Narcos", que narra a ascensão e queda do Cartel de Medellín?',
      options: ['Pablo Escobar', 'Gustavo Gaviria', 'Javier Peña', 'Gilberto Rodriguez', 'Jorge Ochoa'],
      answer: 'Pablo Escobar'
    },
    {
      question: 'Qual é a série que segue a vida de um professor de química que se torna um traficante de metanfetamina?',
      options: ['Breaking Bad', 'Better Call Saul', 'Ozark', 'Narcos', 'The Sopranos'],
      answer: 'Breaking Bad'
    },
    {
      question: 'Em que série os personagens participam de um jogo virtual imersivo chamado "Westworld"?',
      options: ['Westworld', 'Black Mirror', 'Altered Carbon', 'The 100', 'Stranger Things'],
      answer: 'Westworld'
    },
    {
      question: 'Qual é a série de TV baseada nas obras de Neil Gaiman sobre deuses antigos que vivem entre nós?',
      options: ['American Gods', 'Good Omens', 'Lucifer', 'Supernatural', 'Preacher'],
      answer: 'American Gods'
    },
    {
      question: 'Quem é o personagem principal em "The Witcher", interpretado por Henry Cavill?',
      options: ['Geralt of Rivia', 'Ezio Auditore', 'Aragorn', 'Legolas', 'Frodo Baggins'],
      answer: 'Geralt of Rivia'
    },
    {
      question: 'Qual é a série de TV que segue a vida de uma família que administra um funeral em Los Angeles?',
      options: ['Six Feet Under', 'Dexter', 'The Sopranos', 'Ozark', 'The Wire'],
      answer: 'Six Feet Under'
    },
    {
      question: 'Quem é o personagem principal em "Stranger Things"?',
      options: ['Mike Wheeler', 'Will Byers', 'Eleven', 'Dustin Henderson', 'Lucas Sinclair'],
      answer: 'Eleven'
    },
    {
      question: 'Qual é a série que segue as vidas de um grupo de amigos nova-iorquinos?',
      options: ['How I Met Your Mother', 'Friends', 'Seinfeld', 'The Big Bang Theory', 'Brooklyn Nine-Nine'],
      answer: 'Friends'
    },
    {
      question: 'Em que série os personagens vivem em um mundo onde as pessoas têm memórias implantadas?',
      options: ['Altered Carbon', 'Black Mirror', 'Westworld', 'The OA', 'Humans'],
      answer: 'Altered Carbon'
    },
    {
      question: 'Quem é o personagem principal em "The Crown", uma série sobre a realeza britânica?',
      options: ['Queen Elizabeth II', 'Prince Philip', 'Prince Charles', 'Princess Diana', 'Prince William'],
      answer: 'Queen Elizabeth II'
    },
    {
      question: 'Qual é a série de TV sobre um vigilante cego que combate o crime em Hell?',
      options: ['Daredevil', 'Jessica Jones', 'Luke Cage', 'Iron Fist', 'The Punisher'],
      answer: 'Daredevil'
    },
    {
      question: 'Quem é o protagonista da série "Stranger Things"?',
      options: ['Mike Wheeler', 'Will Byers', 'Eleven', 'Dustin Henderson', 'Lucas Sinclair'],
      answer: 'Mike Wheeler'
    },
    {
      question: 'Qual é a série que segue a vida de um grupo de amigos que moram em Nova York e frequentam uma cafeteria chamada Central Perk?',
      options: ['Friends', 'How I Met Your Mother', 'The Big Bang Theory', 'Seinfeld', 'Cheers'],
      answer: 'Friends'
    },
    {
      question: 'Quem é o personagem principal em "Sherlock", uma série moderna baseada nas obras de Arthur Conan Doyle?',
      options: ['John Watson', 'Mycroft Holmes', 'Sherlock Holmes', 'Greg Lestrade', 'Jim Moriarty'],
      answer: 'Sherlock Holmes'
    },
    {
      question: 'Qual é a série que segue as vidas de um grupo de médicos no Grey Sloan Memorial Hospital?',
      options: ['Grey\'s Anatomy', 'ER', 'House', 'Scrubs', 'The Good Doctor'],
      answer: 'Grey\'s Anatomy'
    },
    {
      question: 'Quem é o personagem principal em "The Witcher", interpretado por Henry Cavill?',
      options: ['Geralt of Rivia', 'Ezio Auditore', 'Aragorn', 'Legolas', 'Frodo Baggins'],
      answer: 'Geralt of Rivia'
    },
    {
      question: 'Qual é a série que segue a vida de um grupo de sobreviventes após um apocalipse zumbi?',
      options: ['Fear the Walking Dead', 'The Walking Dead', 'Z Nation', 'World War Z', 'Dead Set'],
      answer: 'The Walking Dead'
    },
    {
      question: 'Em que cidade a série "Breaking Bad" se passa?',
      options: ['Albuquerque', 'Los Angeles', 'New York', 'Chicago', 'Miami'],
      answer: 'Albuquerque'
    },
    {
      question: 'Qual é a série de TV que segue a vida de um grupo de estudantes de uma escola de artes performáticas?',
      options: ['Glee', 'High School Musical: The Musical: The Series', 'Fame', 'Smash', 'The Get Down'],
      answer: 'Glee'
    },
    {
      question: 'Qual é a série que segue um grupo de sobreviventes após um apocalipse zumbi?',
      options: ['Fear the Walking Dead', 'The Walking Dead', 'Z Nation', 'World War Z', 'Dead Set'],
      answer: 'The Walking Dead'
    },
    {
      question: 'Em que cidade a série "The Wire" se passa?',
      options: ['Baltimore', 'Los Angeles', 'New York', 'Chicago', 'Detroit'],
      answer: 'Baltimore'
    },
    {
      question: 'Qual é a série de TV que segue a vida de uma família disfuncional chefiada por um patriarca narcisista?',
      options: ['Arrested Development', 'The Office', 'Parks and Recreation', 'Brooklyn Nine-Nine', 'Modern Family'],
      answer: 'Arrested Development'
    },
    {
      question: 'Quem é o personagem principal em "The Crown", uma série sobre a realeza britânica?',
      options: ['Queen Elizabeth II', 'Prince Philip', 'Prince Charles', 'Princess Diana', 'Prince William'],
      answer: 'Queen Elizabeth II'
    },
    {
      question: 'Qual é o filme que segue a história de um homem que descobre que todos os seus relacionamentos anteriores foram apagados de sua memória?',
      options: ['Brilho Eterno de uma Mente sem Lembranças', 'Ela', '500 Dias com Ela', 'O Segredo dos Seus Olhos', 'A Origem'],
      answer: 'Brilho Eterno de uma Mente sem Lembranças'
    },
    {
      question: 'Quem dirigiu o filme "Os Suspeitos"?',
      options: ['Denis Villeneuve', 'Christopher Nolan', 'David Fincher', 'Quentin Tarantino', 'Martin Scorsese'],
      answer: 'Denis Villeneuve'
    },
    {
      question: 'Qual é o filme que segue a história de um homem que enfrenta desafios para cuidar de seu filho com necessidades especiais?',
      options: ['Uma Lição de Amor', 'Forrest Gump', 'Meu Pé Esquerdo', 'O Escafandro e a Borboleta', 'Rain Man'],
      answer: 'Uma Lição de Amor'
    },
    {
      question: 'Quem interpretou o personagem Hannibal Lecter em "O Silêncio dos Inocentes"?',
      options: ['Anthony Hopkins', 'Robert De Niro', 'Morgan Freeman', 'Al Pacino', 'Kevin Spacey'],
      answer: 'Anthony Hopkins'
    },
    {
      question: 'Qual é o filme que segue a história de um menino com poderes telecinéticos e sua relação com sua mãe religiosa?',
      options: ['Matilda', 'Carrie, a Estranha', 'O Iluminado', 'A Bruxa', 'O Sexto Sentido'],
      answer: 'Carrie, a Estranha'
    },
    {
      question: 'Quem dirigiu o filme "A Origem"?',
      options: ['Christopher Nolan', 'Steven Spielberg', 'Martin Scorsese', 'David Fincher', 'James Cameron'],
      answer: 'Christopher Nolan'
    },
    {
      question: 'Qual é o filme que segue a história de um grupo de adolescentes que enfrenta um palhaço demoníaco?',
      options: ['A Coisa', 'O Iluminado', 'Poltergeist', 'O Exorcista', 'Atividade Paranormal'],
      answer: 'A Coisa'
    },
    {
      question: 'Quem interpretou o personagem John McClane no filme "Duro de Matar"?',
      options: ['Arnold Schwarzenegger', 'Sylvester Stallone', 'Bruce Willis', 'Mel Gibson', 'Harrison Ford'],
      answer: 'Bruce Willis'
    },
    {
      question: 'Qual é o filme que segue a história de um grupo de pessoas tentando sobreviver a um ataque zumbi?',
      options: ['Madrugada dos Mortos', 'Guerra Mundial Z', 'Extermínio', 'Zumbilândia', 'Resident Evil'],
      answer: 'Zumbilândia'
    },
    {
      question: 'Quem dirigiu a trilogia "O Senhor dos Anéis"?',
      options: ['Christopher Nolan', 'Steven Spielberg', 'Peter Jackson', 'James Cameron', 'Quentin Tarantino'],
      answer: 'Peter Jackson'
    },
    {
      question: 'Qual é o filme de animação da Pixar sobre um peixe-palhaço procurando por seu filho?',
      options: ['Toy Story', 'Monstros S.A.', 'Procurando Nemo', 'Carros', 'Up: Altas Aventuras'],
      answer: 'Procurando Nemo'
    },
    {
      question: 'Quem interpretou o Coringa no filme "Coringa" de 2019?',
      options: ['Joaquin Phoenix', 'Heath Ledger', 'Jared Leto', 'Jack Nicholson', 'Cesar Romero'],
      answer: 'Joaquin Phoenix'
    },
    {
      question: 'Qual é o primeiro filme da saga "Star Wars"?',
      options: ['O Império Contra-Ataca', 'A Ameaça Fantasma', 'Uma Nova Esperança', 'O Retorno de Jedi', 'O Despertar da Força'],
      answer: 'Uma Nova Esperança'
    },
    {
      question: 'Quem interpretou o personagem Tony Stark, também conhecido como Homem de Ferro, no Universo Cinematográfico da Marvel?',
      options: ['Chris Evans', 'Chris Hemsworth', 'Robert Downey Jr.', 'Mark Ruffalo', 'Scarlett Johansson'],
      answer: 'Robert Downey Jr.'
    },
    {
      question: 'Qual é o filme de Quentin Tarantino que se passa durante a Segunda Guerra Mundial?',
      options: ['Pulp Fiction', 'Kill Bill', 'Django Livre', 'Bastardos Inglórios', 'Cães de Aluguel'],
      answer: 'Bastardos Inglórios'
    },
    {
      question: 'Quem dirigiu o filme "A Origem"?',
      options: ['Christopher Nolan', 'Steven Spielberg', 'Martin Scorsese', 'David Fincher', 'James Cameron'],
      answer: 'Christopher Nolan'
    },
    {
      question: 'Qual é o filme em que Tom Hanks interpreta um náufrago que faz amizade com uma bola chamada Wilson?',
      options: ['Apollo 13', 'Forrest Gump', 'O Terminal', 'Náufrago', 'Sully'],
      answer: 'Náufrago'
    },
    {
      question: 'Qual é o filme sobre a história de um rei gago que contrata um terapeuta de fala para ajudá-lo?',
      options: ['O Discurso do Rei', 'O Pianista', 'Amadeus', 'Ray', 'A Teoria de Tudo'],
      answer: 'O Discurso do Rei'
    },
    {
      question: 'Quem dirigiu o filme "E o Vento Levou"?',
      options: ['David Lean', 'Frank Capra', 'Victor Fleming', 'Gone With the Wind', 'Steven Spielberg'],
      answer: 'Victor Fleming'
    },
    {
      question: 'Qual é o filme que conta a história de um jovem programador que se envolve com um revolucionário jogo de realidade virtual?',
      options: ['Matrix', 'Avatar', 'O Show de Truman', 'Blade Runner', 'Tron'],
      answer: 'Matrix'
    },
    {
      question: 'Quem interpretou o agente secreto James Bond no filme "Skyfall"?',
      options: ['Sean Connery', 'Roger Moore', 'Pierce Brosnan', 'Daniel Craig', 'Timothy Dalton'],
      answer: 'Daniel Craig'
    },
    {
      question: 'Qual é o filme que retrata a história de um professor de literatura que é diagnosticado com câncer?',
      options: ['Clube dos Cinco', 'Sociedade dos Poetas Mortos', 'A Culpa é das Estrelas', 'O Fabuloso Destino de Amélie Poulain', 'Laranja Mecânica'],
      answer: 'Sociedade dos Poetas Mortos'
    },
    {
      question: 'Quem é o diretor de "O Poderoso Chefão"?',
      options: ['Francis Ford Coppola', 'Martin Scorsese', 'Quentin Tarantino', 'Steven Spielberg', 'Alfred Hitchcock'],
      answer: 'Francis Ford Coppola'
    },
    {
      question: 'Qual é o filme que se passa em uma terra distante onde um anel mágico precisa ser destruído para evitar o domínio do mal?',
      options: ['Harry Potter e a Pedra Filosofal', 'O Senhor dos Anéis: A Sociedade do Anel', 'As Crônicas de Nárnia: O Leão, a Feiticeira e o Guarda-Roupa', 'Stardust - O Mistério da Estrela', 'O Hobbit: Uma Jornada Inesperada'],
      answer: 'O Senhor dos Anéis: A Sociedade do Anel'
    },
    {
      question: 'Quem dirigiu o filme "O Silêncio dos Inocentes"?',
      options: ['David Fincher', 'Quentin Tarantino', 'Jonathan Demme', 'Martin Scorsese', 'Steven Spielberg'],
      answer: 'Jonathan Demme'
    },
    {
      question: 'Qual é o filme que segue a história de um advogado idealista e um prisioneiro condenado à morte acusado injustamente?',
      options: ['12 Homens e uma Sentença', 'Tempo de Matar', 'O Júri', 'Um Sonho de Liberdade', 'Os Intocáveis'],
      answer: 'Um Sonho de Liberdade'
    },
    {
      question: 'Quem dirigiu o filme "O Iluminado" baseado na obra de Stephen King?',
      options: ['David Fincher', 'Stanley Kubrick', 'Alfred Hitchcock', 'Christopher Nolan', 'Tim Burton'],
      answer: 'Stanley Kubrick'
    },
    {
      question: 'Qual é o filme que narra a história de um homem que envelhece ao contrário?',
      options: ['Benjamin Button', 'O Curioso Caso de Benjamin Button', 'Forrest Gump', 'A Árvore da Vida', 'O Fabuloso Destino de Amélie Poulain'],
      answer: 'O Curioso Caso de Benjamin Button'
    },
    {
      question: 'Quem dirigiu o filme "Interestelar"?',
      options: ['Christopher Nolan', 'Steven Spielberg', 'Martin Scorsese', 'David Fincher', 'James Cameron'],
      answer: 'Christopher Nolan'
    },
    {
      question: 'Qual é o filme que segue a vida de um grupo de jovens soldados americanos durante a Guerra do Vietnã?',
      options: ['O Resgate do Soldado Ryan', 'Apocalypse Now', 'Nascido Para Matar', 'Platoon', 'Círculo de Fogo'],
      answer: 'O Resgate do Soldado Ryan'
    },
    {
      question: 'Quem interpretou o personagem Jack Dawson no filme "Titanic"?',
      options: ['Leonardo DiCaprio', 'Brad Pitt', 'Johnny Depp', 'Tom Cruise', 'Hugh Jackman'],
      answer: 'Leonardo DiCaprio'
    },
    {
      question: 'Qual é o filme que aborda a história de um homem com habilidades extraordinárias que se torna um super-herói?',
      options: ['Homem de Ferro', 'Thor', 'Capitão América: O Primeiro Vingador', 'Pantera Negra', 'Homem-Aranha: De Volta ao Lar'],
      answer: 'Homem de Ferro'
    },
    {
      question: 'Quem interpretou o personagem Hannibal Lecter em "O Silêncio dos Inocentes"?',
      options: ['Anthony Hopkins', 'Robert De Niro', 'Morgan Freeman', 'Al Pacino', 'Kevin Spacey'],
      answer: 'Anthony Hopkins'
    },
    {
      question: 'Qual é o filme que se passa em uma realidade futurista distópica, onde jovens são selecionados para lutar até a morte?',
      options: ['Jogos Vorazes', 'Divergente', 'Maze Runner', 'O Hospedeiro', 'Ender\'s Game'],
      answer: 'Jogos Vorazes'
    },
    {
      question: 'Quem dirigiu o filme "A Origem" (Inception)?',
      options: ['Christopher Nolan', 'Quentin Tarantino', 'Steven Spielberg', 'James Cameron', 'Martin Scorsese'],
      answer: 'Christopher Nolan'
    },
    // Adicione mais perguntas sobre filmes
  ],

  musica: [
    {
      question: 'Qual banda é conhecida como os "Quatro Fabulosos"?',
      options: ['The Rolling Stones', 'The Beatles', 'Queen', 'Led Zeppelin', 'Pink Floyd'],
      answer: 'The Beatles'
    },
    {
      question: 'Qual é o álbum mais vendido de todos os tempos?',
      options: ['The Dark Side of the Moon', 'Thriller', 'Back in Black', 'Abbey Road', 'The Wall'],
      answer: 'Thriller'
    },
    {
      question: 'Quem é conhecido como o "Rei do Pop"?',
      options: ['Michael Jackson', 'Elvis Presley', 'Prince', 'David Bowie', 'Stevie Wonder'],
      answer: 'Michael Jackson'
    },
    {
      question: 'Qual é a banda de rock britânica formada em 1960, conhecida por hits como "Stairway to Heaven"?',
      options: ['The Rolling Stones', 'The Who', 'Led Zeppelin', 'The Beatles', 'Pink Floyd'],
      answer: 'Led Zeppelin'
    },
    {
      question: 'Quem é a vocalista da banda de rock alternativo No Doubt?',
      options: ['Shirley Manson', 'Gwen Stefani', 'Alanis Morissette', 'Courtney Love', 'Hayley Williams'],
      answer: 'Gwen Stefani'
    },
    {
      question: 'Qual é o gênero musical caracterizado por vocais melódicos e letras românticas, popularizado por artistas como Frank Sinatra?',
      options: ['Jazz', 'Blues', 'Country', 'R&B', 'Easy Listening'],
      answer: 'Easy Listening'
    },
    {
      question: 'Quem é o lendário guitarrista conhecido por sua habilidade única e por ser membro da banda Queen?',
      options: ['Jimi Hendrix', 'Eric Clapton', 'Jimmy Page', 'Eddie Van Halen', 'Brian May'],
      answer: 'Brian May'
    },
    {
      question: 'Qual é a banda de rock formada por Mick Jagger e Keith Richards em 1962?',
      options: ['The Who', 'The Rolling Stones', 'The Beatles', 'Queen', 'The Doors'],
      answer: 'The Rolling Stones'
    },
    {
      question: 'Quem é o "Piano Man" conhecido por hits como "Uptown Girl" e "Piano Man"?',
      options: ['Elton John', 'Billy Joel', 'Bruce Springsteen', 'Paul McCartney', 'Stevie Wonder'],
      answer: 'Billy Joel'
    },
    {
      question: 'Qual é o álbum icônico dos Beatles lançado em 1967 e conhecido por sua capa psicodélica?',
      options: ['Abbey Road', 'Revolver', 'Sgt. Pepper\'s Lonely Hearts Club Band', 'The White Album', 'Rubber Soul'],
      answer: 'Sgt. Pepper\'s Lonely Hearts Club Band'
    },
    {
      question: 'Quem é a cantora pop conhecida por hits como "Poker Face" e "Bad Romance"?',
      options: ['Taylor Swift', 'Beyoncé', 'Lady Gaga', 'Adele', 'Rihanna'],
      answer: 'Lady Gaga'
    },
    {
      question: 'Qual é o estilo musical originado nos anos 1970 em Nova York, com influências da música disco e do hip-hop?',
      options: ['Punk Rock', 'Heavy Metal', 'Reggae', 'Funk', 'Hip-Hop'],
      answer: 'Hip-Hop'
    },
    {
      question: 'Quem é o lendário guitarrista conhecido por sua habilidade única e por ser membro da banda The Jimi Hendrix Experience?',
      options: ['Jimmy Page', 'Eric Clapton', 'Jimi Hendrix', 'Eddie Van Halen', 'Stevie Ray Vaughan'],
      answer: 'Jimi Hendrix'
    },
    {
      question: 'Qual é o álbum da banda Pink Floyd conhecido por suas complexas composições e pela música "Comfortably Numb"?',
      options: ['The Wall', 'Wish You Were Here', 'Dark Side of the Moon', 'Animals', 'Meddle'],
      answer: 'The Wall'
    },
    {
      question: 'Quem é o cantor e compositor conhecido como "The Boss" e por hits como "Born to Run"?',
      options: ['Bob Dylan', 'Bruce Springsteen', 'Tom Petty', 'John Mellencamp', 'Neil Young'],
      answer: 'Bruce Springsteen'
    },
    {
      question: 'Qual é a banda de rock alternativo liderada por Thom Yorke, conhecida por álbuns como "OK Computer"?',
      options: ['Radiohead', 'Nirvana', 'Pearl Jam', 'Soundgarden', 'Blur'],
      answer: 'Radiohead'
    },
    {
      question: 'Quem é o lendário cantor e compositor conhecido por hits como "Purple Haze" e "Hey Joe"?',
      options: ['Bob Dylan', 'Jimi Hendrix', 'John Lennon', 'Eric Clapton', 'David Bowie'],
      answer: 'Jimi Hendrix'
    },
    {
      question: 'Qual é a banda de rock conhecida por álbuns como "Back in Black" e "Highway to Hell"?',
      options: ['AC/DC', 'Metallica', 'Guns N\' Roses', 'Led Zeppelin', 'Deep Purple'],
      answer: 'AC/DC'
    },
    {
      question: 'Quem é a cantora e atriz conhecida por seu papel em "Evita" e por hits como "Like a Virgin"?',
      options: ['Britney Spears', 'Madonna', 'Celine Dion', 'Whitney Houston', 'Mariah Carey'],
      answer: 'Madonna'
    },
    {
      question: 'Qual é a banda de rock conhecida por hits como "Bohemian Rhapsody" e "We Will Rock You"?',
      options: ['Queen', 'The Rolling Stones', 'The Who', 'Led Zeppelin', 'The Beatles'],
      answer: 'Queen'
    },
    {
      question: 'Quem é o cantor e compositor conhecido por hits como "Imagine" e "Hey Jude"?',
      options: ['Elton John', 'John Lennon', 'Paul McCartney', 'Bob Dylan', 'George Harrison'],
      answer: 'John Lennon'
    },
    {
      question: 'Qual é a banda de rock formada por Robert Plant e Jimmy Page em 1968?',
      options: ['The Rolling Stones', 'The Who', 'Led Zeppelin', 'The Beatles', 'Pink Floyd'],
      answer: 'Led Zeppelin'
    },
    {
      question: 'Quem é o lendário vocalista do Queen, conhecido por sua poderosa voz e presença de palco?',
      options: ['Freddie Mercury', 'David Bowie', 'Robert Plant', 'Axl Rose', 'Mick Jagger'],
      answer: 'Freddie Mercury'
    },
    {
      question: 'Qual é a banda de rock conhecida por álbuns como "The Dark Side of the Moon" e "Wish You Were Here"?',
      options: ['The Rolling Stones', 'The Who', 'Led Zeppelin', 'Pink Floyd', 'The Beatles'],
      answer: 'Pink Floyd'
    },
    {
      question: 'Quem é conhecido como o "Pai da Música Angolana"?',
      options: ['Bonga', 'Waldemar Bastos', 'Liceu Vieira Dias', 'Carlos Burity', 'Artur Nunes'],
      answer: 'Liceu Vieira Dias'
    },
    {
      question: 'Qual é o estilo musical angolano que mistura ritmos tradicionais com influências modernas?',
      options: ['Semba', 'Kizomba', 'Kuduro', 'Tarrachinha', 'Rebita'],
      answer: 'Kizomba'
    },
    {
      question: 'Quem é o músico angolano conhecido por sucessos como "Mona Ki Ngi Xica" e "Balumukeno"?',
      options: ['Waldemar Bastos', 'Bonga', 'Artur Nunes', 'Liceu Vieira Dias', 'Carlos Burity'],
      answer: 'Bonga'
    },
    {
      question: 'Qual é o grupo musical angolano formado por Big Nelo e Paul G?',
      options: ['Kalibrados', 'Os Lambas', 'SSP', 'Yuri da Cunha', 'Brigadeiro 10 Pacotes'],
      answer: 'SSP'
    },
    {
      question: 'Quem é a cantora angolana conhecida por hits como "Bwe Ku Kuduro" e "Mwangolé"?',
      options: ['Yola Semedo', 'Ary', 'Lil Saint', 'Perola', 'Noite e Dia'],
      answer: 'Noite e Dia'
    },
    {
      question: 'Qual é o estilo musical angolano que incorpora elementos da música eletrônica e hip-hop?',
      options: ['Semba', 'Kizomba', 'Kuduro', 'Tarrachinha', 'Rebita'],
      answer: 'Kuduro'
    },
    {
      question: 'Quem é o artista angolano conhecido como o "Príncipe do Zouk"?',
      options: ['C4 Pedro', 'Anselmo Ralph', 'Yuri da Cunha', 'Heavy C', 'Matias Damásio'],
      answer: 'Anselmo Ralph'
    },
    {
      question: 'Qual é o estilo musical angolano derivado do semba, com influências do zouk e da música latina?',
      options: ['Semba', 'Kizomba', 'Tarrachinha', 'Rebita', 'Zouk'],
      answer: 'Tarrachinha'
    },
    {
      question: 'Quem é o músico angolano conhecido como "O SembaMaster"?',
      options: ['Bonga', 'Artur Nunes', 'Yuri da Cunha', 'Eduardo Paim', 'Liceu Vieira Dias'],
      answer: 'Eduardo Paim'
    },
    {
      question: 'Qual é o grupo musical angolano formado por Yuri da Cunha, C4 Pedro, Anselmo Ralph e outros?',
      options: ['Os Lambas', 'B26', 'Kalibrados', 'New Joint', 'Dream Boyz'],
      answer: 'B26'
    },
    {
      question: 'Quem é a cantora angolana conhecida como a "Princesa do Semba"?',
      options: ['Yola Semedo', 'Ary', 'Edmázia Mayembe', 'Noite e Dia', 'Perola'],
      answer: 'Yola Semedo'
    },
    {
      question: 'Qual é o estilo musical angolano que se originou nos anos 50 e é uma fusão de ritmos tradicionais angolanos com influências ocidentais?',
      options: ['Semba', 'Kizomba', 'Kuduro', 'Rebita', 'Maringa'],
      answer: 'Semba'
    },
    {
      question: 'Quem é o músico angolano conhecido como o "Tio Pappy"?',
      options: ['Artur Nunes', 'Bonga', 'Waldemar Bastos', 'Eduardo Paim', 'Liceu Vieira Dias'],
      answer: 'Waldemar Bastos'
    },
    {
      question: 'Qual é o grupo de kuduro formado por Tony Amado, Sebem e Manya?',
      options: ['Os Lambas', 'Kalibrados', 'New Joint', 'Buraka Som Sistema', 'Os Pilukas'],
      answer: 'Buraka Som Sistema'
    },
    {
      question: 'Quem é o músico angolano conhecido como o "Filho do Zua"?',
      options: ['Anselmo Ralph', 'C4 Pedro', 'Matias Damásio', 'Heavy C', 'Filho do Zua'],
      answer: 'Filho do Zua'
    },
    {
      question: 'Qual é o grupo de kuduro conhecido por sucessos como "Dança dos Badalados"?',
      options: ['Os Lambas', 'Kalibrados', 'New Joint', 'Os Pilukas', 'Noite e Dia'],
      answer: 'Os Lambas'
    },
    {
      question: 'Quem é o músico angolano conhecido por hits como "Bo Tem Mel" e "Matemática do Amor"?',
      options: ['Matias Damásio', 'Anselmo Ralph', 'Heavy C', 'Filho do Zua', 'C4 Pedro'],
      answer: 'Matias Damásio'
    },
    {
      question: 'Qual é o estilo musical angolano que se caracteriza por movimentos sensuais e é muitas vezes associado à dança de salão?',
      options: ['Semba', 'Kizomba', 'Tarrachinha', 'Rebita', 'Maringa'],
      answer: 'Kizomba'
    },
    {
      question: 'Quem é o músico angolano conhecido por sucessos como "Minha Kizomba" e "Geração Africana"?',
      options: ['Filho do Zua', 'Yuri da Cunha', 'C4 Pedro', 'Anselmo Ralph', 'Matias Damásio'],
      answer: 'Yuri da Cunha'
    },
    {
      question: 'Qual é o grupo musical angolano formado por Edmázia Mayembe, Konde Martins e Ary?',
      options: ['As Gingas', 'Ary', 'Dream Boyz', 'Yola Semedo', 'Amigos de Alex'],
      answer: 'As Gingas'
    },
    {
      question: 'Quem é o músico angolano conhecido como o "Príncipe do Amor"?',
      options: ['Anselmo Ralph', 'Matias Damásio', 'C4 Pedro', 'Filho do Zua', 'Heavy C'],
      answer: 'C4 Pedro'
    },
    {
      question: 'Qual é o estilo musical angolano que se caracteriza por ritmos acelerados e dança enérgica?',
      options: ['Semba', 'Kizomba', 'Kuduro', 'Tarrachinha', 'Rebita'],
      answer: 'Kuduro'
    },
    {
      question: 'Quem é o músico angolano conhecido como o "Príncipe da Música Popular Angolana"?',
      options: ['Carlos Burity', 'Artur Nunes', 'Liceu Vieira Dias', 'Eduardo Paim', 'Waldemar Bastos'],
      answer: 'Carlos Burity'
    },
    {
      question: 'Qual é o grupo de kizomba conhecido por sucessos como "Café da Manhã"?',
      options: ['Os Lambas', 'B26', 'Dream Boyz', 'New Joint', 'Anselmo Ralph e Amigos'],
      answer: 'Dream Boyz'
    },
    {
      question: 'Quem é a cantora angolana conhecida como a "Diva Ary"?',
      options: ['Edmázia Mayembe', 'Yola Semedo', 'Ary', 'Perola', 'Noite e Dia'],
      answer: 'Ary'
    },
    {
      question: 'Qual é o estilo musical angolano que tem raízes na década de 1950 e é uma forma de música de rua?',
      options: ['Semba', 'Kizomba', 'Kuduro', 'Rebita', 'Maringa'],
      answer: 'Rebita'
    },
    {
      question: 'Quem é o músico angolano conhecido por sucessos como "Vizinha" e "Zaranza"?',
      options: ['Matias Damásio', 'Anselmo Ralph', 'C4 Pedro', 'Filho do Zua', 'Heavy C'],
      answer: 'Heavy C'
    },
    {
      question: 'Qual é o grupo de kizomba formado por Anselmo Ralph, Beto Dias e Margareth do Rosário?',
      options: ['Dream Boyz', 'B26', 'Os Lambas', 'SSP', 'Kassav'],
      answer: 'B26'
    },
    {
      question: 'Quem é a cantora angolana conhecida por sucessos como "Amar 24/24" e "Dona da Minha Vida"?',
      options: ['Ary', 'Perola', 'Yola Semedo', 'Edmázia Mayembe', 'Noite e Dia'],
      answer: 'Perola'
    },
    {
      question: 'Qual é o grupo musical angolano formado por Anselmo Ralph, Emanuel Mendes e Nelson Fernandes?',
      options: ['Dream Boyz', 'B26', 'Os Lambas', 'SSP', 'Kassav'],
      answer: 'Dream Boyz'
    },
    {
      question: 'Quem é o músico angolano conhecido por sucessos como "Amor Robótico" e "Pirão"?',
      options: ['C4 Pedro', 'Matias Damásio', 'Filho do Zua', 'Anselmo Ralph', 'Heavy C'],
      answer: 'C4 Pedro'
    },
    {
      question: 'Qual é o grupo de kizomba conhecido por sucessos como "Meu Vício" e "Cúmplices"?',
      options: ['Dream Boyz', 'B26', 'Os Lambas', 'SSP', 'Anselmo Ralph e Amigos'],
      answer: 'Anselmo Ralph e Amigos'
    },
    {
      question: 'Quem é o músico angolano conhecido como o "Voz do Ouro Negro"?',
      options: ['Artur Nunes', 'Bonga', 'Carlos Burity', 'Waldemar Bastos', 'Eduardo Paim'],
      answer: 'Artur Nunes'
    },
    {
      question: 'Qual é o grupo de kizomba formado por Big Nelo, Paul G e Bruna Tatiana?',
      options: ['Os Lambas', 'B26', 'SSP', 'Noite e Dia', 'Brigadeiro 10 Pacotes'],
      answer: 'Noite e Dia'
    },
    {
      question: 'Quem é o músico angolano conhecido por sucessos como "Ilha do Amor" e "Amor É Cego"?',
      options: ['Heavy C', 'Matias Damásio', 'Filho do Zua', 'Anselmo Ralph', 'C4 Pedro'],
      answer: 'Matias Damásio'
    },
    {
      question: 'Quem é conhecido como o "Rei do Baião"?',
      options: ['Gilberto Gil', 'Caetano Veloso', 'Luiz Gonzaga', 'Tom Jobim', 'Chico Buarque'],
      answer: 'Luiz Gonzaga'
    },
    {
      question: 'Qual é o gênero musical caracterizado pelo uso de tambores e influências africanas, popularizado no estado da Bahia?',
      options: ['Forró', 'Samba', 'Frevo', 'Maracatu', 'Axé'],
      answer: 'Axé'
    },
    {
      question: 'Quem é a cantora brasileira conhecida como a "Pimentinha"?',
      options: ['Maria Bethânia', 'Elis Regina', 'Gal Costa', 'Rita Lee', 'Vanusa'],
      answer: 'Elis Regina'
    },
    {
      question: 'Qual é o movimento musical que teve seu auge na década de 1960, caracterizado por influências da jovem guarda e da tropicália?',
      options: ['Sertanejo', 'Bossa Nova', 'Jovem Guarda', 'Tropicália', 'MPB'],
      answer: 'Tropicália'
    },
    {
      question: 'Quem é o cantor e compositor conhecido como o "Maluco Beleza"?',
      options: ['Raul Seixas', 'Tim Maia', 'Chico Buarque', 'Caetano Veloso', 'Gilberto Gil'],
      answer: 'Raul Seixas'
    },
    {
      question: 'Qual é o gênero musical originado nos morros cariocas, caracterizado por batidas sincopadas e letras que abordam o cotidiano?',
      options: ['Forró', 'Sertanejo', 'Samba', 'Bossa Nova', 'Funk Carioca'],
      answer: 'Samba'
    },
    {
      question: 'Quem é o compositor de "Garota de Ipanema", uma das músicas brasileiras mais conhecidas internacionalmente?',
      options: ['Tom Jobim', 'Chico Buarque', 'Gilberto Gil', 'Caetano Veloso', 'Vinícius de Moraes'],
      answer: 'Tom Jobim'
    },
    {
      question: 'Qual é o movimento musical surgido na década de 1960, que buscou uma música popular mais elaborada e crítica?',
      options: ['Forró', 'Bossa Nova', 'Tropicália', 'Jovem Guarda', 'MPB'],
      answer: 'MPB'
    },
    {
      question: 'Quem é a cantora conhecida como a "Rainha do Rock Brasileiro"?',
      options: ['Gal Costa', 'Rita Lee', 'Maria Bethânia', 'Elis Regina', 'Vanusa'],
      answer: 'Rita Lee'
    },
    {
      question: 'Qual é o estilo musical caracterizado pela dança a dois e influências de ritmos africanos, europeus e indígenas?',
      options: ['Samba', 'Forró', 'Bossa Nova', 'Frevo', 'Sertanejo'],
      answer: 'Forró'
    },
    {
      question: 'Quem é o músico brasileiro conhecido como o "Bruxo do Cosme Velho"?',
      options: ['Gilberto Gil', 'Caetano Veloso', 'Chico Buarque', 'Tom Jobim', 'Raul Seixas'],
      answer: 'Raul Seixas'
    },
    {
      question: 'Qual é o movimento musical que reuniu artistas como Caetano Veloso, Gilberto Gil, Gal Costa e outros, buscando inovação na música brasileira?',
      options: ['Tropicália', 'MPB', 'Bossa Nova', 'Jovem Guarda', 'Sertanejo'],
      answer: 'Tropicália'
    },
    {
      question: 'Quem é o cantor conhecido como o "Malandro" da música brasileira?',
      options: ['Tom Jobim', 'Chico Buarque', 'Vinícius de Moraes', 'Caetano Veloso', 'Gilberto Gil'],
      answer: 'Chico Buarque'
    },
    {
      question: 'Qual é o estilo musical originado no Recôncavo Baiano, caracterizado pelo uso de berimbaus e atabaques?',
      options: ['Forró', 'Bossa Nova', 'Samba', 'Coco', 'Capoeira'],
      answer: 'Capoeira'
    },
    {
      question: 'Quem é o compositor de "Alegria, Alegria", uma das músicas emblemáticas da Tropicália?',
      options: ['Tom Jobim', 'Gilberto Gil', 'Caetano Veloso', 'Chico Buarque', 'Vinícius de Moraes'],
      answer: 'Caetano Veloso'
    },
    {
      question: 'Qual é o gênero musical brasileiro caracterizado por duplas que cantam músicas românticas?',
      options: ['Sertanejo', 'Bossa Nova', 'Forró', 'Samba', 'Funk Carioca'],
      answer: 'Sertanejo'
    },
    {
      question: 'Quem é a cantora brasileira conhecida como a "Abelha Rainha"?',
      options: ['Maria Bethânia', 'Elis Regina', 'Gal Costa', 'Rita Lee', 'Vanusa'],
      answer: 'Gal Costa'
    },
    {
      question: 'Qual é o movimento musical que teve seu auge na década de 1950, liderado por artistas como Cauby Peixoto e Angela Maria?',
      options: ['Bossa Nova', 'Tropicália', 'Jovem Guarda', 'Samba', 'MPB'],
      answer: 'Jovem Guarda'
    },
    {
      question: 'Quem é o cantor e compositor brasileiro conhecido como o "Poetinha"?',
      options: ['Tom Jobim', 'Chico Buarque', 'Vinícius de Moraes', 'Caetano Veloso', 'Gilberto Gil'],
      answer: 'Vinícius de Moraes'
    },
    {
      question: 'Qual é o gênero musical brasileiro que incorpora elementos da música africana, portuguesa e indígena?',
      options: ['Samba', 'Forró', 'Bossa Nova', 'Frevo', 'Maracatu'],
      answer: 'Maracatu'
    },
    {
      question: 'Quem é o cantor brasileiro conhecido como o "Rei do Rock Nacional"?',
      options: ['Raul Seixas', 'Tim Maia', 'Chico Buarque', 'Caetano Veloso', 'Gilberto Gil'],
      answer: 'Raul Seixas'
    },
    {
      question: 'Qual é o gênero musical caracterizado pela mistura de ritmos como samba, reggae, baião e outros, surgido no Maranhão?',
      options: ['Forró', 'Bossa Nova', 'Samba', 'Reggae', 'Bumba Meu Boi'],
      answer: 'Bumba Meu Boi'
    },
    {
      question: 'Quem é a cantora brasileira conhecida como "Pérola Negra"?',
      options: ['Maria Bethânia', 'Elis Regina', 'Vanusa', 'Rita Lee', 'Gal Costa'],
      answer: 'Vanusa'
    },
    {
      question: 'Qual é o estilo musical brasileiro que mistura influências africanas, indígenas e europeias, e é marcado pelo uso de tambores e percussão?',
      options: ['Forró', 'Samba', 'Bossa Nova', 'Maracatu', 'Afrobeat'],
      answer: 'Maracatu'
    },
    {
      question: 'Quem é o cantor brasileiro conhecido como o "Tim Maia"?',
      options: ['Raul Seixas', 'Tim Maia', 'Chico Buarque', 'Caetano Veloso', 'Gilberto Gil'],
      answer: 'Tim Maia'
    },
    {
      question: 'Qual é o gênero musical brasileiro que se originou na Bahia, misturando influências africanas, indígenas e europeias?',
      options: ['Samba', 'Forró', 'Bossa Nova', 'Axé', 'Frevo'],
      answer: 'Axé'
    },
    {
      question: 'Quem é o compositor de "Wave", uma das músicas mais conhecidas da Bossa Nova?',
      options: ['Tom Jobim', 'Chico Buarque', 'Vinícius de Moraes', 'Caetano Veloso', 'Gilberto Gil'],
      answer: 'Tom Jobim'
    },
    {
      question: 'Quem é o cantor e compositor britânico conhecido por hits como "Rocket Man" e "Candle in the Wind"?',
      options: ['David Bowie', 'Elton John', 'Rod Stewart', 'Sting', 'George Michael'],
      answer: 'Elton John'
    },
    {
      question: 'Qual é a banda de rock alternativo liderada por Kurt Cobain?',
      options: ['Pearl Jam', 'Soundgarden', 'Nirvana', 'Alice in Chains', 'Stone Temple Pilots'],
      answer: 'Nirvana'
    },
    {
      question: 'Quem é a cantora conhecida por hits como "Rolling in the Deep" e "Someone Like You"?',
      options: ['Adele', 'Beyoncé', 'Rihanna', 'Taylor Swift', 'Katy Perry'],
      answer: 'Adele'
    },
    {
      question: 'Qual é a banda de rock conhecida por hits como "Hotel California" e "Take It Easy"?',
      options: ['The Eagles', 'Fleetwood Mac', 'The Who', 'The Rolling Stones', 'Led Zeppelin'],
      answer: 'The Eagles'
    },
    // Adicione mais perguntas sobre música
  ],

  literatura: [
    {
      question: 'Quem escreveu "Dom Quixote"?',
      options: ['William Shakespeare', 'Miguel de Cervantes', 'Jane Austen', 'Charles Dickens', 'Fyodor Dostoevsky'],
      answer: 'Miguel de Cervantes'
    },
    {
      question: 'Quem é o autor de "Dom Quixote", considerado um dos maiores romances da literatura mundial?',
      options: ['William Shakespeare', 'Miguel de Cervantes', 'Fyodor Dostoevsky', 'Leo Tolstoy', 'Jane Austen'],
      answer: 'Miguel de Cervantes'
    },
    {
      question: 'Qual é o romance de Jane Austen que tem como protagonista Elizabeth Bennet?',
      options: ['Emma', 'Orgulho e Preconceito', 'Razão e Sensibilidade', 'Persuasão', 'Mansfield Park'],
      answer: 'Orgulho e Preconceito'
    },
    {
      question: 'Quem escreveu a obra "Cem Anos de Solidão"?',
      options: ['Gabriel García Márquez', 'Isabel Allende', 'Julio Cortázar', 'Pablo Neruda', 'Mario Vargas Llosa'],
      answer: 'Gabriel García Márquez'
    },
    {
      question: 'Qual é o romance que conta a história de Pip e sua ascensão social, escrito por Charles Dickens?',
      options: ['Grandes Esperanças', 'Oliver Twist', 'David Copperfield', 'Um Conto de Duas Cidades', 'Bleak House'],
      answer: 'Grandes Esperanças'
    },
    {
      question: 'Quem é o autor de "Crime e Castigo", uma obra fundamental da literatura russa?',
      options: ['Fyodor Dostoevsky', 'Leo Tolstoy', 'Anton Chekhov', 'Ivan Turgenev', 'Nikolai Gogol'],
      answer: 'Fyodor Dostoevsky'
    },
    {
      question: 'Qual é a obra de Mary Shelley que apresenta o personagem Victor Frankenstein e sua criatura?',
      options: ['O Médico e o Monstro', 'A Ilha do Dr. Moreau', 'Frankenstein', 'Drácula', 'O Retrato de Dorian Gray'],
      answer: 'Frankenstein'
    },
    {
      question: 'Quem escreveu "O Apanhador no Campo de Centeio", um clássico da literatura norte-americana?',
      options: ['J.D. Salinger', 'F. Scott Fitzgerald', 'Ernest Hemingway', 'John Steinbeck', 'Mark Twain'],
      answer: 'J.D. Salinger'
    },
    {
      question: 'Qual é a autora de "Harry Potter", uma série de livros de grande sucesso?',
      options: ['J.K. Rowling', 'Stephenie Meyer', 'George R.R. Martin', 'Suzanne Collins', 'Philip Pullman'],
      answer: 'J.K. Rowling'
    },
    {
      question: 'Quem é o autor de "O Senhor dos Anéis", uma das obras mais conhecidas da literatura de fantasia?',
      options: ['J.K. Rowling', 'J.R.R. Tolkien', 'George R.R. Martin', 'C.S. Lewis', 'Philip Pullman'],
      answer: 'J.R.R. Tolkien'
    },
    {
      question: 'Qual é a obra de Victor Hugo que conta a história do ex-prisioneiro Jean Valjean?',
      options: ['Os Miseráveis', 'O Corcunda de Notre-Dame', 'Nossa Senhora de Paris', 'Os Trabalhadores do Mar', 'Noventa e Três'],
      answer: 'Os Miseráveis'
    },
    {
      question: 'Quem é o autor de "Ensaio sobre a Cegueira", uma obra que aborda temas como sociedade e natureza humana?',
      options: ['Gabriel García Márquez', 'José Saramago', 'Julio Cortázar', 'Fernando Pessoa', 'António Lobo Antunes'],
      answer: 'José Saramago'
    },
    {
      question: 'Qual é o romance de F. Scott Fitzgerald que retrata a era do jazz nos Estados Unidos?',
      options: ['O Grande Gatsby', 'O Sol é para Todos', 'Matar um Rouxinol', 'Vidas Secas', 'O Apanhador no Campo de Centeio'],
      answer: 'O Grande Gatsby'
    },
    {
      question: 'Quem é a autora de "Jane Eyre", uma obra clássica da literatura inglesa?',
      options: ['Charlotte Brontë', 'Emily Brontë', 'Jane Austen', 'Virginia Woolf', 'Agatha Christie'],
      answer: 'Charlotte Brontë'
    },
    {
      question: 'Qual é o autor de "O Pequeno Príncipe", um dos livros mais traduzidos e vendidos do mundo?',
      options: ['Antoine de Saint-Exupéry', 'Albert Camus', 'Marcel Proust', 'Gustave Flaubert', 'Victor Hugo'],
      answer: 'Antoine de Saint-Exupéry'
    },
    {
      question: 'Quem escreveu "Doutor Jivago", uma obra que retrata a Revolução Russa?',
      options: ['Fyodor Dostoevsky', 'Leo Tolstoy', 'Boris Pasternak', 'Vladimir Nabokov', 'Aleksandr Solzhenitsyn'],
      answer: 'Boris Pasternak'
    },
    {
      question: 'Qual é a obra de George Orwell que aborda temas como totalitarismo e controle governamental?',
      options: ['1984', 'A Revolução dos Bichos', 'A Peste', 'Admirável Mundo Novo', 'Fahrenheit 451'],
      answer: '1984'
    },
    {
      question: 'Quem é o autor de "O Morro dos Ventos Uivantes", um romance gótico inglês?',
      options: ['Emily Brontë', 'Charlotte Brontë', 'Jane Austen', 'Daphne du Maurier', 'Oscar Wilde'],
      answer: 'Emily Brontë'
    },
    {
      question: 'Qual é a obra de Gabriel García Márquez que conta a história de um amor proibido em Macondo?',
      options: ['Cem Anos de Solidão', 'O Outono do Patriarca', 'Crônica de uma Morte Anunciada', 'O Amor nos Tempos do Cólera', 'Relato de um Náufrago'],
      answer: 'O Amor nos Tempos do Cólera'
    },
    {
      question: 'Quem é o autor de "O Iluminado", um clássico do terror?',
      options: ['Stephen King', 'Edgar Allan Poe', 'H.P. Lovecraft', 'Bram Stoker', 'Mary Shelley'],
      answer: 'Stephen King'
    },
    {
      question: 'Qual é o romance de Jane Austen que tem como protagonista Anne Elliot?',
      options: ['Emma', 'Orgulho e Preconceito', 'Persuasão', 'Razão e Sensibilidade', 'Mansfield Park'],
      answer: 'Persuasão'
    },
    {
      question: 'Quem é o autor de "Os Três Mosqueteiros", um clássico da literatura de aventura?',
      options: ['Victor Hugo', 'Alexandre Dumas', 'Gustave Flaubert', 'Émile Zola', 'Honoré de Balzac'],
      answer: 'Alexandre Dumas'
    },
    {
      question: 'Qual é a obra de Haruki Murakami que mistura realismo mágico com elementos surreais?',
      options: ['Norwegian Wood', 'Kafka à Beira-Mar', '1Q84', 'Crônica do Pássaro de Corda', 'Sputnik, Meu Amor'],
      answer: '1Q84'
    },
    {
      question: 'Quem é o autor de "Meio Sol Amarelo", um romance que retrata a Guerra Civil Nigeriana?',
      options: ['Chinua Achebe', 'Wole Soyinka', 'Chimamanda Ngozi Adichie', 'Ngũgĩ wa Thiong\'o', 'Ben Okri'],
      answer: 'Chimamanda Ngozi Adichie'
    },
    {
      question: 'Qual é a obra de Ngũgĩ wa Thiong\'o que critica o impacto do colonialismo na cultura africana?',
      options: ['Um Grain of Wheat', 'Petals of Blood', 'Weep Not, Child', 'Decolonising the Mind', 'Wizard of the Crow'],
      answer: 'Decolonising the Mind'
    },
    {
      question: 'Quem é o autor de "Things Fall Apart", um romance que examina a colonização e seus efeitos na cultura igbo?',
      options: ['Wole Soyinka', 'Ngũgĩ wa Thiong\'o', 'Chimamanda Ngozi Adichie', 'Chinua Achebe', 'Ben Okri'],
      answer: 'Chinua Achebe'
    },
    {
      question: 'Qual é a obra de Wole Soyinka que lida com a Guerra Civil Nigeriana e o regime militar?',
      options: ['The Man Died: Prison Notes', 'Ake: The Years of Childhood', 'Death and the King\'s Horseman', 'You Must Set Forth at Dawn', 'Season of Anomy'],
      answer: 'The Man Died: Prison Notes'
    },
    {
      question: 'Quem é o autor de "Blackass", uma sátira que aborda questões de identidade e pós-colonialismo?',
      options: ['Chimamanda Ngozi Adichie', 'Ben Okri', 'Teju Cole', 'Chigozie Obioma', 'A. Igoni Barrett'],
      answer: 'A. Igoni Barrett'
    },
    {
      question: 'Qual é a obra de Ben Okri que combina realismo mágico com questões sociais na Nigéria?',
      options: ['The Famished Road', 'Dangerous Love', 'In Arcadia', 'Stars of the New Curfew', 'The Freedom Artist'],
      answer: 'The Famished Road'
    },
    {
      question: 'Quem é o autor de "Weep Not, Child", um romance que aborda a luta pela independência no Quênia?',
      options: ['Chinua Achebe', 'Ngũgĩ wa Thiong\'o', 'Chimamanda Ngozi Adichie', 'Wole Soyinka', 'Ben Okri'],
      answer: 'Ngũgĩ wa Thiong\'o'
    },
    {
      question: 'Qual é a obra de Chinua Achebe que explora a influência do cristianismo na cultura africana?',
      options: ['Arrow of God', 'No Longer at Ease', 'Anthills of the Savannah', 'Things Fall Apart', 'A Man of the People'],
      answer: 'Arrow of God'
    },
    {
      question: 'Quem é o autor de "Purple Hibiscus", um romance que aborda temas de opressão e liberdade na Nigéria?',
      options: ['Chinua Achebe', 'Ngũgĩ wa Thiong\'o', 'Chimamanda Ngozi Adichie', 'Wole Soyinka', 'Ben Okri'],
      answer: 'Chimamanda Ngozi Adichie'
    },
    {
      question: 'Qual é a obra de Wole Soyinka que recebeu o Prêmio Nobel de Literatura em 1986?',
      options: ['The Man Died: Prison Notes', 'Ake: The Years of Childhood', 'Death and the King\'s Horseman', 'You Must Set Forth at Dawn', 'Season of Anomy'],
      answer: 'Death and the King\'s Horseman'
    },
    {
      question: 'Quem é o autor de "Wizard of the Crow", uma obra que satiriza regimes políticos africanos?',
      options: ['Chinua Achebe', 'Ngũgĩ wa Thiong\'o', 'Chimamanda Ngozi Adichie', 'Wole Soyinka', 'Ngũgĩ wa Thiong\'o'],
      answer: 'Ngũgĩ wa Thiong\'o'
    },
    {
      question: 'Qual é a obra de Ben Okri que mistura realismo mágico com questões políticas na Nigéria?',
      options: ['The Famished Road', 'Dangerous Love', 'In Arcadia', 'Stars of the New Curfew', 'The Freedom Artist'],
      answer: 'Stars of the New Curfew'
    },
    {
      question: 'Quem é o autor de "Half of a Yellow Sun", um romance que se passa durante a Guerra Civil Nigeriana?',
      options: ['Chinua Achebe', 'Ngũgĩ wa Thiong\'o', 'Chimamanda Ngozi Adichie', 'Wole Soyinka', 'Ben Okri'],
      answer: 'Chimamanda Ngozi Adichie'
    },
    {
      question: 'Qual é a obra de Chinua Achebe que aborda as consequências do colonialismo na Nigéria?',
      options: ['Arrow of God', 'No Longer at Ease', 'Anthills of the Savannah', 'Things Fall Apart', 'A Man of the People'],
      answer: 'No Longer at Ease'
    },
    {
      question: 'Quem é o autor de "The Beautyful Ones Are Not Yet Born", uma crítica à corrupção política em Gana?',
      options: ['Ngũgĩ wa Thiong\'o', 'Chinua Achebe', 'Wole Soyinka', 'Ayi Kwei Armah', 'Chimamanda Ngozi Adichie'],
      answer: 'Ayi Kwei Armah'
    },
    {
      question: 'Qual é a obra de Wole Soyinka que é uma crítica ao regime militar nigeriano?',
      options: ['The Man Died: Prison Notes', 'Ake: The Years of Childhood', 'Death and the King\'s Horseman', 'You Must Set Forth at Dawn', 'Season of Anomy'],
      answer: 'Season of Anomy'
    },
    {
      question: 'Quem é o autor de "Petals of Blood", uma obra que examina as consequências do neocolonialismo no Quênia?',
      options: ['Chinua Achebe', 'Ngũgĩ wa Thiong\'o', 'Chimamanda Ngozi Adichie', 'Wole Soyinka', 'Ngũgĩ wa Thiong\'o'],
      answer: 'Ngũgĩ wa Thiong\'o'
    },
    {
      question: 'Qual é a obra de Ben Okri que retrata um mundo distópico onde a natureza está em desequilíbrio?',
      options: ['The Famished Road', 'Dangerous Love', 'In Arcadia', 'Stars of the New Curfew', 'The Freedom Artist'],
      answer: 'The Freedom Artist'
    },
    {
      question: 'Quem é o autor de "The River Between", uma obra que explora conflitos culturais no Quênia?',
      options: ['Ngũgĩ wa Thiong\'o', 'Chinua Achebe', 'Wole Soyinka', 'Ayi Kwei Armah', 'Chimamanda Ngozi Adichie'],
      answer: 'Ngũgĩ wa Thiong\'o'
    },
    {
      question: 'Qual é a obra de Chimamanda Ngozi Adichie que aborda temas de identidade, migração e cultura nigeriana?',
      options: ['Half of a Yellow Sun', 'Americanah', 'Purple Hibiscus', 'We Should All Be Feminists', 'The Thing Around Your Neck'],
      answer: 'Americanah'
    },
    {
      question: 'Quem é o autor de "Anthills of the Savannah", uma obra que examina questões políticas na Nigéria?',
      options: ['Chinua Achebe', 'Ngũgĩ wa Thiong\'o', 'Wole Soyinka', 'Ayi Kwei Armah', 'Chimamanda Ngozi Adichie'],
      answer: 'Chinua Achebe'
    },
    {
      question: 'Qual é a obra de Wole Soyinka que aborda a cultura iorubá e questões de identidade?',
      options: ['The Man Died: Prison Notes', 'Ake: The Years of Childhood', 'Death and the King\'s Horseman', 'You Must Set Forth at Dawn', 'A Dance of the Forests'],
      answer: 'A Dance of the Forests'
    },
    {
      question: 'Quem é o autor de "Disgrace", um romance que explora temas de pós-apartheid na África do Sul?',
      options: ['J.M. Coetzee', 'Nadine Gordimer', 'Chinua Achebe', 'Ngũgĩ wa Thiong\'o', 'Wole Soyinka'],
      answer: 'J.M. Coetzee'
    },
    {
      question: 'Qual é a obra de Ben Okri que é uma coleção de contos explorando a vida na Nigéria?',
      options: ['The Famished Road', 'Dangerous Love', 'In Arcadia', 'Stars of the New Curfew', 'Tales of Freedom'],
      answer: 'Tales of Freedom'
    },
    {
      question: 'Quem é o autor de "Mayombe", uma obra que aborda a luta pela independência em Angola?',
      options: ['Agualusa', 'Ondjaki', 'Pepetela', 'Luandino Vieira', 'Mia Couto'],
      answer: 'Pepetela'
    },
    {
      question: 'Qual é o romance de José Eduardo Agualusa que mistura realidade e ficção em Luanda?',
      options: ['Estação das Chuvas', 'Teoria Geral do Esquecimento', 'A Sociedade dos Sonhadores Involuntários', 'Nação Crioula', 'O Vendedor de Passados'],
      answer: 'Teoria Geral do Esquecimento'
    },
    {
      question: 'Quem é o autor de "A Vida no Céu", uma obra que explora a experiência da guerra civil em Angola?',
      options: ['Agualusa', 'Ondjaki', 'Pepetela', 'Luandino Vieira', 'Mia Couto'],
      answer: 'Ondjaki'
    },
    {
      question: 'Qual é a obra de Luandino Vieira que conta a história de um prisioneiro político em Luanda?',
      options: ['Nosso Musseque', 'Vidas Novas', 'A Vida Verdadeira de Domingos Xavier', 'A Escola do Mau e do Bem', 'Luanda, Bom Fim'],
      answer: 'A Vida Verdadeira de Domingos Xavier'
    },
    {
      question: 'Quem é a autora de "A Redenção de Camuaxi", uma obra que retrata as consequências da guerra civil em Angola?',
      options: ['Agualusa', 'Ondjaki', 'Pepetela', 'Lopito Feijóo', 'Paulina Chiziane'],
      answer: 'Paulina Chiziane'
    },
    {
      question: 'Qual é a obra de Pepetela que explora a vida em um musseque em Luanda?',
      options: ['Mayombe', 'Parábola do Cágado Velho', 'A Montanha da Água Lilás', 'A Gloriosa Família', 'A Geração da Utopia'],
      answer: 'Parábola do Cágado Velho'
    },
    {
      question: 'Quem é o autor de "Nação Crioula", um romance que aborda a cultura angolana durante o período colonial?',
      options: ['Agualusa', 'Ondjaki', 'Pepetela', 'Luandino Vieira', 'Mia Couto'],
      answer: 'José Eduardo Agualusa'
    },
    {
      question: 'Qual é a obra de Ondjaki que retrata a vida de um grupo de crianças em Luanda?',
      options: ['Bom Dia Camaradas', 'Os Transparentes', 'Quantas Madrugadas Tem a Noite', 'AvóDezanove e o Segredo do Soviético', 'O Assobiador'],
      answer: 'Os Transparentes'
    },
    {
      question: 'Quem é o autor de "Parábola do Cágado Velho", um livro que examina questões sociais e políticas em Angola?',
      options: ['Agualusa', 'Ondjaki', 'Pepetela', 'Luandino Vieira', 'Mia Couto'],
      answer: 'Pepetela'
    },
    {
      question: 'Qual é a obra de Luandino Vieira que aborda a vida em um musseque durante o colonialismo português?',
      options: ['Nosso Musseque', 'Vidas Novas', 'A Vida Verdadeira de Domingos Xavier', 'A Escola do Mau e do Bem', 'Luanda, Bom Fim'],
      answer: 'Nosso Musseque'
    },
    {
      question: 'Quem é o autor de "A Sociedade dos Sonhadores Involuntários", um romance que explora o poder da imaginação?',
      options: ['Agualusa', 'Ondjaki', 'Pepetela', 'Luandino Vieira', 'Mia Couto'],
      answer: 'José Eduardo Agualusa'
    },
    {
      question: 'Qual é a obra de Ondjaki que se passa em Luanda e acompanha a vida de uma família?',
      options: ['Bom Dia Camaradas', 'Os Transparentes', 'Quantas Madrugadas Tem a Noite', 'AvóDezanove e o Segredo do Soviético', 'O Assobiador'],
      answer: 'Quantas Madrugadas Tem a Noite'
    },
    {
      question: 'Quem é o autor de "A Montanha da Água Lilás", um romance que explora a história de Angola?',
      options: ['Agualusa', 'Ondjaki', 'Pepetela', 'Luandino Vieira', 'Mia Couto'],
      answer: 'Pepetela'
    },
    {
      question: 'Qual é a obra de Pepetela que se passa em Luanda e aborda a corrupção no contexto político?',
      options: ['Mayombe', 'Parábola do Cágado Velho', 'A Montanha da Água Lilás', 'A Gloriosa Família', 'A Geração da Utopia'],
      answer: 'A Geração da Utopia'
    },
    {
      question: 'Quem é a autora moçambicana que escreveu "Terra Sonâmbula"?',
      options: ['Paulina Chiziane', 'Mia Couto', 'Lília Momplé', 'Noémia de Sousa', 'Orlanda Amarílis'],
      answer: 'Mia Couto'
    },
    {
      question: 'Qual é a obra de Pepetela que aborda a vida durante a guerra de independência em Angola?',
      options: ['Mayombe', 'Parábola do Cágado Velho', 'A Montanha da Água Lilás', 'A Gloriosa Família', 'A Geração da Utopia'],
      answer: 'Mayombe'
    },
    {
      question: 'Quem é o autor de "Bom Dia Camaradas", um romance que se passa durante o regime colonial português em Angola?',
      options: ['Agualusa', 'Ondjaki', 'Pepetela', 'Luandino Vieira', 'Mia Couto'],
      answer: 'Ondjaki'
    },
    {
      question: 'Qual é a obra de Luandino Vieira que explora as memórias de um prisioneiro político em Luanda?',
      options: ['Nosso Musseque', 'Vidas Novas', 'A Vida Verdadeira de Domingos Xavier', 'A Escola do Mau e do Bem', 'Luanda, Bom Fim'],
      answer: 'Vidas Novas'
    },
    {
      question: 'Quem é o autor de "Estação das Chuvas", um romance que se passa em Angola e Portugal?',
      options: ['Agualusa', 'Ondjaki', 'Pepetela', 'Luandino Vieira', 'Mia Couto'],
      answer: 'José Eduardo Agualusa'
    },
    {
      question: 'Quem é a autora de "Purple Hibiscus", um romance que aborda temas de opressão e liberdade na Nigéria?',
      options: ['Chinua Achebe', 'Ngũgĩ wa Thiong\'o', 'Chimamanda Ngozi Adichie', 'Wole Soyinka', 'Ben Okri'],
      answer: 'Chimamanda Ngozi Adichie'
    },
    {
      question: 'Qual é a obra de Chinua Achebe que explora as complexidades da tradição e mudança na Nigéria?',
      options: ['Arrow of God', 'No Longer at Ease', 'Anthills of the Savannah', 'Things Fall Apart', 'A Man of the People'],
      answer: 'Anthills of the Savannah'
    },
    {
      question: 'Quem é o autor de "The Beautyful Ones Are Not Yet Born", uma crítica à corrupção política em Gana?',
      options: ['Ngũgĩ wa Thiong\'o', 'Chinua Achebe', 'Wole Soyinka', 'Ayi Kwei Armah', 'Chimamanda Ngozi Adichie'],
      answer: 'Ayi Kwei Armah'
    },
    {
      question: 'Qual é a obra de Wole Soyinka que é uma crítica ao regime militar nigeriano?',
      options: ['The Man Died: Prison Notes', 'Ake: The Years of Childhood', 'Death and the King\'s Horseman', 'You Must Set Forth at Dawn', 'Season of Anomy'],
      answer: 'Season of Anomy'
    },
    {
      question: 'Quem é o autor de "A Insustentável Leveza do Ser", uma obra filosófica e romântica?',
      options: ['Milan Kundera', 'Karl Ove Knausgård', 'Haruki Murakami', 'Paulo Coelho', 'Julian Barnes'],
      answer: 'Milan Kundera'
    },
    {
      question: 'Qual é a obra de Aldous Huxley que descreve uma sociedade futurista distópica?',
      options: ['Admirável Mundo Novo', '1984', 'Fahrenheit 451', 'O Conto da Aia', 'Neuromancer'],
      answer: 'Admirável Mundo Novo'
    },
    {
      question: 'Quem é o autor de "O Sol é para Todos", um livro que aborda questões de racismo e justiça?',
      options: ['Harper Lee', 'John Steinbeck', 'F. Scott Fitzgerald', 'Ernest Hemingway', 'Mark Twain'],
      answer: 'Harper Lee'
    },
    {
      question: 'Qual é a obra de Fyodor Dostoevsky que explora temas como moralidade e livre-arbítrio?',
      options: ['Crime e Castigo', 'Os Irmãos Karamazov', 'O Idiota', 'O Jogador', 'Noites Brancas'],
      answer: 'Os Irmãos Karamazov'
    },
    {
      question: 'Quem é o autor de "O Retrato de Dorian Gray", uma obra que aborda o pacto com o diabo?',
      options: ['Oscar Wilde', 'Bram Stoker', 'Mary Shelley', 'Robert Louis Stevenson', 'Edgar Allan Poe'],
      answer: 'Oscar Wilde'
    },
    // Adicione mais perguntas sobre literatura
  ],

  tecnologia: [
    {
      question: 'Em que ano foi lançado o primeiro iPhone?',
      options: ['2005', '2007', '2009', '2010', '2012'],
      answer: '2007'
    },
    {
      question: 'Qual é a empresa fundada por Steve Jobs, Steve Wozniak e Ronald Wayne?',
      options: ['Microsoft', 'IBM', 'Apple', 'Google', 'Facebook'],
      answer: 'Apple'
    },
    {
      question: 'Quem é considerado o "pai da computação"?',
      options: ['Bill Gates', 'Alan Turing', 'Tim Berners-Lee', 'Mark Zuckerberg', 'Elon Musk'],
      answer: 'Alan Turing'
    },
    {
      question: 'O que a sigla "HTML" representa na tecnologia web?',
      options: ['Hyper Text Markup Language', 'High Tech Machine Learning', 'Hyper Transfer and Management Language', 'Hyperlink and Text Management Language', 'Highly Technical Modern Language'],
      answer: 'Hyper Text Markup Language'
    },
    {
      question: 'Qual é o sistema operacional padrão dos dispositivos iPhone?',
      options: ['Android', 'iOS', 'Windows Phone', 'BlackBerry OS', 'Symbian OS'],
      answer: 'iOS'
    },
    {
      question: 'Quem é conhecido como o co-fundador da Microsoft?',
      options: ['Steve Jobs', 'Bill Gates', 'Mark Zuckerberg', 'Elon Musk', 'Jeff Bezos'],
      answer: 'Bill Gates'
    },
    {
      question: 'Qual é a linguagem de programação utilizada para criar páginas web dinâmicas?',
      options: ['Java', 'Python', 'C++', 'Ruby', 'JavaScript'],
      answer: 'JavaScript'
    },
    {
      question: 'O que significa a sigla "URL"?',
      options: ['Universal Resource Locator', 'Uniform Resource Locator', 'Unified Resource Locator', 'Universal Reference Locator', 'Unified Reference Locator'],
      answer: 'Uniform Resource Locator'
    },
    {
      question: 'Quem é o fundador da Tesla Motors?',
      options: ['Elon Musk', 'Jeff Bezos', 'Bill Gates', 'Mark Zuckerberg', 'Larry Page'],
      answer: 'Elon Musk'
    },
    {
      question: 'Qual é o navegador de internet mais utilizado no mundo?',
      options: ['Safari', 'Firefox', 'Microsoft Edge', 'Chrome', 'Opera'],
      answer: 'Chrome'
    },
    {
      question: 'O que significa a sigla "PDF"?',
      options: ['Portable Document Format', 'Personal Document Format', 'Public Document Format', 'Printable Document Format', 'Powerful Document Format'],
      answer: 'Portable Document Format'
    },
    {
      question: 'Qual é a empresa por trás do sistema operacional Android?',
      options: ['Apple', 'Microsoft', 'Google', 'Samsung', 'Sony'],
      answer: 'Google'
    },
    {
      question: 'Quem é o CEO da Amazon?',
      options: ['Jeff Bezos', 'Elon Musk', 'Bill Gates', 'Tim Cook', 'Mark Zuckerberg'],
      answer: 'Jeff Bezos'
    },
    {
      question: 'Qual é o nome do primeiro satélite artificial lançado pela União Soviética em 1957?',
      options: ['Apollo 11', 'Vostok 1', 'Hubble', 'Sputnik 1', 'Explorer 1'],
      answer: 'Sputnik 1'
    },
    {
      question: 'Quem é conhecido como o "pai da Inteligência Artificial"?',
      options: ['Elon Musk', 'Bill Gates', 'Alan Turing', 'Mark Zuckerberg', 'John McCarthy'],
      answer: 'John McCarthy'
    },
    {
      question: 'O que significa a sigla "ISP" em termos de internet?',
      options: ['Internet Service Provider', 'International Service Provider', 'Integrated System Provider', 'Internet Security Protocol', 'Internet Speed Protocol'],
      answer: 'Internet Service Provider'
    },
    {
      question: 'Qual é o termo utilizado para descrever o ato de copiar arquivos de um computador para a internet?',
      options: ['Download', 'Upload', 'Linking', 'Streaming', 'Sharing'],
      answer: 'Upload'
    },
    {
      question: 'Qual é o sistema operacional de código aberto baseado no kernel Linux?',
      options: ['Windows', 'macOS', 'Ubuntu', 'Android', 'iOS'],
      answer: 'Ubuntu'
    },
    {
      question: 'Quem é o co-fundador da Microsoft que é conhecido por sua filantropia?',
      options: ['Steve Jobs', 'Bill Gates', 'Mark Zuckerberg', 'Elon Musk', 'Larry Page'],
      answer: 'Bill Gates'
    },
    {
      question: 'O que significa a sigla "VPN"?',
      options: ['Virtual Private Network', 'Very Personal Network', 'Virtual Program Network', 'Verified Private Network', 'Virtual Public Network'],
      answer: 'Virtual Private Network'
    },
    {
      question: 'Qual é a rede social conhecida por seus posts de 280 caracteres?',
      options: ['Facebook', 'Instagram', 'Twitter', 'LinkedIn', 'Snapchat'],
      answer: 'Twitter'
    },
    {
      question: 'O que significa a sigla "AI" em tecnologia?',
      options: ['Artificial Integration', 'Advanced Interface', 'Automated Intelligence', 'Artificial Intelligence', 'Absolute Invention'],
      answer: 'Artificial Intelligence'
    },
    {
      question: 'Qual é o nome da primeira missão tripulada à Lua?',
      options: ['Apollo 11', 'Vostok 1', 'Gemini 7', 'Mercury 3', 'Sputnik 1'],
      answer: 'Apollo 11'
    },
    {
      question: 'Qual é a empresa fundada por Steve Jobs, Steve Wozniak e Ronald Wayne?',
      options: ['Microsoft', 'IBM', 'Apple', 'Google', 'Facebook'],
      answer: 'Apple'
    },
    {
      question: 'Quem é considerado o "pai da computação"?',
      options: ['Bill Gates', 'Alan Turing', 'Tim Berners-Lee', 'Mark Zuckerberg', 'Elon Musk'],
      answer: 'Alan Turing'
    },
    {
      question: 'O que a sigla "HTML" representa na tecnologia web?',
      options: ['Hyper Text Markup Language', 'High Tech Machine Learning', 'Hyper Transfer and Management Language', 'Hyperlink and Text Management Language', 'Highly Technical Modern Language'],
      answer: 'Hyper Text Markup Language'
    },
    {
      question: 'Qual é o sistema operacional padrão dos dispositivos iPhone?',
      options: ['Android', 'iOS', 'Windows Phone', 'BlackBerry OS', 'Symbian OS'],
      answer: 'iOS'
    },
    {
      question: 'Quem é conhecido como o co-fundador da Microsoft?',
      options: ['Steve Jobs', 'Bill Gates', 'Mark Zuckerberg', 'Elon Musk', 'Jeff Bezos'],
      answer: 'Bill Gates'
    },
    {
      question: 'Qual é a linguagem de programação utilizada para criar páginas web dinâmicas?',
      options: ['Java', 'Python', 'C++', 'Ruby', 'JavaScript'],
      answer: 'JavaScript'
    },
    {
      question: 'O que significa a sigla "URL"?',
      options: ['Universal Resource Locator', 'Uniform Resource Locator', 'Unified Resource Locator', 'Universal Reference Locator', 'Unified Reference Locator'],
      answer: 'Uniform Resource Locator'
    },
    {
      question: 'Quem é o fundador da Tesla Motors?',
      options: ['Elon Musk', 'Jeff Bezos', 'Bill Gates', 'Mark Zuckerberg', 'Larry Page'],
      answer: 'Elon Musk'
    },
    {
      question: 'Qual é o navegador de internet mais utilizado no mundo?',
      options: ['Safari', 'Firefox', 'Microsoft Edge', 'Chrome', 'Opera'],
      answer: 'Chrome'
    },
    {
      question: 'O que significa a sigla "PDF"?',
      options: ['Portable Document Format', 'Personal Document Format', 'Public Document Format', 'Printable Document Format', 'Powerful Document Format'],
      answer: 'Portable Document Format'
    },
    {
      question: 'Qual é a empresa por trás do sistema operacional Android?',
      options: ['Apple', 'Microsoft', 'Google', 'Samsung', 'Sony'],
      answer: 'Google'
    },
    {
      question: 'Quem é o CEO da Amazon?',
      options: ['Jeff Bezos', 'Elon Musk', 'Bill Gates', 'Tim Cook', 'Mark Zuckerberg'],
      answer: 'Jeff Bezos'
    },
    {
      question: 'Qual é o nome do primeiro satélite artificial lançado pela União Soviética em 1957?',
      options: ['Apollo 11', 'Vostok 1', 'Hubble', 'Sputnik 1', 'Explorer 1'],
      answer: 'Sputnik 1'
    },
    {
      question: 'Quem é conhecido como o "pai da Inteligência Artificial"?',
      options: ['Elon Musk', 'Bill Gates', 'Alan Turing', 'Mark Zuckerberg', 'John McCarthy'],
      answer: 'John McCarthy'
    },
    {
      question: 'O que significa a sigla "ISP" em termos de internet?',
      options: ['Internet Service Provider', 'International Service Provider', 'Integrated System Provider', 'Internet Security Protocol', 'Internet Speed Protocol'],
      answer: 'Internet Service Provider'
    },
    {
      question: 'Qual é o termo utilizado para descrever o ato de copiar arquivos de um computador para a internet?',
      options: ['Download', 'Upload', 'Linking', 'Streaming', 'Sharing'],
      answer: 'Upload'
    },
    {
      question: 'Qual é o sistema operacional de código aberto baseado no kernel Linux?',
      options: ['Windows', 'macOS', 'Ubuntu', 'Android', 'iOS'],
      answer: 'Ubuntu'
    },
    {
      question: 'Quem é o co-fundador da Microsoft que é conhecido por sua filantropia?',
      options: ['Steve Jobs', 'Bill Gates', 'Mark Zuckerberg', 'Elon Musk', 'Larry Page'],
      answer: 'Bill Gates'
    },
    {
      question: 'O que significa a sigla "VPN"?',
      options: ['Virtual Private Network', 'Very Personal Network', 'Virtual Program Network', 'Verified Private Network', 'Virtual Public Network'],
      answer: 'Virtual Private Network'
    },
    {
      question: 'Qual é a rede social conhecida por seus posts de 280 caracteres?',
      options: ['Facebook', 'Instagram', 'Twitter', 'LinkedIn', 'Snapchat'],
      answer: 'Twitter'
    },
    {
      question: 'O que significa a sigla "AI" em tecnologia?',
      options: ['Artificial Integration', 'Advanced Interface', 'Automated Intelligence', 'Artificial Intelligence', 'Absolute Invention'],
      answer: 'Artificial Intelligence'
    },
    {
      question: 'Qual é o nome da primeira missão tripulada à Lua?',
      options: ['Apollo 11', 'Vostok 1', 'Gemini 7', 'Mercury 3', 'Sputnik 1'],
      answer: 'Apollo 11'
    },
    {
      question: 'Quem é o fundador do Facebook?',
      options: ['Bill Gates', 'Mark Zuckerberg', 'Elon Musk', 'Jeff Bezos', 'Larry Page'],
      answer: 'Mark Zuckerberg'
    },
    {
      question: 'Qual é a linguagem de programação usada para desenvolver aplicativos iOS?',
      options: ['Java', 'C++', 'Swift', 'Python', 'Ruby'],
      answer: 'Swift'
    },
    {
      question: 'O que significa a sigla "AI" em tecnologia?',
      options: ['Artificial Integration', 'Advanced Interface', 'Automated Intelligence', 'Artificial Intelligence', 'Absolute Invention'],
      answer: 'Artificial Intelligence'
    },
    {
      question: 'Qual é o nome do robô explorador da NASA que pousou em Marte em 2012?',
      options: ['Opportunity', 'Curiosity', 'Pathfinder', 'Spirit', 'Insight'],
      answer: 'Curiosity'
    },
    // ... (adicionar mais perguntas conforme necessário)

    {
      question: 'Quem é o co-fundador da Microsoft conhecido por sua filantropia?',
      options: ['Bill Gates', 'Steve Jobs', 'Mark Zuckerberg', 'Elon Musk', 'Larry Page'],
      answer: 'Bill Gates'
    },
    {
      question: 'Qual é o sistema operacional da Apple para computadores pessoais?',
      options: ['Windows', 'macOS', 'Linux', 'iOS', 'Android'],
      answer: 'macOS'
    },
    {
      question: 'O que significa a sigla "URL"?',
      options: ['Uniform Resource Locator', 'Universal Resource Locator', 'Unified Resource Locator', 'Ultra-Red Link', 'User Ready Link'],
      answer: 'Uniform Resource Locator'
    },
    {
      question: 'Quem é o fundador da SpaceX e Tesla?',
      options: ['Bill Gates', 'Elon Musk', 'Jeff Bezos', 'Mark Zuckerberg', 'Larry Page'],
      answer: 'Elon Musk'
    },
    {
      question: 'Qual é o nome do primeiro computador pessoal fabricado pela IBM?',
      options: ['IBM PC', 'Apple II', 'Commodore 64', 'TRS-80', 'Amiga 1000'],
      answer: 'IBM PC'
    },
    {
      question: 'O que significa a sigla "HTML5"?',
      options: ['Hyper Text Markup Language 5', 'High Tech Machine Learning 5', 'Hyperlink and Text Management Language 5', 'Highly Technical Modern Language 5', 'Hyper Transfer and Management Language 5'],
      answer: 'Hyper Text Markup Language 5'
    },
    {
      question: 'Qual é o navegador de internet desenvolvido pela Mozilla Foundation?',
      options: ['Chrome', 'Safari', 'Internet Explorer', 'Edge', 'Firefox'],
      answer: 'Firefox'
    },
    {
      question: 'O que significa a sigla "IoT"?',
      options: ['Internet of Things', 'Input Output Technology', 'Integrated Online Technology', 'International Operating System', 'Internet Over Time'],
      answer: 'Internet of Things'
    },
    {
      question: 'Quem é o co-fundador da Microsoft que é conhecido por sua filantropia?',
      options: ['Steve Jobs', 'Mark Zuckerberg', 'Bill Gates', 'Larry Page', 'Jeff Bezos'],
      answer: 'Bill Gates'
    },
    {
      question: 'Qual é o nome do navegador de internet desenvolvido pela Microsoft?',
      options: ['Firefox', 'Chrome', 'Edge', 'Safari', 'Internet Explorer'],
      answer: 'Edge'
    },
    {
      question: 'O que significa a sigla "AI" em tecnologia?',
      options: ['Artificial Integration', 'Automated Interface', 'Advanced Intelligence', 'Artificial Intelligence', 'Absolute Invention'],
      answer: 'Artificial Intelligence'
    },
    {
      question: 'Quem é conhecido como o "pai da computação moderna"?',
      options: ['Alan Turing', 'Bill Gates', 'Steve Jobs', 'Mark Zuckerberg', 'Tim Berners-Lee'],
      answer: 'Alan Turing'
    },
    {
      question: 'O que significa a sigla "ISP" em termos de internet?',
      options: ['Internet Security Protocol', 'Internet Service Provider', 'Integrated System Provider', 'Internet Speed Protocol', 'International Service Provider'],
      answer: 'Internet Service Provider'
    },
    {
      question: 'Qual é o nome do primeiro smartphone lançado pela Apple?',
      options: ['iPhone 2G', 'iPhone 3G', 'iPhone 4', 'iPhone 5', 'iPhone 6'],
      answer: 'iPhone 2G'
    },
    {
      question: 'Quem é o co-fundador da Apple junto com Steve Jobs?',
      options: ['Bill Gates', 'Steve Wozniak', 'Mark Zuckerberg', 'Elon Musk', 'Larry Page'],
      answer: 'Steve Wozniak'
    },
    {
      question: 'Qual é o nome do primeiro satélite artificial lançado pela União Soviética?',
      options: ['Apollo 11', 'Vostok 1', 'Hubble', 'Sputnik 1', 'Explorer 1'],
      answer: 'Sputnik 1'
    },
    {
      question: 'O que significa a sigla "PDF"?',
      options: ['Portable Document Format', 'Personal Document Format', 'Public Document Format', 'Printable Document Format', 'Powerful Document Format'],
      answer: 'Portable Document Format'
    },
    {
      question: 'Qual é o nome do sistema operacional de código aberto baseado no kernel Linux?',
      options: ['iOS', 'Windows', 'Android', 'Ubuntu', 'macOS'],
      answer: 'Ubuntu'
    },
    {
      question: 'Quem é o fundador da Tesla Motors?',
      options: ['Elon Musk', 'Jeff Bezos', 'Bill Gates', 'Mark Zuckerberg', 'Tim Cook'],
      answer: 'Elon Musk'
    },
    {
      question: 'O que significa a sigla "CPU"?',
      options: ['Central Processing Unit', 'Central Process Unit', 'Computer Personal Unit', 'Central Processor Unit', 'Computer Processing Unit'],
      answer: 'Central Processing Unit'
    },
    {
      question: 'Qual é o nome do navegador de internet desenvolvido pela Google?',
      options: ['Safari', 'Internet Explorer', 'Edge', 'Firefox', 'Chrome'],
      answer: 'Chrome'
    },
    {
      question: 'O que significa a sigla "RAM" em termos de hardware de computador?',
      options: ['Random Access Memory', 'Read-Only Memory', 'Redundant Array of Memory', 'Real-time Access Memory', 'Remote Access Memory'],
      answer: 'Random Access Memory'
    },
    {
      question: 'Quem é o CEO da Amazon?',
      options: ['Jeff Bezos', 'Elon Musk', 'Bill Gates', 'Mark Zuckerberg', 'Tim Cook'],
      answer: 'Jeff Bezos'
    },
    {
      question: 'Qual é o nome do primeiro navegador de internet?',
      options: ['Chrome', 'Mozilla', 'Safari', 'Internet Explorer', 'Netscape Navigator'],
      answer: 'Netscape Navigator'
    },
    {
      question: 'O que significa a sigla "VPN"?',
      options: ['Virtual Private Network', 'Very Personal Network', 'Virtual Program Network', 'Verified Private Network', 'Virtual Public Network'],
      answer: 'Virtual Private Network'
    },
    {
      question: 'Quem é conhecido como o "pai da Inteligência Artificial"?',
      options: ['Elon Musk', 'Bill Gates', 'Alan Turing', 'Mark Zuckerberg', 'John McCarthy'],
      answer: 'John McCarthy'
    },
    {
      question: 'O que significa a sigla "DNS"?',
      options: ['Domain Name System', 'Digital Network System', 'Dynamic Naming System', 'Distributed Network System', 'Dual Naming System'],
      answer: 'Domain Name System'
    },
    {
      question: 'Qual é o nome do sistema operacional móvel da Google?',
      options: ['iOS', 'Windows Mobile', 'BlackBerry OS', 'Android', 'Symbian OS'],
      answer: 'Android'
    },
    {
      question: 'Quem é conhecido como o "pai da World Wide Web"?',
      options: ['Tim Berners-Lee', 'Vint Cerf', 'Bill Gates', 'Mark Zuckerberg', 'Elon Musk'],
      answer: 'Tim Berners-Lee'
    },
    {
      question: 'O que significa a sigla "DNS"?',
      options: ['Domain Name System', 'Digital Network System', 'Dynamic Naming System', 'Distributed Network System', 'Dual Naming System'],
      answer: 'Domain Name System'
    },
    {
      question: 'Qual é a linguagem de programação usada para desenvolver aplicativos Android?',
      options: ['Java', 'Swift', 'Python', 'C++', 'Kotlin'],
      answer: 'Java'
    },
    {
      question: 'Qual é o nome do assistente virtual da Amazon?',
      options: ['Siri', 'Alexa', 'Cortana', 'Google Assistant', 'Bixby'],
      answer: 'Alexa'
    },
    {
      question: 'O que significa a sigla "HTML"?',
      options: ['Hyper Text Markup Language', 'High Tech Machine Learning', 'Hyperlink and Text Management Language', 'Highly Technical Modern Language', 'Hyper Transfer and Management Language'],
      answer: 'Hyper Text Markup Language'
    },
    {
      question: 'Quem é considerado o "pai da computação moderna"?',
      options: ['Alan Turing', 'Bill Gates', 'Steve Jobs', 'Tim Berners-Lee', 'Mark Zuckerberg'],
      answer: 'Alan Turing'
    },
    {
      question: 'O que significa a sigla "ISP" em termos de internet?',
      options: ['Internet Service Provider', 'International Service Provider', 'Integrated System Provider', 'Internet Speed Protocol', 'Internet Security Protocol'],
      answer: 'Internet Service Provider'
    },
    {
      question: 'Qual é o nome do navegador de internet da Microsoft?',
      options: ['Chrome', 'Firefox', 'Safari', 'Edge', 'Opera'],
      answer: 'Edge'
    },
    {
      question: 'O que significa a sigla "VPN"?',
      options: ['Virtual Private Network', 'Very Personal Network', 'Virtual Program Network', 'Verified Private Network', 'Virtual Public Network'],
      answer: 'Virtual Private Network'
    },
    {
      question: 'Quem é o CEO da Tesla Motors?',
      options: ['Elon Musk', 'Jeff Bezos', 'Bill Gates', 'Mark Zuckerberg', 'Tim Cook'],
      answer: 'Elon Musk'
    },
    {
      question: 'Qual é o nome do primeiro computador pessoal lançado pela IBM em 1981?',
      options: ['Apple II', 'Commodore 64', 'Atari 2600', 'IBM PC', 'TRS-80'],
      answer: 'IBM PC'
    },
    {
      question: 'O que significa a sigla "AI" em tecnologia?',
      options: ['Artificial Integration', 'Advanced Interface', 'Automated Intelligence', 'Artificial Intelligence', 'Absolute Invention'],
      answer: 'Artificial Intelligence'
    },
    {
      question: 'Qual é o nome do sistema operacional de código aberto baseado no kernel Linux?',
      options: ['Windows', 'iOS', 'Android', 'Ubuntu', 'macOS'],
      answer: 'Ubuntu'
    },
    {
      question: 'Quem é conhecido como o "pai da internet"?',
      options: ['Tim Berners-Lee', 'Vint Cerf', 'Elon Musk', 'Mark Zuckerberg', 'Bill Gates'],
      answer: 'Vint Cerf'
    },
    {
      question: 'O que significa a sigla "URL"?',
      options: ['Universal Resource Locator', 'Uniform Resource Locator', 'Unified Resource Locator', 'Universal Reference Locator', 'Unified Reference Locator'],
      answer: 'Uniform Resource Locator'
    },
    {
      question: 'Qual é o nome do primeiro navegador de internet?',
      options: ['Chrome', 'Mozilla', 'Safari', 'Internet Explorer', 'Netscape Navigator'],
      answer: 'Netscape Navigator'
    },
    {
      question: 'O que significa a sigla "RAM" em termos de hardware de computador?',
      options: ['Random Access Memory', 'Read-Only Memory', 'Redundant Array of Memory', 'Real-time Access Memory', 'Remote Access Memory'],
      answer: 'Random Access Memory'
    },
    {
      question: 'Quem é o co-fundador da Apple junto com Steve Jobs?',
      options: ['Bill Gates', 'Steve Wozniak', 'Mark Zuckerberg', 'Elon Musk', 'Larry Page'],
      answer: 'Steve Wozniak'
    },
    {
      question: 'Qual é o nome do primeiro smartphone lançado pela Apple?',
      options: ['iPhone 2G', 'iPhone 3G', 'iPhone 4', 'iPhone 5', 'iPhone 6'],
      answer: 'iPhone 2G'
    },
    {
      question: 'O que significa a sigla "CPU"?',
      options: ['Central Processing Unit', 'Central Process Unit', 'Computer Personal Unit', 'Central Processor Unit', 'Computer Processing Unit'],
      answer: 'Central Processing Unit'
    },
    {
      question: 'Qual é o nome da assistente virtual da Microsoft?',
      options: ['Cortana', 'Siri', 'Alexa', 'Google Assistant', 'Bixby'],
      answer: 'Cortana'
    },
    {
      question: 'O que significa a sigla "USB"?',
      options: ['Universal Serial Bus', 'Unified System Base', 'Ultra Speed Battery', 'Underground System Backup', 'United System Block'],
      answer: 'Universal Serial Bus'
    },
    {
      question: 'Quem é conhecido por criar a linguagem de programação Python?',
      options: ['Bill Gates', 'Steve Jobs', 'Mark Zuckerberg', 'Guido van Rossum', 'Linus Torvalds'],
      answer: 'Guido van Rossum'
    },
    {
      question: 'O que significa a sigla "LAN"?',
      options: ['Local Area Network', 'Long Area Network', 'Large Array Network', 'Logical Access Network', 'Lightweight Application Network'],
      answer: 'Local Area Network'
    },
    {
      question: 'Qual é o nome do sistema operacional móvel da Google?',
      options: ['iOS', 'Windows Mobile', 'BlackBerry OS', 'Android', 'Symbian OS'],
      answer: 'Android'
    },
    {
      question: 'Quem é conhecido como o "pai da World Wide Web"?',
      options: ['Tim Berners-Lee', 'Vint Cerf', 'Bill Gates', 'Mark Zuckerberg', 'Elon Musk'],
      answer: 'Tim Berners-Lee'
    },
    {
      question: 'O que significa a sigla "DNS"?',
      options: ['Domain Name System', 'Digital Network System', 'Dynamic Naming System', 'Distributed Network System', 'Dual Naming System'],
      answer: 'Domain Name System'
    },
    {
      question: 'Quem é o co-fundador da Apple que também foi expulso da empresa?',
      options: ['Steve Jobs', 'Steve Wozniak', 'Ronald Wayne', 'Tim Cook', 'Jony Ive'],
      answer: 'Ronald Wayne'
    },
    {
      question: 'Quem é o fundador do Facebook?',
      options: ['Bill Gates', 'Mark Zuckerberg', 'Elon Musk', 'Jeff Bezos', 'Larry Page'],
      answer: 'Mark Zuckerberg'
    },
    {
      question: 'Qual é a linguagem de programação usada para desenvolver aplicativos iOS?',
      options: ['Java', 'C++', 'Swift', 'Python', 'Ruby'],
      answer: 'Swift'
    },
    {
      question: 'O que significa a sigla "AI" em tecnologia?',
      options: ['Artificial Integration', 'Advanced Interface', 'Automated Intelligence', 'Artificial Intelligence', 'Absolute Invention'],
      answer: 'Artificial Intelligence'
    },
    {
      question: 'Qual é o nome do robô explorador da NASA que pousou em Marte em 2012?',
      options: ['Opportunity', 'Curiosity', 'Pathfinder', 'Spirit', 'Insight'],
      answer: 'Curiosity'
    },
    // Adicione mais perguntas sobre tecnologia
  ],

  animais: [
    {
      question: 'Qual é o maior mamífero terrestre?',
      options: ['Elefante', 'Rinoceronte', 'Hipopótamo', 'Girafa', 'Leão'],
      answer: 'Elefante'
    },
    {
      question: 'Qual é o maior réptil terrestre?',
      options: ['Cobra', 'Iguana', 'Dragão de Komodo', 'Tartaruga', 'Crocodilo do Nilo'],
      answer: 'Crocodilo do Nilo'
    },
    {
      question: 'Que animal é conhecido por suas listras pretas e brancas e é nativo da África?',
      options: ['Zebra', 'Girafa', 'Elefante', 'Leão', 'Rinoceronte'],
      answer: 'Zebra'
    },
    {
      question: 'Qual é o animal mais alto do mundo?',
      options: ['Elefante', 'Girafa', 'Leão', 'Hipopótamo', 'Camelo'],
      answer: 'Girafa'
    },
    {
      question: 'Que animal é conhecido por suas garras afiadas e habilidades de escalada?',
      options: ['Leão', 'Girafa', 'Urso', 'Tigre', 'Leopardo'],
      answer: 'Leopardo'
    },
    {
      question: 'Qual é o menor mamífero do mundo?',
      options: ['Morcego-nariz-de-porco', 'Musaranho', 'Esquilo', 'Camarão', 'Elefante'],
      answer: 'Morcego-nariz-de-porco'
    },
    {
      question: 'Que animal é conhecido por suas manobras acrobáticas e é encontrado em oceanos?',
      options: ['Tubarão', 'Golfinho', 'Baleia', 'Tartaruga', 'Leão-marinho'],
      answer: 'Golfinho'
    },
    {
      question: 'Qual é o maior primata do mundo?',
      options: ['Orangotango', 'Chimpanzé', 'Gorila', 'Babuíno', 'Mandrill'],
      answer: 'Gorila'
    },
    {
      question: 'Que animal é conhecido por sua capacidade de caminhar nas águas?',
      options: ['Crocodilo', 'Cobra', 'Tartaruga', 'Iguana', 'Sapo'],
      answer: 'Tartaruga'
    },
    {
      question: 'Qual é o nome do animal símbolo do WWF (Fundo Mundial para a Natureza)?',
      options: ['Panda', 'Elefante', 'Tigre', 'Leão', 'Baleia'],
      answer: 'Panda'
    },
    {
      question: 'Que animal é conhecido por suas escamas e língua bifurcada?',
      options: ['Cobra', 'Lagarto', 'Tartaruga', 'Iguana', 'Crocodilo'],
      answer: 'Cobra'
    },
    {
      question: 'Qual é o animal que voa à noite e é associado ao Halloween?',
      options: ['Coruja', 'Morcego', 'Vampiro', 'Rato', 'Aranha'],
      answer: 'Morcego'
    },
    {
      question: 'Que animal é conhecido por suas presas longas e curvas?',
      options: ['Elefante', 'Rinoceronte', 'Leão', 'Tigre', 'Girafa'],
      answer: 'Rinoceronte'
    },
    {
      question: 'Qual é o animal que é considerado o "rei da selva"?',
      options: ['Elefante', 'Girafa', 'Rinoceronte', 'Leão', 'Hipopótamo'],
      answer: 'Leão'
    },
    {
      question: 'Que animal é conhecido por sua habilidade de regenerar sua cauda?',
      options: ['Lagarto', 'Salamandra', 'Cobra', 'Tartaruga', 'Camaleão'],
      answer: 'Salamandra'
    },
    {
      question: 'Qual é o animal símbolo do serviço postal dos Estados Unidos?',
      options: ['Águia', 'Leão', 'Tartaruga', 'Golfinho', 'Coruja'],
      answer: 'Águia'
    },
    {
      question: 'Que animal é conhecido por sua longa língua e pelagem listrada?',
      options: ['Leão', 'Girafa', 'Anta', 'Panda Vermelho', 'Tigre'],
      answer: 'Panda Vermelho'
    },
    {
      question: 'Qual é o animal que faz a maior migração anual na Terra?',
      options: ['Baleia Jubarte', 'Elefante', 'Golfinho', 'Borboleta Monarca', 'Tartaruga'],
      answer: 'Borboleta Monarca'
    },
    {
      question: 'Que animal é conhecido por suas grandes presas curvas?',
      options: ['Elefante', 'Rinoceronte', 'Leão', 'Tigre', 'Hipopótamo'],
      answer: 'Elefante'
    },
    {
      question: 'Qual é o animal que simboliza a preguiça?',
      options: ['Preguiça', 'Leão', 'Girafa', 'Elefante', 'Hipopótamo'],
      answer: 'Preguiça'
    },
    {
      question: 'Que animal é conhecido por sua capacidade de regeneração de membros?',
      options: ['Estrela do Mar', 'Salamandra', 'Lagarto', 'Cobra', 'Camaleão'],
      answer: 'Estrela do Mar'
    },
    {
      question: 'Qual é o animal que é conhecido como "homem das selvas"?',
      options: ['Gorila', 'Chimpanzé', 'Orangotango', 'Babuíno', 'Mandrill'],
      answer: 'Gorila'
    },
    {
      question: 'Que animal é considerado o símbolo da velocidade?',
      options: ['Leão', 'Guepardo', 'Leopardo', 'Águia', 'Elefante'],
      answer: 'Guepardo'
    },
    {
      question: 'Qual é o animal que é considerado o "rei dos mares"?',
      options: ['Tubarão Branco', 'Baleia Azul', 'Orca', 'Golfinho', 'Polvo'],
      answer: 'Tubarão Branco'
    },
    {
      question: 'Que animal é conhecido por suas longas patas e pescoço?',
      options: ['Elefante', 'Rinoceronte', 'Leão', 'Girafa', 'Hipopótamo'],
      answer: 'Girafa'
    },
    {
      question: 'Qual é o animal que é símbolo da sabedoria?',
      options: ['Leão', 'Girafa', 'Elefante', 'Coruja', 'Tigre'],
      answer: 'Coruja'
    },
    {
      question: 'Que animal é conhecido por suas presas longas e curvas?',
      options: ['Elefante', 'Rinoceronte', 'Leão', 'Tigre', 'Girafa'],
      answer: 'Rinoceronte'
    },
    {
      question: 'Qual é o animal que é símbolo da sorte?',
      options: ['Gato', 'Elefante', 'Leão', 'Cavalo', 'Macaco'],
      answer: 'Gato'
    },
    {
      question: 'Que animal é conhecido por suas escamas e língua bifurcada?',
      options: ['Cobra', 'Lagarto', 'Tartaruga', 'Iguana', 'Crocodilo'],
      answer: 'Cobra'
    },
    {
      question: 'Qual é o animal que é considerado o "rei da selva"?',
      options: ['Elefante', 'Girafa', 'Rinoceronte', 'Leão', 'Hipopótamo'],
      answer: 'Leão'
    },
    {
      question: 'Qual é o maior animal terrestre?',
      options: ['Elefante', 'Girafa', 'Rinoceronte', 'Hipopótamo', 'Leão'],
      answer: 'Elefante'
    },
    {
      question: 'Qual é o maior animal do mundo?',
      options: ['Baleia Azul', 'Elefante', 'Girafa', 'Tubarão Branco', 'Rinoceronte'],
      answer: 'Baleia Azul'
    },
    {
      question: 'Que animal é conhecido por sua capacidade de camuflagem?',
      options: ['Camaleão', 'Panda', 'Lagarto', 'Polvo', 'Morcego'],
      answer: 'Camaleão'
    },
    {
      question: 'Qual destes animais é um mamífero voador?',
      options: ['Pinguim', 'Morcego', 'Águia', 'Borboleta', 'Golfinho'],
      answer: 'Morcego'
    },
    {
      question: 'Qual é o animal símbolo da Austrália?',
      options: ['Canguru', 'Koala', 'Diabo da Tasmânia', 'Equidna', 'Wombat'],
      answer: 'Canguru'
    },
    {
      question: 'Que animal é conhecido por suas listras pretas e brancas?',
      options: ['Zebra', 'Girafa', 'Tigre', 'Leopardo', 'Cavalo'],
      answer: 'Zebra'
    },
    {
      question: 'Qual é o animal mais rápido do mundo?',
      options: ['Leão', 'Guepardo', 'Leopardo', 'Águia', 'Elefante'],
      answer: 'Guepardo'
    },
    {
      question: 'Qual é o único mamífero capaz de voar?',
      options: ['Morcego', 'Pássaro', 'Borboleta', 'Esquilo', 'Golfinho'],
      answer: 'Morcego'
    },
    {
      question: 'Que animal é conhecido por sua tromba longa?',
      options: ['Girafa', 'Elefante', 'Hipopótamo', 'Rinoceronte', 'Leão'],
      answer: 'Elefante'
    },
    {
      question: 'Qual é o maior réptil do mundo?',
      options: ['Cobra', 'Jacaré', 'Tartaruga', 'Lagarto', 'Crocodilo'],
      answer: 'Crocodilo'
    },
    {
      question: 'Que animal é famoso por sua habilidade de escalar árvores?',
      options: ['Elefante', 'Cobra', 'Macaco', 'Leopardo', 'Cavalo'],
      answer: 'Macaco'
    },
    {
      question: 'Qual é o animal mais venenoso do mundo?',
      options: ['Aranha Armadeira', 'Cobra Coral', 'Escorpião', 'Água-viva', 'Medusa'],
      answer: 'Aranha Armadeira'
    },
    {
      question: 'Que animal é conhecido por sua capacidade de regeneração de membros?',
      options: ['Estrela do Mar', 'Caracol', 'Salamandra', 'Lagarto', 'Cobra'],
      answer: 'Estrela do Mar'
    },
    {
      question: 'Qual é o maior felino do mundo?',
      options: ['Leão', 'Leopardo', 'Tigre', 'Jaguar', 'Puma'],
      answer: 'Tigre'
    },
    {
      question: 'Que animal é conhecido por suas manchas na pele?',
      options: ['Leopardo', 'Zebra', 'Girafa', 'Tigre', 'Elefante'],
      answer: 'Leopardo'
    },
    {
      question: 'Qual destes animais é um mamífero marinho?',
      options: ['Crocodilo', 'Leão-marinho', 'Tubarão', 'Pinguim', 'Cavalo-marinho'],
      answer: 'Leão-marinho'
    },
    {
      question: 'Qual é o animal mais resistente do planeta?',
      options: ['Urso Polar', 'Tardígrado', 'Besouro Rinoceronte', 'Camelo', 'Elefante'],
      answer: 'Tardígrado'
    },
    {
      question: 'Que animal é famoso por sua preguiça e hábitos lentos?',
      options: ['Leopardo', 'Cavalo', 'Preguiça', 'Tigre', 'Girafa'],
      answer: 'Preguiça'
    },
    {
      question: 'Qual é o animal símbolo da China?',
      options: ['Urso Panda', 'Dragão', 'Macaco', 'Tigre', 'Cavalo'],
      answer: 'Urso Panda'
    },
    {
      question: 'Que animal é conhecido por sua longa migração anual?',
      options: ['Baleia Jubarte', 'Pássaro', 'Borboleta Monarca', 'Elefante', 'Tartaruga'],
      answer: 'Borboleta Monarca'
    },
    {
      question: 'Qual é o maior réptil marinho conhecido?',
      options: ['Plesiossauro', 'Crocodylomorpha', 'Mosassauro', 'Ictiossauro', 'Liopleurodon'],
      answer: 'Mosassauro'
    },
    {
      question: 'Que animal é conhecido por sua visão noturna aguçada?',
      options: ['Morcego', 'Águia', 'Gato', 'Leão', 'Tigre'],
      answer: 'Águia'
    },
    {
      question: 'Qual é o animal mais rápido no ar?',
      options: ['Morcego', 'Águia', 'Borboleta', 'Beija-flor', 'Falcão Peregrino'],
      answer: 'Falcão Peregrino'
    },
    {
      question: 'Que animal é conhecido por sua cauda listrada e distintiva?',
      options: ['Zebra', 'Girafa', 'Leopardo', 'Tigre', 'Elefante'],
      answer: 'Tigre'
    },
    {
      question: 'Qual é o animal que se comunica principalmente através de rugidos?',
      options: ['Elefante', 'Girafa', 'Rinoceronte', 'Leão', 'Hipopótamo'],
      answer: 'Leão'
    },
    {
      question: 'Que animal é famoso por sua memória excepcional?',
      options: ['Elefante', 'Peixe-palhaço', 'Golfinho', 'Morcego', 'Cavalo'],
      answer: 'Elefante'
    },
    // Adicione mais perguntas sobre animais
  ],

  viagens: [
    {
      question: 'Qual é a capital do Japão?',
      options: ['Seul', 'Beijing', 'Bangkok', 'Tokyo', 'Hanoi'],
      answer: 'Tokyo'
    },
    {
      question: 'Qual é a cidade conhecida como "Veneza do Norte"?',
      options: ['Estocolmo', 'Amsterdã', 'Praga', 'Bruges', 'Copenhague'],
      answer: 'Amsterdã'
    },
    {
      question: 'Em que país está localizado o Deserto do Atacama?',
      options: ['Chile', 'Argentina', 'Peru', 'Equador', 'Bolívia'],
      answer: 'Chile'
    },
    {
      question: 'Qual é o nome da famosa ilha paradisíaca conhecida por suas praias brancas e águas cristalinas?',
      options: ['Bora Bora', 'Maldivas', 'Seychelles', 'Havaí', 'Fiji'],
      answer: 'Maldivas'
    },
    {
      question: 'Em que país está localizado o Parque Nacional de Yellowstone?',
      options: ['Canadá', 'Estados Unidos', 'México', 'Austrália', 'Nova Zelândia'],
      answer: 'Estados Unidos'
    },
    {
      question: 'Qual é a capital da Tailândia?',
      options: ['Bangkok', 'Hanoi', 'Phnom Penh', 'Kuala Lumpur', 'Yangon'],
      answer: 'Bangkok'
    },
    {
      question: 'Em que país está localizado o Museu do Louvre?',
      options: ['Itália', 'Espanha', 'França', 'Alemanha', 'Inglaterra'],
      answer: 'França'
    },
    {
      question: 'Qual é a cidade conhecida como "Cidade dos Ventos"?',
      options: ['Nova York', 'Chicago', 'Los Angeles', 'Miami', 'San Francisco'],
      answer: 'Chicago'
    },
    {
      question: 'Em que país está localizado o Mont Saint-Michel?',
      options: ['Itália', 'Espanha', 'França', 'Portugal', 'Bélgica'],
      answer: 'França'
    },
    {
      question: 'Qual é a capital da Nova Zelândia?',
      options: ['Sydney', 'Auckland', 'Wellington', 'Christchurch', 'Queenstown'],
      answer: 'Wellington'
    },
    {
      question: 'Em que país está localizado o Deserto do Sinai?',
      options: ['Israel', 'Egito', 'Jordânia', 'Arábia Saudita', 'Síria'],
      answer: 'Egito'
    },
    {
      question: 'Qual é a cidade conhecida como "Pérola do Atlântico"?',
      options: ['Lisboa', 'Porto', 'Funchal', 'Barcelona', 'Nice'],
      answer: 'Funchal'
    },
    {
      question: 'Em que país está localizado o Parque Nacional Banff?',
      options: ['Canadá', 'Estados Unidos', 'Austrália', 'Nova Zelândia', 'Suíça'],
      answer: 'Canadá'
    },
    {
      question: 'Qual é a cidade conhecida como "Cidade do Cabo"?',
      options: ['Cidade do México', 'Cidade do Cabo', 'Cidade do Cairo', 'Cidade do Panamá', 'Cidade de Buenos Aires'],
      answer: 'Cidade do Cabo'
    },
    {
      question: 'Em que país está localizado o Parque Nacional de Yosemite?',
      options: ['Canadá', 'Estados Unidos', 'México', 'Austrália', 'Nova Zelândia'],
      answer: 'Estados Unidos'
    },
    {
      question: 'Qual é a cidade conhecida como "Cidade dos Anjos"?',
      options: ['Los Angeles', 'Nova York', 'Paris', 'Roma', 'Bangkok'],
      answer: 'Los Angeles'
    },
    {
      question: 'Em que país está localizada a cidade de Marrakech?',
      options: ['Marrocos', 'Tunísia', 'Argélia', 'Egito', 'Líbia'],
      answer: 'Marrocos'
    },
    {
      question: 'Qual é a capital da Áustria?',
      options: ['Praga', 'Viena', 'Budapeste', 'Varsóvia', 'Zagreb'],
      answer: 'Viena'
    },
    {
      question: 'Em que país está localizado o Parque Nacional de Zion?',
      options: ['Canadá', 'Estados Unidos', 'México', 'Austrália', 'Nova Zelândia'],
      answer: 'Estados Unidos'
    },
    {
      question: 'Qual é a cidade conhecida como "Cidade do Vaticano"?',
      options: ['Roma', 'Florença', 'Veneza', 'Milão', 'Nápoles'],
      answer: 'Roma'
    },
    {
      question: 'Em que país está localizado o Deserto de Mojave?',
      options: ['Canadá', 'Estados Unidos', 'México', 'Austrália', 'Nova Zelândia'],
      answer: 'Estados Unidos'
    },
    {
      question: 'Qual é a capital do Japão?',
      options: ['Pequim', 'Tóquio', 'Seul', 'Bangcoc', 'Cingapura'],
      answer: 'Tóquio'
    },
    {
      question: 'Em que país está localizada a Grande Barreira de Coral?',
      options: ['Austrália', 'Brasil', 'Índia', 'México', 'Indonésia'],
      answer: 'Austrália'
    },
    {
      question: 'Qual cidade é conhecida como "A Cidade Eterna"?',
      options: ['Paris', 'Atenas', 'Roma', 'Cairo', 'Londres'],
      answer: 'Roma'
    },
    {
      question: 'Em que continente está localizado o Monte Kilimanjaro?',
      options: ['Europa', 'África', 'Ásia', 'América do Sul', 'Oceania'],
      answer: 'África'
    },
    {
      question: 'Qual é o maior estado dos Estados Unidos em área territorial?',
      options: ['Alasca', 'Califórnia', 'Texas', 'Havaí', 'Flórida'],
      answer: 'Alasca'
    },
    {
      question: 'Qual país é conhecido como "Terra dos Cangurus"?',
      options: ['Nova Zelândia', 'Canadá', 'Austrália', 'África do Sul', 'Argentina'],
      answer: 'Austrália'
    },
    {
      question: 'Em que país está localizada a cidade de Petra, famosa por suas ruínas históricas?',
      options: ['Grécia', 'Turquia', 'Jordânia', 'Itália', 'Egito'],
      answer: 'Jordânia'
    },
    {
      question: 'Qual é a cidade mais populosa do mundo?',
      options: ['Londres', 'Nova York', 'Mumbai', 'Tóquio', 'Pequim'],
      answer: 'Tóquio'
    },
    {
      question: 'Que país é conhecido como "Terra do Sol Nascente"?',
      options: ['China', 'Japão', 'Coreia do Sul', 'Tailândia', 'Vietnã'],
      answer: 'Japão'
    },
    {
      question: 'Qual é a capital da França?',
      options: ['Londres', 'Roma', 'Berlim', 'Paris', 'Madri'],
      answer: 'Paris'
    },
    {
      question: 'Em que país está localizado o Deserto do Saara?',
      options: ['Brasil', 'Austrália', 'Estados Unidos', 'Marrocos', 'Índia'],
      answer: 'Marrocos'
    },
    {
      question: 'Qual é a maior ilha do mundo?',
      options: ['Ilha de Java', 'Ilha de Baffin', 'Ilha de Sumatra', 'Ilha de Honshu', 'Ilha da Groenlândia'],
      answer: 'Ilha da Groenlândia'
    },
    {
      question: 'Em que país está localizado o Machu Picchu, uma antiga cidade inca?',
      options: ['México', 'Peru', 'Colômbia', 'Equador', 'Chile'],
      answer: 'Peru'
    },
    {
      question: 'Qual é a capital da Austrália?',
      options: ['Sydney', 'Melbourne', 'Canberra', 'Brisbane', 'Adelaide'],
      answer: 'Canberra'
    },
    {
      question: 'Em que cidade está localizada a Torre Eiffel?',
      options: ['Berlim', 'Londres', 'Paris', 'Madri', 'Roma'],
      answer: 'Paris'
    },
    {
      question: 'Qual é o país mais extenso da América do Sul?',
      options: ['Argentina', 'Brasil', 'Colômbia', 'Chile', 'Peru'],
      answer: 'Brasil'
    },
    {
      question: 'Em que estado dos EUA está localizado o Grand Canyon?',
      options: ['Arizona', 'Califórnia', 'Nevada', 'Colorado', 'Utah'],
      answer: 'Arizona'
    },
    {
      question: 'Qual é o nome da famosa muralha construída na China para se proteger contra invasões?',
      options: ['Muralha do Medo', 'Muralha de Berlim', 'Muralha da Índia', 'Muralha do Japão', 'Grande Muralha'],
      answer: 'Grande Muralha'
    },
    {
      question: 'Em que país está localizado o Taj Mahal?',
      options: ['Índia', 'Paquistão', 'Bangladesh', 'Nepal', 'Butão'],
      answer: 'Índia'
    },
    {
      question: 'Qual é a capital do Canadá?',
      options: ['Vancouver', 'Montreal', 'Toronto', 'Ottawa', 'Calgary'],
      answer: 'Ottawa'
    },
    {
      question: 'Em que país está localizada a cidade de Moscou?',
      options: ['Alemanha', 'Itália', 'Rússia', 'França', 'Espanha'],
      answer: 'Rússia'
    },
    {
      question: 'Qual é a principal língua falada no Egito?',
      options: ['Árabe', 'Persa', 'Turco', 'Hebraico', 'Berbere'],
      answer: 'Árabe'
    },
    {
      question: 'Em que continente está localizada a Patagônia?',
      options: ['Europa', 'África', 'Ásia', 'América do Sul', 'Oceania'],
      answer: 'América do Sul'
    },
    {
      question: 'Qual é o ponto mais alto do planeta Terra?',
      options: ['Monte Kilimanjaro', 'Monte Everest', 'Monte McKinley', 'Monte Elbrus', 'Monte Fuji'],
      answer: 'Monte Everest'
    },
    {
      question: 'Em que país está localizado o Rio Nilo?',
      options: ['Brasil', 'Egito', 'Quênia', 'Sudão', 'Nigéria'],
      answer: 'Egito'
    },
    {
      question: 'Qual é a capital da Espanha?',
      options: ['Lisboa', 'Madri', 'Barcelona', 'Sevilha', 'Valência'],
      answer: 'Madri'
    },
    {
      question: 'Em que país está localizado o Coliseu, um antigo anfiteatro romano?',
      options: ['Itália', 'Grécia', 'Espanha', 'França', 'Turquia'],
      answer: 'Itália'
    },
    {
      question: 'Qual é a capital do México?',
      options: ['Buenos Aires', 'Cidade do México', 'Lima', 'Caracas', 'Bogotá'],
      answer: 'Cidade do México'
    },
    {
      question: 'Qual é a capital da França?',
      options: ['Berlim', 'Londres', 'Roma', 'Paris', 'Madri'],
      answer: 'Paris'
    },
    // Adicione mais perguntas sobre viagens
  ],

  medicina: [
    {
      question: 'Qual é o órgão responsável por bombear o sangue pelo corpo?',
      options: ['Coração', 'Fígado', 'Rim', 'Pulmão', 'Cérebro'],
      answer: 'Coração'
    },
    {
      question: 'Qual é o órgão humano responsável pela produção de insulina?',
      options: ['Pâncreas', 'Fígado', 'Rim', 'Coração', 'Estômago'],
      answer: 'Pâncreas'
    },
    {
      question: 'O que é a pressão arterial?',
      options: ['Pressão nas veias', 'Pressão no cérebro', 'Pressão no sistema digestivo', 'Pressão no sistema circulatório', 'Pressão no sistema respiratório'],
      answer: 'Pressão no sistema circulatório'
    },
    {
      question: 'Qual é a função dos glóbulos brancos?',
      options: ['Transporte de oxigênio', 'Defesa do organismo contra infecções', 'Coagulação do sangue', 'Armazenamento de nutrientes', 'Produção de energia'],
      answer: 'Defesa do organismo contra infecções'
    },
    {
      question: 'O que é a insulina?',
      options: ['Hormônio que regula o metabolismo do cálcio', 'Enzima digestiva', 'Hormônio que regula o açúcar no sangue', 'Hormônio do crescimento', 'Proteína estrutural'],
      answer: 'Hormônio que regula o açúcar no sangue'
    },
    {
      question: 'Qual é a função dos rins no corpo humano?',
      options: ['Produção de enzimas digestivas', 'Filtração do sangue e excreção de resíduos', 'Produção de insulina', 'Armazenamento de glicose', 'Controle da pressão arterial'],
      answer: 'Filtração do sangue e excreção de resíduos'
    },
    {
      question: 'O que é a anemia?',
      options: ['Aumento da pressão arterial', 'Redução do número de glóbulos vermelhos ou da hemoglobina no sangue', 'Acúmulo de plaquetas no sangue', 'Inflamação do fígado', 'Diminuição do colesterol no sangue'],
      answer: 'Redução do número de glóbulos vermelhos ou da hemoglobina no sangue'
    },
    {
      question: 'O que é a microbiota?',
      options: ['Cirurgia no intestino', 'Grupo de bactérias que vive em nosso corpo', 'Cirurgia no coração', 'Remoção de tumores', 'Transplante de órgãos'],
      answer: 'Grupo de bactérias que vive em nosso corpo'
    },
    {
      question: 'O que é a febre?',
      options: ['Aumento da pressão arterial', 'Elevação da temperatura corporal', 'Diminuição da frequência cardíaca', 'Aumento da produção de insulina', 'Redução da contagem de glóbulos brancos'],
      answer: 'Elevação da temperatura corporal'
    },
    {
      question: 'O que é um antibiótico?',
      options: ['Medicamento que mata bactérias', 'Medicamento para alívio da dor', 'Medicamento para controle da pressão arterial', 'Medicamento para redução do colesterol', 'Medicamento para estimular o sistema imunológico'],
      answer: 'Medicamento que mata bactérias'
    },
    {
      question: 'O que é a quimioterapia?',
      options: ['Cirurgia estética', 'Tratamento para doenças cardíacas', 'Tratamento para o câncer com medicamentos', 'Tratamento para problemas respiratórios', 'Procedimento para redução de peso'],
      answer: 'Tratamento para o câncer com medicamentos'
    },
    {
      question: 'O que é a diabetes?',
      options: ['Doença inflamatória', 'Distúrbio do sono', 'Distúrbio metabólico caracterizado por níveis elevados de glicose no sangue', 'Doença autoimune', 'Infecção viral'],
      answer: 'Distúrbio metabólico caracterizado por níveis elevados de glicose no sangue'
    },
    {
      question: 'O que é a radioterapia?',
      options: ['Exame de imagem', 'Tratamento para o câncer com radiações', 'Procedimento cirúrgico', 'Procedimento estético', 'Avaliação da função pulmonar'],
      answer: 'Tratamento para o câncer com radiações'
    },
    {
      question: 'O que é a cirrose hepática?',
      options: ['Inflamação dos pulmões', 'Lesão na medula espinhal', 'Inflamação do fígado com formação de tecido cicatricial', 'Inflamação do pâncreas', 'Inflamação do estômago'],
      answer: 'Inflamação do fígado com formação de tecido cicatricial'
    },
    {
      question: 'O que é a hemofilia?',
      options: ['Doença autoimune', 'Distúrbio sanguíneo caracterizado por dificuldade de coagulação', 'Doença cardíaca', 'Infecção viral', 'Distúrbio respiratório'],
      answer: 'Distúrbio sanguíneo caracterizado por dificuldade de coagulação'
    },
    {
      question: 'O que é a endoscopia?',
      options: ['Exame visual do interior do corpo com um tubo flexível', 'Exame de sangue', 'Procedimento cirúrgico', 'Exame de imagem do cérebro', 'Avaliação da função pulmonar'],
      answer: 'Exame visual do interior do corpo com um tubo flexível'
    },
    {
      question: 'O que é a asma?',
      options: ['Inflamação dos pulmões', 'Distúrbio do sono', 'Distúrbio metabólico', 'Doença cardíaca', 'Infecção viral'],
      answer: 'Inflamação dos pulmões'
    },
    {
      question: 'O que é a arteriosclerose?',
      options: ['Inflamação dos pulmões', 'Lesão na medula espinhal', 'Endurecimento e estreitamento das artérias', 'Doença autoimune', 'Inflamação do estômago'],
      answer: 'Endurecimento e estreitamento das artérias'
    },
    {
      question: 'O que é a anestesia?',
      options: ['Procedimento cirúrgico', 'Estado de consciência alterado temporariamente', 'Medicamento para alívio da dor', 'Tratamento para o câncer', 'Exame de imagem do cérebro'],
      answer: 'Estado de consciência alterado temporariamente'
    },
    {
      question: 'O que é a osteoporose?',
      options: ['Doença inflamatória', 'Distúrbio do sono', 'Enfraquecimento dos ossos', 'Distúrbio metabólico', 'Inflamação do fígado'],
      answer: 'Enfraquecimento dos ossos'
    },
    {
      question: 'O que é a tuberculose?',
      options: ['Doença inflamatória', 'Infecção viral', 'Infecção bacteriana que afeta principalmente os pulmões', 'Distúrbio respiratório', 'Doença cardíaca'],
      answer: 'Infecção bacteriana que afeta principalmente os pulmões'
    },
    {
      question: 'O que é a apneia do sono?',
      options: ['Distúrbio do sono caracterizado por pausas na respiração', 'Inflamação dos pulmões', 'Infecção viral', 'Doença autoimune', 'Endurecimento e estreitamento das artérias'],
      answer: 'Distúrbio do sono caracterizado por pausas na respiração'
    },
    {
      question: 'O que é a meningite?',
      options: ['Inflamação dos pulmões', 'Infecção bacteriana ou viral das membranas que cobrem o cérebro e a medula espinhal', 'Distúrbio do sono', 'Doença cardíaca', 'Inflamação do fígado'],
      answer: 'Infecção bacteriana ou viral das membranas que cobrem o cérebro e a medula espinhal'
    },
    {
      question: 'O que é a hérnia de disco?',
      options: ['Lesão na medula espinhal', 'Problema cardíaco', 'Problema respiratório', 'Problema digestivo', 'Deslocamento de parte de um disco intervertebral'],
      answer: 'Deslocamento de parte de um disco intervertebral'
    },
    {
      question: 'O que é a ecografia?',
      options: ['Exame de imagem por ondas sonoras', 'Exame visual do interior do corpo com um tubo flexível', 'Procedimento cirúrgico', 'Avaliação da função pulmonar', 'Exame de sangue'],
      answer: 'Exame de imagem por ondas sonoras'
    },
    {
      question: 'O que é a psoríase?',
      options: ['Distúrbio metabólico', 'Doença inflamatória da pele', 'Infecção viral', 'Doença cardíaca', 'Distúrbio do sono'],
      answer: 'Doença inflamatória da pele'
    },
    {
      question: 'O que é a gastroenterite?',
      options: ['Inflamação do estômago e intestinos', 'Infecção viral', 'Doença cardíaca', 'Distúrbio metabólico', 'Inflamação dos pulmões'],
      answer: 'Inflamação do estômago e intestinos'
    },
    {
      question: 'O que é a cirurgia bariátrica?',
      options: ['Procedimento cirúrgico para perda de peso', 'Procedimento cirúrgico no coração', 'Procedimento cirúrgico no cérebro', 'Procedimento estético', 'Procedimento cirúrgico na medula espinhal'],
      answer: 'Procedimento cirúrgico para perda de peso'
    },
    {
      question: 'Qual é o maior osso do corpo humano?',
      options: ['Fêmur', 'Tíbia', 'Úmero', 'Fíbula', 'Rádio'],
      answer: 'Fêmur'
    },
    {
      question: 'Onde estão localizados os músculos isquiotibiais?',
      options: ['Coxa', 'Braço', 'Abdômen', 'Perna', 'Costas'],
      answer: 'Perna'
    },
    {
      question: 'Quantas vértebras cervicais existem na coluna vertebral humana?',
      options: ['5', '7', '10', '12', '14'],
      answer: '7'
    },
    {
      question: 'O que é a sínfise púbica?',
      options: ['Articulação entre os ossos do crânio', 'Articulação entre as costelas e a coluna vertebral', 'Articulação entre os ossos púbicos', 'Articulação entre os ossos do tornozelo', 'Articulação entre os ossos da mão'],
      answer: 'Articulação entre os ossos púbicos'
    },
    {
      question: 'Qual é o nome do osso do braço?',
      options: ['Rádio', 'Cúbito', 'Úmero', 'Fêmur', 'Fíbula'],
      answer: 'Úmero'
    },
    {
      question: 'Onde está localizado o menisco?',
      options: ['Cotovelo', 'Joelho', 'Ombro', 'Punho', 'Tornozelo'],
      answer: 'Joelho'
    },
    {
      question: 'O que é o peritônio?',
      options: ['Membrana que reveste os pulmões', 'Membrana que reveste o coração', 'Membrana que reveste o estômago e os órgãos abdominais', 'Membrana que reveste o cérebro', 'Membrana que reveste os rins'],
      answer: 'Membrana que reveste o estômago e os órgãos abdominais'
    },
    {
      question: 'Qual é a função principal dos rins?',
      options: ['Produção de insulina', 'Filtração do sangue para remover resíduos e excesso de água', 'Produção de glóbulos vermelhos', 'Digestão de gorduras', 'Controle da temperatura corporal'],
      answer: 'Filtração do sangue para remover resíduos e excesso de água'
    },
    {
      question: 'Onde estão localizadas as glândulas sudoríparas?',
      options: ['Pele', 'Rins', 'Intestino delgado', 'Fígado', 'Estômago'],
      answer: 'Pele'
    },
    {
      question: 'O que é a traqueia?',
      options: ['Tubo muscular que conecta a boca ao estômago', 'Tubo muscular que transporta alimentos do esôfago para o estômago', 'Tubo que transporta o ar para os pulmões', 'Tubo que conecta o intestino delgado ao intestino grosso', 'Tubo que conduz a urina da bexiga para o exterior do corpo'],
      answer: 'Tubo que transporta o ar para os pulmões'
    },
    {
      question: 'O que é a epiglote?',
      options: ['Estrutura que separa os ventrículos do coração', 'Estrutura que regula a passagem do ar para os pulmões e dos alimentos para o esôfago', 'Estrutura que forma a base da coluna vertebral', 'Estrutura que conecta os ossos em uma articulação', 'Estrutura que regula a produção de insulina'],
      answer: 'Estrutura que regula a passagem do ar para os pulmões e dos alimentos para o esôfago'
    },
    {
      question: 'Onde está localizado o apêndice?',
      options: ['Cabeça', 'Pescoço', 'Braço', 'Abdômen', 'Perna'],
      answer: 'Abdômen'
    },
    {
      question: 'Qual é a função do sistema linfático?',
      options: ['Produção de hormônios', 'Filtração do sangue', 'Transporte de oxigênio', 'Defesa do corpo contra infecções', 'Controle do metabolismo'],
      answer: 'Defesa do corpo contra infecções'
    },
    {
      question: 'O que é a cápsula de Bowman?',
      options: ['Estrutura do coração', 'Estrutura da pele', 'Componente da célula', 'Parte do olho', 'Componente dos rins'],
      answer: 'Componente dos rins'
    },
    {
      question: 'Onde está localizado o útero?',
      options: ['Cabeça', 'Pescoço', 'Braço', 'Abdômen', 'Pelve'],
      answer: 'Pelve'
    },
    {
      question: 'O que é o sistema nervoso autônomo?',
      options: ['Parte do sistema nervoso responsável pelo pensamento e consciência', 'Parte do sistema nervoso relacionada aos movimentos voluntários', 'Parte do sistema nervoso que controla funções involuntárias, como a respiração e a frequência cardíaca', 'Parte do sistema nervoso que coordena os movimentos musculares', 'Parte do sistema nervoso relacionada à visão e audição'],
      answer: 'Parte do sistema nervoso que controla funções involuntárias, como a respiração e a frequência cardíaca'
    },
    {
      question: 'Onde estão localizadas as papilas gustativas?',
      options: ['Nariz', 'Língua', 'Olhos', 'Ouvido', 'Pele'],
      answer: 'Língua'
    },
    {
      question: 'O que é a córnea?',
      options: ['Parte do ouvido interno', 'Parte do olho', 'Parte do sistema circulatório', 'Osso do crânio', 'Músculo do braço'],
      answer: 'Parte do olho'
    },
    {
      question: 'Qual é o órgão alvo da insulina?',
      options: ['Coração', 'Fígado', 'Pâncreas', 'Rim', 'Células do corpo'],
      answer: 'Células do corpo'
    },
    {
      question: 'O que é a medula óssea?',
      options: ['Tecido conectivo', 'Tecido muscular', 'Órgão do sistema digestivo', 'Parte do sistema nervoso central', 'Tecido responsável pela produção de células sanguíneas'],
      answer: 'Tecido responsável pela produção de células sanguíneas'
    },
    {
      question: 'Qual é a função dos alvéolos pulmonares?',
      options: ['Produção de enzimas digestivas', 'Troca de oxigênio e dióxido de carbono no sangue', 'Filtração do sangue', 'Condução do som para o ouvido interno', 'Transporte de nutrientes no sangue'],
      answer: 'Troca de oxigênio e dióxido de carbono no sangue'
    },
    {
      question: 'O que é o sistema cardiovascular?',
      options: ['Sistema que controla a digestão', 'Sistema que controla a respiração', 'Sistema que circula o sangue pelo corpo', 'Sistema que controla os movimentos voluntários', 'Sistema que regula a temperatura corporal'],
      answer: 'Sistema que circula o sangue pelo corpo'
    },
    {
      question: 'Qual é o maior órgão do sistema respiratório?',
      options: ['Traqueia', 'Faringe', 'Pulmões', 'Nariz', 'Brônquios'],
      answer: 'Pulmões'
    },
    {
      question: 'O que é a hemoglobina?',
      options: ['Hormônio', 'Enzima digestiva', 'Proteína transportadora de oxigênio no sangue', 'Ácido graxo', 'Neurotransmissor'],
      answer: 'Proteína transportadora de oxigênio no sangue'
    },
    {
      question: 'O que é um antibiótico?',
      options: ['Medicamento que combate vírus', 'Medicamento que combate bactérias', 'Medicamento que alivia a dor', 'Medicamento para problemas cardíacos', 'Medicamento para alergias'],
      answer: 'Medicamento que combate bactérias'
    },
    {
      question: 'Qual é o principal ingrediente ativo na aspirina?',
      options: ['Paracetamol', 'Ácido acetilsalicílico', 'Ibuprofeno', 'Morfina', 'Dipirona'],
      answer: 'Ácido acetilsalicílico'
    },
    {
      question: 'O que são medicamentos genéricos?',
      options: ['Medicamentos sem prescrição médica', 'Medicamentos com nomes de marca', 'Medicamentos produzidos por empresas farmacêuticas de renome', 'Medicamentos com a mesma substância ativa que um medicamento de marca', 'Medicamentos homeopáticos'],
      answer: 'Medicamentos com a mesma substância ativa que um medicamento de marca'
    },
    {
      question: 'Qual é a função dos anti-inflamatórios não esteroides (AINEs)?',
      options: ['Tratamento de infecções virais', 'Alívio da dor e redução da inflamação', 'Estimulação do sistema imunológico', 'Redução da pressão arterial', 'Tratamento de distúrbios do sono'],
      answer: 'Alívio da dor e redução da inflamação'
    },
    {
      question: 'O que são corticosteroides?',
      options: ['Antibióticos', 'Analgésicos', 'Anti-inflamatórios', 'Hormônios esteroides', 'Medicamentos antivirais'],
      answer: 'Hormônios esteroides'
    },
    {
      question: 'O que é um analgésico?',
      options: ['Medicamento que combate bactérias', 'Medicamento que alivia a dor', 'Medicamento para problemas cardíacos', 'Medicamento para distúrbios do sono', 'Medicamento para alergias'],
      answer: 'Medicamento que alivia a dor'
    },
    {
      question: 'Qual é a função dos anti-histamínicos?',
      options: ['Alívio da dor', 'Redução da inflamação', 'Controle da pressão arterial', 'Tratamento de alergias', 'Tratamento de infecções virais'],
      answer: 'Tratamento de alergias'
    },
    {
      question: 'O que são medicamentos controlados?',
      options: ['Medicamentos sem prescrição médica', 'Medicamentos com nomes de marca', 'Medicamentos que requerem prescrição médica devido ao potencial de abuso ou dependência', 'Medicamentos homeopáticos', 'Medicamentos produzidos por empresas farmacêuticas de renome'],
      answer: 'Medicamentos que requerem prescrição médica devido ao potencial de abuso ou dependência'
    },
    {
      question: 'Qual é o propósito dos vasodilatadores?',
      options: ['Aumentar a pressão arterial', 'Aliviar a congestão nasal', 'Relaxar os vasos sanguíneos e aumentar o fluxo sanguíneo', 'Estimular o sistema nervoso central', 'Tratar distúrbios do sono'],
      answer: 'Relaxar os vasos sanguíneos e aumentar o fluxo sanguíneo'
    },
    {
      question: 'O que são antieméticos?',
      options: ['Medicamentos para tratar a insônia', 'Medicamentos que estimulam o apetite', 'Medicamentos que aliviam náuseas e vômitos', 'Medicamentos que reduzem a febre', 'Medicamentos para tratar distúrbios do humor'],
      answer: 'Medicamentos que aliviam náuseas e vômitos'
    },
    {
      question: 'Qual é o objetivo dos diuréticos?',
      options: ['Estimular o apetite', 'Reduzir a febre', 'Aumentar a pressão arterial', 'Eliminar o excesso de líquidos do corpo', 'Aliviar a dor'],
      answer: 'Eliminar o excesso de líquidos do corpo'
    },
    {
      question: 'O que são ansiolíticos?',
      options: ['Medicamentos que tratam a ansiedade', 'Medicamentos que aumentam a pressão arterial', 'Medicamentos que aliviam a dor', 'Medicamentos que estimulam o sistema nervoso central', 'Medicamentos que tratam a insônia'],
      answer: 'Medicamentos que tratam a ansiedade'
    },
    {
      question: 'Qual é o efeito dos antipsicóticos?',
      options: ['Estimular o sistema nervoso central', 'Aliviar a dor', 'Tratar distúrbios do sono', 'Tratar distúrbios do humor', 'Tratar condições psicóticas e transtornos mentais'],
      answer: 'Tratar condições psicóticas e transtornos mentais'
    },
    {
      question: 'O que são anticoagulantes?',
      options: ['Medicamentos que estimulam o apetite', 'Medicamentos que tratam a ansiedade', 'Medicamentos que reduzem a febre', 'Medicamentos que previnem a formação de coágulos sanguíneos', 'Medicamentos que aliviam náuseas e vômitos'],
      answer: 'Medicamentos que previnem a formação de coágulos sanguíneos'
    },
    {
      question: 'Qual é o propósito dos analgésicos opioides?',
      options: ['Tratar alergias', 'Aliviar a dor', 'Estimular o apetite', 'Reduzir a febre', 'Tratar distúrbios do sono'],
      answer: 'Aliviar a dor'
    },
    {
      question: 'O que são anti-inflamatórios esteroides?',
      options: ['Hormônios esteroides', 'Medicamentos que tratam a ansiedade', 'Medicamentos que estimulam o sistema nervoso central', 'Medicamentos que reduzem a febre', 'Medicamentos para distúrbios do humor'],
      answer: 'Hormônios esteroides'
    },
    {
      question: 'O que é um expectorante?',
      options: ['Medicamento que estimula a expectoração', 'Medicamento para tratar alergias', 'Medicamento que reduz a febre', 'Medicamento que alivia a dor', 'Medicamento que estimula o apetite'],
      answer: 'Medicamento que estimula a expectoração'
    },
    {
      question: 'Qual é a função dos agentes anti-histamínicos H2?',
      options: ['Tratar a asma', 'Reduzir a produção de ácido no estômago', 'Tratar infecções virais', 'Estimular o sistema nervoso central', 'Aliviar a dor'],
      answer: 'Reduzir a produção de ácido no estômago'
    },
    {
      question: 'O que são broncodilatadores?',
      options: ['Medicamentos que estimulam o apetite', 'Medicamentos que tratam a ansiedade', 'Medicamentos que relaxam os músculos brônquicos e facilitam a respiração', 'Medicamentos que reduzem a febre', 'Medicamentos para distúrbios do humor'],
      answer: 'Medicamentos que relaxam os músculos brônquicos e facilitam a respiração'
    },
    {
      question: 'O que é um antifúngico?',
      options: ['Medicamento que combate vírus', 'Medicamento que combate bactérias', 'Medicamento que alivia a dor', 'Medicamento para distúrbios do sono', 'Medicamento que trata infecções fúngicas'],
      answer: 'Medicamento que trata infecções fúngicas'
    },
    {
      question: 'Qual é o propósito dos antiácidos?',
      options: ['Aumentar a pressão arterial', 'Aliviar a dor', 'Reduzir a produção de ácido no estômago', 'Tratar distúrbios do sono', 'Estimular o sistema nervoso central'],
      answer: 'Reduzir a produção de ácido no estômago'
    },
    {
      question: 'O que é a imunização?',
      options: ['Processo de estimulação do sistema imunológico para conferir resistência a uma doença', 'Tratamento de infecções bacterianas', 'Procedimento cirúrgico para remover vírus do corpo', 'Método de controle de insetos transmissores de doenças', 'Tratamento de distúrbios do sono'],
      answer: 'Processo de estimulação do sistema imunológico para conferir resistência a uma doença'
    },
    {
      question: 'Quais são os sintomas clássicos da malária?',
      options: ['Febre, tosse e dor de cabeça', 'Diarreia e vômitos', 'Erupção cutânea e coceira', 'Dor abdominal intensa', 'Calafrios, febre intermitente e sudorese'],
      answer: 'Calafrios, febre intermitente e sudorese'
    },
    {
      question: 'O que é a vacina BCG?',
      options: ['Vacina contra a gripe', 'Vacina contra o sarampo', 'Vacina contra a tuberculose', 'Vacina contra a febre amarela', 'Vacina contra a poliomielite'],
      answer: 'Vacina contra a tuberculose'
    },
    {
      question: 'Qual é o agente causador da dengue?',
      options: ['Bactéria', 'Vírus', 'Parasita', 'Fungo', 'Protozoário'],
      answer: 'Vírus'
    },
    {
      question: 'O que é a hepatite B?',
      options: ['Infecção bacteriana do fígado', 'Infecção viral do fígado', 'Infecção parasitária do fígado', 'Doença autoimune do fígado', 'Doença genética do fígado'],
      answer: 'Infecção viral do fígado'
    },
    {
      question: 'Quais são os sintomas comuns da COVID-19?',
      options: ['Dor de cabeça e tontura', 'Dor abdominal intensa', 'Febre, tosse e dificuldade respiratória', 'Náusea e vômitos', 'Erupção cutânea e coceira'],
      answer: 'Febre, tosse e dificuldade respiratória'
    },
    {
      question: 'O que é a vacina tríplice viral?',
      options: ['Vacina contra a gripe', 'Vacina contra o sarampo, caxumba e rubéola', 'Vacina contra a tuberculose', 'Vacina contra a febre amarela', 'Vacina contra a poliomielite'],
      answer: 'Vacina contra o sarampo, caxumba e rubéola'
    },
    {
      question: 'Como a malária é transmitida?',
      options: ['Pelo ar', 'Por picada de mosquito infectado', 'Por contato direto com fluidos corporais', 'Por ingestão de água contaminada', 'Por contato com objetos contaminados'],
      answer: 'Por picada de mosquito infectado'
    },
    {
      question: 'O que é a profilaxia pré-exposição (PrEP) para o HIV?',
      options: ['Medicamento para tratar infecções virais', 'Medicamento para prevenir a infecção pelo HIV antes da exposição', 'Vacina contra o HIV', 'Medicamento para tratar infecções bacterianas', 'Método de controle de insetos transmissores de doenças'],
      answer: 'Medicamento para prevenir a infecção pelo HIV antes da exposição'
    },
    {
      question: 'Qual é a principal via de transmissão do vírus da hepatite C?',
      options: ['Transmissão sexual', 'Transmissão pelo ar', 'Transmissão por alimentos contaminados', 'Transmissão por picada de mosquito', 'Transmissão por contato com sangue infectado'],
      answer: 'Transmissão por contato com sangue infectado'
    },
    {
      question: 'O que é a febre amarela?',
      options: ['Infecção bacteriana', 'Infecção parasitária', 'Infecção viral transmitida por mosquitos', 'Doença autoimune', 'Doença genética'],
      answer: 'Infecção viral transmitida por mosquitos'
    },
    {
      question: 'Como é transmitida a tuberculose?',
      options: ['Pelo ar, através de gotículas respiratórias', 'Por picada de mosquito', 'Por contato direto com fluidos corporais', 'Por ingestão de água contaminada', 'Por contato com objetos contaminados'],
      answer: 'Pelo ar, através de gotículas respiratórias'
    },
    {
      question: 'O que é a vacina contra o HPV?',
      options: ['Vacina contra a gripe', 'Vacina contra o sarampo, caxumba e rubéola', 'Vacina contra a tuberculose', 'Vacina contra o papilomavírus humano', 'Vacina contra a poliomielite'],
      answer: 'Vacina contra o papilomavírus humano'
    },
    {
      question: 'Quais são os sintomas da zika?',
      options: ['Febre, dor de cabeça e dor nas articulações', 'Diarreia e vômitos', 'Erupção cutânea e coceira', 'Dor abdominal intensa', 'Calafrios, febre intermitente e sudorese'],
      answer: 'Febre, dor de cabeça e dor nas articulações'
    },
    {
      question: 'O que é a terapia antirretroviral (TAR)?',
      options: ['Medicamento para tratar infecções bacterianas', 'Medicamento para prevenir a infecção pelo HIV antes da exposição', 'Vacina contra o HIV', 'Medicamento para tratar infecções virais', 'Tratamento para o HIV que utiliza uma combinação de medicamentos'],
      answer: 'Tratamento para o HIV que utiliza uma combinação de medicamentos'
    },
    {
      question: 'Qual é a principal via de transmissão do vírus da Zika?',
      options: ['Transmissão sexual', 'Transmissão pelo ar', 'Transmissão por alimentos contaminados', 'Transmissão por picada de mosquito', 'Transmissão por contato com sangue infectado'],
      answer: 'Transmissão por picada de mosquito'
    },
    {
      question: 'O que é a vacina contra a febre amarela?',
      options: ['Vacina contra a gripe', 'Vacina contra o sarampo, caxumba e rubéola', 'Vacina contra a tuberculose', 'Vacina contra o papilomavírus humano', 'Vacina contra a febre amarela'],
      answer: 'Vacina contra a febre amarela'
    },
    {
      question: 'Quais são os sintomas da hepatite A?',
      options: ['Dor de cabeça e tontura', 'Dor abdominal intensa', 'Febre, fadiga e amarelamento da pele', 'Erupção cutânea e coceira', 'Calafrios, febre intermitente e sudorese'],
      answer: 'Febre, fadiga e amarelamento da pele'
    },
    {
      question: 'O que é a vacina contra a meningite?',
      options: ['Vacina contra a gripe', 'Vacina contra o sarampo, caxumba e rubéola', 'Vacina contra a tuberculose', 'Vacina contra a meningococo', 'Vacina contra a poliomielite'],
      answer: 'Vacina contra a meningococo'
    },
    {
      question: 'Qual é o agente causador da doença de Chagas?',
      options: ['Bactéria', 'Vírus', 'Parasita', 'Fungo', 'Protozoário'],
      answer: 'Parasita'
    },
    {
      question: 'O que é a vacina contra a poliomielite?',
      options: ['Vacina contra a gripe', 'Vacina contra o sarampo, caxumba e rubéola', 'Vacina contra a tuberculose', 'Vacina contra a poliovírus', 'Vacina contra a febre amarela'],
      answer: 'Vacina contra a poliovírus'
    },
    {
      question: 'Quais são os sintomas da febre do Nilo Ocidental?',
      options: ['Dor de cabeça e tontura', 'Febre, fadiga e amarelamento da pele', 'Erupção cutânea e coceira', 'Dor abdominal intensa', 'Febre, dor de cabeça e dores musculares'],
      answer: 'Febre, dor de cabeça e dores musculares'
    },
    {
      question: 'O que é a vacina contra a varíola?',
      options: ['Vacina contra a gripe', 'Vacina contra o sarampo, caxumba e rubéola', 'Vacina contra a tuberculose', 'Vacina contra a varíola', 'Vacina contra a poliomielite'],
      answer: 'Vacina contra a varíola'
    },
    {
      question: 'Quais são os sintomas clássicos da influenza (gripe)?',
      options: ['Dor abdominal e vômitos', 'Dor de cabeça e tontura', 'Febre, tosse e dores musculares', 'Erupção cutânea e coceira', 'Dor nos olhos e sensibilidade à luz'],
      answer: 'Febre, tosse e dores musculares'
    },
    {
      question: 'Quais são os sintomas da diabetes tipo 2?',
      options: ['Dor de cabeça e tontura', 'Dor abdominal intensa', 'Sede excessiva, urina frequente e fome constante', 'Erupção cutânea e coceira', 'Dor nos olhos e sensibilidade à luz'],
      answer: 'Sede excessiva, urina frequente e fome constante'
    },
    {
      question: 'O que pode ser um sintoma de apendicite?',
      options: ['Dor abdominal intensa, especialmente no lado direito', 'Febre e calafrios', 'Dor de cabeça e tontura', 'Erupção cutânea e coceira', 'Dor nos olhos e sensibilidade à luz'],
      answer: 'Dor abdominal intensa, especialmente no lado direito'
    },
    {
      question: 'Quais são os sintomas da síndrome do intestino irritável (SII)?',
      options: ['Dor de cabeça e tontura', 'Dor abdominal e vômitos', 'Alterações nos padrões de evacuação, como diarreia ou constipação', 'Erupção cutânea e coceira', 'Dor nos olhos e sensibilidade à luz'],
      answer: 'Alterações nos padrões de evacuação, como diarreia ou constipação'
    },
    {
      question: 'O que pode causar dor no peito e dificuldade respiratória?',
      options: ['Dor abdominal intensa', 'Infecção por vírus', 'Ataque cardíaco', 'Erupção cutânea e coceira', 'Dor nos olhos e sensibilidade à luz'],
      answer: 'Ataque cardíaco'
    },
    {
      question: 'Quais são os sintomas da enxaqueca?',
      options: ['Dor abdominal intensa', 'Dor nos olhos e sensibilidade à luz', 'Dor de cabeça pulsante, muitas vezes acompanhada de náusea e sensibilidade à luz e ao som', 'Febre e calafrios', 'Erupção cutânea e coceira'],
      answer: 'Dor de cabeça pulsante, muitas vezes acompanhada de náusea e sensibilidade à luz e ao som'
    },
    {
      question: 'O que pode causar dor nas articulações e inflamação?',
      options: ['Dor abdominal intensa', 'Infecção por vírus', 'Artrite', 'Erupção cutânea e coceira', 'Dor nos olhos e sensibilidade à luz'],
      answer: 'Artrite'
    },
    {
      question: 'Quais são os sintomas de uma infecção do trato urinário (ITU)?',
      options: ['Dor abdominal intensa', 'Dor de cabeça e tontura', 'Dor ao urinar, aumento da frequência urinária e urgência', 'Erupção cutânea e coceira', 'Dor nos olhos e sensibilidade à luz'],
      answer: 'Dor ao urinar, aumento da frequência urinária e urgência'
    },
    {
      question: 'O que pode ser um sintoma de anemia?',
      options: ['Dor abdominal intensa', 'Dor de cabeça e tontura', 'Fadiga, fraqueza e palidez', 'Erupção cutânea e coceira', 'Dor nos olhos e sensibilidade à luz'],
      answer: 'Fadiga, fraqueza e palidez'
    },
    {
      question: 'Quais são os sintomas da doença de Crohn?',
      options: ['Dor abdominal intensa', 'Dor de cabeça e tontura', 'Diarreia persistente, cólicas abdominais e perda de peso', 'Erupção cutânea e coceira', 'Dor nos olhos e sensibilidade à luz'],
      answer: 'Diarreia persistente, cólicas abdominais e perda de peso'
    },
    {
      question: 'O que pode causar falta de ar e chiado no peito?',
      options: ['Dor abdominal intensa', 'Asma', 'Infecção por vírus', 'Erupção cutânea e coceira', 'Dor nos olhos e sensibilidade à luz'],
      answer: 'Asma'
    },
    {
      question: 'Quais são os sintomas da doença de Alzheimer?',
      options: ['Perda de memória, confusão e dificuldade de concentração', 'Dor de cabeça e tontura', 'Dor abdominal intensa', 'Erupção cutânea e coceira', 'Dor nos olhos e sensibilidade à luz'],
      answer: 'Perda de memória, confusão e dificuldade de concentração'
    },
    {
      question: 'O que pode causar inchaço abdominal e desconforto após as refeições?',
      options: ['Dor abdominal intensa', 'Infecção por vírus', 'Síndrome do intestino irritável (SII)', 'Erupção cutânea e coceira', 'Dor nos olhos e sensibilidade à luz'],
      answer: 'Síndrome do intestino irritável (SII)'
    },
    {
      question: 'Quais são os sintomas da esquizofrenia?',
      options: ['Alucinações, delírios e dificuldade de concentração', 'Dor de cabeça e tontura', 'Dor abdominal intensa', 'Erupção cutânea e coceira', 'Dor nos olhos e sensibilidade à luz'],
      answer: 'Alucinações, delírios e dificuldade de concentração'
    },
    {
      question: 'O que pode causar dor crônica nas costas?',
      options: ['Dor abdominal intensa', 'Hérnia de disco', 'Infecção por vírus', 'Erupção cutânea e coceira', 'Dor nos olhos e sensibilidade à luz'],
      answer: 'Hérnia de disco'
    },
    {
      question: 'Quais são os sintomas da artrite reumatoide?',
      options: ['Dor abdominal intensa', 'Dor de cabeça e tontura', 'Inchaço e dor nas articulações', 'Erupção cutânea e coceira', 'Dor nos olhos e sensibilidade à luz'],
      answer: 'Inchaço e dor nas articulações'
    },
    {
      question: 'O que pode causar sangramento nas gengivas?',
      options: ['Dor abdominal intensa', 'Infecção por vírus', 'Gengivite', 'Erupção cutânea e coceira', 'Dor nos olhos e sensibilidade à luz'],
      answer: 'Gengivite'
    },
    {
      question: 'Quais são os sintomas da fibromialgia?',
      options: ['Dor abdominal intensa', 'Dor de cabeça e tontura', 'Dor generalizada, fadiga e distúrbios do sono', 'Erupção cutânea e coceira', 'Dor nos olhos e sensibilidade à luz'],
      answer: 'Dor generalizada, fadiga e distúrbios do sono'
    },
    {
      question: 'O que pode causar perda de peso não intencional?',
      options: ['Dor abdominal intensa', 'Infecção por vírus', 'Doença inflamatória intestinal', 'Erupção cutânea e coceira', 'Dor nos olhos e sensibilidade à luz'],
      answer: 'Doença inflamatória intestinal'
    },
    {
      question: 'Quais são os sintomas da endometriose?',
      options: ['Dor abdominal intensa durante o período menstrual', 'Dor de cabeça e tontura', 'Infecção por vírus', 'Erupção cutânea e coceira', 'Dor nos olhos e sensibilidade à luz'],
      answer: 'Dor abdominal intensa durante o período menstrual'
    },
    {
      question: 'O que pode causar tosse persistente e falta de ar?',
      options: ['Dor abdominal intensa', 'Asma', 'Infecção por vírus', 'Erupção cutânea e coceira', 'Pneumonia'],
      answer: 'Pneumonia'
    },
    {
      question: 'Quais são os sintomas da doença de Lyme?',
      options: ['Dor abdominal intensa', 'Dor de cabeça e tontura', 'Fadiga, febre e erupção cutânea em forma de alvo', 'Erupção cutânea e coceira', 'Dor nos olhos e sensibilidade à luz'],
      answer: 'Fadiga, febre e erupção cutânea em forma de alvo'
    },
    {
      question: 'O que pode causar sangue na urina?',
      options: ['Dor abdominal intensa', 'Infecção por vírus', 'Pedras nos rins', 'Erupção cutânea e coceira', 'Dor nos olhos e sensibilidade à luz'],
      answer: 'Pedras nos rins'
    },
    {
      question: 'Quais são os sintomas da síndrome de burnout?',
      options: ['Dor abdominal intensa', 'Fadiga extrema, falta de motivação e dificuldade de concentração', 'Dor de cabeça e tontura', 'Erupção cutânea e coceira', 'Dor nos olhos e sensibilidade à luz'],
      answer: 'Fadiga extrema, falta de motivação e dificuldade de concentração'
    },
    {
      question: 'O que pode causar dormência e formigamento nas extremidades?',
      options: ['Dor abdominal intensa', 'Lesão nos nervos ou compressão', 'Infecção por vírus', 'Erupção cutânea e coceira', 'Dor nos olhos e sensibilidade à luz'],
      answer: 'Lesão nos nervos ou compressão'
    },
    {
      question: 'O que pode aliviar a dor de cabeça?',
      options: ['Descanso e hidratação', 'Consumo excessivo de cafeína', 'Exposição prolongada ao sol', 'Ingestão de alimentos picantes', 'Uso frequente de analgésicos'],
      answer: 'Descanso e hidratação'
    },
    {
      question: 'Qual a recomendação para aliviar a febre?',
      options: ['Tomar banho gelado', 'Usar roupas quentes', 'Evitar a ingestão de líquidos', 'Tomar medicamentos antipiréticos', 'Permanecer em um ambiente quente'],
      answer: 'Tomar medicamentos antipiréticos'
    },
    {
      question: 'O que pode ser útil para aliviar a dor muscular?',
      options: ['Repouso e aplicação de calor', 'Exercício intenso', 'Consumo de bebidas alcoólicas', 'Exposição ao frio extremo', 'Permanecer em posição desconfortável por longos períodos'],
      answer: 'Repouso e aplicação de calor'
    },
    {
      question: 'Como aliviar a congestão nasal?',
      options: ['Inalação de vapor e uso de umidificador', 'Exposição prolongada ao ar frio', 'Uso frequente de descongestionantes nasais', 'Evitar a ingestão de líquidos', 'Consumo excessivo de alimentos picantes'],
      answer: 'Inalação de vapor e uso de umidificador'
    },
    {
      question: 'O que pode auxiliar na redução da tosse?',
      options: ['Consumo de alimentos gelados', 'Beber água morna com mel', 'Inalação de fumaça de cigarro', 'Uso frequente de antitussígenos', 'Evitar a ingestão de líquidos'],
      answer: 'Beber água morna com mel'
    },
    {
      question: 'Como tratar efetivamente a diarreia?',
      options: ['Consumir alimentos gordurosos', 'Evitar a ingestão de líquidos', 'Usar medicamentos antidiarreicos', 'Aumentar a ingestão de fibras', 'Permanecer em posição sentada por longos períodos'],
      answer: 'Aumentar a ingestão de fibras'
    },
    {
      question: 'O que pode ajudar a aliviar a dor de garganta?',
      options: ['Consumo frequente de alimentos ácidos', 'Gargarejo com água salgada', 'Evitar a hidratação', 'Uso excessivo de descongestionantes nasais', 'Consumir alimentos muito quentes'],
      answer: 'Gargarejo com água salgada'
    },
    {
      question: 'Qual a recomendação para aliviar a dor nas articulações?',
      options: ['Exercício intenso', 'Aplicação de compressas frias', 'Uso frequente de analgésicos', 'Evitar o repouso', 'Consumo de alimentos picantes'],
      answer: 'Aplicação de compressas frias'
    },
    {
      question: 'Como reduzir a irritação nos olhos?',
      options: ['Coçar os olhos regularmente', 'Usar colírios desconhecidos', 'Evitar a exposição a fumaça e poeira', 'Permanecer por longos períodos em ambientes empoeirados', 'Usar lentes de contato por mais tempo do que o recomendado'],
      answer: 'Evitar a exposição a fumaça e poeira'
    },
    {
      question: 'O que pode auxiliar na diminuição do inchaço?',
      options: ['Consumo excessivo de alimentos ricos em sódio', 'Repouso e elevação da área afetada', 'Uso frequente de analgésicos', 'Permanecer em pé por longos períodos', 'Exposição prolongada ao calor'],
      answer: 'Repouso e elevação da área afetada'
    },
    {
      question: 'Como aliviar a dor abdominal?',
      options: ['Consumo frequente de alimentos gordurosos', 'Uso frequente de analgésicos', 'Exercício intenso', 'Aplicação de compressas quentes', 'Evitar a ingestão de líquidos'],
      answer: 'Aplicação de compressas quentes'
    },
    {
      question: 'O que pode ser útil para reduzir a ansiedade?',
      options: ['Consumo excessivo de cafeína', 'Prática regular de exercícios físicos', 'Permanecer em ambientes agitados', 'Isolamento social prolongado', 'Uso frequente de substâncias psicoativas'],
      answer: 'Prática regular de exercícios físicos'
    },
    {
      question: 'Qual a recomendação para aliviar a insônia?',
      options: ['Consumo de bebidas energéticas à noite', 'Exposição prolongada à luz antes de dormir', 'Rotina de sono regular', 'Uso frequente de dispositivos eletrônicos na cama', 'Consumo de alimentos pesados antes de dormir'],
      answer: 'Rotina de sono regular'
    },
    {
      question: 'O que pode ser útil para aliviar a enxaqueca?',
      options: ['Consumo frequente de alimentos ricos em cafeína', 'Exposição prolongada à luz brilhante', 'Repouso em ambiente silencioso e escuro', 'Uso frequente de analgésicos', 'Permanecer em ambientes barulhentos'],
      answer: 'Repouso em ambiente silencioso e escuro'
    },
    {
      question: 'Como tratar efetivamente a constipação?',
      options: ['Consumo de alimentos ricos em fibras', 'Evitar a hidratação', 'Uso frequente de laxantes', 'Permanecer em posição sentada por longos períodos', 'Consumo excessivo de alimentos picantes'],
      answer: 'Consumo de alimentos ricos em fibras'
    },
    {
      question: 'O que pode ser útil para aliviar a fadiga?',
      options: ['Prática regular de exercícios físicos intensos', 'Consumo frequente de alimentos ricos em açúcares', 'Descanso adequado e sono suficiente', 'Uso frequente de substâncias estimulantes', 'Permanecer em ambientes agitados por longos períodos'],
      answer: 'Descanso adequado e sono suficiente'
    },
    {
      question: 'Como reduzir os sintomas de alergia?',
      options: ['Permanecer em ambientes empoeirados', 'Uso frequente de descongestionantes nasais', 'Evitar o contato com alérgenos conhecidos', 'Consumo de alimentos ricos em alérgenos', 'Ignorar os sintomas e continuar com a rotina normal'],
      answer: 'Evitar o contato com alérgenos conhecidos'
    },
    {
      question: 'O que pode ser útil para aliviar a dor lombar?',
      options: ['Permanecer em uma posição desconfortável por longos períodos', 'Exercícios intensos sem aquecimento adequado', 'Uso frequente de analgésicos', 'Aplicação de compressas frias', 'Adotar uma postura correta e praticar exercícios de fortalecimento'],
      answer: 'Adotar uma postura correta e praticar exercícios de fortalecimento'
    },
    {
      question: 'Como aliviar a irritação na pele?',
      options: ['Coçar a pele constantemente', 'Aplicar produtos desconhecidos na pele', 'Evitar a exposição ao sol', 'Hidratação regular e uso de produtos suaves', 'Permanecer em ambientes úmidos por longos períodos'],
      answer: 'Hidratação regular e uso de produtos suaves'
    },
    {
      question: 'O que pode ser útil para aliviar a dor nas costas?',
      options: ['Permanecer em uma posição desconfortável por longos períodos', 'Exercícios intensos sem aquecimento adequado', 'Uso frequente de analgésicos', 'Aplicação de compressas quentes', 'Adotar uma postura correta e praticar exercícios de fortalecimento'],
      answer: 'Adotar uma postura correta e praticar exercícios de fortalecimento'
    },
    {
      question: 'Como tratar efetivamente a acne?',
      options: ['Aplicar produtos oleosos na pele', 'Evitar a limpeza regular da pele', 'Uso frequente de produtos de cuidado com a pele com ácido salicílico ou peróxido de benzoíla', 'Ignorar a higiene facial', 'Exposição prolongada ao sol'],
      answer: 'Uso frequente de produtos de cuidado com a pele com ácido salicílico ou peróxido de benzoíla'
    },
    {
      question: 'O que pode ser útil para aliviar a azia?',
      options: ['Consumo frequente de alimentos picantes', 'Ingerir grandes quantidades de alimentos em uma única refeição', 'Uso frequente de antiácidos', 'Evitar a ingestão de líquidos', 'Permanecer em posição deitada imediatamente após as refeições'],
      answer: 'Uso frequente de antiácidos'
    },
    {
      question: 'Como reduzir a sensação de inchaço abdominal?',
      options: ['Consumo excessivo de alimentos ricos em fibras', 'Evitar a hidratação', 'Uso frequente de laxantes', 'Ingerir grandes quantidades de alimentos em uma única refeição', 'Consumo de alimentos ricos em gordura'],
      answer: 'Consumo excessivo de alimentos ricos em fibras'
    },
    {
      question: 'O que pode aliviar a dor de cabeça?',
      options: ['Descanso e hidratação', 'Consumo excessivo de cafeína', 'Exposição prolongada ao sol', 'Ingestão de alimentos picantes', 'Uso frequente de analgésicos'],
      answer: 'Descanso e hidratação'
    },
    {
      question: 'Qual a recomendação para aliviar a febre?',
      options: ['Tomar banho gelado', 'Usar roupas quentes', 'Evitar a ingestão de líquidos', 'Tomar medicamentos antipiréticos', 'Permanecer em um ambiente quente'],
      answer: 'Tomar medicamentos antipiréticos'
    },
    {
      question: 'O que pode ser útil para aliviar a dor muscular?',
      options: ['Repouso e aplicação de calor', 'Exercício intenso', 'Consumo de bebidas alcoólicas', 'Exposição ao frio extremo', 'Permanecer em posição desconfortável por longos períodos'],
      answer: 'Repouso e aplicação de calor'
    },
    {
      question: 'Como aliviar a congestão nasal?',
      options: ['Inalação de vapor e uso de umidificador', 'Exposição prolongada ao ar frio', 'Uso frequente de descongestionantes nasais', 'Evitar a ingestão de líquidos', 'Consumo excessivo de alimentos picantes'],
      answer: 'Inalação de vapor e uso de umidificador'
    },
    {
      question: 'O que pode auxiliar na redução da tosse?',
      options: ['Consumo de alimentos gelados', 'Beber água morna com mel', 'Inalação de fumaça de cigarro', 'Uso frequente de antitussígenos', 'Evitar a ingestão de líquidos'],
      answer: 'Beber água morna com mel'
    },
    {
      question: 'Como tratar efetivamente a diarreia?',
      options: ['Consumir alimentos gordurosos', 'Evitar a ingestão de líquidos', 'Usar medicamentos antidiarreicos', 'Aumentar a ingestão de fibras', 'Permanecer em posição sentada por longos períodos'],
      answer: 'Aumentar a ingestão de fibras'
    },
    {
      question: 'O que pode ajudar a aliviar a dor de garganta?',
      options: ['Consumo frequente de alimentos ácidos', 'Gargarejo com água salgada', 'Evitar a hidratação', 'Uso excessivo de descongestionantes nasais', 'Consumir alimentos muito quentes'],
      answer: 'Gargarejo com água salgada'
    },
    {
      question: 'Qual a recomendação para aliviar a dor nas articulações?',
      options: ['Exercício intenso', 'Aplicação de compressas frias', 'Uso frequente de analgésicos', 'Evitar o repouso', 'Consumo de alimentos picantes'],
      answer: 'Aplicação de compressas frias'
    },
    {
      question: 'Como reduzir a irritação nos olhos?',
      options: ['Coçar os olhos regularmente', 'Usar colírios desconhecidos', 'Evitar a exposição a fumaça e poeira', 'Permanecer por longos períodos em ambientes empoeirados', 'Usar lentes de contato por mais tempo do que o recomendado'],
      answer: 'Evitar a exposição a fumaça e poeira'
    },
    {
      question: 'O que pode auxiliar na diminuição do inchaço?',
      options: ['Consumo excessivo de alimentos ricos em sódio', 'Repouso e elevação da área afetada', 'Uso frequente de analgésicos', 'Permanecer em pé por longos períodos', 'Exposição prolongada ao calor'],
      answer: 'Repouso e elevação da área afetada'
    },
    {
      question: 'Como aliviar a dor abdominal?',
      options: ['Consumo frequente de alimentos gordurosos', 'Uso frequente de analgésicos', 'Exercício intenso', 'Aplicação de compressas quentes', 'Evitar a ingestão de líquidos'],
      answer: 'Aplicação de compressas quentes'
    },
    {
      question: 'O que pode ser útil para reduzir a ansiedade?',
      options: ['Consumo excessivo de cafeína', 'Prática regular de exercícios físicos', 'Permanecer em ambientes agitados', 'Isolamento social prolongado', 'Uso frequente de substâncias psicoativas'],
      answer: 'Prática regular de exercícios físicos'
    },
    {
      question: 'Qual a recomendação para aliviar a insônia?',
      options: ['Consumo de bebidas energéticas à noite', 'Exposição prolongada à luz antes de dormir', 'Rotina de sono regular', 'Uso frequente de dispositivos eletrônicos na cama', 'Consumo de alimentos pesados antes de dormir'],
      answer: 'Rotina de sono regular'
    },
    {
      question: 'O que pode ser útil para aliviar a enxaqueca?',
      options: ['Consumo frequente de alimentos ricos em cafeína', 'Exposição prolongada à luz brilhante', 'Repouso em ambiente silencioso e escuro', 'Uso frequente de analgésicos', 'Permanecer em ambientes barulhentos'],
      answer: 'Repouso em ambiente silencioso e escuro'
    },
    {
      question: 'Como tratar efetivamente a constipação?',
      options: ['Consumo de alimentos ricos em fibras', 'Evitar a hidratação', 'Uso frequente de laxantes', 'Permanecer em posição sentada por longos períodos', 'Consumo excessivo de alimentos picantes'],
      answer: 'Consumo de alimentos ricos em fibras'
    },
    {
      question: 'O que pode ser útil para aliviar a fadiga?',
      options: ['Prática regular de exercícios físicos intensos', 'Consumo frequente de alimentos ricos em açúcares', 'Descanso adequado e sono suficiente', 'Uso frequente de substâncias estimulantes', 'Permanecer em ambientes agitados por longos períodos'],
      answer: 'Descanso adequado e sono suficiente'
    },
    {
      question: 'Como reduzir os sintomas de alergia?',
      options: ['Permanecer em ambientes empoeirados', 'Uso frequente de descongestionantes nasais', 'Evitar o contato com alérgenos conhecidos', 'Consumo de alimentos ricos em alérgenos', 'Ignorar os sintomas e continuar com a rotina normal'],
      answer: 'Evitar o contato com alérgenos conhecidos'
    },
    {
      question: 'O que pode ser útil para aliviar a dor lombar?',
      options: ['Permanecer em uma posição desconfortável por longos períodos', 'Exercícios intensos sem aquecimento adequado', 'Uso frequente de analgésicos', 'Aplicação de compressas frias', 'Adotar uma postura correta e praticar exercícios de fortalecimento'],
      answer: 'Adotar uma postura correta e praticar exercícios de fortalecimento'
    },
    {
      question: 'Como aliviar a irritação na pele?',
      options: ['Coçar a pele constantemente', 'Aplicar produtos desconhecidos na pele', 'Evitar a exposição ao sol', 'Hidratação regular e uso de produtos suaves', 'Permanecer em ambientes úmidos por longos períodos'],
      answer: 'Hidratação regular e uso de produtos suaves'
    },
    {
      question: 'O que pode ser útil para aliviar a dor nas costas?',
      options: ['Permanecer em uma posição desconfortável por longos períodos', 'Exercícios intensos sem aquecimento adequado', 'Uso frequente de analgésicos', 'Aplicação de compressas quentes', 'Adotar uma postura correta e praticar exercícios de fortalecimento'],
      answer: 'Adotar uma postura correta e praticar exercícios de fortalecimento'
    },
    {
      question: 'Como tratar efetivamente a acne?',
      options: ['Aplicar produtos oleosos na pele', 'Evitar a limpeza regular da pele', 'Uso frequente de produtos de cuidado com a pele com ácido salicílico ou peróxido de benzoíla', 'Ignorar a higiene facial', 'Exposição prolongada ao sol'],
      answer: 'Uso frequente de produtos de cuidado com a pele com ácido salicílico ou peróxido de benzoíla'
    },
    {
      question: 'O que pode ser útil para aliviar a azia?',
      options: ['Consumo frequente de alimentos picantes', 'Ingerir grandes quantidades de alimentos em uma única refeição', 'Uso frequente de antiácidos', 'Evitar a ingestão de líquidos', 'Permanecer em posição deitada imediatamente após as refeições'],
      answer: 'Uso frequente de antiácidos'
    },
    {
      question: 'Como reduzir a sensação de inchaço abdominal?',
      options: ['Consumo excessivo de alimentos ricos em fibras', 'Evitar a hidratação', 'Uso frequente de laxantes', 'Ingerir grandes quantidades de alimentos em uma única refeição', 'Consumo de alimentos ricos em gordura'],
      answer: 'Consumo excessivo de alimentos ricos em fibras'
    },
    {
      question: 'O que pode ser útil para aliviar a dor nos olhos causada por cansaço?',
      options: ['Permanecer por longos períodos em frente a telas de computador', 'Aplicação frequente de colírios desconhecidos', 'Piscar os olhos rapidamente', 'Descanso visual regular e piscar dos olhos', 'Ignorar os sintomas e continuar com a rotina normal'],
      answer: 'Descanso visual regular e piscar dos olhos'
    },
    {
      question: 'Qual a recomendação para aliviar a sensação de queimação ao urinar?',
      options: ['Ingerir grandes quantidades de alimentos picantes', 'Uso frequente de antitérmicos', 'Evitar a ingestão de líquidos', 'Consumo de água abundante e tratamento médico adequado', 'Permanecer em posição sentada por longos períodos'],
      answer: 'Consumo de água abundante e tratamento médico adequado'
    },
    {
      question: 'O que pode auxiliar na redução da ansiedade?',
      options: ['Consumo excessivo de álcool', 'Isolamento social prolongado', 'Prática regular de técnicas de relaxamento', 'Ignorar os sentimentos de ansiedade', 'Uso frequente de substâncias psicoativas'],
      answer: 'Prática regular de técnicas de relaxamento'
    },
    {
      question: 'Como tratar efetivamente a dor de ouvido?',
      options: ['Introdução de objetos estranhos no ouvido', 'Aplicação de calor direto no ouvido', 'Uso frequente de analgésicos', 'Colocar compressas frias na área afetada', 'Consulta a um profissional de saúde para avaliação e tratamento adequados'],
      answer: 'Consulta a um profissional de saúde para avaliação e tratamento adequados'
    },
    {
      question: 'O que pode ser útil para aliviar a prisão de ventre?',
      options: ['Evitar a ingestão de líquidos', 'Consumo frequente de alimentos ricos em fibras', 'Uso frequente de laxantes', 'Ingerir grandes quantidades de alimentos em uma única refeição', 'Permanecer em posição sentada por longos períodos'],
      answer: 'Consumo frequente de alimentos ricos em fibras'
    },
    // ... (adicionar mais perguntas conforme necessário)

    {
      question: 'O que pode ajudar a aliviar a dor nas articulações?',
      options: ['Exercício físico moderado e alongamento', 'Permanecer em repouso por longos períodos', 'Consumo excessivo de alimentos processados', 'Uso frequente de analgésicos', 'Exposição prolongada ao frio'],
      answer: 'Exercício físico moderado e alongamento'
    },
    {
      question: 'Qual a recomendação para aliviar a dor de garganta?',
      options: ['Gargarejo com água morna e sal', 'Consumo frequente de alimentos gelados', 'Uso excessivo de descongestionantes nasais', 'Evitar a hidratação', 'Ficar em ambientes com ar condicionado por longos períodos'],
      answer: 'Gargarejo com água morna e sal'
    },
    {
      question: 'Como aliviar a coceira na pele?',
      options: ['Aplicar loções desconhecidas', 'Evitar a hidratação', 'Coçar a pele frequentemente', 'Utilizar roupas apertadas', 'Hidratar a pele regularmente e evitar irritantes conhecidos'],
      answer: 'Hidratar a pele regularmente e evitar irritantes conhecidos'
    },
    {
      question: 'O que pode auxiliar na redução da pressão arterial?',
      options: ['Consumo excessivo de alimentos ricos em sódio', 'Prática regular de exercícios aeróbicos', 'Ficar sedentário por longos períodos', 'Ignorar a ingestão de líquidos', 'Uso frequente de estimulantes'],
      answer: 'Prática regular de exercícios aeróbicos'
    },
    {
      question: 'Como tratar efetivamente a dor de dente?',
      options: ['Evitar a escovação regular dos dentes', 'Uso frequente de analgésicos', 'Aplicação de calor direto no dente', 'Consumo de alimentos muito gelados', 'Consulta a um dentista para avaliação e tratamento adequados'],
      answer: 'Consulta a um dentista para avaliação e tratamento adequados'
    },
    {
      question: 'O que pode auxiliar na redução do estresse?',
      options: ['Isolamento social prolongado', 'Prática regular de atividades relaxantes, como meditação', 'Consumo excessivo de cafeína', 'Ignorar os sinais de estresse', 'Ficar constantemente em ambientes barulhentos'],
      answer: 'Prática regular de atividades relaxantes, como meditação'
    },
    {
      question: 'Como aliviar a dor nas costas causada por má postura?',
      options: ['Permanecer em uma posição desconfortável por longos períodos', 'Prática de exercícios de fortalecimento muscular', 'Uso frequente de analgésicos', 'Ignorar a postura correta', 'Exercícios intensos sem orientação'],
      answer: 'Prática de exercícios de fortalecimento muscular'
    },
    {
      question: 'O que pode ajudar a reduzir a ansiedade social?',
      options: ['Evitar situações sociais desafiadoras', 'Prática de técnicas de enfrentamento', 'Consumo frequente de álcool', 'Ignorar os sintomas de ansiedade', 'Ficar em ambientes lotados por longos períodos'],
      answer: 'Prática de técnicas de enfrentamento'
    },
    {
      question: 'Como tratar efetivamente a dor no joelho?',
      options: ['Ignorar a prática de atividades físicas', 'Uso frequente de analgésicos', 'Permanecer em posição de joelhos por longos períodos', 'Aplicação de compressas frias', 'Consulta a um fisioterapeuta para orientação adequada'],
      answer: 'Consulta a um fisioterapeuta para orientação adequada'
    },
    {
      question: 'O que pode auxiliar na redução da acne?',
      options: ['Coçar a pele frequentemente', 'Ignorar a higiene facial', 'Uso frequente de produtos de cuidado com a pele com ácido salicílico ou peróxido de benzoíla', 'Exposição prolongada ao sol', 'Manter a pele limpa e utilizar produtos adequados'],
      answer: 'Manter a pele limpa e utilizar produtos adequados'
    },
    {
      question: 'Qual a recomendação para aliviar a dor nas pernas causada por cansaço?',
      options: ['Permanecer em pé por longos períodos', 'Prática regular de exercícios de fortalecimento', 'Uso frequente de analgésicos', 'Ignorar a postura correta', 'Elevar as pernas e descansar'],
      answer: 'Elevar as pernas e descansar'
    },
    {
      question: 'Como tratar efetivamente a dor no ombro?',
      options: ['Ignorar a prática de exercícios de fortalecimento', 'Uso frequente de analgésicos', 'Permanecer em posição desconfortável por longos períodos', 'Aplicação de compressas quentes', 'Consulta a um fisioterapeuta para orientação adequada'],
      answer: 'Consulta a um fisioterapeuta para orientação adequada'
    },
    {
      question: 'O que pode auxiliar na redução da celulite?',
      options: ['Evitar a prática de exercícios físicos', 'Consumo excessivo de alimentos ricos em gordura', 'Uso frequente de cremes desconhecidos', 'Manter a hidratação da pele e praticar atividades físicas regularmente', 'Ignorar a importância da alimentação saudável'],
      answer: 'Manter a hidratação da pele e praticar atividades físicas regularmente'
    },
    {
      question: 'Como aliviar a dor no pescoço causada por tensão?',
      options: ['Permanecer em posição desconfortável por longos períodos', 'Uso frequente de analgésicos', 'Ignorar a postura correta', 'Aplicação de compressas quentes', 'Prática de alongamentos e exercícios de relaxamento'],
      answer: 'Prática de alongamentos e exercícios de relaxamento'
    },
    {
      question: 'O que pode ser útil para aliviar a dor nos pés?',
      options: ['Ignorar o uso de calçados adequados', 'Uso frequente de analgésicos', 'Permanecer em pé por longos períodos', 'Imersão dos pés em água gelada', 'Utilizar palmilhas ortopédicas e descansar os pés regularmente'],
      answer: 'Utilizar palmilhas ortopédicas e descansar os pés regularmente'
    },
    {
      question: 'Qual a recomendação para aliviar a dor no tornozelo causada por entorse?',
      options: ['Ignorar a necessidade de repouso', 'Uso frequente de analgésicos', 'Continuar a prática de atividades físicas intensas', 'Aplicação de compressas quentes', 'Repouso, aplicação de gelo e elevação da perna'],
      answer: 'Repouso, aplicação de gelo e elevação da perna'
    },
    {
      question: 'O que pode ser útil para aliviar a dor no quadril causada por sobrecarga?',
      options: ['Ignorar a prática de exercícios físicos', 'Uso frequente de analgésicos', 'Permanecer em posição desconfortável por longos períodos', 'Aplicação de compressas quentes', 'Consulta a um fisioterapeuta para orientação adequada'],
      answer: 'Consulta a um fisioterapeuta para orientação adequada'
    },
    {
      question: 'Como tratar efetivamente a dor no pulso causada por esforço repetitivo?',
      options: ['Ignorar a necessidade de pausas durante atividades repetitivas', 'Uso frequente de analgésicos', 'Continuar a prática de atividades que causam desconforto', 'Aplicação de compressas quentes', 'Adoção de técnicas ergonômicas e pausas regulares'],
      answer: 'Adoção de técnicas ergonômicas e pausas regulares'
    },
    {
      question: 'O que pode auxiliar na redução da dor no abdômen causada por cólicas menstruais?',
      options: ['Ignorar a importância do repouso', 'Uso frequente de analgésicos', 'Consumo excessivo de cafeína', 'Aplicação de calor local', 'Repouso, hidratação e uso de analgésicos conforme orientação médica'],
      answer: 'Repouso, hidratação e uso de analgésicos conforme orientação médica'
    },
    {
      question: 'Qual a recomendação para aliviar a dor no cotovelo causada por esforço repetitivo?',
      options: ['Ignorar a necessidade de pausas durante atividades repetitivas', 'Uso frequente de analgésicos', 'Continuar a prática de atividades que causam desconforto', 'Aplicação de compressas quentes', 'Adoção de técnicas ergonômicas e pausas regulares'],
      answer: 'Adoção de técnicas ergonômicas e pausas regulares'
    },
    {
      question: 'O que pode ser útil para aliviar a dor no peito causada por estresse?',
      options: ['Ignorar a prática de técnicas de relaxamento', 'Uso frequente de analgésicos', 'Permanecer em ambientes barulhentos', 'Aplicação de compressas quentes', 'Prática de atividades relaxantes e gestão do estresse'],
      answer: 'Prática de atividades relaxantes e gestão do estresse'
    },
    {
      question: 'O que pode ser útil para aliviar a dor nos olhos causada por cansaço?',
      options: ['Permanecer por longos períodos em frente a telas de computador', 'Aplicação frequente de colírios desconhecidos', 'Piscar os olhos rapidamente', 'Descanso visual regular e piscar dos olhos', 'Ignorar os sintomas e continuar com a rotina normal'],
      answer: 'Descanso visual regular e piscar dos olhos'
    },
    {
      question: 'Qual a recomendação para aliviar a sensação de queimação ao urinar?',
      options: ['Ingerir grandes quantidades de alimentos picantes', 'Uso frequente de antitérmicos', 'Evitar a ingestão de líquidos', 'Consumo de água abundante e tratamento médico adequado', 'Permanecer em posição sentada por longos períodos'],
      answer: 'Consumo de água abundante e tratamento médico adequado'
    },
    {
      question: 'O que pode auxiliar na redução da ansiedade?',
      options: ['Consumo excessivo de álcool', 'Isolamento social prolongado', 'Prática regular de técnicas de relaxamento', 'Ignorar os sentimentos de ansiedade', 'Uso frequente de substâncias psicoativas'],
      answer: 'Prática regular de técnicas de relaxamento'
    },
    {
      question: 'Como tratar efetivamente a dor de ouvido?',
      options: ['Introdução de objetos estranhos no ouvido', 'Aplicação de calor direto no ouvido', 'Uso frequente de analgésicos', 'Colocar compressas frias na área afetada', 'Consulta a um profissional de saúde para avaliação e tratamento adequados'],
      answer: 'Consulta a um profissional de saúde para avaliação e tratamento adequados'
    },
    {
      question: 'O que pode ser útil para aliviar a prisão de ventre?',
      options: ['Evitar a ingestão de líquidos', 'Consumo frequente de alimentos ricos em fibras', 'Uso frequente de laxantes', 'Ingerir grandes quantidades de alimentos em uma única refeição', 'Permanecer em posição sentada por longos períodos'],
      answer: 'Consumo frequente de alimentos ricos em fibras'
    },
    {
      question: 'Quais são os sintomas da síndrome do túnel do carpo?',
      options: ['Dor abdominal intensa', 'Dor de cabeça e tontura', 'Formigamento e dormência nas mãos', 'Erupção cutânea e coceira', 'Dor nos olhos e sensibilidade à luz'],
      answer: 'Formigamento e dormência nas mãos'
    },
    {
      question: 'Quais são os sintomas da gripe?',
      options: ['Dor de cabeça e tontura', 'Dor abdominal intensa', 'Febre, tosse e dores musculares', 'Erupção cutânea e coceira', 'Dor nos olhos e sensibilidade à luz'],
      answer: 'Febre, tosse e dores musculares'
    },
    {
      question: 'O que é a vacina contra a raiva?',
      options: ['Vacina contra a gripe', 'Vacina contra o sarampo, caxumba e rubéola', 'Vacina contra a tuberculose', 'Vacina contra o vírus da raiva', 'Vacina contra a poliomielite'],
      answer: 'Vacina contra o vírus da raiva'
    },
    {
      question: 'Qual é o agente causador da leishmaniose?',
      options: ['Bactéria', 'Vírus', 'Parasita', 'Fungo', 'Protozoário'],
      answer: 'Protozoário'
    },
    {
      question: 'O que é a vacina contra a pneumonia?',
      options: ['Vacina contra a gripe', 'Vacina contra o sarampo, caxumba e rubéola', 'Vacina contra a tuberculose', 'Vacina contra a pneumococo', 'Vacina contra a poliomielite'],
      answer: 'Vacina contra a pneumococo'
    },
    {
      question: 'O que é um antiviral?',
      options: ['Medicamento que combate bactérias', 'Medicamento que combate vírus', 'Medicamento que alivia a dor', 'Medicamento para problemas cardíacos', 'Medicamento para distúrbios do sono'],
      answer: 'Medicamento que combate vírus'
    },
    {
      question: 'O que são laxantes?',
      options: ['Medicamentos para tratar distúrbios do humor', 'Medicamentos que relaxam os músculos brônquicos e facilitam a respiração', 'Medicamentos que estimulam o apetite', 'Medicamentos que tratam infecções fúngicas', 'Medicamentos que promovem movimentos intestinais e aliviam a constipação'],
      answer: 'Medicamentos que promovem movimentos intestinais e aliviam a constipação'
    },
    {
      question: 'Qual é a função dos bloqueadores de canais de cálcio?',
      options: ['Reduzir a febre', 'Aumentar a pressão arterial', 'Aliviar a dor', 'Controlar a frequência cardíaca e a pressão arterial', 'Estimular o sistema nervoso central'],
      answer: 'Controlar a frequência cardíaca e a pressão arterial'
    },
    {
      question: 'O que são estatinas?',
      options: ['Medicamentos para problemas cardíacos', 'Medicamentos que relaxam os músculos brônquicos e facilitam a respiração', 'Medicamentos que tratam a ansiedade', 'Medicamentos que reduzem a febre', 'Medicamentos para distúrbios do sono'],
      answer: 'Medicamentos para problemas cardíacos'
    },
    {
      question: 'Qual é a função do sistema esquelético?',
      options: ['Produção de hormônios', 'Movimentação do corpo', 'Filtração do sangue', 'Controle da temperatura corporal', 'Suporte estrutural e proteção dos órgãos'],
      answer: 'Suporte estrutural e proteção dos órgãos'
    },
    {
      question: 'O que são as células ciliadas?',
      options: ['Células do sistema nervoso', 'Células do sistema imunológico', 'Células do sistema reprodutor', 'Células sensoriais no ouvido interno', 'Células da pele'],
      answer: 'Células sensoriais no ouvido interno'
    },
    {
      question: 'O que é a acupuntura?',
      options: ['Prática medicinal tradicional chinesa que envolve a inserção de agulhas em pontos específicos do corpo', 'Procedimento cirúrgico', 'Procedimento estético', 'Terapia de fala', 'Procedimento para redução de peso'],
      answer: 'Prática medicinal tradicional chinesa que envolve a inserção de agulhas em pontos específicos do corpo'
    },
    {
      question: 'O que é a fibromialgia?',
      options: ['Doença inflamatória', 'Distúrbio do sono', 'Doença autoimune', 'Lesão na medula espinhal', 'Síndrome caracterizada por dor musculoesquelética generalizada e fadiga'],
      answer: 'Síndrome caracterizada por dor musculoesquelética generalizada e fadiga'
    },
    {
      question: 'O que é a hepatite?',
      options: ['Inflamação do fígado', 'Distúrbio do sono', 'Distúrbio metabólico', 'Inflamação dos pulmões', 'Doença inflamatória'],
      answer: 'Inflamação do fígado'
    },
    {
      question: 'O que é a esclerose múltipla?',
      options: ['Doença inflamatória', 'Distúrbio do sono', 'Doença autoimune que afeta o sistema nervoso central', 'Lesão na medula espinhal', 'Problema cardíaco'],
      answer: 'Doença autoimune que afeta o sistema nervoso central'
    },
    
    
    
    
    
    
    
    // Adicione mais perguntas sobre medicina
  ],

  // Adicione mais categorias conforme necessário
};

let currentQuestionIndex = 0;
let currentQuestions = [];
let score = 0;
let timer;
let questionsCorrect = 0;
let questionsIncorrect = 0;
let questionsCorrectArray = [];
let questionsIncorrectArray = [];

function startGame() {
  const selectedCategoria = categoriaSelect.value;
  currentQuestions = selectedCategoria === 'all' ? getRandomQuestions() : questionsByCategoria[selectedCategoria];
  score = 0;
  currentQuestionIndex = 0;

  startContainer.style.display = 'none';
  quizContainer.style.display = 'block';

  showQuestion();
  startTimer();
}

function getRandomQuestions() {
  const allQuestions = Object.values(questionsByCategoria).flat();
  return shuffleArray(allQuestions);
}

function shuffleArray(array) {
  const shuffledArray = array.slice();
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

function nextQuestion() {
  resultContainer.textContent = '';
  resultContainer.style.color = '';

  // Avança para a próxima pergunta
  currentQuestionIndex++;

  // Verifica se há mais perguntas
  if (currentQuestionIndex < currentQuestions.length) {
    showQuestion();
    startTimer(); // Inicia o temporizador para a nova pergunta
  } else {
    // Exibição de mensagem de finalização ou reinício do jogo
    questionElement.textContent = 'Parabéns! Você completou o quiz.';
    optionsContainer.innerHTML = '';
    endGame(); // Chamando a função endGame para exibir mensagem de conclusão corretamente
  }
}

function showQuestion() {
  resetTimer();
  updateScore();

  const currentQuestion = currentQuestions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;

  optionsContainer.innerHTML = '';
  currentQuestion.options.forEach((option) => {
    const optionElement = document.createElement('button');
    optionElement.className = 'option';
    optionElement.textContent = option;
    optionElement.addEventListener('click', () => checkAnswer(option));
    optionsContainer.appendChild(optionElement);
  });
}

function checkAnswer(userAnswer) {
  clearInterval(timer);
  const currentQuestion = currentQuestions[currentQuestionIndex];

  if (userAnswer === currentQuestion.answer) {
    resultContainer.textContent = 'Correto!';
    resultContainer.style.color = 'green';
    score++;
    questionsCorrect++;
    questionsCorrectArray.push(currentQuestion);
    updateScore();
    setTimeout(() => {
      nextQuestion();
      resultContainer.textContent = ''; // Limpa a mensagem de acerto
    }, 2000);
  } else {
    resultContainer.textContent = 'Errado! A resposta correta é: ' + currentQuestion.answer;
    resultContainer.style.color = 'red';
    questionsIncorrect++;
    questionsIncorrectArray.push(currentQuestion);
    showRetryOption();
  }
}

function endGame() {
  removeModal();
  optionsContainer.innerHTML = ''; // Limpa as opções

  if (questionsIncorrect === 0 && currentQuestionIndex === currentQuestions.length) {
    questionElement.textContent = 'Parabéns! Você completou todas as perguntas perfeitamente. Obrigado por jogar!';
    startContainer.style.display = 'block';
    quizContainer.style.display = 'none';

    // Reinicie as variáveis
    currentQuestions = [];
    currentQuestionIndex = 0;
    score = 0;
    questionsCorrect = 0;
    questionsIncorrect = 0;
    questionsCorrectArray = [];
    questionsIncorrectArray = [];
  } else {
    questionElement.textContent = 'Você encerrou o jogo. Sua pontuação final é: ' + score;

    startContainer.style.display = 'block';
    quizContainer.style.display = 'none';
  }

  // Exibir histórico de perguntas certas e erradas
  console.log('Histórico de Perguntas Certas:', questionsCorrectArray);
  console.log('Histórico de Perguntas Erradas:', questionsIncorrectArray);
}


function retry() {
  removeModal();
  optionsContainer.innerHTML = ''; // Limpa as opções
  resultContainer.textContent = ''; // Limpa a mensagem de erro
  startGame(); // Reinicia o jogo
}

function removeModal() {
  const modal = document.querySelector('.modal-container');
  if (modal) {
    modal.parentNode.removeChild(modal);
  }
}

function showRetryOption() {
  const modalContainer = document.createElement('div');
  modalContainer.className = 'modal-container';

  const modalContent = document.createElement('div');
  modalContent.className = 'modal-content';

  modalContent.innerHTML = 'Você quer tentar novamente? <button onclick="retry()">Sim</button> <button onclick="endGame()">Não</button>';

  modalContainer.appendChild(modalContent);
  document.body.appendChild(modalContainer);
}

function startTimer() {
  let timeLeft = 20;
  updateTimer(timeLeft);

  timer = setInterval(() => {
    timeLeft--;
    updateTimer(timeLeft);

    if (timeLeft === 0) {
      clearInterval(timer);
      resultContainer.textContent = 'Tempo esgotado! A resposta correta era: ' + currentQuestions[currentQuestionIndex].answer;
      resultContainer.style.color = 'red';
      showTimeUpOption(); // Exibe a mensagem de tentar novamente
    }
  }, 1000);
}

function showTimeUpOption() {
  const modalContainer = document.createElement('div');
  modalContainer.className = 'modal-container';

  const modalContent = document.createElement('div');
  modalContent.className = 'modal-content';

  modalContent.innerHTML = 'Tempo esgotado! Você quer tentar novamente? <button onclick="retry()">Sim</button> <button onclick="endGame()">Não</button>';

  modalContainer.appendChild(modalContent);
  document.body.appendChild(modalContainer);
}

function resetTimer() {
  clearInterval(timer);
  timerElement.textContent = '20';
}

function updateTimer(timeLeft) {
  timerElement.textContent = timeLeft;
}

function updateScore() {
  scoreElement.textContent = score;
}
// ... (código existente)

// Lista de imagens de fundo
const backgroundImages = [
  'url(img/alberta-2297204_1920.jpg)',
  'url(img/angola-83975_1920.jpg)',
  'url(img/mountains-100367_1920.jpg)',
  'url(img/mountains-190055_1280.jpg)',
  'url(img/mountains-736886_1920.jpg)',
  'url(img/sunset-2080072_1920.jpg)',
  'url(img/tree-736885_1280.jpg)',
  'url(img/1.jpg)',
  'url(img/2.jpg)',
];

let currentBackgroundIndex = 0;

function changeBackground() {
  document.body.style.backgroundImage = backgroundImages[currentBackgroundIndex];
  currentBackgroundIndex++;

  // Verifica se atingiu o final da lista de imagens
  if (currentBackgroundIndex >= backgroundImages.length) {
    currentBackgroundIndex = 0;
  }
}

// Chama a função changeBackground a cada 5 minutos
setInterval(() => {
  changeBackground();
}, 300000);  // 5 minutos em milissegundos
