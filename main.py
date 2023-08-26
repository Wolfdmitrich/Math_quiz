try:
    import eel
except ImportError:
    from os import system
    print(">>> Не удалось импортировать модули. Устанавливаю.")
    system("pip install -r requirements.txt")
    import eel
    system("cls")


def main():
    eel.init("web")  # Path to the folder with your HTML file
    eel.start("index.html", size=(450, 500))  # Launch Eel


if __name__ == "__main__":
    main()
