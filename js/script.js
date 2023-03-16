/*
 window.addEventListener('load', () => {
    const form = document.getElementById('empForm');

    const handleSubmit = (event) => {
      event.preventDefault(); // prevent default form submission behavior
  
      const id = document.getElementById('id').value;
      const name = document.getElementById('name').value;
      const ext = document.getElementById('ext').value;
      const email = document.getElementById('email').value;
      const department = document.getElementById('department').value;

      console.log(`ID: ${id}`);
      console.log(`Name: ${name}`);
      console.log(`Extension: ${ext}`);
      console.log(`Email: ${email}`);
      console.log(`Department: ${department}`);
    };
    form.addEventListener('submit', handleSubmit);
  });
  */

// I HATE THAT YOU MADE ME DO THIS IN LESS THAN 15 LINES OF CODE, BUT HERE YOU GO
// 12 LINES

/*
window.addEventListener('load', () => {
    const form = document.getElementById('empForm');
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const f = event.target;
      console.log(`ID: ${f.id.value}`);
      console.log(`Name: ${f.name.value}`);
      console.log(`Extension: ${f.ext.value}`);
      console.log(`Email: ${f.email.value}`);
      console.log(`Department: ${f.department.value}`);
    });
  });
*/  

// 7 LINES
  window.addEventListener('load', () => {
    const form = document.getElementById('empForm');
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      form.querySelectorAll('input').forEach(input => console.log(`${input.id}: ${input.value}`));
    });
  });
  