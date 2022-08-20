from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route('/members')
def members():
    return {"members": ["prompt1", "prompt2", "prompt3"]}


if __name__ == '__main__':
    app.run(debug=True)
