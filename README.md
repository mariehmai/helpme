# Emergency Services Directory

A comprehensive web application providing instant access to emergency contact numbers and safety guidance for 195+ countries worldwide. Built for travelers, expatriates, and anyone who needs quick access to emergency services across the globe.

## Features

- **Global Emergency Numbers**: Ambulance, police, and fire service contacts for 195+ countries
- **Multi-language Support**: Available in English, French, and Spanish
- **Emergency Response Guide**: Learn when to call each service and what information to provide
- **Fast Search & Filtering**: Quickly find numbers by country or service type
- **Always Free**: No registration required, completely free to use

## Technology Stack

- **Frontend**: Vue.js 3 with TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Internationalization**: Vue i18n
- **Testing**: Vitest
- **Linting**: ESLint

## Data Sources

- **Emergency Numbers**: [Emergency Number API](https://emergencynumberapi.com/) - Comprehensive database of worldwide emergency contact numbers
- **Emergency Response Guidelines**: Compiled from official government sources including:
  - UK Emergency Services (London Fire Brigade)
  - US 911.gov official guidelines  
  - Australian Emergency Services (ACMA)
  - Canadian Emergency Response protocols

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## Usage

1. **Find Emergency Numbers**: Search or browse by country to find local emergency service contacts
2. **Emergency Guide**: Learn when to call each service and how to provide essential information
3. **Multi-language**: Switch between English, French, and Spanish using the language selector

## Contributing

This project aims to provide life-saving information. We welcome contributions to improve the platform:

### Data Improvements
- Check the [Emergency Number API](https://emergencynumberapi.com/) for data updates
- Report incorrect emergency numbers by opening an issue
- Suggest additional countries or services to include

### Code Contributions
- Fork the repository and create a feature branch
- Submit pull requests for UI/UX improvements
- Add new features like maps, offline support, or accessibility enhancements
- Improve translations or add support for additional languages

### Guidelines
- Test thoroughly before submitting - accuracy is critical for emergency services
- Follow the existing code style and TypeScript conventions
- Update documentation for any new features
- Ensure mobile responsiveness for emergency use cases

All contributions help make emergency information more accessible worldwide.

## ⚠️ Disclaimer

⚠️ **Important Safety Information**

🚨 This application provides emergency contact information for reference purposes only. Always verify numbers with local authorities when possible.

📱 Emergency numbers may change over time - the accuracy depends on our data sources and local government updates.

🏥 In life-threatening situations, don't delay calling emergency services to verify numbers through this app.

🌍 Local emergency procedures may vary by region within countries - familiarize yourself with local protocols.

⚖️ This service is provided "as is" without warranty. Users assume responsibility for verifying information accuracy.

## License

This project is open source. Emergency number data is provided by Emergency Number API under their terms of service.