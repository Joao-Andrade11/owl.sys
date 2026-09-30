# owl.sys 🦉 — Portfólio de João Andrade

> **No ar:** https://joao-andrade11.github.io/owl.sys/

Landing page profissional **100% estática** (HTML5 + CSS3 + JavaScript vanilla),
com **zero dependências** e nenhum framework. Os componentes visuais
(carrossel 3D, borda neon e faixa cinética) são ports escritos à mão do kit
open-source [Originkit](https://github.com/vellum-ai/originkit) (MIT).

## ✨ Destaques

- 🌐 **Trilíngue** (PT · EN · ES) com seletor na navbar, preferência salva e SEO traduzido
- 🌗 **Tema claro/escuro** (creme quente / navy) com respeito a `prefers-color-scheme`
- 🌀 **Carrossel 3D** só com projetos reais — arraste, inércia, setas e teclado
- ✨ **Faixa de tipografia cinética** — “Code secure · Build solid”
- 🔆 **Neon border** com glow âmbar percorrendo os terminais
- 🔍 **SEO completo**: canonical, Open Graph com `og-image.png` 1200×630, Twitter Card e **JSON-LD Person**
- 🔒 **CSP via meta**, `robots.txt`, `sitemap.xml` e página **404** própria
- ♿ **Acessível**: skip-link, `aria-pressed`, cards fora de foco com `inert`,
  `prefers-reduced-motion`, conteúdo visível sem JS, contraste AA
- 📄 **Currículo em PDF** para baixar no hero e no contato
- 📱 **Responsivo** do celular ao desktop

## 🧩 Componentes (Originkit, portados para vanilla)

| Componente | Onde vive |
|---|---|
| **Round Carousel** | Seção 03 — anel 3D com os projetos |
| **Appear Text** (KineticTextGrid) | Faixa-manifesto entre as seções 04 e 05 |
| **Neon Border** | Terminais do hero e do eTreinamentos |

Os ports mantêm a matemática/física dos originais (raio do anel por `360/n`,
inércia com decaimento 0.94, gradientes cônicos amostrados no perímetro,
easings por Newton-Raphson) — sem React, sem framer-motion.

## 🗂️ Estrutura

```
owl.sys/
├── index.html                 → conteúdo (PT é a fonte; chaves data-i18n)
├── 404.html                   → página de erro com a coruja
├── robots.txt / sitemap.xml   → SEO técnico
├── css/styles.css             → identidade visual + temas claro/escuro
├── js/
│   ├── theme.js               → tema/idioma antes do paint (CSP-friendly)
│   ├── main.js                → nav, carrossel, kinetic, neon, formulário
│   └── i18n.js                → dicionários EN/ES + seletor de idioma
├── assets/
│   ├── joao.webp / joao.jpg   → foto do hero
│   ├── og-image.png           → card social 1200×630
│   └── cv-joao-andrade.pdf    → currículo para download
└── .github/workflows/
    ├── static.yml             → deploy automático (GitHub Pages)
    └── ci.yml                 → html-validate, link check e Lighthouse
```

## 🚀 Rodar localmente

```bash
python3 -m http.server 8080
# abra http://localhost:8080
```

## 🌍 Publicação

Deploy automático via **GitHub Pages** (GitHub Actions): cada `git push` em
`main` publica o site em ~1 minuto, sem build (arquivos estáticos).

## ✅ Qualidade & CI

A cada push, `ci.yml` roda com permissões mínimas (`contents: read`) e
ações fixadas por versão:

1. **html-validate** — marcação válida (config em `.htmlvalidate.json`)
2. **node --check** — sintaxe dos três scripts
3. **linkinator** — links internos e externos vivos
4. **Lighthouse (mobile)** — relatório em artifact (metas: 90+ em todas as categorias)

## ⚙️ Personalização rápida

| O quê | Onde |
|---|---|
| E-mail / WhatsApp do formulário | `SITE_CONFIG` em `js/main.js` |
| Textos PT | `index.html` |
| Traduções EN/ES | `js/i18n.js` |
| Cores da marca (navy/âmbar/teal) | variáveis `:root` em `css/styles.css` |

## 📬 Contato

- **E-mail:** joao.pandrade09@gmail.com
- **LinkedIn:** [joaopedrosantosdeandrade](https://www.linkedin.com/in/joaopedrosantosdeandrade/)
- **GitHub:** [Joao-Andrade11](https://github.com/Joao-Andrade11)

## 📜 Licença

MIT — veja [LICENSE](LICENSE). Inclui ports de componentes do Originkit (MIT, © vellum-ai).

---

*Vê no escuro. Não pisca antes de decidir. Voa em silêncio.* 🦉
