function prikaziSporocilo() {
    alert("Rdečega gumba se ne pritiska!");
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
  function showImage(imgElement) {
    const previewSection = document.getElementById('preview');
    const previewImg = document.getElementById('previewImg');
    previewImg.src = imgElement.src;
    previewSection.classList.remove('hidden');
  }

    function boom(){
    window.location.href='boom.html'
  }
