# Page Builder Interativo com Recursos Avançados usando Craft.js

Este é o projeto para construir um page builder interativo e altamente personalizável usando a biblioteca Craft.js. O page builder permite que os usuários criem layouts complexos e personalizados de forma visual, adicionando componentes, definindo interações entre eles e aplicando recursos avançados de formatação e animação.

## Recursos implementados

### Criação do Layout

- [x] Interface de usuário moderna e intuitiva para o page builder.
- [x] Recursos de arrastar e soltar para adicionar, reorganizar e redimensionar os componentes no layout.
- [x] Galeria de componentes predefinidos, incluindo seções, caixas de texto, imagens, botões, formulários, etc., que podem ser facilmente adicionados ao layout.
- [x] Criação e personalização de componentes customizados, com propriedades, estilos e opções de formatação específicas.

### Interações entre Componentes

- [x] Exibição/ocultação de elementos com base em eventos, como clique, hover ou outras ações do usuário.
- [x] Definição de ações personalizadas para os eventos, como exibir uma mensagem, abrir um modal, navegar para outra página, etc.
- [ ] Criação de regras condicionais, onde a exibição de um componente depende do estado ou dos valores de outros componentes.

### Recursos de Formatação

- [x] Personalização avançada da tipografia, incluindo fonte, tamanho, estilo, espaçamento, etc.
- [x] Definição de cores personalizadas, incluindo seleção de paletas, gradientes ou cores hexadecimais.
- [x] Recursos de sombras, bordas e espaçamento personalizados para os componentes.
- [x] Criação de estilos pré-definidos para aplicar formatações consistentes em todo o layout.

### Animação

- [ ] Adição de transições suaves, efeitos de entrada/saída e animações em scroll aos componentes.
- [ ] Opções de configuração para velocidade, duração e tipo de animação.
- [ ] Definição de animações personalizadas através de keyframes ou animações CSS.

### Pré-visualização em Tempo Real

- [x] Pré-visualização em tempo real do layout, refletindo as alterações feitas pelos usuários.
- [x] Atualização da pré-visualização conforme os componentes são adicionados, editados ou personalizados.
- [ ] Opções para visualizar o layout em diferentes dispositivos ou resoluções de tela, como desktop, tablet ou mobile.

## Instruções de Uso

1. Clone este repositório: `git clone https://github.com/herlanderbento/page-builder-react-craft.js`
2. Navegue até o diretório do projeto: `cd page-builder-react-craft`
3. Instale as dependências do projeto: `yarn install`
4. Inicie o servidor de desenvolvimento: `yarn run start`
5. Abra o navegador e acesse `http://localhost:3000` para visualizar o page builder.

## Estrutura do Projeto

A estrutura do projeto é organizada da seguinte maneira:

```
public
├── icons
│   ├── toolbox
│   │   ├── button.svg
│   │   ├── container.svg
│   │   ├── link.svg
│   │   ├── rectangle.svg
│   │   ├── redo.svg
│   │   ├── text-fill.svg
│   │   ├── text.svg
│   │   ├── undo.svg
│   │   └── video-fill.svg
│   ├── video-line.svg
│   ├── arrow-up.svg
│   ├── arrow.svg
│   ├── button.svg
│   ├── check.svg
│   ├── customize.svg
│   ├── delete.svg
│   ├── edit.svg
│   ├── layers.svg
│   ├── move.svg
│   ├── square.svg
│   └── type.svg
│   ├── youtube.svg
│   └── favicon.ico
├── src
│   ├── components
│   │   ├── editor
│   │   │   ├── Toolbar
│   │   │   │   ├── ToolbarDropdown.tsx
│   │   │   │   ├── ToolbarItem.tsx
│   │   │   │   ├── ToolbarRadio.tsx
│   │   │   │   ├── ToolbarSection.tsx
│   │   │   │   └── ToolbarTextInput.tsx
│   │   │   └── index.tsx
│   │   ├── Viewport
│   │   │   └── index.tsx
│   │   ├── Sidebar
│   │   │   ├── SidebarItem.tsx
│   │   │   └── index.tsx
│   │   ├── Header.tsx
│   │   ├── Toolbox.tsx
│   │   └── index.tsx
│   ├── RenderNode.tsx
│   └── selectors
│       ├── Button
│       │   ├── ButtonSettings.tsx
│       │   └── index.tsx
│       ├── Card
│       │   ├── CardSettings.tsx
│       │   └── index.tsx
│       ├── Container
│       │   ├── ContainerSettings.tsx
│       │   └── index.tsx
│       ├── Form
│       │   ├── FormSettings.tsx
│       │   └── index.tsx
│       ├── Image
│       │   ├── ImageSettings.tsx
│       │   └── index.tsx
│       ├── Input
│       │   ├── InputSettings.tsx
│       │   └── index.tsx
│       ├── Navbar
│       │   ├── NavbarSettings.tsx
│       │   └── index.tsx
│       ├── Text
│       │   ├── TextSettings.tsx
│       │   └── index.tsx
│       ├── Textarea
│       │   ├── TextareaSettings.tsx
│       │   └── index.tsx
│       ├── Video
│       │   ├── VideoSettings.tsx
│       │   └── index.tsx
│       └── Resizer.tsx
│           └── index.ts
├── pages
│   ├── _app.tsx
│   ├── _document.tsx
│   └── index.tsx
├── styles
│   └── app.css
├── types
│   └── svg.d.ts
├── utils
│   ├── numToMeasurement.ts
│   └── text.ts
├── .babelrc
├── .gitignore
├── CHANGELOG.md
├── README.md
├── next-env.d.ts
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
└── yarn.lock
```

O projeto está estruturado da seguinte forma:

- A pasta `public` contém os ícones SVG e o favicon.
- A pasta `src/components` contém os componentes utilizados no page builder, como o editor, viewport, sidebar, cabeçalho, caixa de ferramentas e os seletores de cada tipo de componente.
- A pasta `src/components/editor/Toolbar` contém os componentes relacionados à barra de ferramentas do editor, como botões, itens de menu e campos de texto.
- A pasta `src/components/Viewport` contém o componente que representa a área de visualização do layout.
- A pasta `src/components/Sidebar` contém os componentes relacionados à barra lateral do editor, como itens do menu da galeria de componentes.
- A pasta `src/components/selectors` contém os componentes para personalização de cada tipo de componente, como botão, card, container, formulário, imagem, input, navbar, texto, textarea e vídeo.
- A pasta `src/components/selectors/Resizer` contém o componente para redimensionamento dos componentes.
- A pasta `src/pages` contém os arquivos principais da aplicação, como `_app.tsx` e `_document.tsx`, além do arquivo `index.tsx`, que é a página principal do page builder.
- A pasta `src/styles` contém o arquivo CSS (`app.css`) para estilizar a aplicação.
- A pasta `src/types` contém o arquivo de declaração de tipos (`svg.d.ts`) para lidar com arquivos SVG.
- A pasta `src/utils` contém arquivos utilitários, como funções para conversão de medidas e manipulação de texto.
- Os arquivos `.babelrc`, `.gitignore`, `CHANGELOG.md`, `README.md`, `next-env.d.ts`, `next.config.js`, `package.json`, `postcss.config.js`, `tailwind.config.js` e `tsconfig.json` são arquivos de configuração do projeto.

Esta estrutura de diretórios e arquivos foi organizada para facilitar o desenvolvimento e manutenção do page builder usando a biblioteca Craft.js.

## Considerações Finais

Este projeto foi desenvolvido com base na biblioteca Craft.js e atende aos requisitos propostos no desafio. O page builder oferece uma interface intuitiva para criação de layouts personalizados, com recursos avançados de formatação, interação e animação. O código está organizado de forma modular e bem estruturada, facilitando a escalabilidade e manutenibilidade do projeto.

Fique à vontade para explorar o código, adicionar novos recursos e personalizar o page builder de acordo com suas necessidades.

Divirta-se construindo páginas incríveis com o page builder interativo e altamente personalizável usando Craft.js!