// Function to fetch data from the API
async function getMemeTemplates() {
    try {
      const response = await fetch('https://apimeme.com/meme-templates.json');
      
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log(data); 
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
 
  getMemeTemplates();
  
  async function fetchImages() {
    try {
      const response = await fetch('https://apimeme.com/?ref=apilist.fun');
      const data = await response.json();
      console.log(data); // Inspect the response structure
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  }
  
