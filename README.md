# Blog Website

![Blog Screenshot](https://i.imgur.com/Yqj6Cvw.png)

<p align="right">
  <i>example image of the blog running</i>
</p>

## Navigation
- [About](#about)
- [Tools](#tools)
- [Running It Locally](#running-it-locally)
  - [Requirements](#requirements)
  - [Commands](#commands)

## About

A website in a Blog format that should apply a responsive design to work just fine for either desktop or mobile devices. The page has been built with **desktop-first** in mind.

I don't have any plans to make a back-end application to work with this, it's more like a Template (not really).

## Tools

- TypeScript
- NextJS
- React
- Styled Components

The project utilizes the **NextJS framework** to take advantage of SEO. It is also faster due to it's static page nature.

## Running It Locally

### Requirements

- [Node.js](https://nodejs.org/en/);
- [TypeScript](https://www.typescriptlang.org);

### Commands
1. Clone the repo
```
git clone https://github.com/FelipeSSDev/dev-blog.git
```

2. Download dependencies to generate a `node_modules` folder
```
npm install
```

3. Run the project
```
npm run dev
```

**OBS**: The project doesn't ship it's images to the github repo. If you want to mimic it's functionality, you will have to feed the `public/images` folder and modify `posts.json` accordingly.