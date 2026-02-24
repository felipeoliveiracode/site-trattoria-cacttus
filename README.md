# 🍝 Trattoria Cacttus

Site institucional da Trattoria Cacttus - Um restaurante que une a tradição culinária italiana aos sabores autênticos do Nordeste brasileiro.

> **Nota**: Este é um projeto fictício desenvolvido para fins de portfólio/demonstração.

## 📖 Sobre o Projeto

Este é um site one-page responsivo desenvolvido para a Trattoria Cacttus, um restaurante conceitual fictício. O site apresenta a proposta única do restaurante: massas artesanais italianas com ingredientes frescos e regionais do Nordeste.

## ✨ Funcionalidades

- **Design Responsivo**: Layout adaptável para diferentes tamanhos de tela (mobile, tablet, desktop)
- **Menu Mobile Funcional**: Toggle com hamburger menu que se adapta em telas pequenas
- **Carrossel Interativo**: Navegação fluida entre destaques do menu com:
  - Botões anterior/próximo
  - Dots indicadores de posição
  - Responsivo (1-4 cards por slide conforme o tamanho da tela)
- **Animações on Scroll**: Elementos revelados suavemente com efeitos de fade-in, slide-up, slide-left e slide-right usando Intersection Observer API
- **Navegação Intuitiva**: Menu de navegação com links âncora para as seções
- **Seções Principais**:
  - Banner principal com call-to-action e imagem de fundo
  - Sobre o restaurante com cards de diferenciais
  - Carrossel de destaques do menu com imagens
  - Localização com mapa e horários
  - Galeria de fotos em grid responsivo
  - Avaliações de clientes com 5 estrelas
  - Banner de CTA de reserva
  - Rodapé com informações de contato e redes sociais

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica do site
- **CSS3**: Estilização e layout responsivo
- **JavaScript (Vanilla)**: Animações e interatividade
- **Google Fonts**: Tipografia (Inter e Playfair Display)
- **Material Symbols**: Ícones do Google

## 📁 Estrutura do Projeto

```
site-trattoria-cacttus/
│
├── index.html          # Página principal
├── style.css           # Estilos principais
├── animations.css      # Animações CSS
├── scripts.js          # JavaScript para interatividade
├── README.md           # Este arquivo
│
└── assets/             # Recursos de mídia
    ├── bg-banner.png
    ├── Bruschetta.png
    ├── Spaghetti.png
    ├── Gnocchi.png
    ├── Pescada.png
    ├── maps.png
    └── gallery1-8.png  # Fotos da galeria
```

## 🚀 Como Usar

1. **Clone ou baixe o repositório**
   ```bash
   git clone https://github.com/seu-usuario/site-trattoria-cacttus.git
   cd site-trattoria-cacttus
   ```

2. **Abra o projeto**
   - Navegue até a pasta do projeto

3. **Execute o site**
   - **Opção 1**: Abra o arquivo `index.html` diretamente no navegador
   - **Opção 2**: Use Live Server no VS Code (extensão)
   - **Opção 3**: Use qualquer outro servidor local (Python, Node, etc.)

## ⚙️ Configuração e Personalizacão

### Cores Principais
Todas as cores são definidas como variáveis CSS em `:root` no `style.css`:
```css
--color-primary: #a34719;          /* Cor primária (botões, acentos) */
--color-primary-hover: #c45e2f;    /* Hover da cor primária */
--color-dark: #1A120E;             /* Texto escuro */
--color-background: #FBF9F8;       /* Fundo claro */
--color-subtitle: #946851;         /* Cor dos subtítulos */
```

### Fontes
- **Primária**: Inter (sans-serif) - Para textos e conteúdo geral
- **Secundária**: Playfair Display (serif) - Para títulos e headings

## 🎨 Características Técnicas

### Animações e Interatividade
- **Intersection Observer API**: Detecta quando elementos entram no viewport para aplicar animações suaves
- **Efeitos de Revelação**: Fade-in, slide-up, slide-left, slide-right com delays escalonados
- **Transições CSS**: Smooth transitions de 0.2s em links, botões, cards e imagens
- **Carrossel Dinâmico**: 
  - Cálculo automático de cards por slide baseado no viewport
  - Navegação com botões prev/next e dots interativos
  - Scroll suave com transform/translateX
  - Desabilita botões nas extremidades

### Menu Responsivo
- **Toggle Mobile**: Hamburger menu que aparece em telas pequenas (< 992px)
- **Overlay**: Clique fora fecha o menu
- **Scroll Lock**: Previne scroll quando menu está aberto
- **Animações**: Transições suaves de abertura/fechamento

### Layout Responsivo
- **Grid e Flexbox**: Layouts flexíveis e dinâmicos
- **Media Queries**: Pontos de quebra para mobile (480px), tablet (768px) e desktop (992px+)
- **Imagens Responsivas**: Gallery em grid adaptativo com 8 fotos
- **Fonte Dinâmica**: Font-size com clamp() para escala fluida entre tamanhos

## � Pontos de Quebra Responsivos

| Dispositivo | Tamanho | Comportamento |
|------------|---------|---------------|
| Mobile | ≤ 480px | Menu hamburger, 1 card/slide, padding comprimido |
| Tablet Pequeno | 481-768px | Menu hamburger, 2 cards/slide |
| Tablet Grande | 769-992px | Menu completo, 3 cards/slide |
| Desktop | > 992px | Menu horizontal, 4 cards/slide |

## �📍 Informações do Restaurante

**Endereço**: Rua das Acácias, 123 - Centro, Juazeiro do Norte - CE  
**Horário**: Sexta e Sábado, das 18h às 23h  
**Contato**: (88) 99999-8888 | contato@trattoriacacttus.com

## 🎯 Destaques do Menu

- **Bruschetta Sertaneja**: Pão italiano tostado com queijo coalho, tomate fresco e manjericão
- **Spaghetti ao Vôngole com Coentro**: Massa fresca com frutos do mar e um toque refrescante de coentro
- **Gnocchi de Macaxeira ao Ragu**: Nhoque macio de macaxeira com um rico ragu de cordeiro
- **Pescada Amarela na Crosta**: Peixe fresco com crosta de castanhas, servido com purê de jerimum

## 🎲 Funcionalidades JavaScript

### Menu Mobile
- Hamburger toggle que abre/fecha o menu em telas pequenas
- Overlay com click-outside para fechar
- Previne scroll do body quando menu está ativo
- Fecha automaticamente ao clicar em um link

### Carrossel de Destaques
- Navegação com botões anterior/próximo
- Dots de navegação interativos (clicáveis)
- Cálculo dinâmico de cards por viewport:
  - Mobile (≤480px): 1 card
  - Tablet (481-768px): 2 cards
  - Tablet Grande (769-992px): 3 cards
  - Desktop (>992px): 4 cards
- Desabilita botões quando atinge extremidades
- Animações suaves com CSS transform

### Animações com Intersection Observer
- Detecta elementos com classe `.reveal` no viewport
- Aplica animações baseadas em classes:
  - `.reveal-up`: Slide up com fade
  - `.reveal-left`: Slide left com fade
  - `.reveal-right`: Slide right com fade
- Classes de delay escalonado (`.delay-1`, `.delay-2`, etc.)
- Validação de elementos antes de inicializar (evita erros)

## 🌟 Diferenciais

- ✅ Massas artesanais feitas diariamente
- ✅ Frutos do mar frescos de fornecedores selecionados
- ✅ Ingredientes locais valorizando produtores regionais
- ✅ Experiência autoral com pratos criados com paixão
- ✅ Site funcional 100% com vanilla JavaScript (sem dependências externas)
- ✅ SEO-friendly com tags semânticas
- ✅ Performance otimizada com CSS animations e media queries
- ✅ Acessibilidade (labels, ARIA, etrusagem semântica)

## 📧 Contato e Redes Sociais

- **Email**: contato@trattoriacacttus.com
- **WhatsApp**: (88) 99999-8888
- **Instagram**: [@trattoriacacttus](https://instagram.com/trattoriacacttus)
- **Facebook**: [Trattoria Cacttus](https://facebook.com/trattoriacacttus)

## 🛠️ Dicas de Personalizacão

### Alterar Cores
Edite as variáveis CSS em `style.css`:
```css
:root {
    --color-primary: #a34719;       /* Cor do seu restaurante */
    --color-primary-hover: #c45e2f;
    --color-dark: #1A120E;
    --color-background: #FBF9F8;
    --color-subtitle: #946851;
}
```

### Adicionar Imagens
Coloque suas imagens na pasta `assets/` e atualize as referências no `index.html`

### Modificar Conteúdo
Todo o conteúdo está no `index.html` - edite diretamente lá

### Adicionar/Remover Seções
Adicione novas `<section>` no `index.html` e crie estilos correspondentes em `style.css`

## 📄 Licença

Este é um projeto fictício desenvolvido para fins educacionais e de portfólio.

---

Desenvolvido com ❤️ como demonstração de design e desenvolvimento web responsivo, celebrando a fusão entre a Itália e o Nordeste brasileiro.

**Último atualizado**: 23 de fevereiro de 2026
