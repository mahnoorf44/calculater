
  const inputBox = document.getElementById('inputbox');
  const buttons = document.querySelectorAll('button');

  let input = '';

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const value = button.textContent;

      if (value === 'AC') {
        input = '';
      } else if (value === 'DEL') {
        input = input.slice(0, -1);
      } else if (value === '=') {
        try {
          input = eval(input).toString(); // Be cautious using eval, only use for trusted input
        } catch {
          input = 'Error';
        }
      } else {
        input += value;
      }

      inputBox.value = input;
    });
  })


  