document.body.classList.add('loaded_hiding');
  window.setTimeout(function () {
    document.body.classList.add('loaded');
    document.body.classList.remove('loaded_hiding');
  }, 1500);

  function getMiddleTaxes(){
    return +(this.tax*this.middleSalary).toFixed(2);
  };
  function getTotalTaxes(){
    return +(this.tax*this.middleSalary*this.vacancies).toFixed(2);
  }
  function getMyTaxes(salary) {
    return +(salary*this.tax).toFixed(2);
  }
  const ukraine = { 
    tax: 0.195, 
    middleSalary: 1789, 
    vacancies: 11476 
  };
  const latvia = { 
    tax: 0.25, 
    middleSalary: 1586, 
    vacancies: 3921 
  };
  const litva = { 
    tax: 0.15, 
    middleSalary: 1509, 
    vacancies: 1114 
  };

  const salaryStyle = ['font-size: 16px;', 'font-weight: 600;', 'color: #464646;', 'background: #dff8f4;'].join('');
  const taxStyle = ['font-size: 16px;', 'font-weight: 600;','color: #464646;', 'background: #dff8f4;'].join('');
  const currentStyle = [[['font-size: 14px;','color: #14006d;', 'font-weight: 700;'].join('')], ["font-size: 14px;"]];
  const salary = [2000, 4000, 1500];
console.group("%c%s", salaryStyle, "Taxes in different countries with a salary:")
  salary.forEach((el) => {
  console.groupCollapsed("%c%s","font-size: 16px;",el)
    console.log(`%c Ukraine: %c${getMyTaxes.call(ukraine, el)}`, currentStyle[0].join(''), currentStyle[1].join(''));
    console.log(`%c Lithuania: %c${getMyTaxes.call(litva, el)}`, currentStyle[0].join(''), currentStyle[1].join(''));
    console.log(`%c Latvia: %c${getMyTaxes.call(latvia, el)}`, currentStyle[0].join(''), currentStyle[1].join(''));
  console.groupEnd();
  });
console.groupEnd();
console.group("%c%s", taxStyle, "Average taxes for an IT professional in different countries");
  console.log(`%c Ukraine: %c${getMiddleTaxes.call(ukraine)}`, currentStyle[0].join(''), currentStyle[1].join(''));
  console.log(`%c Lithuania: %c${getMiddleTaxes.call(litva)}`, currentStyle[0].join(''), currentStyle[1].join(''));
  console.log(`%c Latvia: %c${getMiddleTaxes.call(latvia)}`, currentStyle[0].join(''), currentStyle[1].join(''));
console.groupEnd();

console.group("%c%s", taxStyle, "All taxes are paid by IT specialists in each country");
  console.log(`%c Ukraine: %c${getTotalTaxes.call(ukraine)}`,currentStyle[0].join(''), currentStyle[1].join(''));
  console.log(`%c Lithuania: %c${getTotalTaxes.call(litva)}`, currentStyle[0].join(''), currentStyle[1].join(''));
  console.log(`%c Latvia: %c${getTotalTaxes.call(latvia)}`, currentStyle[0].join(''), currentStyle[1].join(''));
console.groupEnd();
