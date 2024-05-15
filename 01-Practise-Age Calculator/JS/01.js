//Yazdığımız fonksiyonu düzenleyelim
function calculateAge() {
    //1--Input ve result elementlerini seçip değer atayalım
    const txtDay = document.querySelector("#txtDay");
    const txtMonth = document.querySelector("#txtMonth");
    const txtYear = document.querySelector("#txtYear");
    const lblYears = document.querySelector("#lblYears");
    const lblMonths = document.querySelector("#lblMonths");
    const lblDays = document.querySelector("#lblDays");

    //Mevcut tarih ve saati alalım
    const currentDateTime = new Date();

    //2--Inputların değerlerini number olarak alıp değişkenlere atayalım
    const day = Number(txtDay.value);
    const month = Number(txtMonth.value);
    const year = Number(txtYear.value);


    //3--Input degerlerinin validasyonunu yapalım
    if (!day || day < 1 || day > 31) {
        alert("Invalida day value");
        return;
    }

    if (!month || month < 1 || month > 12) {
        alert("Invalid month value");
        return;
    }
    //Güncel yılı alıyoruz
    const currentYear = currentDateTime.getFullYear();



    if (!year || year < currentYear - 150 || year > currentYear) {
        alert("Invalid year value");
        return;
    }

    const birthDate = new Date(year, month - 1, day);

    if (birthDate > currentDateTime) {
        alert("Invalid birtdate value");
        return;
    }

    //4-- Hesaplamaları yapalım
    //Guncel ay ı alıyoruz
    const currentMonth = currentDateTime.getMonth() + 1;
    //Guncel gun u alıyoruz
    const currentDay = currentDateTime.getDate();

    let ageYears = currentYear - year;
    let ageMonths = currentMonth - month;
    let ageDays = currentDay - day;

    //06.05.2024
    //03.02.2000
    //03.03.24 olarak sonuç vermeli  


    //Ancak
    //06.05.2024
    //09.07.2000 şeklindeo olduğunda doğum tarihi gün ve ayı güncel gün ve aydan büyük olduğu için çıkarma işleminde hata olur ve yıldan ay alarak bu işlemi yapmalıyız Bunun düzenlemesini de aşağıda yapalım

    if (ageDays < 0) {
        ageDays += 30;
        ageMonths--;
    }
    if (ageMonths < 0) {
        ageMonths += 12;
        ageYears--;
    }

    //Sonucu gosterelim
    lblYears.textContent = ageYears;
    lblMonths.textContent = ageMonths;
    lblDays.textContent = ageDays;








}