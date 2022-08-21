from flask import Flask, request, jsonify
from flask_cors import CORS,  cross_origin

app = Flask(__name__)
CORS(app)


@app.route('/members')
def members():
    return {"members": ["prompt1", "prompt2", "prompt3"]}

@app.route('/generate', methods=['GET', 'POST'])
@cross_origin(origin="*")
def generate():
    category = request.data.decode('utf-8')
    print(category)
    return {"text": [category]}

if __name__ == '__main__':
    app.run(debug=True)
