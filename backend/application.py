import time
import numpy as np
from flask import Flask, request, jsonify, flash
from flask_cors import CORS
import os
from main import Search
from masthead import MastHead
# import asyncio
# from tornado.platform.asyncio import AnyThreadEventLoopPolicy
#
# asyncio.set_event_loop_policy(AnyThreadEventLoopPolicy())


application = Flask(__name__)
CORS(application)


@application.route('/fetch_data', methods=['POST'])
def fetch_data():
    package = request.get_json(force=True)
    key_words = package['text']
    mode = package['mode']
    data = Search(key_words, mode)
    returned = data.search_control()
    return jsonify(output=returned)


@application.route('/fetch_masthead_data', methods=['GET'])
def fetch_masthead_data():
    object = MastHead()
    returned = object.lampoon_search()
    return jsonify(output=returned)
