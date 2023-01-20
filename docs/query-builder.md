# QueryBuilder

## Sample code

### insert query

```ts
const querystring = 'INSERT INTO users(id, display_name) VALUES($1, $2) RETURNING *';
const params = [1, 'kaye'];
await pool.query(querystring, params);
```

```ts
const querystring = {
  text: 'INSERT INTO users(id, display_name) VALUES($1, $2)',
  values: [5, 'ccc'],
};
await pool.query(querystring);
```
