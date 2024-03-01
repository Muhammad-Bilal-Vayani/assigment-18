const fs = require('fs');

// File path
const filePath = 'data.txt';

// Create Operation
const createData = (data) => {
  fs.writeFileSync(filePath, JSON.stringify(data));
  console.log('Data created successfully!');
};

// Read Operation
const readData = () => {
  try {
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading data:', error.message);
    return null;
  }
};

// Update Operation
const updateData = (updatedData) => {
  try {
    const existingData = readData();
    if (existingData) {
      const newData = { ...existingData, ...updatedData };
      fs.writeFileSync(filePath, JSON.stringify(newData));
      console.log('Data updated successfully!');
    }
  } catch (error) {
    console.error('Error updating data:', error.message);
  }
};

// Delete Operation
const deleteData = () => {
  try {
    fs.unlinkSync(filePath);
    console.log('Data deleted successfully!');
  } catch (error) {
    console.error('Error deleting data:', error.message);
  }
};

// Example usage
const initialData = { name: 'Bilal', age: 15, city: 'Pakistan' };

// Create
createData(initialData);

// Read
const retrievedData = readData();
console.log('Retrieved Data:', retrievedData);

// Update
const updatedInfo = { age: 16, city: 'Pakistan' };
updateData(updatedInfo);

// Read after update
const updatedData = readData();
console.log('Updated Data:', updatedData);

// Delete
deleteData();

// Read after delete
const afterDeleteData = readData();
console.log('Data after deletion:', afterDeleteData);
