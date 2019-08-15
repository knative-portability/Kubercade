CREATE SCHEMA kubercade AUTHORIZATION nrhwqomw

  CREATE TABLE high_score_table (
    game_index  integer,
    name        varchar(80),
    score       integer NOT NULL,
    datetime    varchar(40) NOT NULL
  );

  CREATE TABLE chat_table (
    game_index  integer,
    name        varchar(80),
    message     varchar(400) NOT NULL,
    datetime    varchar(40) NOT NULL
  );