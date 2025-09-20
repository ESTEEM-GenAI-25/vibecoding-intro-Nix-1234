// Configuration file for all customizable text content
// Edit this file to customize the text throughout your website

const CONFIG = {
  // Site metadata
  site: {
    title: "Nikita Muthuuri, MD - Personal Website",
    description: "Graduate student in ESTEEM and MS Global Health programs at Notre Dame",
    author: "Nikita Muthuuri, MD",
    email: "nmuthuur@nd.edu",
    linkedin: "https://linkedin.com/in/nikita-muthuuri"
  },

  // Navigation
  navigation: {
    home: "Home",
    about: "About",
    interests: "Interests",
    contact: "Contact"
  },

  // Homepage content
  homepage: {
    hero: {
      name: "Nikita Muthuuri, MD",
      title: "Graduate Student",
      subtitle: "ESTEEM Program & MS Global Health, University of Notre Dame"
    },
    about: {
      title: "About Me",
      description: "I am a graduate student pursuing dual degrees in the ESTEEM (Engineering, Science, and Technology Entrepreneurship Excellence Master's) program and the MS Global Health program at the University of Notre Dame. My journey combines my medical background with a passion for innovation and global health impact."
    },
    interests: {
      title: "My Interests",
      items: [
        {
          title: "Health-Tech",
          description: "Exploring innovative technologies that can transform healthcare delivery and improve patient outcomes"
        },
        {
          title: "Entrepreneurship",
          description: "Developing sustainable business solutions that address critical challenges in healthcare and global health"
        },
        {
          title: "Global Health",
          description: "Working towards equitable health solutions and addressing health disparities on a global scale"
        }
      ]
    },
    contact: {
      title: "Get In Touch",
      description: "I'm always interested in connecting with fellow students, professionals, and collaborators in health-tech, entrepreneurship, and global health.",
      linkedin: "Connect with me on LinkedIn",
      email: "Email me directly"
    }
  },

  // 404 page content
  error404: {
    title: "Page Not Found",
    message: "Sorry, the page you are looking for doesn't exist.",
    backHome: "Go Back Home"
  },

  // Footer content
  footer: {
    copyright: "© 2025 Nikita Muthuuri, MD. All rights reserved."
  },

  // Common messages
  messages: {
    loading: "Loading...",
    error: "Something went wrong. Please try again.",
    success: "Thank you! Your message has been sent.",
    required: "This field is required",
    invalidEmail: "Please enter a valid email address"
  }
};

// Make it available globally
if (typeof window !== 'undefined') {
  window.CONFIG = CONFIG;
}

// Export for Node.js environments
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CONFIG;
}
