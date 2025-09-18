# Personnel Management System

A modern React-based personnel management application built with Ant Design components. This system provides a complete CRUD interface for managing employee records including personal information and departmental assignments.

## 🚀 Features

- **Personnel Management**: Add, edit, delete, and view employee records
- **Intuitive UI**: Clean and responsive interface built with Ant Design
- **Form Validation**: Client-side validation for all input fields
- **Modal Dialogs**: Smooth user experience with modal forms
- **Real-time Updates**: Automatic data refresh after operations
- **Department Organization**: Track employee department assignments

## 🛠️ Tech Stack

- **Frontend**: React.js
- **UI Framework**: Ant Design (antd)
- **HTTP Client**: Axios
- **Routing**: React Router DOM
- **Icons**: Ant Design Icons

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- Node.js (version 14 or higher)
- npm or yarn package manager

## 🔧 Installation

1. Clone the repository:
```bash
git clone https://github.com/yanqianyu/personnel-management.git
cd personnel-management
```

2. Install dependencies:
```bash
npm install
```

3. Configure API endpoint:
   - Update the `API_URL` in `src/api/personnel.js` to point to your backend server
   - Current placeholder: `https://api.example.com/personnel`

## 🚀 Usage

### Development

Start the development server:
```bash
npm start
```

The application will be available at `http://localhost:3000`

### Production

Build the application for production:
```bash
npm run build
```

## 📁 Project Structure

```
src/
├── api/
│   └── personnel.js          # API service functions
├── components/
│   └── PersonnelForm.js      # Reusable form component
├── pages/
│   └── PersonnelManagementPage.js  # Main personnel management page
└── App.js                    # Application root component
```

## 🔌 API Integration

The application expects a REST API with the following endpoints:

- `GET /personnel` - Fetch all personnel records
- `POST /personnel` - Create a new personnel record
- `PUT /personnel/:id` - Update an existing personnel record
- `DELETE /personnel/:id` - Delete a personnel record

### Expected Data Format

Personnel records should have the following structure:
```json
{
  "id": "unique_identifier",
  "name": "Employee Name",
  "age": "Employee Age",
  "department": "Department Name"
}
```

## 🎯 Key Components

### PersonnelForm
A reusable form component with validation for creating and editing personnel records.

### PersonnelManagementPage
The main page component that handles:
- Displaying personnel data in a table
- Add/Edit/Delete operations
- Modal management for forms
- Error handling and user feedback

### API Service
Centralized API communication with error handling for all CRUD operations.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 🐛 Known Issues

- API endpoint is currently set to a placeholder URL
- No authentication mechanism implemented
- Limited error handling for network failures

## 🔮 Future Enhancements

- User authentication and authorization
- Advanced search and filtering capabilities
- Export functionality (CSV, PDF)
- Bulk operations
- Employee photo uploads
- Department hierarchy management
