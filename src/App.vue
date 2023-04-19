<template>
<div id="header">
<p id="name">Allen Carlo S. Serrano</p>
         <a href="mailto:deepsukhwani@gmail.com" target="_blank"><p id="email">allencarlo32@gmail.com</p></a>
     </div>
     <div class="left">
     </div>
     <div class="right">
            <h3>WEB DEVELOPER</h3>
            <h3>Profile</h3>
            <p>
            <ul>
                <li>As a graduate web developer, I have experience in developing and maintaining web applications using HTML, CSS, and JavaScript. I am skilled in utilizing various web development frameworks and libraries such as with Vue.js. I have experience working in both front-end and back-end development. Additionally, I am always eager to learn and stay up-to-date with the latest web development trends and technologies.</li></ul>
            </p>
            
            <h3>Education</h3>
            <table>
                <tr>
                    <td>College</td>
                    <td>Holy Angel University</td>
                    <td>Bachelor of Information Technology</td>
                    <td>2021-2024</td>
                </tr>
                <tr>
                    <td>High-School</td>
                    <td>Holy Angel University</td>
                    <td>Consistent honors</td>
                    <td>2015-2020</td>
                </tr>

            </table>
      
               

            <h3>Technical Skills</h3>
            <p>
            <ul>
                <li>
                <span id="course-name">Operating Systems:</span> DOS, Windows 98, Windows 2000, Windows XP, Windows NT, Windows Server 2003, Windows Vista, Windows 7, Macintosh Computers (OS X), Linux (Ubuntu, Fedora)</li>
                <li>
                <span id="course-name">Application Software:</span> Office 97-2003; Office XP, Office 2007, Office for Mac 2011, iWork ’09, Sage Accounting Software, Sage 50 (Accounting Software), Excel 2003/2007 for Financial Modelling spreadsheets.</li>
                <li>
                <span id="course-name">Programming Skills:</span>HTML, CSS, Python, JavaScript, learning C and C++</li></ul>
            </p>
          
      </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
div
{
    border-radius: 5px;
    }
#header
{
    position: fixed;
    z-index: 1;
    height:40px;
    width: 98%;
    background-color: #668284;
    margin-bottom: 10px
    }

#name {
    float:left;
	margin-left: 20px;
	padding-bottom: 10px;
	font-size: 16px;
	font-family: Verdana, sans-serif;
	color: #ffffff;
}

#email{
    float:right;
    margin-right: 20px;
	padding-bottom: 10px;
	font-size: 16px;
	font-family: Verdana, sans-serif;
	color: #ffffff;
}

#contact
{
    margin-left:45%;
    padding-bottom: 10px;
	font-size: 16px;
	font-family: Verdana, sans-serif;
	color: #ffffff;
    }

a:hover {
    font-weight: bold;
}

.right
{
    float: left;
    margin-top: 50px;
    padding-left:5px;
    /*margin-right: -10px;
    margin-left: 14%;*/
    height: auto;
    width: 99%;
    background-color: #E3EDD8;
    }

/*.left
{
    float: left;
    margin-top: 50px;
    /*margin-right: -90px;
    height: relative;
    width: 10%;
    background-color: #4160E8;
    }*/
    
#footer
{
    height:40px;
    clear:both;
    position: relative;
    background-color: #C1E3E1;
    }
    
h3
{
    text-decoration: underline;
    }

#job-responsibilities
{
    padding: 1px;
    }
.job-title
{
    font-weight: bold;
    }
table
{
    border: 1px dashed black;
    }
td
{
    padding: 2px;
    border: 1px solid #E88741;
    }

#course-name
{
    font-weight:bold;
    }

#company-name
{
    height:2px;
    text-decoration:underline;
    }
#job-title
{
    height: 5px;
    }
.job-duration
{
    float:right;
    }
#heading
{
    font-weight:bold;
    }
</style>
