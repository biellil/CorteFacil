-- Verifica se a tabela 'usuarios' já existe
DO $$ BEGIN
    IF NOT EXISTS (SELECT 1 FROM information_schema.tables WHERE table_schema='public' AND table_name='usuarios') THEN
        CREATE TABLE usuarios (
            id SERIAL PRIMARY KEY,
            nome VARCHAR(255) NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            telefone VARCHAR(20) UNIQUE NOT NULL,
            senha VARCHAR(255) NOT NULL,
            tipo VARCHAR(50) NOT NULL,
            data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
    ELSE
        RAISE NOTICE 'A tabela "usuarios" já existe, pulando a criação.';
    END IF;
END $$;

-- Verifica se a tabela 'servicos' já existe
DO $$ BEGIN
    IF NOT EXISTS (SELECT 1 FROM information_schema.tables WHERE table_schema='public' AND table_name='servicos') THEN
        CREATE TABLE servicos (
            id SERIAL PRIMARY KEY,
            nome VARCHAR(255) NOT NULL,
            descricao TEXT,
            duracao INTEGER NOT NULL,
            preco DECIMAL(10, 2) NOT NULL
        );
    ELSE
        RAISE NOTICE 'A tabela "servicos" já existe, pulando a criação.';
    END IF;
END $$;

-- Verifica se a tabela 'agendamentos' já existe
DO $$ BEGIN
    IF NOT EXISTS (SELECT 1 FROM information_schema.tables WHERE table_schema='public' AND table_name='agendamentos') THEN
        CREATE TABLE agendamentos (
            id SERIAL PRIMARY KEY,
            id_usuario INTEGER REFERENCES usuarios(id),
            id_servico INTEGER REFERENCES servicos(id),
            data_hora TIMESTAMP NOT NULL,
            status VARCHAR(50) NOT NULL,
            id_barbeiro INTEGER REFERENCES usuarios(id)
        );
    ELSE
        RAISE NOTICE 'A tabela "agendamentos" já existe, pulando a criação.';
    END IF;
END $$;

-- Verifica se a tabela 'notificacoes' já existe
DO $$ BEGIN
    IF NOT EXISTS (SELECT 1 FROM information_schema.tables WHERE table_schema='public' AND table_name='notificacoes') THEN
        CREATE TABLE notificacoes (
            id SERIAL PRIMARY KEY,
            id_usuario INTEGER REFERENCES usuarios(id),
            mensagem TEXT NOT NULL,
            status VARCHAR(50) NOT NULL,
            data_hora TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
    ELSE
        RAISE NOTICE 'A tabela "notificacoes" já existe, pulando a criação.';
    END IF;
END $$;
