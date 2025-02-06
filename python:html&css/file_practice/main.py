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
            text = file.read().split()

        with open(keywords_file, 'r') as file:
            keywords = file.read().split()

        for word in text:
            for keyword in keywords:
                if word == keyword:
                    text = text.replace(word, replacement_symbol * len(keywords))

        with open(text_file, 'w') as file:
            file.write(text)

    except FileNotFoundError:
        print("File not found!")

replace_keywords_in_text("../python/file/text-1.txt", "../python/file/key_words.txt", input_symbol())

