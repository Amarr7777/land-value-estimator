from flask import Flask, request, jsonify

# Create Flask app
app = Flask(__name__)

# Example function to predict value (replace this with your prediction function)
def predict_value(survey_number, fair_value, land_type):
    # Here, you would use your trained machine learning model to predict the value
    # Replace this with your actual prediction logic
    predicted_value = 10000  # Placeholder value
    return predicted_value

# Define a route to handle incoming requests
@app.route('/predict', methods=['POST'])
def predict():
    # Get input parameters from request
    data = request.json
    survey_number = data.get('survey_number')
    fair_value = data.get('fair_value')
    land_type = data.get('land_type')
    
    # Check if any parameter is missing
    if survey_number is None or fair_value is None or land_type is None:
        return jsonify({'error': 'One or more parameters missing'}), 400
    
    # Call the prediction function
    predicted_value = predict_value(survey_number, fair_value, land_type)
    
    # Return the predicted value
    return jsonify({'predicted_value': predicted_value})

def predict_value:
    # Define the decoding method
    def decode_land_type(land_type):
        if land_type in ['\tResidential Plot with Corp./Mun./Panch. road access',
                        'Residential Plot with Corp./Mun./Panch. road access']:
            return 'Residential Plot with Corp./Mun./Panch. road access'
        elif land_type in ['Residential Plot without vehicular access\t',
                        '\tResidential Plot without vehicular access']:
            return 'Residential Plot without vehicular access'
        elif land_type in ['\tWet land', 'Wet land\t', 'Wet Land']:
            return 'Wet land'
        elif land_type == 'Garden Land without road access\t':
            return 'Garden Land without road access'
        elif land_type == '\tResidential Plot with NH/PWD road access':
            return 'Residential Plot with NH/PWD road access'
        elif land_type == '\tCommercially important Plot':
            return 'Commercially important Plot'
        elif land_type == '\tWater logged land':
            return 'Water logged land'
        else:
            return land_type

    # Decode land type
    land_type = decode_land_type(land_type)

    # Create DataFrame for user input
    user_input = pd.DataFrame({
        'survey_number': [survey_number],
        'land_type': [land_type],
        'fair_value': [fair_value],
    })

    # Perform the conversion to encode categorical data
    user_input = pd.get_dummies(user_input, columns=["land_type"])

    # Ensure that user input DataFrame has the same columns as the training data
    missing_cols = set(x.columns) - set(user_input.columns)
    for col in missing_cols:
        user_input[col] = 0

    user_input = user_input[x.columns]

    # Make prediction using the model
    predicted_market_value = loaded_model.predict(user_input)
    return (predicted_market_value[0])


if __name__ == '__main__':
    # Run the Flask app
    app.run(debug=True)
