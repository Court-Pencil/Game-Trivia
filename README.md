# Video Game Trivia


[Video Game Trivia](https://court-pencil.github.io/Game-Trivia/)

The Video Game Trivia is an app where you can test your video game knowledge with easy, medium and hard questions. There is a start screen which is in the style of a retro games that is inspired from the early nes console graphics to give that novelty feeling. 10 quiz questions that are fetched from a API and the questions are different each time you play the quiz. Once the quiz is completed it takes you to a results page and shows the users how much they scored and there is a retry button that once clicked will bring you back to the start screen for the user to play again. 

![image of website on all screen sizes](src\docs\all-screen-sizes-image.png)

[Contents]()

- [User Goals](#user-goals)
- [User Stories](#user-stories)
- [Website Goals and Objectives](#website-goals-and-objectives)
- [Wireframes](#wireframes)
- [Design Choices](#design-choices)
  - [Typography](#typography)
  - [Colour Scheme](#colour-scheme)
  - [Images](#images)
  - [Responsiveness](#responsiveness)
- [Features](#features)
  - [Existing Features](#existing-features)
    - [Header](#header)
    - [Landing View](#landing-view)
    - [Events](#events)
    - [Gallery](#gallery)
    - [Booking form](#booking-form)
    - [Footer](#footer)
  - [Future Enhancements](#future-enhancements)
- [Technologies Used](#tech-used)
  - [Languages](#languages)
  - [Libraries & Framework](#libraries-framework)
  - [Tools](#tools)
- [Testing](#testing)
  - [Bugs Fixed](#bugs-fixed)
  - [Responsiveness Tests](#responsiveness-tests)
  - [Code Validation](#code-validation)
    - [HTML](#html)
    - [CSS](#css)
  - [User Story Testing](#user-story-testing)
  - [Feature Testing](#feature-testing)
  - [Acessibility Testing](#acessibility-testing)
  - [Lighthouse Testing](#lighthouse-testing)
  - [Brower Testing](#browser-testing)
- [Deployment](#deployment)
  - [To deploy the project](#deploy-project)
  - [To fork the project](#fork-project)
  - [To clone the project](#clone-project)
- [Credits](#credits)

## User Goals

- Provide user-friendly navigation for a seamless quiz experience.
- Receive immediate feedback on answers to learn from mistakes.
- Track progress and score through the quiz.
- Enjoy a visually engaging and responsive interface.
- Restart the quiz easily to replay or improve results.
- Access the app on any device, including mobile phones and tablets.
- Include relevant and engaging questions in the quiz.

## User Stories

- As a user, I want my knowledge of video games to be challenged.
- As a user, I want to receive immediate feedback on my quiz answers.
- As a user, I want navigation to be intuitive and straightforward.
- As a user, I want a visually appealing interface that enhances the overall experience.
- As a user, I want the scoring system to be transparent and understandable.
- As a user, I want to access the quiz on any device, including mobile phones and tablets.

## Website Goals and Objectives

- Provide an entertaining and engaging quiz experience for users.
- Include a variety of video game topics to appeal to a wide audience.
- Offer immediate feedback to enhance learning and enjoyment.
- Increase user interaction by allowing quizzes to be replayed and scores tracked.
- Maintain high performance and responsiveness across all devices.
- Encourage repeat visits by providing motivational messages and smooth quiz flow.


## Target Audience

- Video game enthusiasts – people who play or follow video games and enjoy testing their knowledge.
- Quiz enthusiasts – people who enjoy trivia games and challenges.
- Pop culture fans – people interested in gaming, anime, or nerd culture who enjoy quizzes about media.


## Wireframes

**// talk about wireframe of quiz // **

The wireframes were designed using Balsamiq. Designed with mobile first practices, tablet and then website. 
The final design of the Trailblazers site evolved from the original wireframes to create a smoother, more intuitive user experience. While the wireframes helped establish the initial structure—such as homepage layout, events section, and booking form the final version refines these elements for better flow and clarity.  



![Wireframe-Mobile]()
![Wireframe-Mobile]()
![Wireframe-Mobile]()

## Design Choices

### Typography
/add more about why i picked the fonts/


The font family chosen for the Video Game Trivia website is Press Start 2P for the primary font. Lato for the secondary font. These were chosen for replicating nes font to give that retro vibe, to bring a nostaligic feeling to the user.


### Colour Scheme

The colour scheme was chosen based on colours nes Pacman game. The navy blue background and yellow text mirrors the old style PacMan game which i think is something that a lot of people know of.


![Coolors scheme](src\docs\quiz-colour-scheme.png)

I used [Contrast Grid](https://contrast-grid.eightshapes.com/ "Contrast Grid") to check effective color pairings that support readability and to identify combinations that may hinder legibility due to insufficient contrast or visual discomfort.

![Colour contrast grid](docs/colour-contrast-grid.png)

// THIS NEEDS REDOING//


### Responsiveness

My App is repsonsive to all screen sizes. 
| Breakpoint | Class infix | Dimensions | | |
|-------------------|-------------|------------|---|---|
| Extra small | None | <576px | | |
| Small | sm | ≥576px | | |
| Medium | md | ≥768px | | |
| Large | lg | ≥992px | | |
| Extra large | xl | ≥1200px | | |
| Extra extra large | xxl | ≥1400px | | |


## Features


The interactive quiz interface is a clean and responsive UI that invites the user to test their video game knowledge. The layout is intutive, with a clear call-to-action to start the quiz.
Mobile-First Responsive Design – Built with a mobile-first approach to ensure the site looks and works seamlessly on phones, tablets, and desktops.


## Existing Features

### Start Screen

The start screen features a 'Start Quiz' button that launches the trivia experience, making it easy for users to get started.



### Quiz questions

The questions have multiple choice answers. Each question has four answer options, giving the user a familiar and accessible format.

### Real time feedback

When a answer is selected, the user recieves immediate visual feeback indicating whether their choice was correct or incorrect. This helps reinforce engagment and learning.

### Score tracking

The score is kept track throughout the quiz, once at the end of the quiz the user sees their score out of ten and a percentage.

### Replay Button

At the end of the quiz when the user has completed, they are given the option to play again. Which brings them back to the start screen to play again.

### Thematic styling

The use of the retro style on the app from the retro-inspired colour pallette and typography relfects the classic video game  aesthetic, echancing thematic experience.

### End Screen

The end screen has a smooth transition displaying the users score. A final score is displayed alongside a completion message depending on the score the user got, it returns a different message and a play again button to restart the quiz.

## Future Enchancements

### Difficulty section
Users would be able to choose their preferred challange level before starting the quiz.
It would include easy, medium and hard mode. Easy mode for casual play, straightforward questions and no time limit. Medium would be for a balanced experience, moderately challanging questions with no time limit. Hard mode would be for seasoned gamers, this would feature challanging and niche questions and a time constraint. This feature enhances accessibility and replayability, allowing users to tailor the experience to their skill level or mood.

### Time challange(Hard mode)
For Hard mode, a countdown timer will be there for each question. The user would have to answer before the time runs out e.g. 10 seconds, adding urgency and excitment. If the timer runs out the question is marked incorrect and moves to the next question. This mechanic increases the pressure and rewards fast recall, making the quiz more engaging for competitive or experienced users.

###  Scoreboard System
A scoreboard will track and display high scores across sessions. Users can see their best scores and compare them with others (or their own previous attempts). - The scoreboard may include player initials, score, difficulty level, and date achieved.
This feature encourages replayability and adds a competitive edge, perfect for sharing with friends or challenging yourself to improve.


## Technologies Used

### Languages

- HTML
- CSS
- React JS

### Libraries & Framework

- [Google Fonts](https://fonts.google.com/selection)



### Tools

- [Github](https://github.com/)
- [Balsamiq](https://balsamiq.com/)
- [W3C HTML Validation Service](https://validator.w3.org/)
- [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/)
- [Color Contrast Accessibility Validator](https://jigsaw.w3.org/css-validator/)
  https://www.audioeye.com/color-contrast-checker/
- [Open Trivia DB](https://opentdb.com/ "Open Trivia DB")
- [WAVE Accessibility Tool](https://wave.webaim.org/ "WAVE Accessibility Tool")
- [Am I Responsive](https://ui.dev/amiresponsive "Am I responsive")

## Testing

### Bugs

### Responsiveness Tests





## Code Validation

### CSS

I have used [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/). It returned errors relating to an old way of anti-alisasing of font. I was using this to make sure the pixelated font always appeared crisp on all browers otherwise it would take away from the style of the quiz. I updated it by deleting it and replacing it with -webkit-font-smoothing: antialiased;
 to keep the crisp edges of my pixelated font. The other errors were relating to extensions for different browers, the use of the same colour for border and background on the .answer-btn.correct and .answer-btn.incorrect. I removed the border as i liked how it looked as it was and the border was deemed unnecessary. I ran the test again  after the improvements and it passed.
![Screenshot of CSS validation test](src\docs\css-error-validation.png)
![Screenshot of CSS validation test](src\docs\css-passed-validation.png)

### HTML




## Accessibility Testing

I used the web accessibilty evalution tool (WAVE) [WAVE](https://wave.webaim.org/) to test if my quiz app is accessible to people with diverse needs. One alert was raised. I also used the colour contrast checker on WAVE's site for additional checking.

![WAVE](src\docs\wave-accessibility-checker.png)
![WAVE](src\docs\wave-contrast-checker-yellow.png "Yellow font")
![WAVE](src\docs\wave-contrast-checker-blue.png "Blue font")



## User Story Testing
| **User Story**                                                                                                                                     | **Result**                                                                                                   | **Pass** | **Screenshots**                                      |
|
## Feature Testing

This website was extensively tested for functionality using Chrome developer tools.

## Lighthouse Testing

The Video Game Trivia website has been tested in Chrome Dev Tools using Lighthouse Testing tool which inspects and scores the website for the following criteria. I generated two sets of lighthouse reports, one for mobile and one for desktop. 

- Performance - how quickly a website loads and how quickly users can access it.
- Accessibility - test analyses how well people who use assistive technologies can use your website.
- Best Practices - checks whether the page is built on the modern standards of web development.  
- SEO - checks if the website is optimised for search engine result rankings.

## Mobile chrome Dev tools testing:
![lighthouse testing image index](src\docs\mobile-lighthouse-testing.png)
 

## Desktop chrome Dev tools testing:
![lighthouse testing image index](src\docs\desktop-lighthouse-testing.png)
 

## Deployment

### To deploy the project

The  Video Game Trivia  deployed early in the process to GitHub pages via the following steps:

- Navigate to the repository on GitHub and click on Settings.

- In the side navigation and select Pages.

- In the None dropdown and choose Main.

- Click on the Save button.

The website is now live at https://Court-pencil.com.

Any changes required to the website, they can be made, committed and pushed to GitHub.

### To Fork the Project

Forking the GitHub repository allows you to create a duplicate of a local repository. This is done so that modifications to the copy can be performed without compromising the original repository.

- Log in to GitHub.
- Locate the repository.
- Click to open it.
- The fork button is located on the right side of the repository menu.
- To copy the repository to your GitHub account, click the button.

### To clone the project

- Log in to GitHub.
- Navigate to the main page of the repository and click Code.
- Copy the URL for the repository.
- Open your local IDE.
- Change the current working directory to the location where you want the cloned directory.
- Type git clone, and then paste the URL you copied earlier.
- Press Enter to create your local clone.

## Credits

- Feedback, advice and support:

  

- Code inspiration and learning content:
- Visual content:
  - [Coolors](https://coolors.co/)
  - [Contrast Grid](https://contrast-grid.eightshapes.com/?version=1.1.0&background-colors=&foreground-colors=%23FFFFFF%2C%20White%0D%0A%23F2F2F2%0D%0A%23DDDDDD%0D%0A%23CCCCCC%0D%0A%23888888%0D%0A%23404040%2C%20Charcoal%0D%0A%23000000%2C%20Black%0D%0A%232F78C5%2C%20Effective%20on%20Extremes%0D%0A%230F60B6%2C%20Effective%20on%20Lights%0D%0A%23398EEA%2C%20Ineffective%0D%0A&es-color-form__tile-size=compact&es-color-form__show-contrast=aaa&es-color-form__show-contrast=aa&es-color-form__show-contrast=aa18&es-color-form__show-contrast=dnp)


 
  
    

- learning content:

  - [Code Institute](https://learn.codeinstitute.net/ci_program/diwad_v2_14)
  - [Kevin Powell CSS](https://www.youtube.com/@KevinPowell)
  
 