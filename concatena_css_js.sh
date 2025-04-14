#!/bin/bash

# Usa la cartella corrente come punto di partenza
DIRECTORY=$(pwd)

# Nome base dei file di output
OUTPUT_BASE="output"
OUTPUT_FILE="${OUTPUT_BASE}1.txt"
LINE_LIMIT=3000
CURRENT_LINES=0
FILE_INDEX=1

# Pulisci il primo file di output
> "$OUTPUT_FILE"

# Trova tutti i file .css e .js, escludendo le cartelle public e node_modules
find "$DIRECTORY" \( -path "*/public/*" -o -path "*/node_modules/*" \) -prune -o -type f \( -iname "*.css" -o -iname "*.js" \) -print | while IFS= read -r file; do
    # Calcola il percorso relativo rispetto alla cartella corrente
    RELATIVE_PATH="${file#$DIRECTORY/}"

    # Leggi il contenuto del file
    CONTENT=$(cat "$file")
    FILE_LINES=$(echo "$CONTENT" | wc -l)
    HEADER="=== Inizio di $RELATIVE_PATH ==="

    # Calcola quante righe saranno aggiunte (contenuto + header + spazi)
    TOTAL_NEW_LINES=$((FILE_LINES + 3))

    # Se si supera il limite, crea un nuovo file
    if [ $((CURRENT_LINES + TOTAL_NEW_LINES)) -gt $LINE_LIMIT ]; then
        FILE_INDEX=$((FILE_INDEX + 1))
        OUTPUT_FILE="${OUTPUT_BASE}${FILE_INDEX}.txt"
        > "$OUTPUT_FILE"
        CURRENT_LINES=0
    fi

    # Scrivi nel file corrente
    echo "$HEADER" >> "$OUTPUT_FILE"
    echo "$CONTENT" >> "$OUTPUT_FILE"
    echo -e "\n\n" >> "$OUTPUT_FILE"

    CURRENT_LINES=$((CURRENT_LINES + TOTAL_NEW_LINES))
done

echo "Output completato in ${OUTPUT_BASE}*.txt"
