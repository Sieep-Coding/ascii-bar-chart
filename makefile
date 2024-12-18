NODE = node
NPM = npm

SRC_DIR = src
TEST_DIR = tests

TEST_CMD = $(NPM) test

.PHONY: all
all: install test start

.PHONY: install
install:
	$(NPM) install

.PHONY: test
test:
	$(TEST_CMD)

.PHONY: start
start:
	$(NODE) --loader ts-$(NODE)/esm $(SRC_DIR)/index.ts --data 

.PHONY: clean
clean:
	rm -rf node_modules

.PHONY: build
build:
	# Example build command (e.g., bundling with Webpack)
	$(NPM) run build
