# Portfolio — João Andrade

Landing page profissional, estática e sem frameworks: **HTML + CSS + JavaScript puros**.
Feita para recrutadores (vagas) e para clientes de freelance (projetos).

## Estrutura

```
portfolio/
├── index.html      → todo o conteúdo
├── css/styles.css  → visual (paleta navy/amber do próprio GitHub)
├── js/main.js      → menu, animações e formulário
└── README.md
```

## ⚙️ Configuração

- **Contato** (e-mail do formulário e WhatsApp) já configurado em `SITE_CONFIG` no `js/main.js`:
  `joao.pandrade09@gmail.com` / `+55 21 98627-6290`.
- **Trajetória** preenchida com os dados do LinkedIn (Microware, Estácio, certificações).
- **Foto (opcional)** — dá para adicionar sua foto no hero ou no "Sobre" se quiser.

## Publicar (grátis, em 2 minutos)

**Opção A — Vercel/Netlify:** arraste a pasta `portfolio/` no painel deles. Pronto.

**Opção B — GitHub Pages:**
1. Crie um repositório (ex.: `portfolio`) e suba os arquivos.
2. Settings → Pages → Source: branch `main`, pasta `/ (root)` → Save.
3. Seu site ficará em `https://joao-andrade11.github.io/portfolio/`.

## Rodar localmente

```bash
cd portfolio
python3 -m http.server 8080
# abra http://localhost:8080
```

## Personalização rápida

| O quê | Onde |
|---|---|
| Textos e seções | `index.html` |
| Cores (paleta navy/amber/teal) | variáveis `:root` no topo de `css/styles.css` |
| E-mail do formulário | `SITE_CONFIG` em `js/main.js` |

## Seções

01 Sobre · 02 Projeto em destaque (eTreinamentos) · 03 Projetos ·
04 Trajetória & Estudos · 05 Serviços/Freelance · 06 Contato
