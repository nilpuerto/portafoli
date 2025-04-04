document.addEventListener('DOMContentLoaded', () => {
    const titles = document.querySelectorAll('.txtTitle');
    const sections = document.querySelectorAll('.section');

    function setActiveSection(titleId, sectionId) {
       
        titles.forEach(title => title.classList.remove('active'));
       
        document.getElementById(titleId).classList.add('active');

      
        sections.forEach(section => section.classList.remove('active'));
        
        document.getElementById(sectionId).classList.add('active');
    }

   
    document.getElementById('title1').addEventListener('click', () => {
        setActiveSection('title1', 'portfoli1');
    });

    document.getElementById('title2').addEventListener('click', () => {
        setActiveSection('title2', 'projectes');
    });

    document.getElementById('title3').addEventListener('click', () => {
        setActiveSection('title3', 'contacte');
    });

    document.getElementById('title4').addEventListener('click', () => {
        setActiveSection('title4', 'tecnologies');
    });

   
    setActiveSection('title1', 'portfoli1');
});

