# ScripturesCards

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# Scripture Cards Project

## Resumo do projeto
Aplicativo que contenha cards com textos da Bíblia para memorização e também para jogos bíblicos.

## Funcionalidades principais

### Cards
- Marcar texto como “conhecido”*
- Marcar texto como “memorizar”*
- Esconder nome do texto
- Exibição do conteúdo do cartão com janela modal
*as marcações dos textos podem ser genéricas, assim podem ser usadas para diversas finalidades, como para jogos, ou sugestões de memorizaçao etc

### Criador de cards
- Criar cards com (1) texto e (2) nome do texto
- Implementar automaticamente atributos relacionados às funcionalidades dos cards
- Salvar novos cards no local Storage

### Módulo de Estatísticas
- Criar gráfico que mostra quantos cards contém cada tipo de marcação

## Conhecimentos a serem explorados
- Desenvolvimento em Angular 13
- Criação de módulos
- Criação de componentes
- Criação de serviços
- Criação de model
- Criação de rotas
- Recursos nos templates do Angular
- Uso de diretivas
- Uso de pipes
- Janelas modais