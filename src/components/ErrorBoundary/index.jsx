import { Component } from 'react';
import { Typography, Box } from '@mui/material';

class ErrorBoundary extends Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Box sx={{ p: 3, textAlign: 'center' }}>
          <Typography variant="h5" color="error">
            Something went wrong!
          </Typography>
          <Typography variant="body1">
            {this.state.error?.message || 'Unknown error occurred.'}
          </Typography>
        </Box>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary; // Ensure this line exists