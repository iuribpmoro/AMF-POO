# Basico

## Cascata:
- inline > tag style > link

- Especificidade:
  - 0. Universal selector, combinators e negation pseudo-class (:not())
  - 1. Element type selector e pseudo-elements(::before, ::after)
  - 10. Classes e attribute selectors ([type="radio"])
  - 100. ID selector
  - 1000. Inline

## At-rules: 

- **modificar o comportamento do CSS**

- @import -> incluir um CSS externo
- @media -> regras condicionais para dispositivos
- @font-face -> fontes externas
- @keyframes -> animations

## Vendor Prefixes: 
- **permite adicionar features especificas dos browsers**

- Exemplos:
  - -webkit-background-clip: text; -> Chrome, Safari, iOS e Android
	- -moz-background-clip: text; -> Mozilla (Firefox) 
	- -ms-background-clip: text; -> Internet Explorer ou Edge
	- -o-background-clip: text; -> Opera 

- References
  - https://ireade.github.io/which-vendor-prefix
  - https://caniuse.com

# Nem tudo sao pixels
- length -> distancia: px, em, vw
- angle -> angulo: deg, rad, turn
- time -> tempo: s, ms
- resolution -> resolucoes de dispositivos: dpi

## Distancias

### Absolutas <lenght>
- Sao fixas e nao alteram seu valor
- cm, in, px
  - 1px = 1/96th of 1in

### Relativas
- relativas a outro valor, como o elemento pai, root ou o tamanho da tela
- **Beneficio:** adaptacao a diferentes tamanhos de tela

- **Unidades:**
  - em -> tamanho da fonte do pai
  - rem -> tamanho da fonte do root/raiz
  - vw e vh -> 1% do tamanho da viewport
  - % -> relativas ao tamanho do elemento pai

## Position <position>
- Valor position diferente da propriedade position


# Flexbox
- No container:
  - display: flex
  - flex-direction -> rows = colunas da linha, column = linhas da coluna
  - justify-content -> alinhamento no mesmo eixo
  - align-items -> alinhamento no eixo contrario
