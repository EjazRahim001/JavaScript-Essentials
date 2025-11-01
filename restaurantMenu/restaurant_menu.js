const breakfastMenu = ['Pancakes- Rs 200', 'Eggs Benedict- Rs 300', 'Oatmeal- Rs 300', 'Frittata- Rs 400'];
const mainCourseMenu = ['Steak- Rs 700', 'Pasta- Rs 800', 'Burger- Rs 350', 'Salmon- Rs 400'];
const dessertMenu = ['Cake- Rs 200', 'Ice Cream- Rs 300', 'Pudding- Rs 400', 'Fruit Salad- Rs-150'];
// map method
 const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
        document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;
 //foreach method

  let mainCourseItem = '';
mainCourseMenu.forEach((item, index) => {
mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;});
document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;
//for loop

let dessertItem = '';
for (let i = 0; i < dessertMenu.length; i++) {
    dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;}
document.getElementById('dessertMenuItems').innerHTML = dessertItem;