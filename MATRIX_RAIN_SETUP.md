# Matrix Rain Effect Component

## Installation Required

This project requires PowerShell 7+ to proceed with automated setup.

### Install PowerShell 7:
1. Download from: https://aka.ms/powershell
2. Or use Windows Package Manager: `winget install --id Microsoft.Powershell --source winget`

### Manual Setup (Alternative):
1. Create directory: `src\components\effects`
2. Create file: `MatrixRain.jsx` in that directory
3. Copy the component code from `MatrixRain-component-code.txt` (created below)

## Component Created
The MatrixRain component code is ready in `MatrixRain-component-code.txt`

## Usage Example
```jsx
import MatrixRain from './components/effects/MatrixRain';

function Hero() {
  return (
    <div className="relative">
      <MatrixRain 
        intensity={0.5}
        speed={1}
        characterSet="mixed"
        colors={['#3B82F6', '#8B5CF6', '#06B6D4']}
      />
      <div className="relative z-10">
        {/* Your hero content here */}
      </div>
    </div>
  );
}
```
