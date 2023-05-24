const projects = [
    {
        url: 'project-no-1/pr01.html',
        title: 'Projekt#1: Chowanie i odkrywanie obrazka'
    },
    {
        url: 'project-no-2/pr02.html',
        title: 'Projekt#2: Powiększ, pomniejsz i zmień kolor'
    },
    {
        url: 'project-no-3/pr03.html',
        title: 'Projekt#3: RegExp i walidator hasła'
    }
];

const projectList = document.querySelector('ul');

const createProjectList = projects.map(project => `<li><a href="${project.url}">${project.title}</a></li>`).join('');

projectList.insertAdjacentHTML("beforeend", createProjectList);