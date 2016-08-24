# simulador-de-colisao

ATENÇÃO: não use em caso de histórico de epilepsia ou convulções.

Simulador de colisão usando carinhas do Slack.
Basta abrir o index.html para visualizar.

TO DO:
- Fazer inimigos girarem bonitamente;
- Fazer um menu inicial com seletor de personagem;
- Criar uma tabela de high-scores - surigo mongoDB;

DONE:
- Fazer o loop de interações da bala com o inimigo;
- Criar um sistema de pontos;
- Fazer os inimigos surgirem fora da tela e andarem, com velocidades diferentes, em direção à Terra;
- Fazer o número máximo de inimigos até 300 pontos ser 5 simultâneos. Ao jogar o inimigo para fora da tela, ganha um ponto - se for do tipo "rápido" (1.5x a velocidade padrão), 2. Se ele atingir a Terra, pere o jogo. Após 100 pontos, aumentar o número de inimigos mais rápidos; após 200 pontos, aumentar um pouco a velocidade de todos, inclusive os mais rápidos; após 300, aumentar o nº máximo para 7; após 400 para 10; após 500 aumentar mais a velocidade de todos, de maneira a ser IMPOSSÍVEL passar de 600 pontos. Caso alguém chege a 600 pontos, aumentar o número máximo para 15 e fazer todos os inimigos serem do tipo rápido; (o comportamento foi alterado, mas existem níveis e um modo especial)
