* { box-sizing: border-box; }

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  background: #f4f6fb;
  color: #222;
}

.top {
  background: #fff;
  padding: 20px;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}

.top h1 {
  margin: 0;
  color: #1a237e;
}

.tagline {
  margin: 4px 0 10px;
  font-weight: bold;
  opacity: 0.7;
}

.overall {
  max-width: 420px;
  margin: 10px auto 14px;
}

.overall-text {
  font-weight: bold;
  margin-bottom: 6px;
}

.overall-bar {
  width: 100%;
  height: 10px;
  background: #ddd;
  border-radius: 6px;
  overflow: hidden;
}

#overallFill {
  height: 100%;
  width: 0%;
  background: #43a047;
}

.cta {
  display: inline-block;
  padding: 10px 16px;
  background: #1a237e;
  color: #fff;
  text-decoration: none;
  border-radius: 6px;
  font-weight: bold;
}

.container {
  max-width: 900px;
  margin: 20px auto;
  padding: 0 12px;
}

.card {
  background: #fff;
  margin-bottom: 16px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
}

.card-header {
  padding: 16px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  font-weight: bold;
}

.percent {
  color: #1a237e;
}

.card-body {
  padding: 0 16px 16px;
  display: none;
}

label {
  display: block;
  margin: 8px 0;
}

footer {
  text-align: center;
  padding: 16px;
  opacity: 0.6;
}
