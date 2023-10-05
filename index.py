from flask import Flask, render_template, request, session
app = Flask(__name__)
app.secret_key = "login"
@app.route("/")  
def login():
    return render_template("login.html")
@app.route("/logout")
def logout():
    session.pop("email", None)
    return render_template("login.html")
@app.route("/login", methods = ["POST"])
def login1():
    if request.method == "POST":
        username = request.form["username"]
        password = request.form["password"]
        if (username == "Aryan" and password=="1234"):
            session["email"]= username
            return render_template("Main.html", email = username)
        else:
            msg = "Invalid Username or Password"
            return render_template("login.html", msg = msg)
if __name__ == "__main__":
    app.run(debug=True)
