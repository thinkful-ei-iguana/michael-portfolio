


//What sort of functionality do we want here?
//hiding/scrolling through sections/projects

//

/////// GLOBALS ////////
let projectNumber = 1;

////////// HTML ////////////
const projectSelect = function(number){
  switch (number){
  case 1:
    return (project1);
  case 2:
    return (project2);
  case 3:
    return (project3);
  case 4:
    return (project4);
  case 5:
    return (project5);
  }
};

const project1 = `

    <h3>digi-doodle</h3>    
        <p>The purpose of this project was to create a full stack project to showcase some fun and interactive technology.  This was manifested in the form of a game!  digi-doodle is a pictionary-like game that features multi-player capability through the use of websockets.  This was an entirely new technology that was learned and implemented over the course of two weeks.</p>

        <ul>Technologies
          <li>Front End: </br>

          </li>
          <li>Back End: </br>
    
          </li>
          <li>Testing: </br>
              Jest, Enzyme, Mocha, Chai
          </li>
        </ul>

    <a href="https://digi-doodle.now.sh/" target="_blank">Live Site</a>
    <a href="https://github.com/thinkful-ei-iguana/digi-doodle-client" target="_blank">Client Repo</a>
    <a href="https://github.com/thinkful-ei-iguana/digi-doodle-server" target="_blank">Server Repo</a>

    <div class="thumbnails">
      <div class="thumbnailImg1"><img src="screenshots/dd-landing.PNG" alt="digi-doodle landing page"></div>
      <div class="thumbnailImg2"><img src="screenshots/dd-game.PNG" alt="digi-doodle game page"></div>
    </div>
    
    `;


const project2 = `
 
    <h3>Spaced Repetition</h3>
    <p>The purpose of this project was to create a spaced repitition language learning application that demonstrated back end technologies using linked-lists created from database requests.  It also showcases integration testing using Cypress.  Any time a guesser gets an answer right, that prompt is not to appear for 2 spaces times the number of times in a row the prompt was translated correctly.</p>

    <ul>Technologies
      <li>Front End: </br>
      
      </li>
      <li>Back End: </br>

      </li>
      <li>Testing: </br>
          Cypress, Jest, Mocha, Chai
      </li>
    </ul>

    <a href="https://spaced-rep-phi.now.sh/" target="_blank">Live Site</a>
    <a href="https://github.com/thinkful-ei-iguana/michael-anugrah-spaced-repetition-client" target="_blank">Client Repo</a>
    <a href="https://github.com/thinkful-ei-iguana/michael-anugrah-spaced-repetition-server" target="_blank">Server Repo</a>

    <div class="thumbnails">
      <div class="thumbnailImg1"><img src="screenshots/spaced-rep-landing.PNG" alt="spaced repetition landing page"></div>
      <div class="thumbnailImg2"><img src="screenshots/spaced-rep-guessing.PNG" alt="spaced repetition guessing page"></div>
    </div>
  
    `;


const project3 =     `

    <h3>War!</h3>
    <p>The purpose of this project was to demonstate our first production quality, full-stack capstone. </p>

    <ul>Technologies
      <li>Front End: </br>
        
      </li>
      <li>Back End: </br>

      </li>
      <li>Testing: </br>
          Jest, Mocha, Chai
      </li>
    </ul>

    <a href="https://michael-war-app.now.sh/landing" target="_blank">Live Site</a>
    <a href="https://github.com/mweedman/war-front-end" target="_blank">Client Repo</a>
    <a href="https://github.com/mweedman/war-back-end" targer="_blank">Server Repo</a>

    <div class="thumbnails">
      <div class="thumbnailImg1"><img src="/screenshots/dd-landing.png" alt="digi-doodle landing page"></div>
      <div class="thumbnailImg2"><img src="/screenshots/dd-game.png" alt="digi-doodle game page"></div>
    </div>
  
    `;
     

const project4 = `

    <h3>Bookmarks App</h3>
    <p>The purpose of this project was to provide an introduction to utilizing APIs to perform simple CRUD operations and return a renderable list of website bookmarks. </p>

    <ul>Technologies
      <li>Front End: </br>
        Javascript, AJAX, API, CSS, HTML
      </li>
    </ul>

    <a href="https://thinkful-ei-iguana.github.io/michael-bookmarks-app/dist/" target="_blank">Live Site</a>
    <a href="https://github.com/thinkful-ei-iguana/michael-bookmarks-app/tree/gh-pages" target="_blank">Repository</a>

    <div class="thumbnails">
      <div class="thumbnailImg1"><img src="/screenshots/dd-landing.png" alt="digi-doodle landing page"></div>
      <div class="thumbnailImg2"><img src="/screenshots/dd-game.png" alt="digi-doodle game page"></div>
    </div>

    `;

const project5 = `

    <h3>Quiz App</h3>
    <p>This was the first project that was fully </p>
    <ul>Technologies
      <li>Front End: </br>
        Javascript, CSS, HTML, Git, Command
      </li>
    </ul>

    <a href="https://thinkful-ei-iguana.github.io/TheQuizToEndAllQuizzes/" target="_blank">Live Site</a>
    <a href="https://github.com/thinkful-ei-iguana/TheQuizToEndAllQuizzes">Repository</a>

    <div class="thumbnails">
      <div class="thumbnailImg1"><img src="/screenshots/dd-landing.png" alt="digi-doodle landing page"></div>
      <div class="thumbnailImg2"><img src="/screenshots/dd-game.png" alt="digi-doodle game page"></div>
    </div>

      `;


//////// Rendering ////////
const render = function(){
  renderProject();
};

const renderDefault = function(){
  defaultHides();
};

const renderProject = function(){
  $('.imgContainer').hide();
  $('#projectContent').html(projectSelect(projectNumber));
};

const defaultHides = function(){
  $('.projects').hide();
  $('.repertoire').hide();
  $('.moreAboutMe').hide();
};

//////// Functionality ////////
const openNext = function(){
  if(projectNumber < 5){
    projectNumber++;
  } else {
    projectNumber = 1;
  }
};

const openPrevious = function(){
  if(projectNumber > 1){
    projectNumber--;
  } else{
    projectNumber = 5;
  }
};


////////// EVENT LISTENERS /////////////////
const bindEventListeners = function(){
  nextArrow();
  backArrow();
  aboutMe();
  projects();
  repertoire();
  thumbnail1();
  thumbnail2();
  closeImg();
};

const aboutMe = function(){
  $('body').on('click', '#aboutMe', function(event){
    event.preventDefault();
    $('.projects').hide();
    $('.repertoire').hide();
    $('.aboutMe').hide();
    $('.moreAboutMe').show();
  });
};

const repertoire = function(){
  $('.contentNav').on('click', '#repertoire', function(event){
    event.preventDefault();
    $('.aboutMe').hide();
    $('.projects').hide();
    $('.moreAboutMe').hide();
    $('.repertoire').show();
  });
};

const projects = function(){
  $('.contentNav').on('click', '#projects', function(event){
    $('.aboutMe').hide();
    $('.repertoire').hide();
    $('.moreAboutMe').hide();
    $('.projects').show();
    render();
  });
};

const nextArrow = function(){
  $('.content').on('click', '#next', function(event){
    event.preventDefault();
    openNext();
    render();
  });
};

const backArrow = function(){
  $('.content').on('click', '#previous', function(event){
    event.preventDefault();
    openPrevious();
    render();
  });
};

const thumbnail1 = function() {
  $('.content').on('click', '.thumbnailImg1', function(event) {
    event.stopPropagation();
    event.preventDefault();
    let img = $('.thumbnailImg1').children()[0].src;
    let imageData = `<img class="fullSizeImage" src="${img}" alt="full size">`;
    $('.imgContainer').show();
    $('.contentNav').hide();
    $('.projects').hide();
    $('.heroContainer').hide();
    $('.imgContainer').html(imageData);
  });
};

const thumbnail2 = function() {
  $('.content').on('click', '.thumbnailImg2', function(event) {
    event.stopPropagation();
    event.preventDefault();
    let img = $('.thumbnailImg2').children()[0].src;
    let imageData = `<img class="fullSizeImage" src="${img}" alt="full size">`;
    $('.imgContainer').show();
    $('.contentNav').hide();
    $('.projects').hide();
    $('.heroContainer').hide();
    $('.imgContainer').html(imageData);
  });
};

const closeImg = function() {
  $('.content').on('click', '.imgContainer', function(event) {
    event.preventDefault();
    $('.imgContainer').empty();
    $('.imgContainer').hide();
    $('.contentNav').show();
    $('.projects').show();
    $('.heroContainer').show();
  });
};


$(bindEventListeners());
$(renderDefault());
