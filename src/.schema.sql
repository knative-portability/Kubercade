CREATE SCHEMA IF NOT EXIST kubercade AUTHORIZATION jxzxrgmv

  CREATE TABLE IF NOT EXISTS kubercade.high_score_table (
    game_index  integer,
    name        varchar(80),
    score       integer NOT NULL,
    datetime    varchar(40) NOT NULL
  );

  CREATE TABLE IF NOT EXISTS kubercade.chat_table (
    game_index  integer,
    name        varchar(80),
    message     varchar(400) NOT NULL,
    datetime    varchar(40) NOT NULL
  );
