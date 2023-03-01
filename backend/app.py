
from flask import Flask, send_from_directory
from flask_restful import Api, Resource, reqparse
from .api.testresource import TestResource
import os



def main():
    app = Flask(__name__, static_url_path='', static_folder="frontend/build")
    api = Api(app)
    if os.getenv("MODE") == "DEV":
        from flask_cors import CORS
        CORS(app)
    @app.route("/", defaults={'path':""})
    def serve(path):
        return send_from_directory(app.static_folder, "index.html")
    
    api.add_resource(TestResource, "/api/test")
    app.run(port=5000, debug=os.getenv("MODE") == "DEV")