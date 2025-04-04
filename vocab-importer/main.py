import streamlit as st
import os
import json
from dotenv import load_dotenv
from groq import Groq

# Load environment variables
load_dotenv()
GROQ_API_KEY = os.getenv("GROQ_API_KEY")

# Initialize Groq client
client = Groq(api_key=GROQ_API_KEY)

# File where vocab entries will be stored
VOCAB_FILE = "vocabulary.json"

# Ensure the file exists
if not os.path.exists(VOCAB_FILE):
    with open(VOCAB_FILE, "w") as f:
        json.dump([], f)

# Streamlit UI
st.title("🧠 Vocabulary Importer")

# Input field for the word
word = st.text_input("Enter an English word:")

# If user presses Enter
if word:
    with st.spinner("Generating translation..."):
        prompt = f"""Give me the Urdu translation and Romanji (how it's pronounced) of this English word in the following JSON format:
{{
  "word": "{word}",
  "urdu": "...",
  "romanji": "..."
}}"""

        response = client.chat.completions.create(
            model="llama-3.3-70b-versatile",
            messages=[
                {"role": "system", "content": "You are a helpful translation assistant."},
                {"role": "user", "content": prompt}
            ],
            temperature=0.3,
            response_format={"type": "json_object"}
        )

        result_text = response.choices[0].message.content.strip()

        try:
            vocab_json = json.loads(result_text)
        except json.JSONDecodeError:
            st.error("Model response was not valid JSON.")
            st.code(result_text)
        else:
            # Display JSON result
            st.subheader("📝 Generated Vocabulary Entry")
            st.json(vocab_json)

            # Append to vocabulary.json
            with open(VOCAB_FILE, "r+") as f:
                data = json.load(f)
                data.append(vocab_json)
                f.seek(0)
                json.dump(data, f, indent=2)
                f.truncate()
