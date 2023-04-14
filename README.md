# Car Shop

Neste projeto Back-End foi desenvolvido uma API para o gerenciamento de uma concessionária de veículos por meio de um Banco de Dados NoSQL.

-----

# Habilidades

O projeto foi efetuado utilizando Programação Orientada a Objetos (POO) para a construção de uma API com CRUD para gerenciar uma concessionária de veículos. Foi feito utilizando o banco de dados MongoDB através do framework do Mongoose.

Foram feitos testes de cobertura com Mocha.

-----

# Instalação

É recomendado o uso de Docker para utilizar este projeto.

Lembrar de parar o mongo se estiver usando localmente na porta padrão (27017), ou adapte, caso queria fazer uso da aplicação em containers.

Para rodar os serviços node e db:

`docker-compose up -d`

Esses serviços irão inicializar um container chamado car_shop e outro chamado car_shop_db.

rodar o container car_shop via CLI ou abri-lo no VS Code. acesso ao terminal interativo do container:

`docker exec -it car_shop bash`

Instalação das dependências:

`npm install`

Configurações mínimas para execução do projeto:

 - Docker;
 - Docker-compose versão >=1.29.2.

-----

# Uso

Para iniciar o projeto, execute o seguinte comando no terminal na pasta raiz:

`npm run dev`

-----

# Contribuindo

Etapas a seguir para contribuir com o projeto:

- Realizar o fork do repositório;

- Criar uma branch: git checkout -b (minha-contribuicao);

- Fazer as mudanças desejadas e commit: git commit -m "(Minha contribuição)";

- Enviar para a sua branch: git push origin (minha-contribuicao);

- Abrir um pull request no repositório original.

-----

# Autor

O projeto Car Shop foi desenvolvido por João Felipe Dobrowolski durante o curso da <a href="https://www.betrybe.com/" target="_blank">Trybe</a>.
