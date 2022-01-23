-- Ex 1. In PostgreSQL, create a table nytimes_bestsellers and insert nyt_bestsellers.json.
CREATE TABLE nytimes_bestsellers
(
	books JSON
);
COPY nytimes_bestsellers FROM '/Users/dwoodbridge/Class/2022_MSDS697/Data/nyt_bestsellers.json';

SELECT * FROM nytimes_bestsellers;

SELECT books->>'author', books ->>'title', books -> 'price'
FROM nytimes_bestsellers;

-- Create nytimes_bestsellers_tabular using author, title and price only.
DROP TABLE IF EXISTS nytimes_bestsellers_tabular;
CREATE TABLE nytimes_bestsellers_tabular AS
SELECT books->>'author' AS author, books ->>'title' AS title, COALESCE(books -> 'price' ->> '$numberDouble', books->'price'->>'$numberInt') AS price
FROM nytimes_bestsellers;

SELECT * FROM nytimes_bestsellers_tabular;
