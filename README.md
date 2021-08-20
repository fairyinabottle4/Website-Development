# My Awesome Portfolio Websites🌐

Hello! Here is my personal portfolio website based on [this template](https://github.com/smaranjitghose/awesome-portfolio-websites). 

Even though it was based on an open-source implementation, my version has undergone rigorous testing, UI/UX improvements and near-perfect mobile responsiveness. To use **my template**, look at [this section](#use-my-website-as-template) below.

Feel free to reach out to me via the information provided in the [website](https://keithlow98.com/) or [linkedin](https://www.linkedin.com/in/raythx/).

<p align="left"><img src="https://media.giphy.com/media/9JrkkDoJuU0FbdbUZU/giphy.gif" width = 40%></p>

# Use my Website as Template

### Forking the repository
- Visit my [repository](https://github.com/fairyinabottle4/website-development).
- Fork the repository by clicking on the Fork button

### Cloning the repository
- Install [git](https://git-scm.com/downloads)
- Visit the repository
- Copy the link `https://github.com/fairyinabottle4/website-development.git` of the repository by clicking on the clone button
- Open terminal
- Type `git clone https://github.com/fairyinabottle4/website-development.git`

### Personalising your Website

> Images

- Images are organised under `assets/images`
- For a start, add your profile picture to `assets/images`
- Open index.html
- Change the `<img src="">` to your image path, do take note that image file names are case-sensitive
- This changes the picture in the home page

> Social Media Links

* Home Page
  * Under `index.html`, search for `socialicon` and change the links
* Footer
  * Under `js/app.js`, search for `social-button` and change the links

> Contact Form

* Under `js/app.js`, search for `form action` and replace the random string of characters with your email
  * For example, `<form action="https://formsubmit.co/myemail@dot.com" method="POST">`
* Submit a test form and follow the instructions to activate the API

> Website Signature

* Under `js/app.js`, search for `navbar-brand` and change the words to your desired signature

> Home Page

* To change the name on the home page
  * Open `index.html`
  * Change all instances of `Keith Low` to your Name
* To change the interests displayed
  * Open `index.html`
  * Search for `data-words` and change the list of words

> Experience

* Add your work experience images to `assets/images/experience-page`
* To change the technical experience details
  * Open `experience.html`
  * Search for `technical-experience-cards` 
    * Change the current title to your position inside `title`
    * Change the current image path to your image path inside `img src=""`
    * Change the current place to your industry/company name inside `pre-heading`
    * Change the current time to your duration of work inside `author`
    * Change the current description to your job description inside `<ol>""</ol>`
* To change the work experience details
  * Open `experience.html`
  * Search for `work-experience-cards` 
    * Change the current title to your position inside `title`
    * Change the current image path to your image path inside `img src=""`
    * Change the current place to your industry/company name inside `pre-heading`
    * Change the current time to your duration of work inside `author`
    * Change the current description to your job description inside `<ol>""</ol>`

> Projects

* Add your project images to `assets/images/project-page`
* To change the project details
  * Open `project.html`
  * Search for `projectcards` 
    * Change the current title to your project name inside `title`
    * Change the current image path to your project image path inside `wrapper`
    * Change the current description to your project description inside `subtitle`
    * Add the preview link and github link inside `menu-content`

> Research

* Add your research images to `assets/images/research-page`
* To change the research details
  * Open `research.html`
  * Search for `researchDetailsTable` 
    * Change the current title to your research paper title inside `paperTitle`
    * Change the current authors to your research paper authors inside `authors`
    * Change the current conferences to your research conferences inside `rConferences`
    * Change the current research year to your research year inside `researchYr`
    * Change the current image path to your image path inside `<img src="">`
    * Change the current abstract to yours inside vancouver `ABSTRACT`
    * Change the current citation to yours inside bibtex `CITATION`

> Education

* Add your institute and MOOC images to `assets/images/education-page`
* To change the formal education details
  * Open `education.html`
  * Search for `edSection` 
    * Change the institute name, subheading and duration of study inside `qual`
    * Change the current image path to your image path inside `<img src="">`
    * Change the current description to yours inside `<p>""</p>`
* To change the MOOC details
  * Open `education.html`
  * Search for `moocs` 
    * Change the current title to your course name inside `mooc-title`
    * Change the current image path to your course image path inside `<img src="">`
    * Change the current MOOC link to yours inside `<a href="">`

> Search Engine Optimisation and Miscellaneous

- Search for `site_name` & `site` and update it to the link to your portfolio

- Search for `title` and update it from `Keith Low | Home` to `Your Name | Home`

- Search for `keywords` & `description` and update by writing something about yourself

- Search for `url` and update it to the link to your portfolio

- Search for `application-name` and update it from `Keith Low | Home` to `Your Name | Home`

- Search for `apple-mobile-web-app-title` and update it from `Keith Low | Home` to `Your Name | Home`

- Search for `summary` and update it by writing somthing about yourself

- Add your preview image to to `assets/images` and upload the same image to an image hosting website running on HTTPS, such as [IMGUR](https://imgur.com/).

- Search for `og:image` and update it to the image path of your preview image

- Search for `og:image:secure_url` and update it to the IMGUR link of your preview image

### Final Steps

1. Save the changes you have made till now

2. Open terminal in the file you made the changes

3. Type `git add .`

4. Type `git commit -m "Your commit message"`
 
5. Type `git push origin master`

6. In your Github repository e.g. `https://github.com/fairyinabottle4/website-development`, click on `Settings` and navigate to `Pages` on the left sidebar

7. Build your website by choosing `Branch: master`, folder `/ (root)` and click save.

8. Your website is now up and running!




Many thanks and all credit goes to my good friend [Ray](https://github.com/raythx98) who made this template. 
