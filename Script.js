    function prikaziSporocilo() {
      alert("Pozdravljen! To je sporočilo.");
    }

    function spremeniBarvo() {  
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    }
    function preveriObrazec() {
      let ime = document.getElementById("ime").value.trim();
      let email = document.getElementById("email").value.trim();

      if (ime === "" || email === "") {
        alert("Prosim, izpolnite vsa polja obrazca.");
        return false;
      }

      alert("Obrazec je uspešno poslan!");
      return true;
    }
