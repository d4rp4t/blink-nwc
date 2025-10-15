generate-gql-types:
	yarn generate-gql-types

generate-supergraph:
	yarn generate-supergraph

check-code:
	yarn tsc-check
	yarn eslint-check
	yarn build
	yarn check-sdl

# 16 is exit code for critical https://classic.yarnpkg.com/lang/en/docs/cli/audit
audit:
	bash -c 'yarn audit --level critical; [[ $$? -ge 16 ]] && exit 1 || exit 0'

clean-deps:
	docker compose -p nostr-wallet-connect -f vendor/blink-quickstart/docker-compose.yml -f docker-compose.yml -f docker-compose.override.yml down -t 3

reset-deps: clean-deps start-supergraph

start-deps: start-supergraph

start-supergraph:
	docker compose -p nostr-wallet-connect \
		-f vendor/blink-quickstart/docker-compose.yml -f docker-compose.yml \
		-f docker-compose.override.yml up -d

start-subgraph:
	yarn dev

start: start-supergraph
	make start-subgraph

update-vendor:
	vendir sync
