<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Community Health & Primary Care</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #008080;
        }
        .container {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            background-color: #fff;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        h1 {
            text-align: center;
            color: #333;
        }
        p {
            color: #666;
        }
        .button {
            display: inline-block;
            padding: 10px 20px;
            background-color: #4CAF50;
            color: white;
            text-align: center;
            text-decoration: none;
            font-size: 16px;
            cursor: pointer;
            border-radius: 5px;
            margin: 10px;
            transition: background-color 0.3s ease;
        }
        .button:hover {
            background-color: #45a049;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Welcome to Community Health & Primary Care</h1>
        <p>This platform connects you with healthcare professionals in your community for primary health care services.</p>
        <p>Please select an action:</p>
        <div>
        <a href="https://www.example.com">
  <button>Click me</button>
</a>
            <a href="#" class="button" onclick="findProviders()">Find Healthcare Providers</a>
            <a href="#" class="button" onclick="scheduleAppointment()">Schedule an Appointment</a>
            <a href="#" class="button" onclick="viewRecords()">View Health Records</a>
        </div>
        <!-- Additional HTML elements and functionality can be added as needed -->
    </div>

    <script>
        function findProviders() {
            alert('Finding healthcare providers...');
        }

        function scheduleAppointment() {
            alert('Scheduling an appointment...');
        }

        function viewRecords() {
            alert('Viewing health records...');
        }
    </script>
</body>
</html>
