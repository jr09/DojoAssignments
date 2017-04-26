from flask import Flask, redirect, render_template, request, session, flash

app=Flask(__name__)
app.secret_key = 'blaaaaah'

@app.route('/')
def index_page():
    return render_template('index.html')



@app.route('/result', methods=['POST'])
def show_result():
    if len(request.form['first_name']) < 1:
        flash("Name cannot be empty")
        return redirect('/')
    if len(request.form['comments']) > 120:
        flash("Comment cannot be greater than 120 characters")
        return redirect('/')
    return render_template('result.html', user_obj=request.form)


app.run(debug='true')
