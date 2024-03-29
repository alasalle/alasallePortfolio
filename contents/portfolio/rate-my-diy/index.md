---
title: Rate My DIY
description: A React application served by a GraphQL server, built with Apollo and Prisma, enabling users to create, share, rate and review DIY projects.
date: 2019-05-20
template: portfolio
image: ./RMDIYhome.png
---

`youtube: Boq4KYMVrJs`

Rate My DIY was a 12 week long part-time project that enables users to post DIY projects, rate and comment on other projects and reviews. On the front end, we created a React application that employed react-apollo to connect to our server, Redux for state management, and Firebase for authentication. On the backend, we created a GraphQL server with graphql-yoga, accessed and managed through nexus-prisma. The scope of our project was fairly ambitious; along with learning many new technologies (GraphQL, Prisma, Nexus, Apollo, etc.). I primarily served as a backend developer for this project and my core contributions include assembling the GraphQL server with Prisma and guiding the frontend team in making use of the server to build out project creation functionality, and review functionality.

Tech Stack: React | SCSS | GraphQL | Prisma | PostgreSQL

<a href="https://github.com/alasalle/rmdiy" target="_blank" rel="noopener noreferrer">Link to codebase</a>

Core functionality is covered below:

[row][col]
![image](./HomeAndNav.gif)

Home page which aggregates featured projects (highest rated projects in the last month), popular makers (those who have been active on the site in the last month), and popular reviewers (reviewers whose reviews have amassed the most likes in the past month). This gif also highlights the nav sidebar functionality.

[/col][/row]

[row][col]
![image](./Profile.gif)

Profile page where a users' activity is displayed. This includes their projects and reviews, along with the projects that the user has rated and reviews that the user has liked.

[/col][/row]

[row][col]
![image](./CreateAProject.gif)

Create Project page where users can create a project, including a title, a main image, steps and related images.

[/col][/row]

[row][col]
![image](./Review.gif)

Create Review drop down functionality to review and rate projects.

[/col][/row]

[row][col]
![image](./RateReview.gif)

Review modal with like and dislike functionality. Users may only like or dislike once and may only do one of the two.

[/col][/row]

[row][col]
![image](./Search.gif)

Search functionality allowing users to search across the whole site for users, projects, and/or reviews. Further filtering of projects by rating and category. Sorting functionality for any/all selections.

[/col][/row]

[row][col]
<a href="https://alasallelabs.netlify.com/" target="_blank" rel="noopener noreferrer">Development Blog</a>

A blog that details my contributions to and general experience during the development of Rate My DIY.
[/col][/row]
