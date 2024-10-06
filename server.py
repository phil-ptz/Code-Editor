from flask import Flask, request, send_from_directory, jsonify
from flask_cors import CORS
import io
import sys

app = Flask(__name__, static_folder='react app/dist', static_url_path='/')
CORS(app)

@app.route('/')
def index():
    return app.send_static_file("index.html")

@app.route('/api/save_code', methods=['POST'])
def save_code():
    data = request.get_json()
    code = data.get('code')

    # Output einfangen und umleiten
    output_capture = io.StringIO()
    sys.stdout = output_capture

    try:
        # Code ausführen
        exec(code)
    except Exception as e:
        # Bei Fehlern diese ebenfalls als Ausgabe zurückgeben
        output_capture.write(str(e))

    # Output speichern
    output = output_capture.getvalue()

    # Standard wiederherstellen
    sys.stdout = sys.__stdout__

    # Gebe den Output als JSON zurück
    return jsonify({'message': output}), 200

if __name__ == '__main__':
    app.run(debug=False)