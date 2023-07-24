const eventInput = document.getElementById("eventInput");
const dateInput = document.getElementById("dateInput")
const sendBtn = document.querySelector("#sendBtn");
const stopBtn= document.getElementById("stopBtn");
const containerPage1 = document.querySelector(".containerPage1")
const containerPage2 = document.querySelector(".containerPage2")
const eventName2 = document.querySelector("#event-name-second-page")


 let interval;
// let days=0;
// let hours=0;
// let minutes=0;
// let seconds=0;

sendBtn.addEventListener('click', startCountdown);
stopBtn.addEventListener('click', stopCountdown);
// // stopBtn.addEventListener('click',StopCountdown);

// function startCountdown(duration, display){

// interval = setInterval((){

     
// },1000)

// }

// Função para formatar o tempo em duas casas decimais
function formatTime(time) {
    return time.toString().padStart(2, "0");
}

function startCountdown() {
    const eventName = eventInput.value;
    const eventDate = new Date(dateInput.value).getTime();

    // Valida se a data foi preenchida corretamente
    if (!eventName || isNaN(eventDate)) {
        alert("Preencha o nome do evento e escolha uma data válida para a contagem regressiva.");
        return;
    }

    // Esconde a página anterior e mostra a página com a contadora regressiva
    containerPage1.style.display = "none";
    containerPage2.style.display = "flex";
    eventName2.textContent = eventName;

    // Elementos para exibir a contadora regressiva
    const daysElement = document.getElementById("days");
    const hoursElement = document.getElementById("hours");
    const minutesElement = document.getElementById("minutes");
    const secondsElement = document.getElementById("seconds");

    // Função para atualizar a contadora regressiva
    function updateCountdown() {
        const now = new Date().getTime();
        const difference = eventDate - now;

        if (difference <= 0) {
            // Contagem regressiva encerrada
            daysElement.textContent = "00";
            hoursElement.textContent = "00";
            minutesElement.textContent = "00";
            secondsElement.textContent = "00";
            clearInterval(interval);
            alert("Contagem regressiva encerrada!");
            return;
        }

        // Calcula os dias, horas, minutos e segundos restantes
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        // Exibe a contadora regressiva na página
        daysElement.textContent = formatTime(days);
        hoursElement.textContent = formatTime(hours);
        minutesElement.textContent = formatTime(minutes);
        secondsElement.textContent = formatTime(seconds);
    }

    // Atualiza a contadora a cada segundo
    interval = setInterval(updateCountdown, 1000);

    
    };

    function preencherInputs(eventData) {
       eventInput.value = eventData;
        // Defina a data manualmente para cada evento
        let eventDate;
        switch (eventData) {
            case "Natal":
                eventDate = "2023-12-25";
                break;
              case "Ano Novo":
                eventDate = "2024-01-01";
                break;
              case "Carnaval":
                eventDate = "2024-03-05";
                break;
              case "Dia das Mães":
                eventDate = "2024-05-12";
                break;
              case "Dia dos Pais":
                eventDate = "2024-08-11";
                break;
              case "Dia dos Namorados":
                eventDate = "2024-06-12";
                break;
              default:
                return;
            }
            dateInput.value = eventDate;
            startCountdown();
        }

    // Botão "Parar Contagem"
    function stopCountdown(){
        clearInterval(interval);
        containerPage1.style.display="flex";
        containerPage2.style.display="none";
        eventInput.value="";
        dateInput.value="";
        // alert("Contagem regressiva parada!");
    }
    

      

