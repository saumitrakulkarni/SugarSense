import sys
import pickle
import pandas as pd

# Read all the input data from standard input
input_data = sys.stdin.readlines()

# Extract the input values from the data
input_values = input_data[0].strip().split(' ')

# Convert the input values to a Pandas dataframe
new_data = pd.DataFrame({
    'HighBP': [int(input_values[0])],
    'HighCholestrol': [int(input_values[1])],
    'BodyMassIndex': [int(input_values[2])],
    'Smoker': [int(input_values[3])],
    'Stroke': [int(input_values[4])],
    'HeartDisease': [int(input_values[5])],
    'PhysicalActivity': [int(input_values[6])],
    'Fruits': [int(input_values[7])],
    'Veggies': [int(input_values[8])],
    'HighAlcohol': [int(input_values[9])],
    'GeneralHealth': [int(input_values[10])],
    'MentalHealth': [int(input_values[11])],
    'PhysicalHealth': [int(input_values[12])],
    'DifficultyWalking': [int(input_values[13])],
    'Sex': [int(input_values[14])],
    'Age': [int(input_values[15])],
    'Income': [int(input_values[16])],
    'Fruits_and_Veggies': [int(input_values[17])]
})

# Load the trained model
with open('diabetes_model.pkl', 'rb') as f:
    model = pickle.load(f)

# Make predictions on new data
prediction = model.predict(new_data)

# Print the prediction
print(prediction[0])
