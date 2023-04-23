<template>
    <div>
      <nav class = "navbar">
        <div class = "container">
          <a href = "home.vue" class = "navbar-brand">KoreaTalk.</a>
          <div class = "navbar-nav">
            <router-link to = "/">Home</router-link>
            <router-link to = "/blog">Blog</router-link>
            <router-link to = "/about">About</router-link>
            <router-link to = "/gallery">Gallery</router-link>
            <router-link to = "/contact">Contact</router-link>
    
          </div>
        </div>
      </nav>
      <div>
        <p class="title">{{ title }}</p>
      </div>
      <div class="con">
        <div>
            <img src = "../assets/IMG_5695.png">
            <h4>I found this at a convinience store. They are a popular gaming group "T1", so I was surprised to see them as food endorsers.</h4>
        </div>
        <div>
            <img src = "../assets/IMG_5624.png">
            <h4>"Love locks", popular amongst couples, I've never felt so single in my entire life.</h4>
        </div>
        <div>
            <img src = "../assets/IMG_5622.png">
            <h4>Even a modern place like Korea, there is still vandalisms laying around.</h4>
        </div>
    </div>
    </div>
      
      
                
    </template>
    
    <script>
    export default {
      name: 'blog',
      data() {
        return {
          title: 'BLOG'
        };
      }
    };
    </script>
    
    <style>
    .title{
      font-size: 50px;
      color: #4B1F0E;
      text-align: center;
    }
    
    *{
      background: #DFCCAF;
    }
    
    /*Navbar starts*/
    .container{
      max-width: 1320px;
      margin: 0 auto;
      padding: 0 1.2rem;
      background: rgba(0, 0, 0, 0.6);
    }
    
    .navbar{
      background: rgba(0, 0, 0, 0.6);
      padding: 1.2rem;
    }
    
    .navbar-brand{
      color: #fff;
      font-size: 2rem;
      display: block;
      text-align: center;
      text-decoration: none;
      font-family: var(--Playfair);
      letter-spacing: 1px;
      background: rgba(0, 0, 0, 0.6);
    }
    
    .navbar-nav{
      padding: 0.8rem 0 0.2rem 0;
      text-align: center;
      background: rgba(0, 0, 0, 0.6);
    }
    
    .navbar-nav a{
      text-transform: uppercase;
      font-family: var(--Roboto);
      letter-spacing: 1px;
      font-weight: 500;
      color: #fff;
      text-decoration: none;
      display: inline-block;
      padding: 0.4rem 0.1rem;
      letter-spacing: 3px;
      transition: opacity 0.5s ease;
      padding-right: 1.2rem;
      padding-left: 1.2rem;
      background: rgba(0, 0, 0, 0.6);
    }
    /*Navbar ends*/
    
    </style>