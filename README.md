# Plano A

Aplicação web em React com Vite para um presente digital interativo do Dia dos Namorados.

## Como rodar

```bash
npm install
npm run dev
```

Depois abra o endereço mostrado pelo Vite no navegador.

## Onde alterar a senha

A senha do Plano A fica em `src/components/PasswordScreen.jsx`:

```js
const ACCESS_PASSWORD_A = 'SENHA_DA_CARTA'
```

O Plano B não tem senha válida por design. Qualquer texto digitado é negado.

## Onde editar textos

- Perguntas, opções e feedbacks: `src/data/gameSteps.js`
- Memórias: `src/data/memories.js`
- Revelação final e surpresa: `src/data/finalContent.js`
- Textos das telas principais: `src/App.jsx` e componentes em `src/components`

## Onde trocar fotos

Substitua os arquivos em `src/assets/images` mantendo os mesmos nomes:

- `memoria-1.jpg`
- `memoria-2.jpg`
- `memoria-3.jpg`
- `final.jpg`

## Como publicar na Vercel

1. Envie o projeto para um repositório GitHub.
2. Na Vercel, importe o repositório.
3. Use as configurações padrão para Vite:
   - Build command: `npm run build`
   - Output directory: `dist`
4. Clique em Deploy.
