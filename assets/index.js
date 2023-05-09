document.querySelector('.form-control#towerSelect').focus()

document.getElementById("buttonSub").addEventListener("click", function(event){
  event.preventDefault();
  var form = document.querySelector("form");
  var myInput = document.querySelectorAll("[required]")
  var isFormValid = true;
  var formData = {};
  form.querySelectorAll("[required]").forEach(function(input){
      if(input.value.trim() === ""){
          isFormValid = false;
          input.style.borderColor = "red";
      }
      formData[input.name] = input.value;
  });

  if(isFormValid){
    var data = {
    tower: $('#towerSelect').val(),
    floor: $('#floorSelect').val(),
    room: $('#roomSelect').val(),
    date: $('#date-picker').val(),
    startTime: $('#startTimeSelect').val(),
    endTime: $('#endTimeSelect').val(),
    comment: $('#comment').val()
    };
    myInput.forEach(function(myInput){
          myInput.style.borderColor = "#ccc"
      });
    console.log(JSON.stringify(data));
    $('form').trigger('reset');
  }
  else {
    alert("Пожалуйста заполните все обязательные поля!");
  }
});


const resetButton = document.getElementById("buttonRes");
var myInput = document.querySelectorAll("[required]")
resetButton.addEventListener("click", clearBtn);
function clearBtn(){
  myInput.forEach(function(myInput){
  myInput.style.borderColor = "#ccc";
  document.querySelector('.form-control#towerSelect').focus()
});
};


function selectNextList() {
  const elements = document.querySelectorAll("[required]");
    for (let i = 0; i < elements.length; i++) {
      const currentElement = elements[i];
      if (currentElement.value) {
        currentElement.style.borderColor = "#0bf326";
        if (i < elements.length - 1) {
          elements[i+1].focus();
        }
      }
    }
};


function onDateSelected() {
  var currentDate = new Date();
  var currentDay = currentDate.getDate();
  var currentMonth = currentDate.getMonth()+1;
  var selectedDate = new Date(document.getElementById("date-picker").value);
  var selectedDay = selectedDate.getDate();
  var selectedMonth = selectedDate.getMonth()+1;
  var dateError = document.getElementById("date-picker");
  var selectedYear = selectedDate.getFullYear();
  var currentYear = currentDate.getFullYear(); 
    if (selectedMonth<currentMonth) {
      dateError.style.borderColor = "red";
      alert("Вы указали неверный месяц");
    }else if(selectedDay<currentDay){
      dateError.style.borderColor = "red";
      alert("Выбранная дата должна быть сегодня или позже");
    }else if(selectedYear===currentYear){
      dateError.style.borderColor = "#0bf326";
      selectNextList();
    }else{
      dateError.style.borderColor = "yellow";
    }
};


function onTimeSelected(){
  var startTime = document.getElementById("startTimeSelect").value;
  var endTime = document.getElementById("endTimeSelect").value;
  var curEndTime = document.getElementById("endTimeSelect");
    if (startTime!== "" && endTime!== "" && startTime >= endTime) {
      curEndTime.style.borderColor = "red";
      alert("Ошибка: время начала бронирования должно быть меньше времени окончания.");
      return false;
    }else if (endTime == ""){
      selectNextList();
    }else{
      curEndTime.style.borderColor = "#0bf326";
    }
};
  

function filterFunction() {
  var input, filter, options, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  select = document.getElementById("floorSelect");
  options = select.getElementsByTagName("option");
    for (i = 0; i < options.length; i++) {
      txtValue = options[i].textContent || options[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        options[i].style.display = "";
      } else {
          options[i].style.display = "none";
        }
      }
};