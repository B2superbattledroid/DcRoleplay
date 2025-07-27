# Deployment Guide - Golden Age Timeline

## CI/CD Pipeline Setup

This project uses GitHub Actions for continuous integration and deployment to Railway.

### Required GitHub Secrets

You need to set up the following secrets in your GitHub repository:

1. **RAILWAY_API_TOKEN**
   - Go to [Railway Dashboard](https://railway.app/dashboard)
   - Navigate to your account settings
   - Generate a new API token
   - Add it to GitHub repository secrets

### Setting up GitHub Secrets

1. Go to your GitHub repository
2. Click on "Settings" tab
3. Click on "Secrets and variables" → "Actions"
4. Click "New repository secret"
5. Add the following secrets:

| Secret Name | Description | Value |
|-------------|-------------|-------|
| `RAILWAY_API_TOKEN` | Railway API token for deployment | Your Railway API token |

### Railway Project Setup

1. **Create Railway Project** (if not already created):
   - Go to [Railway Dashboard](https://railway.app/dashboard)
   - Click "New Project"
   - Choose "Deploy from GitHub repo"
   - Select your repository

2. **Project ID**: `a93c9e29-e643-4bda-abe3-a01f50e2057e`
3. **Service Name**: `frontend`

### Workflow Triggers

The CI/CD pipeline will automatically run on:
- **Push to main branch**: Automatic deployment
- **Manual trigger**: Use "workflow_dispatch" in GitHub Actions

### Pipeline Steps

1. **Checkout**: Clone the repository
2. **Setup Node.js**: Install Node.js 18
3. **Install Dependencies**: `npm ci --legacy-peer-deps`
4. **Run Tests**: Execute test suite
5. **Build Application**: Create production build
6. **Docker Build**: Create optimized Docker image
7. **Push to Registry**: Push to GitHub Container Registry
8. **Deploy to Railway**: Trigger Railway deployment

### Docker Image

- **Registry**: GitHub Container Registry (ghcr.io)
- **Image Name**: `{username}/{repo}/golden-age-timeline`
- **Tags**: Latest, version tags, and semantic versioning

### Monitoring

- **GitHub Actions**: Monitor pipeline status in Actions tab
- **Railway Dashboard**: Monitor deployment and logs
- **Health Checks**: Docker health checks every 30 seconds

### Troubleshooting

#### Common Issues

1. **Build Failures**:
   - Check Node.js version compatibility
   - Verify all dependencies are installed
   - Check for TypeScript/ESLint errors

2. **Deployment Failures**:
   - Verify Railway API token is correct
   - Check Railway project ID and service name
   - Ensure Railway CLI is properly installed

3. **Docker Build Issues**:
   - Check Dockerfile syntax
   - Verify .dockerignore excludes unnecessary files
   - Check for missing dependencies

#### Debug Commands

```bash
# Test locally
npm run test:ci

# Build locally
npm run build

# Test Docker build
docker build -t golden-age-timeline .

# Run Docker container
docker run -p 3000:3000 golden-age-timeline
```

### Environment Variables

The application uses the following environment variables:

- `NODE_ENV`: Set automatically by Railway
- `PORT`: Set automatically by Railway
- `REACT_APP_ENV`: Development/Production environment

### Security

- **Non-root user**: Docker container runs as non-root user
- **Health checks**: Automatic health monitoring
- **Multi-stage build**: Optimized production image
- **Dependency scanning**: Regular security updates

### Performance

- **Caching**: GitHub Actions caches npm dependencies
- **Multi-stage Docker**: Smaller production image
- **Optimized builds**: Production-optimized React build
- **CDN ready**: Static assets optimized for CDN delivery 