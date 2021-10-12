import portfolioImg from '../Images/assets/portfolioImg.png'
import restaurantImg from '../Images/assets/restaurant.webp'
import weatherImg from '../Images/assets/weather.jpg'
import memoryImg from '../Images/assets/Memories.png'
import pizzaImg from '../Images/assets/pizza.jpg'
import covidImg from '../Images/assets/covid.jpg'
import expenseImg from '../Images/assets/expense.jpg'

export const projectList = [
    {
        name:"My Portfolio",
        description:"My first ever portfolio after learning basics of web development that helped to implement the fundamentals",
        technologies:"HTML, CSS, JavaScript",
        source:"http://www.sangitabarala.com/",
        image: portfolioImg
    },
    {
    name:"Restaurant App",
    description:"Its a basic restaurant app in which you can filter your meal according to meal time, also can add any meal category easily",
    technologies:"React, Bootstrap",
    source:"https://github.com/SangitaBarala/React-Basic-Restaurant-App",
    image:restaurantImg
},
    {
        name:"Weather App",
        description:"Its an real time app in which you can check the updated weather worldwide.",
        technologies:"React, Bootstrap, axios, open-weather API",
        source: "",
        image: weatherImg
    },
    {
        name:"Memory App",
        description:"Its an app in which you can create a special memory with the date. You can also update and delete it.",
        technologies:"React, Bootstrap, axios, Node, Express",
        image:memoryImg
    },
    {
        name:"Pizza App",
        description:"Its an app in which you can create a special memory with the date. You can also update and delete it.",
        technologies:"c#, visual basic",
        source: "https://github.com/SangitaBarala/pizza-problem",
        image: pizzaImg
    },
    {
        name:"COVID-19 Tracker App",
        description:"Its an app in which you can create a special memory with the date. You can also update and delete it.",
        technologies:"Android app in JAVA running on (Java Virtual Machines)",
        source: "https://github.com/SangitaBarala/Covid-19-Tracker",
        image: covidImg
    },
    {
        name:"Expense Tracker App",
        description:"Its an app in which you can create a special memory with the date. You can also update and delete it.",
        technologies:"Android app in JAVA running on (Java Virtual Machines)",
        source: "https://github.com/SangitaBarala/Expense-Tracker",
        image: expenseImg
    },

]