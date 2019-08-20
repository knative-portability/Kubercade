CREATE SCHEMA IF NOT EXISTS kubercade;

CREATE TABLE IF NOT EXISTS kubercade.high_score_table (
  game_index  integer,
  name        varchar(80) NOT NULL,
  score       integer NOT NULL,
  datetime    timestamptz NOT NULL
);

CREATE TABLE IF NOT EXISTS kubercade.chat_table (
  game_index  integer,
  name        varchar(80) NOT NULL,
  message     varchar(400) NOT NULL,
  datetime    timestamptz NOT NULL
);
