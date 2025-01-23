-- Create the "casinos" table
CREATE TABLE casinos (
    casino_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    location VARCHAR(255) NOT NULL
);

-- Create the "games" table
CREATE TABLE games (
    game_id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    type VARCHAR(100) NOT NULL,
    provider_name VARCHAR(255),
    thumbnail_url VARCHAR(500)
);

-- Create the "countries" table
CREATE TABLE countries (
    country_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

-- Create a junction table for games available in countries
CREATE TABLE game_countries (
    game_id INT NOT NULL,
    country_id INT NOT NULL,
    FOREIGN KEY (game_id) REFERENCES games(game_id),
    FOREIGN KEY (country_id) REFERENCES countries(country_id),
    PRIMARY KEY (game_id, country_id)
);

-- Create the "players" table
CREATE TABLE players (
    player_id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    favorite_game_id INT,
    FOREIGN KEY (favorite_game_id) REFERENCES games(game_id)
);

-- Create the "spins" table
CREATE TABLE spins (
    spin_id SERIAL PRIMARY KEY,
    player_id INT NOT NULL,
    game_id INT NOT NULL,
    spin_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    amount_won_or_lost DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (player_id) REFERENCES players(player_id),
    FOREIGN KEY (game_id) REFERENCES games(game_id)
);
