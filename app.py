from flask import (
    Flask,
    render_template,
    jsonify,
)

app = Flask(__name__)
app.config['JSON_AS_ASCII'] = False


def basic_data():
    data = {
        'app_name': 'react-router-redux-sample',
    }
    return data


@app.route('/')
def root():
    return render_template('root.html', data=basic_data())


@app.route('/report')
def report():
    return render_template('root.html', data=basic_data())


@app.route('/api/todos', methods=['GET'])
def todos():
    app.logger.debug('has access.')
    todos = [
        {
            'id': 1,
            'name': 'foo',
            'desc': 'do foo',
            'is_finished': True,
        },
        {
            'id': 2,
            'name': 'bar',
            'desc': 'do bar',
            'is_finished': False,
        },
        {
            'id': 3,
            'name': 'baz',
            'desc': 'do baz',
            'is_finished': False,
        },
    ]
    return jsonify(todos)
