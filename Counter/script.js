let num = 0;

const value = document.querySelector(".value");
const btns = document.querySelectorAll(".btn");
/* reason of chossing a let insted of const is this vakue is going to change by tapping the increse , decrease and reset button 
 query selector only returns the first mathcing result
 to resolve this issue we will use query selector all method here: */

/*it will return all nodes in console, and the nodelist is accessed by the index-number and the index is accessed by the for-each loop, so i will use for-each loop here:  */

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      num--;
    } else if (styles.contains("increase")) {
      num++;
    } else {
      num = 0;
    }
    // styling the color on values 
    value.textContent = num;
    if (num > 0) {
      value.style.color = "green";
    } else if (num < 0) {
      value.style.color = "red";
    } else {
      value.style.color = "black";
    }
  });
});