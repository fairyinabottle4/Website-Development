let darkMode = localStorage.getItem('darkMode');

const darkModeToggle = document.querySelector('.checkboxtoggle');

const enableDarkMode = function(){
    // 1. Add the class to the body
    document.body.classList.add('darkmode');
    // 2. Update darkMode in localStorage
    localStorage.setItem('darkMode', 'enabled');
  }
  
  const disableDarkMode = function(){
    // 1. Remove the class from the body
    document.body.classList.remove('darkmode');
    // 2. Update darkMode in localStorage 
    localStorage.setItem('darkMode', null);
  }

darkModeToggle.addEventListener('click', function(){
    console.log('test');
})


   
  // If the user already visited and enabled darkMode
  // start things off with it on
  if (darkMode === 'enabled') {
    enableDarkMode();
  }
  
  // When someone clicks the button
  darkModeToggle.addEventListener('click', function(){
    // get their darkMode setting
    darkMode = localStorage.getItem('darkMode'); 
    
    // if it not current enabled, enable it
    if (darkMode !== 'enabled') {
      enableDarkMode();
    // if it has been enabled, turn it off  
    } else {  
      disableDarkMode(); 
    }
  });
  