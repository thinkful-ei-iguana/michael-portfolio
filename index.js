


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
}

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
    <button id="previous">Previous</button>
    <button id="next">Next</button>
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
        <button id="previous">Previous</button>
        <button id="next">Next</button>
    `;

const project3 =     `
        Placeholder for Project 3
        <p>The purpose of this project was to </p>
        <ul>Technologies
            <li></li>
            <li></li>
        </ul>
        <a href="liveurl"></a>
        <a href="repositoryurl"></a>
        <button id="previous">Previous</button>
        <button id="next">Next</button>
    `;

const project4 = `
                Placeholder for Project 4
                <p>The purpose of this project was to </p>
                <ul>Technologies
                <li></li>
                <li></li>
                </ul>
            <a href="liveurl"></a>
            <a href="repositoryurl"></a>
            <button id="previous">Previous</button>
            <button id="next">Next</button>
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
    <button id="previous">Previous</button>
    <button id="next">Next</button>
    `;



//////// Rendering ////////
const render = function(){
    renderProject();
}

const renderDefault = function(){
    defaultHides();
}

const renderProject = function(){
    $('#projectSection').html(projectSelect(projectNumber));
}

const defaultHides = function(){
    $('.projects').hide();
    $('.contact').hide();
}

//////// Functionality ////////
const openNext = function(){
    if(projectNumber < 5){
        projectNumber++;
    } else{
        projectNumber = 1;
    }
}

const openPrevious = function(){
    if(projectNumber > 1){
        projectNumber--;
    } else{
        projectNumber = 5;
    }
}


////////// EVENT LISTENERS /////////////////
const bindEventListeners = function(){
    nextArrow();
    backArrow();
    aboutMe();
    projects();
    contact();
}

const aboutMe = function(){
    $('body').on('click', '#aboutMe', function(event){
        event.preventDefault();
        $('.projects').hide();
        $('.contact').hide();
        $('.aboutMe').show();
    });
}

const projects = function(){
    $('.contentNav').on('click', '#projects', function(event){
        $('.contact').hide();
        $('.aboutMe').hide();
        $('.projects').show();
        console.log(projectNumber);
        console.log(projectSelect(projectNumber));
        render();
    });
}

const contact = function(){
    $('.contentNav').on('click', '#contact', function(event){
        $('.contact').hide();
        $('.aboutMe').hide();
        $('.projects').show();
    });
}

const nextArrow = function(){
    $('.content').on('click', '#next', function(event){
        event.preventDefault();
        openNext();
        render();
    })
}

const backArrow = function(){
    $('.content').on('click', '#back', function(event){
        event.preventDefault();
        openPrevious();
        render();
    })
}


    $(bindEventListeners());
    $(renderDefault());
