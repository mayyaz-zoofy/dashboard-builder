### Getting Started / Instalation
- This application is built using ReactJS
- To setup on local clone below repo
  [https://github.com/mayyaz-zoofy/dashboard-builder.git](https://github.com/mayyaz-zoofy/dashboard-builder.git "https://github.com/mayyaz-zoofy/dashboard-builder.git")
- Checkout to code directory and rn `yarn install` or `npm install` to install all dependencies
- If there occurs any conflicts between global and local package or dependencies are not correctly installed for specific package then run following command
  `npx install-peerdeps --dev {package name}`
- Lastly after all packages are installed run `yarn start` or `npm start` and have a look at dashboard


### Major Packages
[ReactJS](https://reactjs.org "ReactJS")
[Material UI](https://material-ui.com/ "Material UI")
[ReCharts](https://recharts.org/ "ReCharts")
[React Router](https://reactrouter.com/ "React Router")
[Tailwindcss](https://tailwindcss.com "Tailwindcss")


### Initiator
- Initiator file are available at `src/configs/initiators`. For now there is only on file in initiators directory which can construct a dashboard which resembles the one attached with assignment
- There are three main parts in initiator
  Theme
  Content (Body)
  Layout


### Components for Content (Body)
There are   types of components available right now for creating a dashboard in this application
1. Div
2. Html Content
3. Stat
4. Line Graph
5. Pie Graph
6. Bar Graph
7. Linear Progress
8. Circular Progress
9. Pills (for filters)
10. Table
11. Badge
12. Image
13. Link (Anchor Tag)

You can see all available options for each component from initiator file itself


###Styles and Theme
For theme available in initiator file you can use Matrerial UI theme json as the main UI framework in this application is Material UI. You can see reference of theme json from following link
[https://material-ui.com/customization/default-theme/](https://material-ui.com/customization/default-theme/ "https://material-ui.com/customization/default-theme/")

You can also add css classes of most the components and for these classes you can use any class available in [Tailwindcss](https://tailwindcss.com/docs "Tailwindcss"). Tailwind is a css utility library with a huge collection of css classes. These classes with be applied to the root of component and will be useful for spacing and layout scenerios


###Contact
In case of any questions or feedback you can contact me
Email: sheikhmohsin40@gmail.com
Skype: live:sheikhmohsin40_1