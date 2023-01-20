# Kaye API

## Setup

## Commands

### Docker

start app

```zsh
docker-compose up -d
```

access to container

```zsh
docker exec -it kaye_api /bin/bash
docker exec -it kaye_db /bin/bash
docker exec -it kaye_db_test /bin/bash
```

### DB migration

```zsh
# generate migration file
npm run migrate:create

# redo migration
npm run migrate:red

# migrate to file
npm run migrate:dev
npm run migrate:prod
```

## FYI

- [express 入門](https://www.wakuwakubank.com/posts/632-nodejs-express-overview/#index_id2)
