# Personal Dev Blog created with React (NextJS)

![Blog Screenshot](https://media.discordapp.net/attachments/891214266668036126/907901876513701938/unknown.png?width=1242&height=650)

<p align="right">
  <i>example image of the blog running</i>
</p>

## The Idea

Companies tend to look for personal projects when you lack many years of experience or when they feel like trying to know you better, so a dev blog is a pretty standard idea to show off some of your skills as a developer.

This repository will contain only the **front end** code and responsabilities, I am not running a MVC-style project.

## The Approach

The project utilizes the **Next JS framework** to take advantage of **SEO**, built-in **security** and **usability** it brings to the table when compared to CRA (Create React App). It is also just faster due to it's **static page** nature.

**TypeScript** as the main language was chosen for it's **reliability** when developing a software. It's just way easier when you have the auto completion along with type checking.

The page has been built with **desktop-first** in mind, but it is still responsive to work properly on mobile devices. As for how I do it: [Styled Components](https://styled-components.com/); pretty much [SASS](https://sass-lang.com/) but easier and more convenient.

## Running It Locally

### 1- Requirements

- Make sure you have [Node.js](https://nodejs.org/en/) installed.
- Not a must, but it would be nice to have [Yarn](https://yarnpkg.com/) installed just for convenience

If, for some reason, you still don't have those installed, it is recommended to use a **PACKAGE MANAGER** even if you are a Windows user, because if you wish to remove them later, the package manager (like Chocolatey, or the current built-in winget) will deal with the removal of dependencies and additional trash that can be left behind.

If you are a linux user, just use your distro's main package manager (apt, pacman, etc.)

### 2- Actually running the project

To run it locally, clone the repo and run
`npm install` or `yarn install` to download the dependencies to your node_modules folder.

The project is **currently** using local images, so when trying to run the project it will probably break all of them as the images folder is not being handled by git (it is just not recommended at all). You'll have to change the posts.json file in order to make it work in your machine.

Afterwards, just run `npm start` or `yarn start` and you're good to go
