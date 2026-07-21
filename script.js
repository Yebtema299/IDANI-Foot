function analyserMatch() {

    let match = document.querySelector("input").value;

    if (match === "") {
        alert("Entre d'abord un match à analyser !");
        return;
    }

    document.getElementById("resultat").innerHTML = `
    
    <h2>🤖 Analyse de ${match}</h2>

    <p>⏳ Analyse IA terminée</p>

    <div class="feature">
    📊 Forme des équipes : en cours d'étude
    </div>

    <div class="feature">
    ⚽ Statistiques : données en préparation
    </div>

    <div class="feature">
    👥 Joueurs importants et absences
    </div>

    <div class="feature">
    🧠 Scénarios possibles du match
    </div>

    <div class="feature">
    📌 Simulation : analyse générée par IA
    </div>

    `;

}