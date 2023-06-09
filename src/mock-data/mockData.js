import nasaPhoto from "../assets/images/nasa.png";
import yedekparcaDepo from "../assets/images/yedekparcadepo.jpg";
import antalyaSoulScienceSchool from "../assets/images/antalyasoulscienceschool.jpg";
import cilekZamani from "../assets/images/cilekzamani.jpg";
import mareAqua from "../assets/images/mareaqua.png"
import proxolab from "../assets/images/proxolab.png";
import youTube from "../assets/images/youtube.png";
import { FaPhp,FaReact,FaJs,FaCss3, FaBootstrap } from 'react-icons/fa';
import { SiTypescript ,SiTailwindcss } from "react-icons/si";
import {TbSql} from "react-icons/tb"


 const projectsData = [
    {
        "id":"1",
        "projectName":"Yedek Parça Depo", 
        "address":"https://yedekparcadepo.com",
        "type" : "front-end",
        "img" : yedekparcaDepo
    }
        ,
     {
        "id":"2",
        "projectName" : "Antalya Soulscience School",
        "address" : "https://soulscienceschool.com/",
        "type" : "full-stack",
        "img" : antalyaSoulScienceSchool
    }   , 
    {
        "id":"3",
        "projectName" : "Çilek Zamanı",
        "address" : "https://cilekzamani.com",
        "type":"front-end",
        "img" : cilekZamani
    },
    {
        "id":"4",
       "projectName": "Mare Aqua",
       "address": "http://mareaqua.com/",
       "type": "front-end",
       "img" : mareAqua
    },
    {
        "id":"5",
        "projectName": "Proxolab",
        "address": "https://www.proxolab.com/",
        "type": "front-end",
        "img" :proxolab
    },
    {
        "id":"6",
        "projectName" :"Youtube",
        "address": "https://youtube.com",
        "type": "full-stack",
        "img" : youTube
    },
    {
        "id":"7",
        "projectName":"Nasa",
        "address" : "https://www.nasa.gov/",
        "type": "full-stack",
        "img" : nasaPhoto
    }

]

const skillsData = [
    {
        id:"1",
        title :"TypeScript",
        desc: "By using TypeScript, you can write more readable code in projects with multiple developers.",
        component : <SiTypescript size = {180} className="bg-white-600 hover:bg-black" style={{color:"blue"}} />
    },
    {
        id:"2",
        title: "ReactJs",
        desc: "Using React JS, developed various dynamic interfaces with different functionalities.",
        component:<FaReact size={180} className="text-blue-600 hover:text-black text-xl "/>
    },
    {
        id:"3",
        title : "JavaScript",
        desc: "Having a basic knowledge of JavaScript is crucial for effectively using frameworks.",
        component : <FaJs size={180} className="bg-yellow-300 hover:bg-white"/>
    },
    {
        id: "4",
        title: "CSS",
        desc : "You can create customized designs for web pages using CSS.",
        component :  <FaCss3 size={180} className="bg-blue-600 text-white hover:text-black"/>
    },
    {
        id: "5",
        title : "Tailwind CSS",
        desc: "Tailwind CSS enables developers to design UI quickly and consistently during the development process, providing time savings and convenience.",
        component :  <SiTailwindcss size={180} className="bg-blue-600 text-white hover:text-black" />
    },
    {
        id : "6",
        title: "Bootsrap",
        desc : "Bootstrap allows developers to create responsive and mobile-first UI designs easily, with a range of pre-built components and a flexible grid system, speeding up the development process and ensuring consistency across projects.",
        component : <FaBootstrap size={180} className="bg-purple-600 text-white hover:text-black" />

    },
    {
        id:"7",
        title : "PHP",
        desc: "PHP is a server-side scripting language that is widely used for web development, allowing developers to create dynamic and interactive websites and web applications. It offers a wide range of functions and features, making it a popular choice for building various types of web projects",
        component :<FaPhp size={180} className="text-fuchsia-600 hover:text-black text-xl"/>
 
    },
    {
        id:"8",
        title : "SQL",
        desc : "SQL is a powerful tool for managing and manipulating relational databases",
        component : <TbSql size = {180} className="bg-blue-600 text-white hover:text-black"/>

    },
    
  

]

export {projectsData , skillsData};