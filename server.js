const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();
const port = 3000;
const cors = require('cors');
const bodyParser = require('body-parser');
const { ObjectId } = require('mongodb');

app.use(express.static(__dirname));
app.use(cors());

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.post('/adicionar-paciente', async (req, res) => {
  const paciente = req.body;
  console.log(paciente);

  // Verificar se existem sessões no paciente
  if (!paciente.sessions || paciente.sessions.length === 0) {
    console.log('Nenhuma sessão enviada');
    res.status(400).send('Nenhuma sessão enviada');
    return;
  }

  try {
    const client = await MongoClient.connect('mongodb://localhost:27017');
    console.log('Conexão com o MongoDB estabelecida');

    const db = client.db('mestrado');
    const pacientesCollection = db.collection('pacientes'); // Substitua "pacientes" pelo nome da sua coleção de pacientes

    // Fazer uma cópia do objeto paciente
    const pacienteCopy = Object.assign({}, paciente);

    // Remover o campo "sessions" da cópia do paciente
    delete pacienteCopy.sessions;

    // Adicionar o paciente à coleção "pacientes"
    const result = await pacientesCollection.insertOne(pacienteCopy);
    const pacienteId = result.insertedId;

    // Criar um array com as IDs das sessões
    const sessionIds = [];

    // Para cada sessão do paciente, armazenar em uma coleção separada
    const sessionsCollection = db.collection('sessions');

    for (const session of paciente.sessions) {
      session.pacienteId = pacienteId;
      const sessionResult = await sessionsCollection.insertOne(session);
      const sessionId = sessionResult.insertedId;
      sessionIds.push(sessionId);
    }

    // Atualizar o paciente com as IDs das sessões
    await pacientesCollection.updateOne(
      { _id: pacienteId },
      { $set: { sessions: sessionIds } }
    );

    console.log('Paciente adicionado com sucesso:', pacienteId);
    res.status(200).send('Paciente adicionado com sucesso');

    client.close();
    console.log('Conexão com o MongoDB fechada');
  } catch (err) {
    console.log('Erro ao conectar ou adicionar o paciente:', err);
    res.status(500).send('Erro ao conectar ou adicionar o paciente');
  }
});
let nextSequenceNumber = 1;


app.get('/pacientes', async (req, res) => {
  try {
    // Conectar ao banco de dados MongoDB
    const client = await MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true });
    const db = client.db('mestrado'); // Substitua "nome-do-banco" pelo nome do seu banco de dados
    const pacientesCollection = db.collection('pacientes'); // Substitua "pacientes" pelo nome da sua coleção de pacientes
    const sessionsCollection = db.collection('sessions'); // Substitua "sessions" pelo nome da sua coleção de sessions

    // Buscar todos os pacientes
    const pacientes = await pacientesCollection.find({}, { _id: 1, name: 1 }).toArray();

    // Para cada paciente, buscar as sessions correspondentes
    for (const paciente of pacientes) {
      const sessionIds = paciente.sessions;

      // Buscar as sessions pelo ID
      const sessions = await sessionsCollection.find({ _id: { $in: sessionIds } }).toArray();

      // Adicionar as sessions ao paciente
      paciente.sessions = sessions;
    }


    // Fechar a conexão com o banco de dados
    client.close();

    // Retornar os pacientes encontrados com as sessions
    res.json(pacientes);
  } catch (error) {
    console.error('Erro ao buscar pacientes:', error);
    res.status(500).json({ error: 'Erro ao buscar pacientes' });
  }
});

app.get('/pacientes/:id', async (req, res) => {
  try {
    // Conectar ao banco de dados MongoDB
    const client = await MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true });
    const db = client.db('mestrado'); // Substitua "nome-do-banco" pelo nome do seu banco de dados
    const pacientesCollection = db.collection('pacientes'); // Substitua "pacientes" pelo nome da sua coleção de pacientes
    const sessionsCollection = db.collection('sessions'); // Substitua "sessions" pelo nome da sua coleção de sessions

    const pacienteId = req.params.id;
    console.log(pacienteId)

    // Buscar o paciente pelo _id
    const paciente = await pacientesCollection.findOne({ _id: new ObjectId(pacienteId) });

    console.log(paciente)
    if (!paciente) {
      res.status(404).json({ error: 'Paciente não encontrado' });
      return;
    }

    const sessionIds = paciente.sessions;

    // Buscar as sessions pelo ID
    const sessions = await sessionsCollection.find({ _id: { $in: sessionIds } }).toArray();

    // Adicionar as sessions ao paciente
    paciente.sessions = sessions;

    // Fechar a conexão com o banco de dados
    client.close();

    // Retornar o paciente encontrado com as sessions
    res.json(paciente);
  } catch (error) {
    console.error('Erro ao buscar paciente:', error);
    res.status(500).json({ error: 'Erro ao buscar paciente' });
  }
});



app.get('/clinicas', async (req, res) => {
  try {
    // Conectar ao banco de dados MongoDB
    const client = await MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true });
    const db = client.db('mestrado'); // Substitua "nome-do-banco" pelo nome do seu banco de dados
    const collection = db.collection('pacientes'); // Substitua "patients" pelo nome da sua coleção de pacientes

    // Buscar todos os pacientes
    const clinicas = await collection.aggregate([
      { $group: { _id: "$clinic" } },
      { $project: { _id: 0, clinica: "$_id" } }
    ]).toArray();

    console.log('Valores únicos de "clinica":', clinicas);
    // Fechar a conexão com o banco de dados
    client.close();
    res.json(clinicas)
  } catch (error) {
    console.error('Erro ao buscar clinicas:', error);
    res.status(500).json({ error: 'Erro ao buscar clinicas' });
  }
});

app.post('/atualizar-paciente', async (req, res) => {
  const paciente = req.body;

  // Verificar se existem sessões no paciente
  if (!paciente.sessions || paciente.sessions.length === 0) {
    console.log('Nenhuma sessão enviada');
    res.status(400).send('Nenhuma sessão enviada');
    return;
  }

  try {
    const client = await MongoClient.connect('mongodb://localhost:27017');
    console.log('Conexão com o MongoDB estabelecida');

    const db = client.db('mestrado');
    const pacientesCollection = db.collection('pacientes'); // Substitua "pacientes" pelo nome da sua coleção de pacientes

    // Fazer uma cópia do objeto paciente
    const pacienteId = new ObjectId(paciente._id);

    const pacienteCopy = Object.assign({}, paciente);
    console.log(paciente)

    // Remover o campo "sessions" da cópia do paciente
    delete pacienteCopy.sessions;
    delete pacienteCopy._id;

    console.log(pacienteCopy)

    // Atualizar o paciente na coleção "pacientes"
    const teste = await pacientesCollection.updateOne(
      { _id: pacienteId }, // Use a propriedade "_id" para identificar o paciente a ser atualizado
      { $set: pacienteCopy } // Defina os campos atualizados do paciente
    );
      console.log(teste)
    // Criar um array com as IDs das sessões
    const sessionIds = [];
    
    // Para cada sessão do paciente, armazenar em uma coleção separada
    const sessionsCollection = db.collection('sessions');
    
    for (const session of paciente.sessions) {
      console.log(session._id);
      if (session._id == null) session._id = new ObjectId(); // Gera um novo ObjectId único
      session.pacienteId = pacienteId;
      
      try {
        const sessionResult = await sessionsCollection.insertOne(session, { ordered: false });
        const sessionId = sessionResult.insertedId;
        sessionIds.push(sessionId);
      } catch (error) {
        if (error.code === 11000) {
          // Ignora o erro de chave duplicada e continua o loop
          sessionIds.push(session._id);
        } else {
          // Outro erro ocorreu, faça o tratamento adequado
          console.error('Erro ao inserir sessão:', error);
        }
      }
    }
    
    // Atualizar o paciente com as IDs das sessões
    const teste2 = await pacientesCollection.updateOne(
      { _id: pacienteId },
      { $set: { sessions: sessionIds } }
    );
    console.log(teste2);
    

    console.log('Paciente atualizado com sucesso:', paciente._id);
    res.status(200).send('Paciente atualizado com sucesso');

    client.close();
    console.log('Conexão com o MongoDB fechada');
  } catch (err) {
    console.log('Erro ao conectar ou atualizar o paciente:', err);
    res.status(500).send('Erro ao conectar ou atualizar o paciente');
  }
});

app.delete('/deletar-paciente/:id', async (req, res) => {
  const pacienteId = req.params.id;

  try {
    const client = await MongoClient.connect('mongodb://localhost:27017');
    console.log('Conexão com o MongoDB estabelecida');

    const db = client.db('mestrado');
    const pacientesCollection = db.collection('pacientes'); // Substitua "pacientes" pelo nome da sua coleção de pacientes
    const sessionsCollection = db.collection('sessions'); // Substitua "sessions" pelo nome da sua coleção de sessões

    // Converter a ID do paciente para ObjectId
    const pacienteObjectId = new ObjectId(pacienteId);

    // Remover o paciente da coleção
    const deleteResult = await pacientesCollection.deleteOne({ _id: pacienteObjectId });

    // Verificar se o paciente foi removido com sucesso
    if (deleteResult.deletedCount === 1) {
      // Remover as sessões relacionadas ao paciente
      const deleteSessionsResult = await sessionsCollection.deleteMany({ pacienteId: pacienteObjectId });

      console.log('Paciente removido com sucesso:', pacienteId);
      console.log('Sessões removidas:', deleteSessionsResult.deletedCount);
      res.status(200).send('Paciente removido com sucesso');
    } else {
      console.log('Paciente não encontrado:', pacienteId);
      res.status(404).send('Paciente não encontrado');
    }

    client.close();
    console.log('Conexão com o MongoDB fechada');
  } catch (err) {
    console.log('Erro ao conectar ou remover o paciente:', err);
    res.status(500).send('Erro ao conectar ou remover o paciente');
  }
});


app.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}`);
});