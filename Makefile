.PHONY: install test clean help

help:
	@echo "Available commands:"
	@echo "  make install  - Install dependencies and Playwright browsers"
	@echo "  make test     - Run tests"
	@echo "  make clean    - Remove report, node_modules, and test results"

install:
	npm install
	npx playwright install

test:
	npm test

clean:
	rm -rf node_modules cucumber-report.html test-results dist
