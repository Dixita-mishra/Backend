#!/usr/bin/env bash

mkdir -p pdfs images texts wordDocs

for file in *; do
    if[-f "$file"] || continue
 
    case "$file" in 
    *.pdf)
    mv -- "$file" pdfs/
    ;;
    *.jpg|*.png)
    mv -- "$file" images/
    ;;
    *.txt)
    mv -- "$file" texts/
    ;;
    *.doc)
    mv -- "$file" wordDocs/
    ;;
    esac
done