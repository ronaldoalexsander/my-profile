function showProfile() {
    let profileCard = document.getElementById("profileCard");
    profileCard.style.opacity = 1;
    profileCard.style.transform = "translateY(0)";
  }

  function closeProfile() {
    let profileCard = document.getElementById("profileCard");
    profileCard.style.opacity = 0;
    profileCard.style.transform = "translateY(20px)";
  }