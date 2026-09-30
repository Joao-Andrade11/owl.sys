# owl.sys 🦉 — Portfólio de João Andrade

> **No ar:** https://joao-andrade11.github.io/owl.sys/

Landing page profissional **100% estática** (HTML5 + CSS3 + JavaScript vanilla),
com **zero dependências** e nenhum framework. Construída à mão — do layout aos
componentes 3D.

## ✨ Destaques

- 🌐 **Trilíngue** (PT · EN · ES) com seletor na navbar, preferência salva e SEO traduzido
- 🌗 **Tema claro/escuro** com respeito a `prefers-color-scheme`
- 🌀 **Carrossel 3D** de projetos com arraste, inércia e setas
- ✨ **Faixa de tipografia cinética** — “Code secure · Build solid”
- 🔆 **Neon border** com glow âmbar percorrendo os terminais
- ⚡ **Animações otimizadas**: pausam fora da tela, blur reduzido, update ~30fps
- ♿ **Acessível**: skip-link, aria-labels traduzidas, `prefers-reduced-motion`, contraste WCAG AA
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
├── css/styles.css             → identidade visual + temas claro/escuro
├── js/
│   ├── main.js                → nav, carrossel, kinetic, neon, tema, formulário
│   └── i18n.js                → dicionários EN/ES + seletor de idioma
├── assets/joao.jpg            → foto do hero
└── .github/workflows/static.yml → deploy automático (GitHub Pages)
```

## 🚀 Rodar localmente

```bash
python3 -m http.server 8080
# abra http://localhost:8080
```

## 🌍 Publicação

Deploy automático via **GitHub Pages** (GitHub Actions): cada `git push` em
`main` publica o site em ~1 minuto, sem build (arquivos estáticos).

## ⚙️ Personalização rápida

| O quê | Onde |
|---|---|
| E-mail / WhatsApp do formulário | `SITE_CONFIG` em `js/main.js` |
| Textos PT | `index.html` |
| Traduções EN/ES | `js/i18n.js` |
| Cores da marca (navy/âmbar/teal) | variáveis `:root` em `css/styles.css` |

## 📬 Contato

- **E-mail:** joao.pandrade09@gmail.com
- **WhatsApp:** +55 21 98627-6290
- **LinkedIn:** [joaopedrosantosdeandrade](https://www.linkedin.com/in/joaopedrosantosdeandrade/)
- **GitHub:** [Joao-Andrade11](https://github.com/Joao-Andrade11)

---

*Vê no escuro. Não pisca antes de decidir. Voa em silêncio.* 🦉
