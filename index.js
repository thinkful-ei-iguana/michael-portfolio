


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
        <p>The purpose of this project was to create a full capstone</p>
        <ul>Technologies
            <li></li>
            <li></li>
        </ul>
    <a href="liveurl"></a>
    <a href="repositoryurl"></a>

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
    <a href="https://michael-star-search-4tvxjwhtm.now.sh/">Live Page</a>
    <a href="https://github.com/thinkful-ei-iguana/michael-definitely-not-starwars-deployment">Repository</a>
    <div class="thumbnails">

    </div>
  
    `;


const project3 =     `

    <h3>War!</h3>
    <p>The purpose of this project was to demonstate our first production quality, full-stack capstone. </p>
    <ul>Technologies
        <li>NodeJS</li>
        <li>React</li>
        <li>Express</li>
        <li></li>
    </ul>
    <a href="https://michael-war-app.now.sh/landing">Live Page</a>
    <a href="repositoryurl">Front End Repository</a>
    <a href="repositoryurl">Back End Repository</a>
  
    `;
     

const project4 = `

    <h3>Bookmarks App</h3>
    <p>The purpose of this project was to </p>
    <ul>Technologies
        <li>Javascript</li>
        <li>ajax</li>
        <li>api</li>
        <li>CSS</li>
        <li>Html</li>
    </ul>
    <a href="liveurl"></a>
    <a href="repositoryurl"></a>

    `;

const project5 = `

    <h3>Quiz App</h3>
    <p>The purpose of this project was to </p>
    <ul>Technologies
        <li>Javascript</li>
        <li>CSS</li>
        <li>Html</li>
        <li>Git</li>
        <li>Command</li>
    </ul>
    <a href="liveurl"></a>
    <a href="repositoryurl"></a>

      `;


//////// Rendering ////////
const render = function(){
  renderProject();
};

const renderDefault = function(){
  defaultHides();
};

const renderProject = function(){
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


$(bindEventListeners());
$(renderDefault());
