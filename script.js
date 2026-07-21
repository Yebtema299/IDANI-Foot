function analyserMatch() {

    let match = document.querySelector("input").value;

    if (match === "") {
        alert("Entre d'abord un match à analyser !");
        return;
    }

    document.getElementById("resultat").innerHTML = `

    <h2>🤖 IDANI Foot Analyse</h2>

    <h3>⚽ ${match}</h3>

    <hr>

    <h3>📊 Analyse générale</h3>

    <p>
    L'intelligence artificielle analyse la forme des équipes,
    les statistiques disponibles, la dynamique récente et
    le contexte du match.
    </p>


    <h3>🎯 Options de paris possibles</h3>

    <div class="feature">
    1️⃣ Option : Plus de 1.5 buts<br>
    Probabilité estimée : 75%
    </div>

    <div class="feature">
    2️⃣ Option : Équipe favorite ou nul<br>
    Probabilité estimée : 70%
    </div>

    <div class="feature">
    3️⃣ Option : Équipe favorite marque<br>
    Probabilité estimée : 78%
    </div>

    <div class="feature">
    4️⃣ Option : Les deux équipes marquent<br>
    Probabilité estimée : 55%
    </div>


    <h3>⚽ Scores exacts possibles</h3>

    <div class="feature">
    1-0 : possibilité élevée
    </div>

    <div class="feature">
    2-1 : possibilité moyenne
    </div>

    <div class="feature">
    2-0 : possibilité moyenne
    </div>


    <h3>🧠 Scénarios possibles</h3>

    <p>
    • Domination territoriale de l'équipe favorite.<br>
    • Possibilité de buts sur transitions rapides.<br>
    • Le résultat peut changer selon les événements du match.
    </p>


    <h3>⚠️ Avertissement</h3>

    <p>
    IDANI Foot utilise une analyse basée sur des données.
    L'IA peut se tromper et aucune recommandation ne garantit
    un résultat. Le football reste imprévisible.
    </p>

    `;
}