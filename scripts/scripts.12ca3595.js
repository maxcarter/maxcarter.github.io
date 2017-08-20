"use strict";angular.module("portfolioApp",["ngCookies","ngRoute","ngAnimate","ngSanitize","mgcrea.ngStrap","angular-timeline","angular-scroll-animate","duScroll"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/game/:id",{templateUrl:"views/game.html",controller:"GameCtrl",controllerAs:"game"}).otherwise({redirectTo:"/"})}]),angular.module("portfolioApp").controller("MainCtrl",["$scope","$alert","Sidenav","Skills","Timeline","Projects","Request","Banner",function(a,b,c,d,e,f,g,h){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"],a.sidenav=c,a.skills=d,a.timeline=e,a.projects=f,a.formdata={},a.done=!1,a.animateElementIn=function(a){a.removeClass("invisible"),a.addClass("animated fadeIn")},a.animateElementOut=function(a){a.addClass("invisible"),a.removeClass("animated fadeIn")},a.submit=function(b){a.loading=!0,g.post("/api/v1/email",b,{},{"Content-Type":"application/json"}).then(function(b){a.loading=!1,a.formdata={},h.alert(b,"success")},function(b){a.loading=!1,h.alert(b,"danger")})}}]),angular.module("portfolioApp").factory("Sidenav",function(){return{elements:[{name:"Welcome",target:"#welcome",subelements:[]},{name:"About",target:"#about",subelements:[]},{name:"Skills",target:"#skills",subelements:[]},{name:"Education",target:"#education",subelements:[]},{name:"Timeline",target:"#timeline",subelements:[]},{name:"Projects",target:"#projects",subelements:[]}]}}),angular.module("portfolioApp").factory("Skills",function(){return{active:0,panels:[{title:"Web Development",body:"UI/UX, Websites, Web Apps, Web Services, RESTful APIs",icon:"fa-code",description:"With several years of experience, I have acquired a strong understanding of web development. I have designed, developed, and maintained various websites, web apps, and web based games throughout my life. My focus lies in designing responsive and easy to use interfaces that are supported by robust backend solutions. I have worked with several development stacks and have completed various university co-op work term placements that focused primarily on web development. With experience developing everything from static webpages to data-driven single page web applications and RESTful APIs, web development is my passion and always provides new learning experiences at home and in the work place."},{title:"Front-End Development",body:"HTML, CSS, SASS, JavaScript, jQuery, AngularJS, ReactJS, VueJS",icon:"fa-code",description:"I strive to develop professional, response front-ends with special emphasis on UI/UX. My websites and web apps scale to work on various screen sizes on any device that has an internet browser. I have designed and built various websites and have had various university work terms developing data-driven web applications. My specialty lies in using JavaScript frameworks to effectively complement responsive HTML and CSS web user interfaces. Browse some of my projects below to view some of the web applications I tinkered together on my spare time."},{title:"Back-End Development",body:"Node.js, Python, PHP, JSP, ASP.NET",icon:"fa-terminal",description:"I focus on developing robust and secure backend solutions to websites and applications. With years of experience working with server side technologies, I have developed a strong sense of best practises and design patterns corresponding to effective web backends. I have experience designing and developing secure RESTful API solutions for large scale web applications, and creating scalable automated platforms that can manage large quantities of data effectively and efficiently."},{title:"Databases",body:"MySQL, Firebase, Mongo DB, ElasticSearch",icon:"fa-database",description:"With years experience developing backend solutions, I have obtained a firm understanding of both SQL and NoSQL databases and their corresponding CRUD (Create, Retrieve, Update, Delete) operations. I have worked with both structured and unstructured data and have experience designing databases for large scale applications. I have experience building MySQL store procedures and have a good understanding of relational data. My experience with NoSQL databases extends from various university co-op work terms where I had to setup and design database solutions to support existing infrastructure. Additionally, I have worked with databases in several projects and university courses at the University of Waterloo."},{title:"Object-Oriented Programming",body:"Java, C#, C++",icon:"fa-laptop",description:"My experience working with object-oriented programming (OOP) languages extends from academic courses. I have taken several engineering courses at the University of Waterloo that had a lab component focusing on OOP (Fundamentals of Programming, Embedded Systems, Algorithms & Data Structures, Operating Systems, Embedded Microprocessor Systems, Compilers, and Software Design & Architectures). I am knowledgeable about various OOP design concepts and strategies, including Objects, Classes, Polymorphism, Inheritance, Abstraction, and Encapsulation. "},{title:"Quality Assurance",body:"Karma, Jasmine, jUnit, qUnit",icon:"fa-bug",description:"Quality Assurance (QA) is a vital part to any application. I have had first hand experience working with a QA department to help improve existing testing structures and efficiency using automation. I have experience building an automated QA pipeline that streamlines end to end testing using Karma, Jasmine, jUnit, and Selenium. Quality Assurance is definitely a skill I am constantly improving as I continue to work on projects that are starting to focus more on Test Drive Development."},{title:"Game Development",body:"Action Script 3.0, JavaScript, jQuery",icon:"fa-gamepad",description:"One of my university co-op work terms was as a Software Developer Intern on the Lesson Activity Builder team at SMART Technologies. During this employment I worked with modern web technologies to create interactive educational games for SMART Boards. The games consisted of interactive interactive touch and drag, physics simulation, and many fun animations supported by a complex and robust game engine. Further back, in high school computer science, I had toe opportunity to create several Flash based games using Action Script 3.0. The games primarily consisted of basic animations supported by standard algorithmic techniques to create challenging and amusing games. Game development is a very time consuming yet addicting industry and I hope to gain more experience in this area in the future."},{title:"Animation",body:"Adobe Flash, Action Script 3.0",icon:"fa-bullhorn",description:"My knowledge of animation and Flash development is based on my high school computer science courses. During these courses we worked with Adobe Flash Professional and Action Script to design and develop Flash animations and games. I was also employed by an online media company SooToday.com as a Flash Developer. I worked in the advertising department using the Adobe Creative Suite 5.5 to design and develop animated internet advertisements for various local companies."},{title:"Graphic Design",body:"Photoshop, Illustrator, Sketch, Vector Graphics, GIF",icon:"fa-paint-brush",description:"I have had years of experience working with image manipulation tools and vector graphics to design and develop websites and web applications as well as manipulate and enhance photos. During my final years of high school I worked for the online media company SooToday.com as a Flash Developer. During this employment I worked in the advertising department using the Adobe Creative Suite 5.5 to design and develop animated internet advertisements for various local companies. I worked extensively with Adobe Photoshop, Illustrator, and Flash Professional to design each advertisement from scratch to meet the customers needs."}]}}),angular.module("portfolioApp").factory("Timeline",function(){return{more:!0,showMoreEvents:function(){this.more=!1,angular.forEach(this.events,function(a){a.extra=!1})},events:[{extra:!1,badgeClass:"badge-green",badgeIconClass:"fa-code",title:"Software Engineering Intern",small:"NVIDIA",content:"",image:"nvidia.png",date:"Sept. 2017 - Dec. 2017",location:"Santa Clara CA, USA",site:"http://www.nvidia.com/"},{extra:!1,badgeClass:"badge-green",badgeIconClass:"fa-code",title:"Software Engineering Intern",small:"NVIDIA",content:"Built Kerberos as a Service; enabling Kerberos authentication in NVIDIA Grid network file systems. The integration improved network security by using secret key cryptography communication between clients.<br/><br/>Developed a scratch storage web service in ASP.NET capable of providing expandable VHDX storage on demand. The service played a vital role in giving NVIDIA GeForce Now the ability to stream gaming platforms in the cloud.<br/><br/>Used Vue.js 2.0 and Node.js to design and develop a self-service web portal that improved the NVIDIA DGX-1 Saturn V user on-boarding experience.",image:"nvidia.png",date:"Jan. 2017 - April 2017",location:"Santa Clara CA, USA",site:"http://www.nvidia.com/"},{extra:!1,badgeClass:"badge-purple",badgeIconClass:"fa-code",title:"Software Developer",small:"SMART Technologies",content:"Designed and developed an interactive web based educational game for SMART Boards that placed first in the company wide intern project competition and will be included as part of the next SMART Lesson Activity Builder release. The game was an interactive quiz game based on teacher defined content that emphasized learning while encouraging class participation and student engagement.<br /><br/>Developed various features and stability improvements to the SMART Lesson Activity Builder game engine.<br /><br/>Redesigned the SMART Lesson Activity Builder iOS native application for a new sign-in workflow that decreases the length of time required for students to join an activity from their native devices.<br/><br/>Built a student progress tracker in ReactJS and Node.js during the SMART Exemplary Educators Summit Hackathon",image:"smart.png",date:"May 2016 - August 2016",location:"Calgary AB, Canada",site:"https://home.smarttech.com/"},{extra:!1,badgeClass:"badge-black",badgeIconClass:"fa-code",title:"Software Development Student",small:"Blackberry",content:"Developed a consolidated messaging single page web application for reducing cycles while normalizing communications for the BlackBerry Network Operations Centre (NOC). The tool was built using AngularJS while interfacing with a PHP REST API and structured to be scalable for use with any template messaging solution. <br /><br />Actively participated in the development of a PHP RESTful API solution to predefined endpoints. Helped define a scalable model-view-controller structure for ease of extensibility and security.<br /><br /> Contributed to the BlackBerry Service Assurance Solutions team by developing an extension to a landing page web application that visualizes service alert data. The app now allows users to associate alerts with actions that define how to resolve the alert. Additionally, the extension included the ability to search, browse, create, read, update, and delete, actions and alert links. The extension was developed using AngularJS with ElasticSearch database integration.",image:"blackberry.png",date:"Sept. 2015 - Dec. 2015",location:"Waterloo ON, Canada",site:"http://ca.blackberry.com/"},{extra:!1,badgeClass:"badge-black",badgeIconClass:"fa-code",title:"Systems Software Development Student",small:"Blackberry",content:"Contributed to the BlackBerry Service Assurance Solutions team by participating in the creation of a unified event-driven automated platform for managing alert workflows using various DevOps micro-services and StackStorm integrations.<br><br>Developed an admin tool single page web application for managing the BlackBerry Networks Operation Centre’s (NOC) monitoring wall. The app was built using AngularJS supported by a PHP REST API.<br><br>Helped improve productivity by integrating JavaScript task management and automation into web applications using GruntJS. Code validation, end-to-end testing, and automatic deployment are just a few of the many tasks merged into automatic processes.",image:"blackberry.png",date:"Jan. 2015 - April 2015 ",location:"Waterloo ON, Canada",site:"http://ca.blackberry.com/"},{extra:!1,badgeClass:"badge-orange",badgeIconClass:"fa-code",title:"Front-End Developer",small:"2020 Technologies",content:"Used JavaScript MEAN Full-Stack development to create a dashboard web application to be used for testing many aspects of 2020 Technologies' industry leading interior design software.<br><br>Worked in collaboration with the Quality Assurance department to help improve the existing testing structure and efficiency using automation.",image:"2020.png",date:"May 2014 - July 2014",location:"Montreal QC, Canada",site:"https://www.2020spaces.com/"},{extra:!1,badgeClass:"badge-eng-purple",badgeIconClass:"fa-graduation-cap",title:"Computer Engineering",small:"University of Waterloo",content:"I am currently pursuing a Bachelor of Applied Science (BASc) in Computer Engineering at the University of Waterloo. It is a five year co-op program consisting of alternating four month work and study terms. Computer Engineering combines the all the strengths of Electrical Engineering with those of Computer Science. Our courses focus on everything from electrical systems and chip design through to software development, networks, and communications.",image:"uofw.png",date:"Sept. 2013 - Present",location:"Waterloo ON, Canada",site:"https://uwaterloo.ca/"},{extra:!0,badgeClass:"badge-blue",badgeIconClass:"fa-graduation-cap",title:"High School Diploma",small:"Superior Heights C&VS",content:"I graduated from the French Immersion program at Superior Heights C&VS in Sault Ste. Marie Ontario. I was on the Ontario Scholar Honour Role each year with a cumulative average above 90%. I was awarded a Certificate of Excellence in Computer Science for achieving the highest mark in 12th grade University Computer Science (ICS4U) as well as the Computer & Business Award for achieving the top mark in business and computer science throughout all four years of high school.  ",image:"superiorheights.gif",date:"June 2013",location:"Sault Ste. Marie ON, Canada",site:"http://www.superiorheights.com/"},{extra:!0,badgeClass:"badge-other-blue",badgeIconClass:"fa-paint-brush",title:"Flash Developer",small:"SooToday.com",content:"SooToday.com is the leading online news company in Sault Ste. Marie, Ontario with over 60,000 average daily visits. During this employment I worked in the advertising department using the Adobe Creative Suite 5 to design and develop animated internet advertisements for various local companies.",image:"sootoday.svg",date:"June 2012 - Sept. 2013",location:"Sault Ste. Marie ON, Canada",site:"https://www.sootoday.com/"},{extra:!0,badgeClass:"badge-red",badgeIconClass:"fa-video-camera",title:"Camera Operator",small:"Soo Greyhounds",content:"The Soo Greyhounds are Sault Ste. Marie's local OHL hockey team. During this employment I worked on the media team as a camera operator. I filmed various hockey games live at Sault Ste. Marie’s Essar Center. The film for each game was streamed live on the Jumbotron and on SooGreyhounds.com. Parts were also often re-mastered for highlight reels and intro videos.",image:"soogreyhounds.png",date:"Oct. 2012 - April 2013",location:"Sault Ste. Marie ON, Canada",site:"http://www.soogreyhounds.com/"},{extra:!0,badgeClass:"badge-black",badgeIconClass:"fa-gavel",title:"Court Runner",small:"Willson, Carter",content:"Willson, Carter Barristers & Solicitors is a long established litigation law firm in Sault Ste. Marie, Ontario with special emphasis on criminal and family matters. During this employment I worked as a court runner. I delivered, filed, certified, and issued court documents. Also delivered mail, opened and closed files, did banking and other errands. In addition I created their website www.willsoncarter.com and provided technical support.",image:"willsoncarter.png",date:"Sept. 2009 - Aug. 2013",location:"Sault Ste. Marie ON, Canada",site:"http://murdochcarter.com/"}]}}),angular.module("portfolioApp").factory("Projects",function(){return{projects:[{name:"Twitter Vibes",image:"twittervibes.svg",modal:{title:"Twitter Vibes",content:"Twitter Vibes is a MEAN web app that searches and analyzes recent tweets based on a provided query. The tweets are classified as either positive, negative, or neutral depending on the results of sentiment analysis.",icon:"twittervibes.svg",image:"twittervibes_screenshot.jpg",github:"https://github.com/maxcarter/TwitterVibes",demo:"http://twittervibes-mcarter.mybluemix.net"}},{name:"REST UP",image:"rest.svg",modal:{title:"REST UP",content:"A customizable Representational State Transfer (REST) Application Program Interface (API) and routing engine designed to provide a quick set of tools for developers to quickly build their own API.",icon:"rest.svg",image:"",github:"https://github.com/maxcarter/REST-UP",demo:""}},{name:"NRAPI",image:"nrapi.svg",modal:{title:"NRAPI",content:"NRAPI (Node.js RESTful API) is a simple Node.js RESTful API solution created using the Node-Restful library with Mongo DB integrations.",icon:"nrapi.svg",image:"",github:"https://github.com/maxcarter/NRAPI",demo:""}},{name:"Law Office of Murdoch Carter",image:"saultstemarielawyers.svg",modal:{title:"MurdochCarter.com",content:"MurdochCarter.com is a responsive website for the Law Office of Murdoch J. Carter in Sault Ste. Marie Ontario. Built in HTML, CSS, jQuery and PHP, The site features an adaptive design that adjusts to various screen sizes to work on any device.",icon:"saultstemarielawyers.svg",image:"saultstemarielawyers_screenshot.jpg",github:"",demo:"http://saultstemarielawyers.com/"}},{name:"Code Bat",image:"codebat.svg",modal:{title:"Code Bat",content:"Code Bat is a tutorial website that provides tips and tricks for various programming languages. The site was originally developed as a school project in high school but has become a place where I can experiment with new technologies. The website is still unfinished and is constantly subject to theme change as I experiment with different web designs. CodeBat was made using HTML, CSS, JavaScript, jQuery and PHP.",icon:"codebat.svg",image:"codebat_screenshot.jpg",github:""}},{name:"Lomas Carpentry",image:"lomascarpentry.svg",modal:{title:"LomasCarpentry.com",content:"LomasCarpentry.com is a website designed and developed for Carpenter David Lomas in Sault Ste. Marie Ontario. The site was built as a Weebly Theme using HTML, CSS, and jQuery.",icon:"lomascarpentry.svg",image:"lomascarpentry_screenshot.jpg",github:"",demo:"http://www.lomascarpentry.com/"}},{name:"Are You Nuts?",image:"nuts.svg",modal:{title:"Are You Nuts?",content:"Are You Nuts? is a Flash tower defence game in which squirrels must defend their tree from owls and other birds. This game was created during Grade 12 Computer Science class ICS4U at Superior Heights C&VS in Sault Ste. Marie, Ontario. The game was created using Action Script 3.0 and Adobe Flash Professional.",icon:"nuts.svg",image:"are-you-nuts_screenshot.jpg",github:"https://github.com/maxcarter/Are-You-Nuts",demo:"http://maxwellcarter.com/#!/game/are-you-nuts"}},{name:"Crokinole",image:"crokinole.svg",modal:{title:"Crokinole: The Forgotten Game",content:"Crokinole: The Forgotten Game is a Flash remake of the classic tabletop game Crokinole. This game was created during Grade 12 Computer Science ICS4U at Superior Heights C&VS in Sault Ste. Marie, Ontario. The game was created using Action Script 3.0 and Adobe Flash Professional.",icon:"crokinole.svg",image:"",github:"https://github.com/maxcarter/Crokinole",demo:"http://maxwellcarter.com/#!/game/crokinole"}},{name:"Vaporizer",image:"vaporizer.svg",modal:{title:"Vaporizer",content:"Vaporizer is a survival shooter game developed in Flash. The object of the game is to vaporize as many alien ships as possible before they vaporize you. This game was created during Grade 11 Computer Science class ICS3U at Superior Heights C&VS. The game was made using Action Script 2.0 and Adobe Flash Professional.",icon:"vaporizer.svg",image:"vaporizer.jpg",github:"https://github.com/maxcarter/Vaporizer",demo:"http://maxwellcarter.com/#!/game/vaporizer"}}]}}),angular.module("portfolioApp").factory("Request",["$http","$q",function(a,b){return{request:function(c,d,e,f,g){var h=b.defer();e=e?e:{},g=g?g:{"Content-Type":"application/json"};var i={method:c,url:d,params:e,data:f,headers:g};return a(i).then(function(a){console.log({url:d,success:!0,method:c,request:i,response:a}),h.resolve(a)},function(a){console.log({url:d,success:!1,method:c,request:i,response:a}),h.reject(a)}),h.promise},get:function(a,b,c){return this.request("GET",a,b,c)},put:function(a,b,c,d){return this.request("PUT",a,c,b,d)},post:function(a,b,c,d){return this.request("POST",a,c,b,d)},"delete":function(a,b,c){return this.request("DELETE",a,b,c)}}}]),angular.module("portfolioApp").factory("Banner",["$alert",function(a){return{alert:function(b,c){a({content:b.data.message,type:c,show:!0,container:"#alert-container"})}}}]),angular.module("portfolioApp").directive("flowtype",function(){return{restrict:"A",link:function(a,b,c){var d={};d.maximum=c.maximum||9999,d.minimum=c.minimum||1,d.minFont=c.minFont||1,d.maxFont=c.maxFont||9999,d.fontRatio=c.fontRatio||35,d.lineRatio=c.lineRatio||1.45,b.flowtype(d)}}}),angular.module("portfolioApp").directive("readMore",function(){var a=["$scope","$filter",function(a,b){a.validateLimit=function(){a.rmLimit=a.rmLimit&&a.rmLimit<=0?100:a.rmLimit},a.toggle=function(){a.validateLimit(),a.displayMore=!a.displayMore,a.text.content=b("limitTo")(a.rmText,a.displayMore?a.rmText.length:a.rmLimit),a.text.link=a.displayMore?a.text.less:a.text.more},a.displayMore=!0,a.text={dots:"...",more:a.rmMoreText||"Read More",less:a.rmLessText||"Read Less"},a.styles={dots:a.rmDotsClass,link:a.rmLinkClass},a.toggle()}];return{restrict:"AE",scope:{rmText:"@",rmLimit:"@",rmMoreText:"@",rmLessText:"@",rmDotsClass:"@",rmLinkClass:"@"},templateUrl:"views/tpl-readmore.html",controller:a}}),angular.module("portfolioApp").controller("GameCtrl",["$scope","$routeParams","$window","Games",function(a,b,c,d){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"],a.flashGame=d[b.id]?d[b.id]:void 0,d[b.id]||(c.location.href="404.html")}]),angular.module("portfolioApp").directive("flashEmbed",function(){return{restrict:"A",replace:!0,template:["",'<object data="{{src}}" type="application/x-shockwave-flash" id="myflash" width="{{width}}" height="{{height}}">','<param name="movie" value="{{src}}" />','<param name="bgcolor" value="{{background}}" />','<param name="height" value="{{height}}" />','<param name="width" value="{{width}}" />','<param name="quality" value="high" />','<param name="menu" value="false" />','<param name="allowscriptaccess" value="samedomain" />','<p> Adobe <a href = "http://get.adobe.com/flashplayer/"> Flash Player </a> is required to view this content.</p > ',"</object>"].join(""),scope:{width:"@",height:"@",src:"@",background:"@"}}}),angular.module("portfolioApp").factory("Games",function(){return{vaporizer:{name:"Vaporizer",width:550,height:400,src:"games/vaporizer.swf",background:"#000000",instructions:"W, A, S, D to move around and jump. Mouse to aim. Click to shoot. The objective of the game is to eliminate as many alien spaceships as possible."},"are-you-nuts":{name:"Are You Nuts?",width:750,height:400,background:"#000000",src:"games/are-you-nuts.swf",instructions:"Mouse to aim. Click and hold to shoot at various power levels. The objective of the game is to protect your nest from birds."},chalkboard:{name:"Max's Chalkboard",width:550,height:400,background:"#ffffff",src:"games/chalkboard.swf",instructions:"Click and drag on the board to draw."},mouse:{name:"Mouse",width:550,height:400,background:"#ffffff",src:"games/mouse.swf",instructions:"Hold space to move in the direction of the cursor."},crokinole:{name:"Crokinole",width:571,height:500,background:"#000000",src:"games/crokinole.swf",instructions:"See in-game instructions."}}}),angular.module("portfolioApp").run(["$templateCache",function(a){a.put("views/game.html",'<div class="header" ng-if="flashGame"> <div class="navbar navbar-custom navbar-fixed-top" role="navigation"> <div class="container"> <a class="navbar-brand" href="http://maxwellcarter.com" target="_self"><strong>MC</strong> Portfolio</a> <ul class="nav navbar-nav navbar-right"> <li><a href="https://ca.linkedin.com/in/maxwellcarter" target="_blank"><i class="fa fa-linkedin-square"></i> <span class="linkName">Linkedin</span></a></li> <li><a href="https://github.com/maxcarter" target="_blank"><i class="fa fa-github"></i> <span class="linkName">GitHub</span></a></li> </ul> </div> </div> </div> <div class="game-content" ng-if="flashGame"> <div class="container"> <div class="row"> <div class="col-md-12" align="center"> <h1 align="center">{{flashGame.name}}</h1> <div flash-embed src="{{flashGame.src}}" width="{{flashGame.width}}" height="{{flashGame.height}}" background="{{flashGame.background}}"></div> <p style="max-width: 500px">{{flashGame.instructions}}</p> </div> </div> </div> </div>'),a.put("views/main.html",'<div ng-include="\'views/navbar.html\'"></div> <div class="custom-header"> <div class="container"> <div class="col-md-9"> <h1>Maxwell Carter</h1> <p> <span class="rwd-line">4B Computer Engineering</span> <span class="no-mobile">|</span> <span class="rwd-line">University of Waterloo</span> </p> </div> <div class="col-md-3"> </div> </div> </div> <div class="custom-content"> <div class="container"> <div class="row"> <div class="col-md-3 show-nav"> <div ng-include="\'views/sidenav.html\'"></div> </div> <div class="col-md-9"> <section class="custom-section" id="welcome" ng-include="\'views/section-welcome.html\'"></section> <section class="custom-section" id="about" ng-include="\'views/section-about.html\'"></section> <section class="custom-section" id="skills" ng-include="\'views/section-skills.html\'"></section> <section class="custom-section" id="education" ng-include="\'views/section-education.html\'"></section> <section class="custom-section" id="timeline" ng-include="\'views/section-timeline.html\'"></section> <section class="custom-section" id="projects" ng-include="\'views/section-projects.html\'"></section> <!-- <section class="custom-section" id="contact" ng-include="\'views/section-contact.html\'"></section> --> </div> </div> </div> </div> <div class="footer"> <div class="copyright"> <i class="fa fa-copyright"></i> Copyright | Created by Maxwell Carter </div> <div class="fork-on-github"> <a href="https://github.com/maxcarter/Portfolio" target="_blank"> <i class="fa fa-github"></i><span>Fork on GitHub</span> </a> </div> </div>'),a.put("views/navbar.html",'<div class="header"> <div class="navbar navbar-custom navbar-fixed-top" role="navigation"> <div class="container"> <a class="navbar-brand custom-bars" href="" bs-aside data-container="body" data-placement="left" data-animation="am-slide-left" data-template-url="views/tpl-sidebar-aside.html"><i class="fa fa-bars"></i></a> <a class="navbar-brand" href="#thetop" du-smooth-scroll offset="0"><strong>MC</strong> Portfolio</a> <ul class="nav navbar-nav navbar-right"> <li><a href="https://ca.linkedin.com/in/maxwellcarter" target="_blank"><i class="fa fa-linkedin-square"></i> <span class="linkName">Linkedin</span></a></li> <li><a href="https://github.com/maxcarter" target="_blank"><i class="fa fa-github"></i> <span class="linkName">GitHub</span></a></li> </ul> </div> </div> </div>'),a.put("views/section-about.html",'<h1 class="page-header">About</h1> <div class="invisible" when-visible="animateElementIn" when-not-visible="animateElementOut" flowtype min-font="15" max-font="20" font-ratio="35" line-ratio="1.5" minimum="1" maximum="9999"> <img class="profile-image" src="images/maxwellcarter.jpg"> <p>I am a technology enthusiast with a passion for software development. My interest lies in the areas of Web Development, Cloud Computing, Artificial Intelligence, Software Architecture, and DevOps. I have experience developing software in multiple domains at various technology companies throughout Canada and in Silicon Valley. On my spare time I enjoy working on side projects, reading, and playing hockey.</p> <p>I am currently pursuing a Bachelor of Applied Science (BASc) in Honours Computer Engineering at the University of Waterloo. It’s a five year co-op program consisting of alternating four month work and study terms. In Computer Engineering we study everything from electrical systems and hardware design through to software development, networks, and communications. I am an enthusiastic and quick learner who always strives to go beyond expectations. </p> </div>'),a.put("views/section-contact.html",'<h1 class="page-header">Contact</h1> <form class="form-horizontal invisible" when-visible="animateElementIn" when-not-visible="animateElementOut"> <div id="alert-container"></div> <div class="form-group"> <label class="col-sm-2 control-label">Name</label> <div class="col-sm-10"> <input ng-model="formdata.name" type="text" class="form-control" placeholder="Full Name"> </div> </div> <div class="form-group"> <label class="col-sm-2 control-label">Email</label> <div class="col-sm-10"> <input ng-model="formdata.email" type="text" class="form-control" placeholder="Email"> </div> </div> <div class="form-group"> <label class="col-sm-2 control-label">Message</label> <div class="col-sm-10"> <textarea placeholder="Your Message..." ng-model="formdata.message" class="form-control" rows="6"></textarea> </div> </div> <div class="form-group"> <div class="col-sm-offset-2 col-sm-10"> <button ng-disabled="loading" type="submit" class="btn btn-lg btn-primary" ng-click="submit(formdata)">Send</button> <i ng-if="loading" class="fa fa-refresh fa-spin fa-3x contact-refresh"></i> </div> </div> </form>'),a.put("views/section-education.html",'<h1 class="page-header">Education</h1> <div class="row invisible" when-visible="animateElementIn" when-not-visible="animateElementOut"> <div class="col-sm-5"> <a class="education-banner" href="https://uwaterloo.ca/" target="_blank"><img src="images/uwaterloo-vertical.png"></a> </div> <div class="col-sm-7 education-info"> <h2>Honours Computer Engineering</h2> <h3>Bachelor of Applied Science (BASc)</h3> <h3>Sept. 2013 - April 2018</h3> <a href="https://uwaterloo.ca/electrical-computer-engineering/" target="_blank" class="btn btn-lg btn-default btn-no-border hover-blue"> <span>Find Out More</span> </a> </div> </div>'),a.put("views/section-projects.html",'<h1 class="page-header">Projects</h1> <div class="custom-card-wrapper"> <div class="custom-card" ng-repeat="project in projects.projects" bs-modal="project.modal" data-template-url="views/tpl-projects-modal.html" data-container="body" data-animation="am-fade-and-scale"> <div class="custom-card-container invisible" when-visible="animateElementIn" when-not-visible="animateElementOut"> <img ng-src="images/{{project.image}}"> <div class="card-title"> <div class="card-name">{{project.name}}</div> </div> </div> </div> </div>'),a.put("views/section-skills.html",'<h1 class="page-header">Skills</h1> <div class="row no-tablet"> <div class="col-md-6"> <div ng-show="skills.active > -1" class="custom-skill invisible" when-visible="animateElementIn" when-not-visible="animateElementOut"> <h3><i class="fa {{skills.panels[skills.active].icon}}"></i> {{skills.panels[skills.active].title}}</h3> <p flowtype min-font="15" max-font="20" font-ratio="35" line-ratio="1.5" minimum="1" maximum="9999">&nbsp; &nbsp; &nbsp; &nbsp; {{skills.panels[skills.active].description}}</p> </div> </div> <div class="col-md-6"> <div ng-include="\'views/tpl-accordion.html\'" class="invisible" when-visible="animateElementIn" when-not-visible="animateElementOut"></div> </div> </div> <div class="row no-desktop"> <div class="col-md-12"> <div ng-include="\'views/tpl-skills.html\'" class="invisible" when-visible="animateElementIn" when-not-visible="animateElementOut"></div> </div> </div>'),
a.put("views/section-timeline.html",'<h1 class="page-header">Timeline</h1> <div ng-include="\'views/tpl-timeline.html\'"></div>'),a.put("views/section-welcome.html",'<h1 class="page-header">Welcome</h1> <div class="invisible" when-visible="animateElementIn" when-not-visible="animateElementOut"> <div flowtype min-font="15" max-font="20" font-ratio="35" line-ratio="1.5" minimum="1" maximum="9999"> <p>Welcome to my portfolio website! My name is <strong>Maxwell Carter</strong> and I am a Computer Engineering student from the University of Waterloo. I am currently looking for employment at a fast-paced technology company. I encourage you to reach-out by contacting me using the links below. Cheers!</p> </div> <!-- <a href="#contact" du-smooth-scroll offset="50" class="btn btn-lg btn-default btn-no-border hover-blue margin-small">\n        <i class="fa fa-envelope"></i><span class="no-mobile"> Email</span>\n    </a> --> <a href="https://ca.linkedin.com/in/maxwellcarter" target="_blank" class="btn btn-lg btn-default btn-no-border hover-blue margin-small"> <i class="fa fa-linkedin-square"></i><span class="no-mobile"> Linkedin</span> </a> <a href="docs/Maxwell_Carter_Resume.pdf" target="_blank" class="btn btn-lg btn-default btn-no-border hover-blue margin-small"> <i class="fa fa-thumb-tack"></i><span class="no-mobile"> Resume</span> </a> </div>'),a.put("views/sidenav.html",'<nav class="bs-docs-sidebar" role="complementary" data-offset-top="-80" bs-affix> <ul id="sidebar" class="nav nav-stacked"> <li ng-repeat="element in sidenav.elements" data-target="{{element.target}}" bs-scrollspy> <a href="{{element.target}}" ng-click="$hide()" du-smooth-scroll offset="50">{{element.name}}</a> <ul ng-show="element.subelements.length > 0" class="nav nav-stacked"> <li ng-repeat="e in element.subelements" data-target="{{e.target}}" bs-scrollspy> <a href="{{e.target}}" ng-click="$hide()" du-smooth-scroll offset="50">{{e.name}}</a> </li> </ul> </li> </ul> </nav>'),a.put("views/tpl-accordion.html",'<div class="panel-group" ng-model="skills.active" role="tablist" aria-multiselectable="true" bs-collapse> <div class="panel panel-dark" ng-repeat="panel in skills.panels"> <div class="panel-heading" role="tab" bs-collapse-toggle> <h4 class="panel-title">{{panel.title}}</h4> </div> <div class="panel-collapse" role="tabpanel" bs-collapse-target> <div class="panel-body"> {{panel.body}} </div> </div> </div> </div>'),a.put("views/tpl-projects-modal.html",'<div class="project-modal modal" tabindex="-1" role="dialog"> <div class="modal-dialog"> <div class="modal-content"> <div class="modal-header" ng-show="title"> <button type="button" class="close" ng-click="$hide()">×</button> <img class="project-icon" align="left" ng-show="icon" ng-src="images/{{icon}}"> <h3 class="modal-title">{{title}}</h3></div> <div class="modal-body" ng-show="content"> {{content}} <div ng-show="image" align="center"> <img ng-src="images/{{image}}" class="img-responsive"> </div> </div> <div class="modal-footer"> <button type="button" class="btn btn-default" ng-click="$hide()">Close</button> <a type="button" ng-show="demo" target="_blank" ng-href="{{demo}}" class="btn btn-info"><i class="fa fa-cogs"></i> Demo</a> <a type="button" ng-show="github" target="_blank" ng-href="{{github}}" class="btn btn-primary"><i class="fa fa-github"></i> GitHub</a> </div> </div> </div> </div>'),a.put("views/tpl-readmore.html",'<span ng-show="rmText.length > 0"> <span name="text"> <span ng-bind-html="text.content" style="white-space:pre-wrap"></span> </span> <span name="toggle"> <span ng-class="styles.dots" ng-show="!displayMore">{{text.dots}}</span> <a ng-class="styles.link" ng-click="toggle()">{{text.link}}</a> </span> </span>'),a.put("views/tpl-sidebar-aside.html",'<div class="aside"> <div class="aside-dialog"> <div class="aside-content"> <div class="aside-header"> <button type="button" class="close" ng-click="$hide()">×</button> <h4 class="aside-title ng-binding">Navigation</h4></div> <div class="aside-body"> <div ng-include="\'views/sidenav.html\'"></div> </div> </div> </div> </div>'),a.put("views/tpl-skills-modal.html",'<div class="skills-modal modal" tabindex="-1" role="dialog"> <div class="modal-dialog"> <div class="modal-content"> <div class="modal-header" ng-show="title"> <button type="button" class="close" ng-click="$hide()">×</button> <h3 class="modal-title custom-skill"><i class="fa {{icon}}"></i> {{title}}</h3></div> <div class="modal-body" ng-show="description"> <div class="well pull-bottom"><center>{{body}}</center></div> {{description}} </div> <div class="modal-footer"> <button type="button" class="btn btn-default" ng-click="$hide()">Close</button> </div> </div> </div> </div>'),a.put("views/tpl-skills.html",'<div class="panel-group" ng-model="skills.active"> <div class="panel panel-dark" ng-repeat="panel in skills.panels"> <div class="panel-heading" bs-modal="panel" data-template-url="views/tpl-skills-modal.html" data-container="body" data-animation="am-fade-and-scale"> <h4 class="panel-title">{{panel.title}}</h4> </div> </div> </div>'),a.put("views/tpl-timeline.html",'<timeline> <timeline-event ng-repeat="event in timeline.events" ng-show="!event.extra"> <timeline-badge class="{{event.badgeClass}} invisible" when-visible="animateElementIn" when-not-visible="animateElementOut"> <i class="fa {{event.badgeIconClass}}"></i> </timeline-badge> <timeline-panel class="invisible" when-visible="animateElementIn" when-not-visible="animateElementOut"> <timeline-heading> <div align="center" ng-show="event.image"> <a href="{{event.site}}" target="_blank"> <img class="img-responsive" ng-src="images/{{event.image}}"> </a> </div> <br> <h4 class="page-header">{{event.title}} <small>{{event.small}}</small></h4> {{event.content.size}} </timeline-heading> <p read-more rm-text="{{event.content}}" rm-limit="150" rm-link-class="block btn btn-default"></p> <p class="cd-date">{{event.date}}<br>{{event.location}}</p> </timeline-panel> </timeline-event> <timeline-event ng-show="timeline.more"> <timeline-badge ng-click="timeline.showMoreEvents()" class="timeline-toggle invisible hover-blue" when-visible="animateElementIn" when-not-visible="animateElementOut"> More </timeline-badge> <timeline-panel class="invisible"></timeline-panel> </timeline-event> </timeline>')}]);