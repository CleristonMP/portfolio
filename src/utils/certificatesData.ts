export interface Topic {
  subject: string;
  description: string;
}

export interface Certificate {
  id: number;
  certSrc: string;
  caption: string;
  completionDate: string;
  courseLoad: number;
  topics: Topic[];
}

const certificatesData: Certificate[] = [
  {
    id: 1,
    certSrc:
      "/assets/medias/certificates/1-modern-developer-professional-qualification.png",
    caption: "Formação Desenvolvedor Moderno",
    completionDate: "30-03-2023",
    courseLoad: 650,
    topics: [
      {
        subject: "Lógica de Programação",
        description:
          "Introdução à programação, entrada, saída, atribuição, condicionais, loops, arrays, funções, projetos.",
      },
      {
        subject: "Git e Github",
        description:
          "Conceitos, criação de projetos e versões, ramificações, trabalho em equipe, solução de problemas.",
      },
      {
        subject: "HTML e CSS",
        description:
          "Introdução, tags, exibição, formulários, seletores, modelo de caixa, flexbox, projetos.",
      },
      {
        subject: "Programação Moderna",
        description:
          "Orientação a objetos, classes, encapsulamento, composição, herança, polimorfismo, interfaces, programação funcional, expressões lambda, imutabilidade, coleções, projetos. Linguagem Java.",
      },
      {
        subject: "Banco de Dados",
        description:
          "Introdução, modelo conceitual, modelo relacional, normalização, SQL, consultas, projetos.",
      },
      {
        subject: "JavaScript",
        description:
          "Introdução, tipos, var/let/const, strings, operadores, funções, objetos, construtores, protótipo, classes, módulos, Promises, API Fetch, async/await, projetos.",
      },
      {
        subject: "Análise de Sistemas",
        description:
          "Introdução, escopo, requisitos, casos de uso, modelagem conceitual.",
      },
      {
        subject: "Ambiente de Desenvolvimento",
        description:
          "Linux, terminal, IDE, Docker, instalações, procedimentos.",
      },
      {
        subject: "Back End",
        description:
          "API REST, criação de projeto, sistema e componentes, injeção de dependência, CRUD e casos de uso, camadas, controladores, serviços, repositórios, entidades, ORM, DTO, autenticação e autorização, implantação. Ferramenta: Spring Boot com Java.",
      },
      {
        subject: "Front End",
        description:
          "Aplicação web, layout, navegação, rotas, requisições, CRUD e casos de uso, integrações, autenticação e autorização, implantação. Ferramenta: ReactJS com typescript.",
      },
    ],
  },
  {
    id: 2,
    certSrc: "/assets/medias/certificates/2-react.png",
    caption: "Bootcamp React",
    completionDate: "06-06-2022",
    courseLoad: 160,
    topics: [
      {
        subject: "Layout e Navegação",
        description:
          "ReactJS (Criação de projeto, Estrutura de projeto, Componentes, Importações, Uso de imagens); Layout (HTML, CSS, Estilização manual, Flexbox, Bootstrap, Responsividade, Execução do projeto Figma); Rotas (React Router DOM, Rotas e links).",
      },
      {
        subject: "Integração de API",
        description:
          'Props; Rotas (Parâmetros de URL, Hierarquias (aninhamento), Redirecionamentos); Integração com back-end (Axios); Hooks do React (useState, useEffect); Efeitos: "loaders"; Formulários "vanilla" (Manipulação de eventos, Manipulação do estado do formulário, Envio de formulário).',
      },
      {
        subject: "Autenticação e Autorização",
        description:
          "Formulários (React Hook Form, Validação de formulário, expressões regulares, Mensagens de erro e estilização condicional); Login OAuth2; Interceptores; LocalStorage (Acesso a dados, JSON parse / stringify); Estado global com Context API; Fluxos de autenticação e autorização (Rotas protegidas, Redirecionamentos do login e autorização, Redirecionamentos especiais por experiência do usuário (UX), Permissões no nível de rota, Restrição de conteúdo (UI) com base no perfil do usuário).",
      },
      {
        subject: "CRUD, Paginação, Filtros",
        description:
          "CRUD responsiva (Lista de dados, Formulário, Inserção, edição e exclusão); Comunicação entre componentes com eventos (Padrão Observer); React Hook Form; Integração de libs com React Hook Form (React Select, React Currency Input Field); Outras libs (React Pagination, React Toastfy); Filtragem de dados; Controle de referência com o hook useCallback.",
      },
      {
        subject: "Testes e Implantação",
        description:
          "JEST e Testing Library; Testes de funções JS/TS (Execução de testes, modo watch, Bloco describe e suíte de testes, Simulação de funções com spyOn); Testes de componentes React (Testes unitários e de integração, Simulação de funções com jest.fn(), Simulação de requisições com MSW, Simulação do React Router DOM, Simulação da interação do usuário, Fixtures, Inputs de formulários, Envio de formulários); Implantação com CI/CD (Netlify).",
      },
      {
        subject: "Dashboard",
        description:
          "Biblioteca Apex Charts, Gráfico de pizza, Gráfico de colunas/barras, Resumo de dados, Tabelas de dados, Criação e integração de componentes de filtragem.",
      },
    ],
  },
  {
    id: 3,
    certSrc: "/assets/medias/certificates/3-spring.png",
    caption: "Bootcamp Spring",
    completionDate: "16-11-2021",
    courseLoad: 160,
    topics: [
      {
        subject: "CRUD",
        description:
          "Criação de projeto Spring Boot; Criação de monorepo Git; Organização do projeto em camadas (Controlador REST, Serviço, Acesso a dados (Repositório)); Criação de entidade; Configuração do perfil de teste do projeto; Semeadura do banco de dados; Criação de serviços web REST (Parâmetros de rota @PathVariable, Parâmetros de requisição @RequestParam, Corpo da requisição @RequestBody, ResponseEntity<T> resposta da requisição); Padrão DTO; CRUD completo; Tratamento de exceções; Postman (coleções, ambientes); Auditoria de dados; Paginação de dados; Associações entre entidades (N-N).",
      },
      {
        subject: "Testes Automatizados",
        description:
          "Fundamentos de testes automatizados (Tipos de testes, Benefícios, TDD - Desenvolvimento Orientado a Testes, Boas práticas e padrões); JUnit (Básico (vanilla), Spring Boot (Repositórios, Serviços, Recursos (web), Integração).); Mockito & MockBean (@Mock, @InjectMocks, Mockito.when / thenReturn / doNothing / doThrow, ArgumentMatchers, Mockito.verify, @MockBean, @MockMvc).",
      },
      {
        subject: "Validação e Segurança",
        description:
          "Modelo de dados de usuário e perfil; Validação com Bean Validation (Anotações, Personalização da resposta HTTP, Validações customizadas com acesso ao banco de dados); Autenticação e autorização (Spring Security, OAuth 2.0, Token JWT, Autorização de rotas por perfil); Variáveis de ambiente no projeto com coalescência.",
      },
      {
        subject: "Domínio e ORM, Autorizações",
        description:
          "Domínio e ORM (Implementação de um modelo de domínio complexo (projeto DSLearn), Instanciação (Seed) de um modelo de domínio com SQL); Autorizações (Autorização customizada no nível de serviço, Conteúdo customizado para o usuário logado, Refresh token, Pré-autorização de métodos).",
      },
      {
        subject: "Consultas de Banco de Dados",
        description:
          "SQL e JPQL (Projeção, Restrição, Escalares, Joins, Group by, Union, Diferença); Spring Data JPA (Métodos de consulta, Estudo de caso: busca detalhada com parâmetros opcionais e paginação, Problema N+1 queries).",
      },
      {
        subject: "Docker, Implantação, CI/CD",
        description:
          "Docker (Conceitos, Comandos, Imagens e Dockerfile, Instanciação de Contêineres, Volumes, DockerHub); Implantação manual na AWS (EC2, RDS, Conexão Remota); CI/CD (Heroku, AWS, Github Actions, Estágio de Homologação, Elastic Beanstalk).",
      },
    ],
  },
  {
    id: 4,
    certSrc: "/assets/medias/certificates/4-react-native.jpg",
    caption: "Desenvolvimento com React Native",
    completionDate: "04-07-2023",
    courseLoad: 45,
    topics: [
      {
        subject: "Fundamentos",
        description:
          "Configuração do Projeto; Estrutura do Projeto; SafeAreaView; Criação de Componentes; Organização de Componentes; Sistema de Módulos ECMAScript; Estilização; Componente com Propriedades; Componente com Estado (useState); Comunicação Direta; Comunicação Indireta; Utilizando Comunicação Direta e Indireta; Diferenciando iOS e Android; Renderização Condicional; props.Children; Renderizando Listas; Componentes Controlados; Flexbox; Componente de Classe: Método Render; Componente de Classe: Passando Props; Componente de Classe: Estado; Componente de Classe: this.",
      },
      {
        subject: "Navegação com React",
        description:
          "Navegação por Pilha; Navegação por Abas; Navegação por Gaveta.",
      },
      {
        subject: "CRUD com Hooks e Context API",
        description: "Rotas e Parâmetros; Criação de Formulários; Context API.",
      },
      {
        subject: "Projetos",
        description:
          "Calculadora; Campo Minado; Lista de Tarefas; Clone do Instagram.",
      },
    ],
  },
  {
    id: 5,
    certSrc: "/assets/medias/certificates/5-microservices-JAVA.jpg",
    caption: "Microsserviços JAVA",
    completionDate: "29-12-2021",
    courseLoad: 8,
    topics: [
      {
        subject: "Comunicação Simples, Feign, Ribbon",
        description:
          "Criação de projeto; RestTemplate; Cliente Feign; Balanceamento de carga com Ribbon.",
      },
      {
        subject: "Eureka, Hystrix, Zuul",
        description:
          "Criando projeto Eureka-server; Configuração de um servidor Eureka; Configuração de clientes Eureka; Porta aleatória para entidade; Hystrix para tolerância à falha; Criação do projeto api-gateway-Zuul; Configuração do gateway de API Zuul; Timeout do Zuul.",
      },
      {
        subject: "Configuração Centralizada",
        description:
          "Criação e configuração do projeto config-server; Entidade como cliente do servidor de configuração; Actuator para atualizar configurações em Runtime.",
      },
      {
        subject: "Autenticação e Autorização",
        description:
          "Usuário, Perfil, associação many to many; UserRepository, UserResource, Configuração Zuul; Criação e configuração do projeto oauth; UserFeignClient; Login e Token JWT; Autorização através do Zuul; Configurações de segurança no servidor de configuração; Configuração CORS.",
      },
      {
        subject: "Criação e teste de contêineres Docker",
        description:
          "Criação de uma rede Docker; Criação de contêineres de projeto; Escalonamento de instâncias de um contêiner.",
      },
    ],
  },
  {
    id: 6,
    certSrc:
      "/assets/medias/certificates/6-UML-data-modeling-object-oriented-analysis-and-design.jpg",
    caption: "Modelagem de Dados UML (Análise e Projeto Orientado a Objetos)",
    completionDate: "12-12-2021",
    courseLoad: 13,
    topics: [
      {
        subject: "Identificação de Conceitos e Atributos",
        description:
          "Modelo conceitual, conceitos e atributos; Como identificar conceitos; Exercícios de fixação.",
      },
      {
        subject: "Associações e multiplicidade de papéis",
        description:
          "Associações; Multiplicidade de papéis; Conceito de entidade dependente, associações obrigatórias, associações múltiplas e auto-associações; Desenho de instâncias com o diagrama de objeto UML; Exercícios de fixação.",
      },
      {
        subject: "Associações Part-Whole e classes de associação",
        description:
          "Conceito de associação Part-Whole; Conceito de Classe de Associação; Exercícios de fixação.",
      },
      {
        subject: "Herança, Enumerações e Tipos Primitivos",
        description:
          "Conceito de Herança; Conceito de Enumerações e Tipos Primitivos; Exercícios de fixação.",
      },
      {
        subject: "Estudo de caso",
        description: "Implementação em Java com Spring Boot e JPA.",
      },
    ],
  },
  {
    id: 7,
    certSrc: "/assets/medias/certificates/7-JAVA-object-oriented-programming.jpg",
    caption: "JAVA Completo - Programação Orientada a Objetos",
    completionDate: "21-11-2021",
    courseLoad: 50,
    topics: [
      {
        subject: "Lógica de Programação - Algoritmos usando Java",
        description:
          "Conceitos de programação; Estrutura sequencial; Estruturas condicionais; Estruturas de repetição; Introdução à linguagem Java (histórico, edições, versões, JDK / JVM, operadores bit a bit, funções para strings, comentários).",
      },
      {
        subject: "Java e Programação Orientada a Objetos (Parte 1)",
        description:
          "Introdução à Programação Orientada a Objetos; Construtores, palavra this, sobrecarga, encapsulamento; Comportamento na memória, coletor de lixo, arrays, listas; Boxing, unboxing e classes wrapper; Tópicos especiais em Java (Date e Calendar); Enumerações, Composição; Herança e Polimorfismo; Classes e métodos abstratos; Tratamento de exceções.",
      },
      {
        subject: "Java e Programação Orientada a Objetos (Parte 2)",
        description:
          "Trabalhando com arquivos (FileReader, BufferedReader, bloco try-with-resources, FileWriter e BufferedWriter); Interfaces; Genéricos, Wildcard, HashCode e Equals, Set, Map; Programação funcional e expressões lambda; Álgebra relacional, SQL, MySQL; Acesso a banco de dados com JDBC; Interface gráfica com JavaFX; Java EE - Mapeamento objeto-relacional com JPA / Hibernate.",
      },
      {
        subject:
          "PROJETO: Aplicação de desktop com JavaFX e banco de dados MySQL com JDBC",
        description:
          "Padrão MVC - Model View Controller; Padrão de camadas; FXML, Scenebuilder; Manipulação de eventos de UI; CRUD; Padrões de design.",
      },
      {
        subject: "PROJETO: Serviços web com Spring Boot e JPA / Hibernate",
        description:
          "ORM com JPA / Hibernate; Padrão de Camadas; Web e HTTP; REST / serviços web; Modelo de domínio complexo; Maven; Banco de dados H2; Spring Data JPA; CRUD; Tratamento de exceções.",
      },
      {
        subject:
          "PROJETO: API Restful com Spring Boot e Banco de Dados MongoDB (serviços web + NoSQL)",
        description:
          "NoSQL e nivelamento do MongoDB; Modelo de domínio: agregados e desnormalização; Padrão DTO; Spring Data MongoDB; CRUD; Tratamento de exceções.",
      },
    ],
  },
  {
    id: 8,
    certSrc:
      "/assets/medias/certificates/8-data-structure-and-algorithms-in-python.jpg",
    caption: "Estrutura de Dados e Algoritmos em Python",
    completionDate: "09-06-2021",
    courseLoad: 22.5,
    topics: [
      {
        subject: "Programação básica em Python",
        description:
          "Manipulação de variáveis e constantes; Manipulação de strings; Operações matemáticas; Operadores lógicos e relacionais; Operadores condicionais; Estruturas de repetição; Tuplas e listas; Dicionários e conjuntos; Matrizes; Funções; Módulos úteis - Math, Datetime, Random e Time; Criação de módulos personalizados; Manipulação de erros e exceções; Manipulação de arquivos de texto; Expressões regulares - teoria básica e prática; Orientação a objeto - teoria e prática básica.",
      },
      {
        subject: "Notação Big-O",
        description: "Notação Big-O para análise de algoritmos.",
      },
      {
        subject: "Vetores Desordenados e Ordenados",
        description:
          "Teoria, inserção, busca linear, exclusão, depuração e comparação.",
      },
      {
        subject: "Pilhas, Filas e Deques",
        description: "Teoria, implementação e depuração.",
      },
      {
        subject: "Listas encadeadas",
        description:
          "Listas encadeadas simples; Listas duplamente encadeadas; Listas duplamente encadeadas; Teoria, implementação (inserção, exclusão, busca) e depuração.",
      },
      {
        subject: "Recursão",
        description: "Teoria, implementação e depuração.",
      },
      {
        subject: "Algoritmos de ordenação",
        description:
          "Bubble sort; Selection sort; Insertion sort; Shell sort; Merge sort; Quick sort; Teoria, implementação e depuração.",
      },
      {
        subject: "Árvores",
        description:
          "Árvore binária; Árvore binária de busca; Percurso pré-ordem; Percurso em-ordem; Percurso pós-ordem; Teoria, implementação, inserção, busca, exclusão e depuração.",
      },
      {
        subject: "Grafos",
        description: `Busca em profundidade; Busca em largura; Busca gulosa; Busca A* (A Estrela); Algoritmo de Dijkstra; Teoria, implementação e depuração.`,
      },
    ],
  },
  {
    id: 9,
    certSrc: "/assets/medias/certificates/9-cmp-algorithms-and-programming-logic.jpg",
    caption: "Algoritmos e Lógica de Programação",
    completionDate: "01-01-2021",
    courseLoad: 30.5,
    topics: [
      {
        subject: "Introdução à programação",
        description:
          "Algoritmo, Automação, Programa de Computador; Linguagem de programação, léxis, sintaxe; IDE - Ambiente de Desenvolvimento Integrado; Compilação e interpretação, código-fonte e código-objeto, máquina virtual; A linguagem Portugol e VisualG; Primeiro algoritmo na prática.",
      },
      {
        subject: "Estrutura sequencial",
        description:
          "Expressões aritméticas; Variáveis e tipos de dados; As três operações básicas de programação; Saída de dados; Processamento de dados; Entrada de dados; Funções matemáticas; Depuração no VisualG; Exercícios sobre estrutura sequencial.",
      },
      {
        subject: "Estrutura condicional",
        description:
          "Expressões comparativas; Expressões lógicas; Estrutura condicional; Exercícios sobre estrutura condicional.",
      },
      {
        subject: "Estruturas de repetição",
        description:
          "Estrutura de repetição while; Exercícios: testes de mesa com estrutura de repetição while; Estrutura de repetição for; Exercícios: testes de mesa com estrutura de repetição for; Estrutura de repetição do-while.",
      },
      {
        subject: "Vetores",
        description: "Teoria; Exercícios: testes de mesa com vetores.",
      },
      {
        subject: "Matrizes",
        description: "Teoria; Exercícios: testes de mesa com matrizes.",
      },
      {
        subject: "Linguagem C",
        description:
          "Tipos de dados e variáveis em C; Operadores na linguagem C; Saída de dados em C; Processamento de dados e conversão em C; Entrada de dados em C; Criação de projeto no Code Blocks; Execução do Depurador no Code Blocks; Estrutura condicional em C; Estrutura while em C; Estrutura for em C; Estrutura do-while em C; Vetores em C; Matrizes em C; Exercícios em C.",
      },
      {
        subject: "Linguagem C++",
        description:
          "Variáveis e tipos de dados em C++; Operadores em C++; Saída de dados em C++; Processamento de dados e conversão em C++; Entrada de dados em C++; Estruturas de controle em C++; Arrays em C++; Exercícios em C++.",
      },
      {
        subject: "Linguagem Java",
        description:
          "Tipos de dados e variáveis em Java; Operadores na linguagem Java; Saída de dados em Java; Processamento de dados e conversão em Java; Entrada de dados em Java; Execução do Depurador no Eclipse; Estruturas de controle em Java; Vetores em Java; Matrizes em Java; Exercícios em Java.",
      },
      {
        subject: "Linguagem C#",
        description:
          "Variáveis e tipos de dados em C#; Operadores em C#; Saída de dados em C#; Processamento de dados e conversão em C#; Entrada de dados em C#; Execução do Depurador no Visual Studio; Estruturas de controle em C#; Vetores em C#; Matrizes em C#; Exercícios em Java.",
      },
      {
        subject: "Linguagem Python",
        description:
          "Tipos de dados e variáveis em Python; Operadores na linguagem Python; Saída de dados em Python; Processamento de dados e conversão em Python; Entrada de dados em Python; Execução do Depurador no PyCharm; Estrutura condicional em Python; Estrutura de repetição while em Python; Estrutura de repetição for em Python; Vetores em Python; Matrizes em Python; Exercícios em Python.",
      },
    ],
  },
];

export default certificatesData;
