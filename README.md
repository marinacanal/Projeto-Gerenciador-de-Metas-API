# Gerenciador de Metas 🚀

Esse é um projeto que ajuda a gerenciar suas metas pessoais de forma simples e prática. 

### Backend 

    Node.js: 🟩 Ambiente de execução para JavaScript no lado do servidor.
    TypeScript: 🟨 Superset do JavaScript, com tipagem estática para maior segurança.

## ✅ Funcionalidades Implementadas
### Backend

    GET /PendingGoals:
        📝 Retorna todas as metas que estão pendentes.
        
    GET /WeekSummary:
        📅 Mostra um resumo das metas da semana.
        Exibe a quantidade de metas concluídas e as pendentes.

    POST /Goal:
        ➕ Permite ao usuário adicionar novas metas.
        Aceita um título e frequência desejada por semana para cada nova meta.
        
    POST /GoalCompletion:
        ✅ Permite o usuário completar uma meta.
