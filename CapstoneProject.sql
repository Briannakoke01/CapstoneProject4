CREATE TABLE memes (
    id SERIAL PRIMARY KEY,
    image_url VARCHAR(255) NOT NULL,
    top_text VARCHAR(255),
    bottom_text VARCHAR(255)
);
