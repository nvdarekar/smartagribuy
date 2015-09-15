from flask import Flask, render_template, Response
import json
import MySQLdb

app = Flask(__name__)
@app.route("/", methods = ["GET", "POST"])
def index():
	return render_template("index.html")

@app.route("/register", methods = ["GET", "POST"])
def register():
	pass

@app.route("/pesticides", methods =["GET"])
def pesticides():
	db = MySQLdb.connect(host="localhost", 
                    user="root",
                    passwd="", 
                    db="smartagribuy") 
	cur = db.cursor() 
	cur.execute("SELECT * FROM pesticides")
	rows = cur.fetchall()
	print rows
	columns = [desc[0] for desc in cur.description]
	result = []
	for row in rows:
   		row = dict(zip(columns, row))
   		result.append(row)
	return Response(json.dumps(result),  mimetype='application/json')
			
if __name__ == "__main__":
	app.run(debug=True)
	


