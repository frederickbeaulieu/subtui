set quiet 

_default: 
  just --list --unsorted

init:
  bun install

start:
  bun index.tsx

check:
  bunx --bun @biomejs/biome check --write
