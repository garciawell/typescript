# Recuperação de senha

  **RF**
   - O usuário deve poder recuperar sua senha informando o seu e-mail;
   - O usuário deve receber um e-mail com instruções de recuperação de senha;
   - O usuário deve poder resetar sua senha;

  **RNF**
  - Utilizar Mailtrap para testar envios de e-mail - ambiente dev;
  - Utilizar Amazon SES para envios em produção;
  - O envio de e-mails deve acontecer em segundo plano (background job - fila);


  **RN**
  - O link enviado por e-mail para resetar a senha, deve expirar em 2h;
  - O usuário precisa confirmar a nova senha ao resetar;

# Atualização de perfil

**RF**
- O usuário deve poder atualizar seu nome, email e senha;

**RNF**

**RN**
- O usuário não pode alterar seu e-mail para um e-mail já utilizado;
- Para atualizar sua senha, o usuário deve informar a senha antiga
- Para atualizar sua senha, o usuário precisa confirmar a nova senha;

# Painel do prestador

**RF**

- O usuário deve poder listar seus agendamento de um dia específico;
- O prestador deve receber uma notificação sempre que houver um novo agendamento;
- O prestador deve poder visualizar as notificações não lidas;

**RNF**

- os agendamento do prestador no dia devem ser armazenadas em cache;
- As notificações do prestador devem ser armazenadas no MongoDB;
- As notificações do prestador devem ser enviadas em tempo-real utilizando Socket.io;

**RN**

- A notificação deve ter um status de lida ou não lida para que o prestador possa controlar;


# Agendamento de serviços

**RF**
- O usuário deve poder listar todos prestadores cadastrados;
- O usuário deve poder listar os dias de um mês com pelo menos um horário disponível de um prestador;
- O usuário deve poder listar horários disponíveis em um dia específico de um prestador;
- O usuário deve poder realizar um agendamento com um prestador;

**RNF**
- A listagem de prestadores deve ser armazenada em cache;

**RN**
- Cada agendamento deve durar 1h exatamente;
- Os agendamentos devem estar disponíveis entre 8h às 16hrs (Primeiro às 8h, último às 17h);
- O usuário não pode agendar um horário já ocupado;
- O usuário não pode agendar um horário que já passou;
- O usuário não pode agendar serviços consigo mesmo;

