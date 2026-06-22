"""Extract text from all PDFs in the Sizing Guides folder."""
import os
import fitz  # pymupdf

GUIDES_DIR = "Sizing Guides"
OUTPUT_DIR = "Sizing Guides/_extracted"

os.makedirs(OUTPUT_DIR, exist_ok=True)

count = 0
for root, dirs, files in os.walk(GUIDES_DIR):
    for fname in files:
        if fname.lower().endswith('.pdf'):
            pdf_path = os.path.join(root, fname)
            # Create output filename from relative path
            rel = os.path.relpath(pdf_path, GUIDES_DIR)
            out_name = rel.replace(os.sep, '_').replace('.pdf', '.txt')
            out_path = os.path.join(OUTPUT_DIR, out_name)

            try:
                doc = fitz.open(pdf_path)
                text = ""
                for page in doc:
                    text += page.get_text() + "\n---PAGE BREAK---\n"
                doc.close()

                with open(out_path, 'w', encoding='utf-8') as f:
                    f.write(text)
                print(f"✅ {rel} → {out_name}")
                count += 1
            except Exception as e:
                print(f"❌ {rel}: {e}")

print(f"\nDone. Extracted {count} PDFs to {OUTPUT_DIR}/")
