#!/bin/bash

# Usa la cartella passata come argomento, oppure quella corrente se non specificata
DIRECTORY="${1:-.}"

# Nome base del file di output
OUTPUT_BASE="output_html"
EXT="txt"

# Inizializza contatori
line_count=0
file_count=1
current_output="${OUTPUT_BASE}${file_count}.${EXT}"

# Pulisce il primo file di output
> "$current_output"

# Trova tutti i file .html e .json, escludendo solo la cartella node_modules
find "$DIRECTORY" \( -path "*/node_modules/*" \) -prune -o -type f \( -iname "*.html" -o -iname "*.json" \) -print | while IFS= read -r file; do
    {
        echo "=== Inizio di $file ==="
        cat "$file"
        echo -e "\n\n"
    } | while IFS= read -r line; do
        echo "$line" >> "$current_output"
        ((line_count++))
        if (( line_count >= 3000 )); then
            ((file_count++))
            current_output="${OUTPUT_BASE}${file_count}.${EXT}"
            > "$current_output"
            line_count=0
        fi
    done
done

echo "Contenuto suddiviso in file ${OUTPUT_BASE}*.${EXT}"
