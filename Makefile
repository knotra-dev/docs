.PHONY: help install dev build lint typecheck test check

help:
	@printf '%s\n' \
	  'make install    Install dependencies from bun.lock' \
	  'make dev        Start the documentation site' \
	  'make build      Export the production site to apps/web/out' \
	  'make lint       Check formatting and code' \
	  'make typecheck  Build and check types' \
	  'make test       Build and check exported links and assets' \
	  'make check      Run lint, build, typecheck, and tests'

install:
	bun install --frozen-lockfile

dev build lint:
	bun run $@

typecheck test: build
	bun run $@

check:
	bun run lint
	bun run build
	bun run typecheck
	bun run test
