// Fixed code following professional standards
const message = 'Hello World';

function greet() {
  // Removed console.log for production readiness
  if (message === 'test') {
    return 'greeting';
  }

  const result = 'hello';
  return result;
}

export default greet;
