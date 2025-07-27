# Dynamic Timeline React Application

A beautiful, interactive timeline displaying historical events from 1928 to 1946, inspired by the Justice Society of America timeline. Built using the `react-chrono` library for robust timeline functionality.

## Features

- **Interactive Timeline**: Built with react-chrono library for professional timeline functionality
- **Horizontal Layout**: Smooth horizontal scrolling timeline with navigation controls
- **Color-coded Events**: Special events (1944, 1946) are highlighted with custom styling
- **Responsive Design**: Works on desktop and mobile devices
- **Smooth Animations**: Hover effects and transitions for better user experience
- **Navigation Controls**: Built-in timeline navigation with previous/next buttons

## Getting Started

### Prerequisites

Make sure you have Node.js installed on your system. You can download it from [nodejs.org](https://nodejs.org/).

### Installation

1. Clone or download this repository
2. Open a terminal in the project directory
3. Install dependencies:

```bash
npm install --legacy-peer-deps
```

**Note**: The `--legacy-peer-deps` flag is required due to a dependency version conflict between React 18 and react-chrono.

### Running the Application

Start the development server:

```bash
npm start
```

The application will open in your default browser at `http://localhost:3000`.

### Building for Production

To create a production build:

```bash
npm run build
```

## Deployment

### Railway Deployment

This application is configured for deployment on Railway.

1. **Connect to Railway**: Link your GitHub repository to Railway
2. **Automatic Deployment**: Railway will automatically detect the React app and deploy it
3. **Environment Variables**: Railway will automatically set the `PORT` environment variable
4. **Custom Domain**: You can add a custom domain in Railway settings

### Manual Railway Deployment

If you prefer manual deployment:

1. Install Railway CLI: `npm install -g @railway/cli`
2. Login: `railway login`
3. Initialize: `railway init`
4. Deploy: `railway up`

### Docker Deployment

The application includes a Dockerfile for containerized deployment:

```bash
# Build the Docker image
docker build -t golden-age-timeline .

# Run the container
docker run -p 3000:3000 golden-age-timeline
```

## Project Structure

```
src/
├── components/
│   ├── Timeline.js          # Main timeline component
│   └── Timeline.css         # Timeline styles
├── data/
│   └── timelineData.js      # Timeline data and events
├── App.js                   # Main app component
├── App.css                  # App styles
├── index.js                 # Application entry point
└── index.css                # Global styles
```

## Customization

To add or modify events, edit the `src/data/timelineData.js` file. Each event has the following structure:

```javascript
{
  year: 1944,
  position: 'top' | 'bottom',
  isHighlighted: true | false,
  description: [
    "Event description line 1",
    "Event description line 2"
  ]
}
```

The component automatically converts this data format to the react-chrono format with proper styling and media elements.

## Technologies Used

- React 18
- react-chrono (Timeline component library)
- CSS3 with modern features (Grid, Flexbox, Gradients)
- JavaScript ES6+

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest) 