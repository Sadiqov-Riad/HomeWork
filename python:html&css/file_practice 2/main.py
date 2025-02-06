def input_symbol():
    while True:
        symbol = input("Enter symbol: ").strip()
        if len(symbol) > 1 or len(symbol) < 1:
            continue
        else:
            return symbol


def replace_keywords_in_text(text_file, keywords_file, replacement_symbol):
    try:
        with open(text_file, 'r') as file:
            text = file.read()
            copied_text = text.lower()

        with open(keywords_file, 'r') as file:
            keywords = file.read().split()

        for keyword in keywords:
                copied_text = copied_text.replace(keyword, replacement_symbol * len(keyword))

        with open(text_file, 'w') as file:
            file.write(copied_text)

    except FileNotFoundError:
        print("File not found!")

replace_keywords_in_text("text-1.txt", "key_words.txt", input_symbol())
