<h1>API Documentation</h1>
<h2>Usuários</h2>
<h3>Listar todos os usuários</h3>

```bash
GET /users
```
<h3>Buscar um usuário pelo ID</h3>


```bash
GET /users/:id
```
<h3>Criar um novo usuário</h3>

```bash
POST /users
```
```bash
Body:
{
  "name": "Nome do usuário",
  "email": "email@example.com",
  "phone": "123456789",
  "password": "senha",
  "type": "client"
}
```
<h3>Atualizar um usuário existente</h3>

```bash
PUT /users/:id
```
```bash
Body:
{
  "name": "Novo nome do usuário",
  "email": "novoemail@example.com",
  "phone": "987654321",
  "password": "novasenha",
  "type": "barber"
}
```
<h3>Excluir um usuário</h3>

```bash
DELETE /users/:id
```

<h2>Serviços</h2>
<h3>Listar todos os serviços</h3>

```bash
GET /services
```

<h3>Buscar um serviço pelo ID</h3>

```bash
GET /services/:id
```
<h3>Criar um novo serviço</h3>

```bash
POST /services
```

```bash
Body:
{
  "name": "Nome do serviço",
  "description": "Descrição do serviço",
  "duration": 60,
  "price": 50.00
}
```
<h3>Atualizar um serviço existente</h3>

```bash
PUT /services/:id
```

```bash
Body:
{
  "name": "Novo nome do serviço",
  "description": "Nova descrição do serviço",
  "duration": 90,
  "price": 70.00
}
```

<h3>Excluir um serviço</h3>

```bash
DELETE /services/:id
```

<h2>Agendamentos</h2>
<h3>Listar todos os agendamentos</h3>

```bash
GET /appointments
```
<h3>Buscar um agendamento pelo ID</h3>

```bash
GET /appointments/:id
```
<h3>Criar um novo agendamento</h3>

```bash
POST /appointments
```

```bash
Body:
{
  "user_id": 1,
  "service_id": 1,
  "date_time": "2024-06-15T10:00:00",
  "status": "scheduled",
  "barber_id": 2
}
```
<h3>Atualizar um agendamento existente</h3>


PUT /appointments/:id

Body:
{
  "user_id": 1,
  "service_id": 2,
  "date_time": "2024-06-16T11:00:00",
  "status": "confirmed",
  "barber_id": 2
}
Excluir um agendamento


DELETE /appointments/:id
Notificações
Listar todas as notificações


GET /notifications
Buscar uma notificação pelo ID


GET /notifications/:id
Criar uma nova notificação
css

POST /notifications

Body:
{
  "user_id": 1,
  "message": "Mensagem da notificação",
  "status": "pending",
  "date_time": "2024-06-15T15:00:00"
}
Atualizar uma notificação existente


PUT /notifications/:id

Body:
{
  "user_id": 1,
  "message": "Nova mensagem da notificação",
  "status": "sent",
  "date_time": "2024-06-16T12:00:00"
}
Excluir uma notificação


DELETE /notifications/:id