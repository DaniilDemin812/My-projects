
    
         var person = {
                "SNILS 1": ["Иванов", "Иван", "Иванович", 15, "мая", 1974, "м", "Исполнено"],
                "SNILS 2": ["Сидоров", "Петр", "Сидорович", 20, "мая", 1980, "м", "Медотвод"],
                "SNILS 3": ["Демин", "Даниил", "Дмитриевич", 4, "марта", 2002, "м", "Назначено"],
            };
            console.log(person);
            let SNILS;
            SNILS = prompt("Введите SNILS пациента", SNILS);
            infoname = person[SNILS];
            console.log(infoname);
            alert("Информация о пациенте" + infoname);
        
            // Извлекаем информацию о текущем статусе прививки 
            statusPriv = person[SNILS][7];
            console.log( statusPriv);
            // Проверяем возможность изменения статуса
            if (statusPriv === "Исполнено") {
                alert("Отказано в прививке пациенту" + infoname);
            } else if (statusPriv === "Медотвод") {
                alert("Отказано в прививке пациенту" + infoname);
            } else {
                alert("Исполнить прививку пациенту" + infoname);
            }
            ForSecond = FirstFunction(person, SNILS);
            SecondFunction(statusPriv, infoname);
            //Предлагаем закончить или продолжить работу в этом окне
            while (confirm("Продолжить проверку прививочного статуса?")) {
                ForSecond = FirstFunction(person, SNILS);
                SecondFunction(statusPriv, infoname);

            }
        