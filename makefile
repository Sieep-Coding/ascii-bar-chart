# Makefile for managing the project

# Define the node and npm commands
NODE = node
NPM = npm

# Define the paths to the source and test directories
SRC_DIR = src
TEST_DIR = tests

# Define the test command
TEST_CMD = $(NPM) test

# Define default target
.PHONY: all
all: install test start

# Install dependencies
.PHONY: install
install:
	$(NPM) install

# Run tests
.PHONY: test
test:
	$(TEST_CMD)

# Run the application
.PHONY: start
start:
	$(NODE) --loader ts-$(NODE)/esm $(SRC_DIR)/index.ts --data 

# Clean up node_modules
.PHONY: clean
clean:
	rm -rf node_modules

# Build the project (if applicable, add build steps here)
.PHONY: build
build:
	# Example build command (e.g., bundling with Webpack)
	$(NPM) run build
