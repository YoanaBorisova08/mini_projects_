import requests
import os
from secret import API_KEY

# === Configuration ===
API_URL = "https://api.groq.com/openai/v1/chat/completions"
MODEL = "llama3-8b-8192"
file_history = open("history.txt", "a")


# === Chat Function ===

def get_history():
    if not os.path.exists("history.txt"):
        return "No history found."
    with open("history.txt", "r") as history:
        return history.read()

def get_ai_response(user_input_, user_system_prompt_):
    headers = {
        "Authorization": f"Bearer {API_KEY}",
        "Content-Type": "application/json"
    }

    data = {
        "model": MODEL,
        "messages": [
            {"role": "system", "content": user_system_prompt_},
            {"role": "user", "content": user_input_}
        ],
        "max_tokens": 512
    }

    try:
        response = requests.post(API_URL, headers=headers, json=data)
        response.raise_for_status()
        result = response.json()
        print(result)
        return result["choices"][0]["message"]["content"]
    except Exception as e:
        return f"Error: {e}"


# === Main Chat Loop ===
if __name__ == "__main__":
    print("🤖 Welcome to your Groq-powered AI chatbot! Type 'exit' to quit.")
    user_system_prompt = input("Define the AI's personality: ")
    file_history.write("System: " + user_system_prompt + "\n")
    while True:
        user_input = input("\nYou: ")
        if user_input == "history":
            print(get_history())
        else:
            file_history.write("User: " + user_input + "\n")
            if user_input.lower() in ["exit", "quit"]:
                print("Goodbye! 👋")
                file_history.close()
                break
            reply = get_ai_response(user_input, user_system_prompt)
            print("AI:", reply)
            file_history.write("AI: " + reply + "\n")
