from flask import Flask, jsonify

app = Flask(__name__)

@app.route("/api")
def home():
    return jsonify({"message": "Hello from Flask backend!"})

if __name__ == "__main__":
    app.run(host="127.0.0.1", port=5000)
