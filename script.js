* { box-sizing: border-box; }

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  background: #f3f5f9;
  color: #222;
}

header {
  background: #1a237e;
  color: #fff;
  padding: 24px;
  text-align: center;
}

header p { opacity: 0.9; }

.cta {
  display: inline-block;
  margin-top: 12px;
  padding: 10px 16px;
  background: #ffca28;
  color: #000;
  text-decoration: none;
  border-radius: 6px;
  font-weight: bold;
}

.card {
  background: #fff;
  margin: 16px;
  padding: 16px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.08);
}

label {
  display: block;
  margin: 8px 0;
}

.progress-wrap {
  width: 100%;
  height: 12px;
  background: #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
}

#bar {
  height: 100%;
  width: 0%;
  background: #43a047;
  transition: width 0.3s ease;
}

footer {
  text-align: center;
  padding: 16px;
  opacity: 0.7;
}
