# ⚡ Dashboard de Tarefas com Estatísticas

Sistema completo de gestão de tarefas com prioridades, filtros, timer em tempo real e contador de estatísticas. Desenvolvido com HTML, CSS e JavaScript puro — sem frameworks ou bibliotecas externas.



## ✅ Funcionalidades

- Adicionar tarefas com título e nível de prioridade (Alta, Média, Baixa)
- Listar tarefas em tempo real com badge de prioridade colorido
- Concluir tarefas — botão desabilitado automaticamente após conclusão
- Remover tarefas da lista
- Filtrar por status (Todas, Pendentes, Concluídas) ou por prioridade
- Contador de estatísticas em tempo real (Total, Pendentes, Concluídas)
- Timer mostrando há quantos segundos cada tarefa foi criada
- Layout responsivo — funciona em desktop e mobile

---

## 🛠️ Tecnologias utilizadas

- HTML5
- CSS3 (com variáveis CSS / custom properties)
- JavaScript (ES6)

---

## 📁 Estrutura do projeto

```
projeto-tarefas/
├── index.html
├── estilos/
│   └── style.css
└── scripts/
    └── script.js
```

---

## 🚀 Como rodar o projeto

1. Clone o repositório:
```bash
git clone https://github.com/BrennoVB/projeto-tarefas.git
```

2. Acesse a pasta do projeto:
```bash
cd projeto-tarefas
```

3. Abra o arquivo `index.html` no navegador.

> Não é necessário instalar nada — o projeto roda direto no navegador.

---

## 💡 Conceitos praticados

- Objetos e métodos com `this`
- Manipulação avançada do DOM (`createElement`, `appendChild`, `setAttribute`, `removeChild`)
- Eventos com `addEventListener`
- Timer em tempo real com `setInterval`
- Filtros dinâmicos com arrays e `for`
- Variáveis CSS (`:root` com custom properties)
- CSS responsivo com `@media query`
- `let` e `const`

---

## 🎨 Paleta de cores

| Variável | Cor | Uso |
|---|---|---|
| `--bg-principal` | `#0A0A0F` | Fundo da página |
| `--bg-card` | `#13131A` | Cards e seções |
| `--cor-principal` | `#00D4FF` | Destaque e botão principal |
| `--cor-alta` | `#FF4757` | Prioridade alta / remover |
| `--cor-media` | `#FFA502` | Prioridade média |
| `--cor-baixa` | `#2ED573` | Prioridade baixa / concluir |

---

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](./LICENSE) para mais detalhes.
