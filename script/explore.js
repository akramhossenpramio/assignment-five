

document.getElementById("discover-new").addEventListener("click", function() {
    window.location.href = "blog.html";
});


const completeButtons = document.querySelectorAll("#complete-button");
const currentTaskElement = document.getElementById("taskCount");
const completedCountElement = document.getElementById("completedCount"); 
const historySection = document.getElementById("history-section");

completeButtons.forEach(button => {
  button.addEventListener('click', () => {
    if (!button.disabled) {
      button.disabled = true;
      
      const remainingTask = parseInt(currentTaskElement.innerText) - 1;
      currentTaskElement.innerText = remainingTask;

      const completedTasks = parseInt(completedCountElement.innerText) + 1;
      completedCountElement.innerText = completedTasks;

      alert("Board updated Successfully");

      const currentTime = new Date().toLocaleTimeString();
      const historyMessage = document.createElement("p");
      historyMessage.innerText = `You have completed the task Fix Mobile Button issue at ${currentTime}`;
      historySection.appendChild(historyMessage);
    

      const colorChanger = document.getElementById('colorChanger');
      const colors = ['#FF5733', '#33FF57', '#5733FF', '#FFFF33', '#33FFFF']; 
      let colorIndex = 0;
      
      colorChanger.addEventListener('click', function() {
          document.body.style.backgroundColor = colors[colorIndex];
          colorIndex = (colorIndex + 1) % colors.length; 
      });

     
    }
  });
});
