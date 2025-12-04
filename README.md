
# 📝 Burguermino
Burguermino é uma aplicação web de checkout rápido para hamburgueria.
## 🚀 Tecnologias

**React**: Biblioteca para construção de UI.

**Tailwind**: Realizar a estilização da aplicação.

**React Router** Realizar a implementação das rotas e navegação.

**React Icons**: Contém icones prontos para uso.

**Context API**: Elaborar lógica do estado global do carrinho.

**Zod e React Hook Form**: Realizar a validação e tratamento de erros relacionados aos formulários da aplicação.
## 💡 Como utilizar
O software está estruturado em 4 páginas(Home,Carrinho,Cardápio e Checkout).

**Home**: Contém informações gerais sobre a hamburgueria, os lanches mais vendidos e informações de localização.

**Cardápio**: Contém as comidas oferecidas como os hambúrgueres e outros aperitivos, também bebidas disponíveis, além da informação detalhada de cada item, permitindo adicionar ao carrinho.

**Carrinho**: Contém uma página de carrinho relacionada aos produtos selecionados, podendo adicionar ou decrementar em 1, remover,limpar carrinho, limpar todo carrinho e avançar com a compra.

**Checkout**: Essa página contém o formulário em multietapas para inserção de dados do cliente e inserção do método de pagamento.
## 📁 Estrutura do Projeto

```
src/
├── actions/      # Actions e dispatchs do reducer relacionado ao Cart
├── assets/       # Arquivos de fontes e imagens
├── constant/     # Dados constantes  da aplicação    
├── context/      # Estado global da aplicação
├── pages/        # As páginas da aplicação
├── reducer/      # Arquivo de reducer do Cart
├── schemas/      # Schema definidos para o Zod
```
## 🗺️ Explorando o código

- Foi elaborado um fluxo de e-commerce para um checkout rápido fast food simulado.
- A lógica está centrada no **reducer** e **Context API**, é core da aplicação, mantendo um carrinho salvo em **LocalStorage**.
- A arquitetura do projeto tem ênfase na modularidade, facilidade em refatorar e implementar novas funcionlidades, visando um projeto com boas práticas de código, seguindo principios SOLID e Clean Code. 
- Não contém autenticação no momento, porém pretendo implementar por garantir mais segurança e integridade de dados.
- Zod e RHF permitem validação eficaz e integrada com tratamento de erros, reduzindo states e renders com otimização de inputs uncontrolleds.
- Está em desenvolvimento um backend para aplicação, permitindo salvar dados, integração com API e muito mais.

## 📦 Como rodar localmente 

**Clonar projeto**

**git clone** https://github.com/VinicyosFerreira/burguermino

**Acessar pasta**

cd burguermino

**Instalar dependências**

npm install

**Rodar projeto**

npm run dev
## 🔗 Links 

**Código Fonte** [Confira o código fonte]
https://github.com/VinicyosFerreira/burguermino
