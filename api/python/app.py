from chalice import Chalice
from chalicelib import db

app = Chalice(app_name='duckpin')
app.debug = True
_DB = None


def get_app_db():
    global _DB
    if _DB is None:
        _DB = InMemoryTaskDB()
    return _DB


@app.route('/tasks', methods=['GET'])
def get_tasks():
    return get_app_db().list_items()


@app.route('/tasks', methods=['POST'])
def add_new_task():
    body = app.current_request.json_body
    return get_app_db().add_item(
        description=body['description'],
        metadata=body.get('metadata'),
    )


@app.route('/tasks/{uid}', methods=['GET'])
def get_task(uid):
    return get_app_db().get_item(uid)

# Testing routes


@app.route('/tasks/{uid}', methods=['DELETE'])
def delete_task(uid):
    return get_app_db().delete_item(uid)


@app.route('/tasks/{uid}', methods=['PUT'])
def update_task(uid):
    body = app.current_request.json_body
    get_app_db().update_item(
        uid,
        description=body.get('description'),
        state=body.get('state'),
        metadata=body.get('metadata')
    )

# Diagnotsic routes


@app.route('/introspect')
def introspect():
    return app.current_request.to_dict()
