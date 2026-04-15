# Portfolio

Landing estática preparada para publicar no GitHub Pages com deploy automático por GitHub Actions.

## Arquivos principais

- `index.html`: estrutura da página
- `styles.css`: identidade visual e responsividade
- `script.js`: dados dos projetos, stack e contatos
- `favicon.svg`: ícone da página
- `.github/workflows/deploy-pages.yml`: workflow de deploy automático
- `404.html`: fallback estático
- `.nojekyll`: garante publicação sem processamento Jekyll

## Editar conteúdo

Os dados que você vai trocar com mais frequência estão em `script.js`:

- `projects`
- `galleryItems`
- `principles`
- `stackGroups`
- `stats`
- `contactLinks`

Se quiser trocar o hero, a bio principal ou a estrutura de seções, ajuste `index.html`.

## Trocar foto e prints

- A página tenta carregar `media/profile.jpg` primeiro
- Se o arquivo não existir, ela cai automaticamente em `media/profile-placeholder.svg`
- Os placeholders de GitHub e produto estão na pasta `media/`
- A bandeira vetorial fica em `media/brazil-brutalist-flag.svg`
- Para usar `.png`, `.jpg` ou outros arquivos reais, ajuste os caminhos em `script.js`

## Ícones de stack

- Os chips e a grade de stacks usam ícones via `Simple Icons CDN` quando a tecnologia tem marca disponível
- Quando não houver ícone mapeado, a página mostra um fallback com monograma automaticamente
- O mapeamento fica no objeto `iconMap` dentro de `script.js`

## Preview local

Servidor local:

```bash
cd /home/gbezzu/Vibe/portfolio
python3 -m http.server 4173
```

URL local:

```text
http://127.0.0.1:4173
```

## Publicar no GitHub Pages

### 1. Inicializar o repositório

```bash
cd /home/gbezzu/Vibe/portfolio
git init -b main
git add .
git commit -m "Initial portfolio"
```

### 2. Criar o repositório no GitHub e conectar o remoto

```bash
git remote add origin https://github.com/SEU_USUARIO/SEU_REPO.git
git push -u origin main
```

### 3. Habilitar GitHub Pages

No GitHub:

1. Abra `Settings > Pages`
2. Em `Source`, selecione `GitHub Actions`

Depois disso, cada push na branch `main` publica o site automaticamente.

## Domínio customizado

Se depois você quiser usar domínio próprio, crie um arquivo `CNAME` na raiz com o domínio:

```text
portfolio.seudominio.com
```

O workflow já copia esse arquivo automaticamente para o deploy.

## Observação

Alguns links de repositórios não foram expostos porque os projetos locais parecem privados ou internos. O portfólio prioriza o produto entregue, a stack e o problema resolvido.
