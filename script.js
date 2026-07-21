function analyserMatch() {

    let match = document.querySelector("input").value;

    if (match === "") {
        alert("Entre d'abord un match à analyser !");
        return;
    }

    alert(
        "🤖 IDANI Foot analyse : " + match +
        "\n\nAnalyse en cours...\n\n" +
        "📊 Forme des équipes\n" +
        "⚽ Statistiques\n" +
        "🧠 Analyse tactique\n" +
        "👥 Joueurs importants\n" +
        "📰 Informations récentes"
    );

}