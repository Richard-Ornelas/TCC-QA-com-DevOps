# 🚀 Automação de Testes na Cultura DevOps

📘 **Trabalho de Conclusão de Curso**  
Este projeto é o Trabalho de Conclusão de Curso de Richard Nicolás Santana Ornelas, realizado no curso de **Tecnologia em Sistemas para Internet** no Instituto Federal de Brasília (IFB). Foi desenvolvido como um estudo de caso sobre a implementação de automação de testes dentro da cultura DevOps, aplicando pipelines de Integração Contínua (CI) com Cypress e Jenkins para avaliar melhorias na qualidade e consistência dos testes.

## 📄 Descrição  
Este estudo analisa como a integração de testes automatizados ao DevOps pode tornar o ciclo de desenvolvimento mais robusto e eficiente. Comparando cenários fora e dentro do DevOps, o projeto explora os ganhos em controle e consistência ao implementar um pipeline CI com ferramentas modernas.

Para realizar as técnicas de automação e integrar as práticas da cultura DevOps, foi utilizado o site de e-commerce **Qazando**, o qual simula um sistema de compras com funcionalidades essenciais, como cadastro, login, adição de produtos ao carrinho e finalização de compras. Esse site serviu como base para a execução dos testes automatizados de ponta a ponta com Cypress.

## 🎯 Objetivo
Demonstrar a eficácia da automação de testes ao:
1. Integrar testes automatizados a um pipeline de CI com Jenkins.
2. Comparar o desempenho de execução dos testes em dois cenários distintos:
   - **Fora do DevOps**: Testes executados de forma independente.
   - **Dentro do DevOps**: Testes integrados ao pipeline CI, trazendo maior controle e consistência.

## 🛠️ Tecnologias Utilizadas
- **Jenkins**: Automação de integração contínua para garantir entregas rápidas e confiáveis.
- **GitHub**: Versionamento de código e colaboração.
- **Cypress**: Automação de testes de integração e ponta a ponta.
- **Visual Studio Code**: IDE para desenvolvimento.
- **JavaScript**: Linguagem utilizada nos scripts de automação.

## 🔍 Metodologia
Foram configurados dois cenários de testes:
- **Cenário 1 - Fora do DevOps**: Testes executados isoladamente, com menos controle.
- **Cenário 2 - Dentro do DevOps**: Testes integrados em um pipeline CI no Jenkins, que automatiza etapas como clonagem do repositório, instalação de dependências e execução dos testes.

Os testes foram monitorados para comparar o tempo total de execução e a detecção de falhas em cada cenário. 📊

## 📈 Resultados e Conclusão
- **Tempo de Execução**: No DevOps, o tempo de execução foi maior devido às etapas adicionais no pipeline.
- **Consistência e Controle**: Ambos os cenários mantiveram a qualidade com 100% de cobertura de código e nenhuma falha após várias execuções. O ambiente DevOps, porém, mostrou-se superior em controle e consistência, essencial para projetos em escala.

## 🛤️ Próximos Passos
- **Continuous Delivery (CD)**: Expansão do pipeline para incluir CD, garantindo entrega contínua.
- **Testes de Segurança e Desempenho**: Integração de novos tipos de testes para fortalecer ainda mais a qualidade do software.
