# Redux Toolkit

Com a popularização do Developer Experience (DX) muitas ferramentas vem se adaptando para trazer uma maior facilidade de uso para os desenvolvedores, com o redux não foi diferente. O foco desse repositório é ver como funciona o redux toolkit, uma ferramenta que promete nos auxiliar em todo fluxo de funcionamento de uma arquitetura flux com redux.

## Modules -> Slices

O redux toolkit traz uma nova perspectiva no momento de separar as responsabilidades, no lugar de dividirmos em módulos, agora dividimos em pedaços, ou seja, slices.

## Estado no Reducer

O reducer vem com o conceito de imutabilidade, ou seja, nós criamos um novo estado e o antigo não é alterado. Uma forma de trazer um melhor conforto para o dev é utilizar uma lib chamada immer que cria uma espécie de "draft" e nos permite trabalhar com o estado como se ele fosse mutável.

Essa lib ficou tão famosa e foi tão utilizada que o redux toolkit hoje já implementa o immer de maneira nativa, ou seja, nós podemos alterar diretamente o estado dentro do Reducer sem problema nenhum.

## useReduxSelector

A ideia de criar um hook de selector chamado useReduxSelector é porque nossa aplicação pode ter diferentes tipos de controle de estados, na documentação do redux toolkit é recomendado nomear como useAppSelector, porém, nosso app pode ter Context Api, Redux, etc.

## selectors

Nós podemos usar dentro do useReduxSelector o useCallback para evitar que sempre que a função seja recriada seja feito uma nova subscription para o Redux, outra abordagem é isolar essa função em uma pasta de selectors dentro do slice correspondente, funciona da mesma forma pois a função não será recriada.

# Dependências

```bash
yarn add @reduxjs/toolkit react-redux
```
