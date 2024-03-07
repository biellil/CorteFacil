<h1> CorteFacil </h1>

## ⚙️ Como Executar

Para executar a aplicação localmente, siga os passos abaixo:

1. Clone este repositório:

```bash
 git clone https://github.com/biellil/CorteFacil.git
```
2. Entre na pasta:

```bash
  cd CorteFacil

```

3. Instale as dependências

```bash
  npm ci
```

4. Inicie a aplicação

```bash
 npm run dev
```
## recomendação de extensão do vscode

1.vscode-styled-components

2.ESLint

3.Conventional Commits


# Conventional Commits Pattern (padrão de commit)
<ul>
<li><h2>test:</h2> indica qualquer tipo de criação ou alteração de códigos de teste. Exemplo: Criação de testes unitários.</li>
<h2>feat:</h2> indica o desenvolvimento de uma nova feature ao projeto. Exemplo: Acréscimo de um serviço, funcionalidade, endpoint, etc.
<li>
<h2>refactor:</h2> usado quando houver uma refatoração de código que não tenha qualquer tipo de impacto na lógica/regras de negócio do sistema. Exemplo: Mudanças de código após um code review
</li><li>
<h2>style:</h2> empregado quando há mudanças de formatação e estilo do código que não alteram o sistema de nenhuma forma.
<br/>
Exemplo: Mudar o style-guide, mudar de convenção lint, arrumar indentações, remover espaços em brancos, remover comentários, etc..
</li><li>
<h2>fix:</h2> utilizado quando há correção de erros que estão gerando bugs no sistema.
Exemplo: Aplicar tratativa para uma função que não está tendo o comportamento esperado e retornando erro.
</li><li>
<h2>chore:</h2> indica mudanças no projeto que não afetem o sistema ou arquivos de testes. São mudanças de desenvolvimento.
Exemplo: Mudar regras do eslint, adicionar prettier, adicionar mais extensões de arquivos ao .gitignore
docs: usado quando há mudanças na documentação do projeto.
Exemplo: adicionar informações na documentação da API, mudar o README, etc.
</li><li>
<h2>build:</h2> utilizada para indicar mudanças que afetam o processo de build do projeto ou dependências externas.
Exemplo: Gulp, adicionar/remover dependências do npm, etc.
</li><li>
<h2>perf:</h2> indica uma alteração que melhorou a performance do sistema.
Exemplo: alterar ForEach por while, melhorar a query ao banco, etc.
</li><li>
<h2>ci:</h2> utilizada para mudanças nos arquivos de configuração de CI.
Exemplo: Circle, Travis, BrowserStack, etc.
</li><li>
<h2>revert:</h2> indica a reverão de um commit anterior.
</li><ul>