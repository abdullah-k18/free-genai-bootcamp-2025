import streamlit as st
import os
import json
from dotenv import load_dotenv
from groq import Groq

load_dotenv()
GROQ_API_KEY = os.getenv("GROQ_API_KEY")

client = Groq(api_key=GROQ_API_KEY)

st.title("✍️ Writing Practice")

english_word = st.text_input("Enter an English word for practice:")

if "translation" not in st.session_state:
    st.session_state.translation = None
if "user_input_checked" not in st.session_state:
    st.session_state.user_input_checked = False

if english_word and not st.session_state.translation:
    with st.spinner("Fetching translation..."):
        prompt = f"""Give me the Urdu translation and Romanji (how it's pronounced) of this English word in the following JSON format:
{{
  "word": "{english_word}",
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

        try:
            result = json.loads(response.choices[0].message.content.strip())
            st.session_state.translation = result
        except json.JSONDecodeError:
            st.error("Failed to parse model response.")
            st.code(response.choices[0].message.content.strip())

if st.session_state.translation:
    romanji = st.session_state.translation["romanji"]
    actual_urdu = st.session_state.translation["urdu"]

    st.markdown(f"**Romanji (Pronunciation):** `{romanji}`")

    user_urdu = st.text_input("Now write the Urdu translation:")

    if st.button("Check"):
        st.session_state.user_input_checked = True

    if st.session_state.user_input_checked:
        if user_urdu.strip() == actual_urdu.strip():
            st.success("✅ Correct!")
        else:
            st.error("❌ Incorrect!")
            st.markdown(f"**Correct Urdu:** `{actual_urdu}`")

    if st.button("Try another word"):
        st.session_state.translation = None
        st.session_state.user_input_checked = False
        st.rerun()
