# Tema Shopify — Atacadao dos Vidros

Tema Shopify personalizado para a loja **Atacadao dos Vidros**, desenvolvido seguindo o manual de marca com a tipografia Archivo e a paleta azul da marca.

## Estrutura

```
tema-atacadao-dos-vidros/
├── assets/              # CSS, JS e imagens
│   ├── base.css
│   ├── theme.css
│   └── theme.js
├── config/
│   ├── settings_schema.json   # Configuracoes do tema (cores, logo, etc.)
│   └── settings_groups.json
├── layout/
│   ├── theme.liquid           # Layout principal
│   ├── header-group.json
│   └── footer-group.json
├── locales/
│   └── pt-BR.json             # Traducoes
├── sections/                  # Secoes reutilizaveis
│   ├── announcement-bar.liquid
│   ├── header.liquid
│   ├── hero.liquid
│   ├── featured-categories.liquid
│   ├── featured-products.liquid
│   ├── promo-banner.liquid
│   ├── trust-bar.liquid
│   ├── newsletter.liquid
│   └── footer.liquid
├── snippets/
│   └── product-card.liquid    # Card de produto reutilizavel
└── templates/                 # Templates de pagina
    ├── index.json             # Homepage
    ├── product.liquid
    ├── collection.liquid
    ├── cart.liquid
    ├── search.liquid
    ├── page.liquid
    ├── blog.liquid
    ├── article.liquid
    ├── list-collections.liquid
    └── 404.liquid
```

## Secoes da Homepage

A homepage e composta por secoes arrastaveis no editor do Shopify:

1. **Barra de Anuncio** — Faixa superior com promocoes
2. **Hero** — Banner principal com CTA e estatisticas
3. **Categorias** — Grid de categorias com icones
4. **Produtos em Destaque** — Produtos de uma colecao selecionada
5. **Banner Promocional** — Orcamento para grandes projetos
6. **Barra de Confianca** — Compra segura, entrega, suporte, parcelamento
7. **Newsletter** — Captura de e-mail

## Instalacao

### Via Shopify CLI (recomendado)

```bash
shopify theme push --store sua-loja.myshopify.com
```

### Via upload manual

1. Acesse **Loja Virtual > Temas** no admin Shopify
2. Clique em **Adicionar tema > Fazer upload de arquivo zip**
3. Comprima a pasta do tema em `.zip` e faca o upload

### Via Shopify CLI (desenvolvimento local)

```bash
shopify theme dev --store sua-loja.myshopify.com
```

## Personalizacao

No editor do Shopify (**Personalizar**), voce pode:

- Alterar todas as cores da marca em **Configuracoes do Tema > Cores**
- Upload do logo e favicon em **Configuracoes do Tema > Logo**
- Editar textos de todas as secoes diretamente no editor visual
- Reordenar secoes da homepage via drag & drop
- Configurar redes sociais e WhatsApp

## Cores da Marca (padrao)

| Cor | HEX | Uso |
|-----|-----|-----|
| Azul Principal | `#2563EB` | Botoes, links, destaques |
| Azul Profundo | `#1D4ED8` | Hover, gradientes |
| Azul Claro | `#3B82F6` | Elementos secundarios |
| Escuro | `#0F172A` | Textos principais |
| Suave | `#64748B` | Textos secundarios |
| Fundo | `#F8FAFC` | Background |
| Destaque | `#FACC15` | Badges, precos em oferta |

---

Desenvolvido por **SOMA+**
