


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
    <button class="navButton" id="previous">&#8249;</button>
    <button class="navButton" id="next">&#8250;</button>
     `;

const project2 = `
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
        <button class="navButton" id="previous">&#8249;</button>
        <button class="navButton" id="next">&#8250;</button>
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
        <button class="navButton" id="previous">&#8249;</button>
        <button class="navButton" id="next">&#8250;</button>
    `;

const project4 = `
        <h3>Star Search</h3>
        <p>The purpose of this project was to demonstrate a live deployment of a front end that connects to an existing API.</p>
        <ul>Technologies
        <li>React</li>
        <li>JavaScript</li>
        <li>CSS</li>
        </ul>
    <a href="https://michael-star-search-4tvxjwhtm.now.sh/">Live Page</a>
    <a href="https://github.com/thinkful-ei-iguana/michael-definitely-not-starwars-deployment">Repository</a>
    <button class="navButton" id="previous">&#8249;</button>
    <button class="navButton" id="next">&#8250;</button>
    `;
            
const project5 = `
        Placeholder for Project 5
        <p>The purpose of this project was to </p>
        <ul>Technologies
            <li></li>
            <li></li>
        </ul>
    <a href="liveurl"></a>
    <a href="repositoryurl"></a>
    <button class="navButton" id="previous">&#8249;</button>
    <button class="navButton" id="next">&#8250;</button>
    `;



//////// Rendering ////////
const render = function(){
  renderProject();
};

const renderDefault = function(){
  defaultHides();
};

const renderProject = function(){
  $('#projectSection').html(projectSelect(projectNumber));
};

const defaultHides = function(){
  $('.projects').hide();
  $('.contact').hide();
};

//////// Functionality ////////
const openNext = function(){
  if(projectNumber < 5){
    projectNumber++;
  } else{
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
  contact();
};

const aboutMe = function(){
  $('body').on('click', '#aboutMe', function(event){
    event.preventDefault();
    $('.projects').hide();
    $('.contact').hide();
    $('.repertoire').hide();
    $('.aboutMe').show();
  });
};

const repertoire = function(){
  $('.contentNav').on('click', '#repertoire', function(event){
    event.preventDefault();
    $('.contact').hide();
    $('.aboutMe').hide();
    $('.projects').hide();
    $('.repertoire').show();
  });
};

const projects = function(){
  $('.contentNav').on('click', '#projects', function(event){
    $('.contact').hide();
    $('.aboutMe').hide();
    $('.repertoire').hide();
    $('.projects').show();
    render();
  });
};

const contact = function(){
  $('.contentNav').on('click', '#contact', function(event){
    $('.contact').show();
    $('.aboutMe').hide();
    $('.repertoire').hide();
    $('.projects').hide();
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
